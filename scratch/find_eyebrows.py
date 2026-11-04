import os, re

eyebrows = {}
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith('.jsx'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as fp:
                txt = fp.read()
                matches = re.findall(r'<div className=[\'"]eyebrow[\'"]>(.*?)</div>', txt, re.DOTALL)
                if matches:
                    eyebrows[f] = [re.sub(r'<.*?>', '', m).strip() for m in matches]

for k, v in sorted(eyebrows.items()):
    print(f'{k}: {v}')
