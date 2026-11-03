apaar_css = """

/* ==========================================================================
   OFFICIAL APAAR PORTAL THEMED SECTIONS (PRAGYA PALETTE)
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

.apaar-gov-hero-left .eyebrow {
  margin-bottom: 12px;
  color: #0284C7;
  font-weight: 750;
  letter-spacing: 0.05em;
  font-size: 0.775rem;
}

.apaar-gov-hero-title {
  font-size: 2.75rem;
  font-weight: 850;
  color: var(--color-ink);
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin-bottom: 16px;
}

.apaar-gov-hero-desc {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.6;
  max-width: 540px;
  margin-bottom: 28px;
}

.apaar-hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.apaar-hero-link-arrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.95rem;
  font-weight: 750;
  color: #145EFF;
  transition: all 0.2s ease;
  cursor: pointer;
}

.apaar-hero-link-arrow:hover {
  color: #0A3DB8;
  transform: translateX(3px);
}

/* Hero Right Visual Column */
.apaar-gov-hero-right {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.apaar-stat-counter-pill {
  position: absolute;
  top: -16px;
  right: 12px;
  background: #FFFFFF;
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  padding: 8px 14px;
  box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10;
}

.apaar-stat-val-badge {
  background: #EFF6FF;
  color: #1D68D8;
  font-size: 0.95rem;
  font-weight: 850;
  padding: 3px 8px;
  border-radius: 5px;
  border: 1px solid #BFDBFE;
}

.apaar-stat-label-box {
  display: flex;
  flex-direction: column;
}

.apaar-stat-label-box strong {
  font-size: 0.775rem;
  color: var(--color-ink);
  line-height: 1.2;
}

.apaar-stat-label-box small {
  font-size: 0.675rem;
  color: #64748B;
}

/* Arch & Student Figure */
.apaar-hero-arch-container {
  position: relative;
  width: 320px;
  height: 380px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.apaar-hero-arch-shape {
  position: absolute;
  bottom: 0;
  width: 280px;
  height: 340px;
  border-top-left-radius: 140px;
  border-top-right-radius: 140px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background: linear-gradient(180deg, #F59E0B 0%, #D97706 100%);
  box-shadow: 0 16px 36px -8px rgba(217, 119, 6, 0.35);
  overflow: hidden;
}

/* Decorative Burst Rays */
.apaar-hero-rays {
  position: absolute;
  top: 10px;
  left: 20px;
  width: 60px;
  height: 60px;
  pointer-events: none;
}

.apaar-ray {
  position: absolute;
  background: #6366F1;
  border-radius: 3px;
}
.apaar-ray--1 { width: 18px; height: 5px; transform: rotate(-25deg); top: 10px; left: 0; }
.apaar-ray--2 { width: 22px; height: 5px; transform: rotate(15deg); top: 0; left: 24px; }
.apaar-ray--3 { width: 16px; height: 5px; transform: rotate(50deg); top: 12px; left: 45px; }

/* Student Card inside Arch */
.apaar-hero-student-art {
  position: relative;
  z-index: 2;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.apaar-hero-student-avatar {
  width: 170px;
  height: 220px;
  border-radius: 80px 80px 10px 10px;
  background: #FFFFFF;
  border: 4px solid #FFFFFF;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

/* Floating Student Identity Tag */
.apaar-student-speech-pill {
  position: absolute;
  bottom: 24px;
  left: -20px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: 0 10px 24px -4px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10;
  white-space: nowrap;
}

.speech-avatar-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #EFF6FF;
  border: 1.5px solid #145EFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 750;
  color: #145EFF;
  flex-shrink: 0;
}

.speech-text-wrap strong {
  display: block;
  font-size: 0.775rem;
  font-weight: 800;
  color: var(--color-ink);
  line-height: 1.2;
}

.speech-text-wrap small {
  display: block;
  font-size: 0.675rem;
  color: #64748B;
  margin-top: 1px;
}


/* 2. ABOUT APAAR SECTION */
.apaar-about-section {
  padding: 64px 0;
  background: #FFFFFF;
  border-bottom: 1px solid var(--color-slate-200);
}

.apaar-about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 56px;
}

.apaar-about-text h2 {
  font-size: 2.25rem;
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
  gap: 16px;
  flex-wrap: wrap;
}

/* Layered Physical Card Mockup */
.apaar-card-stack-wrapper {
  position: relative;
  width: 100%;
  max-width: 440px;
  height: 280px;
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
  width: 370px;
  height: 232px;
  border-radius: 8px;
  padding: 14px 16px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Back Layered Card (Pragya Violet-Blue Gradient) */
.apaar-card-physical--back {
  top: 34px;
  left: 48px;
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

.back-emblem-hi {
  font-size: 0.725rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.back-emblem-en {
  font-size: 0.65rem;
  font-weight: 600;
  opacity: 0.9;
}

.apaar-back-center {
  text-align: center;
  margin: 10px 0;
}

.apaar-back-logo {
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  color: #FFFFFF;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.apaar-back-sub {
  font-size: 0.675rem;
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
  padding-top: 6px;
}

/* Front Physical White Plastic Card */
.apaar-card-physical--front {
  top: 10px;
  left: 10px;
  background: #FFFFFF;
  border: 1px solid #CBD5E1;
  box-shadow: 0 18px 38px -8px rgba(15, 23, 42, 0.14), 0 2px 6px rgba(0, 0, 0, 0.04);
  transform: rotate(-2deg);
  z-index: 3;
}

.apaar-card-physical--front:hover {
  transform: rotate(0deg) translateY(-4px);
  box-shadow: 0 24px 44px -8px rgba(15, 23, 42, 0.2);
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
  font-size: 0.55rem;
  font-weight: 700;
  color: #0F172A;
  line-height: 1.1;
}

.gov-en {
  font-size: 0.525rem;
  font-weight: 700;
  color: #0F172A;
  line-height: 1.1;
}

.gov-in {
  font-size: 0.45rem;
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
  width: 38px;
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
  margin-bottom: 10px;
}

.apaar-student-photo-box {
  position: relative;
  flex-shrink: 0;
}

.student-photo-frame {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 2px solid #E2E8F0;
  overflow: hidden;
  background: #F1F5F9;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-size: 0.65rem;
  font-weight: 800;
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
  font-size: 0.7rem;
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
  padding: 3px;
  border: 1px solid #E2E8F0;
  border-radius: 5px;
}

.apaar-card-id-number {
  text-align: center;
  border-top: 1px dashed #E2E8F0;
  padding-top: 6px;
  font-size: 1.05rem;
  font-weight: 850;
  color: #0F172A;
  letter-spacing: 0.12em;
  font-family: 'SF Pro Display', ui-sans-serif, system-ui, sans-serif;
}


/* 3. APAAR BENEFITS SECTION */
.apaar-benefits-section {
  padding: 64px 0;
  background: #F8FAFC;
  border-bottom: 1px solid var(--color-slate-200);
}

.apaar-benefits-layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

.apaar-mobility-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 22px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 320px;
  text-align: center;
  position: relative;
}

.mobility-degree-arc {
  width: 100%;
  height: 50px;
  margin-bottom: 12px;
}

.mobility-milestones {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
}

.mobility-step-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  background: #F8FAFC;
  border-radius: 6px;
  border: 1px solid #E2E8F0;
}

.mobility-step-item .badge {
  flex-shrink: 0;
}

.mobility-step-item span {
  font-size: 0.775rem;
  font-weight: 650;
  color: var(--color-ink);
}


/* 4. HOW TO GET THE APAAR SECTION */
.apaar-how-section {
  padding: 64px 0 72px;
  background: #FFFFFF;
  border-bottom: 1px solid var(--color-slate-200);
}

.apaar-how-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 48px;
}

.apaar-how-header h2 {
  font-size: 2.25rem;
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
  max-width: 1080px;
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
  background: #FFFFFF;
  border: 2px solid #059669;
  color: #059669;
  font-size: 0.95rem;
  font-weight: 850;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(5, 150, 105, 0.15);
  margin-bottom: 18px;
  transition: all 0.2s ease;
}

.how-step-node:hover .step-circle-badge {
  background: #059669;
  color: #FFFFFF;
  transform: scale(1.08);
}

.step-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: #F1F5F9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-ink);
  margin-bottom: 12px;
}

.how-step-node h4 {
  font-size: 0.95rem;
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
"""

with open('src/index.css', 'a', encoding='utf-8') as f:
    f.write(apaar_css)

print("Appended APAAR CSS successfully")
