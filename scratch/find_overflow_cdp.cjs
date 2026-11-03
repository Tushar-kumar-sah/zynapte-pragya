const { spawn } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const port = 9262;
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  `--remote-debugging-port=${port}`,
  'about:blank'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await listRes.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;
    
    const ws = new globalThis.WebSocket(wsUrl);
    
    let id = 1;
    const send = (method, params = {}) => new Promise((resolve) => {
      const msgId = id++;
      const handler = (evt) => {
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
      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });
      await send('Page.navigate', { url: 'http://localhost:3000/' });
      setTimeout(async () => {
        const res = await send('Runtime.evaluate', {
          expression: `(() => {
            const innerW = window.innerWidth;
            const overflows = [];
            document.querySelectorAll('*').forEach(el => {
              const r = el.getBoundingClientRect();
              if (r.right > innerW + 2) {
                overflows.push({
                  tag: el.tagName,
                  cls: typeof el.className === 'string' ? el.className.slice(0, 50) : '',
                  right: Math.round(r.right),
                  width: Math.round(r.width)
                });
              }
            });
            return JSON.stringify({ innerW, scrollW: document.documentElement.scrollWidth, overflows: overflows.slice(0, 15) });
          })()`
        });
        console.log('EVAL RESULT:', res.result.value);
        
        // Also capture a proper mobile screenshot
        const screenshotRes = await send('Page.captureScreenshot', { format: 'png' });
        const fs = require('fs');
        const buf = Buffer.from(screenshotRes.data, 'base64');
        fs.writeFileSync('C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a\\mobile_emulated_390.png', buf);
        console.log('Saved mobile_emulated_390.png');

        chrome.kill();
        process.exit(0);
      }, 2000);
    });
  } catch (err) {
    console.error('Error:', err);
    chrome.kill();
    process.exit(1);
  }
}, 1200);
