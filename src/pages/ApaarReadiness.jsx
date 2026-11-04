import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck, 
  FileSpreadsheet, Users, FileCheck, AlertTriangle, DownloadCloud,
  Award, Compass, GitFork, UserCheck, FileText, CreditCard, CloudLightning
} from 'lucide-react';
import ApaarCardMockup from '../components/ApaarCardMockup';
import ApaarTracker from '../components/ApaarTracker';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function ApaarReadiness() {
  const apaarFaqs = [
    {
      question: 'Does Pragya generate APAAR IDs?',
      answer: 'No. Pragya prepares, tracks and validates school records; authorised government systems generate IDs via UDISE+ and DigiLocker.'
    },
    {
      question: 'What is PEN and why is it needed?',
      answer: 'PEN is the Permanent Education Number assigned under UDISE+. Pragya matches school admission IDs with PEN so student history remains consistent.'
    },
    {
      question: 'Can the school track physical parental consent forms?',
      answer: 'Yes. Pragya’s readiness workflow logs parent consent date, physical form number, guardian signature status and uploaded slip.'
    },
    {
      question: 'Does Pragya connect directly to DigiLocker or UDISE+ today?',
      answer: 'Direct API integration is on the product roadmap. Today, schools use Pragya to export pre-validated CSV sheets that match portal formatting 100%.'
    },
    {
      question: 'Can we export class-wise CSV data?',
      answer: 'Yes. You can filter by class, section or readiness status and export verified rows with 1 click.'
    }
  ];

  return (
    <div className="apaar-page-wrapper">
      {/* 1. HERO SECTION (Matching Official Portal Layout + Pragya Light Theme) */}
      <section className="apaar-gov-hero">
        <div className="container">
          <div className="apaar-gov-hero-grid">
            {/* Left Column: Heading, Subtext, CTAs */}
            <div className="apaar-gov-hero-text">
              <div className="apaar-gov-eyebrow">
                AUTOMATED PERMANENT ACADEMIC ACCOUNT REGISTRY
              </div>
              <h1 className="apaar-gov-title">
                One Nation, One Student ID
              </h1>
              <p className="apaar-gov-desc">
                Your gateway to a seamless, digital academic journey. APAAR ID helps in a seamless integration of skills and experience into a credit-based system.
              </p>
              
              <div className="apaar-hero-actions">
                <a href="#how-to-get" className="apaar-link-arrow">
                  <span>Learn More</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <a href="#tracker" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  School Readiness Console
                </a>
              </div>
            </div>

            {/* Right Column: Official Visual with Arch, Rays, Student & Floating Badges */}
            <div className="apaar-gov-hero-visual">
              <div className="apaar-hero-visual-frame">
                <img
                  src="/apaar-hero-full-student.png"
                  alt="Aarav Sharma - Registered APAAR ID Holder"
                  className="apaar-hero-student-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT APAAR SECTION (Matching Reference Image 2) */}
      <section className="apaar-about-section" id="about">
        <div className="container">
          <div className="apaar-about-grid">
            {/* Left: Layered Official Physical Card Mockup */}
            <div className="apaar-about-card-col">
              <ApaarCardMockup
                name="Aarav Sharma"
                dob="14 April 2014"
                gender="Male"
                idNumber="9154 5678 3420"
                showStacked={true}
              />
            </div>

            {/* Right: Explanatory Copy + Resources / Learn How CTAs */}
            <div className="apaar-about-text">
              <h2>About <span>APAAR</span></h2>
              <p>
                APAAR empowers students to accumulate and store their academic accomplishments, facilitating seamless transitions between institutions for the pursuit of further education. The APAAR ID simplifies the processes of credit recognition and transfer right from the school level, thereby streamlining academic progression and recognition of prior learning.
              </p>
              
              <div className="apaar-about-actions">
                <a href="#tracker" className="btn btn--primary" style={{ background: '#059669', borderColor: '#059669', borderRadius: '6px' }}>
                  Resources
                </a>
                <a href="#how-to-get" className="apaar-link-arrow">
                  <span>Learn How to</span>
                  <span className="arrow-sym">⟶</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APAAR BENEFITS SECTION (Matching Reference Image 3) */}
      <section className="apaar-benefits-section" id="benefits">
        <div className="container">
          <div className="apaar-benefits-header">
            <h2>APAAR <span>Benefits</span></h2>
          </div>

          <div className="apaar-benefits-layout">
            {/* Left: 3 Benefit Pills */}
            <div className="apaar-benefits-left">
              <div className="apaar-benefit-pill">
                <div className="apaar-benefit-icon-circle apaar-benefit-icon-circle--green">
                  <Award size={22} />
                </div>
                <div>
                  <strong>Recognize learning achievements</strong>
                </div>
              </div>

              <div className="apaar-benefit-pill">
                <div className="apaar-benefit-icon-circle apaar-benefit-icon-circle--blue">
                  <Compass size={22} />
                </div>
                <div>
                  <strong>Allows student to choose own learning path</strong>
                </div>
              </div>

              <div className="apaar-benefit-pill">
                <div className="apaar-benefit-icon-circle apaar-benefit-icon-circle--purple">
                  <GitFork size={22} />
                </div>
                <div>
                  <strong>Enable student mobility and academic flexibility</strong>
                </div>
              </div>
            </div>

            {/* Center: Floating Single Front Physical APAAR Card */}
            <div className="apaar-benefits-center">
              <ApaarCardMockup
                name="Aarav Sharma"
                dob="14 April 2014"
                gender="Male"
                idNumber="9154 5678 3420"
                showStacked={false}
              />
            </div>

            {/* Right: Student Academic Mobility Illustration */}
            <div className="apaar-benefits-right">
              <div className="apaar-mobility-frame">
                <img
                  src="/apaar-mobility-graduate.png"
                  alt="Student Academic Mobility and Credit Flexibility Across India"
                  className="apaar-mobility-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW TO GET THE APAAR SECTION (Matching Reference Image 4) */}
      <section className="apaar-how-section" id="how-to-get">
        <div className="container">
          <div className="apaar-how-header">
            <h2>How to Get The <span>APAAR</span></h2>
            <p>Are you a student? Be a part of the APAAR by creating your Unique ID</p>
          </div>

          <div className="apaar-stepper-container">
            {/* Dashed connector line across all 4 nodes */}
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              {/* Step 01 */}
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <Users size={22} />
                </div>
                <h4>Educating Parents</h4>
                <p>Parents visit school to learn about APAAR ID</p>
              </div>

              {/* Step 02 */}
              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <FileText size={22} />
                </div>
                <h4>Consent Submitted</h4>
                <p>Parents fill up consent form voluntarily for APAAR ID creation</p>
              </div>

              {/* Step 03 */}
              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <CreditCard size={22} />
                </div>
                <h4>APAAR ID Generated</h4>
                <p>UDISE system generates APAAR ID against PEN ID of student</p>
              </div>

              {/* Step 04 */}
              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <CloudLightning size={22} />
                </div>
                <h4>Uploaded to DigiLocker</h4>
                <p>APAAR ID is pushed into student's DigiLocker Account</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRAGYA LIVE READINESS CONSOLE (School Verification Tooling) */}
      <section className="section section--soft" id="tracker">
        <div className="container">
          <div className="section-header">
            <h2>Live Student Readiness Verification Table</h2>
            <p>
              Simulate how class teachers and administrative clerks audit consent, name match, and PEN numbers before official government portal submission.
            </p>
          </div>

          <ApaarTracker showJourney={false} />
        </div>
      </section>

      {/* 6. WHAT PRAGYA DOES VS OFFICIAL GOVERNMENT SYSTEM */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Pragya Pre-Validation vs Official Government Systems</h2>
            <p>
              Pragya guarantees your records are accurate and complete before submission. The government portal validates Aadhaar OTP and issues the digital ID.
            </p>
          </div>

          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <div className="feature-card" style={{ borderColor: 'var(--color-blue)', background: 'linear-gradient(180deg, #FFFFFF, var(--color-soft-canvas))' }}>
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.1)', color: 'var(--color-blue)' }}>
                <CheckCircle2 size={28} />
              </div>
              <h3 style={{ color: 'var(--color-blue)' }}>What Pragya Does (Your School)</h3>
              <ul className="role-points-list" style={{ marginTop: '16px' }}>
                <li><CheckCircle2 size={18} color="var(--color-success)" /> <span>Organises student demographic records &amp; parent consent slips</span></li>
                <li><CheckCircle2 size={18} color="var(--color-success)" /> <span>Validates 12-digit format and PEN uniqueness</span></li>
                <li><CheckCircle2 size={18} color="var(--color-success)" /> <span>Highlights name spelling differences vs Aadhaar documents</span></li>
                <li><CheckCircle2 size={18} color="var(--color-success)" /> <span>Generates 1-click clean CSV/Excel upload sheets</span></li>
                <li><CheckCircle2 size={18} color="var(--color-success)" /> <span>Maintains a permanent institutional audit trail</span></li>
              </ul>
            </div>

            <div className="feature-card" style={{ borderColor: 'var(--color-violet)', background: 'linear-gradient(180deg, #FFFFFF, #FAF5FF)' }}>
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.1)', color: 'var(--color-violet)' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ color: 'var(--color-violet)' }}>What Official Government Systems Do</h3>
              <ul className="role-points-list" style={{ marginTop: '16px' }}>
                <li><CheckCircle2 size={18} color="var(--color-violet)" /> <span>UDISE+ database verification and PEN validation</span></li>
                <li><CheckCircle2 size={18} color="var(--color-violet)" /> <span>Aadhaar OTP authorization through UIDAI / DigiLocker</span></li>
                <li><CheckCircle2 size={18} color="var(--color-violet)" /> <span>Official 12-digit APAAR ID generation &amp; card issuing</span></li>
                <li><CheckCircle2 size={18} color="var(--color-violet)" /> <span>DigiLocker storage of student credential</span></li>
              </ul>
              <div style={{ marginTop: '16px', fontSize: '0.8125rem', color: 'var(--color-slate-500)', borderTop: '1px solid var(--color-slate-200)', paddingTop: '10px' }}>
                *Direct DigiLocker/UDISE+ API connectivity is planned on our product roadmap.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions About APAAR</h2>
          </div>
          <FaqAccordion items={apaarFaqs} />
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <BottomCta
        title="Replace Follow-Up Spreadsheets with a Readiness View."
        subtitle="See the information that is complete, the records that still need correction and the students whose status must be checked externally. Book a guided demonstration of the APAAR workflow."
        buttonText="Book an APAAR Readiness Demo"
      />
    </div>
  );
}
