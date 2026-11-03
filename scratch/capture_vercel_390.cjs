const { execSync } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

execSync(`"${chromePath}" --headless --disable-gpu --window-size=390,950 --screenshot="${baseDir}\\vercel_live_390.png" https://zynapte-pragya.vercel.app/`);
console.log('Captured vercel_live_390.png');
