with open("src/index.css", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if "core-modules-integration-ribbon" in l:
        print(f"Ribbon at line {i+1}")
    if "ROLE SHOWCASE BOX" in l:
        print(f"Role showcase at line {i+1}")
