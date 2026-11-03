import React from 'react';
import { 
  CheckCircle2, Clock, ShieldCheck, Printer, QrCode, 
  Send, UserCheck, Award, Calendar, FileText, DownloadCloud,
  ChevronRight, Users, Bell, AlertCircle
} from 'lucide-react';

export default function RolePreviewMockup({ roleKey = 'principal', roleData }) {
  if (!roleData) return null;

  return (
    <div className="role-mockup-window">
      {/* Window Titlebar */}
      <div className="role-mockup-titlebar">
        <div className="role-mockup-traffic-lights">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <div className="role-mockup-window-title">
          <span>Pragya Workspace</span>
          <span className="role-window-sep">•</span>
          <span className="role-window-badge">{roleData.badge}</span>
        </div>
        <div className="role-mockup-live-status">
          <span className="live-pulse-dot" />
          <span>Active</span>
        </div>
      </div>

      {/* Role Profile Header */}
      <div className="role-mockup-user-bar">
        <div className="role-mockup-avatar-box">
          <div className="role-mockup-avatar">{roleData.avatar}</div>
          <div>
            <div className="role-mockup-user-name">{roleData.userName}</div>
            <div className="role-mockup-user-sub">{roleData.userTitle}</div>
          </div>
        </div>
        <div className="role-mockup-chips">
          {roleData.chips && roleData.chips.slice(0, 2).map((chip, i) => (
            <span key={i} className="mockup-kpi-pill">{chip}</span>
          ))}
        </div>
      </div>

      {/* Interactive Mockup Body Based on Role */}
      <div className="role-mockup-body">
        {roleKey === 'principal' && (
          <div className="mockup-view-principal">
            <div className="mockup-metrics-grid">
              <div className="mockup-metric-card mockup-metric-card--green">
                <span className="metric-lbl">Daily Roll Call</span>
                <strong className="metric-val">96.4%</strong>
                <small className="metric-sub">1,203 / 1,248 Present</small>
              </div>
              <div className="mockup-metric-card mockup-metric-card--blue">
                <span className="metric-lbl">Counter &amp; Online Fees</span>
                <strong className="metric-val">₹1,42,500</strong>
                <small className="metric-sub">Today's Collections</small>
              </div>
              <div className="mockup-metric-card mockup-metric-card--purple">
                <span className="metric-lbl">APAAR Readiness</span>
                <strong className="metric-val">92.8%</strong>
                <small className="metric-sub">1,158 Verified</small>
              </div>
            </div>

            <div className="mockup-list-card">
              <div className="mockup-list-header">
                <strong>Class Attendance Snapshot</strong>
                <span className="badge badge--slate">Period 1</span>
              </div>
              <div className="mockup-rows">
                <div className="mockup-row">
                  <span>Class X-A (CBSE)</span>
                  <span className="row-tag row-tag--success">44 / 45 (97.7%)</span>
                </div>
                <div className="mockup-row">
                  <span>Class IX-B (CBSE)</span>
                  <span className="row-tag row-tag--success">41 / 42 (97.6%)</span>
                </div>
                <div className="mockup-row">
                  <span>Class VIII-A (State)</span>
                  <span className="row-tag row-tag--info">38 / 40 (95.0%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {roleKey === 'teacher' && (
          <div className="mockup-view-teacher">
            <div className="mockup-class-banner">
              <div>
                <strong>Class IX-A • Roll Call</strong>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Period 2 • Mathematics • Room 204</div>
              </div>
              <span className="badge badge--emerald">30-Sec Quick Roll</span>
            </div>

            <div className="mockup-attendance-list">
              <div className="att-student-row">
                <div className="att-student-info">
                  <span className="roll-no">01</span>
                  <span>Aarav Sharma</span>
                </div>
                <span className="status-pill status-pill--present">Present</span>
              </div>

              <div className="att-student-row">
                <div className="att-student-info">
                  <span className="roll-no">02</span>
                  <span>Ananya Roy</span>
                </div>
                <span className="status-pill status-pill--present">Present</span>
              </div>

              <div className="att-student-row att-student-row--absent">
                <div className="att-student-info">
                  <span className="roll-no">03</span>
                  <span>Kabir Sen</span>
                </div>
                <span className="status-pill status-pill--absent">
                  Absent • WhatsApp Alert Auto-Sent
                </span>
              </div>

              <div className="att-student-row">
                <div className="att-student-info">
                  <span className="roll-no">04</span>
                  <span>Riya Ghosh</span>
                </div>
                <span className="status-pill status-pill--present">Present</span>
              </div>
            </div>

            <div className="mockup-footer-action">
              <button className="btn btn--primary btn--sm" style={{ width: '100%', borderRadius: '6px' }}>
                <CheckCircle2 size={16} />
                <span>Submit Class Roll (41 Present, 1 Absent)</span>
              </button>
            </div>
          </div>
        )}

        {roleKey === 'accountant' && (
          <div className="mockup-view-accountant">
            <div className="mockup-pos-header">
              <div>
                <strong>Fee Counter #01 Terminal</strong>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Receipt #PRG-2026-0842</div>
              </div>
              <span className="badge badge--blue">Instant POS</span>
            </div>

            <div className="mockup-student-selected">
              <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>Aarav Sharma • Class IX-A</div>
              <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Admission ID: 2024-892 • Bus Route: 04</div>
            </div>

            <div className="mockup-fee-heads">
              <div className="fee-head-row">
                <span>Tuition Fee (Quarter 3)</span>
                <strong>₹4,500</strong>
              </div>
              <div className="fee-head-row">
                <span>Laboratory &amp; Computer Head</span>
                <strong>₹1,200</strong>
              </div>
              <div className="fee-head-row">
                <span>School Transport (Route 04)</span>
                <strong>₹1,800</strong>
              </div>
              <div className="fee-head-total">
                <span>Total Amount Payable</span>
                <strong>₹7,500</strong>
              </div>
            </div>

            <div className="mockup-pos-actions">
              <button className="btn btn--secondary btn--sm" style={{ flex: 1, borderRadius: '6px' }}>
                <QrCode size={15} />
                <span>UPI Dynamic QR</span>
              </button>
              <button className="btn btn--primary btn--sm" style={{ flex: 1, borderRadius: '6px' }}>
                <Printer size={15} />
                <span>Print Thermal Slip (3s)</span>
              </button>
            </div>
          </div>
        )}

        {roleKey === 'admissions' && (
          <div className="mockup-view-admissions">
            <div className="mockup-pipeline-board">
              <div className="pipe-col">
                <div className="pipe-col-header">
                  <span>Enquiries</span>
                  <span className="count-tag">38</span>
                </div>
                <div className="pipe-card">Pooja Sengupta (XI-Sci)</div>
                <div className="pipe-card">Dev Patel (VI-A)</div>
              </div>

              <div className="pipe-col">
                <div className="pipe-col-header">
                  <span>Campus Visit</span>
                  <span className="count-tag">14</span>
                </div>
                <div className="pipe-card pipe-card--active">Rahul Bose (IX)</div>
              </div>

              <div className="pipe-col">
                <div className="pipe-col-header">
                  <span>Enrolled</span>
                  <span className="count-tag count-tag--green">22</span>
                </div>
                <div className="pipe-card pipe-card--done">Aarav Sharma (IX)</div>
              </div>
            </div>

            <div className="mockup-footer-action">
              <div style={{ fontSize: '0.75rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={14} color="#059669" />
                <span>1-Click Bulk Student CSV Import with Validation Checks</span>
              </div>
            </div>
          </div>
        )}

        {roleKey === 'hr' && (
          <div className="mockup-view-hr">
            <div className="mockup-metrics-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="mockup-metric-card mockup-metric-card--blue">
                <span className="metric-lbl">Teaching Staff Active</span>
                <strong className="metric-val">68 Faculty</strong>
                <small className="metric-sub">65 Marked in Biometric Sync</small>
              </div>
              <div className="mockup-metric-card mockup-metric-card--green">
                <span className="metric-lbl">Monthly Payroll Batch</span>
                <strong className="metric-val">EPF / PTax Ready</strong>
                <small className="metric-sub">Standard NEFT Batch Excel</small>
              </div>
            </div>

            <div className="mockup-list-card">
              <div className="mockup-list-header">
                <strong>Pending Staff Leave Requests</strong>
                <span className="badge badge--amber">1 Pending</span>
              </div>
              <div className="mockup-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>S. Das • English Dept</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Casual Leave: 2 Days (Nov 6 - Nov 7)</div>
                </div>
                <button className="btn btn--secondary btn--sm" style={{ padding: '4px 10px', fontSize: '0.75rem', borderRadius: '4px' }}>
                  Approve
                </button>
              </div>
            </div>
          </div>
        )}

        {roleKey === 'student' && (
          <div className="mockup-view-student">
            <div className="mockup-student-banner">
              <div>
                <strong>Ananya Roy • Class IX-A</strong>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Student Portal &amp; Mobile App View</div>
              </div>
              <span className="badge badge--purple">Student View</span>
            </div>

            <div className="mockup-rows">
              <div className="mockup-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={16} color="#145EFF" />
                  <span>Today's Periods</span>
                </div>
                <strong style={{ fontSize: '0.775rem' }}>Math, Physics, English, Bio</strong>
              </div>
              <div className="mockup-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={16} color="#059669" />
                  <span>Term 1 Report Card</span>
                </div>
                <span className="row-tag row-tag--success">Published • Grade A+</span>
              </div>
              <div className="mockup-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Bell size={16} color="#742DDA" />
                  <span>Annual Sports Notice</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Circular #41 Attached</span>
              </div>
            </div>
          </div>
        )}

        {roleKey === 'administrator' && (
          <div className="mockup-view-admin">
            <div className="mockup-metrics-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className="mockup-metric-card mockup-metric-card--blue">
                <span className="metric-lbl">Academic Session</span>
                <strong className="metric-val">2026-27</strong>
                <small className="metric-sub">CBSE &amp; State Boards</small>
              </div>
              <div className="mockup-metric-card mockup-metric-card--green">
                <span className="metric-lbl">Active Campuses</span>
                <strong className="metric-val">2 Branches</strong>
                <small className="metric-sub">Centralized Governance</small>
              </div>
              <div className="mockup-metric-card mockup-metric-card--purple">
                <span className="metric-lbl">Pending Tasks</span>
                <strong className="metric-val">4 Actions</strong>
                <small className="metric-sub">Approvals &amp; Transfers</small>
              </div>
            </div>

            <div className="mockup-list-card">
              <div className="mockup-list-header">
                <strong>System Governance &amp; RBAC Scope</strong>
                <span className="badge badge--slate">Zero Shared Logins</span>
              </div>
              <div style={{ padding: '10px 12px', fontSize: '0.775rem', color: '#475569', lineHeight: '1.45' }}>
                All 9 administrative modules enforce individual login accounts with permanent audit logging.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Permission Scope Bar */}
      <div className="role-mockup-permission-bar">
        <ShieldCheck size={16} color="#059669" style={{ flexShrink: 0 }} />
        <span>
          <strong>Role Guardrail:</strong> Restricted to assigned classes, sections, and modules. Confidential records remain strictly isolated.
        </span>
      </div>
    </div>
  );
}
