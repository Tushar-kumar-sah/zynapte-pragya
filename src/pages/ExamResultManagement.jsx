import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, CheckCircle2, Lock, FileSpreadsheet, 
  Printer, ArrowRight, ShieldCheck, Check, Sparkles,
  FileText, CheckSquare, BarChart3, Users
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function ExamResultManagement() {
  const faqs = [
    { question: 'Can subject teachers enter marks independently?', answer: 'Yes, subject teachers have login access restricted strictly to their assigned classes and subjects, preventing accidental edits to other disciplines.' },
    { question: 'Does Pragya calculate results and board grades automatically?', answer: 'Yes, automatic percentage calculations, WBBSE 7-point scale (AA, A+, A, B+, B, C, D) and CBSE 9-point grading are executed instantly.' },
    { question: 'Are marks published immediately to students?', answer: 'No, marks remain in Draft status until the Examination Committee and Principal officially apply the moderation lock and authorize batch publication.' },
    { question: 'Can we generate printable report cards in bulk?', answer: 'Yes, Pragya generates multi-page student report cards with school crest, grading scales, attendance percentage, and principal signature box.' }
  ];

  const examCards = [
    {
      title: 'Subject-Teacher Scoped Marks Entry',
      badge: 'Zero Tampering',
      image: '/real-photos/real-exam-writing.jpg',
      tagline: 'Teachers view only their assigned section and subject. Marks remain editable until official moderation deadline.',
      chips: ['Subject Scoping', 'Absent (AB) Flag', 'Draft Auto-Save']
    },
    {
      title: 'Board-Compliant Auto Grading',
      badge: 'CBSE & WBBSE Schemes',
      image: '/real-photos/real-exam-results.jpg',
      tagline: 'Automatic calculation of term percentages, grade point averages (GPA), class rankings, and co-scholastic rubrics.',
      chips: ['WBBSE 7-Point AA-D', 'CBSE 9-Point Scale', 'Pass / Fail Logic']
    },
    {
      title: '1-Click Batch PDF Report Cards',
      badge: 'Bulk Printing',
      image: '/real-photos/real-bangalore-school-coding.jpg',
      tagline: 'Print hundreds of beautifully formatted student progress reports with school crest, attendance rate, and QR verification.',
      chips: ['A4 Two-Page Layout', 'Principal Sign Stamp', 'Watermarked PDF']
    }
  ];

  return (
    <div className="features-page-wrapper">
      {/* 1. VISUAL HERO WITH REAL PHOTO & LIVE KPI COUNTER */}
      <section className="solutions-gov-hero">
        <div className="container">
          <div className="solutions-gov-hero-grid">
            <div className="solutions-gov-hero-text">
              <div className="solutions-gov-eyebrow">
                EXAMINATIONS &amp; EVALUATION
              </div>
              <h1 className="solutions-gov-title">
                From Marks Entry to Final Report Cards, Zero Error Grading.
              </h1>
              <p className="solutions-gov-desc">
                Subject-teacher secure marks input, multi-tier moderation locks, automated board grading schemes, and batch-printable student progress cards.
              </p>

              <div className="solutions-hero-actions">
                <a href="#report-card-preview" className="apaar-link-arrow">
                  <span>Inspect Progress Report Card</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Book an Exam Workflow Demo
                </Link>
              </div>

              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>Subject-Teacher Locks</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>WBBSE / CBSE Scales</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>1-Click Bulk Report Cards</span>
                </span>
              </div>
            </div>

            {/* Right: Real Exam Photo with Live Status Badge */}
            <div className="solutions-gov-hero-visual">
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(15,23,42,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img 
                    src="/real-photos/real-exam-writing.jpg" 
                    alt="Indian student writing exam on desk" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                    Term 1 Evaluation
                  </div>
                </div>

                <div style={{ padding: '14px 18px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>EXAM STATUS</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#059669' }}>Moderated</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>CLASS AVERAGE</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: 'var(--color-blue)' }}>78.4%</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>REPORT CARDS</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#742DDA' }}>Batch Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OFFICIAL BOARD PROGRESS REPORT CARD */}
      <section className="section section--white" id="report-card-preview">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />OFFICIAL MARKSHEET PREVIEW</div>
            <h2>Board-Compliant Digital &amp; Printable Report Cards</h2>
            <p>Formatted according to WBBSE Summative Assessment or CBSE Term Evaluation guidelines.</p>
          </div>

          <div style={{ maxWidth: '680px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', padding: '24px', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid var(--color-slate-800)', paddingBottom: '14px', marginBottom: '14px' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 850, color: 'var(--color-ink)' }}>PRAGYA MODEL ACADEMY</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-slate-600)' }}>AFFILIATED TO WBBSE / CBSE • ESTD. 1994</div>
              <div style={{ display: 'inline-block', background: 'var(--color-ink)', color: '#FFFFFF', fontSize: '0.72rem', fontWeight: 700, padding: '2px 12px', borderRadius: '4px', marginTop: '6px' }}>
                ANNUAL PROGRESS REPORT CARD • SESSION 2026-27
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', fontSize: '0.78rem', marginBottom: '14px', background: 'var(--color-slate-50)', padding: '10px 14px', borderRadius: '6px' }}>
              <div><strong>Student:</strong> Ananya Das</div>
              <div><strong>Class:</strong> IX - Sec A</div>
              <div><strong>Roll No:</strong> 14</div>
              <div><strong>Admn No:</strong> ADM-2023-812</div>
              <div><strong>Attendance:</strong> 96.4%</div>
              <div><strong>APAAR Status:</strong> <span style={{ color: '#059669', fontWeight: 700 }}>✓ Verified</span></div>
            </div>

            <div style={{ overflowX: 'auto', marginBottom: '14px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
                <thead>
                  <tr style={{ background: 'var(--color-slate-100)', textAlign: 'left', borderBottom: '1px solid var(--color-slate-300)' }}>
                    <th style={{ padding: '6px 8px' }}>Subject</th>
                    <th style={{ padding: '6px 8px', textAlign: 'center' }}>Term I (30)</th>
                    <th style={{ padding: '6px 8px', textAlign: 'center' }}>Term II (70)</th>
                    <th style={{ padding: '6px 8px', textAlign: 'center' }}>Total (100)</th>
                    <th style={{ padding: '6px 8px', textAlign: 'center' }}>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '6px 8px', fontWeight: 600 }}>First Language (Bengali / Hindi)</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center' }}>28</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center' }}>64</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 700 }}>92</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center', color: '#059669', fontWeight: 800 }}>AA</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '6px 8px', fontWeight: 600 }}>Second Language (English)</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center' }}>27</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center' }}>63</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 700 }}>90</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center', color: '#059669', fontWeight: 800 }}>AA</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '6px 8px', fontWeight: 600 }}>Mathematics</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center' }}>30</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center' }}>68</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 700 }}>98</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center', color: '#059669', fontWeight: 800 }}>AA</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '6px 8px', fontWeight: 600 }}>Physical Science</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center' }}>26</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center' }}>61</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 700 }}>87</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center', color: '#145EFF', fontWeight: 800 }}>A+</td>
                  </tr>
                  <tr style={{ background: '#F8FAFC', fontWeight: 700 }}>
                    <td style={{ padding: '8px' }}>Grand Total &amp; Result</td>
                    <td colSpan={2} style={{ padding: '8px', textAlign: 'center', color: '#475569' }}>Marks: 367 / 400</td>
                    <td style={{ padding: '8px', textAlign: 'center', color: 'var(--color-blue)', fontWeight: 850 }}>91.8%</td>
                    <td style={{ padding: '8px', textAlign: 'center', color: '#059669', fontWeight: 850 }}>AA (Passed)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-slate-200)', paddingTop: '10px', fontSize: '0.72rem', color: '#475569' }}>
              <span>Class Rank: #2 of 45 Students</span>
              <button 
                type="button" 
                className="btn btn--primary btn--sm" 
                style={{ padding: '4px 10px', fontSize: '0.72rem', borderRadius: '4px' }}
                onClick={() => alert('Generating official A4 printable PDF report card with watermarked school crest')}
              >
                <Printer size={13} style={{ marginRight: '4px' }} />
                Batch Print Class PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL REAL PHOTO CAPABILITY CARDS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />EXAM CAPABILITIES</div>
            <h2>Built for Examination Committees &amp; Boards</h2>
            <p>From teacher marks submission to official publication and graduation archives.</p>
          </div>

          <div className="role-gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {examCards.map((card, i) => (
              <div key={i} className="role-gallery-card">
                <div className="role-gallery-img-box" style={{ height: '180px' }}>
                  <img src={card.image} alt={card.title} className="role-gallery-img" />
                  <div className="role-gallery-badge">
                    <span>{card.badge}</span>
                  </div>
                </div>
                <div className="role-gallery-content">
                  <h4 style={{ fontSize: '1.05rem' }}>{card.title}</h4>
                  <p style={{ fontSize: '0.82rem' }}>{card.tagline}</p>
                  <div className="role-gallery-chips">
                    {card.chips.map((c, idx) => (
                      <span key={idx} className="gallery-chip">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 4-STEP CONNECTED TIMELINE */}
      <section className="apaar-how-section" id="how-it-works">
        <div className="container">
          <div className="apaar-how-header">
            <h2>The Examination <span>&amp; Grading Lifecycle</span></h2>
            <p>Automated moderation, grade calculation, and report publication.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <FileText size={22} color="#145EFF" />
                </div>
                <h4>Hall Tickets</h4>
                <p>Auto-generated exam schedules and student admit cards</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <Lock size={22} color="#059669" />
                </div>
                <h4>Scoped Entry</h4>
                <p>Subject teachers enter marks in locked draft portals</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <BarChart3 size={22} color="#742DDA" />
                </div>
                <h4>Auto Grading</h4>
                <p>System applies board-specific pass/fail and grade rules</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <Award size={22} color="#F59E0B" />
                </div>
                <h4>Report Card Batch</h4>
                <p>1-click batch PDF print with student performance analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />EXAM FAQS</div>
            <h2>Frequently Asked Questions About Exams</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Eliminate Examination Grading Nightmares."
        subtitle="Bring your school’s mark sheet templates. We’ll show you automated board grade calculation in action."
        buttonText="Book an Exam Workflow Demo"
      />
    </div>
  );
}
