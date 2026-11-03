with open('src/pages/ContactBookDemo.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('<MessageSquare size={18} color="#25D366" />', '<WhatsAppIcon size={20} />')

with open('src/pages/ContactBookDemo.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated ContactBookDemo.jsx successfully')
