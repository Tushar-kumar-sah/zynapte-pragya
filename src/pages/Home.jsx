import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Shield, Users, Calendar, 
  CreditCard, Award, Sparkles, Check, Lock, ShieldCheck, 
  Database, Cloud, MessageSquare, UserPlus, BookOpen, 
  FileText, Library, Send, Building2, Sun, Moon, Laptop, 
  Eye, ChevronRight, Phone, BarChart3, Settings, Layers, 
  UserCheck, FileUp, Search, Receipt, CalendarCheck, 
  ScanLine, Printer, FileSpreadsheet, Smartphone, Clock
} from 'lucide-react';
import ErpMockup from '../components/ErpMockup';
import ApaarTracker from '../components/ApaarTracker';
import DemoForm from '../components/DemoForm';
import FaqAccordion from '../components/FaqAccordion';
import BottomCta from '../components/BottomCta';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { rolesData } from '../data/rolesData';

export default function Home() {
  const [selectedRole, setSelectedRole] = useState('principal');
  const role = rolesData[selectedRole] || rolesData['principal'];

  // Helper to render role capability icons
  const renderRoleIcon = (name) => {
    switch (name) {
      case 'BarChart3': return <BarChart3 size={18} style={{ color: '#145EFF' }} />;
      case 'ShieldCheck': return <ShieldCheck size={18} style={{ color: '#059669' }} />;
      case 'Lock': return <Lock size={18} style={{ color: '#742DDA' }} />;
      case 'Settings': return <Settings size={18} style={{ color: '#145EFF' }} />;
      case 'Layers': return <Layers size={18} style={{ color: '#742DDA' }} />;
      case 'BookOpen': return <BookOpen size={18} style={{ color: '#F97316' }} />;
      case 'UserCheck': return <UserCheck size={18} style={{ color: '#059669' }} />;
      case 'Award': return <Award size={18} style={{ color: '#F97316' }} />;
      case 'Calendar': return <Calendar size={18} style={{ color: '#145EFF' }} />;
      case 'UserPlus': return <UserPlus size={18} style={{ color: '#145EFF' }} />;
      case 'FileUp': return <FileUp size={18} style={{ color: '#742DDA' }} />;
      case 'Search': return <Search size={18} style={{ color: '#059669' }} />;
      case 'CreditCard': return <CreditCard size={18} style={{ color: '#FF5A36' }} />;
      case 'Receipt': return <Receipt size={18} style={{ color: '#059669' }} />;
      case 'Building2': return <Building2 size={18} style={{ color: '#145EFF' }} />;
      case 'Users': return <Users size={18} style={{ color: '#145EFF' }} />;
      case 'CalendarCheck': return <CalendarCheck size={18} style={{ color: '#059669' }} />;
      case 'Shield': return <Shield size={18} style={{ color: '#742DDA' }} />;
      default: return <CheckCircle2 size={18} style={{ color: '#059669' }} />;
    }
  };

  // 9 Core Modules from Brochure Page 2
  const coreNineModules = [
    {
      id: 'admissions',
      title: 'Admissions',
      subtitle: 'Enquiry to enrolment',
      icon: <UserPlus size={22} />,
      colorClass: 'module-accent--blue',
      path: '/student-management'
    },
    {
      id: 'attendance',
      title: 'Attendance',
      subtitle: 'Students and staff',
      icon: <Calendar size={22} />,
      colorClass: 'module-accent--purple',
      path: '/attendance-management'
    },
    {
      id: 'academics',
      title: 'Academics',
      subtitle: 'Classes and timetables',
      icon: <BookOpen size={22} />,
      colorClass: 'module-accent--orange',
      path: '/academics-timetable'
    },
    {
      id: 'exams',
      title: 'Exams',
      subtitle: 'Marks to report cards',
      icon: <Award size={22} />,
      colorClass: 'module-accent--green',
      path: '/exam-result-management'
    },
    {
      id: 'fees',
      title: 'Fees',
      subtitle: 'Receipts and dues',
      icon: <CreditCard size={22} />,
      colorClass: 'module-accent--coral',
      path: '/fees-management'
    },
    {
      id: 'payroll',
      title: 'Payroll',
      subtitle: 'Payslips for every role',
      icon: <FileText size={22} />,
      colorClass: 'module-accent--emerald',
      path: '/staff-payroll-management'
    },
    {
      id: 'library',
      title: 'Library',
      subtitle: 'Catalogue and issues',
      icon: <Library size={22} />,
      colorClass: 'module-accent--cyan',
      path: '/features'
    },
    {
      id: 'communication',
      title: 'Communication',
      subtitle: 'Notices and circulars',
      icon: <Send size={22} />,
      colorClass: 'module-accent--violet',
      path: '/school-communication'
    },
    {
      id: 'multi-branch',
      title: 'Multi-Branch',
      subtitle: 'Many campuses, one view',
      icon: <Building2 size={22} />,
      colorClass: 'module-accent--gold',
      path: '/multi-branch-management'
    }
  ];

  // Active Payslip Structure from Page 4
  const [activePayslipTab, setActivePayslipTab] = useState('teaching');

  return (
    <>
      {/* ==========================================================================
          01 / HERO SECTION: SIMPLE, SPACIOUS, TO THE POINT (PAGE 1)
          ========================================================================== */}
      <section className="section hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                PRAGYA SCHOOL OPERATING SYSTEM
              </div>

              <h1 className="hero-title">
                One Platform. <br />
                <span className="hero-title-highlight">Every School Day.</span>
              </h1>

              <p className="hero-subtitle">
                Unified school management and automated APAAR readiness in one intuitive workspace.
              </p>

              <div className="hero-cta-group">
                <Link to="/contact" className="btn btn--primary btn--lg">
                  Book a Live Demo
                </Link>
                <a href="#core-modules" className="btn btn--secondary btn--lg">
                  Explore 9 Modules
                </a>
              </div>

              {/* 3 Clean Value Checks */}
              <div className="hero-feature-checks">
                <span className="hero-check-item">
                  <CheckCircle2 size={15} color="var(--color-blue)" />
                  <span>APAAR &amp; UDISE+ Format</span>
                </span>
                <span className="hero-check-item">
                  <CheckCircle2 size={15} color="var(--color-blue)" />
                  <span>WBBSE &amp; WBCHSE Catalogues</span>
                </span>
                <span className="hero-check-item">
                  <CheckCircle2 size={15} color="var(--color-blue)" />
                  <span>INR Counter POS Receipts</span>
                </span>
              </div>

              {/* Quiet, Clean Social Proof */}
              <div className="hero-social-proof">
                <div className="social-avatars">
                  <span className="avatar-chip avatar-chip--1">👨‍🏫</span>
                  <span className="avatar-chip avatar-chip--2">👩‍💼</span>
                  <span className="avatar-chip avatar-chip--3">👨‍💻</span>
                  <span className="avatar-chip avatar-chip--4">👩‍🏫</span>
                </div>
                <div className="rating-block">
                  <div className="rating-stars">★★★★★</div>
                  <div className="rating-text">
                    <strong>4.9/5 Rating</strong> from 1,200+ School Leaders &amp; Principals
                  </div>
                </div>
              </div>
            </div>

            <ErpMockup />
          </div>
        </div>
      </section>

      {/* ==========================================================================
          02 / REFINED ACCREDITATION & TRUST STRIP (STRICTLY 1 SINGLE LINE)
          ========================================================================== */}
      <section className="trust-strip-section">
        <div className="container trust-strip-container">
          <div className="trust-strip-inner">
            <div className="trust-item">
              <Award size={15} style={{ color: '#F97316' }} />
              <span>DPIIT <strong>#startupindia</strong> (DIPP187962)</span>
            </div>
            <div className="trust-sep">•</div>
            <div className="trust-item">
              <Building2 size={15} style={{ color: '#059669' }} />
              <span>Ministry of <strong>MSME</strong> (UDYAM-WB-10-0144056)</span>
            </div>
            <div className="trust-sep">•</div>
            <div className="trust-item">
              <ShieldCheck size={15} style={{ color: '#2563EB' }} />
              <span><strong>D-U-N-S®</strong> 766391467</span>
            </div>
            <div className="trust-sep">•</div>
            <div className="trust-item">
              <WhatsAppIcon size={15} />
              <span><strong>Meta Tech Provider</strong></span>
            </div>
            <div className="trust-sep">•</div>
            <div className="trust-item">
              <Cloud size={15} style={{ color: '#0284C7' }} />
              <span><strong>AWS Cloud</strong> (99.9% Uptime)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          03 / "EVERYTHING YOUR SCHOOL NEEDS. NOTHING IT DOESN'T." (PAGE 2)
          ========================================================================== */}
      <section className="section section--white" id="core-modules">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              ONE CONNECTED PLATFORM
            </div>
            <h2>Everything your school needs. Nothing it doesn't.</h2>
            <p>
              Nine core administrative modules designed specifically around the daily rhythm of Indian schools.
            </p>
          </div>

          {/* 9 Core ERP Modules in a Balanced 3x3 Grid */}
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

          {/* Role Switcher: "One system. Every role." */}
          <div className="role-showcase-box">
            <div className="role-showcase-top">
              <span className="role-showcase-tagline">One system. Every role.</span>
              <div className="role-pills-row" role="tablist">
                <button 
                  className={`role-pill-btn ${selectedRole === 'principal' ? 'active' : ''}`}
                  onClick={() => setSelectedRole('principal')}
                >
                  PRINCIPALS
                </button>
                <button 
                  className={`role-pill-btn ${selectedRole === 'administrator' ? 'active' : ''}`}
                  onClick={() => setSelectedRole('administrator')}
                >
                  ADMINISTRATORS
                </button>
                <button 
                  className={`role-pill-btn ${selectedRole === 'teacher' ? 'active' : ''}`}
                  onClick={() => setSelectedRole('teacher')}
                >
                  TEACHERS
                </button>
                <button 
                  className={`role-pill-btn ${selectedRole === 'accountant' ? 'active' : ''}`}
                  onClick={() => setSelectedRole('accountant')}
                >
                  ACCOUNTS
                </button>
                <button 
                  className={`role-pill-btn ${selectedRole === 'hr' ? 'active' : ''}`}
                  onClick={() => setSelectedRole('hr')}
                >
                  HR
                </button>
              </div>
            </div>

            <div className="role-showcase-detail">
              <div className="role-detail-header-row">
                <div className="role-heading-text">
                  <h3>{role.title}</h3>
                  <p className="role-detail-outcome">{role.outcome}</p>
                </div>
                <div className="role-header-action">
                  <Link to="/solutions" className="btn btn--secondary btn--sm">
                    {role.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Visual 3-Capability Grid with Integrated Micro Badges */}
              <div className="role-capabilities-grid">
                {role.features?.map((feat, idx) => (
                  <div key={idx} className="role-capability-card">
                    <div className="role-cap-icon-box">
                      {renderRoleIcon(feat.icon)}
                    </div>
                    <div className="role-cap-text">
                      <div className="role-cap-top-line">
                        <strong>{feat.title}</strong>
                        {role.chips?.[idx] && (
                          <span className="role-micro-chip">{role.chips[idx]}</span>
                        )}
                      </div>
                      <small>{feat.desc}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          04 / "READY FOR THE WAY INDIAN SCHOOLS WORK." (PAGE 3)
          ========================================================================== */}
      <section className="section section--soft" id="indian-context">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              THOUGHTFULLY DESIGNED FOR INDIAN SCHOOLS
            </div>
            <h2>Ready for the way Indian schools work.</h2>
            <p>
              Built for counter fee collections, cash POS receipts, library accessions, and state board workflows.
            </p>
          </div>

          {/* Board Alignment Ribbon */}
          <div className="indian-boards-ribbon">
            <span className="ribbon-chip ribbon-chip--violet">APAAR READY</span>
            <span className="ribbon-chip ribbon-chip--blue">UDISE+ READY</span>
            <span className="ribbon-chip ribbon-chip--orange">KHELO INDIA READY</span>
            <span className="ribbon-chip ribbon-chip--green">CBSE ALIGNED</span>
            <span className="ribbon-chip ribbon-chip--red">ICSE ALIGNED</span>
            <span className="ribbon-chip ribbon-chip--teal">WB BOARD ALIGNED</span>
            <span className="ribbon-chip ribbon-chip--purple">COLLEGES READY</span>
          </div>

          {/* 2 Clean Side-by-Side Showcases: Fees & Library */}
          <div className="brochure-page3-showcase-grid">
            {/* Fees Showcase with Real Receipt */}
            <div className="page3-card">
              <div className="page3-card-header">
                <div className="page3-icon-badge page3-icon-badge--fees">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h3>Fees Module</h3>
                  <small>Counter POS • Class-wise Fees • Dues Tracking</small>
                </div>
              </div>

              {/* Fee Receipt Mockup from Page 3 */}
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

              {/* Visual Capability Chips (Icons replace text checklist) */}
              <div className="page3-visual-chips">
                <span className="visual-chip"><CreditCard size={15} style={{ color: '#FF5A36' }} /> Cash &amp; UPI QR POS</span>
                <span className="visual-chip"><Printer size={15} style={{ color: '#145EFF' }} /> 3-Sec Thermal Slip</span>
                <span className="visual-chip"><WhatsAppIcon size={15} /> WhatsApp Receipt</span>
              </div>
            </div>

            {/* Library Showcase */}
            <div className="page3-card">
              <div className="page3-card-header">
                <div className="page3-icon-badge page3-icon-badge--library">
                  <Library size={20} />
                </div>
                <div>
                  <h3>Library</h3>
                  <small>Digital Catalogue • Barcode Search • Issue Records</small>
                </div>
              </div>

              {/* Digital Catalogue Mockup */}
              <div className="brochure-library-box">
                <div className="library-box-header">
                  <span className="library-tag">DIGITAL CATALOGUE</span>
                  <small>Barcoded &amp; Accession Number Ready</small>
                </div>

                <div className="library-search-preview">
                  <span>🔍</span>
                  <span>NCERT Class IX Mathematics &amp; Science...</span>
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

              {/* Visual Capability Chips (Icons replace text checklist) */}
              <div className="page3-visual-chips">
                <span className="visual-chip"><ScanLine size={15} style={{ color: '#00CDE5' }} /> Barcode &amp; Accession</span>
                <span className="visual-chip"><BookOpen size={15} style={{ color: '#059669' }} /> NCERT &amp; State Syllabus</span>
                <span className="visual-chip"><Clock size={15} style={{ color: '#742DDA' }} /> Due Date Alerts</span>
              </div>
            </div>
          </div>

          {/* 3 Quiet Regulatory Pillars at Bottom of Section */}
          <div className="page3-bottom-pillars-grid">
            <div className="pillar-bottom-card pillar-bottom-card--violet">
              <div className="pillar-bottom-icon">
                <CheckCircle2 size={22} />
              </div>
              <div className="pillar-bottom-text">
                <h4>APAAR Ready</h4>
                <p>Consent, PEN &amp; readiness tracking</p>
              </div>
            </div>

            <div className="pillar-bottom-card pillar-bottom-card--blue">
              <div className="pillar-bottom-icon">
                <Database size={22} />
              </div>
              <div className="pillar-bottom-text">
                <h4>UDISE+</h4>
                <p>Structured data preparation</p>
              </div>
            </div>

            <div className="pillar-bottom-card pillar-bottom-card--orange">
              <div className="pillar-bottom-icon">
                <Award size={22} />
              </div>
              <div className="pillar-bottom-text">
                <h4>Khelo India</h4>
                <p>Fitness assessments &amp; report cards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          05 / "PAYROLL THAT FITS EVERY EMPLOYEE." (PAGE 4)
          ========================================================================== */}
      <section className="section section--white" id="payroll-overview">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              BUILT FOR THE SCHOOLS OF TOMORROW
            </div>
            <h2>Payroll that fits every employee.</h2>
            <p>
              A separate salary structure for each staff category with automated deductions and instant bank NEFT batch files.
            </p>
          </div>

          <div className="payroll-showcase-container">
            {/* Top Category Switcher */}
            <div className="payslip-category-bar">
              <span className="payslip-category-label">Multiple payslip structures:</span>
              <div className="payslip-pills-row" role="tablist">
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
              {/* Left: Faculty & Staff Context with Visual Cards */}
              <div className="payroll-faculty-info">
                <div className="faculty-badge">
                  <Users size={15} />
                  <span>FACULTY &amp; STAFF</span>
                </div>
                <h3>Tailored Compensation &amp; Allowances</h3>

                {/* 4 Visual Capability Cards (Icons replace long paragraphs) */}
                <div className="payroll-visual-grid">
                  <div className="payroll-feat-card">
                    <div className="payroll-feat-icon" style={{ color: 'var(--color-emerald)' }}>
                      <FileSpreadsheet size={18} />
                    </div>
                    <div>
                      <strong>DA, HRA &amp; EPF</strong>
                      <small>Govt compliant formulas</small>
                    </div>
                  </div>

                  <div className="payroll-feat-card">
                    <div className="payroll-feat-icon" style={{ color: 'var(--color-blue)' }}>
                      <Building2 size={18} />
                    </div>
                    <div>
                      <strong>Bank NEFT Batch</strong>
                      <small>SBI, HDFC &amp; PNB upload</small>
                    </div>
                  </div>

                  <div className="payroll-feat-card">
                    <div className="payroll-feat-icon" style={{ color: 'var(--color-purple)' }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <strong>Attendance Sync</strong>
                      <small>1-Click salary calculation</small>
                    </div>
                  </div>

                  <div className="payroll-feat-card">
                    <div className="payroll-feat-icon" style={{ color: 'var(--color-coral)' }}>
                      <Smartphone size={18} />
                    </div>
                    <div>
                      <strong>Mobile Payslips</strong>
                      <small>Direct to staff mobile app</small>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '14px' }}>
                  <Link to="/staff-payroll-management" className="btn btn--primary btn--sm">
                    Explore Staff &amp; Payroll Module
                  </Link>
                </div>
              </div>

              {/* Right: Exact Payslip Mockup from Page 4 */}
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

          {/* 3 Pragya Advantage Cards (Page 4) */}
          <div className="the-pragya-advantage-grid">
            <div className="advantage-feature-card advantage-feature-card--theme">
              <div className="adv-icon-row">
                <div className="adv-icon-circle"><Sun size={16} /></div>
                <div className="adv-icon-circle"><Moon size={16} /></div>
              </div>
              <h4>Light &amp; Dark</h4>
              <p>Dual high-contrast themes for bright counters and evening reviews.</p>
              <div className="adv-preview-theme">
                <div className="theme-half theme-half--light">Daylight POS</div>
                <div className="theme-half theme-half--dark">Night Review</div>
              </div>
            </div>

            <div className="advantage-feature-card advantage-feature-card--mobile">
              <div className="adv-icon-row">
                <div className="adv-icon-circle"><Smartphone size={16} /></div>
                <div className="adv-icon-circle"><Laptop size={16} /></div>
              </div>
              <h4>Mobile &amp; Web Cloud</h4>
              <p>One school, every device with offline sync support.</p>
              <div className="adv-platform-badges">
                <span className="platform-chip"><Smartphone size={12} /> Android App</span>
                <span className="platform-chip"><Smartphone size={12} /> iOS App</span>
                <span className="platform-chip"><Laptop size={12} /> Desktop Web</span>
              </div>
            </div>

            <div className="advantage-feature-card advantage-feature-card--aws">
              <div className="adv-icon-row">
                <div className="adv-icon-circle"><Cloud size={16} /></div>
                <div className="adv-icon-circle"><ShieldCheck size={16} /></div>
              </div>
              <h4>Secure on AWS</h4>
              <p>99.9% uptime with nightly encrypted snapshots.</p>
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
          06 / FLAGSHIP APAAR & UDISE+ READY ENGINE
          ========================================================================== */}
      <section className="section section--soft" id="apaar-readiness">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              REGULATORY COMPLIANCE
            </div>
            <h2>Know Who Is Ready. Know What Is Missing.</h2>
            <p>
              Pre-check records student-by-student to detect mismatches and avoid portal rejection.
            </p>
          </div>

          <ApaarTracker showJourney={true} />

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/apaar-readiness" className="btn btn--accent-gradient btn--lg">
              Explore Complete APAAR Journey &amp; CSV Template
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          07 / DEMO LEAD CAPTURE FORM
          ========================================================================== */}
      <section className="section section--white" id="contact">
        <div className="container">
          <DemoForm
            title="See What a Better School Day Looks Like."
            subtitle="Schedule a 20-minute tailored walkthrough of Pragya modules."
          />
        </div>
      </section>

      {/* ==========================================================================
          08 / FAQ ACCORDION (SIMPLE & DIRECT)
          ========================================================================== */}
      <section className="section section--soft" id="faqs">
        <div className="container">
          <div className="section-header">
            <h2>Your Pragya Questions, Answered.</h2>
            <p>
              Clear answers on features, board compliance, and deployment.
            </p>
          </div>

          <FaqAccordion limit={5} />

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/faqs" className="btn btn--secondary">
              View All Frequently Asked Questions
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          09 / OFFICIAL BOTTOM CTA BANNER & AUTHORIZED PARTNER BOX
          ========================================================================== */}
      <BottomCta />
    </>
  );
}
