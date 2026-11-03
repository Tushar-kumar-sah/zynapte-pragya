const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function capture(name, width, height, scrollY = 0, isMobile = false) {
  return new Promise((resolve) => {
    const port = 9225;
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
              height: 2500, // Large enough viewport
              deviceScaleFactor: 1,
              mobile: isMobile
            }
          }));
        };

        ws.onmessage = async (evt) => {
          const msg = JSON.parse(evt.data);
          if (msg.id === 1) {
            // Scroll if needed
            if (scrollY > 0) {
              ws.send(JSON.stringify({
                id: 2,
                method: 'Runtime.evaluate',
                params: { expression: `window.scrollTo(0, ${scrollY});` }
              }));
            } else {
              takeShot();
            }
          } else if (msg.id === 2) {
            await delay(200);
            takeShot();
          } else if (msg.id === 3) {
            const buffer = Buffer.from(msg.result.data, 'base64');
            fs.writeFileSync(`${baseDir}\\${name}.png`, buffer);
            console.log(`Saved ${name}.png`);
            ws.close();
            chrome.kill();
            resolve();
          }
        };

        function takeShot() {
          ws.send(JSON.stringify({
            id: 3,
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
        }
      } catch (err) {
        console.error('Error:', err);
        chrome.kill();
        resolve();
      }
    }, 1500);
  });
}

(async () => {
  console.log('1. Capturing Mobile 390px...');
  await capture('theme_mobile_390', 390, 844, 0, true);
  await delay(1000);
  console.log('2. Capturing Tablet 820px...');
  await capture('theme_tablet_820', 820, 900, 0, false);
  await delay(1000);
  console.log('3. Capturing Desktop Modules & Sections...');
  await capture('theme_desktop_modules', 1280, 850, 680, false);
  await delay(1000);
  console.log('4. Capturing Desktop Payroll & Advantage...');
  await capture('theme_desktop_payroll', 1280, 850, 1500, false);
  console.log('All captures done!');
})();
