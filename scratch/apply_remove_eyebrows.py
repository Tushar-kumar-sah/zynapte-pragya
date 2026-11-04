import os, re

pattern = re.compile(r'^[ \t]*<div className=[\'"]eyebrow[\'"]>[\s\S]*?<span className=[\'"]eyebrow-dot[\'"][\s\S]*?</div>\r?\n?', re.MULTILINE)

total_files = 0
total_removed = 0

for root, dirs, files in os.walk('src'):
    for f in sorted(files):
        if f.endswith('.jsx'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as fp:
                content = fp.read()
            matches = list(pattern.finditer(content))
            if matches:
                new_content = pattern.sub('', content)
                with open(p, 'w', encoding='utf-8') as fp:
                    fp.write(new_content)
                total_files += 1
                total_removed += len(matches)
                print(f"Updated {f}: removed {len(matches)} eyebrows")

print(f"\nDone! Modified {total_files} files, removed {total_removed} eyebrow tags.")
