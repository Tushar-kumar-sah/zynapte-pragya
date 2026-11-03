# full_site_theme.py
import re

css_path = 'src/index.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Let's add the complete, unified full-website theme rules at the end of index.css
full_theme_css = """
/* ==========================================================================
   WHOLE WEBSITE COMPLETE THEME IMPLEMENTATION
   Color Palette from Specification:
   - Deep Midnight Navy: #011B4C
   - Deep Oceanic Navy:  #001D51
   - Royal Sapphire:     #012561
   - Classic Sapphire:   #113A7C
   - Cobalt Azure:       #3C68A9
   - Atmospheric Sky:    #86A5D4
   - Periwinkle Mist:    #C9D8F1
   - Soft Ice/Cloud:     #EDF3FC
   ========================================================================== */

/* 1. GLOBAL ROOT, BODY & HTML THEME */
html,
body,
#root {
  background-color: #011438 !important;
  color: #F1F5F9 !important;
  min-height: 100vh;
}

/* Global Headings & Typography */
h1, h2, h3, h4, h5, h6 {
  color: #FFFFFF !important;
  letter-spacing: -0.015em;
}

p {
  color: #C9D8F1 !important; /* Soft Periwinkle Mist for optimal dark-mode legibility */
}

a {
  color: #60A5FA;
}

a:hover {
  color: #93C5FD;
}

/* 2. SECTION BACKGROUNDS ACROSS ENTIRE WEBSITE */
.section {
  position: relative;
  overflow: hidden;
}

.section--white {
  background: linear-gradient(180deg, #011B4C 0%, #001D51 50%, #012561 100%) !important;
}

.section--soft {
  background: linear-gradient(180deg, #012561 0%, #001D51 60%, #011B4C 100%) !important;
}

.section-header h2 {
  color: #FFFFFF !important;
}

.section-header p {
  color: #C9D8F1 !important;
}

/* Section Eyebrow Kickers */
.section-header .eyebrow,
.section .eyebrow {
  background: rgba(255, 255, 255, 0.1) !important;
  -webkit-text-fill-color: #93C5FD !important;
  color: #93C5FD !important;
  border: 1px solid rgba(147, 197, 253, 0.3) !important;
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

/* 3. CORE MODULES SECTION (PAGE 2) - DARK SAPPHIRE GLASS */
.core-nine-modules-grid .core-module-card {
  background: rgba(2, 35, 91, 0.65) !important;
  border: 1px solid rgba(134, 165, 212, 0.24) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.45) !important;
  color: #FFFFFF !important;
  transition: all 0.25s ease !important;
}

.core-nine-modules-grid .core-module-card:hover {
  background: rgba(3, 45, 115, 0.85) !important;
  border-color: #38BDF8 !important;
  transform: translateY(-4px) !important;
  box-shadow: 0 16px 36px -6px rgba(0, 0, 0, 0.6), 0 0 18px rgba(56, 189, 248, 0.25) !important;
}

.core-module-text h4 {
  color: #FFFFFF !important;
}

.core-module-text p {
  color: #C9D8F1 !important;
}

.core-module-icon-wrap {
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.16) !important;
}

.core-module-arrow {
  color: #86A5D4 !important;
}

.core-module-card:hover .core-module-arrow {
  color: #38BDF8 !important;
  transform: translateX(4px) !important;
}

/* Role Showcase Box in Modules Section */
.role-showcase-box {
  background: rgba(2, 35, 91, 0.7) !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4) !important;
}

.role-showcase-top {
  border-bottom: 1px solid rgba(134, 165, 212, 0.2) !important;
}

.role-showcase-tagline {
  color: #FFFFFF !important;
}

.role-pills-row {
  background: rgba(1, 27, 76, 0.8) !important;
  border: 1px solid rgba(134, 165, 212, 0.2) !important;
}

.role-pill-btn {
  color: #C9D8F1 !important;
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

/* 4. INDIAN SCHOOLS SECTION (PAGE 3) - CARDS & MOCKUPS */
.page3-card {
  background: rgba(2, 35, 91, 0.72) !important;
  border: 1px solid rgba(134, 165, 212, 0.24) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4) !important;
  color: #FFFFFF !important;
}

.page3-card-header h3 {
  color: #FFFFFF !important;
}

.page3-card-header small {
  color: #C9D8F1 !important;
}

/* Fee Receipt Mockup */
.brochure-receipt-box {
  background: rgba(1, 27, 76, 0.85) !important;
  border: 1px dashed rgba(134, 165, 212, 0.35) !important;
  color: #FFFFFF !important;
}

.receipt-box-top {
  border-bottom: 1px solid rgba(134, 165, 212, 0.2) !important;
}

.receipt-box-top strong {
  color: #FFFFFF !important;
}

.receipt-reg-no {
  color: #86A5D4 !important;
}

.receipt-row {
  color: #CBD5E1 !important;
}

.receipt-total-row {
  border-top: 1.5px solid rgba(134, 165, 212, 0.35) !important;
  color: #FFFFFF !important;
}

.receipt-footer-action {
  border-top: 1px dashed rgba(134, 165, 212, 0.25) !important;
  color: #C9D8F1 !important;
}

/* Library Mockup */
.brochure-library-box {
  background: rgba(1, 27, 76, 0.85) !important;
  border: 1px solid rgba(13, 148, 136, 0.4) !important;
  color: #FFFFFF !important;
}

.library-box-header small {
  color: #C9D8F1 !important;
}

.library-search-preview {
  background: rgba(2, 35, 91, 0.65) !important;
  border: 1px solid rgba(134, 165, 212, 0.2) !important;
  color: #86A5D4 !important;
}

.lib-book-item {
  background: rgba(2, 35, 91, 0.8) !important;
  border: 1px solid rgba(134, 165, 212, 0.2) !important;
}

.lib-book-item strong {
  color: #FFFFFF !important;
}

.lib-book-item small {
  color: #86A5D4 !important;
}

.page3-checklist li {
  color: #E2E8F0 !important;
}

/* 5. PAYROLL SECTION (PAGE 4) */
.payroll-showcase-container {
  background: rgba(2, 35, 91, 0.72) !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4) !important;
}

.payslip-category-bar {
  background: rgba(1, 27, 76, 0.85) !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
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
  color: #C9D8F1 !important;
}

.fac-item {
  background: rgba(1, 27, 76, 0.75) !important;
  border: 1px solid rgba(134, 165, 212, 0.2) !important;
}

.fac-item strong {
  color: #FFFFFF !important;
}

.fac-item small {
  color: #86A5D4 !important;
}

/* Payslip Card */
.brochure-payslip-card {
  background: rgba(1, 27, 76, 0.85) !important;
  border: 1.5px solid rgba(134, 165, 212, 0.3) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45) !important;
  color: #FFFFFF !important;
}

.payslip-card-top {
  border-bottom: 1px solid rgba(134, 165, 212, 0.2) !important;
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
  border-top: 1.5px solid rgba(134, 165, 212, 0.3) !important;
  color: #FFFFFF !important;
}

.payslip-card-foot {
  border-top: 1px dashed rgba(134, 165, 212, 0.25) !important;
  color: #86A5D4 !important;
}

/* 3 Pragya Advantage Cards */
.advantage-feature-card {
  background: rgba(2, 35, 91, 0.7) !important;
  border: 1px solid rgba(134, 165, 212, 0.24) !important;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35) !important;
  color: #FFFFFF !important;
}

.advantage-feature-card h4 {
  color: #FFFFFF !important;
}

.advantage-feature-card p {
  color: #C9D8F1 !important;
}

.adv-icon-circle {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  color: #93C5FD !important;
}

.adv-preview-theme {
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
}

.theme-half--light {
  background: rgba(255, 255, 255, 0.15) !important;
  color: #FFFFFF !important;
}

.theme-half--dark {
  background: #011B4C !important;
  color: #93C5FD !important;
}

/* 6. APAAR READINESS ENGINE - DARK SAPPHIRE JOURNEY */
.journey-step-card {
  background: rgba(2, 35, 91, 0.68) !important;
  border: 1px solid rgba(134, 165, 212, 0.24) !important;
  color: #FFFFFF !important;
}

.journey-step-card h3 {
  color: #FFFFFF !important;
}

.journey-step-card p {
  color: #C9D8F1 !important;
}

.apaar-overall-meter {
  background: rgba(2, 35, 91, 0.75) !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
}

.meter-title strong {
  color: #FFFFFF !important;
}

.meter-detail {
  color: #C9D8F1 !important;
}

.meter-progress-track {
  background: rgba(1, 27, 76, 0.8) !important;
}

/* APAAR 4 Status Cards (Neon Glassmorphic Override) */
.apaar-status-card {
  backdrop-filter: blur(8px) !important;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35) !important;
}

.apaar-status-card--ready {
  background: rgba(5, 150, 105, 0.15) !important;
  border: 1.5px solid rgba(16, 185, 129, 0.4) !important;
  border-top: 5px solid #10B981 !important;
}

.apaar-status-card--attention {
  background: rgba(217, 119, 6, 0.15) !important;
  border: 1.5px solid rgba(245, 158, 11, 0.4) !important;
  border-top: 5px solid #F59E0B !important;
}

.apaar-status-card--submitted {
  background: rgba(29, 104, 216, 0.15) !important;
  border: 1.5px solid rgba(56, 189, 248, 0.4) !important;
  border-top: 5px solid #38BDF8 !important;
}

.apaar-status-card--generated {
  background: rgba(116, 45, 218, 0.15) !important;
  border: 1.5px solid rgba(168, 85, 247, 0.4) !important;
  border-top: 5px solid #A855F7 !important;
}

.apaar-status-card .apaar-status-desc {
  color: #C9D8F1 !important;
}

/* APAAR Interactive Table Box */
.apaar-interactive-box {
  background: rgba(2, 35, 91, 0.8) !important;
  border: 1px solid rgba(134, 165, 212, 0.28) !important;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45) !important;
}

.table-filter-select,
.table-search-input {
  background: rgba(1, 27, 76, 0.85) !important;
  border: 1px solid rgba(134, 165, 212, 0.32) !important;
  color: #FFFFFF !important;
}

.table-filter-select option {
  background: #011B4C;
  color: #FFFFFF;
}

.interactive-data-table th {
  background: rgba(1, 27, 76, 0.95) !important;
  color: #C9D8F1 !important;
  border-bottom: 2px solid rgba(134, 165, 212, 0.3) !important;
}

.interactive-data-table td {
  border-bottom: 1px solid rgba(134, 165, 212, 0.16) !important;
  color: #E2E8F0 !important;
}

.interactive-data-table tr:hover td {
  background: rgba(60, 104, 169, 0.25) !important;
}

.student-meta-cell strong {
  color: #FFFFFF !important;
}

.pen-code {
  background: rgba(1, 27, 76, 0.8) !important;
  color: #93C5FD !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
}

/* Accuracy Notice Callout */
.accuracy-notice-banner {
  background: rgba(245, 158, 11, 0.12) !important;
  border: 1px solid rgba(245, 158, 11, 0.35) !important;
  border-left: 5px solid #F59E0B !important;
}

.accuracy-notice-banner strong {
  color: #FBBF24 !important;
}

.accuracy-notice-banner div,
.accuracy-notice-banner p {
  color: #FEF3C7 !important;
}

/* 7. DEMO LEAD CAPTURE FORM */
.demo-card-container {
  background: rgba(2, 35, 91, 0.85) !important;
  border: 1px solid rgba(134, 165, 212, 0.3) !important;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55) !important;
}

.demo-card-header {
  background: linear-gradient(135deg, #011B4C 0%, #001D51 45%, #012561 100%) !important;
  border-bottom: 1px solid rgba(134, 165, 212, 0.22) !important;
}

.demo-card-header h2 {
  color: #FFFFFF !important;
}

.demo-card-header p {
  color: #C9D8F1 !important;
}

.demo-form .form-label {
  color: #FFFFFF !important;
}

.demo-form .form-label .optional-tag {
  color: #86A5D4 !important;
}

.demo-form .form-control {
  background-color: rgba(1, 27, 76, 0.85) !important;
  border: 1.5px solid rgba(134, 165, 212, 0.32) !important;
  color: #FFFFFF !important;
}

.demo-form .form-control:focus {
  border-color: #38BDF8 !important;
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25) !important;
}

.demo-form .form-control option {
  background-color: #011B4C;
  color: #FFFFFF;
}

.demo-form .checkbox-label {
  color: #C9D8F1 !important;
}

.consent-box {
  background: rgba(1, 27, 76, 0.65) !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
}

.consent-box .checkbox-label {
  color: #CBD5E1 !important;
}

/* 8. FAQ ACCORDION COMPONENT */
.faq-item {
  background: rgba(2, 35, 91, 0.7) !important;
  border: 1px solid rgba(134, 165, 212, 0.24) !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25) !important;
}

.faq-item[open] {
  border-color: #38BDF8 !important;
  background: rgba(3, 45, 115, 0.85) !important;
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
  color: #C9D8F1 !important;
}

.faq-item[open] .faq-content {
  border-top-color: rgba(134, 165, 212, 0.2) !important;
}

/* 9. STATS BANNER SECTION */
.stats-banner-section {
  background: linear-gradient(180deg, #011B4C 0%, #001D51 100%) !important;
  border-top: 1px solid rgba(134, 165, 212, 0.2) !important;
  border-bottom: 1px solid rgba(134, 165, 212, 0.2) !important;
}

.stats-section-title {
  color: #FFFFFF !important;
}

.stats-section-subtitle {
  color: #C9D8F1 !important;
}

.stat-box-card {
  background: rgba(2, 35, 91, 0.7) !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35) !important;
}

.stat-box-card:hover {
  background: rgba(3, 45, 115, 0.85) !important;
  border-color: #38BDF8 !important;
}

.stat-box-number {
  color: #FFFFFF !important;
}

.stat-box-label {
  color: #FFFFFF !important;
}

.stat-box-sublabel {
  color: #C9D8F1 !important;
}

/* 10. BENEFITS STRIP & ROLE DISPLAY BOX */
.benefits-strip {
  background: #011B4C !important;
  border-color: rgba(134, 165, 212, 0.2) !important;
}

.benefit-card h4 {
  color: #FFFFFF !important;
}

.benefit-card p {
  color: #C9D8F1 !important;
}

.benefit-icon-box {
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.16) !important;
  color: #93C5FD !important;
}

.indian-schools-strip {
  background: rgba(2, 35, 91, 0.65) !important;
  border: 1px solid rgba(134, 165, 212, 0.2) !important;
}

.strip-label {
  color: #FFFFFF !important;
}

.strip-tag {
  background: rgba(1, 27, 76, 0.8) !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
  color: #E2E8F0 !important;
}

.role-display-box {
  background: rgba(2, 35, 91, 0.72) !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
  color: #FFFFFF !important;
}

.role-tab-btn {
  background: rgba(2, 35, 91, 0.7) !important;
  border: 1px solid rgba(134, 165, 212, 0.3) !important;
  color: #E2E8F0 !important;
}

.role-tab-btn:hover {
  border-color: #38BDF8 !important;
  color: #FFFFFF !important;
}

.role-tab-btn.active {
  background: #2563EB !important;
  color: #FFFFFF !important;
  border-color: #38BDF8 !important;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.45) !important;
}

.role-lead-outcome {
  color: #93C5FD !important;
}

.role-points-list li {
  color: #E2E8F0 !important;
}

.role-preview-card {
  background: rgba(1, 27, 76, 0.75) !important;
  border: 1px solid rgba(134, 165, 212, 0.22) !important;
}

.role-preview-header {
  border-bottom: 1px solid rgba(134, 165, 212, 0.2) !important;
}

/* 11. SECURITY & HOSTING CARDS */
.security-card {
  background: rgba(2, 35, 91, 0.7) !important;
  border: 1px solid rgba(134, 165, 212, 0.24) !important;
  color: #FFFFFF !important;
}

.security-card:hover {
  border-color: #38BDF8 !important;
  background: rgba(3, 45, 115, 0.85) !important;
}

.security-card h3 {
  color: #FFFFFF !important;
}

.security-card p {
  color: #C9D8F1 !important;
}

.security-card-icon {
  background: rgba(255, 255, 255, 0.08) !important;
  color: #93C5FD !important;
}

.security-disclaimer {
  background: rgba(1, 27, 76, 0.65) !important;
  border: 1px solid rgba(134, 165, 212, 0.2) !important;
  color: #CBD5E1 !important;
}

/* 12. MOBILE APPS SHOWCASE & SMARTPHONE PREVIEW */
.mobile-apps-section {
  background: linear-gradient(180deg, #011B4C 0%, #001D51 50%, #012561 100%) !important;
}

.app-details-title {
  color: #FFFFFF !important;
}

.app-details-desc {
  color: #C9D8F1 !important;
}

.app-check-item {
  color: #E2E8F0 !important;
}

.store-pill {
  background: rgba(2, 35, 91, 0.75) !important;
  border: 1px solid rgba(134, 165, 212, 0.3) !important;
}

.store-text strong {
  color: #FFFFFF !important;
}

.store-text small {
  color: #86A5D4 !important;
}

.mobile-tab-btn {
  background: rgba(2, 35, 91, 0.7) !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
  color: #E2E8F0 !important;
}

.mobile-tab-btn.active {
  background: #2563EB !important;
  color: #FFFFFF !important;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.45) !important;
}

/* 13. WORKFLOW STEPS GRID */
.visual-workflow-section {
  background: linear-gradient(180deg, #012561 0%, #001D51 50%, #011B4C 100%) !important;
}

.workflow-step-card {
  background: rgba(2, 35, 91, 0.7) !important;
  border: 1px solid rgba(134, 165, 212, 0.24) !important;
}

.workflow-step-title {
  color: #FFFFFF !important;
}

.workflow-step-desc {
  color: #C9D8F1 !important;
}

.workflow-num {
  color: #38BDF8 !important;
}

.workflow-badge {
  background: rgba(1, 27, 76, 0.8) !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
  color: #E2E8F0 !important;
}

.workflow-connector-arrow {
  background: #011B4C !important;
  border: 1px solid rgba(134, 165, 212, 0.3) !important;
  color: #93C5FD !important;
}

/* 14. MOBILE NAVIGATION DRAWER */
.mobile-nav-drawer {
  background-color: #011B4C !important;
  border-top: 1px solid rgba(134, 165, 212, 0.22) !important;
}

.mobile-nav-list a {
  color: #FFFFFF !important;
  border-bottom: 1px solid rgba(134, 165, 212, 0.16) !important;
}

.mobile-nav-list a:hover {
  color: #93C5FD !important;
}

.mobile-partner-badge {
  background: rgba(2, 35, 91, 0.7) !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
}

.mobile-partner-badge strong {
  color: #FFFFFF !important;
}

/* 15. MODALS & POPUPS */
dialog.custom-dialog,
.module-modal-content {
  background: #011B4C !important;
  border: 1px solid rgba(134, 165, 212, 0.3) !important;
  color: #FFFFFF !important;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6) !important;
}

.dialog-header,
.modal-header {
  border-bottom: 1px solid rgba(134, 165, 212, 0.2) !important;
}

.dialog-header h3,
.modal-title {
  color: #FFFFFF !important;
}

.modal-subtitle {
  color: #C9D8F1 !important;
}

.dialog-close-btn,
.modal-close-btn {
  color: #86A5D4 !important;
}

.dialog-close-btn:hover,
.modal-close-btn:hover {
  color: #FFFFFF !important;
  background: rgba(255, 255, 255, 0.1) !important;
}

.modal-footer {
  background: rgba(1, 20, 56, 0.85) !important;
  border-top: 1px solid rgba(134, 165, 212, 0.2) !important;
}

.modal-preview-screen {
  background: rgba(2, 35, 91, 0.65) !important;
  border: 1px solid rgba(134, 165, 212, 0.2) !important;
}

.modal-features-list h4 {
  color: #FFFFFF !important;
}

.modal-feature-item {
  color: #E2E8F0 !important;
}

/* 16. GLOBAL SECONDARY BUTTON OVERRIDE ON DARK SURFACES */
.btn--secondary {
  background: rgba(255, 255, 255, 0.1) !important;
  color: #FFFFFF !important;
  border: 1px solid rgba(255, 255, 255, 0.24) !important;
  backdrop-filter: blur(8px) !important;
}

.btn--secondary:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  border-color: rgba(255, 255, 255, 0.45) !important;
  color: #FFFFFF !important;
  transform: translateY(-2px);
}

.btn--secondary svg {
  color: #FFFFFF !important;
}

/* 17. MODULE FILTER PILLS BAR */
.module-filter-btn {
  background: rgba(2, 35, 91, 0.7) !important;
  border: 1px solid rgba(134, 165, 212, 0.25) !important;
  color: #E2E8F0 !important;
}

.module-filter-btn:hover {
  border-color: #38BDF8 !important;
  color: #FFFFFF !important;
}

.module-filter-btn.active {
  background: linear-gradient(135deg, #1D68D8 0%, #6F3B9C 45%, #F67C1A 100%) !important;
  color: #FFFFFF !important;
  border-color: transparent !important;
}
"""

with open(css_path, 'a', encoding='utf-8') as f:
    f.write(full_theme_css)

print("Full website theme successfully appended to src/index.css")
