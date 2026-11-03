const { spawn } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const os = require('os');
const path = require('path');
const fs = require('fs');

const port = 9322;
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
    
    ws.addEventListener('message', evt => {
      const msg = JSON.parse(evt.data);
      if (msg.method === 'Runtime.consoleAPICalled') {
        console.log('[BROWSER CONSOLE]', msg.params.type, msg.params.args.map(a => a.value || a.description));
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        console.error('[BROWSER EXCEPTION]', msg.params.exceptionDetails);
      }
    });

    ws.addEventListener('open', async () => {
      await send('Page.enable');
      await send('Runtime.enable');
      
      console.log('Navigating to http://127.0.0.1:3000/ ...');
      await send('Page.navigate', { url: 'http://127.0.0.1:3000/' });
      
      setTimeout(async () => {
        const evalRes = await send('Runtime.evaluate', {
          expression: 'document.getElementById("root") ? document.getElementById("root").innerHTML.slice(0, 300) : "NO ROOT"',
          returnByValue: true
        });
        console.log('ROOT RESULT:\n', evalRes.result.value);
        
        chrome.kill();
        process.exit(0);
      }, 3000);
    });
  } catch(e) {
    console.error('Fatal error:', e);
    chrome.kill();
    process.exit(1);
  }
}, 1200);
