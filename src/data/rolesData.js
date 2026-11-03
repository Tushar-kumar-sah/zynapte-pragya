export const rolesData = {
  principal: {
    id: 'principal',
    name: 'Principals',
    title: 'Principal & Leadership Desk',
    outcome: "Real-time bird's-eye oversight across campus operations.",
    avatar: 'P',
    image: '/role-principal.jpg',
    userName: 'Dr. Vikram Singh',
    userTitle: 'Principal • Pragya Model Academy',
    badge: 'Executive View',
    features: [
      { icon: 'BarChart3', title: 'Live Bird\'s-Eye Roll', desc: 'Real-time attendance & collections' },
      { icon: 'ShieldCheck', title: 'APAAR Compliance', desc: 'Class-wise student consent & PEN' },
      { icon: 'Lock', title: 'Full Role Audit Trail', desc: 'Granular permissions & zero leaks' }
    ],
    chips: ['Daily Roll: 96.4%', 'Fees: ₹11.84L Today', 'APAAR: 92.8% Ready'],
    points: [
      'Live daily attendance, fees, and academic roll.',
      'Institutional APAAR readiness tracking across classes.',
      'Role-level audit trail with zero spreadsheet clutter.'
    ],
    cta: "See Principal's View in Action"
  },
  administrator: {
    id: 'administrator',
    name: 'Administrators',
    title: 'Admin & Operations Console',
    outcome: 'Centralized school structure, batch imports, and task queues.',
    avatar: 'A',
    image: '/role-principal.jpg',
    userName: 'M. Chakraborty',
    userTitle: 'Head Administrator',
    badge: 'Admin Console',
    features: [
      { icon: 'Settings', title: 'Campus Structure', desc: 'Configure sessions, classes & sections' },
      { icon: 'Layers', title: 'Task Queue', desc: 'Admissions, approvals & verifications' },
      { icon: 'BookOpen', title: 'Board Alignment', desc: 'CBSE, ICSE & State curriculum' }
    ],
    chips: ['9 Core Modules', 'Multi-Campus Sync', 'Fast CSV Import'],
    points: [
      'Central academic structure: years, branches, classes, sections.',
      'Actionable pending task queue for verifications.',
      'State board & CBSE catalogue alignments.'
    ],
    cta: 'Explore Admin Configuration'
  },
  teacher: {
    id: 'teacher',
    name: 'Teachers',
    title: 'Teacher Desk & Mobile Roll Call',
    outcome: 'Quick 30-second roll call, marks entry, and period schedule.',
    avatar: 'T',
    image: '/role-teacher.jpg',
    userName: 'P. Sengupta',
    userTitle: 'Senior Faculty • Class IX-A',
    badge: 'Teacher Desk',
    features: [
      { icon: 'UserCheck', title: '30-Sec Roll Call', desc: 'Instant mobile or web attendance' },
      { icon: 'Award', title: 'Marks & Grading', desc: 'Auto calculation of thresholds' },
      { icon: 'Calendar', title: 'Period Timetable', desc: 'Conflict-free daily periods' }
    ],
    chips: ['30-Sec Attendance', 'Automated Grading', 'Timetable Sync'],
    points: [
      'Rapid daily roll call from phone or desktop.',
      'Subject examination marks with auto-calculated grades.',
      'Conflict-free timetable and syllabus progress.'
    ],
    cta: "Explore Teacher's Workflow"
  },
  admissions: {
    id: 'admissions',
    name: 'Admissions',
    title: 'Admissions & Front Office Desk',
    outcome: 'Enquiries to confirmed admissions with verified student files.',
    avatar: 'F',
    image: '/role-fee-counter.jpg',
    userName: 'R. Goswami',
    userTitle: 'Admissions Officer',
    badge: 'Front Office',
    features: [
      { icon: 'UserPlus', title: 'Enquiry Board', desc: 'Track visits, forms & applications' },
      { icon: 'FileUp', title: 'Bulk CSV Import', desc: '1-click upload with error validation' },
      { icon: 'Search', title: 'Student Dossier', desc: 'Instant parent-call lookup' }
    ],
    chips: ['Live Enquiry Board', 'Bulk CSV Import', '1-Click Student Lookup'],
    points: [
      'Kanban board for enquiries, visits, and forms.',
      'Guided Excel/CSV data import with error checks.',
      'Instant parent-call lookup for fees and records.'
    ],
    cta: 'See Admissions Workflow'
  },
  accountant: {
    id: 'accountant',
    name: 'Accounts',
    title: 'Accounts Desk & Fee Counter POS',
    outcome: 'Counter fee collection, thermal slips, and payroll batches.',
    avatar: '₹',
    image: '/role-fee-counter.jpg',
    userName: 'K. Nandy',
    userTitle: 'School Accountant',
    badge: 'Finance Desk',
    features: [
      { icon: 'CreditCard', title: '3-Sec Thermal Slip', desc: 'Instant cash, UPI QR & receipts' },
      { icon: 'Receipt', title: 'Head-Wise Ledger', desc: 'Tuition, development, bus & lab' },
      { icon: 'Building2', title: 'Bank NEFT Batch', desc: 'Standard Excel files for upload' }
    ],
    chips: ['3-Sec Thermal Slip', 'UPI QR Instant', 'EPF & PTax Ready'],
    points: [
      'Counter fee POS with 3-second thermal slip printing.',
      'Head-wise INR ledger accounting with receipt log.',
      'Staff payroll generation with bank NEFT batch files.'
    ],
    cta: 'See Fee Collection Workflow'
  },
  hr: {
    id: 'hr',
    name: 'HR & Staff',
    title: 'Staff Administration & Payroll',
    outcome: 'Faculty service records, biometric device sync, and leave.',
    avatar: 'H',
    image: '/role-principal.jpg',
    userName: 'T. Roy',
    userTitle: 'HR Manager',
    badge: 'Staff Admin',
    features: [
      { icon: 'Users', title: 'Staff Dossiers', desc: 'Qualifications, service & KYC' },
      { icon: 'CalendarCheck', title: 'Biometric Sync', desc: 'Punch device integration' },
      { icon: 'Shield', title: 'Role Scopes', desc: 'Controlled module permissions' }
    ],
    chips: ['Digital Staff Files', 'Biometric / App Sync', 'Salary Tier Config'],
    points: [
      'Teacher and support staff dossiers and service records.',
      'Streamlined staff leave approvals and daily shifts.',
      'Connected payroll structures with attendance sync.'
    ],
    cta: 'Explore HR Workflows'
  },
  student: {
    id: 'student',
    name: 'Students & Parents',
    title: 'Student Portal & Parent Mobile App',
    outcome: 'Personal timetables, homework, report cards, and notices.',
    avatar: 'S',
    image: '/role-parent-app.jpg',
    userName: 'Ananya Roy',
    userTitle: 'Student • Class IX-A',
    badge: 'Mobile App',
    features: [
      { icon: 'Calendar', title: 'Class Schedule', desc: 'Daily periods & subject periods' },
      { icon: 'Award', title: 'Report Cards', desc: 'Term results & teacher remarks' },
      { icon: 'Bell', title: 'School Notices', desc: 'Digital circulars & homework' }
    ],
    chips: ['Mobile Timetable', 'Online Report Cards', 'Notice Feed'],
    points: [
      'Daily schedule and timetable on mobile and browser.',
      'Published report cards and term assessments.',
      'School message ribbons and circulars.'
    ],
    cta: 'Explore Student Experience'
  }
};
