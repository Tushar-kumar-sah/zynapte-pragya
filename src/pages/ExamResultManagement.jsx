import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, CheckCircle2, Lock, FileSpreadsheet, 
  Printer, ArrowRight, ShieldCheck, Check, Sparkles 
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

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="eyebrow"><span className="eyebrow-dot" />EXAMINATIONS &amp; EVALUATION</div>
            <h1 className="page-hero-title">From Marks Entry to Final Report Cards, Zero Error Grading.</h1>
            <p className="page-hero-desc">
              Subject-teacher secure marks input, multi-tier moderation locks, automated board grading schemes, and batch-printable student progress cards.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Book an Exam Workflow Demo</Link>
              <Link to="/features" className="btn btn--secondary btn--lg">Explore All Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simulated Student Progress Report Card */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />OFFICIAL MARKSHEET PREVIEW</div>
            <h2>Board-Compliant Digital &amp; Printable Report Cards</h2>
            <p>Formatted according to WBBSE Summative Assessment or CBSE Term Evaluation guidelines.</p>
          </div>

          <div className="responsive-card-paddings" style={{ maxWidth: '680px', margin: '0 auto', background: '#FFFFFF', border: '2px solid var(--color-slate-200)', borderRadius: 'var(--radius-xl)', padding: '28px', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid var(--color-slate-800)', paddingBottom: '16px', marginBottom: '16px' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-ink)' }}>VIDYASAGAR MEMORIAL HIGH SCHOOL</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-600)' }}>AFFILIATED TO WBBSE • INDEX NO: 12-409 • ESTD. 1968</div>
              <div style={{ display: 'inline-block', background: 'var(--color-ink)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, padding: '3px 14px', borderRadius: '999px', marginTop: '8px' }}>
                ANNUAL PROGRESS REPORT CARD • 2026-27
              </div>
            </div>

            <div className="responsive-3col-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', fontSize: '0.8125rem', marginBottom: '16px', background: 'var(--color-soft-canvas)', padding: '12px', borderRadius: 'var(--radius-md)' }}>
              <div><strong>Student:</strong> Ananya Das</div>
              <div><strong>Class:</strong> IX - Sec A</div>
              <div><strong>Roll No:</strong> 14</div>
              <div><strong>Admn No:</strong> ADM-2023-812</div>
              <div><strong>Attendance:</strong> 96.4%</div>
              <div><strong>APAAR Status:</strong> <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>Verified</span></div>
            </div>

            <div className="responsive-table-scroll">
              <table style={{ width: '100%', minWidth: '520px', borderCollapse: 'collapse', fontSize: '0.8125rem', marginBottom: '16px' }}>
                <thead>
                  <tr style={{ background: 'var(--color-slate-100)', textAlign: 'left', borderBottom: '1px solid var(--color-slate-300)' }}>
                    <th style={{ padding: '8px' }}>Subject</th>
                    <th style={{ padding: '8px', textAlign: 'center' }}>Summative I (30)</th>
                    <th style={{ padding: '8px', textAlign: 'center' }}>Summative II (70)</th>
                    <th style={{ padding: '8px', textAlign: 'center' }}>Total (100)</th>
                    <th style={{ padding: '8px', textAlign: 'center' }}>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '8px' }}><strong>First Language (Bengali)</strong></td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>27</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>63</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}><strong>90</strong></td>
                    <td style={{ padding: '8px', textAlign: 'center', color: 'var(--color-success)', fontWeight: 700 }}>AA (Outstanding)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '8px' }}><strong>Second Language (English)</strong></td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>25</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>61</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}><strong>86</strong></td>
                    <td style={{ padding: '8px', textAlign: 'center', color: 'var(--color-blue)', fontWeight: 700 }}>A+ (Excellent)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '8px' }}><strong>Mathematics</strong></td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>29</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>68</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}><strong>97</strong></td>
                    <td style={{ padding: '8px', textAlign: 'center', color: 'var(--color-success)', fontWeight: 700 }}>AA (Outstanding)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '8px' }}><strong>Physical Science</strong></td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>26</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>64</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}><strong>90</strong></td>
                    <td style={{ padding: '8px', textAlign: 'center', color: 'var(--color-success)', fontWeight: 700 }}>AA (Outstanding)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '8px' }}><strong>Life Science</strong></td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>28</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>60</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}><strong>88</strong></td>
                    <td style={{ padding: '8px', textAlign: 'center', color: 'var(--color-blue)', fontWeight: 700 }}>A+ (Excellent)</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr style={{ background: 'var(--color-soft-canvas)', fontWeight: 800 }}>
                    <td style={{ padding: '10px 8px' }}>Overall Result</td>
                    <td colSpan="2" style={{ padding: '10px 8px', textAlign: 'right' }}>Aggregate: 451 / 500 (90.2%)</td>
                    <td colSpan="2" style={{ padding: '10px 8px', textAlign: 'center', color: 'var(--color-success)' }}>PROMOTED TO CLASS X</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="responsive-flex-stack" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--color-slate-200)', fontSize: '0.75rem', color: 'var(--color-slate-600)' }}>
              <div>Class Teacher: S. Mukherjee</div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', borderBottom: '1px dashed var(--color-slate-400)', width: '120px', marginBottom: '4px' }} />
                Examination Convener
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', borderBottom: '1px dashed var(--color-slate-400)', width: '120px', marginBottom: '4px' }} />
                Principal / Headmaster
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Workflow Cards */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />STRUCTURED STAGES</div>
            <h2>Deliberate Review from Entry to Publication</h2>
          </div>

          <div className="workflow-steps-grid">
            <div className="workflow-step-card">
              <div className="workflow-step-top">
                <span className="workflow-num">01</span>
                <span className="workflow-badge">Schedule</span>
              </div>
              <div className="workflow-icon-box" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <FileSpreadsheet size={24} />
              </div>
              <h3 className="workflow-step-title">Exam Config &amp; Routine</h3>
              <p className="workflow-step-desc">Set exam dates, maximum marks, pass criteria, and generate automated student admit cards.</p>
            </div>

            <div className="workflow-step-card">
              <div className="workflow-step-top">
                <span className="workflow-num">02</span>
                <span className="workflow-badge">Subject Teachers</span>
              </div>
              <div className="workflow-icon-box" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <CheckCircle2 size={24} />
              </div>
              <h3 className="workflow-step-title">Teacher Marks Portal</h3>
              <p className="workflow-step-desc">Teachers securely enter theory, practical, and viva marks with automatic validation against max scores.</p>
            </div>

            <div className="workflow-step-card">
              <div className="workflow-step-top">
                <span className="workflow-num">03</span>
                <span className="workflow-badge">Moderation</span>
              </div>
              <div className="workflow-icon-box" style={{ background: 'rgba(236, 50, 204, 0.08)', color: 'var(--color-magenta)' }}>
                <Lock size={24} />
              </div>
              <h3 className="workflow-step-title">Moderation &amp; Lock</h3>
              <p className="workflow-step-desc">The examination controller locks marksheets, preventing unauthorized score modifications before publication.</p>
            </div>

            <div className="workflow-step-card">
              <div className="workflow-step-top">
                <span className="workflow-num">04</span>
                <span className="workflow-badge">Publication</span>
              </div>
              <div className="workflow-icon-box" style={{ background: 'rgba(5, 150, 105, 0.08)', color: 'var(--color-success)' }}>
                <Printer size={24} />
              </div>
              <h3 className="workflow-step-title">Bulk Report Card PDF</h3>
              <p className="workflow-step-desc">Produce high-resolution printable report cards for parents and upload grades to student mobile apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Examinations &amp; Results FAQs</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="See the Result Workflow in Action."
        subtitle="Explore how examinations move safely from teacher entry to verified report cards."
        buttonText="Book an Exam Demo"
      />
    </>
  );
}
