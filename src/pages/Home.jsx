import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Shield, Users, Layers, Calendar, 
  CreditCard, Bell, Smartphone, School, Award, Sparkles, Star, 
  Check, Lock, ShieldCheck, Database, RefreshCw, Key
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
  const role = rolesData[selectedRole];

  return (
    <>
      {/* 01 / HERO SECTION WITH SOCIAL PROOF & LIVE STATUS */}
      <section className="section hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                PRAGYA SCHOOL OPERATING SYSTEM
              </div>

              <h1 className="hero-title">
                One Platform for <span className="hero-title-highlight">Every School Day.</span>
              </h1>

              <p className="hero-subtitle">
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

              {/* High Density Trust Signals */}
              <div className="hero-trust-signals">
                <div className="hero-trust-item">
                  <CheckCircle2 size={18} color="var(--color-blue)" />
                  <span>APAAR &amp; UDISE+ Format</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 size={18} color="var(--color-blue)" />
                  <span>WBBSE &amp; WBCHSE Catalogues</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 size={18} color="var(--color-blue)" />
                  <span>INR Counter POS Receipts</span>
                </div>
              </div>

              {/* Social Proof Avatar Pile */}
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
            </div>

            <ErpMockup />
          </div>
        </div>
      </section>

      {/* 02 / STATS COUNTER BANNER */}
      <StatsBanner />

      {/* 03 / ICONIC MODULES & UTILITIES GRID (16 MODULES WITH CLICK-TO-PREVIEW) */}
      <IconicModules />

      {/* 04 / 4-STEP VISUAL APAAR READINESS WORKFLOW */}
      <VisualWorkflow />

      {/* 05 / LIVE INTERACTIVE APAAR TRACKER CONSOLE */}
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

      {/* 06 / EVERYTHING AT YOUR FINGERTIPS (MOBILE APPS SHOWCASE) */}
      <MobileAppsShowcase />

      {/* 07 / SOLUTIONS BY ROLE (INTERACTIVE VIEW) */}
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

      {/* 08 / SECURITY & HOSTING VISUAL CARDS */}
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
              <h3 style={{ color: '#0891B2' }}>School-Controlled Server</h3>
              <p>Pragya deploys on your school-controlled infrastructure or dedicated cloud, keeping your student data 100% sovereign.</p>
              <div className="security-chips" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '12px' }}>
                <span className="badge badge--cyan">On-Premise / Private Cloud</span>
                <span className="badge badge--cyan">Isolated DB</span>
              </div>
            </div>
          </div>

          <div className="security-disclaimer" style={{ marginTop: '30px' }}>
            <strong>Responsible Security Practice:</strong> Pragya implements role boundaries, passkeys, encryption, and nightly backups rather than making unverified claims.
          </div>
        </div>
      </section>

      {/* 09 / DEMO LEAD CAPTURE FORM */}
      <section className="section section--white" id="contact">
        <div className="container">
          <DemoForm
            title="See What a Better School Day Looks Like."
            subtitle="Tell us about your school structure and the workflows you want to simplify. We’ll walk through relevant Pragya modules, answer questions and share live previews."
          />
        </div>
      </section>

      {/* 10 / FAQ ACCORDION */}
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

      <BottomCta />
    </>
  );
}
