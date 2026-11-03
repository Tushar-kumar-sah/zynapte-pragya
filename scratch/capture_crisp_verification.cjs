const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

const port = 9350;
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  `--remote-debugging-port=${port}`,
  '--window-size=1280,1000',
  'http://localhost:3000/'
]);

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
      await send('Page.enable');
      await send('Runtime.enable');
      
      setTimeout(async () => {
        // Capture hero
        const shot1 = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(`${baseDir}\\crisp_hero.png`, Buffer.from(shot1.data, 'base64'));
        console.log('Saved crisp_hero.png');
        
        // Scroll to core modules
        await send('Runtime.evaluate', {
          expression: 'document.querySelector(".core-nine-modules-grid")?.scrollIntoView({ behavior: "instant" })'
        });
        
        setTimeout(async () => {
          const shot2 = await send('Page.captureScreenshot', { format: 'png' });
          fs.writeFileSync(`${baseDir}\\crisp_modules.png`, Buffer.from(shot2.data, 'base64'));
          console.log('Saved crisp_modules.png');
          
          chrome.kill();
          process.exit(0);
        }, 500);
      }, 1500);
    });
  } catch(e) {
    console.error(e);
    chrome.kill();
    process.exit(1);
  }
}, 1500);
