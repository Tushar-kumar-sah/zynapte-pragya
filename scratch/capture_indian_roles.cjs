const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const port = 9394;
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  `--remote-debugging-port=${port}`,
  '--window-size=1380,1100',
  'http://localhost:3000/'
]);

const artifactDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

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

      // Scroll to .role-showcase-box in center of viewport
      await send('Runtime.evaluate', { 
        expression: `(() => {
          const el = document.querySelector(".role-showcase-box");
          if(el) {
            const rect = el.getBoundingClientRect();
            window.scrollTo({ top: window.scrollY + rect.top - 120, behavior: "instant" });
          }
        })()`
      });
      await new Promise(r => setTimeout(r, 600));

      // 1. Capture Principal (default tab)
      const snap1 = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(artifactDir, 'verify_indian_principal.png'), Buffer.from(snap1.data, 'base64'));
      console.log('Saved verify_indian_principal.png');

      // 2. Click TEACHERS tab
      await send('Runtime.evaluate', { 
        expression: `(() => {
          const btns = Array.from(document.querySelectorAll('.role-pill-btn'));
          const btn = btns.find(b => b.textContent.includes('TEACHERS'));
          if(btn) btn.click();
        })()`
      });
      await new Promise(r => setTimeout(r, 600));

      const snap2 = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(artifactDir, 'verify_indian_teacher.png'), Buffer.from(snap2.data, 'base64'));
      console.log('Saved verify_indian_teacher.png');

      // 3. Click ADMINISTRATORS tab
      await send('Runtime.evaluate', { 
        expression: `(() => {
          const btns = Array.from(document.querySelectorAll('.role-pill-btn'));
          const btn = btns.find(b => b.textContent.includes('ADMINISTRATORS'));
          if(btn) btn.click();
        })()`
      });
      await new Promise(r => setTimeout(r, 600));

      const snap3 = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(artifactDir, 'verify_indian_admin.png'), Buffer.from(snap3.data, 'base64'));
      console.log('Saved verify_indian_admin.png');

      chrome.kill();
      process.exit(0);
    });
  } catch (err) {
    console.error('Error:', err);
    chrome.kill();
    process.exit(1);
  }
}, 1500);
