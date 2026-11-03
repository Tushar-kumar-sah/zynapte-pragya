import os, re

pages_dir = 'src/pages'
for f in os.listdir(pages_dir):
    if f.endswith('.jsx'):
        path = os.path.join(pages_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
            matches = re.findall(r'background:\s*[\'"][^\'"]*fff[^\'"]*[\'"]', content, re.IGNORECASE)
            if matches:
                print(f"{f}: {matches}")
