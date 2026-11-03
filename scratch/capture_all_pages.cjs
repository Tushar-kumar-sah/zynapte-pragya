const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9358;
const artifactDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

const pagesToCapture = [
  { path: '/features', out: 'verify_features_hero.png', scroll: 0 },
  { path: '/features', out: 'verify_features_gallery.png', scroll: 750 },
  { path: '/student-management', out: 'verify_students_hero.png', scroll: 0 },
  { path: '/student-management', out: 'verify_students_idcard.png', scroll: 550 },
  { path: '/fees-management', out: 'verify_fees_hero.png', scroll: 0 },
  { path: '/fees-management', out: 'verify_fees_receipt.png', scroll: 600 },
  { path: '/attendance-management', out: 'verify_attendance_hero.png', scroll: 0 },
  { path: '/attendance-management', out: 'verify_attendance_sim.png', scroll: 580 },
  { path: '/exam-result-management', out: 'verify_exams_hero.png', scroll: 0 },
  { path: '/multi-branch-management', out: 'verify_multibranch_hero.png', scroll: 0 }
];

const chrome = spawn(chromePath, [
  '--headless',
  '--disable-gpu',
  `--remote-debugging-port=${port}`,
  '--window-size=1280,950',
  'http://localhost:3000/features'
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

      for (const item of pagesToCapture) {
        await send('Page.navigate', { url: `http://localhost:3000${item.path}` });
        await new Promise(r => setTimeout(r, 900));
        await send('Runtime.evaluate', { 
          expression: `document.documentElement.style.scrollBehavior = "auto"; window.scrollTo({ top: ${item.scroll}, behavior: "instant" });` 
        });
        await new Promise(r => setTimeout(r, 300));
        const shot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(path.join(artifactDir, item.out), Buffer.from(shot.data, 'base64'));
        console.log(`Captured ${item.out}`);
      }

      chrome.kill();
      process.exit(0);
    });
  } catch (err) {
    console.error(err);
    chrome.kill();
    process.exit(1);
  }
}, 3000);
