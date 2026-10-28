import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck, 
  FileSpreadsheet, Users, FileCheck, AlertTriangle, DownloadCloud 
} from 'lucide-react';
import ApaarTracker from '../components/ApaarTracker';
import VisualWorkflow from '../components/VisualWorkflow';
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
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              APAAR READINESS SOFTWARE FOR SCHOOLS
            </div>
            <h1 className="page-hero-title">Make APAAR Preparation Simpler, Student by Student.</h1>
            <p className="page-hero-desc">
              Spot missing parental consent, detect Aadhaar spelling mismatches, and verify PEN numbers before submitting records to the government portal.
            </p>
            <div className="page-hero-ctas">
              <a href="#tracker" className="btn btn--primary btn--lg">Open Live Readiness Tracker</a>
              <Link to="/contact" className="btn btn--secondary btn--lg">Book an APAAR Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Visual Journey */}
      <VisualWorkflow />

      {/* Interactive Tracker Console */}
      <section className="section section--soft" id="tracker">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              INTERACTIVE READINESS CONSOLE
            </div>
            <h2>Live Student Readiness Verification Table</h2>
            <p>
              Simulate how class teachers and administrative clerks audit consent, name match, and PEN numbers in real time.
            </p>
          </div>

          <ApaarTracker showJourney={true} />
        </div>
      </section>

      {/* What Pragya Does vs Official System */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              RESPONSIBILITY MATRIX
            </div>
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

      {/* Visual Role Cards */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              COLLABORATIVE TEAMS
            </div>
            <h2>Built for School Teams, Not Just Data Entry</h2>
          </div>

          <div className="guardrails-row">
            <div className="guardrail-card">
              <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>🏛️</div>
              <h4>School Administrators</h4>
              <p>Review overall school readiness across grades, resolve format errors, and assign record corrections before export.</p>
              <span className="badge badge--slate">Batch CSV Exporter</span>
            </div>
            <div className="guardrail-card">
              <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>👩‍🏫</div>
              <h4>Class Teachers</h4>
              <p>Identify missing parental consent forms and verify student demographic details directly from their class register.</p>
              <span className="badge badge--slate">Consent Tracker</span>
            </div>
            <div className="guardrail-card">
              <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>👨‍💼</div>
              <h4>Principals &amp; Leaders</h4>
              <p>Check school-wide progress and submission status without consolidating dozens of departmental spreadsheets.</p>
              <span className="badge badge--slate">Readiness KPI</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              QUESTIONS
            </div>
            <h2>Frequently Asked Questions About APAAR</h2>
          </div>
          <FaqAccordion items={apaarFaqs} />
        </div>
      </section>

      <BottomCta
        title="Replace Follow-Up Spreadsheets with a Readiness View."
        subtitle="See the information that is complete, the records that still need correction and the students whose status must be checked externally. Book a guided demonstration of the APAAR workflow."
        buttonText="Book an APAAR Readiness Demo"
      />
    </>
  );
}
