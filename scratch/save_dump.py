import subprocess

chrome = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
cmd = [chrome, '--headless', '--disable-gpu', '--virtual-time-budget=3000', '--dump-dom', 'http://localhost:3000/']
res = subprocess.run(cmd, capture_output=True, text=True)
dom = res.stdout
print('Length of dom:', len(dom))
with open('scratch/full_dump.html', 'w', encoding='utf-8') as f:
    f.write(dom)
print('Wrote full_dump.html')
