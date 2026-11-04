import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Shield, Users, Calendar, 
  CreditCard, Award, Sparkles, Check, Lock, ShieldCheck, 
  Database, Cloud, MessageSquare, UserPlus, BookOpen, 
  FileText, Library, Send, Building2, Sun, Moon, Laptop, 
  Eye, ChevronRight, Phone, BarChart3, Settings, Layers, 
  UserCheck, FileUp, Search, Receipt, CalendarCheck, 
  ScanLine, Printer, FileSpreadsheet, Smartphone, Clock,
  CalendarCheck2, BookOpenCheck, GraduationCap, WalletCards, LibraryBig, Network
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
      num: '01',
      title: 'Admissions & CRM',
      subtitle: 'Streamline enquiry intake, verification, fee collection, and 1-click student enrolment.',
      icon: <UserCheck size={26} color="#FFFFFF" />,
      accent: '#1D68D8',
      rgb: '29, 104, 216',
      gradient: 'linear-gradient(135deg, #1D68D8 0%, #3B82F6 100%)',
      badge: 'ENROLMENT CRM',
      chips: ['Lead Pipeline', 'Aadhaar Check', 'Auto Roll No'],
      path: '/student-management'
    },
    {
      id: 'attendance',
      num: '02',
      title: 'Attendance & Leave',
      subtitle: '1-Tap classroom roll call, biometric sync, and instant WhatsApp absence alerts to parents.',
      icon: <CalendarCheck2 size={26} color="#FFFFFF" />,
      accent: '#6F3B9C',
      rgb: '111, 59, 156',
      gradient: 'linear-gradient(135deg, #6F3B9C 0%, #8B5CF6 100%)',
      badge: 'REAL-TIME TRACKING',
      chips: ['1-Tap Roll Call', 'WhatsApp SMS', 'Leave Workflow'],
      path: '/attendance-management'
    },
    {
      id: 'academics',
      num: '03',
      title: 'Academics & Timetables',
      subtitle: 'Interactive clash-free timetable scheduler with 1-click substitute teacher assignments.',
      icon: <BookOpenCheck size={26} color="#FFFFFF" />,
      accent: '#D97706',
      rgb: '217, 119, 6',
      gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
      badge: 'ZERO-CLASH GRID',
      chips: ['ICSE & CBSE Ready', 'Smart Substitution', 'Room Balancer'],
      path: '/academics-timetable'
    },
    {
      id: 'exams',
      num: '04',
      title: 'Exams & Report Cards',
      subtitle: 'Co-scholastic grading, marksheet calculations, and batch printing of board-format report cards.',
      icon: <GraduationCap size={26} color="#FFFFFF" />,
      accent: '#059669',
      rgb: '5, 150, 105',
      gradient: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
      badge: 'BOARD EVALUATION',
      chips: ['ICSE / CBSE Scales', '1-Click Batch PDF', 'Co-Scholastic'],
      path: '/exam-result-management'
    },
    {
      id: 'fees',
      num: '05',
      title: 'Counter Fees & POS',
      subtitle: '3-Second thermal slips, customer-facing dynamic UPI QR, and automated sibling discount rules.',
      icon: <Receipt size={26} color="#FFFFFF" />,
      accent: '#EF424B',
      rgb: '239, 66, 75',
      gradient: 'linear-gradient(135deg, #EF424B 0%, #F43F5E 100%)',
      badge: 'CASH & DYNAMIC UPI',
      chips: ['3-Sec Slip Print', 'Dynamic UPI QR', 'Head-Wise Ledger'],
      path: '/fees-management'
    },
    {
      id: 'payroll',
      num: '06',
      title: 'Staff, HR & Payroll',
      subtitle: 'EPF, ESI & PTax statutory deductions, biometric attendance sync, and instant salary slip batches.',
      icon: <WalletCards size={26} color="#FFFFFF" />,
      accent: '#0D9488',
      rgb: '13, 148, 136',
      gradient: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)',
      badge: 'STATUTORY SALARY',
      chips: ['EPF & PTax Ready', 'Bank NEFT Batch', 'Payslip Generator'],
      path: '/staff-payroll-management'
    },
    {
      id: 'library',
      num: '07',
      title: 'Digital Library Catalogue',
      subtitle: 'Barcode accession cataloguing, NCERT curriculum search, and automatic overdue fine alerts.',
      icon: <LibraryBig size={26} color="#FFFFFF" />,
      accent: '#0284C7',
      rgb: '2, 132, 199',
      gradient: 'linear-gradient(135deg, #0284C7 0%, #06B6D4 100%)',
      badge: 'ACCESSION CATALOGUE',
      chips: ['Barcode Scanner', 'NCERT Book Index', 'Overdue Tracking'],
      path: '/features'
    },
    {
      id: 'communication',
      num: '08',
      title: 'School Communication',
      subtitle: 'Official circulars, emergency holiday broadcasts, exam schedules, and parent announcements.',
      icon: <Send size={26} color="#FFFFFF" />,
      accent: '#7C3AED',
      rgb: '124, 58, 237',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
      badge: 'PARENT BROADCAST',
      chips: ['WhatsApp Push', 'Circular Manager', 'SMS Fallback'],
      path: '/school-communication'
    },
    {
      id: 'multi-branch',
      num: '09',
      title: 'Multi-Branch Group ERP',
      subtitle: '1-Click executive campus switcher with segregated accounting ledgers and group-wide MIS.',
      icon: <Network size={26} color="#FFFFFF" />,
      accent: '#EA580C',
      rgb: '234, 88, 12',
      gradient: 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
      badge: 'INSTITUTIONAL CHAINS',
      chips: ['1-Click Switcher', 'Separate Books', 'Unified MIS'],
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
                  <span>ICSE &amp; CBSE Catalogues</span>
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
                    <strong>4.9/5 Rating</strong> from 15+ Schools &amp; Principals
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
          <div className="section-header core-modules-header">
            <h2>Everything your school needs. Nothing it doesn't.</h2>
            <p>
              Nine core administrative modules designed specifically around the daily rhythm of Indian schools.
            </p>
          </div>

          {/* 9 Core ERP Modules in a Balanced 3x3 Grid */}
          <div className="core-nine-modules-grid">
            {coreNineModules.map((mod) => (
              <Link 
                to={mod.path} 
                key={mod.id} 
                className="core-module-card"
                style={{ 
                  '--mod-accent': mod.accent, 
                  '--mod-rgb': mod.rgb,
                  '--mod-gradient': mod.gradient 
                }}
              >
                {/* Top Row: Vibrant Gradient Icon & Step Pill */}
                <div className="core-module-header">
                  <div className="core-module-icon-tile" style={{ background: mod.gradient }}>
                    {mod.icon}
                  </div>
                  <div className="core-module-badge-wrap">
                    <span className="core-module-num">{mod.num}</span>
                    <span className="core-module-pill">{mod.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="core-module-content">
                  <h3 className="core-module-title">{mod.title}</h3>
                  <p className="core-module-desc">{mod.subtitle}</p>
                </div>

                {/* Feature Micro-Chips */}
                <div className="core-module-chips">
                  {mod.chips.map((chip, idx) => (
                    <span key={idx} className="core-module-chip">
                      <span className="core-module-chip-dot" />
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Interactive Bottom Action Bar with Animated Arrow */}
                <div className="core-module-footer">
                  <span className="core-module-cta-text">Explore Module</span>
                  <div className="core-module-arrow-btn">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Connected OS Ribbon - STRICTLY SINGLE LINE */}
          <div className="core-modules-integration-ribbon">
            <div className="integration-ribbon-item">
              <span className="ribbon-glow-dot" style={{ background: '#1D68D8', boxShadow: '0 0 8px #1D68D8' }} />
              <span><strong>Unified Single Ledger:</strong> Zero cross-desk retyping</span>
            </div>
            <div className="integration-ribbon-sep" />
            <div className="integration-ribbon-item">
              <span className="ribbon-glow-dot" style={{ background: '#059669', boxShadow: '0 0 8px #059669' }} />
              <span><strong>Instant Board Exports:</strong> 100% ICSE &amp; CBSE aligned</span>
            </div>
            <div className="integration-ribbon-sep" />
            <div className="integration-ribbon-item">
              <span className="ribbon-glow-dot" style={{ background: '#EF424B', boxShadow: '0 0 8px #EF424B' }} />
              <span><strong>Zero-Leak Privacy:</strong> Strict role-isolated access</span>
            </div>
          </div>

          {/* Eye-Catching Multi-Desk Role Showcase */}
          <div className="role-showcase-box">
            {/* Top Bar: Headline & Sleek Interactive Tabs */}
            <div className="role-showcase-top">
              <div className="role-showcase-top-meta">
                <span className="role-showcase-kicker" style={{ color: role.color }}>
                  MULTI-DESK ARCHITECTURE
                </span>
                <span className="role-showcase-tagline">One system. Every role.</span>
              </div>
              <div className="role-pills-row" role="tablist">
                {[
                  { id: 'principal', label: 'PRINCIPALS', icon: <GraduationCap size={14} /> },
                  { id: 'administrator', label: 'ADMINISTRATORS', icon: <Settings size={14} /> },
                  { id: 'teacher', label: 'TEACHERS', icon: <BookOpenCheck size={14} /> },
                  { id: 'accountant', label: 'ACCOUNTS', icon: <CreditCard size={14} /> },
                  { id: 'hr', label: 'HR & STAFF', icon: <Users size={14} /> }
                ].map((item) => (
                  <button 
                    key={item.id}
                    className={`role-pill-btn ${selectedRole === item.id ? 'active' : ''}`}
                    onClick={() => setSelectedRole(item.id)}
                    style={selectedRole === item.id ? { background: role.gradient } : {}}
                  >
                    <span className="role-pill-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Split Showcase Body */}
            <div className="role-showcase-split">
              {/* Left Column: Role Details & Capabilities */}
              <div className="role-showcase-left">
                <div className="role-desk-meta">
                  <div className="role-meta-badge-row">
                    <span className="role-desk-badge" style={{ color: role.color, background: `${role.color}12`, borderColor: `${role.color}30` }}>
                      {role.badge}
                    </span>
                    <span className="role-live-badge">
                      <span className="role-live-dot" style={{ background: role.color }} />
                      <span>{role.liveTag}</span>
                    </span>
                  </div>
                  <h3 className="role-desk-title">{role.title}</h3>
                  <p className="role-desk-outcome">{role.outcome}</p>
                </div>

                {/* 3 Visual Capability Cards with Dynamic Color Badges */}
                <div className="role-capabilities-grid-pro">
                  {role.features?.map((feat, idx) => (
                    <div key={idx} className="role-capability-card-pro">
                      <div className="role-cap-icon-tile" style={{ background: `${role.color}10`, borderColor: `${role.color}25` }}>
                        {renderRoleIcon(feat.icon)}
                      </div>
                      <div className="role-cap-content">
                        <div className="role-cap-header-line">
                          <strong className="role-cap-title">{feat.title}</strong>
                          {role.chips?.[idx] && (
                            <span className="role-cap-chip" style={{ color: role.color, background: `${role.color}14` }}>
                              {role.chips[idx]}
                            </span>
                          )}
                        </div>
                        <p className="role-cap-description">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Role Highlights Checklist */}
                <div className="role-points-checklist">
                  {role.points?.map((pt, pIdx) => (
                    <div key={pIdx} className="role-point-item">
                      <CheckCircle2 size={15} style={{ color: role.color, flexShrink: 0 }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action */}
                <div className="role-footer-action">
                  <Link 
                    to="/solutions" 
                    className="btn btn--primary role-cta-btn"
                    style={{ background: role.gradient, borderColor: 'transparent' }}
                  >
                    <span>{role.cta}</span>
                    <ArrowRight size={16} />
                  </Link>
                  <span className="role-privacy-note">
                    <Lock size={13} style={{ color: '#059669' }} />
                    <span>Role-isolated view • Zero cross-desk data leaks</span>
                  </span>
                </div>
              </div>

              {/* Right Column: High-Res Real Indian School Photography + Live Persona Floating Glass Card */}
              <div className="role-showcase-right">
                <div className="role-media-card">
                  <img 
                    src={role.image} 
                    alt={role.title} 
                    className="role-media-photo" 
                    loading="lazy"
                  />
                  <div className="role-media-gradient-overlay" />
                  
                  {/* Top Live Session Pill */}
                  <div className="role-floating-live-pill">
                    <span className="live-status-pulse" />
                    <span>ICSE &amp; CBSE Formats Active</span>
                  </div>

                  {/* Bottom Floating Persona Glass Card */}
                  <div className="role-persona-glass-card">
                    <div className="role-persona-avatar" style={{ background: role.gradient }}>
                      {role.avatar}
                    </div>
                    <div className="role-persona-details">
                      <div className="role-persona-name">{role.userName}</div>
                      <div className="role-persona-title">{role.userTitle}</div>
                    </div>
                    {role.chips?.[0] && (
                      <span className="role-persona-stat-badge" style={{ color: role.color, borderColor: `${role.color}40`, background: '#FFFFFF' }}>
                        {role.chips[0]}
                      </span>
                    )}
                  </div>
                </div>
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
          <div className="section-header text-center">
            <span className="section-kicker-badge section-kicker-badge--orange">
              <Sparkles size={13} />
              <span>NATIVE INDIAN SCHOOL WORKFLOWS</span>
            </span>
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
            <span className="ribbon-chip ribbon-chip--teal">STATE &amp; CENTRAL BOARDS</span>
            <span className="ribbon-chip ribbon-chip--purple">COLLEGES READY</span>
          </div>

          {/* 2 Clean Side-by-Side Showcases: Fees & Library */}
          <div className="brochure-page3-showcase-grid">
            {/* Fees Showcase with Real Photo */}
            <div className="page3-card page3-card--fees">
              <div className="page3-card-header">
                <div className="page3-icon-badge page3-icon-badge--fees">
                  <CreditCard size={22} />
                </div>
                <div className="page3-header-meta">
                  <span className="page3-kicker-tag text-orange">INSTANT COUNTER BILLING</span>
                  <h3>Fees &amp; Dynamic UPI Counter</h3>
                  <small>Instant INR Billing • Dynamic UPI QR • 3-Sec Thermal Slips</small>
                </div>
                <span className="page3-live-pill page3-live-pill--orange">
                  <span className="live-dot-pulse live-dot-pulse--orange"></span> Counter Live
                </span>
              </div>

              {/* Visual Showcase Frame with Authentic Indian School Fee Counter Photo */}
              <div className="page3-visual-frame">
                <img 
                  src="/real-photos/real-indian-fees-pos.jpg" 
                  alt="Indian school fees counter with POS thermal printer and UPI QR" 
                  className="page3-showcase-img"
                  loading="lazy"
                />
                <div className="page3-img-overlay page3-img-overlay--top">
                  <span className="page3-overlay-chip page3-overlay-chip--success">
                    <CheckCircle2 size={13} />
                    <span>PAID &amp; RECONCILED</span>
                  </span>
                  <span className="page3-overlay-tag">
                    BURSAR DESK #01
                  </span>
                </div>
                <div className="page3-img-overlay page3-img-overlay--bottom">
                  <div className="page3-overlay-amount-pill">
                    <span className="overlay-amount-label">Counter Collection</span>
                    <strong className="overlay-amount-val">₹ 17,200</strong>
                  </div>
                  <span className="page3-overlay-badge page3-overlay-badge--orange">
                    <CreditCard size={13} /> Dynamic UPI QR &amp; Cash POS
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="page3-card-action-bar">
                <div className="page3-action-note">
                  <Printer size={15} className="text-orange" />
                  <span>3-Sec Thermal Slip • WhatsApp Receipts Sent</span>
                </div>
                <Link to="/fees-management" className="btn btn--primary btn--sm page3-cta-btn page3-cta-btn--fees">
                  Explore Fees POS <ArrowRight size={14} />
                </Link>
              </div>

              {/* Visual Capability Chips */}
              <div className="page3-visual-chips">
                <span className="visual-chip visual-chip--orange">
                  <CreditCard size={15} /> Cash &amp; Dynamic UPI QR
                </span>
                <span className="visual-chip visual-chip--blue">
                  <Printer size={15} /> 3-Sec Thermal Slip
                </span>
                <span className="visual-chip visual-chip--green">
                  <WhatsAppIcon size={15} /> WhatsApp Receipts
                </span>
              </div>
            </div>

            {/* Library Showcase with Real Photo */}
            <div className="page3-card page3-card--library">
              <div className="page3-card-header">
                <div className="page3-icon-badge page3-icon-badge--library">
                  <Library size={22} />
                </div>
                <div className="page3-header-meta">
                  <span className="page3-kicker-tag text-teal">SMART ACCESSION SYSTEM</span>
                  <h3>Digital Library Catalogue</h3>
                  <small>14,800+ Volumes • Barcode Accession • Auto Overdue Alerts</small>
                </div>
                <span className="page3-live-pill page3-live-pill--teal">
                  <span className="live-dot-pulse live-dot-pulse--teal"></span> 14,820 Volumes
                </span>
              </div>

              {/* Visual Showcase Frame with Authentic Indian School Library Photo */}
              <div className="page3-visual-frame">
                <img 
                  src="/real-photos/real-indian-library.jpg" 
                  alt="Indian school library with student in uniform and digital catalog desk" 
                  className="page3-showcase-img"
                  loading="lazy"
                />
                <div className="page3-img-overlay page3-img-overlay--top">
                  <span className="page3-overlay-chip page3-overlay-chip--teal">
                    <BookOpen size={13} />
                    <span>ICSE &amp; CBSE CATALOGUE</span>
                  </span>
                  <span className="page3-overlay-tag page3-overlay-tag--teal">
                    14,820 VOLUMES
                  </span>
                </div>
                <div className="page3-img-overlay page3-img-overlay--bottom">
                  <div className="page3-overlay-amount-pill page3-overlay-amount-pill--teal">
                    <span className="overlay-amount-label">Smart Accession</span>
                    <strong className="overlay-amount-val">1-Tap Scan</strong>
                  </div>
                  <span className="page3-overlay-badge page3-overlay-badge--teal">
                    <ScanLine size={13} /> Barcode Scanner Integrated
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="page3-card-action-bar">
                <div className="page3-action-note">
                  <ScanLine size={15} className="text-teal" />
                  <span>Student ID Barcode Linked • Overdue Reminders</span>
                </div>
                <Link to="/features" className="btn btn--primary btn--sm page3-cta-btn page3-cta-btn--library">
                  View Live Catalogue <ArrowRight size={14} />
                </Link>
              </div>

              {/* Visual Capability Chips */}
              <div className="page3-visual-chips">
                <span className="visual-chip visual-chip--teal">
                  <ScanLine size={15} /> 1-Tap Barcode Scan
                </span>
                <span className="visual-chip visual-chip--blue">
                  <BookOpen size={15} /> ICSE &amp; CBSE Index
                </span>
                <span className="visual-chip visual-chip--purple">
                  <Clock size={15} /> Overdue Fine Alerts
                </span>
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
