const { spawn } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const os = require('os');
const path = require('path');
const fs = require('fs');

const port = 9288;
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-test-'));
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
      await send('Console.enable');
      await send('Runtime.enable');
      await send('Page.enable');
      
      ws.addEventListener('message', evt => {
        const msg = JSON.parse(evt.data);
        if (msg.method === 'Console.messageAdded') {
          console.log('[BROWSER CONSOLE]', msg.params.message.text);
        }
        if (msg.method === 'Runtime.exceptionThrown') {
          console.error('[BROWSER EXCEPTION]', msg.params.exceptionDetails);
        }
      });
      
      await send('Page.navigate', { url: 'http://localhost:3000/' });
      
      setTimeout(async () => {
        const evalRes = await send('Runtime.evaluate', {
          expression: 'document.getElementById("root").innerHTML.length'
        });
        console.log('Root innerHTML length:', evalRes.result.value);
        
        const captureRes = await send('Page.captureScreenshot', { format: 'png' });
        const buf = Buffer.from(captureRes.data, 'base64');
        fs.writeFileSync('C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a\\cdp_test_screenshot.png', buf);
        console.log('Saved cdp_test_screenshot.png, size:', buf.length);
        
        chrome.kill();
        process.exit(0);
      }, 2000);
    });
  } catch(e) {
    console.error(e);
    chrome.kill();
    process.exit(1);
  }
}, 1000);
