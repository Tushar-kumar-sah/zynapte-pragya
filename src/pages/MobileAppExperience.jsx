import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, CheckCircle2, ShieldCheck, Bell, Award, 
  ArrowRight, Download, Wifi, Lock, Zap, Check,
  QrCode, UserCheck, Calendar, FileText
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';
import MobileAppsShowcase from '../components/MobileAppsShowcase';

export default function MobileAppExperience() {
  const faqs = [
    { question: 'Does Pragya work on Android?', answer: 'Yes. An Android mobile application is available for core school workflows including student records, staff roll calls, fees and circulars.' },
    { question: 'Does it work on iOS / iPhone?', answer: 'Yes. Pragya provides native iOS app support for Apple devices, maintaining strict role boundaries and secure token sign-in.' },
    { question: 'Can students and parents use mobile workflows?', answer: 'Yes. Student/parent views allow checking homework diaries, viewing term examination marks, and downloading counter fee receipts.' },
    { question: 'Is a dedicated parent payment checkout live?', answer: 'Counter fee collection with dynamic UPI QR is fully operational today. Online parent app self-checkout is scheduled on the product roadmap.' }
  ];

  const appCards = [
    {
      title: 'Teacher Mobile Desk',
      badge: '30-Sec Roll Call',
      image: '/real-photos/real-classroom.jpg',
      tagline: 'Take classroom attendance on the sports field or basement science labs with offline auto-sync.',
      chips: ['Offline-Ready', '1-Tap Roll Call', 'Period Routine']
    },
    {
      title: 'Parent & Student Portal',
      badge: 'Zero Chat Spam',
      image: '/real-photos/real-mobile-comm.jpg',
      tagline: 'Parents view published report cards, homework diaries, circulars, and fee receipt history cleanly.',
      chips: ['Official Circulars', 'Homework Diary', 'Fee Receipt History']
    },
    {
      title: 'Principal On-the-Go Oversight',
      badge: 'Executive View',
      image: '/real-photos/real-bangalore-school-coding.jpg',
      tagline: 'Campus leaders review daily attendance percentages, morning cashbook collection, and staff leave.',
      chips: ['Live Attendance %', 'Daybook Collections', 'Staff Approvals']
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
                SCHOOL ERP MOBILE APPS
              </div>
              <h1 className="solutions-gov-title">
                Your School Workflows, Wherever the Day Takes You.
              </h1>
              <p className="solutions-gov-desc">
                From morning roll calls on the sports ground to principal oversight during campus rounds, Pragya brings essential school actions directly to smartphones.
              </p>

              <div className="solutions-hero-actions">
                <a href="#interactive-mobile-app" className="apaar-link-arrow">
                  <span>Explore Mobile App</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Book a Mobile Demo
                </Link>
              </div>

              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>Android &amp; iOS Native</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>1-Tap Mobile Roll Call</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>Biometric Lock</span>
                </span>
              </div>
            </div>

            {/* Right: Real Mobile Photo with Live Status Badge */}
            <div className="solutions-gov-hero-visual">
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(15,23,42,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img 
                    src="/real-photos/real-mobile-comm.jpg" 
                    alt="Smartphone with school notification portal" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                    iOS &amp; Android Apps
                  </div>
                </div>

                <div style={{ padding: '14px 18px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>APP SYNC</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#059669' }}>Real-Time</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>OFFLINE MODE</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: 'var(--color-blue)' }}>Enabled</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>SECURITY</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#742DDA' }}>Biometric</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE MOBILE APPS SHOWCASE */}
      <div id="interactive-mobile-app">
        <MobileAppsShowcase />
      </div>

      {/* 3. VISUAL REAL PHOTO CAPABILITY CARDS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <h2>Built for Teachers, Parents &amp; Leaders</h2>
            <p>Every role gets a dedicated mobile screen with zero distraction and strict privacy guardrails.</p>
          </div>

          <div className="role-gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {appCards.map((card, i) => (
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
            <h2>The Mobile <span>School Experience</span></h2>
            <p>How Pragya delivers vital school workflows directly to parent and teacher devices.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <Lock size={22} color="#145EFF" />
                </div>
                <h4>Biometric Unlock</h4>
                <p>Instant sign-in with fingerprint or Face ID authentication</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <UserCheck size={22} color="#059669" />
                </div>
                <h4>30-Sec Roll Call</h4>
                <p>Teachers record attendance in the classroom with instant sync</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <Bell size={22} color="#742DDA" />
                </div>
                <h4>Official Circulars</h4>
                <p>School-governed notices and homework diary push notifications</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <Award size={22} color="#F59E0B" />
                </div>
                <h4>Results &amp; Slips</h4>
                <p>1-click download of student report cards and fee receipts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions About Mobile Apps</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Experience School Operations in Your Pocket."
        subtitle="Schedule a 10-minute walkthrough of the Pragya teacher and parent mobile apps."
        buttonText="Book a Mobile Demo"
      />
    </div>
  );
}
