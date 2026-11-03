with open('src/components/Navbar.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

target = '{item.highlight && <span className="dropdown-badge">APAAR</span>}'
content = content.replace(target, '')
content = content.replace("${item.highlight ? 'nav-link--highlight' : ''}", "")

with open('src/components/Navbar.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Navbar.jsx successfully")
