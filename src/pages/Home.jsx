import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Shield, Users, Layers, Calendar, 
  CreditCard, Bell, Smartphone, School, Award, Sparkles, Star, 
  Check, Lock, ShieldCheck, Database, RefreshCw, Key, Cloud, 
  MessageSquare, UserPlus, BookOpen, FileText, Library, Send, 
  Building2, Sun, Moon, Laptop, Eye, Printer, Phone, ChevronRight
} from 'lucide-react';
import ErpMockup from '../components/ErpMockup';
import ApaarTracker from '../components/ApaarTracker';
import DemoForm from '../components/DemoForm';
import FaqAccordion from '../components/FaqAccordion';
import BottomCta from '../components/BottomCta';
import StatsBanner from '../components/StatsBanner';
import IconicModules from '../components/IconicModules';
import MobileAppsShowcase from '../components/MobileAppsShowcase';
import VisualWorkflow from '../components/VisualWorkflow';
import { rolesData } from '../data/rolesData';

export default function Home() {
  const [selectedRole, setSelectedRole] = useState('principal');
  const role = rolesData[selectedRole] || rolesData['principal'];

  // 9 Core Modules from Brochure Page 2
  const coreNineModules = [
    {
      id: 'admissions',
      title: 'Admissions',
      subtitle: 'Enquiry to enrolment',
      icon: <UserPlus size={24} />,
      colorClass: 'module-accent--blue',
      path: '/student-management'
    },
    {
      id: 'attendance',
      title: 'Attendance',
      subtitle: 'Students and staff',
      icon: <Calendar size={24} />,
      colorClass: 'module-accent--purple',
      path: '/attendance-management'
    },
    {
      id: 'academics',
      title: 'Academics',
      subtitle: 'Classes and timetables',
      icon: <BookOpen size={24} />,
      colorClass: 'module-accent--orange',
      path: '/academics-timetable'
    },
    {
      id: 'exams',
      title: 'Exams',
      subtitle: 'Marks to report cards',
      icon: <Award size={24} />,
      colorClass: 'module-accent--green',
      path: '/exam-result-management'
    },
    {
      id: 'fees',
      title: 'Fees',
      subtitle: 'Receipts and dues',
      icon: <CreditCard size={24} />,
      colorClass: 'module-accent--coral',
      path: '/fees-management'
    },
    {
      id: 'payroll',
      title: 'Payroll',
      subtitle: 'Payslips for every role',
      icon: <FileText size={24} />,
      colorClass: 'module-accent--emerald',
      path: '/staff-payroll-management'
    },
    {
      id: 'library',
      title: 'Library',
      subtitle: 'Catalogue and issues',
      icon: <Library size={24} />,
      colorClass: 'module-accent--cyan',
      path: '/features'
    },
    {
      id: 'communication',
      title: 'Communication',
      subtitle: 'Notices and circulars',
      icon: <Send size={24} />,
      colorClass: 'module-accent--violet',
      path: '/school-communication'
    },
    {
      id: 'multi-branch',
      title: 'Multi-Branch',
      subtitle: 'Many campuses, one view',
      icon: <Building2 size={24} />,
      colorClass: 'module-accent--gold',
      path: '/multi-branch-management'
    }
  ];

  // Active Payslip Structure from Page 4
  const [activePayslipTab, setActivePayslipTab] = useState('teaching');

  return (
    <>
      {/* ==========================================================================
          01 / HERO SECTION WITH SOCIAL PROOF, LIVE STATUS & BROCHURE HIGHLIGHTS
          ========================================================================== */}
      <section className="section hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                NEXT-GEN INDIAN SCHOOL &amp; COLLEGE ERP
              </div>

              <h1 className="hero-title">
                One Platform. <span className="hero-title-highlight">Every School Day.</span>
              </h1>

              <p className="hero-subtitle">
                <strong>Empowering Schools &amp; Colleges. Enriching Futures.</strong><br />
                Bring admissions, academics, attendance, fees, results and staff management together—and see which students are ready for APAAR submission.
              </p>

              <div className="hero-cta-group">
                <Link to="/contact" className="btn btn--primary btn--lg">
                  Book a Live Demo
                </Link>
                <a href="#iconic-modules" className="btn btn--secondary btn--lg">
                  Explore 16 Modules
                </a>
              </div>

              {/* Page 1: 3 Highlight Value Cards (Meta Tech, AWS, Secure by Design) */}
              <div className="hero-value-pillars-grid">
                <div className="value-pillar-card value-pillar-card--blue">
                  <div className="value-pillar-icon">
                    <MessageSquare size={18} />
                  </div>
                  <div className="value-pillar-text">
                    <strong>Meta Tech Provider</strong>
                    <small>WhatsApp-ready communication</small>
                  </div>
                </div>

                <div className="value-pillar-card value-pillar-card--teal">
                  <div className="value-pillar-icon">
                    <Cloud size={18} />
                  </div>
                  <div className="value-pillar-text">
                    <strong>Deployed on AWS</strong>
                    <small>Reliable cloud hosting (99.9%)</small>
                  </div>
                </div>

                <div className="value-pillar-card value-pillar-card--violet">
                  <div className="value-pillar-icon">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="value-pillar-text">
                    <strong>Secure by Design</strong>
                    <small>Role-based access &amp; audit</small>
                  </div>
                </div>
              </div>

              {/* Page 1 & 3: Board & Regulatory Alignment Ribbon (7 Chips) */}
              <div className="hero-regulatory-strip">
                <span className="board-pill board-pill--orange">APAAR READY</span>
                <span className="board-pill board-pill--green">UDISE+ READY</span>
                <span className="board-pill board-pill--coral">KHELO INDIA READY</span>
                <span className="board-pill board-pill--blue">CBSE · ICSE</span>
                <span className="board-pill board-pill--teal">WEST BENGAL BOARD</span>
                <span className="board-pill board-pill--purple">COLLEGES READY</span>
              </div>

              {/* Social Proof Avatar Pile & Device Scope */}
              <div className="hero-social-proof">
                <div className="avatar-stack">
                  <span className="avatar-stack-item">👨‍🏫</span>
                  <span className="avatar-stack-item">👩‍💼</span>
                  <span className="avatar-stack-item">🧑‍💻</span>
                  <span className="avatar-stack-item">👨‍⚖️</span>
                </div>
                <div className="rating-block">
                  <div className="rating-stars">★★★★★</div>
                  <div className="rating-text">
                    <strong>4.9/5 Rating</strong> from 1,200+ School Leaders &amp; Principals
                  </div>
                </div>
              </div>

              <div className="hero-platforms-bar">
                <small>Schools &amp; Colleges &nbsp;|&nbsp; Android · iPhone · Web &nbsp;|&nbsp; Light &amp; Dark mode</small>
              </div>
            </div>

            <ErpMockup />
          </div>
        </div>
      </section>

      {/* ==========================================================================
          02 / STATS COUNTER BANNER
          ========================================================================== */}
      <StatsBanner />

      {/* ==========================================================================
          03 / BROCHURE PAGE 2 SECTION: "EVERYTHING YOUR SCHOOL NEEDS. NOTHING IT DOESN'T."
          ========================================================================== */}
      <section className="section section--white" id="everything-school-needs">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              ONE CONNECTED PLATFORM
            </div>
            <h2>Everything your school needs. Nothing it doesn't.</h2>
            <p>
              Unified administrative clarity across classrooms, finance, academics and governance—without bloat, clutter or steep learning curves.
            </p>
          </div>

          {/* Split High-Impact Visual Cards (Smart Classrooms & Executive Analytics) */}
          <div className="brochure-split-visuals-grid">
            <div className="visual-hero-card visual-hero-card--classroom">
              <div className="visual-hero-badge">
                <Sparkles size={14} />
                <span>SMART CLASSROOMS</span>
              </div>
              <div className="visual-hero-content">
                <h3>Digital Teaching &amp; Student Collaboration</h3>
                <p>Tablet-ready attendance roll calls, interactive homework assignments, doubt-clearing and real-time parent notifications.</p>
                <div className="visual-chips-list">
                  <span>✓ 30-sec Morning Roll Call</span>
                  <span>✓ Syllabus Progress Tracker</span>
                  <span>✓ Instant Absent Parent SMS</span>
                </div>
              </div>
            </div>

            <div className="visual-hero-card visual-hero-card--analytics">
              <div className="visual-hero-badge visual-hero-badge--analytics">
                <Laptop size={14} />
                <span>EXECUTIVE ANALYTICS</span>
              </div>
              <div className="visual-hero-content">
                <h3>Leadership KPI &amp; Governance Cockpit</h3>
                <p>Principal and Director dashboards displaying today's counter receipts, fee dues recovery, board syllabus pacing and APAAR progress.</p>
                <div className="visual-chips-list">
                  <span>✓ Real-time Cash POS Drawer</span>
                  <span>✓ Class-wise Defaulter Aging</span>
                  <span>✓ Pre-submission APAAR Audit</span>
                </div>
              </div>
            </div>
          </div>

          {/* 9 Core ERP Modules Grid from Brochure Page 2 */}
          <div className="core-nine-modules-grid">
            {coreNineModules.map((mod) => (
              <Link to={mod.path} key={mod.id} className={`core-module-card ${mod.colorClass}`}>
                <div className="core-module-icon-wrap">
                  {mod.icon}
                </div>
                <div className="core-module-text">
                  <h4>{mod.title}</h4>
                  <p>{mod.subtitle}</p>
                </div>
                <div className="core-module-arrow">
                  <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>

          {/* 5 Roles Strip from Brochure Page 2: "One system. Every role." */}
          <div className="roles-strip-container">
            <div className="roles-strip-header">
              <span className="roles-strip-tagline">One system. Every role.</span>
            </div>
            <div className="roles-strip-pills" role="tablist">
              <button 
                className={`role-strip-btn role-strip-btn--principals ${selectedRole === 'principal' ? 'active' : ''}`}
                onClick={() => setSelectedRole('principal')}
              >
                PRINCIPALS
              </button>
              <button 
                className={`role-strip-btn role-strip-btn--admins ${selectedRole === 'administrator' ? 'active' : ''}`}
                onClick={() => setSelectedRole('administrator')}
              >
                ADMINISTRATORS
              </button>
              <button 
                className={`role-strip-btn role-strip-btn--teachers ${selectedRole === 'teacher' ? 'active' : ''}`}
                onClick={() => setSelectedRole('teacher')}
              >
                TEACHERS
              </button>
              <button 
                className={`role-strip-btn role-strip-btn--accounts ${selectedRole === 'accountant' ? 'active' : ''}`}
                onClick={() => setSelectedRole('accountant')}
              >
                ACCOUNTS
              </button>
              <button 
                className={`role-strip-btn role-strip-btn--hr ${selectedRole === 'hr' ? 'active' : ''}`}
                onClick={() => setSelectedRole('hr')}
              >
                HR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          04 / BROCHURE PAGE 3 SECTION: "READY FOR THE WAY INDIAN SCHOOLS WORK."
          ========================================================================== */}
      <section className="section section--soft" id="indian-schools-work">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              THOUGHTFULLY DESIGNED FOR INDIAN SCHOOLS • BUILT FOR INDIA
            </div>
            <h2>Ready for the way Indian schools work.</h2>
            <p>
              Designed ground-up around cash/UPI counter collections, thermal POS slips, UDISE+ compliance, Bengali/English medium catalogues, and Khelo India athletic registrations.
            </p>
          </div>

          {/* 7 Alignment Ribbon Chips */}
          <div className="indian-boards-ribbon">
            <div className="ribbon-chip ribbon-chip--violet"><strong>APAAR</strong> READY</div>
            <div className="ribbon-chip ribbon-chip--blue"><strong>UDISE+</strong> READY</div>
            <div className="ribbon-chip ribbon-chip--orange"><strong>Khelo India</strong> READY</div>
            <div className="ribbon-chip ribbon-chip--green"><strong>CBSE</strong> ALIGNED</div>
            <div className="ribbon-chip ribbon-chip--red"><strong>ICSE</strong> ALIGNED</div>
            <div className="ribbon-chip ribbon-chip--teal"><strong>WB Board</strong> ALIGNED</div>
            <div className="ribbon-chip ribbon-chip--purple"><strong>Colleges</strong> READY</div>
          </div>

          {/* Showcases from Page 3: Fees Module (Receipt) & Library Module */}
          <div className="brochure-page3-showcase-grid">
            {/* Fees Showcase with Real Receipt */}
            <div className="page3-card page3-card--fees">
              <div className="page3-card-header">
                <div className="page3-icon-badge page3-icon-badge--fees">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h3>Fees Module</h3>
                  <small>Class-wise fee structures, receipts &amp; collections, dues and payment history</small>
                </div>
              </div>

              {/* Interactive Exact Fee Receipt from Page 3 of Brochure */}
              <div className="brochure-receipt-box">
                <div className="receipt-box-top">
                  <div>
                    <strong>Fee Receipt</strong>
                    <span className="receipt-reg-no">PRG-REC-2026-1044</span>
                  </div>
                  <span className="receipt-status-badge">RECEIPT ISSUED</span>
                </div>

                <div className="receipt-line-items">
                  <div className="receipt-row">
                    <span>Tuition – Term 2</span>
                    <strong>₹ 12,500</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Transport</span>
                    <strong>₹ 3,000</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Library</span>
                    <strong>₹ 500</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Exam fee</span>
                    <strong>₹ 1,200</strong>
                  </div>
                </div>

                <div className="receipt-total-row">
                  <span>Paid (Cash / UPI Counter POS)</span>
                  <strong className="text-emerald">₹ 17,200</strong>
                </div>

                <div className="receipt-footer-action">
                  <small>Instant 3-sec Thermal Slip &amp; SMS Receipt</small>
                  <Link to="/fees-management" className="btn btn--secondary btn--sm">
                    Explore Fees POS
                  </Link>
                </div>
              </div>

              <ul className="page3-checklist">
                <li><Check size={16} className="text-green" /> <span>Class-wise fee structures</span></li>
                <li><Check size={16} className="text-green" /> <span>Receipts &amp; collections</span></li>
                <li><Check size={16} className="text-green" /> <span>Dues and payment history</span></li>
              </ul>
            </div>

            {/* Library Showcase from Page 3 */}
            <div className="page3-card page3-card--library">
              <div className="page3-card-header">
                <div className="page3-icon-badge page3-icon-badge--library">
                  <Library size={20} />
                </div>
                <div>
                  <h3>Library</h3>
                  <small>Digital catalogue &amp; search, issue &amp; return records, part of the same workspace</small>
                </div>
              </div>

              {/* Digital Catalogue Mockup */}
              <div className="brochure-library-box">
                <div className="library-box-header">
                  <div className="library-tag">DIGITAL CATALOGUE</div>
                  <small>Barcoded &amp; Accession Number Ready</small>
                </div>

                <div className="library-search-preview">
                  <span className="library-search-icon">🔍</span>
                  <span className="library-search-placeholder">NCERT Class IX Mathematics &amp; Science...</span>
                </div>

                <div className="library-sample-records">
                  <div className="lib-book-item">
                    <div>
                      <strong>Higher Algebra &amp; Trigonometry</strong>
                      <small>S.L. Loney • Shelf B-04 • Acc #4120</small>
                    </div>
                    <span className="badge badge--green">Available (4)</span>
                  </div>
                  <div className="lib-book-item">
                    <div>
                      <strong>Sahitya Sanchayan (Class X)</strong>
                      <small>WBBSE • Shelf A-02 • Acc #2811</small>
                    </div>
                    <span className="badge badge--orange">Issued (Roll 14)</span>
                  </div>
                </div>

                <div className="receipt-footer-action">
                  <small>Integrated with student ID cards</small>
                  <Link to="/features" className="btn btn--secondary btn--sm">
                    View Catalogue
                  </Link>
                </div>
              </div>

              <ul className="page3-checklist">
                <li><Check size={16} className="text-green" /> <span>Digital catalogue &amp; search</span></li>
                <li><Check size={16} className="text-green" /> <span>Issue &amp; return records</span></li>
                <li><Check size={16} className="text-green" /> <span>Part of the same workspace</span></li>
              </ul>
            </div>
          </div>

          {/* 3 Government Pillar Cards at bottom of Page 3 */}
          <div className="page3-bottom-pillars-grid">
            <div className="pillar-bottom-card pillar-bottom-card--violet">
              <div className="pillar-bottom-icon">
                <CheckCircle2 size={24} />
              </div>
              <div className="pillar-bottom-text">
                <h4>APAAR Ready</h4>
                <p>Consent, PEN &amp; readiness tracking</p>
              </div>
            </div>

            <div className="pillar-bottom-card pillar-bottom-card--blue">
              <div className="pillar-bottom-icon">
                <Database size={24} />
              </div>
              <div className="pillar-bottom-text">
                <h4>UDISE+</h4>
                <p>Structured data preparation</p>
              </div>
            </div>

            <div className="pillar-bottom-card pillar-bottom-card--orange">
              <div className="pillar-bottom-icon">
                <Award size={24} />
              </div>
              <div className="pillar-bottom-text">
                <h4>Khelo India</h4>
                <p>Sports records, ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          05 / BROCHURE PAGE 4 SECTION: "PAYROLL THAT FITS EVERY EMPLOYEE." & ADVANTAGE
          ========================================================================== */}
      <section className="section section--white" id="payroll-advantage">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              BUILT FOR THE SCHOOLS OF TOMORROW • THE PRAGYA ADVANTAGE
            </div>
            <h2>Payroll that fits every employee.</h2>
            <p>
              A separate salary structure for each staff category. Automated earnings, deductions, bank NEFT files and confidential employee payslip vault.
            </p>
          </div>

          {/* Multiple Payslip Structures Showcase (from Page 4) */}
          <div className="payroll-showcase-container">
            <div className="payslip-category-bar">
              <div className="payslip-category-title">
                <strong>Multiple payslip structures:</strong>
              </div>
              <div className="payslip-category-pills">
                <button 
                  className={`payslip-pill-btn payslip-pill-btn--teaching ${activePayslipTab === 'teaching' ? 'active' : ''}`}
                  onClick={() => setActivePayslipTab('teaching')}
                >
                  TEACHING
                </button>
                <button 
                  className={`payslip-pill-btn payslip-pill-btn--nonteaching ${activePayslipTab === 'nonteaching' ? 'active' : ''}`}
                  onClick={() => setActivePayslipTab('nonteaching')}
                >
                  NON-TEACHING
                </button>
                <button 
                  className={`payslip-pill-btn payslip-pill-btn--admin ${activePayslipTab === 'admin' ? 'active' : ''}`}
                  onClick={() => setActivePayslipTab('admin')}
                >
                  ADMINISTRATIVE
                </button>
                <button 
                  className={`payslip-pill-btn payslip-pill-btn--support ${activePayslipTab === 'support' ? 'active' : ''}`}
                  onClick={() => setActivePayslipTab('support')}
                >
                  SUPPORT STAFF
                </button>
              </div>
            </div>

            <div className="payroll-split-grid">
              {/* Left: Faculty & Staff Context */}
              <div className="payroll-faculty-info">
                <div className="faculty-badge">
                  <Users size={16} />
                  <span>FACULTY &amp; STAFF</span>
                </div>
                <h3>Tailored Compensation &amp; Allowances for Each Tier</h3>
                <p>
                  Teaching faculty structures handle DA, HRA, special allowances, and provident fund deductions. Support staff structures automatically factor in daily attendance, overtime shifts, and advance adjustments.
                </p>
                <div className="faculty-highlights">
                  <div className="fac-item">
                    <strong>1-Click Salary Calculation</strong>
                    <small>Syncs directly with teacher mobile attendance</small>
                  </div>
                  <div className="fac-item">
                    <strong>Bank NEFT/RTGS Batch Payout</strong>
                    <small>Standard Excel file for SBI, HDFC, PNB upload</small>
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Link to="/staff-payroll-management" className="btn btn--primary btn--sm">
                    Explore Staff &amp; Payroll Module
                  </Link>
                </div>
              </div>

              {/* Right: Exact Payslip Mockup from Page 4 of Brochure */}
              <div className="brochure-payslip-card">
                <div className="payslip-card-top">
                  <div>
                    <strong>Payslip</strong>
                    <small>Dr. Ananya Mukherjee • Senior Faculty (Math)</small>
                  </div>
                  <span className="badge badge--green">OCT 2026 SALARY</span>
                </div>

                <div className="payslip-line-items">
                  <div className="payslip-row">
                    <span>Basic</span>
                    <strong>₹ 38,000</strong>
                  </div>
                  <div className="payslip-row">
                    <span>Allowances (DA, HRA, Medical)</span>
                    <strong className="text-emerald">₹ 9,500</strong>
                  </div>
                  <div className="payslip-row">
                    <span>Deductions (EPF, Professional Tax)</span>
                    <strong className="text-coral">– ₹ 4,200</strong>
                  </div>
                </div>

                <div className="payslip-net-row">
                  <span>Net pay (Bank Transfer Direct)</span>
                  <strong className="text-blue">₹ 43,300</strong>
                </div>

                <div className="payslip-card-foot">
                  <small>Generated securely to teacher's personal mobile app</small>
                  <span className="badge badge--blue">NEFT Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pragya Advantage Cards from Brochure Page 4 */}
          <div className="the-pragya-advantage-grid">
            {/* Card 1: Light & Dark */}
            <div className="advantage-feature-card advantage-feature-card--theme">
              <div className="adv-icon-row">
                <div className="adv-icon-circle"><Sun size={18} /></div>
                <div className="adv-icon-circle"><Moon size={18} /></div>
              </div>
              <h4>Light &amp; Dark</h4>
              <p>Comfortable in any light. High contrast readability for principals reviewing reports late in the evening or staff in daytime bright counters.</p>
              <div className="adv-preview-theme">
                <div className="theme-half theme-half--light">Daylight POS</div>
                <div className="theme-half theme-half--dark">Night Review</div>
              </div>
            </div>

            {/* Card 2: Mobile & Web */}
            <div className="advantage-feature-card advantage-feature-card--mobile">
              <div className="adv-icon-row">
                <div className="adv-icon-circle"><Smartphone size={18} /></div>
                <div className="adv-icon-circle"><Laptop size={18} /></div>
              </div>
              <h4>Mobile &amp; Web</h4>
              <p>One school, every device. Native experiences for Android, iPhone, tablet and desktop browsers with offline sync support.</p>
              <div className="adv-badge-chip">
                <span>IOS &amp; ANDROID APP</span>
              </div>
            </div>

            {/* Card 3: Secure on AWS */}
            <div className="advantage-feature-card advantage-feature-card--aws">
              <div className="adv-icon-row">
                <div className="adv-icon-circle"><Cloud size={18} /></div>
                <div className="adv-icon-circle"><ShieldCheck size={18} /></div>
              </div>
              <h4>Secure on AWS</h4>
              <p>Protected records, reliable cloud hosting with 99.9% uptime, nightly encrypted snapshots, and strict role-based access control.</p>
              <div className="adv-aws-badges">
                <span className="badge badge--green">AWS HOSTED</span>
                <span className="badge badge--violet">SECURE RBAC</span>
                <span className="badge badge--blue">META PROVIDER</span>
                <span className="badge badge--orange">99.9% UPTIME</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          06 / 16 ICONIC MODULES & UTILITIES GRID (WITH CLICK-TO-PREVIEW)
          ========================================================================== */}
      <IconicModules />

      {/* ==========================================================================
          07 / 4-STEP VISUAL APAAR READINESS WORKFLOW
          ========================================================================== */}
      <VisualWorkflow />

      {/* ==========================================================================
          08 / LIVE INTERACTIVE APAAR TRACKER CONSOLE
          ========================================================================== */}
      <section className="section section--soft" id="apaar-readiness">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              FLAGSHIP APAAR ENGINE
            </div>
            <h2>Know Who Is Ready. Know What Is Missing.</h2>
            <p>
              Pre-check records student-by-student before upload. Track parental consent, detect Aadhaar spelling mismatches, and avoid portal rejection.
            </p>
          </div>

          <ApaarTracker showJourney={true} />

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/apaar-readiness" className="btn btn--accent-gradient btn--lg">
              Explore Complete APAAR Journey &amp; CSV Template
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          09 / EVERYTHING AT YOUR FINGERTIPS (MOBILE APPS SHOWCASE)
          ========================================================================== */}
      <MobileAppsShowcase />

      {/* ==========================================================================
          10 / SOLUTIONS BY ROLE (DETAILED INTERACTIVE VIEW)
          ========================================================================== */}
      <section className="section section--white" id="solutions">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              TAILORED WORKFLOWS
            </div>
            <h2>One Connected School. The Right View for Every Role.</h2>
            <p>
              Pragya adapts to the job each person does—protecting sensitive student data with role boundaries.
            </p>
          </div>

          <div className="role-switcher-tabs" role="tablist">
            {Object.keys(rolesData).map(key => (
              <button
                key={key}
                className={`role-tab-btn ${selectedRole === key ? 'active' : ''}`}
                onClick={() => setSelectedRole(key)}
                role="tab"
                aria-selected={selectedRole === key}
              >
                {rolesData[key].name}
              </button>
            ))}
          </div>

          <div className="role-display-box">
            <div className="role-info-content">
              <h3>{role.title}</h3>
              <p className="role-lead-outcome">{role.outcome}</p>

              <ul className="role-points-list">
                {role.points.map((p, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={20} color="var(--color-success)" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '24px' }}>
                <Link to="/solutions" className="btn btn--primary">
                  {role.cta}
                </Link>
              </div>
            </div>

            <div className="role-preview-card">
              <div className="role-preview-header">
                <div className="role-preview-user">
                  <div className="role-avatar-circle">{role.avatar}</div>
                  <div>
                    <strong>{role.userName}</strong><br />
                    <small style={{ color: 'var(--color-slate-500)' }}>{role.userTitle}</small>
                  </div>
                </div>
                <span className="badge badge--blue">{role.badge}</span>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-slate-500)', marginBottom: '8px' }}>
                  TODAY’S OPERATIONAL SUMMARY
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.875rem' }}>
                  <span>Class Attendance</span>
                  <strong>96.4% (1,203 Present)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.875rem' }}>
                  <span>Counter Receipts Logged</span>
                  <strong style={{ color: 'var(--color-success)' }}>₹1,84,500</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span>APAAR Local Ready</span>
                  <strong style={{ color: 'var(--color-blue)' }}>428 Ready to Export</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="multi-campus-banner">
            <div className="multi-campus-text">
              <h4>Managing More Than One Campus or Branch?</h4>
              <p>Pragya includes branch-aware records and an academic-year and branch switcher, while keeping campus-specific access strictly separated by role.</p>
            </div>
            <Link to="/multi-branch-management" className="btn btn--secondary btn--sm">
              Explore Multi-Branch Setup
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          11 / SECURITY & HOSTING VISUAL CARDS
          ========================================================================== */}
      <section className="section section--soft" id="security">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              DATA PROTECTION &amp; HOSTING
            </div>
            <h2>Built for School Data That Deserves Absolute Care.</h2>
            <p>
              Pragya combines role-controlled access, account protections, audit records and school-managed hosting so leadership works with confidence.
            </p>
          </div>

          <div className="security-grid">
            <div 
              className="security-card"
              style={{
                background: 'linear-gradient(150deg, #FFFFFF 20%, #EFF6FF 100%)',
                border: '1.5px solid rgba(20, 94, 255, 0.28)',
                boxShadow: '0 6px 18px -4px rgba(20, 94, 255, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div className="iconic-top-accent" style={{ background: 'linear-gradient(135deg, #145EFF, #3B82F6)' }} />
              <div 
                className="security-card-icon" 
                style={{ 
                  background: 'linear-gradient(135deg, #145EFF, #3B82F6)', 
                  color: '#FFFFFF',
                  boxShadow: '0 6px 16px -2px rgba(20, 94, 255, 0.45)' 
                }}
              >
                <Lock size={26} />
              </div>
              <h3 style={{ color: '#145EFF' }}>Permission Boundaries</h3>
              <p>Teachers access assigned subjects and classes; students see personal records; campus databases remain isolated.</p>
              <div className="security-chips" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '12px' }}>
                <span className="badge badge--blue">8 Distinct Roles</span>
                <span className="badge badge--blue">Zero Cross-Branch Leaks</span>
              </div>
            </div>

            <div 
              className="security-card"
              style={{
                background: 'linear-gradient(150deg, #FFFFFF 20%, #ECFDF5 100%)',
                border: '1.5px solid rgba(5, 150, 105, 0.28)',
                boxShadow: '0 6px 18px -4px rgba(5, 150, 105, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div className="iconic-top-accent" style={{ background: 'linear-gradient(135deg, #059669, #10B981)' }} />
              <div 
                className="security-card-icon" 
                style={{ 
                  background: 'linear-gradient(135deg, #059669, #10B981)', 
                  color: '#FFFFFF',
                  boxShadow: '0 6px 16px -2px rgba(5, 150, 105, 0.45)' 
                }}
              >
                <Key size={26} />
              </div>
              <h3 style={{ color: '#059669' }}>Secure Sign-In &amp; 2FA</h3>
              <p>Passkeys, authenticator apps, backup codes, session timeouts, and brute-force lockouts protect accounts.</p>
              <div className="security-chips" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '12px' }}>
                <span className="badge badge--green">Passkey Support</span>
                <span className="badge badge--green">TOTP Authenticator</span>
              </div>
            </div>

            <div 
              className="security-card"
              style={{
                background: 'linear-gradient(150deg, #FFFFFF 20%, #F5F3FF 100%)',
                border: '1.5px solid rgba(116, 45, 218, 0.28)',
                boxShadow: '0 6px 18px -4px rgba(116, 45, 218, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div className="iconic-top-accent" style={{ background: 'linear-gradient(135deg, #742DDA, #9333EA)' }} />
              <div 
                className="security-card-icon" 
                style={{ 
                  background: 'linear-gradient(135deg, #742DDA, #9333EA)', 
                  color: '#FFFFFF',
                  boxShadow: '0 6px 16px -2px rgba(116, 45, 218, 0.45)' 
                }}
              >
                <RefreshCw size={26} />
              </div>
              <h3 style={{ color: '#742DDA' }}>Encrypted Nightly Backups</h3>
              <p>Sensitive fields are encrypted, every change is audited, and nightly encrypted snapshots can be restored on demand.</p>
              <div className="security-chips" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '12px' }}>
                <span className="badge badge--violet">Encrypted Restores</span>
                <span className="badge badge--violet">Full Audit Trail</span>
              </div>
            </div>

            <div 
              className="security-card"
              style={{
                background: 'linear-gradient(150deg, #FFFFFF 20%, #ECFEFF 100%)',
                border: '1.5px solid rgba(0, 205, 229, 0.32)',
                boxShadow: '0 6px 18px -4px rgba(0, 205, 229, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div className="iconic-top-accent" style={{ background: 'linear-gradient(135deg, #00CDE5, #0891B2)' }} />
              <div 
                className="security-card-icon" 
                style={{ 
                  background: 'linear-gradient(135deg, #00CDE5, #0891B2)', 
                  color: '#FFFFFF',
                  boxShadow: '0 6px 16px -2px rgba(0, 205, 229, 0.45)' 
                }}
              >
                <Database size={26} />
              </div>
              <h3 style={{ color: '#0891B2' }}>School-Controlled Server &amp; AWS</h3>
              <p>Pragya deploys on high-availability AWS or dedicated school infrastructure, keeping institutional records sovereign.</p>
              <div className="security-chips" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '12px' }}>
                <span className="badge badge--cyan">AWS 99.9% Cloud</span>
                <span className="badge badge--cyan">Isolated DB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          12 / DEMO LEAD CAPTURE FORM
          ========================================================================== */}
      <section className="section section--white" id="contact">
        <div className="container">
          <DemoForm
            title="See What a Better School Day Looks Like."
            subtitle="Tell us about your school structure and the workflows you want to simplify. We’ll walk through relevant Pragya modules, answer questions and share live previews."
          />
        </div>
      </section>

      {/* ==========================================================================
          13 / FAQ ACCORDION
          ========================================================================== */}
      <section className="section section--soft" id="faqs">
        <div className="container">
          <div className="section-header">
            <h2>Your Pragya Questions, Answered.</h2>
            <p>
              Straightforward answers about how Pragya works, what is currently supported and which capabilities are on the product roadmap.
            </p>
          </div>

          <FaqAccordion limit={6} />

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/faqs" className="btn btn--secondary">
              View All Frequently Asked Questions
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          14 / OFFICIAL BOTTOM CTA BANNER WITH AUTHORIZED PARTNER BOX
          ========================================================================== */}
      <BottomCta />
    </>
  );
}
