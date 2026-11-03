const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

async function captureDevice(name, width, height, clipY = 0, isMobile = false) {
  return new Promise((resolve) => {
    const port = 9224;
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
        if (!page) {
          chrome.kill();
          return resolve();
        }

        const ws = new WebSocket(page.webSocketDebuggerUrl);
        ws.onopen = () => {
          ws.send(JSON.stringify({
            id: 1,
            method: 'Emulation.setDeviceMetricsOverride',
            params: {
              width: width,
              height: height,
              deviceScaleFactor: 1,
              mobile: isMobile
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
                  y: clipY,
                  width: width,
                  height: height,
                  scale: 1
                }
              }
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
  console.log('Capturing desktop hero and header...');
  await captureDevice('theme_desktop_hero', 1280, 850, 0, false);
  console.log('Capturing mobile hero and header...');
  await captureDevice('theme_mobile_hero', 390, 844, 0, true);
  console.log('Capturing sections below hero...');
  await captureDevice('theme_desktop_sections', 1280, 900, 750, false);
  console.log('All theme screenshots captured!');
})();
