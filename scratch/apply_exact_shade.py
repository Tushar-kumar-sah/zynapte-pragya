# apply_exact_shade.py
import re

css_path = 'src/index.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Cut off previous additions from line with "OFFICIAL GRADIENT COLOR PALETTE INTEGRATION"
cut_marker = "/* ==========================================================================\n   OFFICIAL GRADIENT COLOR PALETTE INTEGRATION"
if cut_marker in css:
    css = css.split(cut_marker)[0]

# The Exact Shade Theme:
# User Swatch Sampled RGB: (20, 62, 128) -> #143E80
# Gradient Top: #0E3576
# Gradient Mid: #143E80
# Gradient Rich: #174284
# Deep Surface (for depth & contrast): #091F46 / rgba(8, 28, 64, 0.78)
new_theme = """/* ==========================================================================
   OFFICIAL DARK BLUE THEME (#143E80)
   Sampled Directly from User Swatch Specification:
   - Primary Dark Blue Shade: #143E80 (RGB: 20, 62, 128)
   - Deep Top Shade:          #0E3576 (RGB: 14, 53, 118)
   - Rich Base Shade:         #174284 (RGB: 23, 66, 132)
   - Card Surface (Deep):     #0A2250 / rgba(8, 28, 64, 0.76)
   - Border Accent Glow:      rgba(147, 197, 253, 0.28)
   - Luminous Cyan Highlight: #38BDF8
   - Typography Text:         #FFFFFF (Headings) / #E2ECFA (Body)
   ========================================================================== */

/* 1. GLOBAL ROOT, BODY & HTML */
html,
body,
#root {
  background-color: #10397B !important;
  color: #F1F5F9 !important;
  min-height: 100vh;
}

/* Global Headings & Typography */
h1, h2, h3, h4, h5, h6 {
  color: #FFFFFF !important;
  letter-spacing: -0.015em;
}

p {
  color: #E2ECFA !important;
}

a {
  color: #60A5FA;
}

a:hover {
  color: #93C5FD;
}

/* 2. NAVBAR & HEADER */
.site-header {
  background-color: rgba(14, 53, 118, 0.94) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(147, 197, 253, 0.22) !important;
}

.site-header.scrolled {
  background-color: rgba(12, 45, 102, 0.98) !important;
  box-shadow: 0 4px 20px rgba(0, 10, 30, 0.45);
}

.nav-link {
  color: #E2ECFA !important;
}

.nav-link:hover,
.nav-link.active {
  color: #93C5FD !important;
}

/* 3. HERO SECTION (#143E80 DARK BLUE SHADE) */
.hero {
  background: linear-gradient(180deg, #0E3576 0%, #10397B 30%, #143E80 70%, #174284 100%) !important;
  color: #FFFFFF !important;
  position: relative;
  overflow: hidden;
  padding: 56px 0 48px 0 !important;
}

.hero-content .eyebrow {
  background: rgba(255, 255, 255, 0.12) !important;
  -webkit-text-fill-color: #93C5FD !important;
  color: #93C5FD !important;
  border: 1px solid rgba(147, 197, 253, 0.35) !important;
  padding: 5px 14px !important;
  border-radius: 9999px !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2) !important;
  width: fit-content;
}

.hero-content .eyebrow-dot {
  background: #38BDF8 !important;
  box-shadow: 0 0 10px #38BDF8 !important;
}

.hero-title {
  color: #FFFFFF !important;
}

.hero-title-highlight {
  background: linear-gradient(135deg, #60A5FA 0%, #93C5FD 50%, #F67C1A 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.hero-subtitle {
  color: #D6E3F8 !important;
}

.hero-cta-group .btn--primary {
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%) !important;
  box-shadow: 0 4px 18px rgba(37, 99, 235, 0.5) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  color: #FFFFFF !important;
}

.hero-cta-group .btn--primary:hover {
  background: linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%) !important;
  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.65) !important;
}

.hero-cta-group .btn--secondary {
  background: rgba(255, 255, 255, 0.12) !important;
  color: #FFFFFF !important;
  border: 1px solid rgba(255, 255, 255, 0.28) !important;
  backdrop-filter: blur(8px);
}

.hero-cta-group .btn--secondary:hover {
  background: rgba(255, 255, 255, 0.22) !important;
  border-color: rgba(255, 255, 255, 0.45) !important;
  color: #FFFFFF !important;
}

.hero-feature-checks {
  color: #E2E8F0 !important;
}

.hero-feature-checks svg {
  color: #38BDF8 !important;
}

.hero-social-proof {
  border-top: 1px solid rgba(147, 197, 253, 0.22) !important;
}

.hero-social-proof .rating-text {
  color: #CBD5E1 !important;
}

.hero-social-proof .rating-text strong {
  color: #FFFFFF !important;
}

.hero-social-proof .rating-stars {
  color: #FBBF24 !important;
}

.erp-mockup {
  box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15) !important;
}

.erp-mockup-glow {
  background: radial-gradient(circle at 50% 50%, rgba(20, 62, 128, 0.45), rgba(147, 197, 253, 0.25), transparent 70%) !important;
  filter: blur(36px) !important;
}

/* 4. ACCREDITATION & TRUST STRIP */
.trust-strip-section {
  background: #0C2B60 !important;
  border-top: 1px solid rgba(147, 197, 253, 0.24) !important;
  border-bottom: 1px solid rgba(147, 197, 253, 0.24) !important;
  padding: 13px 0 !important;
}

.trust-strip-inner {
  color: #CBD5E1 !important;
}

.trust-item strong {
  color: #FFFFFF !important;
}

.trust-sep {
  color: rgba(147, 197, 253, 0.3) !important;
}

/* 5. ALL SECTION BACKDROPS (UNIFIED TO #143E80 SHADE) */
.section {
  position: relative;
  overflow: hidden;
}

.section--white {
  background: linear-gradient(180deg, #10397B 0%, #143E80 50%, #174284 100%) !important;
}

.section--soft {
  background: linear-gradient(180deg, #174284 0%, #143E80 60%, #10397B 100%) !important;
}

.section-header h2 {
  color: #FFFFFF !important;
}

.section-header p {
  color: #D6E3F8 !important;
}

.section-header .eyebrow,
.section .eyebrow {
  background: rgba(255, 255, 255, 0.12) !important;
  -webkit-text-fill-color: #93C5FD !important;
  color: #93C5FD !important;
  border: 1px solid rgba(147, 197, 253, 0.35) !important;
  padding: 5px 14px !important;
  border-radius: 9999px !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25) !important;
  width: fit-content;
  display: inline-flex;
}

.section .eyebrow-dot {
  background: #38BDF8 !important;
  box-shadow: 0 0 10px #38BDF8 !important;
}

/* 6. CORE MODULES & FEATURE CARDS (DEEP SAPPHIRE GLASS) */
.core-nine-modules-grid .core-module-card,
.feature-card,
.security-card,
.workflow-step-card,
.stat-box-card {
  background: rgba(8, 28, 64, 0.74) !important;
  border: 1px solid rgba(147, 197, 253, 0.26) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.38) !important;
  color: #FFFFFF !important;
  transition: all 0.25s ease !important;
}

.core-nine-modules-grid .core-module-card:hover,
.feature-card:hover,
.security-card:hover,
.stat-box-card:hover {
  background: rgba(10, 36, 82, 0.9) !important;
  border-color: #38BDF8 !important;
  transform: translateY(-4px) !important;
  box-shadow: 0 16px 36px -6px rgba(0, 0, 0, 0.55), 0 0 18px rgba(56, 189, 248, 0.25) !important;
}

.core-module-text h4,
.feature-card h3,
.security-card h3,
.stat-box-label {
  color: #FFFFFF !important;
}

.core-module-text p,
.feature-card p,
.security-card p,
.stat-box-sublabel {
  color: #D6E3F8 !important;
}

.stat-box-number {
  color: #FFFFFF !important;
}

.core-module-icon-wrap,
.feature-card-icon,
.security-card-icon {
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.16) !important;
  color: #93C5FD !important;
}

.core-module-arrow {
  color: #86A5D4 !important;
}

.core-module-card:hover .core-module-arrow {
  color: #38BDF8 !important;
  transform: translateX(4px) !important;
}

/* Role Showcase Box */
.role-showcase-box {
  background: rgba(8, 28, 64, 0.78) !important;
  border: 1px solid rgba(147, 197, 253, 0.28) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4) !important;
}

.role-showcase-top {
  border-bottom: 1px solid rgba(147, 197, 253, 0.2) !important;
}

.role-showcase-tagline {
  color: #FFFFFF !important;
}

.role-pills-row {
  background: rgba(6, 20, 48, 0.85) !important;
  border: 1px solid rgba(147, 197, 253, 0.22) !important;
}

.role-pill-btn {
  color: #D6E3F8 !important;
}

.role-pill-btn.active {
  background: #2563EB !important;
  color: #FFFFFF !important;
  box-shadow: 0 2px 10px rgba(37, 99, 235, 0.4) !important;
}

.role-detail-text h3 {
  color: #FFFFFF !important;
}

.role-detail-outcome {
  color: #93C5FD !important;
}

.role-detail-points li {
  color: #E2E8F0 !important;
}

/* 7. INDIAN SCHOOLS SECTION, MOCKUPS & STRIP */
.page3-card,
.advantage-feature-card {
  background: rgba(8, 28, 64, 0.76) !important;
  border: 1px solid rgba(147, 197, 253, 0.26) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.38) !important;
  color: #FFFFFF !important;
}

.page3-card-header h3,
.advantage-feature-card h4 {
  color: #FFFFFF !important;
}

.page3-card-header small,
.advantage-feature-card p {
  color: #D6E3F8 !important;
}

.brochure-receipt-box,
.brochure-library-box {
  background: rgba(6, 22, 52, 0.85) !important;
  border: 1px dashed rgba(147, 197, 253, 0.35) !important;
  color: #FFFFFF !important;
}

.receipt-box-top {
  border-bottom: 1px solid rgba(147, 197, 253, 0.2) !important;
}

.receipt-box-top strong,
.lib-book-item strong {
  color: #FFFFFF !important;
}

.receipt-reg-no,
.lib-book-item small {
  color: #86A5D4 !important;
}

.receipt-row {
  color: #CBD5E1 !important;
}

.receipt-total-row {
  border-top: 1.5px solid rgba(147, 197, 253, 0.35) !important;
  color: #FFFFFF !important;
}

.receipt-footer-action {
  border-top: 1px dashed rgba(147, 197, 253, 0.25) !important;
  color: #D6E3F8 !important;
}

.library-search-preview {
  background: rgba(8, 28, 64, 0.7) !important;
  border: 1px solid rgba(147, 197, 253, 0.2) !important;
  color: #86A5D4 !important;
}

.lib-book-item {
  background: rgba(8, 28, 64, 0.8) !important;
  border: 1px solid rgba(147, 197, 253, 0.2) !important;
}

.page3-checklist li {
  color: #E2E8F0 !important;
}

/* 8. PAYROLL SHOWCASE & ADVANTAGE */
.payroll-showcase-container {
  background: rgba(8, 28, 64, 0.76) !important;
  border: 1px solid rgba(147, 197, 253, 0.28) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4) !important;
}

.payslip-category-bar {
  background: rgba(6, 20, 48, 0.85) !important;
  border: 1px solid rgba(147, 197, 253, 0.25) !important;
}

.payslip-category-title {
  color: #FFFFFF !important;
}

.payslip-category-title strong {
  color: #F67C1A !important;
}

.payroll-faculty-info h3 {
  color: #FFFFFF !important;
}

.payroll-faculty-info p {
  color: #D6E3F8 !important;
}

.fac-item {
  background: rgba(6, 22, 52, 0.75) !important;
  border: 1px solid rgba(147, 197, 253, 0.22) !important;
}

.fac-item strong {
  color: #FFFFFF !important;
}

.fac-item small {
  color: #86A5D4 !important;
}

.brochure-payslip-card {
  background: rgba(6, 22, 52, 0.85) !important;
  border: 1.5px solid rgba(147, 197, 253, 0.3) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45) !important;
  color: #FFFFFF !important;
}

.payslip-card-top {
  border-bottom: 1px solid rgba(147, 197, 253, 0.2) !important;
}

.payslip-card-top strong {
  color: #FFFFFF !important;
}

.payslip-card-top small {
  color: #86A5D4 !important;
}

.payslip-row {
  color: #CBD5E1 !important;
}

.payslip-net-row {
  border-top: 1.5px solid rgba(147, 197, 253, 0.3) !important;
  color: #FFFFFF !important;
}

.payslip-card-foot {
  border-top: 1px dashed rgba(147, 197, 253, 0.25) !important;
  color: #86A5D4 !important;
}

.adv-icon-circle {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  color: #93C5FD !important;
}

.adv-preview-theme {
  border: 1px solid rgba(147, 197, 253, 0.25) !important;
}

.theme-half--light {
  background: rgba(255, 255, 255, 0.15) !important;
  color: #FFFFFF !important;
}

.theme-half--dark {
  background: #0E3576 !important;
  color: #93C5FD !important;
}

/* 9. APAAR READINESS ENGINE */
.journey-step-card {
  background: rgba(8, 28, 64, 0.74) !important;
  border: 1px solid rgba(147, 197, 253, 0.26) !important;
  color: #FFFFFF !important;
}

.journey-step-card h3 {
  color: #FFFFFF !important;
}

.journey-step-card p {
  color: #D6E3F8 !important;
}

.apaar-overall-meter {
  background: rgba(8, 28, 64, 0.78) !important;
  border: 1px solid rgba(147, 197, 253, 0.28) !important;
}

.meter-title strong {
  color: #FFFFFF !important;
}

.meter-detail {
  color: #D6E3F8 !important;
}

.meter-progress-track {
  background: rgba(6, 20, 48, 0.85) !important;
}

.apaar-status-card {
  backdrop-filter: blur(8px) !important;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35) !important;
}

.apaar-status-card--ready {
  background: rgba(5, 150, 105, 0.18) !important;
  border: 1.5px solid rgba(16, 185, 129, 0.45) !important;
  border-top: 5px solid #10B981 !important;
}

.apaar-status-card--attention {
  background: rgba(217, 119, 6, 0.18) !important;
  border: 1.5px solid rgba(245, 158, 11, 0.45) !important;
  border-top: 5px solid #F59E0B !important;
}

.apaar-status-card--submitted {
  background: rgba(29, 104, 216, 0.18) !important;
  border: 1.5px solid rgba(56, 189, 248, 0.45) !important;
  border-top: 5px solid #38BDF8 !important;
}

.apaar-status-card--generated {
  background: rgba(116, 45, 218, 0.18) !important;
  border: 1.5px solid rgba(168, 85, 247, 0.45) !important;
  border-top: 5px solid #A855F7 !important;
}

.apaar-status-card .apaar-status-desc {
  color: #D6E3F8 !important;
}

.apaar-interactive-box {
  background: rgba(8, 28, 64, 0.82) !important;
  border: 1px solid rgba(147, 197, 253, 0.3) !important;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45) !important;
}

.table-filter-select,
.table-search-input {
  background: rgba(6, 20, 48, 0.88) !important;
  border: 1px solid rgba(147, 197, 253, 0.34) !important;
  color: #FFFFFF !important;
}

.table-filter-select option {
  background: #0E3576;
  color: #FFFFFF;
}

.interactive-data-table th {
  background: rgba(6, 20, 48, 0.95) !important;
  color: #D6E3F8 !important;
  border-bottom: 2px solid rgba(147, 197, 253, 0.32) !important;
}

.interactive-data-table td {
  border-bottom: 1px solid rgba(147, 197, 253, 0.16) !important;
  color: #E2E8F0 !important;
}

.interactive-data-table tr:hover td {
  background: rgba(20, 62, 128, 0.3) !important;
}

.student-meta-cell strong {
  color: #FFFFFF !important;
}

.pen-code {
  background: rgba(6, 20, 48, 0.8) !important;
  color: #93C5FD !important;
  border: 1px solid rgba(147, 197, 253, 0.28) !important;
}

.accuracy-notice-banner {
  background: rgba(245, 158, 11, 0.12) !important;
  border: 1px solid rgba(245, 158, 11, 0.38) !important;
  border-left: 5px solid #F59E0B !important;
}

.accuracy-notice-banner strong {
  color: #FBBF24 !important;
}

.accuracy-notice-banner div,
.accuracy-notice-banner p {
  color: #FEF3C7 !important;
}

/* 10. DEMO FORM COMPONENT */
.demo-card-container {
  background: rgba(8, 28, 64, 0.85) !important;
  border: 1px solid rgba(147, 197, 253, 0.32) !important;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5) !important;
}

.demo-card-header {
  background: linear-gradient(135deg, #0E3576 0%, #10397B 50%, #143E80 100%) !important;
  border-bottom: 1px solid rgba(147, 197, 253, 0.25) !important;
}

.demo-card-header h2 {
  color: #FFFFFF !important;
}

.demo-card-header p {
  color: #D6E3F8 !important;
}

.demo-form .form-label {
  color: #FFFFFF !important;
}

.demo-form .form-label .optional-tag {
  color: #86A5D4 !important;
}

.demo-form .form-control {
  background-color: rgba(6, 20, 48, 0.88) !important;
  border: 1.5px solid rgba(147, 197, 253, 0.34) !important;
  color: #FFFFFF !important;
}

.demo-form .form-control:focus {
  border-color: #38BDF8 !important;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.3) !important;
}

.demo-form .form-control option {
  background-color: #0E3576;
  color: #FFFFFF;
}

.demo-form .checkbox-label {
  color: #D6E3F8 !important;
}

.consent-box {
  background: rgba(6, 20, 48, 0.7) !important;
  border: 1px solid rgba(147, 197, 253, 0.25) !important;
}

.consent-box .checkbox-label {
  color: #CBD5E1 !important;
}

/* 11. FAQ ACCORDION */
.faq-item {
  background: rgba(8, 28, 64, 0.74) !important;
  border: 1px solid rgba(147, 197, 253, 0.26) !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25) !important;
}

.faq-item[open] {
  border-color: #38BDF8 !important;
  background: rgba(10, 36, 82, 0.9) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4) !important;
}

.faq-summary {
  color: #FFFFFF !important;
}

.faq-summary-icon {
  background: rgba(255, 255, 255, 0.1) !important;
  color: #93C5FD !important;
}

.faq-item[open] .faq-summary-icon {
  background: rgba(56, 189, 248, 0.25) !important;
  color: #38BDF8 !important;
}

.faq-content {
  color: #D6E3F8 !important;
}

.faq-item[open] .faq-content {
  border-top-color: rgba(147, 197, 253, 0.2) !important;
}

/* 12. BOTTOM CTA & FOOTER */
.section-bottom-cta {
  background: linear-gradient(180deg, #0C2B60 0%, #081E44 100%) !important;
  border-top: 1px solid rgba(147, 197, 253, 0.2) !important;
}

.site-footer {
  background: #071734 !important;
  border-top: 1px solid rgba(147, 197, 253, 0.22) !important;
}

/* 13. INNER PAGES HERO BANNER */
.page-hero {
  background: linear-gradient(180deg, #0E3576 0%, #10397B 40%, #143E80 100%) !important;
  color: #FFFFFF !important;
  border-bottom: 1px solid rgba(147, 197, 253, 0.24) !important;
}

.page-hero-title {
  color: #FFFFFF !important;
}

.page-hero-desc {
  color: #D6E3F8 !important;
}

/* 14. MOBILE NAVIGATION DRAWER */
.mobile-nav-drawer {
  background-color: #0E3576 !important;
  border-top: 1px solid rgba(147, 197, 253, 0.25) !important;
}

.mobile-nav-list a {
  color: #FFFFFF !important;
  border-bottom: 1px solid rgba(147, 197, 253, 0.18) !important;
}

.mobile-nav-list a:hover {
  color: #93C5FD !important;
}

/* 15. GLOBAL SECONDARY BUTTON OVERRIDE */
.btn--secondary {
  background: rgba(255, 255, 255, 0.12) !important;
  color: #FFFFFF !important;
  border: 1px solid rgba(255, 255, 255, 0.28) !important;
  backdrop-filter: blur(8px) !important;
}

.btn--secondary:hover {
  background: rgba(255, 255, 255, 0.22) !important;
  border-color: rgba(255, 255, 255, 0.45) !important;
  color: #FFFFFF !important;
  transform: translateY(-2px);
}
"""

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css + new_theme)

print("Applied exact #143E80 shade theme cleanly to src/index.css")
