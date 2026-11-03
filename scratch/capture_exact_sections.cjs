const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function captureAt(name, topY, height, port) {
  return new Promise((resolve) => {
    const chrome = spawn(chromePath, [
      '--headless',
      `--remote-debugging-port=${port}`,
      '--disable-gpu',
      'http://localhost:3000/'
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
            params: {
              width: 1280,
              height: topY + height + 500,
              deviceScaleFactor: 1,
              mobile: false
            }
          }));
        };

        ws.onmessage = (evt) => {
          const msg = JSON.parse(evt.data);
          if (msg.id === 1) {
            ws.send(JSON.stringify({
              id: 2,
              method: 'Page.captureScreenshot',
              params: {
                format: 'png',
                clip: {
                  x: 0,
                  y: topY,
                  width: 1280,
                  height: height,
                  scale: 1
                }
              }
            }));
          } else if (msg.id === 2) {
            const buffer = Buffer.from(msg.result.data, 'base64');
            fs.writeFileSync(`${baseDir}\\${name}.png`, buffer);
            console.log(`Saved ${name}.png (y=${topY})`);
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
  console.log('Capturing core-modules...');
  await captureAt('site_01_modules', 1200, 750, 9250);
  await delay(1000);

  console.log('Capturing indian-context...');
  await captureAt('site_02_indian_context', 2450, 850, 9251);
  await delay(1000);

  console.log('Capturing payroll...');
  await captureAt('site_03_payroll', 3960, 850, 9252);
  await delay(1000);

  console.log('Capturing apaar...');
  await captureAt('site_04_apaar', 5530, 850, 9253);
  await delay(1000);

  console.log('Capturing contact & faqs...');
  await captureAt('site_05_contact', 8360, 850, 9254);
  console.log('Done capturing all sections!');
})();
