import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCheck, Clock, CheckCircle2, AlertTriangle, 
  Smartphone, Shield, ArrowRight, Check, X, Bell,
  Calendar, Users, FileCheck, BarChart3
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

  const presentCount = demoRoll.filter(r => r.status === 'P').length;
  const absentCount = demoRoll.filter(r => r.status === 'A').length;
  const lateCount = demoRoll.filter(r => r.status === 'L').length;

  const faqs = [
    { question: 'Can teachers mark attendance on smartphones?', answer: 'Yes, teachers can take daily roll call via native iOS and Android apps with 1-tap presets in under 30 seconds.' },
    { question: 'Does it support staff punch & casual leave?', answer: 'Yes, staff attendance punch-in and casual/medical leave approvals are logged directly into monthly payroll.' },
    { question: 'Does Pragya calculate UDISE+ attendance %?', answer: 'Yes, Pragya tracks total working days vs days present per child, generating UDISE+ percentage tables instantly.' },
    { question: 'Are automated parent WhatsApp alerts supported?', answer: 'Yes, automated WhatsApp absent alerts and in-app notifications reach parents within 2 minutes of roll call closure.' }
  ];

  const attendanceCards = [
    {
      title: 'Classroom Mobile Roll Call',
      badge: '30-Sec Daily Flow',
      image: '/real-photos/real-classroom.jpg',
      tagline: 'Class teachers open period attendance on any mobile or desktop. Pre-filled as "All Present", tap only absentees.',
      chips: ['1-Tap Presets', 'Period-Wise Roll', 'Offline Fallback']
    },
    {
      title: 'Auto WhatsApp Absent Alerts',
      badge: 'Instant Parent Sync',
      image: '/real-photos/real-mobile-comm.jpg',
      tagline: 'When a student is marked absent, a polite automated notification is dispatched to parents with time and date.',
      chips: ['Official WhatsApp API', 'Delivery Reports', 'Emergency Notice']
    },
    {
      title: 'UDISE+ & Term Examination Eligibility',
      badge: 'Automated Calculation',
      image: '/real-photos/real-teacher-instruct.jpg',
      tagline: 'Instant calculation of 75% minimum attendance thresholds for board exam admit cards, with auto-generated medical leave waivers.',
      chips: ['75% Rule Enforcer', 'Medical Waivers', 'Monthly Register PDF']
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
                DAILY ATTENDANCE &amp; LEAVE
              </div>
              <h1 className="solutions-gov-title">
                Attendance That’s Faster to Mark and Impossible to Lose.
              </h1>
              <p className="solutions-gov-desc">
                Eliminate paper roll registers. Class teachers record morning presence in 30 seconds, with real-time alerts reaching parents instantly.
              </p>

              <div className="solutions-hero-actions">
                <a href="#roll-call-simulator" className="apaar-link-arrow">
                  <span>Try Roll Call Simulator</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Book an Attendance Demo
                </Link>
              </div>

              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>30-Sec Morning Roll</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>Instant WhatsApp Alerts</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>UDISE+ Monthly % Engine</span>
                </span>
              </div>
            </div>

            {/* Right: Real Classroom Photo with Live Attendance Overlay */}
            <div className="solutions-gov-hero-visual">
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(15,23,42,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img 
                    src="/real-photos/real-classroom.jpg" 
                    alt="Indian school classroom desks and blackboard" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                    Period 1 Roll Call
                  </div>
                </div>

                <div style={{ padding: '14px 18px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>PRESENT</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#059669' }}>43 Students</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>ABSENT</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#DC2626' }}>2 Notified</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>ROLL RATE</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: 'var(--color-blue)' }}>95.5% Today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE MORNING ROLL CALL SIMULATOR */}
      <section className="section section--white" id="roll-call-simulator">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />INTERACTIVE SIMULATOR</div>
            <h2>Try the Teacher Roll Call Register</h2>
            <p>Click Present (P), Absent (A), or Late (L) pills to experience how quickly teachers take attendance.</p>
          </div>

          <div style={{ maxWidth: '720px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ background: '#0F172A', color: '#FFFFFF', padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} color="var(--color-blue)" />
                <strong style={{ fontSize: '0.85rem' }}>Class IX - Sec A • Morning Attendance Register</strong>
              </div>
              <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', border: '1px solid rgba(16,185,129,0.4)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                Period 1 Active
              </span>
            </div>

            <div style={{ padding: '12px 18px', background: '#F8FAFC', borderBottom: '1px solid var(--color-slate-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '0.78rem', color: '#475569' }}>
                Quick Preset: Tap student status to update in real time
              </span>
              <div style={{ display: 'flex', gap: '8px', fontSize: '0.74rem', fontWeight: 700 }}>
                <span style={{ color: '#059669' }}>P: {presentCount}</span>
                <span style={{ color: '#DC2626' }}>A: {absentCount}</span>
                <span style={{ color: '#D97706' }}>L: {lateCount}</span>
              </div>
            </div>

            <div style={{ overflowX: 'auto', padding: '14px 18px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
                <thead>
                  <tr style={{ background: '#FFFFFF', borderBottom: '1px solid var(--color-slate-200)', textAlign: 'left', color: 'var(--color-slate-400)', fontSize: '0.72rem', textTransform: 'uppercase' }}>
                    <th style={{ padding: '8px' }}>Roll</th>
                    <th style={{ padding: '8px' }}>Student Name</th>
                    <th style={{ padding: '8px', textAlign: 'right' }}>Status Toggle</th>
                  </tr>
                </thead>
                <tbody>
                  {demoRoll.map((student, idx) => (
                    <tr key={student.roll} style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                      <td style={{ padding: '10px 8px', fontWeight: 700, color: 'var(--color-slate-400)' }}>#{student.roll}</td>
                      <td style={{ padding: '10px 8px', fontWeight: 750, color: 'var(--color-ink)' }}>{student.name}</td>
                      <td style={{ padding: '10px 8px', textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', gap: '5px' }}>
                          <button
                            type="button"
                            onClick={() => toggleStatus(idx, 'P')}
                            style={{
                              padding: '3px 10px',
                              borderRadius: '4px',
                              border: student.status === 'P' ? '1px solid #059669' : '1px solid var(--color-slate-200)',
                              background: student.status === 'P' ? '#ECFDF5' : '#FFFFFF',
                              color: student.status === 'P' ? '#059669' : 'var(--color-slate-600)',
                              fontWeight: 800,
                              cursor: 'pointer'
                            }}
                          >
                            P
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleStatus(idx, 'A')}
                            style={{
                              padding: '3px 10px',
                              borderRadius: '4px',
                              border: student.status === 'A' ? '1px solid #DC2626' : '1px solid var(--color-slate-200)',
                              background: student.status === 'A' ? '#FEF2F2' : '#FFFFFF',
                              color: student.status === 'A' ? '#DC2626' : 'var(--color-slate-600)',
                              fontWeight: 800,
                              cursor: 'pointer'
                            }}
                          >
                            A
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleStatus(idx, 'L')}
                            style={{
                              padding: '3px 10px',
                              borderRadius: '4px',
                              border: student.status === 'L' ? '1px solid #D97706' : '1px solid var(--color-slate-200)',
                              background: student.status === 'L' ? '#FFFBEB' : '#FFFFFF',
                              color: student.status === 'L' ? '#D97706' : 'var(--color-slate-600)',
                              fontWeight: 800,
                              cursor: 'pointer'
                            }}
                          >
                            L
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ padding: '10px 18px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.74rem', color: '#475569' }}>
              <span>Auto-triggers WhatsApp message to absent parents upon submission</span>
              <button 
                type="button"
                className="btn btn--primary btn--sm" 
                style={{ borderRadius: '4px', padding: '4px 12px', fontSize: '0.74rem' }}
                onClick={() => alert(`Attendance locked! ${presentCount} Present, ${absentCount} Absent. WhatsApp alerts dispatched.`)}
              >
                Submit Morning Roll Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL CAPABILITY CARDS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />ATTENDANCE FEATURES</div>
            <h2>Built for Campus Rhythms</h2>
            <p>Maintain precision in daily attendance, parent sync, and board exam compliance.</p>
          </div>

          <div className="role-gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {attendanceCards.map((card, i) => (
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
            <h2>The Daily <span>Attendance Workflow</span></h2>
            <p>From the morning bell to monthly UDISE+ compliance, attendance records flow automatically.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <Clock size={22} color="#145EFF" />
                </div>
                <h4>30-Sec Roll Call</h4>
                <p>Teacher takes 1-tap roll call on smartphone or laptop</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <Bell size={22} color="#059669" />
                </div>
                <h4>Instant Alert</h4>
                <p>Polite automated WhatsApp push dispatched to absent parents</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <BarChart3 size={22} color="#742DDA" />
                </div>
                <h4>UDISE+ Monthly %</h4>
                <p>Auto-tallies working days vs present days across terms</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <CheckCircle2 size={22} color="#F59E0B" />
                </div>
                <h4>Admit Card Rule</h4>
                <p>Flags students below 75% attendance before final exams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />ATTENDANCE FAQS</div>
            <h2>Frequently Asked Questions About Attendance</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Stop Wasting 20 Minutes Every Morning."
        subtitle="Schedule a 10-minute demo to see how Pragya completes daily school roll call in 30 seconds."
        buttonText="Book an Attendance Demo"
      />
    </div>
  );
}
