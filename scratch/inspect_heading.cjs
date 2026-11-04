const { spawn } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const port = 9396;
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
      await new Promise(r => setTimeout(r, 1200));

      const res = await send('Runtime.evaluate', {
        expression: `(() => {
          const h2 = document.querySelector("#core-modules h2");
          const parent = document.querySelector("#core-modules .section-header");
          return {
            h2Text: h2 ? h2.textContent : null,
            h2ClientWidth: h2 ? h2.clientWidth : 0,
            h2ScrollWidth: h2 ? h2.scrollWidth : 0,
            h2Height: h2 ? h2.offsetHeight : 0,
            fontSize: h2 ? window.getComputedStyle(h2).fontSize : null,
            parentMaxWidth: parent ? window.getComputedStyle(parent).maxWidth : null
          };
        })()`,
        returnByValue: true
      });
      console.log('Inspection Result:', res.result.value);

      chrome.kill();
      process.exit(0);
    });
  } catch (err) {
    console.error('Error:', err);
    chrome.kill();
    process.exit(1);
  }
}, 1500);
