import subprocess

chrome = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
cmd = [chrome, '--headless', '--disable-gpu', '--virtual-time-budget=3000', '--dump-dom', 'http://localhost:3000/']
res = subprocess.run(cmd, capture_output=True, text=True)
dom = res.stdout

root_idx = dom.find('<div id="root">')
print('root_idx:', root_idx)
if root_idx != -1:
    print('Content inside root (first 1000 chars):')
    print(dom[root_idx:root_idx+1000])
