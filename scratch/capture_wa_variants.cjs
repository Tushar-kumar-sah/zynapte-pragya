const { execSync } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';
const htmlPath = 'C:\\Users\\sah05\\OneDrive\\Desktop\\pragya\\scratch\\test_variants.html';

execSync(`"${chromePath}" --headless --disable-gpu --window-size=800,200 --screenshot="${baseDir}\\wa_variants_test.png" "file:///${htmlPath.replace(/\\/g, '/')}"`);
console.log('Captured wa_variants_test.png');
