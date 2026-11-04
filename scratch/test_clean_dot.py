import os, re

pattern = re.compile(r'^[ \t]*<div className=[\'"]eyebrow[\'"]>[\s\S]*?<span className=[\'"]eyebrow-dot[\'"][\s\S]*?</div>\r?\n?', re.MULTILINE)

remaining_dots = 0

for root, dirs, files in os.walk('src'):
    for f in sorted(files):
        if f.endswith('.jsx'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as fp:
                content = fp.read()
            new_content = pattern.sub('', content)
            if 'eyebrow-dot' in new_content:
                print(f"WARNING: Remaining eyebrow-dot in {f}!")
                remaining_dots += 1

print(f"Remaining eyebrow-dot count across all JSX: {remaining_dots}")
