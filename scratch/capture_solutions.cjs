const { spawn } = require('child_process');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const port = 9351;
const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  `--remote-debugging-port=${port}`,
  '--window-size=1280,950',
  'http://localhost:3000/solutions'
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
      
      await new Promise(r => setTimeout(r, 1500));

      // Disable smooth scroll for instant positioning
      await send('Runtime.evaluate', { 
        expression: 'document.documentElement.style.scrollBehavior = "auto"; document.body.style.scrollBehavior = "auto";' 
      });

      // 1. Hero
      await send('Runtime.evaluate', { expression: 'window.scrollTo({ top: 0, behavior: "instant" })' });
      await new Promise(r => setTimeout(r, 200));
      let shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${artifactDir}\\solutions_hero_new.png`, Buffer.from(shot.data, 'base64'));

      // 2. Workbench
      const wbRes = await send('Runtime.evaluate', { 
        expression: `(() => {
          const el = document.getElementById("role-workbench");
          if (!el) return -1;
          const top = el.getBoundingClientRect().top + window.pageYOffset - 50;
          window.scrollTo({ top, behavior: "instant" });
          return window.pageYOffset;
        })()`,
        returnByValue: true
      });
      console.log('Workbench scrollY:', wbRes.result?.value);
      await new Promise(r => setTimeout(r, 300));
      shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${artifactDir}\\solutions_workbench_new.png`, Buffer.from(shot.data, 'base64'));

      // 3. Visual Gallery
      const galRes = await send('Runtime.evaluate', { 
        expression: `(() => {
          const el = document.querySelector(".role-gallery-grid");
          if (!el) return -1;
          const top = el.getBoundingClientRect().top + window.pageYOffset - 120;
          window.scrollTo({ top, behavior: "instant" });
          return window.pageYOffset;
        })()`,
        returnByValue: true
      });
      console.log('Gallery scrollY:', galRes.result?.value);
      await new Promise(r => setTimeout(r, 300));
      shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${artifactDir}\\solutions_gallery_new.png`, Buffer.from(shot.data, 'base64'));

      // 4. How It Works Timeline
      const timeRes = await send('Runtime.evaluate', { 
        expression: `(() => {
          const el = document.getElementById("how-it-works");
          if (!el) return -1;
          const top = el.getBoundingClientRect().top + window.pageYOffset - 40;
          window.scrollTo({ top, behavior: "instant" });
          return window.pageYOffset;
        })()`,
        returnByValue: true
      });
      console.log('Timeline scrollY:', timeRes.result?.value);
      await new Promise(r => setTimeout(r, 300));
      shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(`${artifactDir}\\solutions_timeline_new.png`, Buffer.from(shot.data, 'base64'));

      chrome.kill();
      process.exit(0);
    });
  } catch (err) {
    console.error(err);
    chrome.kill();
    process.exit(1);
  }
}, 3000);
