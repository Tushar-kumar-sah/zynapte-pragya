const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const port = 9368;
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  `--remote-debugging-port=${port}`,
  '--window-size=1380,1050',
  'http://localhost:3000/'
]);

const artifactDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

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
      await new Promise(r => setTimeout(r, 1200));

      // Scroll to core-modules section
      await send('Runtime.evaluate', { 
        expression: 'const el = document.querySelector("#core-modules"); if(el) el.scrollIntoView({ block: "start", behavior: "instant" });' 
      });
      await new Promise(r => setTimeout(r, 600));

      const snap1 = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(artifactDir, 'verify_core_modules_vibrant.png'), Buffer.from(snap1.data, 'base64'));
      console.log('Saved verify_core_modules_vibrant.png');

      // Scroll slightly down to capture the bottom cards and ribbon
      await send('Runtime.evaluate', { 
        expression: 'window.scrollBy({ top: 480, behavior: "instant" });' 
      });
      await new Promise(r => setTimeout(r, 500));

      const snap2 = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(artifactDir, 'verify_core_modules_bottom.png'), Buffer.from(snap2.data, 'base64'));
      console.log('Saved verify_core_modules_bottom.png');

      ws.close();
      chrome.kill();
      process.exit(0);
    });
  } catch (err) {
    console.error('Error in capture script:', err);
    chrome.kill();
    process.exit(1);
  }
}, 1500);
