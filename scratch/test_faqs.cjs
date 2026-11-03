const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

(async () => {
  const port = 9291;
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
      if (!page) { chrome.kill(); return; }

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
                const el = document.querySelector('#faqs');
                if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
              `
            }
          }));
        } else if (msg.id === 2) {
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 3,
              method: 'Page.captureScreenshot',
              params: { format: 'png' }
            }));
          }, 500);
        } else if (msg.id === 3) {
          const buffer = Buffer.from(msg.result.data, 'base64');
          fs.writeFileSync(`${baseDir}\\instant_faqs.png`, buffer);
          console.log('Saved instant_faqs.png');
          ws.close();
          chrome.kill();
        }
      };
    } catch(e) {
      console.error(e);
      chrome.kill();
    }
  }, 1500);
})();
