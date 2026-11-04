import os

def update_home():
    path = 'src/pages/Home.jsx'
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # 1. Update WBBSE & WBCHSE Catalogues -> ICSE & CBSE Catalogues
    c = c.replace('<span>WBBSE &amp; WBCHSE Catalogues</span>', '<span>ICSE &amp; CBSE Catalogues</span>')
    c = c.replace('<span>WBBSE & WBCHSE Catalogues</span>', '<span>ICSE & CBSE Catalogues</span>')

    # 2. Update 1,200+ School Leaders & Principals -> 15+ Schools & Principals
    c = c.replace('from 1,200+ School Leaders &amp; Principals', 'from 15+ Schools &amp; Principals')
    c = c.replace('from 1,200+ School Leaders & Principals', 'from 15+ Schools & Principals')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print('Updated Home.jsx')

def update_other_pages():
    updates = [
        ('src/pages/StudentManagement.jsx', [
            ('AFFILIATED TO WBBSE / CBSE • ESTD. 1994', 'AFFILIATED TO ICSE / CBSE • ESTD. 1994')
        ]),
        ('src/pages/FeesManagement.jsx', [
            ('AFFILIATED TO WBBSE / CBSE • SCHOOL CODE: WB-9402', 'AFFILIATED TO ICSE / CBSE • SCHOOL CODE: IC-9402')
        ]),
        ('src/pages/AcademicsTimetable.jsx', [
            ('<span>WBBSE &amp; CBSE Schemes</span>', '<span>ICSE &amp; CBSE Schemes</span>'),
            ('Are WBBSE & CBSE subject catalogues built-in?', 'Are ICSE & CBSE subject catalogues built-in?'),
            ('state boards and CBSE are ready out of the box', 'ICSE and CBSE are ready out of the box')
        ]),
        ('src/pages/ExamResultManagement.jsx', [
            ('badge: \'CBSE & WBBSE Schemes\'', 'badge: \'ICSE & CBSE Schemes\''),
            ('chips: [\'WBBSE 7-Point AA-D\', \'CBSE 9-Point Scale\', \'Pass / Fail Logic\']', 'chips: [\'ICSE Board Grading\', \'CBSE 9-Point Scale\', \'Pass / Fail Logic\']'),
            ('<span>WBBSE / CBSE Scales</span>', '<span>ICSE &amp; CBSE Scales</span>'),
            ('Formatted according to WBBSE Summative Assessment or CBSE Term Evaluation guidelines.', 'Formatted according to ICSE Board or CBSE Term Evaluation guidelines.'),
            ('AFFILIATED TO WBBSE / CBSE • ESTD. 1994', 'AFFILIATED TO ICSE / CBSE • ESTD. 1994'),
            ('WBBSE 7-point scale (AA, A+, A, B+, B, C, D) and CBSE 9-point grading', 'ICSE percentage/grading and CBSE 9-point scale grading')
        ]),
        ('src/pages/AllFeatures.jsx', [
            ('1-click WBBSE/CBSE report card batch print', '1-click ICSE / CBSE report card batch print'),
            ('badge: "WBBSE / CBSE Ready"', 'badge: "ICSE / CBSE Ready"')
        ]),
        ('src/pages/AboutPragya.jsx', [
            ('WBBSE/CBSE rules', 'ICSE/CBSE rules'),
            ('Pre-configured WBBSE, WBCHSE, and CBSE marksheet calculations', 'Pre-configured ICSE, CBSE, and state board marksheet calculations')
        ]),
        ('src/pages/PricingEnquiry.jsx', [
            ('"WBBSE / CBSE Exam & Report Cards"', '"ICSE / CBSE Exam & Report Cards"')
        ]),
        ('src/components/IconicModules.jsx', [
            ('title: \'WBBSE / CBSE Exam Marksheets\'', 'title: \'ICSE / CBSE Exam Marksheets\''),
            ('\'WBBSE 1st, 2nd, 3rd Summative rules\'', '\'ICSE Board grading & assessment rules\''),
            ('AFFILIATED TO WBBSE / CBSE • SCHOOL CODE: WB-7104', 'AFFILIATED TO ICSE / CBSE • SCHOOL CODE: IC-7104')
        ])
    ]

    for filepath, repls in updates:
        if os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                c = f.read()
            for old_str, new_str in repls:
                c = c.replace(old_str, new_str)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(c)
            print(f'Updated {filepath}')

if __name__ == '__main__':
    update_home()
    update_other_pages()
