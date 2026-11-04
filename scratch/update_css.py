with open("src/index.css", "r", encoding="utf-8") as f:
    css = f.read()

# 1. Replace ribbon CSS
ribbon_old = """/* Interconnected OS Ribbon */
.core-modules-integration-ribbon {
  background: linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%);
  border: 1px solid var(--color-slate-200);
  border-radius: 8px;
  padding: 14px 24px;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 0.875rem;
  color: var(--color-slate-700);
  box-shadow: 0 2px 6px rgba(23, 37, 82, 0.03);
}

.integration-ribbon-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ribbon-glow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.integration-ribbon-sep {
  width: 1px;
  height: 20px;
  background: var(--color-slate-300);
}

@media (max-width: 768px) {
  .integration-ribbon-sep {
    display: none;
  }
  .core-modules-integration-ribbon {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}"""

ribbon_new = """/* Interconnected OS Ribbon - STRICTLY SINGLE HORIZONTAL LINE */
.core-modules-integration-ribbon {
  background: linear-gradient(90deg, #F8FAFC 0%, #F1F5F9 50%, #F8FAFC 100%);
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 12px 28px;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap; /* STRICTLY 1 SINGLE LINE */
  gap: 20px;
  font-size: 0.8125rem;
  color: #334155;
  box-shadow: 0 2px 8px rgba(23, 37, 82, 0.03);
  white-space: nowrap;
}

.integration-ribbon-item {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  white-space: nowrap;
  flex-shrink: 0;
  line-height: 1.2;
}

.integration-ribbon-item strong {
  color: #0F172A;
  font-weight: 750;
}

.ribbon-glow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.integration-ribbon-sep {
  width: 1px;
  height: 18px;
  background: #CBD5E1;
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .core-modules-integration-ribbon {
    overflow-x: auto;
    justify-content: flex-start;
    padding: 12px 20px;
    -webkit-overflow-scrolling: touch;
  }
}"""

# 2. Find and replace old role showcase styles
role_showcase_start = "/* ==========================================================================\n   ROLE SHOWCASE BOX (\"One system. Every role.\" - Page 2)\n   ========================================================================== */"
payslip_start = "/* ==========================================================================\n   PAYSLIP CATEGORY BAR (PAGE 4)\n   ========================================================================== */"

if ribbon_old in css:
    css = css.replace(ribbon_old, ribbon_new, 1)
    print("Replaced ribbon_old in CSS!")
else:
    print("ribbon_old not matched directly! Checking whitespace...")

