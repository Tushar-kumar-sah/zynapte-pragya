with open('src/pages/ApaarReadiness.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('name="Tanvi Sharma"', 'name="Aarav Sharma"')
text = text.replace('dob="2 July 2012"', 'dob="14 April 2014"')
text = text.replace('gender="Female"', 'gender="Male"')
text = text.replace('Tanvi Sharma - Registered APAAR ID Holder', 'Aarav Sharma - Registered APAAR ID Holder')

with open('src/pages/ApaarReadiness.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

with open('src/components/ApaarCardMockup.jsx', 'r', encoding='utf-8') as f:
    card_text = f.read()

card_text = card_text.replace("name = 'Tanvi Sharma'", "name = 'Aarav Sharma'")
card_text = card_text.replace("dob = '2 July 2012'", "dob = '14 April 2014'")
card_text = card_text.replace("gender = 'Female'", "gender = 'Male'")

with open('src/components/ApaarCardMockup.jsx', 'w', encoding='utf-8') as f:
    f.write(card_text)

print('Successfully updated student details to Aarav Sharma')
