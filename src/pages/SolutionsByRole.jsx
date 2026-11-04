import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Shield, ArrowRight, Building2, 
  Users, Award, BarChart3, Lock, ShieldCheck,
  UserCheck, CreditCard, Calendar, Settings, FileText,
  Smartphone, Eye
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';
import RoleHeroCommandCenter from '../components/RoleHeroCommandCenter';
import RolePreviewMockup from '../components/RolePreviewMockup';
import { rolesData } from '../data/rolesData';

export default function SolutionsByRole() {
  const [selectedRole, setSelectedRole] = useState('principal');
  const role = rolesData[selectedRole];

  const roleIcons = {
    principal: '👑',
    administrator: '🏢',
    teacher: '👩‍🏫',
    admissions: '📋',
    accountant: '💰',
    hr: '👥',
    student: '🎓'
  };

  const galleryRoles = [
    {
      key: 'principal',
      name: 'Principals & Management',
      badge: 'Executive Oversight',
      image: '/real-photos/real-campus-building.jpg',
      tagline: 'Real-time bird\'s-eye roll call & fee collections across classes.',
      chips: ['Live School KPIs', 'APAAR Verification', 'Full Audit Log']
    },
    {
      key: 'teacher',
      name: 'Teachers & Faculty',
      badge: '30-Sec Attendance',
      image: '/real-photos/real-indian-teacher-students.jpg',
      tagline: 'Rapid daily roll call, instant grading, and syllabus tracking.',
      chips: ['Mobile Roll Call', 'WhatsApp Absent Sync', 'Timetable Sync']
    },
    {
      key: 'accountant',
      name: 'Fee Counter & Accounts',
      badge: '3-Sec Thermal POS',
      image: '/real-photos/real-indian-fee-counter.jpg',
      tagline: 'Instant cash & UPI QR receipts with automatic head-wise ledger.',
      chips: ['Thermal Slip POS', 'Dynamic UPI QR', 'Bank NEFT Batches']
    },
    {
      key: 'student',
      name: 'Parents & Students',
      badge: 'Mobile App',
      image: '/real-photos/real-indian-students-uniform.jpg',
      tagline: 'Daily timetables, published report cards, homework, and fee receipts.',
      chips: ['Live Attendance Feed', 'Digital Report Cards', 'Notice Circulars']
    }
  ];

  const solutionsFaqs = [
    {
      question: 'Can we restrict what teachers or clerks can see?',
      answer: 'Yes. Pragya provides granular Role-Based Access Control (RBAC). A class teacher only sees their assigned classes, sections, and subjects. Fee ledgers and staff salaries remain strictly hidden.'
    },
    {
      question: 'Do teachers need training to take attendance or enter marks?',
      answer: 'No training required. The teacher desk is built for a 30-second roll call on any phone or laptop with simple 1-tap toggles.'
    },
    {
      question: 'How does Pragya handle staff turnover during the session?',
      answer: 'Administrators reassign classes or revoke logins with 1 click. Historical logs, marks, and audit records remain intact.'
    },
    {
      question: 'Can a multi-branch school trust view all campuses together?',
      answer: 'Yes. Trustees and central administrators get a multi-campus switcher to toggle between branches or inspect consolidated enrollment and fee health.'
    }
  ];

  return (
    <div className="solutions-page-wrapper">
      {/* 1. HERO SECTION (Visual-First with Image & Command Mockup) */}
      <section className="solutions-gov-hero">
        <div className="container">
          <div className="solutions-gov-hero-grid">
            {/* Left Column: Minimal Text, Actionable CTAs */}
            <div className="solutions-gov-hero-text">
              <div className="solutions-gov-eyebrow">
                ONE SYSTEM • PURPOSE-BUILT WORKSPACES
              </div>
              <h1 className="solutions-gov-title">
                One School. Every Role. The Right View for Everyone.
              </h1>
              <p className="solutions-gov-desc">
                Principals, teachers, accountants, and parents each get a dedicated screen with zero clutter and strict permission guardrails.
              </p>

              <div className="solutions-hero-actions">
                <a href="#role-workbench" className="apaar-link-arrow">
                  <span>Explore Role Workspaces</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Book a Role-Based Demo
                </Link>
              </div>

              {/* Visual Trust Chips */}
              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>7 Role Workspaces</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>Zero Screen Clutter</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>Granular RBAC Guardrails</span>
                </span>
              </div>
            </div>

            {/* Right Column: Visual Command Center */}
            <div className="solutions-gov-hero-visual">
              <RoleHeroCommandCenter />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE ROLE WORKBENCH (With Real Role Photos) */}
      <section className="section section--soft" id="role-workbench">
        <div className="container">
          <div className="section-header">
            <h2>Tailored Workspaces for Every Campus Department</h2>
            <p>Click any role below to view their dedicated workplace image, capabilities, and live screen preview.</p>
          </div>

          {/* Role Switcher Pill Tabs */}
          <div className="role-switcher-tabs" role="tablist">
            {Object.keys(rolesData).map(key => (
              <button
                key={key}
                className={`role-tab-btn ${selectedRole === key ? 'active' : ''}`}
                onClick={() => setSelectedRole(key)}
                role="tab"
                aria-selected={selectedRole === key}
              >
                <span className="role-tab-icon">{roleIcons[key] || '📋'}</span>
                <span>{rolesData[key].name}</span>
              </button>
            ))}
          </div>

          {/* Active Role Workbench Display: Image + Capabilities on Left, Live Mockup on Right */}
          <div className="role-display-box role-display-box--visual">
            {/* Left: Role Photo & Key Capabilities */}
            <div className="role-info-content">
              {/* Role Photo Card */}
              <div className="role-photo-feature-card">
                <img 
                  src={role.image || '/real-photos/real-campus-building.jpg'} 
                  alt={role.title} 
                  className="role-feature-photo-img" 
                />
                <div className="role-photo-badge-overlay">
                  <span>{role.badge}</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 850, color: 'var(--color-ink)', marginTop: '16px', marginBottom: '6px' }}>
                {role.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '18px' }}>
                {role.outcome}
              </p>

              {/* 3 Visual Capability Chips */}
              <div className="role-features-vertical">
                {role.features && role.features.map((feat, idx) => (
                  <div key={idx} className="role-feat-item">
                    <div className="role-feat-icon-box">
                      <CheckCircle2 size={16} color="#059669" />
                    </div>
                    <div>
                      <strong>{feat.title}</strong>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '20px' }}>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ borderRadius: '6px' }}>
                  <span>{role.cta}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right: Live Realistic Role UI Mockup Preview */}
            <div className="role-mockup-wrapper">
              <RolePreviewMockup roleKey={selectedRole} roleData={role} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL ROLE GALLERY (Images Rather Than Wall of Text) */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Built Around Real School People</h2>
            <p>Every role gets an intuitive, distraction-free interface built for their daily rhythm.</p>
          </div>

          {/* 4 Photo Cards Grid */}
          <div className="role-gallery-grid">
            {galleryRoles.map(item => (
              <div key={item.key} className="role-gallery-card">
                <div className="role-gallery-img-box">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="role-gallery-img" 
                  />
                  <div className="role-gallery-badge">
                    <span>{item.badge}</span>
                  </div>
                </div>

                <div className="role-gallery-content">
                  <h4>{item.name}</h4>
                  <p>{item.tagline}</p>

                  <div className="role-gallery-chips">
                    {item.chips.map((c, i) => (
                      <span key={i} className="gallery-chip">{c}</span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedRole(item.key);
                      const el = document.getElementById('role-workbench');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="role-gallery-action-btn"
                  >
                    <span>Simulate View</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Multi-campus card */}
          <div className="multi-campus-banner" style={{ marginTop: '48px' }}>
            <div className="multi-campus-text">
              <h4>For Schools with More Than One Branch</h4>
              <p>
                Pragya includes branch-aware records and an academic-year/branch switcher, while keeping campus-specific access controlled. This is essential for school groups that need shared governance without blending every campus's daily records.
              </p>
            </div>
            <Link to="/multi-branch-management" className="btn btn--secondary btn--sm" style={{ flexShrink: 0 }}>
              Explore Multi-Branch Management
            </Link>
          </div>
        </div>
      </section>

      {/* 4. HOW PRAGYA UNIFIES WORKFLOWS (4-Step Connected Horizontal Timeline) */}
      <section className="apaar-how-section" id="how-it-works">
        <div className="container">
          <div className="apaar-how-header">
            <h2>How Pragya Unifies <span>Campus Workflows</span></h2>
            <p>From morning roll call to evening fee reconciliation, data flows instantly across roles.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <Lock size={22} color="#145EFF" />
                </div>
                <h4>Role-Based Onboarding</h4>
                <p>RBAC login credentials per staff member</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <UserCheck size={22} color="#059669" />
                </div>
                <h4>Focused Daily Action</h4>
                <p>30-sec roll call &amp; 3-sec thermal slips</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <CheckCircle2 size={22} color="#742DDA" />
                </div>
                <h4>Auto Cross-Sync</h4>
                <p>Instant WhatsApp alerts &amp; ledger updates</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <BarChart3 size={22} color="#F59E0B" />
                </div>
                <h4>Unified Oversight</h4>
                <p>Consolidated health KPIs for principals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP & IT FAQS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions About Role Workspaces</h2>
          </div>
          <FaqAccordion items={solutionsFaqs} />
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <BottomCta
        title="A Demo Built Around Your Team."
        subtitle="Tell us which roles matter most. We'll focus the product walkthrough on your school's daily work."
        buttonText="Book a Role-Based Demo"
      />
    </div>
  );
}
