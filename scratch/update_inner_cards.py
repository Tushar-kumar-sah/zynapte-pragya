# update_inner_cards.py
import os, re

pages_dir = 'src/pages'
count = 0

for f in os.listdir(pages_dir):
    if f.endswith('.jsx'):
        path = os.path.join(pages_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Replace inline '#FFFFFF' card backgrounds with dark sapphire glass
        new_content = re.sub(r"background:\s*['\"]#FFFFFF['\"]", "background: 'rgba(2, 35, 91, 0.75)'", content)
        new_content = re.sub(r"border:\s*['\"]1px solid var\(--color-slate-200\)['\"]", "border: '1px solid rgba(134, 165, 212, 0.25)'", new_content)
        new_content = re.sub(r"border:\s*['\"]2px solid var\(--color-slate-200\)['\"]", "border: '2px solid rgba(134, 165, 212, 0.3)'", new_content)
        new_content = re.sub(r"border:\s*['\"]1px dashed var\(--color-slate-300\)['\"]", "border: '1px dashed rgba(134, 165, 212, 0.35)'", new_content)
        
        if new_content != content:
            with open(path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            count += 1
            print(f"Updated {f}")

print(f"Total updated pages: {count}")
