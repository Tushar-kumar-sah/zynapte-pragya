import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, KeyRound, Database, Server, CheckCircle2, 
  Lock, RefreshCw, Key, ArrowRight, Check 
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function SecurityHosting() {
  const securityFaqs = [
    {
      question: 'Can teachers access marks or records from other classes?',
      answer: 'No. Strict role boundaries ensure teachers only access students, subjects, and examinations officially assigned to them.'
    },
    {
      question: 'Can our school host Pragya on our own private server?',
      answer: 'Yes. School-managed deployment on your institution’s own dedicated hardware or private cloud instance is fully supported.'
    },
    {
      question: 'How are backups managed and verified?',
      answer: 'Pragya executes automated nightly encrypted backups that can be restored on demand, with off-site snapshot options.'
    },
    {
      question: 'Does Pragya claim third-party certifications like SOC 2 or ISO?',
      answer: 'No unverified marketing claims. Pragya demonstrates verifiable protections: WebAuthn passkeys, 2FA, field-level encryption, and tamper-evident audit logs.'
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-live-pill" style={{ margin: '0 auto 16px' }}>
              <span className="hero-live-dot" />
              <span>Zero-Trust Role Boundaries &bull; School-Controlled Server</span>
            </div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              DATA PRIVACY &amp; DEPLOYMENT
            </div>
            <h1 className="page-hero-title">Built for School Data That Deserves Absolute Care.</h1>
            <p className="page-hero-desc">
              Granular permission boundaries, passkeys &amp; TOTP authentication, tamper-evident audit ledgers, and encrypted nightly backups keep student information sovereign.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Discuss Security &amp; Deployment</Link>
              <Link to="/features" className="btn btn--secondary btn--lg">Explore All Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simulated Live System Security Audit Ledger */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />REAL-TIME AUDIT LOG</div>
            <h2>Tamper-Evident Institutional Activity Log</h2>
            <p>Every fee collection, mark entry, and permission modification is permanently tracked with timestamps and user IDs.</p>
          </div>

          <div style={{ maxWidth: '780px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ background: 'var(--color-ink)', color: '#FFFFFF', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={16} color="var(--color-cyan)" />
                <strong>System Security Audit Trail • Main Campus</strong>
              </div>
              <span style={{ background: '#ECFDF5', color: '#059669', padding: '3px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700 }}>
                Encrypted &bull; Read-Only Log
              </span>
            </div>

            <div style={{ overflowX: 'auto', padding: '16px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
                <thead>
                  <tr style={{ background: 'var(--color-slate-50)', textAlign: 'left', borderBottom: '1px solid var(--color-slate-200)' }}>
                    <th style={{ padding: '8px' }}>Timestamp</th>
                    <th style={{ padding: '8px' }}>Operator</th>
                    <th style={{ padding: '8px' }}>Action Logged</th>
                    <th style={{ padding: '8px' }}>Security Check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '8px', color: 'var(--color-slate-500)' }}>28 Oct 11:42 AM</td>
                    <td style={{ padding: '8px' }}><strong>CASH-03 (Accountant)</strong></td>
                    <td style={{ padding: '8px' }}>Issued Fee Receipt #REC-2026-0842 (₹5,250)</td>
                    <td style={{ padding: '8px', color: 'var(--color-success)', fontWeight: 700 }}>✓ Verified Session</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '8px', color: 'var(--color-slate-500)' }}>28 Oct 10:15 AM</td>
                    <td style={{ padding: '8px' }}><strong>T-104 (Prof. S. Mukherjee)</strong></td>
                    <td style={{ padding: '8px' }}>Submitted Maths Marksheet (Class IX-A)</td>
                    <td style={{ padding: '8px', color: 'var(--color-success)', fontWeight: 700 }}>✓ Assigned Subject Match</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '8px', color: 'var(--color-slate-500)' }}>28 Oct 09:30 AM</td>
                    <td style={{ padding: '8px' }}><strong>ADM-ROY (Principal)</strong></td>
                    <td style={{ padding: '8px' }}>Approved 2 Casual Leave Requests</td>
                    <td style={{ padding: '8px', color: 'var(--color-blue)', fontWeight: 700 }}>✓ 2FA Passkey Confirmed</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', color: 'var(--color-slate-500)' }}>28 Oct 03:00 AM</td>
                    <td style={{ padding: '8px' }}><strong>SYSTEM (CRON)</strong></td>
                    <td style={{ padding: '8px' }}>Nightly Encrypted Backup Created (4.2 GB)</td>
                    <td style={{ padding: '8px', color: 'var(--color-violet)', fontWeight: 700 }}>✓ AES-256 Checksum OK</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Security Pillars */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              SECURITY PILLARS
            </div>
            <h2>Four Pillars of Pragya Data Architecture</h2>
          </div>

          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <Shield size={28} />
              </div>
              <h3>Role-Based Permission Boundaries</h3>
              <p>Teachers access only their assigned classes; students access only their personal dossiers; accountants operate fee desks without academic edit rights.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <KeyRound size={28} />
              </div>
              <h3>Passkeys, 2FA &amp; Session Guard</h3>
              <p>FIDO2 biometric passkeys, authenticator app (TOTP) verification, brute-force rate limiters, and auto session logout safeguard sensitive administrative accounts.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(0, 205, 229, 0.12)', color: '#028394' }}>
                <Database size={28} />
              </div>
              <h3>Encrypted Nightly Backups</h3>
              <p>Automated database snapshots are encrypted and can be restored quickly in the event of hardware failures, ensuring operational continuity.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(5, 150, 105, 0.08)', color: 'var(--color-success)' }}>
                <Server size={28} />
              </div>
              <h3>School-Controlled Hosting</h3>
              <p>Deploy on your institution’s own on-premise server or dedicated cloud instance, retaining 100% legal ownership and sovereignty over your data.</p>
            </div>
          </div>

          <div className="security-disclaimer" style={{ marginTop: '40px' }}>
            <strong>Responsible Transparency:</strong> Pragya outlines verifiable software protections—role boundaries, FIDO2 passkeys, encryption, and nightly backups. We do not make generic third-party compliance claims (like SOC 2 or ISO) without independent evaluation.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Security &amp; Deployment FAQs</h2>
          </div>
          <FaqAccordion items={securityFaqs} />
        </div>
      </section>

      <BottomCta
        title="Protect Your School Data with Confidence."
        subtitle="Schedule a technical conversation on server requirements, backup strategies and permission setup."
        buttonText="Discuss Security With Our Team"
      />
    </>
  );
}
