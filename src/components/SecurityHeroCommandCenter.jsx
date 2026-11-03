import React, { useState } from 'react';
import { Shield, Lock, KeyRound, CheckCircle2, AlertCircle, Eye, Database, Server } from 'lucide-react';

export default function SecurityHeroCommandCenter() {
  const [selectedRole, setSelectedRole] = useState('teacher');

  const permissions = {
    principal: {
      role: 'Principal & Trustees',
      badge: 'Full Institutional Scope',
      badgeColor: '#145EFF',
      marks: { label: 'All Classes (All Campuses)', status: 'Allowed', ok: true },
      fees: { label: 'Consolidated Head-Wise Ledger', status: 'Allowed', ok: true },
      apaar: { label: 'Verified PEN & APAAR Ledger', status: 'Masked Access', ok: true },
      audit: { label: 'System Configuration & RBAC', status: 'Full Admin', ok: true }
    },
    teacher: {
      role: 'Class & Subject Teachers',
      badge: 'Scoped Academic Boundary',
      badgeColor: '#059669',
      marks: { label: 'Assigned Classes & Subjects Only', status: 'Allowed', ok: true },
      fees: { label: 'Student Fee Ledgers & Cashbooks', status: 'Blocked (403)', ok: false },
      apaar: { label: 'Class Roll & DigiLocker Status', status: 'Read Only', ok: true },
      audit: { label: 'Staff Salary & Institutional Settings', status: 'Blocked (403)', ok: false }
    },
    accountant: {
      role: 'Fee Counter & Accounts',
      badge: 'Financial Desk Only',
      badgeColor: '#F59E0B',
      marks: { label: 'Student Marks & Exam Results', status: 'Blocked (403)', ok: false },
      fees: { label: 'Thermal Slip POS & Daily Cashbook', status: 'Allowed', ok: true },
      apaar: { label: 'Student Academic Records', status: 'Blocked (403)', ok: false },
      audit: { label: 'Payment Gateway & Bank Batches', status: 'Allowed', ok: true }
    },
    parent: {
      role: 'Parents & Guardians',
      badge: 'Isolated Child Dossier',
      badgeColor: '#742DDA',
      marks: { label: 'Own Child\'s Published Report Card', status: 'Allowed', ok: true },
      fees: { label: 'Own Child\'s Outstanding Due & Receipts', status: 'Allowed', ok: true },
      apaar: { label: 'Other Students\' Data & Profiles', status: 'Zero Access', ok: false },
      audit: { label: 'Internal School Activity & Logs', status: 'Zero Access', ok: false }
    }
  };

  const active = permissions[selectedRole];

  return (
    <div className="security-command-center">
      {/* Top Floating Badge */}
      <div className="security-top-badge">
        <Shield size={14} color="#059669" />
        <span>Hardware Biometric Passkeys (FIDO2) • AES-256 Encryption</span>
      </div>

      <div className="security-command-window">
        {/* Window Header */}
        <div className="security-window-bar">
          <div className="security-window-dots">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <div className="security-window-title">
            <Shield size={13} color="#059669" />
            <span>Pragya Sovereign Vault • Integrity Monitor</span>
          </div>
          <span className="security-live-pill">
            <span className="pulsing-green-dot" />
            Encrypted
          </span>
        </div>

        {/* 3 Live Security KPI Cards */}
        <div className="security-kpi-row">
          <div className="security-kpi-cell">
            <span className="sec-kpi-label">REST &amp; TRANSIT</span>
            <span className="sec-kpi-value text-blue">AES-256 GCM</span>
            <span className="sec-kpi-sub">TLS 1.3 Strict HTTPS</span>
          </div>
          <div className="security-kpi-cell">
            <span className="sec-kpi-label">AUTH STANDARD</span>
            <span className="sec-kpi-value text-emerald">FIDO2 Passkeys</span>
            <span className="sec-kpi-sub">Phishing-Proof Biometrics</span>
          </div>
          <div className="security-kpi-cell">
            <span className="sec-kpi-label">SNAPSHOT VAULT</span>
            <span className="sec-kpi-value text-violet">03:00 AM Daily</span>
            <span className="sec-kpi-sub">SHA-256 Checksum OK</span>
          </div>
        </div>

        {/* Interactive Permission Gatekeeper Simulator */}
        <div className="security-gatekeeper-box">
          <div className="gatekeeper-header">
            <div className="gatekeeper-title">
              <Lock size={15} color="#145EFF" />
              <strong>Interactive Role Boundary Gatekeeper</strong>
            </div>
            <span className="gatekeeper-hint">Select a role to verify perimeter enforcement</span>
          </div>

          {/* Role Selector Tabs */}
          <div className="gatekeeper-tabs" role="tablist">
            {Object.keys(permissions).map(key => (
              <button
                key={key}
                type="button"
                className={`gatekeeper-tab-btn ${selectedRole === key ? 'active' : ''}`}
                onClick={() => setSelectedRole(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          {/* Active Permission Rules Matrix */}
          <div className="gatekeeper-matrix">
            <div className="gatekeeper-role-summary">
              <span className="role-summary-name">{active.role}</span>
              <span className="role-summary-badge" style={{ backgroundColor: `${active.badgeColor}15`, color: active.badgeColor }}>
                {active.badge}
              </span>
            </div>

            <div className="gatekeeper-items-list">
              <div className="gate-item">
                <span className="gate-item-label">Academics &amp; Exam Marks:</span>
                <span className={`gate-item-status ${active.marks.ok ? 'status--allow' : 'status--block'}`}>
                  {active.marks.ok ? <CheckCircle2 size={13} /> : <AlertCircle size={13} />}
                  <span>{active.marks.label}</span>
                </span>
              </div>

              <div className="gate-item">
                <span className="gate-item-label">Fee Ledgers &amp; Cashbook:</span>
                <span className={`gate-item-status ${active.fees.ok ? 'status--allow' : 'status--block'}`}>
                  {active.fees.ok ? <CheckCircle2 size={13} /> : <AlertCircle size={13} />}
                  <span>{active.fees.label}</span>
                </span>
              </div>

              <div className="gate-item">
                <span className="gate-item-label">Student APAAR / Aadhaar Dossier:</span>
                <span className={`gate-item-status ${active.apaar.ok ? 'status--allow' : 'status--block'}`}>
                  {active.apaar.ok ? <CheckCircle2 size={13} /> : <AlertCircle size={13} />}
                  <span>{active.apaar.label}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Seal */}
        <div className="security-command-footer">
          <div className="footer-seal-item">
            <CheckCircle2 size={13} color="#059669" />
            <span>Zero Cross-School Data Bleed</span>
          </div>
          <div className="footer-seal-item">
            <CheckCircle2 size={13} color="#145EFF" />
            <span>Indian Cloud or On-Premise Host</span>
          </div>
        </div>
      </div>

      {/* Bottom Floating Badge */}
      <div className="security-bottom-badge">
        <Server size={14} color="#145EFF" />
        <span>100% Institution Data Ownership • Exportable SQLite/PostgreSQL Dump</span>
      </div>
    </div>
  );
}
