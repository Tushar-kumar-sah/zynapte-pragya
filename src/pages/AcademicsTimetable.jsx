import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, CheckCircle2, AlertTriangle, Users, 
  BookOpen, Clock, ArrowRight, ShieldCheck, Check, Sparkles 
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function AcademicsTimetable() {
  const faqs = [
    { question: 'Does Pragya detect timetable conflicts automatically?', answer: 'Yes, Pragya alerts immediately if a teacher, classroom, or science laboratory is assigned to two different classes during the same period.' },
    { question: 'Can elective and optional subjects be configured?', answer: 'Yes, supports Class XI & XII stream electives (Science, Commerce, Humanities) and optional 4th subject rules.' },
    { question: 'Are WBBSE & WBCHSE subject catalogues built-in?', answer: 'Yes, pre-configured subject codes and weightage for West Bengal Madhyamik and Higher Secondary boards are ready out of the box.' },
    { question: 'Can substitute teachers be assigned quickly?', answer: 'Yes, when a teacher logs casual leave, Pragya suggests available free teachers with matching subject specializations in 1 tap.' }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="eyebrow"><span className="eyebrow-dot" />ACADEMIC OPERATIONS &amp; TIMETABLES</div>
            <h1 className="page-hero-title">Organise the Academic Year Without Double-Booking.</h1>
            <p className="page-hero-desc">
              Clash-free class scheduling, automated substitute teacher suggestion, optional subject enrollment, and synchronized syllabus tracking.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Book an Academics Demo</Link>
              <Link to="/features" className="btn btn--secondary btn--lg">Explore All Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Simulated Timetable & Clash Detector Grid */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />SMART TIMETABLE GRID</div>
            <h2>Live Routine with Automated Conflict Protection</h2>
            <p>Guarantees zero room or teacher collisions across classes and sections.</p>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ background: 'var(--color-ink)', color: '#FFFFFF', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <strong>Class IX - Section A • Weekly Master Routine</strong>
                <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Academic Year 2026-27 • Room 204</div>
              </div>
              <span style={{ background: '#ECFDF5', color: '#059669', padding: '3px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={14} /> Zero Clashes Detected
              </span>
            </div>

            <div style={{ overflowX: 'auto', padding: '16px', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ width: '100%', minWidth: '580px', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
                <thead>
                  <tr style={{ background: 'var(--color-slate-50)', textAlign: 'left', borderBottom: '1px solid var(--color-slate-200)' }}>
                    <th style={{ padding: '8px' }}>Day</th>
                    <th style={{ padding: '8px' }}>Period 1 (10:00)</th>
                    <th style={{ padding: '8px' }}>Period 2 (10:45)</th>
                    <th style={{ padding: '8px' }}>Period 3 (11:30)</th>
                    <th style={{ padding: '8px' }}>Period 4 (12:15)</th>
                    <th style={{ padding: '8px' }}>Period 5 (01:30)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '8px', fontWeight: 700 }}>Mon</td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#EFF6FF', padding: '4px 8px', borderRadius: '4px' }}><strong>Maths</strong><br /><small>S. Mukherjee (204)</small></div></td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#FAF5FF', padding: '4px 8px', borderRadius: '4px' }}><strong>Bengali</strong><br /><small>D. Ghosh (204)</small></div></td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#F0FDF4', padding: '4px 8px', borderRadius: '4px' }}><strong>English</strong><br /><small>R. Sengupta (204)</small></div></td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#FEF3C7', padding: '4px 8px', borderRadius: '4px' }}><strong>Phy Sci</strong><br /><small>A. Roy (Lab 2)</small></div></td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#EFF6FF', padding: '4px 8px', borderRadius: '4px' }}><strong>History</strong><br /><small>M. Das (204)</small></div></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '8px', fontWeight: 700 }}>Tue</td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#FEF3C7', padding: '4px 8px', borderRadius: '4px' }}><strong>Life Sci</strong><br /><small>T. Paul (Lab 1)</small></div></td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#EFF6FF', padding: '4px 8px', borderRadius: '4px' }}><strong>Maths</strong><br /><small>S. Mukherjee (204)</small></div></td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#FAF5FF', padding: '4px 8px', borderRadius: '4px' }}><strong>Geography</strong><br /><small>K. Banik (204)</small></div></td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#F0FDF4', padding: '4px 8px', borderRadius: '4px' }}><strong>English</strong><br /><small>R. Sengupta (204)</small></div></td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#F1F5F9', padding: '4px 8px', borderRadius: '4px' }}><strong>Library</strong><br /><small>Central Hall</small></div></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', fontWeight: 700 }}>Wed</td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#FAF5FF', padding: '4px 8px', borderRadius: '4px' }}><strong>Bengali</strong><br /><small>D. Ghosh (204)</small></div></td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#EFF6FF', padding: '4px 8px', borderRadius: '4px' }}><strong>Phy Sci</strong><br /><small>A. Roy (204)</small></div></td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#EFF6FF', padding: '4px 8px', borderRadius: '4px' }}><strong>Maths</strong><br /><small>S. Mukherjee (204)</small></div></td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#F0FDF4', padding: '4px 8px', borderRadius: '4px' }}><strong>Comp Sci</strong><br /><small>Lab 3</small></div></td>
                    <td style={{ padding: '8px' }}><div style={{ background: '#FEF3C7', padding: '4px 8px', borderRadius: '4px' }}><strong>Sports / PE</strong><br /><small>Ground</small></div></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ background: 'var(--color-soft-canvas)', padding: '10px 20px', borderTop: '1px solid var(--color-slate-200)', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-slate-600)' }}>
              <span>⚡ Auto-syncs to Teacher &amp; Student Mobile Apps</span>
              <span>🖨️ 1-Click Classroom Printable PDF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Feature Cards */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />CURRICULUM ENGINE</div>
            <h2>Full Academic Flexibility for Modern Schools</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <Calendar size={28} />
              </div>
              <h3>Automated Clash Detector</h3>
              <p>Prevents scheduling overlapping classes for teachers or double-booking laboratories, computer rooms, and playgrounds.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <BookOpen size={28} />
              </div>
              <h3>WBBSE / WBCHSE Catalogues</h3>
              <p>Pre-configured subject catalogues for West Bengal Madhyamik &amp; Higher Secondary courses, including language combinations and stream electives.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(5, 150, 105, 0.08)', color: 'var(--color-success)' }}>
                <Users size={28} />
              </div>
              <h3>Substitute Teacher Suggester</h3>
              <p>When a teacher takes leave, Pragya instantly scans the daily schedule and recommends free subject teachers to cover classes.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(0, 205, 229, 0.12)', color: '#028394' }}>
                <Clock size={28} />
              </div>
              <h3>Syllabus &amp; Assignment Tracker</h3>
              <p>Teachers log completed curriculum milestones and distribute digital homework worksheets with deadlines to student mobile apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Academics &amp; Timetable FAQs</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Plan Your Academic Year With Total Clarity."
        subtitle="Book an academic walkthrough focused on your school’s curriculum, teacher allocations, and timetable rules."
        buttonText="Book an Academics Demo"
      />
    </>
  );
}
