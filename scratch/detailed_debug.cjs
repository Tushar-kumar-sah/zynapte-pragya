const { spawn } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const port = 9299;
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
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
      if (msg.method === 'Runtime.exceptionThrown') {
        console.error('EXCEPTION:', JSON.stringify(msg.params.exceptionDetails));
      }
      if (msg.method === 'Log.entryAdded') {
        console.log('LOG:', JSON.stringify(msg.params.entry));
      }
      if (msg.method === 'Network.responseReceived') {
        console.log('NET:', msg.params.response.status, msg.params.response.url);
      }
      if (msg.method === 'Network.loadingFailed') {
        console.error('NET FAIL:', msg.params.errorText, msg.params.type);
      }
    });

    ws.addEventListener('open', async () => {
      await send('Page.enable');
      await send('Runtime.enable');
      await send('Log.enable');
      await send('Network.enable');
      
      console.log('Navigating to http://localhost:3000/ ...');
      await send('Page.navigate', { url: 'http://localhost:3000/' });
      
      setTimeout(async () => {
        const htmlRes = await send('Runtime.evaluate', { expression: 'document.body.innerHTML' });
        console.log('BODY HTML LENGTH:', htmlRes.result.value ? htmlRes.result.value.length : 0);
        chrome.kill();
        process.exit(0);
      }, 3000);
    });
  } catch(e) {
    console.error(e);
    chrome.kill();
    process.exit(1);
  }
}, 1000);
