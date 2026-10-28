import React from 'react';
import { Link } from 'react-router-dom';
import { 
  School, BookOpen, CheckCircle2, Award, 
  CreditCard, FileSpreadsheet, ArrowRight, ShieldCheck, Check 
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function WestBengalSchools() {
  const faqs = [
    { question: 'Does Pragya support WBBSE Madhyamik and WBCHSE HS curricula?', answer: 'Yes, built-in subject catalogues support Madhyamik 7-subject combinations and HS Science, Arts, and Commerce streams.' },
    { question: 'Does it support APAAR preparation for WB schools?', answer: 'Yes, student demographic checks, guardian consent logging, PEN verification, and CSV export for official submission are fully supported.' },
    { question: 'Does it support regional language medium schools?', answer: 'Yes, Pragya accommodates Bengali, English, and Hindi medium curricula with appropriate language subject codes.' },
    { question: 'Does Pragya claim official board endorsement?', answer: 'No, Pragya provides administrative software tailored to board catalogues without claiming government agency affiliation or endorsement.' }
  ];

  const boardPills = [
    { name: "WBBSE Madhyamik", desc: "Classes V-X • 7 Core Subjects • 1st, 2nd, 3rd Summative Assessment Rules", color: "badge--blue" },
    { name: "WBCHSE Higher Secondary", desc: "Classes XI-XII • Science, Commerce & Humanities Stream Electives", color: "badge--violet" },
    { name: "CBSE & ICSE Dual Stream", desc: "Schools running national curriculum alongside state catalogues", color: "badge--cyan" },
    { name: "APAAR & UDISE+ Format", desc: "PEN mapping and student demographic validation across West Bengal", color: "badge--green" }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-live-pill" style={{ margin: '0 auto 16px' }}>
              <span className="hero-live-dot" />
              <span>Tailored for West Bengal Educational Institutions</span>
            </div>
            <div className="eyebrow"><span className="eyebrow-dot" />REGIONAL CATALOGUE SUPPORT</div>
            <h1 className="page-hero-title">School ERP Built Around West Bengal School Workflows.</h1>
            <p className="page-hero-desc">
              Pre-loaded with WBBSE and WBCHSE subject catalogues, Summative assessment grading, INR counter receipts, and APAAR readiness tracking.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Book a West Bengal School Demo</Link>
              <Link to="/features" className="btn btn--secondary btn--lg">Explore All Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Curriculum & Board Grid */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />BOARD ALIGNMENT</div>
            <h2>Built for State &amp; National Curricula</h2>
            <p>Ready to deploy for Madhyamik, Higher Secondary, and CBSE/ICSE institutions.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {boardPills.map((b, i) => (
              <div key={i} style={{ background: 'var(--color-soft-canvas)', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-lg)', padding: '24px 20px', display: 'flex', flexDirection: 'column' }}>
                <span className={`badge ${b.color}`} style={{ alignSelf: 'flex-start', marginBottom: '12px' }}>{b.name}</span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--color-ink)', marginBottom: '8px' }}>{b.name} Integration</strong>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-600)', margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Feature Cards with Icons */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />WEST BENGAL FEATURES</div>
            <h2>Every Daily School Workflow, Simplified</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <BookOpen size={28} />
              </div>
              <h3>WBBSE Subject Catalogues</h3>
              <p>Pre-configured First Language (Bengali/English), Second Language, Mathematics, Physical Science, Life Science, History, and Geography with Summative weights.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <Award size={28} />
              </div>
              <h3>WBCHSE HS Stream Electives</h3>
              <p>Configure Science (Phys, Chem, Bio/Comp), Commerce (Accts, BST, Econ), and Humanities stream electives and compulsory languages seamlessly.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(0, 205, 229, 0.12)', color: '#028394' }}>
                <CheckCircle2 size={28} />
              </div>
              <h3>APAAR Readiness &amp; PEN Validation</h3>
              <p>Identify missing parental consent and PEN records before preparing government submission sheets, avoiding portal rejection.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(5, 150, 105, 0.08)', color: 'var(--color-success)' }}>
                <CreditCard size={28} />
              </div>
              <h3>INR Fee Counter Receipts</h3>
              <p>Collect fees at the school counter with instant thermal or A4 printed receipts, sibling concessions, and real-time cash drawer tallying.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>West Bengal Schools FAQs</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="See Pragya Applied to Your School Structure."
        subtitle="Whether your school is planning to digitise student records, improve fee administration or organise academic workflows, a guided demonstration can focus on the way your institution actually works."
        buttonText="Request a West Bengal School Walkthrough"
      />
    </>
  );
}
