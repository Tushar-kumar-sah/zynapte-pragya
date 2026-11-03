const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function captureElement(name, selector, port) {
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
            params: { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false }
          }));
        };

        ws.onmessage = async (evt) => {
          const msg = JSON.parse(evt.data);
          if (msg.id === 1) {
            ws.send(JSON.stringify({
              id: 2,
              method: 'Runtime.evaluate',
              params: {
                expression: `
                  const el = document.querySelector('${selector}');
                  if (el) el.scrollIntoView({ block: 'start' });
                `
              }
            }));
          } else if (msg.id === 2) {
            await delay(400); // Wait for paint after scroll
            ws.send(JSON.stringify({
              id: 3,
              method: 'Page.captureScreenshot',
              params: { format: 'png' }
            }));
          } else if (msg.id === 3) {
            const buffer = Buffer.from(msg.result.data, 'base64');
            fs.writeFileSync(`${baseDir}\\${name}.png`, buffer);
            console.log(`Saved ${name}.png for ${selector}`);
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
  console.log('Capturing Indian Schools section by scroll...');
  await captureElement('scroll_indian_schools', '#indian-context', 9280);
  await delay(800);

  console.log('Capturing Payroll section by scroll...');
  await captureElement('scroll_payroll', '#payroll-section', 9281);
  await delay(800);

  console.log('Capturing Contact DemoForm by scroll...');
  await captureElement('scroll_contact', '#contact', 9282);
  await delay(800);

  console.log('Capturing FAQs by scroll...');
  await captureElement('scroll_faqs', '#faqs', 9283);
  console.log('Done capturing via scrollIntoView!');
})();
