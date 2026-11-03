const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const port = 9346;
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  `--remote-debugging-port=${port}`,
  '--window-size=1280,1000',
  'http://localhost:3000/apaar-readiness'
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
      
      await new Promise(r => setTimeout(r, 1500));

      // Scroll directly to how-to-get
      await send('Runtime.evaluate', { 
        expression: `
          const el = document.getElementById("how-to-get");
          if (el) {
            const rect = el.getBoundingClientRect();
            window.scrollTo(0, window.scrollY + rect.top - 80);
          }
        ` 
      });
      await new Promise(r => setTimeout(r, 600));
      let shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${artifactDir}\\apaar_how_captured_precise.png`, Buffer.from(shot.data, 'base64'));
      console.log('Saved apaar_how_captured_precise.png');

      // Scroll to live tracker console
      await send('Runtime.evaluate', { 
        expression: `
          const el = document.getElementById("tracker");
          if (el) {
            const rect = el.getBoundingClientRect();
            window.scrollTo(0, window.scrollY + rect.top - 80);
          }
        ` 
      });
      await new Promise(r => setTimeout(r, 600));
      shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${artifactDir}\\apaar_tracker_captured.png`, Buffer.from(shot.data, 'base64'));
      console.log('Saved apaar_tracker_captured.png');

      chrome.kill();
      process.exit(0);
    });
  } catch (err) {
    console.error(err);
    chrome.kill();
    process.exit(1);
  }
}, 2500);
