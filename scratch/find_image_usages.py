import os
import re

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith('.jsx') or f.endswith('.js'):
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8') as file:
                content = file.read()
                matches = re.findall(r'[\'"]([^\'"]+\.(?:jpg|jpeg|png|webp|svg))[\'"]', content)
                if matches:
                    print(f, matches)
