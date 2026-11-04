import os, re

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith('.jsx'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as fp:
                txt = fp.read()
            # Find all <div className="eyebrow"> blocks
            matches = re.findall(r'[ \t]*<div className=[\'"]eyebrow[\'"]>.*?</div>\r?\n?', txt, re.DOTALL)
            if matches:
                print(f"=== {f} ({len(matches)} matches) ===")
                for m in matches:
                    print(repr(m.strip()))
