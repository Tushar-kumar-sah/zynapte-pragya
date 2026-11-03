export const rolesData = {
  principal: {
    id: 'principal',
    name: 'Principals',
    title: 'Principal & Leadership Desk',
    outcome: 'Real-time bird’s-eye oversight across institutional operations.',
    avatar: 'P',
    userName: 'Dr. S. Mukherjee',
    userTitle: 'Principal • Pragya School',
    badge: 'Executive View',
    features: [
      { icon: 'BarChart3', title: 'Live Overview', desc: 'Real-time roll call, collections & dues' },
      { icon: 'ShieldCheck', title: 'APAAR Compliance', desc: 'Class-wise consent without paper chasing' },
      { icon: 'Lock', title: 'Role Audit Trail', desc: 'Granular permissions and activity logs' }
    ],
    chips: ['Daily Roll: 96.4%', 'Fees: ₹1.84L Today', 'APAAR: 91.2% Ready'],
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
    title: 'Admin & Academic Coordinators',
    outcome: 'Centralized school structure, batch imports, and task queue.',
    avatar: 'A',
    userName: 'M. Chakraborty',
    userTitle: 'Head Administrator',
    badge: 'Admin Console',
    features: [
      { icon: 'Settings', title: 'Campus Hierarchy', desc: 'Configure sessions, classes & branches' },
      { icon: 'Layers', title: 'Pending Task Queue', desc: 'Admissions, verifications & approvals' },
      { icon: 'BookOpen', title: 'Board Catalogues', desc: 'CBSE, ICSE & State curriculum curations' }
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
    title: 'Class & Subject Teachers',
    outcome: 'Quick daily roll call, marks entry, and syllabus tracking.',
    avatar: 'T',
    userName: 'P. Sengupta',
    userTitle: 'Senior Math Teacher • Class IX-A',
    badge: 'Teacher Desk',
    features: [
      { icon: 'UserCheck', title: '30-Sec Roll Call', desc: 'Instant mobile or web daily attendance' },
      { icon: 'Award', title: 'Marks & Grading', desc: 'Auto calculation of CBSE/State thresholds' },
      { icon: 'Calendar', title: 'Syllabus & Timetable', desc: 'Conflict-free schedule and period tracking' }
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
    title: 'Admissions & Front Office',
    outcome: 'Enquiries to confirmed admissions with verified student files.',
    avatar: 'F',
    userName: 'R. Goswami',
    userTitle: 'Admissions Officer',
    badge: 'Front Office',
    features: [
      { icon: 'UserPlus', title: 'Enquiry Pipeline', desc: 'Track inquiries, visits & applications' },
      { icon: 'FileUp', title: 'Guided CSV Import', desc: 'Bulk student records with validation' },
      { icon: 'Search', title: 'Instant Student Dossier', desc: '1-click lookup for parent inquiries' }
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
    title: 'Accounts & Finance Desk',
    outcome: 'Counter fee collection, thermal slips, and payroll payout batches.',
    avatar: '₹',
    userName: 'K. Nandy',
    userTitle: 'School Accountant',
    badge: 'Finance Desk',
    features: [
      { icon: 'CreditCard', title: 'Counter POS Terminal', desc: 'Instant cash, UPI QR & cheque receipts' },
      { icon: 'Receipt', title: 'Head-Wise Ledger', desc: 'Tuition, development, bus & lab heads' },
      { icon: 'Building2', title: 'Bank NEFT Batch', desc: 'Standard Excel files for SBI, HDFC upload' }
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
    title: 'HR & Staff Administration',
    outcome: 'Teacher service records, leave approvals, and shift attendance.',
    avatar: 'H',
    userName: 'T. Roy',
    userTitle: 'HR Manager',
    badge: 'Staff Admin',
    features: [
      { icon: 'Users', title: 'Faculty Dossiers', desc: 'Qualifications, service records & KYC' },
      { icon: 'CalendarCheck', title: 'Leave & Attendance', desc: 'Approval workflows & bio device sync' },
      { icon: 'Shield', title: 'Role Boundaries', desc: 'Controlled module permissions per staff' }
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
    name: 'Students',
    title: 'Student Portal & Mobile App',
    outcome: 'Personal timetables, homework, report cards, and notices.',
    avatar: 'S',
    userName: 'Ananya Roy',
    userTitle: 'Student • Class IX-A',
    badge: 'Student Portal',
    features: [
      { icon: 'Calendar', title: 'Class Schedule', desc: 'Daily periods & room allocations' },
      { icon: 'Award', title: 'Report Cards', desc: 'Term results, grades & teacher remarks' },
      { icon: 'Bell', title: 'School Notices', desc: 'Digital circulars & homework updates' }
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
