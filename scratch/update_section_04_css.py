import re

css_path = r'c:\Users\sah05\OneDrive\Desktop\pragya\src\index.css'

with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

target_pattern = re.compile(
    r'(/\* 4\. BROCHURE PAGE 3: INDIAN BOARDS RIBBON & SHOWCASES \*/[\s\S]*?)(/\* Page 3 Bottom 3 Pillar Cards \*/)',
    re.MULTILINE
)

replacement_css = '''/* 4. BROCHURE PAGE 3: INDIAN BOARDS RIBBON & SHOWCASES */
.section-kicker-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 14px;
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 850;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.section-kicker-badge--orange {
  background: rgba(249, 115, 22, 0.09);
  color: #EA580C;
  border: 1px solid rgba(249, 115, 22, 0.25);
}

.indian-boards-ribbon {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 30px;
}

.ribbon-chip {
  padding: 7px 14px;
  border-radius: 7px;
  font-size: 0.75rem;
  font-weight: 750;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  letter-spacing: 0.03em;
  transition: transform 0.15s ease;
}

.ribbon-chip:hover {
  transform: translateY(-1px);
}

.ribbon-chip strong { font-weight: 900; }
.ribbon-chip--violet { background: #6F3B9C; }
.ribbon-chip--blue { background: #1D68D8; }
.ribbon-chip--orange { background: #F67C1A; }
.ribbon-chip--green { background: #2E9D60; }
.ribbon-chip--red { background: #EF424B; }
.ribbon-chip--teal { background: #0D9488; }
.ribbon-chip--purple { background: #4C1D95; }

.brochure-page3-showcase-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
  margin-bottom: 32px;
}

@media (max-width: 900px) {
  .brochure-page3-showcase-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.page3-card {
  position: relative;
  background: #FFFFFF;
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 8px;
  padding: 24px 24px 20px 24px;
  box-shadow: 0 10px 30px -5px rgba(23, 37, 82, 0.07), 0 2px 6px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, border-color 0.22s ease;
  overflow: hidden;
}

.page3-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 8px 8px 0 0;
}

.page3-card--fees::before {
  background: linear-gradient(90deg, #F97316 0%, #EF4444 100%);
}

.page3-card--library::before {
  background: linear-gradient(90deg, #0D9488 0%, #10B981 100%);
}

.page3-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 42px -10px rgba(23, 37, 82, 0.13), 0 4px 12px rgba(0, 0, 0, 0.04);
  border-color: rgba(203, 213, 225, 0.95);
}

.page3-card-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
  position: relative;
}

.page3-header-meta {
  flex: 1;
}

.page3-kicker-tag {
  font-size: 0.65rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 2px;
}

.page3-card-header h3 {
  font-size: 1.25rem;
  font-weight: 850;
  color: #0F172A;
  margin-bottom: 3px;
  letter-spacing: -0.015em;
}

.page3-card-header small {
  color: #64748B;
  font-size: 0.775rem;
  line-height: 1.35;
  display: block;
  font-weight: 550;
}

.page3-icon-badge {
  width: 46px;
  height: 46px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #FFFFFF;
}

.page3-icon-badge--fees {
  background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
  box-shadow: 0 4px 14px rgba(234, 88, 12, 0.32);
}

.page3-icon-badge--library {
  background: linear-gradient(135deg, #0D9488 0%, #059669 100%);
  box-shadow: 0 4px 14px rgba(13, 148, 136, 0.32);
}

.page3-live-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  align-self: flex-start;
  letter-spacing: 0.02em;
}

.page3-live-pill--orange {
  background: rgba(249, 115, 22, 0.09);
  color: #C2410C;
  border: 1px solid rgba(249, 115, 22, 0.25);
}

.page3-live-pill--teal {
  background: rgba(13, 148, 136, 0.09);
  color: #0F766E;
  border: 1px solid rgba(13, 148, 136, 0.25);
}

.live-dot-pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: inline-block;
  animation: live-pulse 2s infinite ease-in-out;
}

.live-dot-pulse--orange {
  background: #EA580C;
  box-shadow: 0 0 0 2px rgba(234, 88, 12, 0.28);
}

.live-dot-pulse--teal {
  background: #0D9488;
  box-shadow: 0 0 0 2px rgba(13, 148, 136, 0.28);
}

@keyframes live-pulse {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

/* Exact Fee Receipt Mockup from Page 3 */
.brochure-receipt-box {
  background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 18px 20px;
  margin-bottom: 18px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
  position: relative;
}

.receipt-box-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #E2E8F0;
  padding-bottom: 12px;
  margin-bottom: 12px;
}

.receipt-school-title {
  font-size: 0.88rem;
  font-weight: 850;
  color: #0F172A;
  letter-spacing: 0.02em;
  display: block;
}

.receipt-meta-sub {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 3px;
  flex-wrap: wrap;
}

.receipt-reg-no {
  font-size: 0.6875rem;
  color: #64748B;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-weight: 650;
}

.receipt-pos-counter {
  font-size: 0.625rem;
  font-weight: 800;
  color: #EA580C;
  background: rgba(249, 115, 22, 0.09);
  padding: 1.5px 6px;
  border-radius: 3px;
  letter-spacing: 0.03em;
}

.receipt-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.6875rem;
  font-weight: 850;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  letter-spacing: 0.03em;
  white-space: nowrap;
}

.receipt-status-badge--success {
  background: #DCFCE7;
  color: #15803D;
  border: 1px solid #86EFAC;
}

.receipt-student-meta {
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1.6fr;
  gap: 8px;
  background: #F1F5F9;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 8px 12px;
  margin-bottom: 12px;
}

@media (max-width: 600px) {
  .receipt-student-meta {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}

.receipt-meta-cell {
  display: flex;
  flex-direction: column;
}

.receipt-meta-cell .meta-label {
  font-size: 0.6rem;
  font-weight: 800;
  color: #64748B;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.receipt-meta-cell .meta-val {
  font-size: 0.775rem;
  font-weight: 750;
  color: #0F172A;
}

.receipt-meta-cell .meta-val.text-emerald {
  color: #059669;
}

.receipt-line-items {
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 0.8rem;
  margin-bottom: 12px;
  padding: 0 4px;
}

.receipt-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 1px dashed #E2E8F0;
}

.receipt-item-name {
  color: #334155;
  font-weight: 550;
}

.receipt-item-amount {
  color: #0F172A;
  font-weight: 750;
  font-variant-numeric: tabular-nums;
}

.receipt-total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #ECFDF5 0%, #F0FDF4 100%);
  border: 1.5px solid #A7F3D0;
  border-radius: 6px;
  padding: 10px 14px;
  margin-bottom: 12px;
}

.receipt-total-label-wrap {
  display: flex;
  flex-direction: column;
}

.receipt-total-label {
  font-size: 0.825rem;
  font-weight: 800;
  color: #065F46;
}

.receipt-reconcile-tag {
  font-size: 0.65rem;
  color: #047857;
  font-weight: 650;
}

.receipt-total-val {
  font-size: 1.25rem;
  font-weight: 900;
  color: #047857;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

.receipt-footer-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #E2E8F0;
  gap: 10px;
  flex-wrap: wrap;
}

.receipt-footer-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.725rem;
  color: #64748B;
  font-weight: 600;
}

.page3-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 800;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 0.775rem;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-decoration: none;
}

.page3-cta-btn--fees {
  background: linear-gradient(135deg, #F97316 0%, #EA580C 100%) !important;
  color: #FFFFFF !important;
  border: none !important;
}

.page3-cta-btn--fees:hover {
  background: linear-gradient(135deg, #EA580C 0%, #C2410C 100%) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(234, 88, 12, 0.38) !important;
}

.page3-cta-btn--library {
  background: linear-gradient(135deg, #0D9488 0%, #059669 100%) !important;
  color: #FFFFFF !important;
  border: none !important;
}

.page3-cta-btn--library:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(13, 148, 136, 0.38) !important;
}

/* Digital Catalogue Mockup from Page 3 */
.brochure-library-box {
  background: linear-gradient(180deg, #F0FDFA 0%, #FFFFFF 100%);
  border: 1px solid rgba(13, 148, 136, 0.25);
  border-radius: 6px;
  padding: 18px 20px;
  margin-bottom: 18px;
  box-shadow: 0 4px 14px rgba(13, 148, 136, 0.04);
}

.library-box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 6px;
}

.library-badge-group {
  display: flex;
  align-items: center;
  gap: 6px;
}

.library-tag {
  background: #0D9488;
  color: #FFFFFF;
  font-size: 0.625rem;
  font-weight: 850;
  padding: 2.5px 7px;
  border-radius: 4px;
  letter-spacing: 0.04em;
}

.library-curriculum-badge {
  background: rgba(13, 148, 136, 0.12);
  color: #0F766E;
  font-size: 0.625rem;
  font-weight: 800;
  padding: 2.5px 7px;
  border-radius: 4px;
  border: 1px solid rgba(13, 148, 136, 0.25);
  letter-spacing: 0.03em;
}

.library-header-hint {
  font-size: 0.6875rem;
  color: #0F766E;
  font-weight: 650;
}

.library-search-preview {
  background: #FFFFFF;
  border: 1.5px solid #CCFBF1;
  border-radius: 6px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.775rem;
  color: #64748B;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(13, 148, 136, 0.05);
}

.library-search-icon {
  color: #0D9488;
  flex-shrink: 0;
}

.library-search-placeholder {
  flex: 1;
  color: #475569;
  font-weight: 500;
}

.library-scan-shortcut {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #F1F5F9;
  border: 1px solid #CBD5E1;
  color: #334155;
  font-size: 0.65rem;
  font-weight: 750;
  padding: 2px 7px;
  border-radius: 4px;
  letter-spacing: 0.02em;
}

.library-sample-records {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.lib-book-item {
  position: relative;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 9px 12px 9px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.lib-book-item:hover {
  border-color: #99F6E4;
  box-shadow: 0 3px 8px rgba(13, 148, 136, 0.08);
}

.lib-book-spine {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
}

.lib-book-spine--math {
  background: linear-gradient(180deg, #3B82F6 0%, #1D4ED8 100%);
}

.lib-book-spine--lit {
  background: linear-gradient(180deg, #F59E0B 0%, #D97706 100%);
}

.lib-book-info {
  flex: 1;
}

.lib-book-title-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 2px;
  flex-wrap: wrap;
}

.lib-book-title-row strong {
  font-size: 0.825rem;
  font-weight: 800;
  color: #0F172A;
}

.lib-book-tag {
  font-size: 0.6rem;
  font-weight: 800;
  color: #1D68D8;
  background: rgba(29, 104, 216, 0.08);
  padding: 1px 5px;
  border-radius: 3px;
  letter-spacing: 0.03em;
}

.lib-book-info small {
  color: #64748B;
  font-size: 0.6875rem;
  font-weight: 500;
  display: block;
}

.lib-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.6875rem;
  font-weight: 800;
  padding: 4px 9px;
  border-radius: 4px;
  white-space: nowrap;
}

/* Visual Capability Chips */
.page3-visual-chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: auto;
}

.visual-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.725rem;
  font-weight: 750;
  color: #334155;
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

.visual-chip:hover {
  background: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
}

.visual-chip--orange {
  border-color: rgba(249, 115, 22, 0.28);
  color: #C2410C;
  background: rgba(249, 115, 22, 0.05);
}

.visual-chip--orange:hover {
  border-color: #EA580C;
  background: rgba(249, 115, 22, 0.1);
}

.visual-chip--blue {
  border-color: rgba(29, 104, 216, 0.28);
  color: #1D68D8;
  background: rgba(29, 104, 216, 0.05);
}

.visual-chip--blue:hover {
  border-color: #1D68D8;
  background: rgba(29, 104, 216, 0.1);
}

.visual-chip--green {
  border-color: rgba(34, 197, 94, 0.28);
  color: #15803D;
  background: rgba(34, 197, 94, 0.05);
}

.visual-chip--green:hover {
  border-color: #22C55E;
  background: rgba(34, 197, 94, 0.1);
}

.visual-chip--teal {
  border-color: rgba(13, 148, 136, 0.28);
  color: #0F766E;
  background: rgba(13, 148, 136, 0.05);
}

.visual-chip--teal:hover {
  border-color: #0D9488;
  background: rgba(13, 148, 136, 0.1);
}

.visual-chip--purple {
  border-color: rgba(124, 58, 237, 0.28);
  color: #6D28D9;
  background: rgba(124, 58, 237, 0.05);
}

.visual-chip--purple:hover {
  border-color: #7C3AED;
  background: rgba(124, 58, 237, 0.1);
}

'''

if target_pattern.search(css_content):
    new_css = target_pattern.sub(replacement_css + r'\2', css_content)
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(new_css)
    print("SUCCESS: index.css updated!")
else:
    print("ERROR: pattern did not match in index.css")
