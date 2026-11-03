import os, re

pages_dir = 'src/pages'
for f in os.listdir(pages_dir):
    if f.endswith('.jsx'):
        path = os.path.join(pages_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
            for idx, line in enumerate(lines):
                if re.search(r'background:\s*[\'"][^\'"]*(?:fff|ffffff|white)[^\'"]*[\'"]', line, re.IGNORECASE):
                    print(f"{f}:{idx+1} {line.strip()}")
