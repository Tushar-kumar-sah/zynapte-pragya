import re

css_path = r'c:\Users\sah05\OneDrive\Desktop\pragya\src\index.css'

with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

pattern = re.compile(
    r'(/\* 5\. BROCHURE PAGE 4: PAYROLL SHOWCASE & PRAGYA ADVANTAGE \*/[\s\S]*?)(/\* 6\. BOTTOM CTA CARD & PARTNER BOX \(PAGE 4\) \*/)',
    re.MULTILINE
)

new_section_05_css = '''/* 5. BROCHURE PAGE 4: PAYROLL SHOWCASE & PRAGYA ADVANTAGE */
.section-kicker-badge--blue {
  background: rgba(29, 104, 216, 0.09);
  color: #1D68D8;
  border: 1px solid rgba(29, 104, 216, 0.25);
}

.payroll-showcase-container {
  position: relative;
  background: #FFFFFF;
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 8px;
  padding: 24px 26px;
  box-shadow: 0 10px 30px -5px rgba(23, 37, 82, 0.07), 0 2px 6px rgba(0, 0, 0, 0.03);
  margin-bottom: 30px;
  overflow: hidden;
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease;
}

.payroll-showcase-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(90deg, #1D68D8 0%, #7C3AED 50%, #EF4444 100%);
}

.payslip-category-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  border-bottom: 1px solid #F1F5F9;
  padding-bottom: 16px;
  margin-bottom: 22px;
}

.payslip-category-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.payslip-category-label {
  font-size: 0.8rem;
  font-weight: 850;
  color: #0F172A;
  letter-spacing: -0.01em;
}

.payslip-pills-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.payslip-pill-btn {
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.725rem;
  font-weight: 800;
  border: 1.5px solid transparent;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  background: #F8FAFC;
  color: #64748B;
  border-color: #E2E8F0;
}

.payslip-pill-btn:hover {
  transform: translateY(-1px);
  background: #FFFFFF;
  border-color: #CBD5E1;
  color: #0F172A;
}

.payslip-pill-btn--teaching.active {
  background: #6F3B9C;
  color: #FFFFFF;
  border-color: #6F3B9C;
  box-shadow: 0 3px 10px rgba(111, 59, 156, 0.25);
}

.payslip-pill-btn--nonteaching.active {
  background: #1D68D8;
  color: #FFFFFF;
  border-color: #1D68D8;
  box-shadow: 0 3px 10px rgba(29, 104, 216, 0.25);
}

.payslip-pill-btn--admin.active {
  background: #059669;
  color: #FFFFFF;
  border-color: #059669;
  box-shadow: 0 3px 10px rgba(5, 150, 105, 0.25);
}

.payslip-pill-btn--support.active {
  background: #EA580C;
  color: #FFFFFF;
  border-color: #EA580C;
  box-shadow: 0 3px 10px rgba(234, 88, 12, 0.25);
}

.page3-live-pill--purple {
  background: rgba(124, 58, 237, 0.09);
  color: #6D28D9;
  border: 1px solid rgba(124, 58, 237, 0.25);
}

.live-dot-pulse--purple {
  background: #7C3AED;
  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.28);
}

.payroll-split-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 28px;
  align-items: center;
}

@media (max-width: 900px) {
  .payroll-split-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }
}

.faculty-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(29, 104, 216, 0.09);
  color: #1D68D8;
  border: 1px solid rgba(29, 104, 216, 0.25);
  padding: 3px 10px;
  border-radius: var(--radius-full);
  font-size: 0.6875rem;
  font-weight: 850;
  margin-bottom: 8px;
  letter-spacing: 0.04em;
}

.payroll-faculty-info h3 {
  font-size: 1.35rem;
  font-weight: 850;
  color: #0F172A;
  margin-bottom: 6px;
  line-height: 1.25;
  letter-spacing: -0.015em;
}

.payroll-subheading {
  font-size: 0.825rem;
  color: #64748B;
  line-height: 1.5;
  margin-bottom: 18px;
}

.payroll-visual-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.payroll-feat-card {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.2s ease;
}

.payroll-feat-card:hover {
  background: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  border-color: #CBD5E1;
}

.payroll-feat-icon {
  width: 38px;
  height: 38px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.payroll-feat-icon--emerald { background: rgba(5, 150, 105, 0.1); color: #059669; }
.payroll-feat-icon--blue { background: rgba(29, 104, 216, 0.1); color: #1D68D8; }
.payroll-feat-icon--purple { background: rgba(124, 58, 237, 0.1); color: #7C3AED; }
.payroll-feat-icon--coral { background: rgba(249, 115, 22, 0.1); color: #EA580C; }

.payroll-feat-card strong {
  display: block;
  font-size: 0.8rem;
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 1px;
}

.payroll-feat-card small {
  display: block;
  font-size: 0.675rem;
  color: #64748B;
  font-weight: 500;
}

.page3-cta-btn--payroll {
  background: linear-gradient(135deg, #1D68D8 0%, #7C3AED 100%) !important;
  color: #FFFFFF !important;
  border: none !important;
}

.page3-cta-btn--payroll:hover {
  background: linear-gradient(135deg, #1752B3 0%, #6D28D9 100%) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(29, 104, 216, 0.38) !important;
}

.payroll-visual-frame {
  height: 320px;
  margin-bottom: 0;
}

.payroll-bottom-chips {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid #F1F5F9;
}

/* 3 Pragya Advantage Cards (Elevated) */
.the-pragya-advantage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

@media (max-width: 900px) {
  .the-pragya-advantage-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}

.advantage-feature-card {
  position: relative;
  background: #FFFFFF;
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 8px;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 24px -4px rgba(23, 37, 82, 0.06), 0 2px 6px rgba(0, 0, 0, 0.02);
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, border-color 0.22s ease;
  overflow: hidden;
}

.advantage-feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 8px 8px 0 0;
}

.advantage-feature-card--theme::before {
  background: linear-gradient(90deg, #1D68D8 0%, #3B82F6 100%);
}

.advantage-feature-card--mobile::before {
  background: linear-gradient(90deg, #059669 0%, #10B981 100%);
}

.advantage-feature-card--aws::before {
  background: linear-gradient(90deg, #EA580C 0%, #F59E0B 100%);
}

.advantage-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px -8px rgba(23, 37, 82, 0.12), 0 4px 10px rgba(0, 0, 0, 0.04);
  border-color: rgba(203, 213, 225, 0.95);
}

.adv-icon-row {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.adv-icon-circle {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.adv-icon-circle--theme {
  background: rgba(29, 104, 216, 0.09);
  color: #1D68D8;
  border: 1px solid rgba(29, 104, 216, 0.2);
}

.adv-icon-circle--mobile {
  background: rgba(5, 150, 105, 0.09);
  color: #059669;
  border: 1px solid rgba(5, 150, 105, 0.2);
}

.adv-icon-circle--aws {
  background: rgba(249, 115, 22, 0.09);
  color: #EA580C;
  border: 1px solid rgba(249, 115, 22, 0.2);
}

.adv-card-kicker {
  font-size: 0.65rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 2px;
}

.advantage-feature-card h4 {
  font-size: 1.15rem;
  font-weight: 850;
  color: #0F172A;
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}

.advantage-feature-card p {
  font-size: 0.78rem;
  color: #64748B;
  line-height: 1.45;
  margin-bottom: 14px;
  flex: 1;
}

.adv-preview-theme {
  display: flex;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #E2E8F0;
  font-size: 0.72rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
}

.theme-half {
  flex: 1;
  padding: 8px 10px;
}

.theme-half--light {
  background: #F8FAFC;
  color: #0F172A;
}

.theme-half--dark {
  background: #0F172A;
  color: #F8FAFC;
}

.adv-platform-badges {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.platform-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #F1F5F9;
  border: 1px solid #E2E8F0;
  color: #334155;
  font-size: 0.7rem;
  font-weight: 750;
  padding: 5px 10px;
  border-radius: 5px;
}

.adv-aws-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.adv-bottom-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: auto;
}

'''

if pattern.search(css_content):
    css_content = pattern.sub(new_section_05_css + r'\2', css_content)
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css_content)
    print("SUCCESS: index.css section 05 updated!")
else:
    print("ERROR: pattern did not match in index.css")
