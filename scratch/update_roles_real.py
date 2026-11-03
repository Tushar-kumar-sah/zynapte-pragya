# update_roles_real_photos.py
with open('src/data/rolesData.js', 'r', encoding='utf-8') as f:
    rd = f.read()

rd = rd.replace("'/role-principal.jpg'", "'/real-photos/real-campus-building.jpg'")
rd = rd.replace("'/role-teacher.jpg'", "'/real-photos/real-teacher-instruct.jpg'")
rd = rd.replace("'/role-fee-counter.jpg'", "'/real-photos/real-fee-accounting.jpg'")
rd = rd.replace("'/role-parent-app.jpg'", "'/real-photos/real-students-study.jpg'")

with open('src/data/rolesData.js', 'w', encoding='utf-8') as f:
    f.write(rd)

with open('src/pages/SolutionsByRole.jsx', 'r', encoding='utf-8') as f:
    sol = f.read()

sol = sol.replace("image: '/role-principal.jpg'", "image: '/real-photos/real-campus-building.jpg'")
sol = sol.replace("image: '/role-teacher.jpg'", "image: '/real-photos/real-teacher-instruct.jpg'")
sol = sol.replace("image: '/role-fee-counter.jpg'", "image: '/real-photos/real-fee-accounting.jpg'")
sol = sol.replace("image: '/role-parent-app.jpg'", "image: '/real-photos/real-students-study.jpg'")
sol = sol.replace("'/role-principal.jpg'", "'/real-photos/real-campus-building.jpg'")

with open('src/pages/SolutionsByRole.jsx', 'w', encoding='utf-8') as f:
    f.write(sol)

print('Updated rolesData.js and SolutionsByRole.jsx with real photographs')
