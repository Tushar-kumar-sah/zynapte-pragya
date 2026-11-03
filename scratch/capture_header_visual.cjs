const { execSync } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';
const htmlPath = 'C:\\Users\\sah05\\OneDrive\\Desktop\\pragya\\scratch\\test_header_visual.html';

execSync(`"${chromePath}" --headless --disable-gpu --window-size=1280,450 --screenshot="${baseDir}\\real_whatsapp_header_visual.png" "file:///${htmlPath.replace(/\\/g, '/')}"`);
console.log('Successfully captured real_whatsapp_header_visual.png');
