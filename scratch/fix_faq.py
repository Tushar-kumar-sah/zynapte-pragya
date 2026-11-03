with open('src/components/FaqAccordion.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('defaultOpen={idx === 0}', 'open={idx === 0 ? true : undefined}')

with open('src/components/FaqAccordion.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated FaqAccordion.jsx')
