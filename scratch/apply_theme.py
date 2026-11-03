# apply_theme.py
import re

css_path = 'src/index.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Let's inspect where .hero and .trust-strip-section are defined and add specific theme overrides
theme_css = """
/* ==========================================================================
   OFFICIAL GRADIENT COLOR PALETTE INTEGRATION
   Sampled Directly from Reference Image:
   - Deep Midnight Navy (#011B4C)
   - Deep Oceanic Navy (#001D51)
   - Royal Sapphire (#012561)
   - Classic Sapphire (#113A7C)
   - Cobalt Azure (#3C68A9)
   - Atmospheric Sky Blue (#86A5D4)
   - Periwinkle Mist (#C9D8F1)
   - Soft Cloud Surface (#EDF3FC)
   ========================================================================== */

/* 1. HERO SECTION GRADIENT BACKDROP */
.hero {
  background: linear-gradient(180deg, #011B4C 0%, #001D51 22%, #012561 48%, #113A7C 78%, #1A4688 100%) !important;
  color: #FFFFFF !important;
  position: relative;
  overflow: hidden;
  padding: 56px 0 48px 0 !important;
}

.hero-content .eyebrow {
  background: rgba(255, 255, 255, 0.12) !important;
  -webkit-text-fill-color: #93C5FD !important;
  color: #93C5FD !important;
  border: 1px solid rgba(147, 197, 253, 0.3) !important;
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
  color: #C9D8F1 !important; /* Periwinkle Mist */
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
  border-top: 1px solid rgba(134, 165, 212, 0.2) !important;
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

/* 2. ERP MOCKUP DEPTH ON NAVY HERO */
.erp-mockup {
  box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.15) !important;
}

.erp-mockup-glow {
  background: radial-gradient(circle at 50% 50%, rgba(60, 104, 169, 0.4), rgba(134, 165, 212, 0.25), transparent 70%) !important;
  filter: blur(36px) !important;
}

/* 3. ACCREDITATION & TRUST STRIP (DEEP NAVY SEAMLESS RIBBON) */
.trust-strip-section {
  background: #011B4C !important;
  border-top: 1px solid rgba(134, 165, 212, 0.2) !important;
  border-bottom: 1px solid rgba(134, 165, 212, 0.18) !important;
  padding: 13px 0 !important;
}

.trust-strip-inner {
  color: #CBD5E1 !important;
}

.trust-item strong {
  color: #FFFFFF !important;
}

.trust-sep {
  color: rgba(134, 165, 212, 0.3) !important;
}

/* 4. SOFT CLOUD & ICE MIST SECTIONS WITH DEEP NAVY TYPOGRAPHY */
.section--white {
  background: linear-gradient(180deg, #F0F5FD 0%, #E8F1FC 50%, #F2F7FD 100%) !important;
}

.section--soft {
  background: #FFFFFF !important;
}

/* High contrast headings using Deep Midnight Navy from reference */
h1, h2, h3, h4, h5, h6 {
  color: #011B4C;
}

.section-header h2 {
  color: #011B4C !important;
}

.section-header p {
  color: #334155 !important;
}

/* Cards across sections */
.core-module-card {
  background: #FFFFFF !important;
  border: 1px solid #D5E2F5 !important;
  box-shadow: 0 2px 8px rgba(1, 27, 76, 0.04) !important;
}

.core-module-card:hover {
  border-color: #3C68A9 !important;
  box-shadow: 0 8px 24px rgba(1, 27, 76, 0.09) !important;
}

.page3-card,
.brochure-payslip-card,
.advantage-feature-card,
.role-showcase-box,
.stat-box-card {
  background: #FFFFFF !important;
  border: 1px solid #D5E2F5 !important;
  box-shadow: 0 4px 16px rgba(1, 27, 76, 0.04) !important;
}

/* 5. LEAD FORM & BOTTOM CTA */
.demo-card-container {
  border: 1px solid #D5E2F5 !important;
  box-shadow: 0 20px 45px -10px rgba(1, 27, 76, 0.12) !important;
}

.demo-card-header {
  background: linear-gradient(135deg, #011B4C 0%, #001D51 45%, #012561 100%) !important;
}

.section-bottom-cta {
  background: linear-gradient(180deg, #011B4C 0%, #00173D 100%) !important;
}

.site-footer {
  background: #001333 !important;
  border-top: 1px solid rgba(134, 165, 212, 0.14) !important;
}

/* 6. INNER PAGE HERO BANNER */
.page-hero {
  background: linear-gradient(180deg, #011B4C 0%, #001D51 35%, #012561 70%, #113A7C 100%) !important;
  color: #FFFFFF !important;
  border-bottom: 1px solid rgba(134, 165, 212, 0.2) !important;
}

.page-hero-title {
  color: #FFFFFF !important;
}

.page-hero-desc {
  color: #C9D8F1 !important;
}
"""

with open(css_path, 'a', encoding='utf-8') as f:
    f.write(theme_css)

print("Theme successfully appended to src/index.css")
