with open('src/components/BottomCta.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('<MessageSquare size={18} color="#25D366" />', '<WhatsAppIcon size={20} />')

with open('src/components/BottomCta.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated BottomCta.jsx line 35 with WhatsAppIcon')
