const { execSync } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

execSync(`"${chromePath}" --headless --disable-gpu --window-size=1280,1000 --screenshot="${baseDir}\\vercel_live_hero.png" https://zynapte-pragya.vercel.app/`);
console.log('Captured vercel_live_hero.png');

execSync(`"${chromePath}" --headless --disable-gpu --window-size=1280,2200 --screenshot="${baseDir}\\vercel_live_flow.png" https://zynapte-pragya.vercel.app/`);
console.log('Captured vercel_live_flow.png');
