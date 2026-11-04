import os, re

results = []

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith('.jsx'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as fp:
                lines = fp.readlines()
            for idx, line in enumerate(lines):
                if 'eyebrow' in line.lower():
                    results.append((f, idx + 1, line.strip()))

print(f"Total lines with 'eyebrow': {len(results)}")
for f, lno, text in results:
    print(f"{f}:{lno} -> {text}")
