import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, Mail, MessageSquare, AlertCircle, 
  CheckCircle2, ArrowRight, ShieldCheck, Check, Smartphone 
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function SchoolCommunication() {
  const faqs = [
    { question: 'Can schools publish circulars to specific classes or grades?', answer: 'Yes, notices can be targeted to specific classes, sections, staff groups, or published campus-wide with PDF attachments.' },
    { question: 'Is in-app teacher-parent messaging regulated?', answer: 'Yes, school-governed rules ensure messaging occurs during office hours only, preventing uncontrolled after-hours chats.' },
    { question: 'Can it deliver emails through the school’s domain?', answer: 'Yes, Pragya connects with your institution’s own SMTP mail server (Google Workspace, Microsoft 365, or private server).' },
    { question: 'Are automated SMS and WhatsApp delivery live today?', answer: 'In-app notification ribbons and school email dispatch are operational today. External bulk SMS and WhatsApp API gateways are on the release roadmap.' }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-live-pill" style={{ margin: '0 auto 16px' }}>
              <span className="hero-live-dot" />
              <span>School-Governed Messaging &bull; Official Digital Circulars</span>
            </div>
            <div className="eyebrow"><span className="eyebrow-dot" />COMMUNICATION &amp; NOTICES</div>
            <h1 className="page-hero-title">Keep School Communication Clear, Timely and Controlled.</h1>
            <p className="page-hero-desc">
              Replace chaotic, unmoderated chat groups. Broadcast verified circulars, target homework updates, and deliver official emails through school servers.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Explore School Communication</Link>
              <Link to="/school-erp-mobile-app" className="btn btn--secondary btn--lg">See Mobile App</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simulated Official Digital Notice Ribbon */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />OFFICIAL CIRCULAR PREVIEW</div>
            <h2>School-Governed Notice Ribbon</h2>
            <p>Targeted to parents and teachers with read receipts and PDF attachments.</p>
          </div>

          <div style={{ maxWidth: '680px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-xl)', padding: '24px', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-slate-200)', paddingBottom: '12px', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(236, 50, 204, 0.1)', color: 'var(--color-magenta)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bell size={20} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--color-ink)' }}>Notice Ref: CIR/2026/104</strong>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>Issued by: Office of the Principal • 28 Oct 2026</div>
                </div>
              </div>
              <span className="badge badge--magenta">Target: Classes IX to XII</span>
            </div>

            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-ink)', marginBottom: '8px' }}>
              Winter Timings &amp; Uniform Transition Schedule
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-600)', lineHeight: '1.6', marginBottom: '16px' }}>
              Please note that starting Monday, 3rd November 2026, the school morning assembly will commence at 08:30 AM instead of 08:00 AM. All students must wear the approved navy-blue woollen blazer and school tie.
            </p>

            <div style={{ background: 'var(--color-soft-canvas)', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-md)', padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
              <span>📎 Winter_Schedule_Guidelines.pdf (240 KB)</span>
              <span style={{ color: 'var(--color-blue)', fontWeight: 700, cursor: 'pointer' }}>Download Attachment</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '12px', borderTop: '1px dashed var(--color-slate-200)', fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>
              <span>Delivered to 284 parent mobile devices</span>
              <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>✓ Read by 241 Families (84.8%)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Feature Cards with Icons */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />CHANNELS</div>
            <h2>Orderly, Respectful School Communications</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(236, 50, 204, 0.08)', color: 'var(--color-magenta)' }}>
                <Bell size={28} />
              </div>
              <h3>Targeted Circular Ribbon</h3>
              <p>Publish announcements to specific sections, classes, or entire campuses with read confirmation tracking.</p>
              <div className="feature-card-tags">
                <span className="badge badge--magenta">Target Groups</span>
                <span className="badge badge--magenta">PDF Attachments</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <MessageSquare size={28} />
              </div>
              <h3>Governed In-App Chat</h3>
              <p>Facilitates purposeful communication without giving out personal phone numbers, restricted strictly to working hours.</p>
              <div className="feature-card-tags">
                <span className="badge badge--blue">Boundary Controls</span>
                <span className="badge badge--blue">Zero Phone Sharing</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <Mail size={28} />
              </div>
              <h3>Institutional Email Server</h3>
              <p>Connects directly to your school's private SMTP server, sending official fee receipts and admissions confirmations.</p>
              <div className="feature-card-tags">
                <span className="badge badge--violet">School Domain</span>
                <span className="badge badge--violet">Encrypted Relay</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(0, 205, 229, 0.12)', color: '#028394' }}>
                <Smartphone size={28} />
              </div>
              <h3>Daily Homework Diary</h3>
              <p>Teachers post subject-wise homework worksheets and test reminders directly to student and parent mobile apps.</p>
              <div className="feature-card-tags">
                <span className="badge badge--cyan">Worksheet Upload</span>
                <span className="badge badge--cyan">Due Date Reminders</span>
              </div>
            </div>
          </div>

          {/* Roadmap Notice */}
          <div style={{ marginTop: '36px', background: 'var(--color-warning-bg)', border: '1px solid rgba(217, 119, 6, 0.3)', borderRadius: 'var(--radius-lg)', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <AlertCircle size={28} color="var(--color-warning)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ display: 'block', color: 'var(--color-ink)', fontSize: '0.95rem', marginBottom: '2px' }}>
                External Telecom Gateways Notice:
              </strong>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-slate-700)' }}>
                In-app notice ribbons, mobile diary feeds, and school SMTP email relay are live today. Bulk external SMS and WhatsApp broadcast APIs are planned on our product roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />FAQS</div>
            <h2>School Communication FAQs</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Show Your Team a Simpler Way to Stay Informed."
        subtitle="Explore communication tools designed specifically for school coordination."
        buttonText="Request a Communication Demo"
      />
    </>
  );
}
