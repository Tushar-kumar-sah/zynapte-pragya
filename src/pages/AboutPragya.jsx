import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Heart, Award, Shield, Compass, 
  Sparkles, School, Check, ArrowRight, Layers 
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import StatsBanner from '../components/StatsBanner';

export default function AboutPragya() {
  const principles = [
    { title: "Clarity", icon: "🎯", desc: "Make the next school task obvious and eliminate paper-chasing across administrative offices.", color: "var(--color-blue)", bg: "rgba(20, 94, 255, 0.08)" },
    { title: "Continuity", icon: "🔗", desc: "Preserve student academic, medical, and fee history across all 12 years in 1 unified folder.", color: "var(--color-violet)", bg: "rgba(116, 45, 218, 0.08)" },
    { title: "Accountability", icon: "⚖️", desc: "Every mark modification, fee cancellation, and leave approval is permanently recorded in the audit ledger.", color: "var(--color-cyan)", bg: "rgba(0, 205, 229, 0.12)" },
    { title: "Indian Context", icon: "🇮🇳", desc: "Built specifically around APAAR readiness, UDISE+ compliance, WBBSE/CBSE rules, and INR cash counters.", color: "var(--color-success)", bg: "rgba(5, 150, 105, 0.08)" },
    { title: "Data Sovereignty", icon: "🛡️", desc: "Schools own 100% of their database. Deploy on private cloud or on-premise servers with encrypted backups.", color: "var(--color-warning)", bg: "rgba(217, 119, 6, 0.08)" },
    { title: "Role Isolation", icon: "👥", desc: "Protect sensitive student records with strict boundaries for teachers, accountants, and administrators.", color: "var(--color-magenta)", bg: "rgba(236, 50, 204, 0.08)" }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              OUR MISSION &amp; PHILOSOPHY
            </div>
            <h1 className="page-hero-title">Less Administration. More Room for Learning.</h1>
            <p className="page-hero-desc">
              Schools run on the dedication of teachers and leaders. Pragya eliminates chaotic paper registers, providing one connected digital backbone built for Indian education.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Book a School Walkthrough</Link>
              <Link to="/features" className="btn btn--secondary btn--lg">Explore All Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <StatsBanner />

      {/* Visual Principles Grid */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              CORE PILLARS
            </div>
            <h2>The Principles Behind Pragya ERP</h2>
            <p>Every feature in Pragya is built around simplicity, accuracy, and absolute data privacy.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {principles.map((p, i) => (
              <div key={i} style={{ background: 'var(--color-soft-canvas)', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-lg)', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '16px' }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-ink)', marginBottom: '8px' }}>{p.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-600)', lineHeight: '1.6', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pragya Exists */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              PURPOSE-BUILT FOR INDIA
            </div>
            <h2>Why Indian Schools Choose Pragya</h2>
            <p>
              Unlike generic international school software, Pragya is grounded in the operational realities of Indian school desks.
            </p>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-xl)', padding: '32px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <CheckCircle2 size={20} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--color-ink)', display: 'block' }}>APAAR Pre-Validation</strong>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-600)', margin: '4px 0 0' }}>Spot consent slips and Aadhaar spelling mismatches before preparing export sheets.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <CheckCircle2 size={20} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--color-ink)', display: 'block' }}>State &amp; National Boards</strong>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-600)', margin: '4px 0 0' }}>Pre-configured WBBSE, WBCHSE, and CBSE marksheet calculations and grading rules.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <CheckCircle2 size={20} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--color-ink)', display: 'block' }}>INR Counter Cash &amp; POS</strong>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-600)', margin: '4px 0 0' }}>3-Second printed receipts, sibling waivers, and real-time cash drawer tallying.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <CheckCircle2 size={20} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--color-ink)', display: 'block' }}>Multi-Branch Switching</strong>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-600)', margin: '4px 0 0' }}>1-Click executive toggle across school chains with segregated accounting ledgers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomCta />
    </>
  );
}
