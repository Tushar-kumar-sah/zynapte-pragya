import sys

with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

marker = '/* ==========================================================================\n   OFFICIAL APAAR PORTAL THEMED SECTIONS'
if marker in css:
    before = css[:css.find(marker)]
else:
    # find by fallback
    idx = css.find('OFFICIAL APAAR PORTAL THEMED SECTIONS')
    before = css[:idx-50]

new_apaar_css = '''/* ==========================================================================
   OFFICIAL APAAR PORTAL THEMED SECTIONS (PRAGYA PALETTE & CRISP EDGES)
   ========================================================================== */

/* 1. HERO SECTION */
.apaar-gov-hero {
  padding: 56px 0 64px;
  background: radial-gradient(circle at 80% 20%, rgba(20, 94, 255, 0.04) 0%, transparent 60%),
              radial-gradient(circle at 10% 80%, rgba(116, 45, 218, 0.03) 0%, transparent 50%),
              #FFFFFF;
  border-bottom: 1px solid var(--color-slate-200);
  position: relative;
  overflow: hidden;
}

.apaar-gov-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 48px;
}

.apaar-gov-hero-text {
  max-width: 580px;
}

.apaar-gov-eyebrow {
  margin-bottom: 12px;
  color: #059669;
  font-weight: 800;
  letter-spacing: 0.05em;
  font-size: 0.8125rem;
  text-transform: uppercase;
}

.apaar-gov-title {
  font-size: 2.85rem;
  font-weight: 850;
  color: var(--color-ink);
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin-bottom: 16px;
}

.apaar-gov-desc {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 28px;
}

.apaar-hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.apaar-link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 750;
  color: var(--color-ink);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.apaar-link-arrow .arrow-sym {
  font-size: 1.15rem;
  transition: transform 0.2s ease;
}

.apaar-link-arrow:hover {
  color: var(--color-blue);
}

.apaar-link-arrow:hover .arrow-sym {
  transform: translateX(4px);
}

/* Hero Right Visual Column */
.apaar-gov-hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.apaar-hero-visual-frame {
  position: relative;
  max-width: 480px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.apaar-hero-student-img {
  width: 100%;
  height: auto;
  max-height: 380px;
  object-fit: contain;
  filter: drop-shadow(0 14px 30px rgba(0, 0, 0, 0.08));
}


/* 2. ABOUT APAAR SECTION */
.apaar-about-section {
  padding: 64px 0;
  background: #F8FAFC;
  border-bottom: 1px solid var(--color-slate-200);
}

.apaar-about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 56px;
}

.apaar-about-card-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.apaar-about-text h2 {
  font-size: 2.35rem;
  font-weight: 850;
  color: var(--color-ink);
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.apaar-about-text h2 span {
  color: #059669;
}

.apaar-about-text p {
  font-size: 0.975rem;
  color: #475569;
  line-height: 1.65;
  margin-bottom: 24px;
}

.apaar-about-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}


/* PHYSICAL APAAR CARD COMPONENT STYLES */
.apaar-card-stack-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 255px;
  margin: 0 auto;
}

.apaar-card-ambient-glow {
  position: absolute;
  inset: -10px;
  background: radial-gradient(circle at 40% 50%, rgba(20, 94, 255, 0.08) 0%, rgba(5, 150, 105, 0.05) 50%, transparent 70%);
  filter: blur(20px);
  z-index: 1;
}

.apaar-card-physical {
  position: absolute;
  width: 360px;
  height: 226px;
  border-radius: 8px;
  padding: 12px 14px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Back Layered Card (Pragya Violet-Blue/Teal Gradient) */
.apaar-card-physical--back {
  top: 24px;
  left: 36px;
  background: linear-gradient(135deg, #0284C7 0%, #059669 100%);
  box-shadow: 0 16px 32px -6px rgba(2, 132, 199, 0.28);
  transform: rotate(4deg);
  z-index: 2;
  color: #FFFFFF;
}

.apaar-back-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.apaar-back-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.emblem-symbol-svg {
  display: flex;
  align-items: center;
}

.back-emblem-hi {
  font-size: 0.725rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.back-emblem-en {
  font-size: 0.625rem;
  font-weight: 600;
  opacity: 0.9;
}

.apaar-back-center {
  text-align: center;
  margin: 8px 0;
}

.apaar-back-logo {
  font-size: 1.85rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  color: #FFFFFF;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.apaar-back-sub {
  font-size: 0.65rem;
  font-weight: 750;
  letter-spacing: 0.06em;
  opacity: 0.95;
}

.apaar-back-footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.625rem;
  opacity: 0.8;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  padding-top: 5px;
}

/* Front Physical White Plastic Card */
.apaar-card-physical--front {
  top: 0;
  left: 0;
  background: #FFFFFF;
  border: 1px solid #CBD5E1;
  box-shadow: 0 18px 36px -8px rgba(15, 23, 42, 0.14), 0 2px 6px rgba(0, 0, 0, 0.04);
  transform: rotate(-2deg);
  z-index: 3;
}

.apaar-card-physical--front:hover {
  transform: rotate(0deg) translateY(-3px);
  box-shadow: 0 22px 42px -8px rgba(15, 23, 42, 0.18);
}

.apaar-card-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
}

.apaar-gov-logos {
  display: flex;
  align-items: center;
  gap: 8px;
}

.emblem-crest {
  color: #1E293B;
  display: flex;
  align-items: center;
}

.apaar-gov-text {
  display: flex;
  flex-direction: column;
}

.gov-hi {
  font-size: 0.525rem;
  font-weight: 700;
  color: #0F172A;
  line-height: 1.1;
}

.gov-en {
  font-size: 0.5rem;
  font-weight: 700;
  color: #0F172A;
  line-height: 1.1;
}

.gov-in {
  font-size: 0.425rem;
  font-weight: 600;
  color: #64748B;
  line-height: 1.1;
}

.apaar-brand-wrap {
  text-align: right;
}

.apaar-tricolor-bar {
  display: flex;
  height: 2.5px;
  width: 36px;
  border-radius: 1px;
  overflow: hidden;
  margin-left: auto;
  margin-bottom: 2px;
}

.tri-saffron { background: #FF9933; width: 33.3%; }
.tri-white { background: #CBD5E1; width: 33.3%; }
.tri-green { background: #138808; width: 33.3%; }

.apaar-brand-title {
  font-size: 0.95rem;
  font-weight: 850;
  color: #059669;
  letter-spacing: 0.04em;
  line-height: 1;
}

.apaar-brand-sub {
  font-size: 0.425rem;
  font-weight: 750;
  color: #475569;
  letter-spacing: 0.03em;
}

.apaar-card-subtitle {
  font-size: 0.5rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.03em;
  color: #334155;
  background: #F8FAFC;
  border-radius: 3px;
  padding: 2px 4px;
  margin-bottom: 8px;
}

.apaar-card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.apaar-student-photo-box {
  position: relative;
  flex-shrink: 0;
}

.student-photo-frame {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: 2px solid #E2E8F0;
  overflow: hidden;
  background: #F1F5F9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.student-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.apaar-verified-dot {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #059669;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #FFFFFF;
}

.apaar-student-info {
  flex: 1;
  min-width: 0;
}

.student-info-name {
  font-size: 0.9rem;
  font-weight: 850;
  color: #0F172A;
  margin-bottom: 4px;
  line-height: 1.2;
}

.student-info-meta .info-row {
  display: flex;
  gap: 6px;
  font-size: 0.675rem;
  line-height: 1.35;
}

.info-lbl {
  color: #64748B;
}

.info-val {
  color: #1E293B;
  font-weight: 700;
}

.apaar-qr-box {
  flex-shrink: 0;
  background: #FFFFFF;
  padding: 2px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
}

.apaar-card-id-number {
  text-align: center;
  border-top: 1px dashed #E2E8F0;
  padding-top: 5px;
  font-size: 1.05rem;
  font-weight: 850;
  color: #0F172A;
  letter-spacing: 0.16em;
  font-family: 'SF Pro Display', ui-sans-serif, system-ui, sans-serif;
}


/* 3. APAAR BENEFITS SECTION */
.apaar-benefits-section {
  padding: 64px 0;
  background: #FFFFFF;
  border-bottom: 1px solid var(--color-slate-200);
}

.apaar-benefits-header h2 {
  font-size: 2.35rem;
  font-weight: 850;
  color: var(--color-ink);
  letter-spacing: -0.02em;
}

.apaar-benefits-header h2 span {
  color: #059669;
}

.apaar-benefits-layout {
  display: grid;
  grid-template-columns: 1fr 1.05fr 0.95fr;
  align-items: center;
  gap: 32px;
  margin-top: 36px;
}

.apaar-benefits-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.apaar-benefit-pill {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 14px 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;
}

.apaar-benefit-pill:hover {
  transform: translateX(4px);
  border-color: #CBD5E1;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
}

.apaar-benefit-icon-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.apaar-benefit-icon-circle--green {
  background: #ECFDF5;
  color: #059669;
}

.apaar-benefit-icon-circle--blue {
  background: #EFF6FF;
  color: #145EFF;
}

.apaar-benefit-icon-circle--purple {
  background: #F5F3FF;
  color: #742DDA;
}

.apaar-benefit-pill strong {
  font-size: 0.875rem;
  font-weight: 750;
  color: var(--color-ink);
  line-height: 1.35;
}

/* Center Column: Floating Card */
.apaar-benefits-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Right Column: Mobility Graphic */
.apaar-benefits-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.apaar-mobility-frame {
  max-width: 320px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.apaar-mobility-img {
  width: 100%;
  height: auto;
  max-height: 280px;
  object-fit: contain;
  filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.06));
}


/* 4. HOW TO GET THE APAAR SECTION */
.apaar-how-section {
  padding: 64px 0 72px;
  background: #F8FAFC;
  border-bottom: 1px solid var(--color-slate-200);
}

.apaar-how-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 48px;
}

.apaar-how-header h2 {
  font-size: 2.35rem;
  font-weight: 850;
  color: var(--color-ink);
  margin-bottom: 10px;
}

.apaar-how-header h2 span {
  color: #059669;
}

.apaar-how-header p {
  font-size: 0.95rem;
  color: #64748B;
  margin: 0;
}

.apaar-stepper-container {
  position: relative;
  max-width: 1040px;
  margin: 0 auto;
}

.apaar-stepper-connector-line {
  position: absolute;
  top: 24px;
  left: 12%;
  right: 12%;
  height: 2px;
  border-top: 2px dashed #CBD5E1;
  z-index: 1;
}

.apaar-how-steps-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.how-step-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 10px;
}

.step-circle-badge {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #059669;
  color: #FFFFFF;
  font-size: 0.95rem;
  font-weight: 850;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);
  margin-bottom: 18px;
  transition: transform 0.2s ease;
}

.how-step-node:hover .step-circle-badge {
  transform: scale(1.08);
}

.step-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-ink);
  margin-bottom: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
}

.how-step-node h4 {
  font-size: 0.975rem;
  font-weight: 800;
  color: var(--color-ink);
  margin-bottom: 6px;
  line-height: 1.25;
}

.how-step-node p {
  font-size: 0.775rem;
  color: #64748B;
  line-height: 1.45;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .apaar-gov-hero-grid,
  .apaar-about-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .apaar-benefits-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .apaar-how-steps-grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 32px;
  }
  .apaar-stepper-connector-line {
    display: none;
  }
}

@media (max-width: 640px) {
  .apaar-how-steps-grid {
    grid-template-columns: 1fr;
    row-gap: 28px;
  }
  .apaar-card-physical {
    width: 320px;
    height: 200px;
  }
}
'''

with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(before.rstrip() + '\n\n' + new_apaar_css)

print('Updated src/index.css successfully')
