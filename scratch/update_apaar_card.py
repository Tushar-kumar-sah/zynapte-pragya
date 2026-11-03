with open('src/components/ApaarCardMockup.jsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('/apaar-student-avatar.png', '/real-student-id-ananya.jpg')

with open('src/components/ApaarCardMockup.jsx', 'w', encoding='utf-8') as f:
    f.write(c)

print('Updated ApaarCardMockup.jsx with real student photo')
