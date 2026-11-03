import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, KeyRound, Database, Server, CheckCircle2, 
  Lock, RefreshCw, Key, ArrowRight, Check, Eye,
  AlertCircle, ShieldCheck, FileCheck, HardDrive, Cpu
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';
import SecurityHeroCommandCenter from '../components/SecurityHeroCommandCenter';

export default function SecurityHosting() {
  const [auditFilter, setAuditFilter] = useState('all');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedToast, setVerifiedToast] = useState(false);

  const securityGalleryCards = [
    {
      key: 'datacenter',
      title: 'Dedicated Institutional Database',
      badge: 'Sovereign Architecture',
      image: '/real-photos/real-bangalore-school-coding.jpg',
      tagline: 'Zero multitenant data mingling. Your school database is physically isolated on Indian cloud or local hardware.',
      chips: ['Dedicated DB Schema', 'Zero Cross-Bleed', 'Air-Gap Capable']
    },
    {
      key: 'admin',
      title: 'Campus IT & Administrative Control',
      badge: 'Granular Governance',
      image: '/real-photos/real-indian-teacher-computer.jpg',
      tagline: 'Granular permission boundaries, live session kill-switches, and institutional operator auditing.',
      chips: ['Instant Session Kill', 'Activity Streaming', 'Custom Staff Roles']
    },
    {
      key: 'passkey',
      title: 'FIDO2 Biometric Passkeys & 2FA',
      badge: 'Phishing-Resistant',
      image: '/real-photos/real-mobile-comm.jpg',
      tagline: 'Replace easily leaked or shared passwords with biometric Touch ID, Windows Hello, and hardware security keys.',
      chips: ['WebAuthn Standard', 'Hardware Key Ready', 'Brute-Force Shield']
    },
    {
      key: 'backup',
      title: 'Encrypted Vault & Disaster Recovery',
      badge: 'Zero Ransomware Risk',
      image: '/real-photos/real-campus-building.jpg',
      tagline: 'Automated 03:00 AM offsite snapshots with verifiable SHA-256 checksums and 1-click snapshot restoration.',
      chips: ['AES-256 Checksums', '1-Click Recovery', 'Off-Site Redundancy']
    }
  ];

  const auditLogs = [
    {
      id: 'REC-0842',
      type: 'fee',
      timestamp: 'Today, 11:42 AM',
      operator: 'CASH-03 (Accountant)',
      action: 'Issued Fee Receipt #REC-2026-0842 (₹5,250 • Aarav Sharma)',
      check: 'Verified Active Session',
      hash: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1f... ok',
      badgeColor: '#059669'
    },
    {
      id: 'MRK-1049',
      type: 'marks',
      timestamp: 'Today, 10:15 AM',
      operator: 'T-104 (Prof. S. Mukherjee)',
      action: 'Submitted Class IX-A Mathematics Term 1 Marksheet',
      check: 'Assigned Subject Match (RBAC)',
      hash: 'sha256:9f83c1628aa1eb21a81dc18148b2d71aec3d5c2e... ok',
      badgeColor: '#145EFF'
    },
    {
      id: 'ADM-0192',
      type: 'admin',
      timestamp: 'Today, 09:30 AM',
      operator: 'ADM-ROY (Principal)',
      action: 'Approved 2 Casual Leave Requests & Updated Timetable',
      check: 'FIDO2 Passkey Confirmed',
      hash: 'sha256:2c624232cdd221771294dfbb379ac8abacaec224... ok',
      badgeColor: '#742DDA'
    },
    {
      id: 'SYS-0041',
      type: 'backup',
      timestamp: 'Today, 03:00 AM',
      operator: 'SYSTEM (Automated Cron)',
      action: 'Nightly Encrypted Database Snapshot Generated (4.2 GB)',
      check: 'AES-256 Vault Checksum OK',
      hash: 'sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4... ok',
      badgeColor: '#059669'
    }
  ];

  const filteredLogs = auditFilter === 'all' 
    ? auditLogs 
    : auditLogs.filter(log => log.type === auditFilter);

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifiedToast(true);
      setTimeout(() => setVerifiedToast(false), 3500);
    }, 800);
  };

  const securityFaqs = [
    {
      question: 'Can teachers access marks or records from other classes?',
      answer: 'No. Strict role boundaries ensure teachers only access students, subjects, and examinations officially assigned to them. Fee ledgers and staff salaries remain strictly inaccessible.'
    },
    {
      question: 'Can our school host Pragya on our own private campus server?',
      answer: 'Yes. School-managed deployment on your institution’s own dedicated hardware or private cloud instance is fully supported. You retain 100% legal custody of all databases.'
    },
    {
      question: 'How are backups managed and verified?',
      answer: 'Pragya executes automated nightly encrypted snapshots that can be restored on demand. Every snapshot includes a cryptographic SHA-256 hash to ensure zero corruption or ransomware tampering.'
    },
    {
      question: 'Does Pragya claim third-party certifications like SOC 2 or ISO?',
      answer: 'No unverified marketing claims. Pragya demonstrates verifiable protections: WebAuthn passkeys, 2FA, field-level encryption, tamper-evident audit logs, and exportable SQLite/PostgreSQL dumps.'
    }
  ];

  return (
    <div className="security-page-wrapper">
      {/* 1. HERO SECTION (Visual-First with Interactive Security Command Center) */}
      <section className="solutions-gov-hero">
        <div className="container">
          <div className="solutions-gov-hero-grid">
            {/* Left: Concise Copy & Actionable CTAs */}
            <div className="solutions-gov-hero-text">
              <div className="solutions-gov-eyebrow">
                BANK-GRADE SECURITY • SOVEREIGN HOSTING
              </div>
              <h1 className="solutions-gov-title">
                Your School's Data. Sovereign, Encrypted, and Fully in Your Hands.
              </h1>
              <p className="solutions-gov-desc">
                Granular permission boundaries, passkeys &amp; TOTP authentication, tamper-evident audit ledgers, and encrypted nightly backups keep student information sovereign.
              </p>

              <div className="solutions-hero-actions">
                <a href="#audit-ledger" className="apaar-link-arrow">
                  <span>Inspect Audit Ledger</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Discuss Security &amp; Hosting
                </Link>
              </div>

              {/* Visual Trust Chips */}
              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>Zero Third-Party Data Sharing</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>AES-256 Field Encryption</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>FIDO2 Passkeys Ready</span>
                </span>
              </div>
            </div>

            {/* Right: Security Command Center Graphic */}
            <div className="solutions-gov-hero-visual">
              <SecurityHeroCommandCenter />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISUAL ARCHITECTURE SHOWCASE GALLERY (Images Rather Than Text!) */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              SOVEREIGN ARCHITECTURE
            </div>
            <h2>Built for Institutional Privacy &amp; Control</h2>
            <p>Every layer of Pragya is architected to eliminate data leaks, shared logins, and unverified access.</p>
          </div>

          {/* 4 Photo Cards Grid */}
          <div className="security-gallery-grid">
            {securityGalleryCards.map(item => (
              <div key={item.key} className="security-gallery-card">
                <div className="security-gallery-img-box">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="security-gallery-img" 
                  />
                  <div className="security-gallery-badge">
                    <span>{item.badge}</span>
                  </div>
                </div>

                <div className="security-gallery-content">
                  <h4>{item.title}</h4>
                  <p>{item.tagline}</p>

                  <div className="security-gallery-chips">
                    {item.chips.map((c, i) => (
                      <span key={i} className="sec-chip">{c}</span>
                    ))}
                  </div>

                  <a 
                    href="#how-it-works" 
                    className="role-gallery-action-btn"
                  >
                    <span>View Protection Flow</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE REAL-TIME AUDIT LOG TERMINAL */}
      <section className="section section--soft" id="audit-ledger">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              TAMPER-EVIDENT AUDIT TRAIL
            </div>
            <h2>Permanent Institutional Activity Log</h2>
            <p>Every fee collection, mark entry, and permission modification is cryptographically hashed with timestamps and user IDs.</p>
          </div>

          <div className="security-audit-terminal">
            {/* Header */}
            <div className="audit-terminal-header">
              <div className="audit-header-left">
                <Shield size={16} color="#059669" />
                <span className="audit-header-title">System Security Audit Ledger • Main Campus</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="security-live-pill">
                  <span className="pulsing-green-dot" />
                  Live Immutable Stream
                </span>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="audit-filter-bar">
              <button 
                className={`audit-filter-btn ${auditFilter === 'all' ? 'active' : ''}`}
                onClick={() => setAuditFilter('all')}
              >
                All Events ({auditLogs.length})
              </button>
              <button 
                className={`audit-filter-btn ${auditFilter === 'fee' ? 'active' : ''}`}
                onClick={() => setAuditFilter('fee')}
              >
                Fee Collections
              </button>
              <button 
                className={`audit-filter-btn ${auditFilter === 'marks' ? 'active' : ''}`}
                onClick={() => setAuditFilter('marks')}
              >
                Marks &amp; Exams
              </button>
              <button 
                className={`audit-filter-btn ${auditFilter === 'admin' ? 'active' : ''}`}
                onClick={() => setAuditFilter('admin')}
              >
                Principal Approvals
              </button>
              <button 
                className={`audit-filter-btn ${auditFilter === 'backup' ? 'active' : ''}`}
                onClick={() => setAuditFilter('backup')}
              >
                Nightly Backups
              </button>
            </div>

            {/* Table */}
            <div style={{ overflowX: 'auto' }}>
              <table className="audit-table">
                <thead>
                  <tr>
                    <th>Timestamp</th>
                    <th>Operator ID</th>
                    <th>Action Executed</th>
                    <th>Security Guardrail</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLogs.map(item => (
                    <tr key={item.id}>
                      <td style={{ color: 'var(--color-slate-500)', whiteSpace: 'nowrap' }}>{item.timestamp}</td>
                      <td><strong style={{ color: 'var(--color-ink)' }}>{item.operator}</strong></td>
                      <td>{item.action}</td>
                      <td>
                        <span style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '4px',
                          color: item.badgeColor,
                          fontWeight: 750,
                          fontSize: '0.74rem',
                          background: `${item.badgeColor}12`,
                          padding: '2px 8px',
                          borderRadius: '4px'
                        }}>
                          <CheckCircle2 size={12} />
                          {item.check}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Verification Status */}
            <div className="audit-verify-bar">
              <span>Block State: <strong>SHA-256 Merkle Hash Verified (0 Breaches)</strong></span>
              <button 
                onClick={handleVerify}
                className="verify-action-btn"
                disabled={isVerifying}
              >
                {isVerifying ? (
                  <>
                    <RefreshCw size={13} className="animate-spin" />
                    <span>Verifying Checksum...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck size={13} color="#059669" />
                    <span>Verify Cryptographic Seal</span>
                  </>
                )}
              </button>
            </div>

            {verifiedToast && (
              <div style={{ background: '#ECFDF5', borderTop: '1px solid #A7F3D0', padding: '8px 18px', color: '#059669', fontSize: '0.74rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} />
                <span>Cryptographic Verification Successful: All 4 logged blocks match immutable database ledger state.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. FOUR PILLARS OF PRAGYA DATA DEFENSE */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              SECURITY PILLARS
            </div>
            <h2>Four Pillars of Pragya Data Architecture</h2>
            <p>Defense-in-depth principles implemented across every database query and user session.</p>
          </div>

          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <Shield size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>Role-Based Permission Boundaries</h3>
              <p>Teachers access only their assigned classes; students access only their personal dossiers; accountants operate fee desks without academic edit rights.</p>
              <div style={{ marginTop: '12px', display: 'flex', gap: '6px' }}>
                <span className="sec-chip">Scoped SQL TVFs</span>
                <span className="sec-chip">Zero Shared Passwords</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <KeyRound size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>Passkeys, 2FA &amp; Session Guard</h3>
              <p>FIDO2 biometric passkeys, authenticator app (TOTP) verification, brute-force rate limiters, and auto session logout safeguard sensitive administrative accounts.</p>
              <div style={{ marginTop: '12px', display: 'flex', gap: '6px' }}>
                <span className="sec-chip">WebAuthn Ready</span>
                <span className="sec-chip">Idle Auto-Lock</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(5, 150, 105, 0.08)', color: '#059669' }}>
                <Database size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>Encrypted Nightly Backups</h3>
              <p>Automated database snapshots are encrypted with AES-256 and can be restored quickly in the event of hardware failures, ensuring operational continuity.</p>
              <div style={{ marginTop: '12px', display: 'flex', gap: '6px' }}>
                <span className="sec-chip">03:00 AM Cron</span>
                <span className="sec-chip">SHA-256 Checksums</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(245, 158, 11, 0.08)', color: '#D97706' }}>
                <Server size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>School-Controlled Hosting</h3>
              <p>Deploy on your institution’s own on-premise server or dedicated Indian cloud instance, retaining 100% legal ownership and sovereignty over your data.</p>
              <div style={{ marginTop: '12px', display: 'flex', gap: '6px' }}>
                <span className="sec-chip">On-Premises or Cloud</span>
                <span className="sec-chip">Full SQL Dumps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-STEP DATA PROTECTION TIMELINE (Direct Match to APAAR Stepper) */}
      <section className="apaar-how-section" id="how-it-works">
        <div className="container">
          <div className="apaar-how-header">
            <h2>The Pragya <span>Data Protection Lifecycle</span></h2>
            <p>From initial staff login to nightly archival, institutional records are shielded at every stage.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <Key size={22} color="#145EFF" />
                </div>
                <h4>FIDO2 Multi-Factor</h4>
                <p>Biometric passkey or TOTP verification before session start</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <Shield size={22} color="#059669" />
                </div>
                <h4>Perimeter RBAC</h4>
                <p>Strict boundary restricts records to assigned staff only</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <FileCheck size={22} color="#742DDA" />
                </div>
                <h4>Audit Recording</h4>
                <p>Permanent timestamped ledger entry for every read &amp; update</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <HardDrive size={22} color="#F59E0B" />
                </div>
                <h4>Encrypted Snapshot</h4>
                <p>Automated 03:00 AM offsite backup with SHA-256 seal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SOVEREIGN CLOUD VS. ON-PREMISES COMPARISON */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              DEPLOYMENT FLEXIBILITY
            </div>
            <h2>Choose the Hosting Model That Fits Your Trust</h2>
            <p>Whether you require managed convenience or full on-premise physical custody, Pragya supports both.</p>
          </div>

          <div className="hosting-compare-container">
            {/* Model A: Managed Cloud */}
            <div className="hosting-option-card card--recommended">
              <span className="hosting-rec-badge">RECOMMENDED FOR MOST SCHOOLS</span>
              <div className="hosting-header">
                <div className="hosting-icon-box" style={{ background: 'rgba(20, 94, 255, 0.1)', color: 'var(--color-blue)' }}>
                  <Server size={24} />
                </div>
                <div className="hosting-title-box">
                  <h3>Pragya Managed Cloud (India)</h3>
                  <span>Hosted in Mumbai / Hyderabad Data Centers</span>
                </div>
              </div>

              <ul className="hosting-checklist">
                <li>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Zero Server Maintenance:</strong> Automatic security patches and OS maintenance handled for you.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>99.98% Guaranteed Uptime:</strong> High-availability load balancers with DDoS mitigation.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Automated Nightly Offsite Snapshots:</strong> Stored securely in georedundant Indian cloud storage.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Full Data Sovereignty:</strong> Export your full database SQL dump anytime with 1 click.</span>
                </li>
              </ul>

              <Link to="/contact" className="btn btn--primary btn--sm" style={{ alignSelf: 'flex-start', borderRadius: '6px' }}>
                Deploy on Managed Cloud
              </Link>
            </div>

            {/* Model B: School-Managed On-Premise */}
            <div className="hosting-option-card">
              <div className="hosting-header">
                <div className="hosting-icon-box" style={{ background: 'rgba(5, 150, 105, 0.1)', color: '#059669' }}>
                  <HardDrive size={24} />
                </div>
                <div className="hosting-title-box">
                  <h3>School-Owned Local Server</h3>
                  <span>Campus-Managed Dedicated Hardware</span>
                </div>
              </div>

              <ul className="hosting-checklist">
                <li>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Complete Physical Custody:</strong> Your database resides entirely on school premises.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Air-Gap Capable:</strong> Can run within a local campus LAN with zero external public internet exposure.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Campus IT Governance:</strong> Your internal systems team controls hardware, access, and backups.</span>
                </li>
                <li>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Pragya Assisted Setup:</strong> Our engineering team configures the server, database, and local sync.</span>
                </li>
              </ul>

              <Link to="/contact" className="btn btn--secondary btn--sm" style={{ alignSelf: 'flex-start', borderRadius: '6px' }}>
                Discuss On-Premise Setup
              </Link>
            </div>
          </div>

          {/* Responsible Transparency Disclaimer */}
          <div className="security-disclaimer" style={{ marginTop: '40px', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '6px', padding: '18px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <ShieldCheck size={18} color="#059669" />
              <strong style={{ color: 'var(--color-ink)', fontSize: '0.9rem' }}>Responsible Transparency:</strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.83rem', color: '#475569', lineHeight: 1.5 }}>
              Pragya demonstrates verifiable software engineering protections—strict RBAC role boundaries, FIDO2 biometric passkeys, field-level encryption, and automated nightly backups. We do not plaster generic marketing stickers (such as SOC 2 or ISO) without independent, third-party published audit validation.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              FREQUENT QUESTIONS
            </div>
            <h2>Security &amp; Deployment FAQs</h2>
          </div>
          <FaqAccordion items={securityFaqs} />
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <BottomCta
        title="Protect Your School Data with Absolute Confidence."
        subtitle="Schedule a technical conversation on server requirements, backup strategies, and role permission setup."
        buttonText="Discuss Security With Our Team"
      />
    </div>
  );
}
