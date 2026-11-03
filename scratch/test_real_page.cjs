const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const port = 9341;
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  `--remote-debugging-port=${port}`,
  '--window-size=1280,900',
  'http://localhost:3000/'
]);

setTimeout(async () => {
  try {
    const tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
    const pageTab = tabs.find(t => t.type === 'page');
    console.log('Found pageTab:', pageTab.title, pageTab.url);
    
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
      
      // Wait for React to render
      for (let i = 0; i < 20; i++) {
        await new Promise(r => setTimeout(r, 200));
        const res = await send('Runtime.evaluate', {
          expression: 'document.getElementById("root") ? document.getElementById("root").innerHTML.length : 0',
          returnByValue: true
        });
        if (res.result.value > 1000) {
          console.log(`React rendered after ${(i+1)*200}ms, length:`, res.result.value);
          break;
        }
      }

      const shot = await send('Page.captureScreenshot', { format: 'png' });
      const buf = Buffer.from(shot.data, 'base64');
      fs.writeFileSync('C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a\\navbar_verified.png', buf);
      console.log('Saved navbar_verified.png, bytes:', buf.length);

      chrome.kill();
      process.exit(0);
    });
  } catch (err) {
    console.error(err);
    chrome.kill();
    process.exit(1);
  }
}, 2500);
