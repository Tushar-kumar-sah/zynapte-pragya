import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, CheckCircle2, AlertTriangle, Users, 
  BookOpen, Clock, ArrowRight, ShieldCheck, Check, Sparkles,
  FileCheck, UserCheck, Layers, BookCheck
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function AcademicsTimetable() {
  const faqs = [
    { question: 'Does Pragya detect timetable conflicts automatically?', answer: 'Yes, Pragya alerts immediately if a teacher, classroom, or science laboratory is assigned to two different classes during the same period.' },
    { question: 'Can elective and optional subjects be configured?', answer: 'Yes, supports Class XI & XII stream electives (Science, Commerce, Humanities) and optional 4th subject rules.' },
    { question: 'Are ICSE & CBSE subject catalogues built-in?', answer: 'Yes, pre-configured subject codes and weightage for ICSE and CBSE are ready out of the box.' },
    { question: 'Can substitute teachers be assigned quickly?', answer: 'Yes, when a teacher logs casual leave, Pragya suggests available free teachers with matching subject specializations in 1 tap.' }
  ];

  const academicCards = [
    {
      title: 'Automated Clash-Free Timetables',
      badge: 'Zero Double-Booking',
      image: '/real-photos/real-teacher-instruct.jpg',
      tagline: 'Multi-period routine generator ensures no two classes share the same teacher, room, or STEM lab simultaneously.',
      chips: ['Lab & Room Allocation', 'Max 6 Periods / Teacher', 'Clash Shield']
    },
    {
      title: '1-Tap Daily Teacher Substitution',
      badge: 'Morning Leave Sync',
      image: '/real-photos/real-library-books.jpg',
      tagline: 'When faculty report casual or medical leave, the substitution engine identifies qualified free teachers instantly.',
      chips: ['Free Period Finder', 'WhatsApp Teacher Notice', 'Substitution Board']
    },
    {
      title: 'Stream Electives & Syllabus Track',
      badge: 'Higher Secondary Ready',
      image: '/real-photos/real-bangalore-school-coding.jpg',
      tagline: 'Support for Science, Commerce, and Arts elective combinations with chapter-by-chapter syllabus completion progress.',
      chips: ['Class XI & XII Streams', 'Chapter Progress %', 'Holiday Calendar Sync']
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
                ACADEMIC OPERATIONS &amp; TIMETABLES
              </div>
              <h1 className="solutions-gov-title">
                Organise the Academic Year Without Double-Booking.
              </h1>
              <p className="solutions-gov-desc">
                Clash-free class scheduling, automated substitute teacher suggestion, optional subject enrollment, and synchronized syllabus tracking.
              </p>

              <div className="solutions-hero-actions">
                <a href="#routine-grid" className="apaar-link-arrow">
                  <span>View Master Routine Grid</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Book an Academics Demo
                </Link>
              </div>

              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>Clash-Free Period Engine</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>1-Tap Substitution Board</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>ICSE &amp; CBSE Schemes</span>
                </span>
              </div>
            </div>

            {/* Right: Real Teacher Photo with Live Routine Status */}
            <div className="solutions-gov-hero-visual">
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(15,23,42,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img 
                    src="/real-photos/real-teacher-instruct.jpg" 
                    alt="Indian school teacher instructing in classroom" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                    Period 3 In Progress
                  </div>
                </div>

                <div style={{ padding: '14px 18px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>CLASH AUDIT</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#059669' }}>0 Collisions</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>ACTIVE PERIODS</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: 'var(--color-blue)' }}>8 Daily</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>SUBSTITUTIONS</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#742DDA' }}>Auto Covered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REALISTIC MASTER TIMETABLE GRID */}
      <section className="section section--white" id="routine-grid">
        <div className="container">
          <div className="section-header">
            <h2>Live Routine with Automated Conflict Protection</h2>
            <p>Guarantees zero room or teacher collisions across classes and sections.</p>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ background: '#0F172A', color: '#FFFFFF', padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <strong style={{ fontSize: '0.85rem' }}>Class IX - Section A • Weekly Master Routine</strong>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Academic Year 2026-27 • Room 204</div>
              </div>
              <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', border: '1px solid rgba(16,185,129,0.4)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={13} /> Zero Clashes Detected
              </span>
            </div>

            <div style={{ overflowX: 'auto', padding: '14px 18px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC', textAlign: 'left', borderBottom: '1px solid var(--color-slate-200)', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--color-slate-500)' }}>
                    <th style={{ padding: '8px' }}>Day</th>
                    <th style={{ padding: '8px' }}>P1 (10:00)</th>
                    <th style={{ padding: '8px' }}>P2 (10:45)</th>
                    <th style={{ padding: '8px' }}>P3 (11:30)</th>
                    <th style={{ padding: '8px' }}>P4 (12:15)</th>
                    <th style={{ padding: '8px' }}>P5 (01:30)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '8px', fontWeight: 750 }}>Monday</td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#EFF6FF', color: '#1D4ED8', borderColor: '#BFDBFE' }}>Bengali (T-101)</span></td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#EFF6FF', color: '#1D4ED8', borderColor: '#BFDBFE' }}>English (T-102)</span></td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#ECFDF5', color: '#047857', borderColor: '#A7F3D0' }}>Maths (T-104)</span></td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#F5F3FF', color: '#6D28D9', borderColor: '#DDD6FE' }}>Phy Sci (T-105)</span></td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#FEF3C7', color: '#B45309', borderColor: '#FDE68A' }}>History (T-106)</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-100)' }}>
                    <td style={{ padding: '8px', fontWeight: 750 }}>Tuesday</td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#ECFDF5', color: '#047857', borderColor: '#A7F3D0' }}>Maths (T-104)</span></td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#EFF6FF', color: '#1D4ED8', borderColor: '#BFDBFE' }}>Bengali (T-101)</span></td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#F5F3FF', color: '#6D28D9', borderColor: '#DDD6FE' }}>Life Sci (T-107)</span></td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#FEF3C7', color: '#B45309', borderColor: '#FDE68A' }}>Geography (T-108)</span></td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#EFF6FF', color: '#1D4ED8', borderColor: '#BFDBFE' }}>English (T-102)</span></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', fontWeight: 750 }}>Wednesday</td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#F5F3FF', color: '#6D28D9', borderColor: '#DDD6FE' }}>Phy Sci (T-105)</span></td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#ECFDF5', color: '#047857', borderColor: '#A7F3D0' }}>Maths (T-104)</span></td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#EFF6FF', color: '#1D4ED8', borderColor: '#BFDBFE' }}>Bengali (T-101)</span></td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#F0FDF4', color: '#15803D', borderColor: '#BBF7D0' }}>STEM Lab (Lab 1)</span></td>
                    <td style={{ padding: '8px' }}><span className="sec-chip" style={{ background: '#FEF3C7', color: '#B45309', borderColor: '#FDE68A' }}>History (T-106)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ padding: '10px 18px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.74rem', color: '#475569' }}>
              <span>Smart validation prevents double-booking of teachers and classrooms</span>
              <button 
                type="button" 
                className="btn btn--primary btn--sm" 
                style={{ padding: '4px 12px', fontSize: '0.74rem', borderRadius: '4px' }}
                onClick={() => alert('Exporting clash-free school timetable PDF')}
              >
                Print Master Timetable
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL REAL PHOTO CAPABILITY CARDS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <h2>Built for Academic Directors &amp; Teachers</h2>
            <p>From subject allocations to daily substitution and syllabus velocity.</p>
          </div>

          <div className="role-gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {academicCards.map((card, i) => (
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
            <h2>The Academic <span>Scheduling Lifecycle</span></h2>
            <p>Automated timetable distribution and substitution management.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <BookOpen size={22} color="#145EFF" />
                </div>
                <h4>Curriculum Setup</h4>
                <p>Define subjects, weekly period quotas, and lab hours</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <Calendar size={22} color="#059669" />
                </div>
                <h4>Clash Engine</h4>
                <p>Auto-assigns periods ensuring zero room or teacher collision</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <Clock size={22} color="#742DDA" />
                </div>
                <h4>Live Daily Routine</h4>
                <p>Teachers view today's periods on smartphone app</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <UserCheck size={22} color="#F59E0B" />
                </div>
                <h4>Auto Substitution</h4>
                <p>1-tap assignment of free teacher when staff takes leave</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions About Academics</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Clash-Free Timetables in Under an Hour."
        subtitle="Bring your school’s subject list and teacher roster. We’ll generate a conflict-free routine in a live session."
        buttonText="Book an Academics Demo"
      />
    </div>
  );
}
