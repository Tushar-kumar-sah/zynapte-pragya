const { spawn } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const port = 9241;
  const chrome = spawn(chromePath, [
    '--headless',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    'http://localhost:3000/'
  ]);

  setTimeout(async () => {
    try {
      const listRes = await fetch(`http://127.0.0.1:${port}/json/list`);
      const targets = await listRes.json();
      const page = targets.find(t => t.type === 'page');
      if (!page) { chrome.kill(); return; }

      const ws = new WebSocket(page.webSocketDebuggerUrl);
      ws.onopen = () => {
        ws.send(JSON.stringify({
          id: 1,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              JSON.stringify(Array.from(document.querySelectorAll('section')).map(s => ({
                id: s.id,
                className: s.className,
                top: s.offsetTop,
                height: s.offsetHeight
              })))
            `
          }
        }));
      };

      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === 1) {
          console.log('Sections on page:', JSON.parse(msg.result.result.value));
          ws.close();
          chrome.kill();
        }
      };
    } catch(e) {
      console.error(e);
      chrome.kill();
    }
  }, 1500);
})();
