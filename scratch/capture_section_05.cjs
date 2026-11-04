const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const port = 9399;
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  `--remote-debugging-port=${port}`,
  '--window-size=1280,1350',
  'http://localhost:3000/#payroll-overview'
]);

setTimeout(async () => {
  try {
    const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
    const pageTab = tabs.find(t => t.type === 'page');
    const ws = new globalThis.WebSocket(pageTab.webSocketDebuggerUrl);

    let id = 1;
    const send = (method, params = {}) => new Promise(resolve => {
      const msgId = id++;
      const handler = evt => {
        const msg = JSON.parse(evt.data);
        if (msg.id === msgId) {
          ws.removeEventListener('message', handler);
          resolve(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });

    ws.addEventListener('open', async () => {
      await send('Runtime.enable');
      await send('Page.enable');
      await new Promise(r => setTimeout(r, 1500));

      await send('Runtime.evaluate', {
        expression: `(() => {
          const el = document.getElementById("payroll-overview");
          if (el) {
            el.scrollIntoView({ behavior: "instant", block: "start" });
            window.scrollBy(0, -60);
          }
        })()`
      });

      await new Promise(r => setTimeout(r, 800));

      const screenshot = await send('Page.captureScreenshot', {
        format: 'png'
      });

      const outPath = 'C:\\\\Users\\\\sah05\\\\.gemini\\\\antigravity\\\\brain\\\\74102ae1-3e00-459a-bf7a-359ebfd6f78a\\\\verify_section_05_enhanced.png';
      fs.writeFileSync(outPath, Buffer.from(screenshot.data, 'base64'));
      console.log('Saved screenshot to:', outPath);

      chrome.kill();
      process.exit(0);
    });
  } catch (err) {
    console.error('Error during capture:', err);
    chrome.kill();
    process.exit(1);
  }
}, 2000);
