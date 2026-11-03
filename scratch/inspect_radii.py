import os
import re

print("--- JSX INLINE BORDER-RADIUS ---")
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.jsx', '.js')):
            p = os.path.join(root, f)
            text = open(p, 'r', encoding='utf-8').read()
            matches = re.findall(r'borderRadius:\s*[\'"]([^\'"]+)[\'"]', text)
            if matches:
                print(f"{p}: {matches}")

print("\n--- HARDCODED RADII > 8px IN src/index.css ---")
css = open('src/index.css', 'r', encoding='utf-8').read()
hardcoded = re.findall(r'([^{]+)\{([^}]+)\}', css)
large_radii = []
for sel, body in hardcoded:
    m = re.search(r'border-radius:\s*([^;]+);', body)
    if m:
        val = m.group(1).strip()
        # Find pixel values or 9999px
        px_match = re.findall(r'(\d+)px', val)
        if px_match and any(int(x) > 8 for x in px_match):
            large_radii.append((sel.strip()[:60], val))
        elif 'full' in val:
            large_radii.append((sel.strip()[:60], val))

for sel, val in large_radii:
    print(f"{sel}: {val}")
