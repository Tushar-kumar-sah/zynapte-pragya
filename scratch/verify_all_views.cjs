const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function captureShot(name, width, height, topY, isMobile, port) {
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
              width: width,
              height: topY + height + 200,
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
                  y: topY,
                  width: width,
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
  console.log('1. Mobile Modules (390px)...');
  await captureShot('mobile_modules_390', 390, 800, 1545, true, 9270);
  await delay(1000);

  console.log('2. Desktop Indian Context (1280px)...');
  await captureShot('desktop_indian_context', 1280, 850, 1920, false, 9271);
  await delay(1000);

  console.log('3. Desktop Payroll (1280px)...');
  await captureShot('desktop_payroll_view', 1280, 850, 2750, false, 9272);
  await delay(1000);

  console.log('4. Desktop Contact & FAQ (1280px)...');
  await captureShot('desktop_contact_faq', 1280, 850, 6400, false, 9273);
  console.log('All verification captures completed!');
})();
