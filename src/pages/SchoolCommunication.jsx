import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, Mail, MessageSquare, AlertCircle, 
  CheckCircle2, ArrowRight, ShieldCheck, Check, Smartphone,
  FileText, Send, Users, Shield
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function SchoolCommunication() {
  const faqs = [
    { question: 'Can schools publish circulars to specific classes or grades?', answer: 'Yes, notices can be targeted to specific classes, sections, staff groups, or published campus-wide with PDF attachments.' },
    { question: 'Is in-app teacher-parent messaging regulated?', answer: 'Yes, school-governed rules ensure messaging occurs during office hours only, preventing uncontrolled after-hours chats.' },
    { question: 'Can it deliver emails through the school’s domain?', answer: 'Yes, Pragya connects with your institution’s own SMTP mail server (Google Workspace, Microsoft 365, or private server).' },
    { question: 'Are automated SMS and WhatsApp delivery live today?', answer: 'In-app notification ribbons and school email dispatch are operational today. Automated WhatsApp and SMS gateways dispatch alerts directly to verified parent mobile numbers.' }
  ];

  const commCards = [
    {
      title: 'School-Governed Notice Ribbon',
      badge: 'Zero Spam',
      image: '/real-photos/real-mobile-comm.jpg',
      tagline: 'Replace unmoderated WhatsApp groups with official broadcast circulars with verified read receipts.',
      chips: ['Class-Targeted', 'PDF Attachments', 'Principal Moderation']
    },
    {
      title: 'Daily Homework & Diary Feed',
      badge: 'Student App Feed',
      image: '/real-photos/real-teacher-instruct.jpg',
      tagline: 'Subject teachers post assignments, syllabus topics, and tomorrow’s materials directly to student diaries.',
      chips: ['Subject Scoping', 'Attachment Upload', 'Parent Push Notice']
    },
    {
      title: 'Emergency SMS & WhatsApp Gateways',
      badge: 'Instant Delivery',
      image: '/real-photos/real-campus-building.jpg',
      tagline: 'Instant broadcast alerts for weather disruptions, holiday announcements, and bus delays directly to parents.',
      chips: ['DND Bypass Enabled', 'Delivery Audit Log', '1-Click Campus Broadcast']
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
                COMMUNICATION &amp; NOTICES
              </div>
              <h1 className="solutions-gov-title">
                Keep School Communication Clear, Timely and Controlled.
              </h1>
              <p className="solutions-gov-desc">
                Replace chaotic, unmoderated chat groups. Broadcast verified circulars, target homework updates, and deliver official notices through school servers.
              </p>

              <div className="solutions-hero-actions">
                <a href="#notice-preview" className="apaar-link-arrow">
                  <span>Inspect Official Circular</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Explore Communication
                </Link>
              </div>

              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>Targeted Circulars</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>WhatsApp &amp; App Push</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>Zero Spam Groups</span>
                </span>
              </div>
            </div>

            {/* Right: Real Mobile Photo with Live Circular Status */}
            <div className="solutions-gov-hero-visual">
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(15,23,42,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img 
                    src="/real-photos/real-mobile-comm.jpg" 
                    alt="Smartphone with school notification portal" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                    Official Circular Channel
                  </div>
                </div>

                <div style={{ padding: '14px 18px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>CIRCULAR STATUS</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#059669' }}>Published</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>DELIVERY RATE</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: 'var(--color-blue)' }}>99.4%</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>PARENT VIEWS</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#742DDA' }}>412 Reads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OFFICIAL DIGITAL NOTICE RIBBON */}
      <section className="section section--white" id="notice-preview">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />OFFICIAL CIRCULAR PREVIEW</div>
            <h2>School-Governed Notice Ribbon</h2>
            <p>Targeted to parents and teachers with read receipts and PDF attachments.</p>
          </div>

          <div style={{ maxWidth: '680px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', padding: '24px', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-slate-200)', paddingBottom: '10px', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: 'rgba(20, 94, 255, 0.1)', color: 'var(--color-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bell size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--color-ink)' }}>Notice Ref: CIR/2026/104</strong>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-slate-500)' }}>Issued by: Office of the Principal • Today, 09:30 AM</div>
                </div>
              </div>
              <span className="sec-chip" style={{ background: '#EFF6FF', color: 'var(--color-blue)', borderColor: '#BFDBFE' }}>
                Target: Classes IX to XII
              </span>
            </div>

            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-ink)', marginBottom: '8px', fontWeight: 850 }}>
              Annual Science Exhibition &amp; Term 2 Assessment Schedule
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'var(--color-slate-600)', lineHeight: 1.5, marginBottom: '16px' }}>
              This is to notify all parents of Classes IX through XII that the Annual Science Project Exhibition will be conducted on Saturday, 14 November. Attendance is mandatory. Project submissions close on Friday with your respective science teachers.
            </p>

            <div style={{ background: '#F8FAFC', border: '1px solid var(--color-slate-200)', borderRadius: '6px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={16} color="var(--color-blue)" />
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-ink)' }}>Exhibition_Guidelines_2026.pdf (1.2 MB)</span>
              </div>
              <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 750 }}>
                ✓ Official Seal Verified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL REAL PHOTO CAPABILITY CARDS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />COMMUNICATION FEATURES</div>
            <h2>Built for Campus Transparency</h2>
            <p>Ensure critical school notifications reach the right parents every time.</p>
          </div>

          <div className="role-gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {commCards.map((card, i) => (
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
            <h2>The Controlled <span>Circular Workflow</span></h2>
            <p>From notice draft to targeted delivery on parent smartphones.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <FileText size={22} color="#145EFF" />
                </div>
                <h4>Draft Circular</h4>
                <p>Principal or teacher composes notice with PDF attachment</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <Users size={22} color="#059669" />
                </div>
                <h4>Select Audience</h4>
                <p>Target specific classes, sections, bus routes, or staff</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <Send size={22} color="#742DDA" />
                </div>
                <h4>Multi-Channel Push</h4>
                <p>Delivered via parent mobile app, SMS, and WhatsApp</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <CheckCircle2 size={22} color="#F59E0B" />
                </div>
                <h4>Read Receipts</h4>
                <p>Real-time delivery audit reveals which parents opened the notice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />COMMUNICATION FAQS</div>
            <h2>Frequently Asked Questions About Notices</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Regain Control of Your School Communications."
        subtitle="Book a walkthrough of Pragya's school-governed notification ribbon and broadcast channels."
        buttonText="Book a Communication Demo"
      />
    </div>
  );
}
