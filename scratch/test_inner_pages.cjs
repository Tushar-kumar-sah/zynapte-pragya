const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function capturePage(name, path, port) {
  return new Promise((resolve) => {
    const chrome = spawn(chromePath, [
      '--headless',
      `--remote-debugging-port=${port}`,
      '--disable-gpu',
      `http://localhost:3000${path}`
    ]);

    setTimeout(async () => {
      try {
        const listRes = await fetch(`http://127.0.0.1:${port}/json/list`);
        const targets = await listRes.json();
        const page = targets.find(t => t.type === 'page');
        if (!page) { chrome.kill(); return resolve(); }

        const ws = new WebSocket(page.webSocketDebuggerUrl);
        ws.onopen = () => {
          ws.send(JSON.stringify({
            id: 1,
            method: 'Emulation.setDeviceMetricsOverride',
            params: { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false }
          }));
        };

        ws.onmessage = async (evt) => {
          const msg = JSON.parse(evt.data);
          if (msg.id === 1) {
            ws.send(JSON.stringify({
              id: 2,
              method: 'Page.captureScreenshot',
              params: { format: 'png' }
            }));
          } else if (msg.id === 2) {
            const buffer = Buffer.from(msg.result.data, 'base64');
            fs.writeFileSync(`${baseDir}\\${name}.png`, buffer);
            console.log(`Saved ${name}.png`);
            ws.close();
            chrome.kill();
            resolve();
          }
        };
      } catch (err) {
        console.error('Error:', err);
        chrome.kill();
        resolve();
      }
    }, 1500);
  });
}

(async () => {
  console.log('Capturing /features...');
  await capturePage('page_features', '/features', 9295);
  await delay(1000);

  console.log('Capturing /pricing...');
  await capturePage('page_pricing', '/pricing', 9296);
  console.log('Done capturing inner pages!');
})();
