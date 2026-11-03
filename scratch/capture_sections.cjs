const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const port = 9336;
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
      await send('Runtime.enable');
      await send('Page.enable');

      const scrollAndSnap = async (scrollY, filename) => {
        await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${scrollY})` });
        await new Promise(r => setTimeout(r, 600));
        const shot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(`C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a\\${filename}`, Buffer.from(shot.data, 'base64'));
        console.log(`Saved ${filename}`);
      };

      await scrollAndSnap(650, 'section_modules.png');
      await scrollAndSnap(1300, 'section_roles.png');
      await scrollAndSnap(1950, 'section_indian_schools.png');
      await scrollAndSnap(2650, 'section_payroll.png');
      await scrollAndSnap(3400, 'section_advantages.png');
      await scrollAndSnap(4100, 'section_security.png');

      chrome.kill();
      process.exit(0);
    });
  } catch (err) {
    console.error(err);
    chrome.kill();
    process.exit(1);
  }
}, 3000);
