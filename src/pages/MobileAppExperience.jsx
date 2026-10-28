import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, CheckCircle2, ShieldCheck, Bell, Award, 
  ArrowRight, Download, Wifi, Lock, Zap, Check 
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';
import MobileAppsShowcase from '../components/MobileAppsShowcase';

export default function MobileAppExperience() {
  const faqs = [
    { question: 'Does Pragya work on Android?', answer: 'Yes. An Android mobile application is available for core school workflows including student records, staff roll calls, fees and circulars.' },
    { question: 'Does it work on iOS / iPhone?', answer: 'Yes. Pragya provides native iOS app support for Apple devices, maintaining strict role boundaries and secure token sign-in.' },
    { question: 'Can students and parents use mobile workflows?', answer: 'Yes. Student/parent views allow checking homework diaries, viewing term examination marks, and downloading counter fee receipts.' },
    { question: 'Is a dedicated parent payment checkout live?', answer: 'Counter fee collection is fully operational today. Online parent app self-checkout is scheduled on the product roadmap.' }
  ];

  const quickFeatures = [
    {
      icon: <Zap size={24} />,
      color: "var(--color-blue)",
      bg: "rgba(20, 94, 255, 0.08)",
      title: "1-Tap Class Roll Call",
      desc: "Teachers mark entire classrooms present in under 40 seconds with immediate sync to the administrative office."
    },
    {
      icon: <Bell size={24} />,
      color: "var(--color-violet)",
      bg: "rgba(116, 45, 218, 0.08)",
      title: "Official Circular Ribbon",
      desc: "Emergency school alerts, holiday schedules, and principal notifications delivered cleanly without noisy chat spam."
    },
    {
      icon: <Lock size={24} />,
      color: "var(--color-success)",
      bg: "rgba(5, 150, 105, 0.08)",
      title: "Biometric & PIN Security",
      desc: "Fingerprint and Face Unlock keep student grades and financial records protected even on shared family devices."
    },
    {
      icon: <Wifi size={24} />,
      color: "var(--color-cyan)",
      bg: "rgba(0, 205, 229, 0.12)",
      title: "Offline-Friendly Attendance",
      desc: "Mark attendance on the sports field or basement labs with automatic synchronization once Wi-Fi reconnects."
    }
  ];

  return (
    <>
      {/* Mobile Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-live-pill" style={{ margin: '0 auto 16px' }}>
              <span className="hero-live-dot" />
              <span>Native iOS &amp; Android Apps Available</span>
            </div>
            <div className="eyebrow"><span className="eyebrow-dot" />SCHOOL ERP MOBILE APPS</div>
            <h1 className="page-hero-title">Your School Workflows, Wherever the Day Takes You.</h1>
            <p className="page-hero-desc">
              From morning roll calls on the sports field to principal oversight during campus rounds, Pragya brings essential school actions directly to smartphones.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Request a Mobile App Walkthrough</Link>
              <Link to="/features" className="btn btn--secondary btn--lg">Explore All Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3-App Phone Showcase */}
      <MobileAppsShowcase />

      {/* Visual Quick Features Grid */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />MOBILE CAPABILITIES</div>
            <h2>Built Specifically for School Hands</h2>
            <p>Designed for fast taps and clear contrast so teachers and administrators get things done without extra clicks.</p>
          </div>

          <div className="features-grid">
            {quickFeatures.map((q, i) => (
              <div key={i} className="feature-card">
                <div className="feature-card-icon" style={{ color: q.color, backgroundColor: q.bg }}>
                  {q.icon}
                </div>
                <h3>{q.title}</h3>
                <p>{q.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '36px', background: 'var(--color-soft-canvas)', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-lg)', padding: '24px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flexGrow: 1 }}>
              <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-ink)', marginBottom: '4px' }}>
                Store Deployment Note:
              </strong>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-600)', margin: 0 }}>
                Pragya provides private school builds and enterprise store distribution for iOS and Android. Direct public store links are released in tandem with institutional deployments.
              </p>
            </div>
            <Link to="/contact" className="btn btn--primary btn--sm">
              Inquire About App Setup
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile FAQ */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <h2>Mobile App Questions, Answered</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="See How Pragya Fits the Way Your Team Works."
        subtitle="We will demonstrate supported mobile workflows alongside the main school platform."
        buttonText="Request Mobile Walkthrough"
      />
    </>
  );
}
