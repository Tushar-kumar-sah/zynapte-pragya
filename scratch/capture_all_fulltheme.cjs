const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function captureShot(name, width, height, scrollY = 0, isMobile = false) {
  return new Promise((resolve) => {
    const port = 9230;
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
              width: width,
              height: Math.max(height + scrollY, 2000),
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
                  y: scrollY,
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
  console.log('1. Capturing Desktop Hero...');
  await captureShot('fulltheme_desktop_hero', 1280, 850, 0, false);
  await delay(800);

  console.log('2. Capturing Core Modules...');
  await captureShot('fulltheme_modules', 1280, 850, 720, false);
  await delay(800);

  console.log('3. Capturing Indian Schools Section...');
  await captureShot('fulltheme_indian_schools', 1280, 850, 1500, false);
  await delay(800);

  console.log('4. Capturing Payroll & Advantage...');
  await captureShot('fulltheme_payroll', 1280, 850, 2300, false);
  await delay(800);

  console.log('5. Capturing APAAR Engine...');
  await captureShot('fulltheme_apaar', 1280, 850, 3100, false);
  await delay(800);

  console.log('6. Capturing Mobile 390px Hero...');
  await captureShot('fulltheme_mobile_hero', 390, 844, 0, true);
  await delay(800);

  console.log('7. Capturing Mobile 390px Modules...');
  await captureShot('fulltheme_mobile_modules', 390, 844, 750, true);

  console.log('All screenshots captured!');
})();
