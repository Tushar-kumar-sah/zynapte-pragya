solutions_css = '''
/* ==========================================================================
   SOLUTIONS BY ROLE REDESIGN (PRAGYA PALETTE & CRISP 6-8PX EDGES)
   ========================================================================== */

/* 1. HERO SECTION */
.solutions-gov-hero {
  padding: 56px 0 64px;
  background: radial-gradient(circle at 80% 20%, rgba(20, 94, 255, 0.04) 0%, transparent 60%),
              radial-gradient(circle at 10% 80%, rgba(116, 45, 218, 0.03) 0%, transparent 50%),
              #FFFFFF;
  border-bottom: 1px solid var(--color-slate-200);
  position: relative;
  overflow: hidden;
}

.solutions-gov-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 48px;
}

.solutions-gov-hero-text {
  max-width: 580px;
}

.solutions-gov-eyebrow {
  margin-bottom: 12px;
  color: #145EFF;
  font-weight: 800;
  letter-spacing: 0.05em;
  font-size: 0.8125rem;
  text-transform: uppercase;
}

.solutions-gov-title {
  font-size: 2.85rem;
  font-weight: 850;
  color: var(--color-ink);
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin-bottom: 16px;
}

.solutions-gov-desc {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 24px;
}

.solutions-hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.solutions-hero-chips {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.hero-kpi-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  font-size: 0.775rem;
  font-weight: 700;
  color: #334155;
}

/* HERO RIGHT: ROLE COMMAND CENTER */
.solutions-gov-hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.role-hero-command-center {
  position: relative;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
}

.role-command-glow {
  position: absolute;
  inset: -15px;
  background: radial-gradient(circle at 50% 50%, rgba(20, 94, 255, 0.08) 0%, rgba(116, 45, 218, 0.05) 50%, transparent 70%);
  filter: blur(25px);
  z-index: 1;
}

.role-command-main-card {
  position: relative;
  z-index: 2;
  background: #FFFFFF;
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  box-shadow: 0 20px 40px -8px rgba(15, 23, 42, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.command-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  border-bottom: 1px solid #E2E8F0;
  background: #F8FAFC;
}

.school-brand-inline {
  display: flex;
  align-items: center;
  gap: 10px;
}

.school-icon-badge {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: #145EFF;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 850;
  font-size: 1rem;
}

.school-brand-inline strong {
  display: block;
  font-size: 0.85rem;
  font-weight: 800;
  color: #0F172A;
  line-height: 1.2;
}

.school-brand-inline small {
  display: block;
  font-size: 0.7rem;
  color: #64748B;
}

.role-active-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  color: #145EFF;
  font-size: 0.725rem;
  font-weight: 750;
  padding: 3px 8px;
  border-radius: 4px;
}

.pulsing-green-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #059669;
  box-shadow: 0 0 0 2px rgba(5, 150, 105, 0.25);
}

.command-metrics-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 16px 18px;
  border-bottom: 1px solid #E2E8F0;
}

.command-metric-box {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
}

.command-metric-box--green { border-left: 3px solid #059669; }
.command-metric-box--blue { border-left: 3px solid #145EFF; }
.command-metric-box--purple { border-left: 3px solid #742DDA; }

.metric-title {
  font-size: 0.675rem;
  font-weight: 700;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.metric-number {
  font-size: 1.15rem;
  font-weight: 850;
  margin: 3px 0 2px;
  color: #0F172A;
}

.metric-note {
  font-size: 0.65rem;
  color: #64748B;
}

.command-portals-list {
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.portal-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  transition: all 0.2s ease;
}

.portal-item:hover {
  background: #FFFFFF;
  border-color: #CBD5E1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.portal-item-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.portal-item-icon--purple { background: #F5F3FF; }
.portal-item-icon--blue { background: #EFF6FF; }
.portal-item-icon--green { background: #ECFDF5; }

.portal-item-text {
  flex: 1;
  min-width: 0;
}

.portal-item-text strong {
  display: block;
  font-size: 0.8rem;
  font-weight: 750;
  color: #0F172A;
  line-height: 1.2;
}

.portal-item-text small {
  display: block;
  font-size: 0.675rem;
  color: #64748B;
}

.command-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18px;
  background: #F8FAFC;
  border-top: 1px solid #E2E8F0;
  font-size: 0.725rem;
  color: #64748B;
}

.footer-guardrail {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 650;
  color: #334155;
}

.floating-role-tag {
  position: absolute;
  z-index: 5;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 6px 12px;
  box-shadow: 0 10px 20px -4px rgba(15, 23, 42, 0.12);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 750;
  color: #0F172A;
}

.floating-role-tag--top-left { top: -14px; left: -14px; }
.floating-role-tag--top-right { top: -14px; right: -12px; }
.floating-role-tag--bottom-right { bottom: -12px; right: -14px; }


/* 2. INTERACTIVE ROLE WORKBENCH */
.role-header-pill {
  display: inline-block;
  margin-bottom: 8px;
}

.role-header-pill span {
  display: inline-block;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  color: #145EFF;
  font-size: 0.75rem;
  font-weight: 750;
  padding: 3px 10px;
  border-radius: 4px;
}

.role-tab-icon {
  margin-right: 6px;
  font-size: 0.95rem;
}

.role-features-vertical {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 22px;
}

.role-feat-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.role-feat-icon-box {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ECFDF5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.role-feat-item strong {
  display: block;
  font-size: 0.9rem;
  font-weight: 800;
  color: #0F172A;
  line-height: 1.25;
}

.role-feat-item p {
  font-size: 0.8125rem;
  color: #64748B;
  margin: 2px 0 0;
  line-height: 1.4;
}

.role-chips-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.role-metric-badge {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 750;
  color: #334155;
}


/* ROLE PREVIEW MOCKUP WINDOW */
.role-mockup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.role-mockup-window {
  background: #FFFFFF;
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  box-shadow: 0 16px 36px -8px rgba(15, 23, 42, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  width: 100%;
  max-width: 440px;
}

.role-mockup-titlebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #F8FAFC;
  border-bottom: 1px solid #E2E8F0;
}

.role-mockup-traffic-lights {
  display: flex;
  align-items: center;
  gap: 5px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.dot--red { background: #EF4444; }
.dot--yellow { background: #F59E0B; }
.dot--green { background: #10B981; }

.role-mockup-window-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.725rem;
  font-weight: 700;
  color: #475569;
}

.role-window-badge {
  color: #145EFF;
  font-weight: 800;
}

.role-mockup-live-status {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.675rem;
  font-weight: 700;
  color: #059669;
}

.live-pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #059669;
}

.role-mockup-user-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border-bottom: 1px solid #E2E8F0;
  background: #FFFFFF;
}

.role-mockup-avatar-box {
  display: flex;
  align-items: center;
  gap: 10px;
}

.role-mockup-avatar {
  width: 34px;
  height: 34px;
  border-radius: 6px;
  background: #145EFF;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 850;
  font-size: 0.95rem;
}

.role-mockup-user-name {
  font-size: 0.825rem;
  font-weight: 850;
  color: #0F172A;
  line-height: 1.2;
}

.role-mockup-user-sub {
  font-size: 0.7rem;
  color: #64748B;
}

.role-mockup-chips {
  display: flex;
  gap: 6px;
}

.mockup-kpi-pill {
  font-size: 0.675rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  background: #F1F5F9;
  color: #334155;
  border: 1px solid #E2E8F0;
}

.role-mockup-body {
  padding: 14px;
  background: #FAF8F5;
}

.mockup-metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 12px;
}

.mockup-metric-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
}

.mockup-metric-card--green { border-top: 3px solid #059669; }
.mockup-metric-card--blue { border-top: 3px solid #145EFF; }
.mockup-metric-card--purple { border-top: 3px solid #742DDA; }

.metric-lbl {
  font-size: 0.625rem;
  font-weight: 700;
  color: #64748B;
  text-transform: uppercase;
}

.metric-val {
  font-size: 1rem;
  font-weight: 850;
  color: #0F172A;
  margin: 2px 0 1px;
}

.metric-sub {
  font-size: 0.625rem;
  color: #64748B;
}

.mockup-list-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  overflow: hidden;
}

.mockup-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #F8FAFC;
  border-bottom: 1px solid #E2E8F0;
  font-size: 0.75rem;
}

.mockup-rows {
  display: flex;
  flex-direction: column;
}

.mockup-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid #F1F5F9;
  font-size: 0.75rem;
}

.mockup-row:last-child {
  border-bottom: none;
}

.row-tag {
  font-size: 0.675rem;
  font-weight: 750;
  padding: 2px 6px;
  border-radius: 4px;
}

.row-tag--success { background: #ECFDF5; color: #059669; }
.row-tag--info { background: #EFF6FF; color: #145EFF; }

/* Teacher view styles */
.mockup-class-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  margin-bottom: 10px;
}

.mockup-attendance-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
}

.att-student-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  font-size: 0.775rem;
}

.att-student-row--absent {
  border-color: #FCA5A5;
  background: #FEF2F2;
}

.att-student-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.roll-no {
  font-size: 0.7rem;
  font-weight: 800;
  color: #64748B;
  background: #F1F5F9;
  padding: 1px 5px;
  border-radius: 3px;
}

.status-pill {
  font-size: 0.675rem;
  font-weight: 750;
  padding: 2px 8px;
  border-radius: 4px;
}

.status-pill--present { background: #ECFDF5; color: #059669; }
.status-pill--absent { background: #FEE2E2; color: #DC2626; }

/* Accountant view styles */
.mockup-pos-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  margin-bottom: 8px;
}

.mockup-student-selected {
  padding: 8px 12px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  margin-bottom: 8px;
}

.mockup-fee-heads {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 6px 12px;
  margin-bottom: 10px;
}

.fee-head-row {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-size: 0.75rem;
  border-bottom: 1px dashed #F1F5F9;
}

.fee-head-total {
  display: flex;
  justify-content: space-between;
  padding: 8px 0 4px;
  font-size: 0.85rem;
  font-weight: 850;
  color: #0F172A;
  border-top: 1px solid #E2E8F0;
}

.mockup-pos-actions {
  display: flex;
  gap: 8px;
}

/* Admissions Kanban */
.mockup-pipeline-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-bottom: 10px;
}

.pipe-col {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 6px;
}

.pipe-col-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.675rem;
  font-weight: 750;
  color: #475569;
  margin-bottom: 6px;
  padding-bottom: 4px;
  border-bottom: 1px solid #F1F5F9;
}

.count-tag {
  background: #F1F5F9;
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 0.625rem;
}

.count-tag--green { background: #ECFDF5; color: #059669; }

.pipe-card {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  padding: 5px 6px;
  font-size: 0.675rem;
  margin-bottom: 4px;
  font-weight: 650;
  color: #0F172A;
}

.pipe-card--active { border-left: 2.5px solid #145EFF; }
.pipe-card--done { border-left: 2.5px solid #059669; }

/* Student banner */
.mockup-student-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  margin-bottom: 10px;
}

/* Permission guardrail bar */
.role-mockup-permission-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: #F8FAFC;
  border-top: 1px solid #E2E8F0;
  font-size: 0.725rem;
  color: #475569;
  line-height: 1.35;
}

.role-mockup-permission-bar strong {
  color: #0F172A;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .solutions-gov-hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
'''

with open('src/index.css', 'a', encoding='utf-8') as f:
    f.write('\n\n' + solutions_css)

print('Appended solutions CSS successfully')
