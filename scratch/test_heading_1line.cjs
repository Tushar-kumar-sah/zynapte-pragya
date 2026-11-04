const { spawn } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const port = 9397;
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
          parent.style.maxWidth = '1050px';
          h2.style.whiteSpace = 'nowrap';
          h2.style.fontSize = 'clamp(1.35rem, 2.75vw, 2.35rem)';
          return {
            h2Text: h2.textContent,
            h2ClientWidth: h2.clientWidth,
            h2ScrollWidth: h2.scrollWidth,
            h2Height: h2.offsetHeight,
            fontSize: window.getComputedStyle(h2).fontSize,
            parentMaxWidth: window.getComputedStyle(parent).maxWidth
          };
        })()`,
        returnByValue: true
      });
      console.log('Tested 1-Line Result:', res.result.value);

      chrome.kill();
      process.exit(0);
    });
  } catch (err) {
    console.error('Error:', err);
    chrome.kill();
    process.exit(1);
  }
}, 1500);
