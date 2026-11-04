import re

with open("src/index.css", "r", encoding="utf-8") as f:
    text = f.read()

matches = set(re.findall(r"\.role-[a-zA-Z0-9_-]+", text))
for m in sorted(matches):
    print(m)
