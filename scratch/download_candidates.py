import urllib.request
import urllib.parse
import json

headers = {'User-Agent': 'PragyaSchoolERP/1.0 (https://zynapte-pragya.vercel.app; education erp)'}

candidates = [
    ("students_teacher_kolkata.jpg", "https://upload.wikimedia.org/wikipedia/commons/6/67/School_Girl_Students_With_Teacher_-_Kolkata_2023-12-19_9650.jpg"),
    ("dps_megacity_students.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/12/Students_at_Delhi_Public_School_Megacity%2C_Kolkata_during_the_workshop.jpg"),
    ("school_principals_office.jpg", "https://upload.wikimedia.org/wikipedia/commons/b/b3/School_Principal%27s_office.jpg"),
    ("students_joyful_kolkata.jpg", "https://upload.wikimedia.org/wikipedia/commons/5/55/Joyful_School_Girl_Students_-_Kolkata_2023-12-19_9653.jpg"),
    ("indian_teacher_workshop.jpg", "https://upload.wikimedia.org/wikipedia/commons/8/8e/Jagseer_S_Sidhu_teaching_school_students_about_Wikipedia.jpg"),
]

for name, url in candidates:
    out_path = f"public/real-photos/{name}"
    print(f"Downloading {name}...")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(out_path, "wb") as f:
                f.write(data)
            print(f"Downloaded {name} ({len(data)} bytes)")
    except Exception as e:
        print(f"Error {name}: {e}")
