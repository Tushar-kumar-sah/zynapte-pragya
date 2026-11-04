export const rolesData = {
  principal: {
    id: 'principal',
    name: 'Principals',
    title: 'Principal & Leadership Desk',
    outcome: "Real-time bird's-eye oversight across campus operations, collections, and compliance.",
    avatar: 'P',
    color: '#1D68D8',
    gradient: 'linear-gradient(135deg, #1D68D8 0%, #3B82F6 100%)',
    image: '/real-photos/real-staff-meeting.jpg',
    userName: 'Dr. Vikram Singh',
    userTitle: 'Principal • Pragya Model Academy',
    badge: 'Executive Leadership Desk',
    liveTag: 'Live Campus Roll Active',
    features: [
      { icon: 'BarChart3', title: "Live Bird's-Eye Roll", desc: 'Real-time attendance & collections across all branches' },
      { icon: 'ShieldCheck', title: 'APAAR Compliance', desc: 'Class-wise student consent, PEN generation & UDISE+' },
      { icon: 'Lock', title: 'Full Role Audit Trail', desc: 'Granular permissions & zero-leak role boundaries' }
    ],
    chips: ['Daily Roll: 96.4%', 'Fees: ₹11.84L Today', 'APAAR: 92.8% Ready'],
    points: [
      'Instant morning briefing: attendance roll, counter fee intake, and pending approvals.',
      'Institutional APAAR consent tracking with 1-click central board exports.',
      'Comprehensive administrative audit logs with zero spreadsheet leaks.'
    ],
    cta: "See Principal's View in Action"
  },
  administrator: {
    id: 'administrator',
    name: 'Administrators',
    title: 'Admin & Operations Console',
    outcome: 'Centralized school structure, batch imports, student dossiers, and task queues.',
    avatar: 'A',
    color: '#4338CA',
    gradient: 'linear-gradient(135deg, #4338CA 0%, #6366F1 100%)',
    image: '/real-photos/real-indian-teacher-computer.jpg',
    userName: 'M. Chakraborty',
    userTitle: 'Head Administrator • Main Campus',
    badge: 'Operations & Academic Structure',
    liveTag: 'Central System Online',
    features: [
      { icon: 'Settings', title: 'Campus Structure', desc: 'Configure academic sessions, classes & sections' },
      { icon: 'Layers', title: 'Task Queue', desc: 'Admissions, approvals & verification checkpoints' },
      { icon: 'BookOpen', title: 'Board Alignment', desc: 'CBSE, ICSE & State curriculum compliance' }
    ],
    chips: ['9 Core Modules', 'Multi-Campus Sync', 'Fast CSV Import'],
    points: [
      'Central academic structure: academic years, branches, classes, and sections.',
      'Actionable task queue for pending admissions and document verifications.',
      'Automated alignment with CBSE, ICSE, and state regulatory requirements.'
    ],
    cta: 'Explore Admin Configuration'
  },
  teacher: {
    id: 'teacher',
    name: 'Teachers',
    title: 'Teacher Desk & Mobile Roll Call',
    outcome: 'Quick 30-second roll call, marks entry, subject syllabus, and period schedule.',
    avatar: 'T',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    image: '/real-photos/real-teacher-instruct.jpg',
    userName: 'P. Sengupta',
    userTitle: 'Senior Faculty • Class IX-A',
    badge: 'Faculty & Classroom Roll',
    liveTag: 'Period Schedule Synced',
    features: [
      { icon: 'UserCheck', title: '30-Sec Roll Call', desc: 'Instant mobile or web attendance with SMS absent alert' },
      { icon: 'Award', title: 'Marks & Grading', desc: 'Auto calculation of thresholds, percentiles & ranks' },
      { icon: 'Calendar', title: 'Period Timetable', desc: 'Conflict-free daily periods and substitution alerts' }
    ],
    chips: ['30-Sec Attendance', 'Automated Grading', 'Timetable Sync'],
    points: [
      'Rapid morning roll call from mobile app or desktop with instant parent alerts.',
      'Continuous term marks recording with automated board grade calculation.',
      'Live conflict-free timetable view with automated teacher substitution.'
    ],
    cta: "Explore Teacher's Workflow"
  },
  admissions: {
    id: 'admissions',
    name: 'Admissions',
    title: 'Admissions & Front Office Desk',
    outcome: 'Enquiries to confirmed admissions with verified student files.',
    avatar: 'F',
    color: '#0284C7',
    gradient: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 100%)',
    image: '/real-photos/real-fee-accounting.jpg',
    userName: 'R. Goswami',
    userTitle: 'Admissions Officer',
    badge: 'Front Office & Intake',
    liveTag: 'Intake Portal Active',
    features: [
      { icon: 'UserPlus', title: 'Enquiry Board', desc: 'Track visits, forms & applications' },
      { icon: 'FileUp', title: 'Bulk CSV Import', desc: '1-click upload with error validation' },
      { icon: 'Search', title: 'Student Dossier', desc: 'Instant parent-call lookup' }
    ],
    chips: ['Live Enquiry Board', 'Bulk CSV Import', '1-Click Student Lookup'],
    points: [
      'Kanban board for enquiries, campus visits, and digital application forms.',
      'Guided Excel/CSV student data import with error correction rules.',
      'Instant parent-call lookup for fees, attendance, and student history.'
    ],
    cta: 'See Admissions Workflow'
  },
  accountant: {
    id: 'accountant',
    name: 'Accounts',
    title: 'Accounts Desk & Fee Counter POS',
    outcome: 'High-speed counter fee collection, 3-sec thermal slips, and payroll batches.',
    avatar: '₹',
    color: '#EA580C',
    gradient: 'linear-gradient(135deg, #EA580C 0%, #F97316 100%)',
    image: '/real-photos/real-fee-accounting.jpg',
    userName: 'K. Nandy',
    userTitle: 'School Bursar & Accountant',
    badge: 'Finance & Counter POS',
    liveTag: 'Counter POS Ready',
    features: [
      { icon: 'CreditCard', title: '3-Sec Thermal Slip', desc: 'Instant cash, dynamic UPI QR & dual receipts' },
      { icon: 'Receipt', title: 'Head-Wise Ledger', desc: 'Tuition, development, transport, lab & concession' },
      { icon: 'Building2', title: 'Bank NEFT Batch', desc: 'Direct corporate Excel export for salary disbursement' }
    ],
    chips: ['3-Sec Thermal Slip', 'UPI QR Instant', 'EPF & PTax Ready'],
    points: [
      'High-speed fee collection with instant receipt printing in under 3 seconds.',
      'Clean head-wise INR ledger accounting with daily reconciliation closing.',
      'Automated payroll calculation with bank NEFT payment files.'
    ],
    cta: 'See Fee Collection Workflow'
  },
  hr: {
    id: 'hr',
    name: 'HR & Staff',
    title: 'Staff Administration & Payroll',
    outcome: 'Faculty service records, biometric device sync, and automated monthly pay runs.',
    avatar: 'H',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
    image: '/real-photos/real-staff-meeting.jpg',
    userName: 'T. Roy',
    userTitle: 'HR & Personnel Head',
    badge: 'Faculty & Staff Administration',
    liveTag: 'Biometric Sync Online',
    features: [
      { icon: 'Users', title: 'Staff Dossiers', desc: 'Qualifications, service records, KYC & salary tiers' },
      { icon: 'CalendarCheck', title: 'Biometric Sync', desc: 'Automatic attendance punch-in integration' },
      { icon: 'Shield', title: 'Role Scopes', desc: 'Strict module access control per staff designation' }
    ],
    chips: ['Digital Staff Files', 'Biometric / App Sync', 'Salary Tier Config'],
    points: [
      'Comprehensive digital dossiers for teachers and non-teaching personnel.',
      'Seamless biometric fingerprint / facial punch sync directly to payroll.',
      'Role-based permissions ensuring staff only access authorized data.'
    ],
    cta: 'Explore HR Workflows'
  },
  student: {
    id: 'student',
    name: 'Students & Parents',
    title: 'Student Portal & Parent Mobile App',
    outcome: 'Personal timetables, homework, report cards, and notices.',
    avatar: 'S',
    color: '#2563EB',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)',
    image: '/real-photos/real-students-study.jpg',
    userName: 'Ananya Roy',
    userTitle: 'Student • Class IX-A',
    badge: 'Mobile App & Portal',
    liveTag: 'Parent App Connected',
    features: [
      { icon: 'Clock', title: 'Class Timetable', desc: 'Daily periods & live room changes' },
      { icon: 'FileText', title: 'Digital Report Cards', desc: 'Term marks & board grade cards' },
      { icon: 'Bell', title: 'School Notices', desc: 'Instant WhatsApp & app alerts' }
    ],
    chips: ['Real-Time Grades', 'Homework Tracker', 'Emergency Broadcasts'],
    points: [
      'Clean student dashboard with timetables and homework.',
      'Instant parent notifications for attendance and announcements.',
      'Downloadable digitally signed report cards.'
    ],
    cta: 'Explore Student Experience'
  }
};
