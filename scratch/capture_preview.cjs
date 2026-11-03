const { execSync } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

try {
  execSync(`"${chromePath}" --headless --disable-gpu --window-size=1280,900 --screenshot="${baseDir}\\preview_4173.png" http://localhost:4173/`);
  console.log('Successfully captured preview_4173.png');
} catch (e) {
  console.error(e.message);
}
