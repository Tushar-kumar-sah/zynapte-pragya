import React, { useState } from 'react';
import { 
  Users, Calendar, CheckCircle2, CreditCard, Bell, Smartphone, 
  ShieldCheck, School, Bus, BookOpen, FileSpreadsheet, KeyRound, 
  UserCheck, Award, Printer, ArrowRight, Eye, X, Check, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const modulesData = [
  {
    id: 'apaar-tracker',
    title: 'APAAR Consent & PEN Tracker',
    category: 'compliance',
    icon: <CheckCircle2 size={26} />,
    color: '#145EFF',
    gradient: 'linear-gradient(135deg, #145EFF 0%, #3B82F6 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #EFF6FF 100%)',
    borderColor: 'rgba(20, 94, 255, 0.28)',
    shadowColor: 'rgba(20, 94, 255, 0.22)',
    tagBg: 'rgba(20, 94, 255, 0.12)',
    bg: 'rgba(20, 94, 255, 0.08)',
    tag: 'Flagship Differentiator',
    tagColor: 'badge--blue',
    summary: 'Spot missing consent, name mismatches and PEN discrepancies before preparing the government sheet.',
    features: ['Guardian consent signed/logged', 'Aadhaar name vs School name comparison', 'UDISE+ & PEN cross-check', '1-Click CSV export for portal'],
    previewTitle: 'APAAR Readiness Validation Console',
    previewType: 'apaar',
    link: '/apaar-readiness'
  },
  {
    id: 'counter-fees',
    title: 'Counter Fee POS & Receipts',
    category: 'finance',
    icon: <CreditCard size={26} />,
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #ECFDF5 100%)',
    borderColor: 'rgba(5, 150, 105, 0.28)',
    shadowColor: 'rgba(5, 150, 105, 0.22)',
    tagBg: 'rgba(5, 150, 105, 0.12)',
    bg: 'rgba(5, 150, 105, 0.08)',
    tag: 'Instant 3-Sec Receipts',
    tagColor: 'badge--green',
    summary: 'Cash, UPI reference & cheque collection with dual receipts, sibling concessions and instant ledger posting.',
    features: ['Thermal & A4 printable receipts', 'Head-wise fee structure (Tuition, Lab, Bus)', 'Sibling fee linking & waivers', 'Real-time cash drawer tally'],
    previewTitle: 'Official Fee Receipt Preview (INR)',
    previewType: 'receipt',
    link: '/fees-management'
  },
  {
    id: 'admissions-crm',
    title: 'Admissions & Student Registry',
    category: 'students',
    icon: <Users size={26} />,
    color: '#742DDA',
    gradient: 'linear-gradient(135deg, #742DDA 0%, #9333EA 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #F5F3FF 100%)',
    borderColor: 'rgba(116, 45, 218, 0.28)',
    shadowColor: 'rgba(116, 45, 218, 0.22)',
    tagBg: 'rgba(116, 45, 218, 0.12)',
    bg: 'rgba(116, 45, 218, 0.08)',
    tag: 'Paperless Intake',
    tagColor: 'badge--violet',
    summary: 'Visual Kanban pipeline for enquiries, assisted Excel student migration, and single unified permanent student folders.',
    features: ['Walk-in & phone enquiry tracker', 'Assisted Excel/CSV bulk import', 'Guardian emergency directory', 'Birth certificate & photo vault'],
    previewTitle: 'Student Digital Folder & Dossier',
    previewType: 'student',
    link: '/student-management'
  },
  {
    id: 'smart-timetable',
    title: 'Conflict-Free Timetable Builder',
    category: 'academics',
    icon: <Calendar size={26} />,
    color: '#0284C7',
    gradient: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #F0F9FF 100%)',
    borderColor: 'rgba(2, 132, 199, 0.28)',
    shadowColor: 'rgba(2, 132, 199, 0.22)',
    tagBg: 'rgba(2, 132, 199, 0.12)',
    bg: 'rgba(2, 132, 199, 0.08)',
    tag: 'Zero Double-Booking',
    tagColor: 'badge--blue',
    summary: 'Automated clash prevention ensuring no teacher or lab room is scheduled in two places simultaneously.',
    features: ['Teacher workload equalizer', 'Lab, library & ground room allocation', 'Substitute teacher auto-suggester', 'Classroom print & mobile sync'],
    previewTitle: 'Live Timetable Grid & Conflict Detector',
    previewType: 'timetable',
    link: '/academics-timetable'
  },
  {
    id: 'attendance-roll',
    title: 'Daily Attendance & Leave Ledger',
    category: 'academics',
    icon: <UserCheck size={26} />,
    color: '#0D9488',
    gradient: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #F0FDFA 100%)',
    borderColor: 'rgba(13, 148, 136, 0.28)',
    shadowColor: 'rgba(13, 148, 136, 0.22)',
    tagBg: 'rgba(13, 148, 136, 0.12)',
    bg: 'rgba(0, 205, 229, 0.1)',
    tag: '1-Tap Roll Call',
    tagColor: 'badge--cyan',
    summary: 'Mobile roll call for class teachers, biometric sync options, staff punch log, and auto absent notices.',
    features: ['Mark whole class in under 40 seconds', 'Late arrival & half-day tracking', 'Medical leave approval workflow', 'UDISE+ attendance % report'],
    previewTitle: 'Morning Roll Call Register',
    previewType: 'attendance',
    link: '/attendance-management'
  },
  {
    id: 'report-cards',
    title: 'WBBSE / CBSE Exam Marksheets',
    category: 'academics',
    icon: <Award size={26} />,
    color: '#EC32CC',
    gradient: 'linear-gradient(135deg, #D926B5 0%, #F43F5E 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #FDF2F8 100%)',
    borderColor: 'rgba(236, 50, 204, 0.28)',
    shadowColor: 'rgba(236, 50, 204, 0.22)',
    tagBg: 'rgba(236, 50, 204, 0.12)',
    bg: 'rgba(236, 50, 204, 0.08)',
    tag: 'Board Standard Grades',
    tagColor: 'badge--magenta',
    summary: 'Subject-teacher marks entry, automatic grade conversion, moderation lock, and bulk PDF report cards.',
    features: ['WBBSE 1st, 2nd, 3rd Summative rules', 'CBSE Term 1 & 2 grade templates', 'Pass/Fail rule configurer', 'Principal digital signature seal'],
    previewTitle: 'Annual Progress & Marks Report Card',
    previewType: 'reportcard',
    link: '/exam-result-management'
  },
  {
    id: 'mobile-app',
    title: 'Mobile Apps (iOS & Android)',
    category: 'communication',
    icon: <Smartphone size={26} />,
    color: '#4F46E5',
    gradient: 'linear-gradient(135deg, #4338CA 0%, #6366F1 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #EEF2FF 100%)',
    borderColor: 'rgba(79, 70, 229, 0.28)',
    shadowColor: 'rgba(79, 70, 229, 0.22)',
    tagBg: 'rgba(79, 70, 229, 0.12)',
    bg: 'rgba(20, 94, 255, 0.08)',
    tag: 'Dedicated Portals',
    tagColor: 'badge--blue',
    summary: 'Teacher daily diary, parent fee alerts, homework uploads, and principal live campus oversight.',
    features: ['Teacher instant marks entry', 'Homework & worksheet attachments', 'Push notifications (Roadmap)', 'Secure biometric PIN access'],
    previewTitle: 'Mobile App Device Interface',
    previewType: 'mobile',
    link: '/school-erp-mobile-app'
  },
  {
    id: 'id-card-generator',
    title: 'Student & Staff ID Card Studio',
    category: 'students',
    icon: <Printer size={26} />,
    color: '#65A30D',
    gradient: 'linear-gradient(135deg, #4D7C0F 0%, #84CC16 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #F7FEE7 100%)',
    borderColor: 'rgba(101, 163, 13, 0.28)',
    shadowColor: 'rgba(101, 163, 13, 0.22)',
    tagBg: 'rgba(101, 163, 13, 0.12)',
    bg: 'rgba(132, 204, 22, 0.1)',
    tag: 'Batch Printing',
    tagColor: 'badge--green',
    summary: 'Generate print-ready identity cards with barcode/QR code, photo auto-crop, and blood group stamps.',
    features: ['Standard CR80 plastic card layout', 'Dynamic QR code for quick scanning', 'Bulk 8-cards-per-A4 sheet print', 'Emergency contact barcode'],
    previewTitle: 'Student Identification Smart Card',
    previewType: 'idcard',
    link: '/student-management'
  },
  {
    id: 'payroll-salary',
    title: 'Staff Payroll & Payslip Vault',
    category: 'finance',
    icon: <FileSpreadsheet size={26} />,
    color: '#D97706',
    gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #FFFBEB 100%)',
    borderColor: 'rgba(217, 119, 6, 0.28)',
    shadowColor: 'rgba(217, 119, 6, 0.22)',
    tagBg: 'rgba(217, 119, 6, 0.12)',
    bg: 'rgba(217, 119, 6, 0.08)',
    tag: 'Bank Transfer Export',
    tagColor: 'badge--orange',
    summary: 'Calculate gross-to-net salary, EPF, professional tax, leave deductions, and generate confidential PDF slips.',
    features: ['Attendance-linked leave deductions', 'Allowance & deduction matrix', 'Direct bank format salary payout file', 'Form 16 & annual tax summary'],
    previewTitle: 'Confidential Monthly Payslip',
    previewType: 'payslip',
    link: '/staff-payroll-management'
  },
  {
    id: 'multi-campus',
    title: 'Multi-Branch Master Switcher',
    category: 'administration',
    icon: <School size={26} />,
    color: '#1E40AF',
    gradient: 'linear-gradient(135deg, #172554 0%, #1E40AF 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #F1F5F9 100%)',
    borderColor: 'rgba(30, 64, 175, 0.28)',
    shadowColor: 'rgba(30, 64, 175, 0.22)',
    tagBg: 'rgba(30, 64, 175, 0.12)',
    bg: 'rgba(23, 37, 82, 0.08)',
    tag: 'Group Level Control',
    tagColor: 'badge--slate',
    summary: 'Switch between primary, secondary, and remote campuses in 1 click with segregated accounting.',
    features: ['Global student search across branches', 'Inter-branch teacher transfers', 'Consolidated group financial report', 'Campus-specific roll permissions'],
    previewTitle: 'Multi-Campus Executive Switcher',
    previewType: 'multibranch',
    link: '/multi-branch-management'
  },
  {
    id: 'bus-transport',
    title: 'Transport Routes & Bus Fleet',
    category: 'administration',
    icon: <Bus size={26} />,
    color: '#0891B2',
    gradient: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #ECFEFF 100%)',
    borderColor: 'rgba(8, 145, 178, 0.28)',
    shadowColor: 'rgba(8, 145, 178, 0.22)',
    tagBg: 'rgba(8, 145, 178, 0.12)',
    bg: 'rgba(2, 132, 199, 0.08)',
    tag: 'Stop-Wise Fare',
    tagColor: 'badge--blue',
    summary: 'Organize pickup points, allocate students to buses, generate driver pickup lists and collect transport fees.',
    features: ['Stop-wise tiered fee allocation', 'Driver & conductor verified IDs', 'Emergency contact manifest per bus', 'Capacity alert prevention'],
    previewTitle: 'Bus Route Allocation & Roster',
    previewType: 'transport',
    link: '/all-features'
  },
  {
    id: 'gate-security',
    title: 'Visitor Pass & Gate Security',
    category: 'administration',
    icon: <KeyRound size={26} />,
    color: '#DC2626',
    gradient: 'linear-gradient(135deg, #DC2626 0%, #F87171 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #FEF2F2 100%)',
    borderColor: 'rgba(220, 38, 38, 0.28)',
    shadowColor: 'rgba(220, 38, 38, 0.22)',
    tagBg: 'rgba(220, 38, 38, 0.12)',
    bg: 'rgba(220, 38, 38, 0.08)',
    tag: 'Campus Perimeter',
    tagColor: 'badge--red',
    summary: 'Issue digital visitor gate badges with web camera photo capture, reason logging, and host approval.',
    features: ['Instant gate badge print with photo', 'Parent pickup verification pin', 'Vendor material inward/outward log', 'Overstay alert to reception'],
    previewTitle: 'Visitor Entry Pass & Token',
    previewType: 'gatepass',
    link: '/security-hosting'
  },
  {
    id: 'school-diary',
    title: 'Digital Notice Ribbon & Diary',
    category: 'communication',
    icon: <Bell size={26} />,
    color: '#E11D48',
    gradient: 'linear-gradient(135deg, #E11D48 0%, #FB7185 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #FFF1F2 100%)',
    borderColor: 'rgba(225, 29, 72, 0.28)',
    shadowColor: 'rgba(225, 29, 72, 0.22)',
    tagBg: 'rgba(225, 29, 72, 0.12)',
    bg: 'rgba(236, 50, 204, 0.08)',
    tag: 'School-Governed',
    tagColor: 'badge--magenta',
    summary: 'Publish verified circulars, emergency holiday alerts, homework files, and school-controlled teacher messaging.',
    features: ['Target circulars to specific classes', 'Read-receipt acknowledgements', 'Controlled non-disruptive timings', 'Email delivery via school SMTP'],
    previewTitle: 'Official School Circular & Notice',
    previewType: 'notice',
    link: '/school-communication'
  },
  {
    id: 'library-manager',
    title: 'Library Barcode & Book Catalog',
    category: 'academics',
    icon: <BookOpen size={26} />,
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #FAF5FF 100%)',
    borderColor: 'rgba(139, 92, 246, 0.28)',
    shadowColor: 'rgba(139, 92, 246, 0.22)',
    tagBg: 'rgba(139, 92, 246, 0.12)',
    bg: 'rgba(116, 45, 218, 0.08)',
    tag: 'Barcode Ready',
    tagColor: 'badge--violet',
    summary: 'Issue and return books using standard USB barcode scanners with auto fine computation and book reservation.',
    features: ['ISBN / Accession number tracking', 'Overdue fine calculation on fee ledger', 'Lost book replacement workflow', 'Top readers & borrowing analytics'],
    previewTitle: 'Library Circulation & Stock Card',
    previewType: 'library',
    link: '/all-features'
  },
  {
    id: 'security-audit',
    title: 'Role-Based Audit & Access Shield',
    category: 'administration',
    icon: <ShieldCheck size={26} />,
    color: '#15803D',
    gradient: 'linear-gradient(135deg, #15803D 0%, #34D399 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #F0FDF4 100%)',
    borderColor: 'rgba(21, 128, 61, 0.28)',
    shadowColor: 'rgba(21, 128, 61, 0.22)',
    tagBg: 'rgba(21, 128, 61, 0.12)',
    bg: 'rgba(5, 150, 105, 0.08)',
    tag: 'Zero Data Leaks',
    tagColor: 'badge--green',
    summary: 'Granular permissions for 8 distinct roles, tamper-evident audit trails, and self-hosted database control.',
    features: ['Role boundary isolation', 'Every edit, fee delete & mark change logged', 'Two-factor account protection', 'School-owned server hosting'],
    previewTitle: 'System Audit Trail & Security Ledger',
    previewType: 'security',
    link: '/security-hosting'
  },
  {
    id: 'expense-ledger',
    title: 'Petty Cash & Expense Vouchers',
    category: 'finance',
    icon: <FileText size={26} />,
    color: '#EA580C',
    gradient: 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
    cardBg: 'linear-gradient(150deg, #FFFFFF 20%, #FFF7ED 100%)',
    borderColor: 'rgba(234, 88, 12, 0.28)',
    shadowColor: 'rgba(234, 88, 12, 0.22)',
    tagBg: 'rgba(234, 88, 12, 0.12)',
    bg: 'rgba(217, 119, 6, 0.08)',
    tag: 'Accountant Approved',
    tagColor: 'badge--orange',
    summary: 'Log vendor invoices, laboratory supplies, utility bills, and petty cash payments with receipt attachments.',
    features: ['Expense head categorisation', 'Principal approval limit threshold', 'Vendor GST tax record', 'Monthly expenditure vs budget chart'],
    previewTitle: 'Expense Payment Voucher (INR)',
    previewType: 'expense',
    link: '/fees-management'
  }
];

export default function IconicModules() {
  const [filter, setFilter] = useState('all');
  const [activeModal, setActiveModal] = useState(null);

  const filteredModules = filter === 'all' 
    ? modulesData 
    : modulesData.filter(m => m.category === filter);

  return (
    <section className="section iconic-modules-section" id="iconic-modules">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            COMPREHENSIVE ERP MODULES &amp; UTILITIES
          </div>
          <h2>Iconic Modules. Built for Everyday School Workflows.</h2>
          <p>
            No clutter, no disconnected spreadsheets. Click any module to preview its live document, receipt, or workflow in action.
          </p>
        </div>

        {/* Category Filters */}
        <div className="module-filter-bar">
          <button 
            className={`module-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All 16 Modules
          </button>
          <button 
            className={`module-filter-btn ${filter === 'compliance' ? 'active' : ''}`}
            onClick={() => setFilter('compliance')}
          >
            APAAR &amp; Compliance
          </button>
          <button 
            className={`module-filter-btn ${filter === 'finance' ? 'active' : ''}`}
            onClick={() => setFilter('finance')}
          >
            Finance &amp; Fees
          </button>
          <button 
            className={`module-filter-btn ${filter === 'academics' ? 'active' : ''}`}
            onClick={() => setFilter('academics')}
          >
            Academics &amp; Exams
          </button>
          <button 
            className={`module-filter-btn ${filter === 'students' ? 'active' : ''}`}
            onClick={() => setFilter('students')}
          >
            Students &amp; ID Cards
          </button>
          <button 
            className={`module-filter-btn ${filter === 'administration' ? 'active' : ''}`}
            onClick={() => setFilter('administration')}
          >
            Admin &amp; Security
          </button>
          <button 
            className={`module-filter-btn ${filter === 'communication' ? 'active' : ''}`}
            onClick={() => setFilter('communication')}
          >
            Apps &amp; Notices
          </button>
        </div>

        {/* High Density Iconic Grid */}
        <div className="iconic-grid">
          {filteredModules.map((item) => (
            <div 
              key={item.id} 
              className="iconic-card group"
              style={{
                background: item.cardBg,
                borderColor: item.borderColor,
                boxShadow: `0 6px 18px -4px ${item.shadowColor}`,
                '--hover-border': item.color,
                '--hover-shadow': item.shadowColor,
                '--hover-gradient': item.gradient
              }}
              onClick={() => setActiveModal(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setActiveModal(item); }}
            >
              <div className="iconic-top-accent" style={{ background: item.gradient }} />

              <div className="iconic-card-top">
                <div 
                  className="iconic-icon-box"
                  style={{ 
                    background: item.gradient, 
                    color: '#FFFFFF',
                    boxShadow: `0 8px 18px -4px ${item.color}55`
                  }}
                >
                  {item.icon}
                </div>
                <span 
                  className="iconic-tag"
                  style={{
                    backgroundColor: item.tagBg,
                    color: item.color,
                    borderColor: item.borderColor,
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                >
                  {item.tag}
                </span>
              </div>

              <h3 className="iconic-card-title">{item.title}</h3>
              <p className="iconic-card-desc">{item.summary}</p>

              <div className="iconic-card-footer" style={{ borderTopColor: item.borderColor }}>
                <span className="iconic-preview-prompt" style={{ color: item.color }}>
                  <Eye size={14} color={item.color} />
                  <span>Click to Preview</span>
                </span>
                <span 
                  className="iconic-arrow-btn" 
                  aria-hidden="true"
                  style={{ 
                    background: `${item.color}15`,
                    color: item.color
                  }}
                >
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="iconic-bottom-banner">
          <div className="iconic-bottom-text">
            <strong>Need a custom configuration for your board?</strong>
            <span> Pragya supports ICSE, CBSE, WBBSE, WBCHSE and State Boards out of the box with zero third-party software needed.</span>
          </div>
          <Link to="/contact" className="btn btn--primary btn--sm">
            Schedule Live Walkthrough
          </Link>
        </div>
      </div>

      {/* Interactive Module Preview Modal */}
      {activeModal && (
        <div className="modal-backdrop" onClick={() => setActiveModal(null)} role="dialog" aria-modal="true">
          <div className="module-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-left">
                <div 
                  className="modal-icon-badge"
                  style={{ color: activeModal.color, backgroundColor: activeModal.bg }}
                >
                  {activeModal.icon}
                </div>
                <div>
                  <h3 className="modal-title">{activeModal.title}</h3>
                  <span className="modal-subtitle">{activeModal.previewTitle}</span>
                </div>
              </div>
              <button 
                className="modal-close-btn" 
                onClick={() => setActiveModal(null)}
                aria-label="Close Preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              {/* Realistic Mockup Simulation based on type */}
              <div className="modal-preview-screen">
                {activeModal.previewType === 'receipt' && (
                  <div className="simulated-receipt">
                    <div className="receipt-header">
                      <div className="receipt-school-name">ST. XAVIER'S CONVENT SCHOOL</div>
                      <div className="receipt-meta">AFFILIATED TO WBBSE / CBSE • SCHOOL CODE: WB-7104</div>
                      <div className="receipt-badge">FEE RECEIPT (DUPLICATE COUNTER COPY)</div>
                    </div>
                    <div className="receipt-divider" />
                    <div className="receipt-info-grid">
                      <div><strong>Receipt No:</strong> REC-2026-0842</div>
                      <div><strong>Date:</strong> 28 Oct 2026, 11:42 AM</div>
                      <div><strong>Student:</strong> Ananya Das (Roll 14)</div>
                      <div><strong>Class:</strong> Class IX, Section A</div>
                      <div><strong>Guardian:</strong> Subhash Das</div>
                      <div><strong>Payment Mode:</strong> Counter Cash / POS</div>
                    </div>
                    <table className="receipt-table">
                      <thead>
                        <tr>
                          <th>Fee Item Description</th>
                          <th>Quarter / Period</th>
                          <th style={{ textAlign: 'right' }}>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Tuition &amp; Smart Class Fee</td>
                          <td>Q3 (Oct - Dec 2026)</td>
                          <td style={{ textAlign: 'right' }}>₹4,500.00</td>
                        </tr>
                        <tr>
                          <td>Computer &amp; Science Lab Maintenance</td>
                          <td>Annual 2026</td>
                          <td style={{ textAlign: 'right' }}>₹1,200.00</td>
                        </tr>
                        <tr>
                          <td>Term Examination &amp; Evaluation Fee</td>
                          <td>Term II Summative</td>
                          <td style={{ textAlign: 'right' }}>₹850.00</td>
                        </tr>
                        <tr>
                          <td>Sibling Concession (Applied)</td>
                          <td>Rule: Younger Sibling 10%</td>
                          <td style={{ textAlign: 'right', color: 'var(--color-success)' }}>-₹450.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="2"><strong>Total Amount Received (INR)</strong></td>
                          <td style={{ textAlign: 'right' }}><strong style={{ color: 'var(--color-ink)', fontSize: '1.1rem' }}>₹6,100.00</strong></td>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="receipt-footer">
                      <div>Amount in words: Six Thousand One Hundred Rupees Only</div>
                      <div className="receipt-stamp">Pragya ERP Verified • Cashier ID: CASH-03</div>
                    </div>
                  </div>
                )}

                {activeModal.previewType === 'apaar' && (
                  <div className="simulated-apaar-sheet">
                    <div className="simulated-sheet-bar">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                      <span className="sheet-title">APAAR Readiness Validation Engine • Class X-B</span>
                      <span className="status-pill status-pill--valid">100% Pre-Format Checked</span>
                    </div>
                    <div className="apaar-stats-row">
                      <div className="apaar-stat-box">
                        <span className="label">Total Enrolled</span>
                        <span className="value">42</span>
                      </div>
                      <div className="apaar-stat-box">
                        <span className="label">Consent Logged</span>
                        <span className="value" style={{ color: 'var(--color-success)' }}>39 (92.8%)</span>
                      </div>
                      <div className="apaar-stat-box">
                        <span className="label">PEN Verified</span>
                        <span className="value" style={{ color: 'var(--color-blue)' }}>38 Match</span>
                      </div>
                      <div className="apaar-stat-box">
                        <span className="label">Ready to Export</span>
                        <span className="value" style={{ color: 'var(--color-violet)' }}>38 Students</span>
                      </div>
                    </div>
                    <div className="sheet-table-wrap">
                      <table className="sheet-table">
                        <thead>
                          <tr>
                            <th>Student Name</th>
                            <th>School Record DOB</th>
                            <th>Aadhaar Match</th>
                            <th>Consent Form</th>
                            <th>PEN Discrepancy</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>Aarav Sen</strong> (Roll 01)</td>
                            <td>14-Mar-2010</td>
                            <td><span className="tag-ok"><Check size={12} /> Exact Match</span></td>
                            <td><span className="tag-ok"><Check size={12} /> Signed Form #82</span></td>
                            <td><span className="tag-none">None (WB-94812)</span></td>
                            <td><span className="badge badge--green">Ready to Export</span></td>
                          </tr>
                          <tr>
                            <td><strong>Debolina Roy</strong> (Roll 02)</td>
                            <td>08-Jul-2010</td>
                            <td><span className="tag-warn">Name Spelling Difference</span></td>
                            <td><span className="tag-ok"><Check size={12} /> Signed Form #83</span></td>
                            <td><span className="tag-warn">Requires Check</span></td>
                            <td><span className="badge badge--orange">Discrepancy Flagged</span></td>
                          </tr>
                          <tr>
                            <td><strong>Sayan Banerjee</strong> (Roll 03)</td>
                            <td>22-Nov-2010</td>
                            <td><span className="tag-ok"><Check size={12} /> Exact Match</span></td>
                            <td><span className="tag-warn">Pending Parent Sign</span></td>
                            <td><span className="tag-none">None</span></td>
                            <td><span className="badge badge--red">Consent Missing</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeModal.previewType === 'idcard' && (
                  <div className="simulated-idcard-wrap">
                    <div className="simulated-idcard">
                      <div className="idcard-top">
                        <div className="idcard-school">PRAGYA ACADEMY HIGH SCHOOL</div>
                        <div className="idcard-affil">KOLKATA • ESTD. 1994</div>
                      </div>
                      <div className="idcard-body">
                        <div className="idcard-photo-box">
                          <div className="idcard-avatar-sample">🎓</div>
                          <span className="idcard-student-type">STUDENT</span>
                        </div>
                        <div className="idcard-details">
                          <div className="idcard-name">PRIYANKA MUKHERJEE</div>
                          <div className="idcard-field"><span>Roll No:</span> <strong>X-A-18</strong></div>
                          <div className="idcard-field"><span>Admission:</span> <strong>ADM/2022/419</strong></div>
                          <div className="idcard-field"><span>Blood Group:</span> <strong style={{ color: 'var(--color-danger)' }}>O +ve</strong></div>
                          <div className="idcard-field"><span>Emergency Phone:</span> <strong>+91 98311 00224</strong></div>
                          <div className="idcard-field"><span>Valid Till:</span> <strong>31 March 2027</strong></div>
                        </div>
                      </div>
                      <div className="idcard-barcode-strip">
                        <div className="barcode-mock">|||||||| | ||||| |||| | ||||||| |||</div>
                        <span>UID: 2026-X-18-0482</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeModal.previewType !== 'receipt' && activeModal.previewType !== 'apaar' && activeModal.previewType !== 'idcard' && (
                  <div className="simulated-generic-card">
                    <div className="generic-preview-icon" style={{ color: activeModal.color }}>
                      {activeModal.icon}
                    </div>
                    <h4>{activeModal.title} Interactive Interface</h4>
                    <p style={{ maxWidth: '480px', margin: '0 auto 16px', color: 'var(--color-slate-600)' }}>
                      Configured with role permissions, high-contrast layouts, fast keyboard shortcuts, and instant export options.
                    </p>
                    <div className="generic-chips">
                      <span className="generic-chip">⚡ Instant Cloud &amp; Local Sync</span>
                      <span className="generic-chip">🛡️ Role-Protected Access</span>
                      <span className="generic-chip">📄 Multi-Format Export (PDF/Excel)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Module Feature Checklist */}
              <div className="modal-features-list">
                <h4>What You Can Do in This Module:</h4>
                <div className="modal-features-grid">
                  {activeModal.features.map((feat, i) => (
                    <div key={i} className="modal-feature-item">
                      <CheckCircle2 size={16} color="var(--color-success)" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Link to={activeModal.link} className="btn btn--primary" onClick={() => setActiveModal(null)}>
                <span>Explore Full Module Guide</span>
                <ArrowRight size={16} />
              </Link>
              <button className="btn btn--secondary" onClick={() => setActiveModal(null)}>
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
