const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const port = 9277;
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  `--remote-debugging-port=${port}`,
  '--window-size=1280,900',
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
      await send('Page.navigate', { url: 'http://localhost:3000/' });
      setTimeout(async () => {
        // Capture header region
        const screenshotRes = await send('Page.captureScreenshot', {
          format: 'png',
          clip: { x: 0, y: 0, width: 1280, height: 180, scale: 1 }
        });
        const buf = Buffer.from(screenshotRes.data, 'base64');
        fs.writeFileSync('C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a\\whatsapp_header_verified.png', buf);
        console.log('Saved whatsapp_header_verified.png');
        chrome.kill();
        process.exit(0);
      }, 1500);
    });
  } catch (err) {
    console.error('Error:', err);
    chrome.kill();
    process.exit(1);
  }
}, 1200);