if role_showcase_start in css and payslip_start in css:
    idx1 = css.index(role_showcase_start)
    idx2 = css.index(payslip_start)
    old_role_section = css[idx1:idx2]
    
    new_role_section = """/* ==========================================================================
   ROLE SHOWCASE BOX ("One system. Every role." - Page 2)
   EYE-CATCHING, VIBRANT, PROFESSIONAL MULTI-DESK ENGINE
   ========================================================================== */
.role-showcase-box {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 24px 28px;
  margin-top: 24px;
  box-shadow: 0 10px 30px -5px rgba(23, 37, 82, 0.06), 0 0 0 1px rgba(29, 104, 216, 0.04);
  position: relative;
  overflow: hidden;
}

.role-showcase-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #1D68D8 0%, #6F3B9C 35%, #059669 70%, #EA580C 100%);
}

.role-showcase-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #F1F5F9;
}

.role-showcase-top-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.role-showcase-kicker {
  font-size: 0.6875rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.role-showcase-tagline {
  font-size: 1.15rem;
  font-weight: 850;
  color: var(--color-ink);
  letter-spacing: -0.01em;
}

.role-pills-row {
  display: inline-flex;
  background: #F1F5F9;
  padding: 4px;
  border-radius: 6px;
  gap: 4px;
  flex-wrap: wrap;
}

.role-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: transparent;
  padding: 7px 14px;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 750;
  letter-spacing: 0.03em;
  color: #64748B;
  cursor: pointer;
  transition: all 0.2s ease;
}

.role-pill-btn:hover {
  color: #0F172A;
  background: rgba(255, 255, 255, 0.6);
}

.role-pill-btn.active {
  color: #FFFFFF !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
  font-weight: 850;
}

.role-pill-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* 2-Column Split: Capabilities + Photography */
.role-showcase-split {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 32px;
  align-items: center;
}

/* Left Column */
.role-showcase-left {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.role-desk-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.role-meta-badge-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.role-desk-badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 9px;
  border-radius: 4px;
  font-size: 0.6875rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border: 1px solid transparent;
}

.role-live-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.725rem;
  font-weight: 700;
  color: #475569;
}

.role-live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  animation: pulse-glow 2s infinite ease-in-out;
}

.role-desk-title {
  font-size: 1.35rem;
  font-weight: 850;
  color: var(--color-ink);
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.25;
}

.role-desk-outcome {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.45;
  margin: 0;
}

/* 3 Pro Capability Cards */
.role-capabilities-grid-pro {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.role-capability-card-pro {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 12px 14px;
  transition: all 0.2s ease;
}

.role-capability-card-pro:hover {
  background: #FFFFFF;
  border-color: #CBD5E1;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
  transform: translateX(3px);
}

.role-cap-icon-tile {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.role-cap-content {
  flex: 1;
  min-width: 0;
}

.role-cap-header-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 2px;
}

.role-cap-title {
  font-size: 0.875rem;
  font-weight: 750;
  color: #0F172A;
}

.role-cap-chip {
  font-size: 0.6875rem;
  font-weight: 750;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
}

.role-cap-description {
  font-size: 0.78125rem;
  color: #64748B;
  line-height: 1.4;
  margin: 0;
}

/* Role Points Checklist */
.role-points-checklist {
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #F8FAFC;
  border-radius: 6px;
  padding: 10px 14px;
  border-left: 3px solid #1D68D8;
}

.role-point-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.8rem;
  color: #334155;
  line-height: 1.4;
}

/* Role Footer Action */
.role-footer-action {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.role-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #FFFFFF !important;
  font-weight: 750;
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 0 4px 14px rgba(29, 104, 216, 0.25);
  transition: all 0.2s ease;
}

.role-cta-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(29, 104, 216, 0.35);
}

.role-privacy-note {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: #059669;
  font-weight: 650;
}

/* Right Column: Photography Card */
.role-showcase-right {
  display: flex;
  justify-content: center;
}

.role-media-card {
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 380px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 12px 28px -6px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8);
  background: #0F172A;
}

.role-media-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.role-media-card:hover .role-media-photo {
  transform: scale(1.03);
}

.role-media-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.05) 40%, rgba(15, 23, 42, 0.85) 100%);
}

.role-floating-live-pill {
  position: absolute;
  top: 14px;
  left: 14px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.live-status-pulse {
  width: 7px;
  height: 7px;
  background: #10B981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10B981;
  animation: pulse-glow 2s infinite ease-in-out;
}

.role-persona-glass-card {
  position: absolute;
  bottom: 14px;
  left: 14px;
  right: 14px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 6px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.role-persona-avatar {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 850;
  font-size: 0.95rem;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.role-persona-details {
  flex: 1;
  min-width: 0;
}

.role-persona-name {
  font-size: 0.8125rem;
  font-weight: 800;
  color: #0F172A;
  line-height: 1.25;
}

.role-persona-title {
  font-size: 0.7rem;
  color: #64748B;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.role-persona-stat-badge {
  font-size: 0.6875rem;
  font-weight: 750;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid;
  white-space: nowrap;
  flex-shrink: 0;
}

@media (max-width: 950px) {
  .role-showcase-split {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .role-media-card {
    max-width: 100%;
    height: 280px;
  }
  .role-showcase-top {
    flex-direction: column;
    align-items: flex-start;
  }
  .role-pills-row {
    width: 100%;
    overflow-x: auto;
  }
}

"""
    css = css[:idx1] + new_role_section + css[idx2:]
    print("Replaced role showcase section in CSS!")
else:
    print("Could not find start/end of role showcase section in CSS!")

with open("src/index.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Updated index.css successfully!")
