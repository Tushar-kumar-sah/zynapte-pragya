const { spawn } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const os = require('os');
const path = require('path');
const fs = require('fs');

const port = 9310;
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-diag-'));
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  `--user-data-dir=${tmpDir}`,
  `--remote-debugging-port=${port}`,
  'about:blank'
]);

setTimeout(async () => {
  try {
    const res = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await res.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;
    const ws = new globalThis.WebSocket(wsUrl);
    
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
      await send('Page.enable');
      await send('Runtime.enable');
      
      await send('Page.navigate', { url: 'http://localhost:3001/' });
      
      setTimeout(async () => {
        const evalRes = await send('Runtime.evaluate', {
          expression: 'document.documentElement.outerHTML'
        });
        console.log('FULL HTML:\n', evalRes.result.value);
        chrome.kill();
        process.exit(0);
      }, 2000);
    });
  } catch(e) {
    console.error('Fatal error in script:', e);
    chrome.kill();
    process.exit(1);
  }
}, 1200);
