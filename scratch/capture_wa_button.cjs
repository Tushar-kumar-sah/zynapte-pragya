const { execSync } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

try {
  execSync(`"${chromePath}" --headless --disable-gpu --window-size=1280,900 --screenshot="${baseDir}\\whatsapp_real_logo_verified.png" http://localhost:3000/`);
  console.log('Successfully captured whatsapp_real_logo_verified.png');
} catch (e) {
  console.error(e.message);
}
