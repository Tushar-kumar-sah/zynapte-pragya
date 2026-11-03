with open('src/pages/SecurityHosting.jsx', 'r', encoding='utf-8') as f:
    sec = f.read()

sec = sec.replace("image: '/security-datacenter.jpg'", "image: '/real-photos/real-bangalore-school-coding.jpg'")
sec = sec.replace("image: '/security-it-admin.jpg'", "image: '/real-photos/real-indian-teacher-computer.jpg'")
sec = sec.replace("image: '/security-passkey-auth.jpg'", "image: '/real-photos/real-mobile-comm.jpg'")
sec = sec.replace("image: '/security-backup-recovery.jpg'", "image: '/real-photos/real-campus-building.jpg'")

with open('src/pages/SecurityHosting.jsx', 'w', encoding='utf-8') as f:
    f.write(sec)

print('Updated SecurityHosting.jsx with real photos')
