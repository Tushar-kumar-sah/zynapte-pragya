import React from 'react';
import { 
  ShieldCheck, CheckCircle2, Users, Building2, 
  CreditCard, Award, ArrowUpRight, BarChart3, Lock
} from 'lucide-react';

export default function RoleHeroCommandCenter() {
  return (
    <div className="role-hero-command-center">
      {/* Ambient background glow */}
      <div className="role-command-glow" aria-hidden="true" />

      {/* Floating Badge: Multi-Campus */}
      <div className="floating-role-tag floating-role-tag--top-left">
        <Building2 size={15} color="#145EFF" />
        <span>Multi-Branch Ready</span>
      </div>

      {/* Floating Badge: RBAC Security */}
      <div className="floating-role-tag floating-role-tag--top-right">
        <ShieldCheck size={15} color="#059669" />
        <span>Granular RBAC Security</span>
      </div>

      {/* Main Command Console Card */}
      <div className="role-command-main-card">
        {/* Terminal Header */}
        <div className="command-card-header">
          <div className="school-brand-inline">
            <div className="school-icon-badge">P</div>
            <div>
              <strong>Pragya Model Academy</strong>
              <small>Session 2026-27 • CBSE &amp; State</small>
            </div>
          </div>
          <div className="role-active-pill">
            <span className="pulsing-green-dot" />
            <span>Executive Desk</span>
          </div>
        </div>

        {/* Live Operational Metrics */}
        <div className="command-metrics-row">
          <div className="command-metric-box command-metric-box--green">
            <span className="metric-title">Daily Attendance</span>
            <strong className="metric-number">96.4%</strong>
            <small className="metric-note">1,203 / 1,248 Present</small>
          </div>
          <div className="command-metric-box command-metric-box--blue">
            <span className="metric-title">Fee Collections</span>
            <strong className="metric-number">₹1,42,500</strong>
            <small className="metric-note">Counter POS &amp; UPI</small>
          </div>
          <div className="command-metric-box command-metric-box--purple">
            <span className="metric-title">APAAR Readiness</span>
            <strong className="metric-number">92.8%</strong>
            <small className="metric-note">1,158 Verified</small>
          </div>
        </div>

        {/* Quick Department Portals */}
        <div className="command-portals-list">
          <div className="portal-item">
            <div className="portal-item-icon portal-item-icon--purple">👑</div>
            <div className="portal-item-text">
              <strong>Principals &amp; Trustees</strong>
              <small>Real-time institutional oversight</small>
            </div>
            <span className="badge badge--slate">Live KPI</span>
          </div>

          <div className="portal-item">
            <div className="portal-item-icon portal-item-icon--blue">👩‍🏫</div>
            <div className="portal-item-text">
              <strong>Class &amp; Subject Teachers</strong>
              <small>30-sec attendance &amp; gradebook</small>
            </div>
            <span className="badge badge--slate">Mobile App</span>
          </div>

          <div className="portal-item">
            <div className="portal-item-icon portal-item-icon--green">💰</div>
            <div className="portal-item-text">
              <strong>Accounts &amp; Fee Counter</strong>
              <small>3-sec thermal slips &amp; UPI QR</small>
            </div>
            <span className="badge badge--slate">Counter POS</span>
          </div>
        </div>

        {/* Micro-footer */}
        <div className="command-card-footer">
          <div className="footer-guardrail">
            <Lock size={12} color="#059669" />
            <span>Zero Shared Logins • Full Audit Log</span>
          </div>
          <span className="footer-latency">Sync: 12ms</span>
        </div>
      </div>

      {/* Floating Badge: Fast Actions */}
      <div className="floating-role-tag floating-role-tag--bottom-right">
        <CheckCircle2 size={15} color="#742DDA" />
        <span>30-Sec Attendance • 3-Sec Slips</span>
      </div>
    </div>
  );
}
