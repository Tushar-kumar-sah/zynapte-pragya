import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCheck, Clock, CheckCircle2, AlertTriangle, 
  Smartphone, Shield, ArrowRight, Check, X 
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function AttendanceManagement() {
  const [demoRoll, setDemoRoll] = useState([
    { roll: 1, name: 'Aarav Sen', status: 'P' },
    { roll: 2, name: 'Debolina Roy', status: 'P' },
    { roll: 3, name: 'Sayan Banerjee', status: 'A' },
    { roll: 4, name: 'Priyanka Mukherjee', status: 'P' },
    { roll: 5, name: 'Rahul Bose', status: 'L' }
  ]);

  const toggleStatus = (index, newStatus) => {
    const updated = [...demoRoll];
    updated[index].status = newStatus;
    setDemoRoll(updated);
  };

  const faqs = [
    { question: 'Can teachers mark attendance on smartphones?', answer: 'Yes, teachers can take daily roll call via native iOS and Android apps with 1-tap presets in under 40 seconds.' },
    { question: 'Does it support staff punch & casual leave?', answer: 'Yes, staff attendance punch-in and casual/medical leave approvals are logged directly into monthly payroll.' },
    { question: 'Does Pragya calculate UDISE+ attendance %?', answer: 'Yes, Pragya tracks total working days vs days present per child, generating UDISE+ percentage tables instantly.' },
    { question: 'Are automated parent SMS alerts supported?', answer: 'In-app notification ribbons and email circulars are operational today. Automated SMS gateway dispatch is planned on the roadmap.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-live-pill" style={{ margin: '0 auto 16px' }}>
              <span className="hero-live-dot" />
              <span>1-Tap Roll Call &bull; 40-Second Class Register &bull; Mobile Ready</span>
            </div>
            <div className="eyebrow"><span className="eyebrow-dot" />DAILY ATTENDANCE &amp; LEAVE</div>
            <h1 className="page-hero-title">Attendance That’s Faster to Mark and Impossible to Lose.</h1>
            <p className="page-hero-desc">
              Eliminate paper roll books. Class teachers record presence on mobile or desktop in seconds, with real-time alerts reaching the front office and parents.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Book an Attendance Demo</Link>
              <Link to="/school-erp-mobile-app" className="btn btn--secondary btn--lg">See Mobile App</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Morning Roll Call Simulator */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />INTERACTIVE SIMULATOR</div>
            <h2>Try the Teacher Roll Call Register</h2>
            <p>Click the Present (P), Absent (A), or Late (L) pills to experience how quickly teachers mark attendance.</p>
          </div>

          <div style={{ maxWidth: '680px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ background: 'var(--color-ink)', color: '#FFFFFF', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>Class IX, Section A • Morning Roll Call</strong>
                <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Class Teacher: Sourav Mukherjee • 28 Oct 2026</div>
              </div>
              <span style={{ background: 'rgba(0, 205, 229, 0.2)', color: 'var(--color-cyan)', padding: '3px 10px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700 }}>
                Period 1 Active
              </span>
            </div>

            <div style={{ padding: '16px 20px' }}>
              {demoRoll.map((student, idx) => (
                <div key={student.roll} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: idx < demoRoll.length - 1 ? '1px solid var(--color-slate-100)' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-slate-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8125rem' }}>
                      {student.roll}
                    </span>
                    <strong style={{ fontSize: '0.9375rem', color: 'var(--color-ink)' }}>{student.name}</strong>
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button 
                      onClick={() => toggleStatus(idx, 'P')}
                      style={{ 
                        padding: '4px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem',
                        background: student.status === 'P' ? 'var(--color-success)' : 'var(--color-slate-100)',
                        color: student.status === 'P' ? '#FFFFFF' : 'var(--color-slate-600)'
                      }}
                    >
                      P (Present)
                    </button>
                    <button 
                      onClick={() => toggleStatus(idx, 'A')}
                      style={{ 
                        padding: '4px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem',
                        background: student.status === 'A' ? 'var(--color-danger)' : 'var(--color-slate-100)',
                        color: student.status === 'A' ? '#FFFFFF' : 'var(--color-slate-600)'
                      }}
                    >
                      A (Absent)
                    </button>
                    <button 
                      onClick={() => toggleStatus(idx, 'L')}
                      style={{ 
                        padding: '4px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem',
                        background: student.status === 'L' ? '#D97706' : 'var(--color-slate-100)',
                        color: student.status === 'L' ? '#FFFFFF' : 'var(--color-slate-600)'
                      }}
                    >
                      L (Late)
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--color-soft-canvas)', padding: '12px 20px', borderTop: '1px solid var(--color-slate-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8125rem' }}>
              <span>Present: <strong>{demoRoll.filter(s => s.status === 'P').length}</strong> &bull; Absent: <strong style={{ color: 'var(--color-danger)' }}>{demoRoll.filter(s => s.status === 'A').length}</strong></span>
              <button className="btn btn--primary btn--sm" onClick={() => alert('Attendance register synced to office successfully!')}>
                Save &amp; Notify Office
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Feature Cards */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />CAPABILITIES</div>
            <h2>Full Campus Attendance Intelligence</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(0, 205, 229, 0.12)', color: '#028394' }}>
                <Clock size={28} />
              </div>
              <h3>1-Tap Roll Call (40 Seconds)</h3>
              <p>Defaults the entire class to "All Present". The class teacher merely taps the 2 or 3 absentees and submits in seconds.</p>
              <div className="feature-card-tags">
                <span className="badge badge--cyan">Default Present</span>
                <span className="badge badge--cyan">Zero Delay</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <Smartphone size={28} />
              </div>
              <h3>Native Mobile Apps (iOS &amp; Android)</h3>
              <p>Teachers take attendance directly on their mobile phones in the assembly ground, laboratory, or classroom.</p>
              <div className="feature-card-tags">
                <span className="badge badge--blue">iOS App</span>
                <span className="badge badge--blue">Android App</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <UserCheck size={28} />
              </div>
              <h3>Staff Attendance &amp; Leave Ledger</h3>
              <p>Teachers apply for Casual Leave (CL) or Medical Leave (ML). Administrators approve leaves with instant payroll adjustment.</p>
              <div className="feature-card-tags">
                <span className="badge badge--violet">CL &amp; ML Ledger</span>
                <span className="badge badge--violet">Payroll Sync</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(5, 150, 105, 0.08)', color: 'var(--color-success)' }}>
                <CheckCircle2 size={28} />
              </div>
              <h3>UDISE+ Annual Attendance %</h3>
              <p>Automatically calculates mandated academic attendance percentage per child to ensure examination eligibility compliance.</p>
              <div className="feature-card-tags">
                <span className="badge badge--green">UDISE+ Reports</span>
                <span className="badge badge--green">75% Threshold Alert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />FAQS</div>
            <h2>Attendance System FAQs</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="See Attendance Management in Action."
        subtitle="Explore rapid class roll marking on web and mobile devices."
        buttonText="Book an Attendance Demo"
      />
    </>
  );
}
