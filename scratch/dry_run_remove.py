import os, re

pattern = re.compile(r'^[ \t]*<div className=[\'"]eyebrow[\'"]>[\s\S]*?<span className=[\'"]eyebrow-dot[\'"][\s\S]*?</div>\r?\n?', re.MULTILINE)

files_modified = 0
total_removed = 0

for root, dirs, files in os.walk('src'):
    for f in sorted(files):
        if f.endswith('.jsx'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as fp:
                content = fp.read()
            matches = list(pattern.finditer(content))
            if matches:
                print(f"File {f}: found {len(matches)} matches")
                total_removed += len(matches)
                files_modified += 1

print(f"\nDry run complete. Total files: {files_modified}, total eyebrows to remove: {total_removed}")
