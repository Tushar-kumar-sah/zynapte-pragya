import React from 'react';
import { Clock, ShieldCheck, Video, CheckCircle2 } from 'lucide-react';
import DemoForm from '../components/DemoForm';
import FaqAccordion from '../components/FaqAccordion';

export default function ContactBookDemo() {
  const trustSignals = [
    { icon: <Clock size={20} color="var(--color-blue)" />, title: "24-Hour Response", desc: "Our product engineering team reviews requirements promptly." },
    { icon: <Video size={20} color="var(--color-violet)" />, title: "Live Screen-Share", desc: "Walk through your school's actual class and fee workflows." },
    { icon: <ShieldCheck size={20} color="var(--color-success)" />, title: "Confidential Discussion", desc: "Your student counts and policies remain 100% private." },
    { icon: <CheckCircle2 size={20} color="var(--color-cyan)" />, title: "No Sales Pressure", desc: "Focus strictly on technical fit and regulatory readiness." }
  ];

  const contactFaqs = [
    {
      question: 'Is a live demonstration available online?',
      answer: 'Yes. We host guided video sessions tailored to your school leaders, principal, and administrative accountants.'
    },
    {
      question: 'Can we request an APAAR-readiness demonstration?',
      answer: 'Yes. Select APAAR Readiness in the interested modules checklist or mention it in the message field.'
    },
    {
      question: 'Can we discuss on-premise server deployment and data migration?',
      answer: 'Yes. Mention your hosting preference (school-managed dedicated server or cloud) and legacy data migration needs.'
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-live-pill" style={{ margin: '0 auto 16px' }}>
              <span className="hero-live-dot" />
              <span>Personalized Institutional Walkthrough</span>
            </div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              SCHEDULE A CONSULTATION
            </div>
            <h1 className="page-hero-title">Let’s Talk About Your School Day.</h1>
            <p className="page-hero-desc">
              Tell us how you manage records today and which processes you want to simplify. We’ll show you the relevant Pragya modules and answer every practical question.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signal Cards */}
      <section className="section section--soft" style={{ padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {trustSignals.map((t, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-lg)', padding: '18px', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: 'var(--shadow-xs)' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--color-slate-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {t.icon}
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9375rem', color: 'var(--color-ink)' }}>{t.title}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>{t.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <DemoForm
            title="Book a Pragya Demo"
            subtitle="Complete the details below so our team can prepare relevant module previews before the conversation."
          />
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions on Booking a Demo</h2>
          </div>
          <FaqAccordion items={contactFaqs} />
        </div>
      </section>
    </>
  );
}
