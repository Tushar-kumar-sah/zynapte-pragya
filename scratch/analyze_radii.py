import re

with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Let's inspect all occurrences of 9999px, 999px, 24px, 20px, 18px, 16px, 14px, 12px, 10px
pattern = r'(border-radius:\s*)([^;]+)(;)'

def analyze():
    matches = re.findall(pattern, css)
    print("Distinct values found:")
    from collections import Counter
    c = Counter(m[1].strip() for m in matches)
    for k, v in c.most_common():
        print(f"  {k}: {v}")

analyze()
