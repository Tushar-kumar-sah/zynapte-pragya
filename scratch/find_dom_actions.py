import subprocess
import re

chrome = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
cmd = [chrome, '--headless', '--disable-gpu', '--virtual-time-budget=3000', '--dump-dom', 'http://localhost:3000/']
res = subprocess.run(cmd, capture_output=True, text=True)
dom = res.stdout

m = re.search(r'<div class="nav-actions".*?</div>', dom, re.DOTALL)
if m:
    print('FOUND nav-actions:\n', m.group(0)[:800])
else:
    print('nav-actions not found in DOM, searching for wa.me:')
    for match in re.finditer(r'href="https://wa\.me[^"]*"', dom):
        print(match.group(0))
