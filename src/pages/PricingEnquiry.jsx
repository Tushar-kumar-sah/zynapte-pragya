import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ShieldCheck, School, Users, 
  Layers, ArrowRight, Check, Award, Sparkles 
} from 'lucide-react';
import DemoForm from '../components/DemoForm';
import FaqAccordion from '../components/FaqAccordion';

export default function PricingEnquiry() {
  const tiers = [
    {
      name: "Single Campus Standard",
      badge: "CORE SCHOOL",
      badgeColor: "badge--blue",
      desc: "Ideal for standalone primary or secondary schools establishing single-source digital records.",
      features: [
        "Student Digital Dossier & ID Card Studio",
        "1-Tap Class Roll Call & Mobile Attendance",
        "WBBSE / CBSE Exam & Report Cards",
        "Counter Fee POS with Thermal Receipts",
        "APAAR Parental Consent & PEN Tracking",
        "School-Controlled Server Setup"
      ],
      popular: false
    },
    {
      name: "Comprehensive Campus Pro",
      badge: "MOST POPULAR",
      badgeColor: "badge--cyan",
      desc: "For K-12 institutions requiring complete automation across academics, finance, and mobile apps.",
      features: [
        "All Standard Modules Included",
        "Conflict-Free Timetable Builder",
        "Staff Payroll & Monthly PDF Payslips",
        "Parent & Teacher Native Mobile Apps",
        "Official School Circular & Notice Ribbon",
        "Assisted Excel Migration Concierge",
        "Priority On-Site Staff Onboarding"
      ],
      popular: true
    },
    {
      name: "Multi-Branch Enterprise",
      badge: "GROUP & CHAINS",
      badgeColor: "badge--violet",
      desc: "Tailored for school trusts, educational societies, and multi-campus institutions.",
      features: [
        "All Comprehensive Pro Modules Included",
        "Multi-Branch Executive Master Switcher",
        "Branch-Isolated Database Partitions",
        "Consolidated Group Financial Reporting",
        "Inter-Branch Student Transfer Engine",
        "Custom Domain & Single Sign-On (SSO)",
        "Dedicated Technical Account Manager"
      ],
      popular: false
    }
  ];

  const pricingFaqs = [
    { question: 'How is Pragya pricing structured for schools?', answer: 'Pricing is tailored transparently to your enrolled student count, chosen modules, and deployment model (private cloud or on-premise server).' },
    { question: 'Is every module included or can we choose a subset?', answer: 'You can license only the modules your departments need today, and activate additional modules like payroll or timetable later.' },
    { question: 'Are there hidden per-transaction fee cuts?', answer: 'No per-transaction fee penalties on cash or counter POS. All school fee collections belong 100% to your institution.' },
    { question: 'Is data migration from existing spreadsheets supported?', answer: 'Yes, our assisted field-mapping workflow imports student and staff databases with zero data loss.' }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="eyebrow"><span className="eyebrow-dot" />PLANS &amp; PROPOSALS</div>
            <h1 className="page-hero-title">Tailored Specifically to Your School's Student Count.</h1>
            <p className="page-hero-desc">
              Whether you run a standalone primary academy or a network of senior secondary campuses, get a transparent written proposal tailored to your actual workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Tier Packages */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />FLEXIBLE PACKAGES</div>
            <h2>Choose the Operational Scope for Your Campus</h2>
            <p>Every tier includes complete data ownership and encrypted nightly backups.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', alignItems: 'stretch', marginBottom: '50px' }}>
            {tiers.map((tier, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: tier.popular ? '#FFFFFF' : 'var(--color-soft-canvas)', 
                  border: tier.popular ? '2px solid var(--color-blue)' : '1px solid var(--color-slate-200)',
                  borderRadius: 'var(--radius-xl)', 
                  padding: '32px 24px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: tier.popular ? 'var(--shadow-xl)' : 'var(--shadow-xs)'
                }}
              >
                {tier.popular && (
                  <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-blue)', color: '#FFFFFF', fontSize: '0.6875rem', fontWeight: 800, padding: '4px 14px', borderRadius: '999px', letterSpacing: '0.05em' }}>
                    RECOMMENDED FOR K-12
                  </span>
                )}

                <div style={{ marginBottom: '16px' }}>
                  <span className={`badge ${tier.badgeColor}`}>{tier.badge}</span>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-ink)', margin: '10px 0 6px' }}>{tier.name}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-600)', minHeight: '38px', margin: 0 }}>{tier.desc}</p>
                </div>

                <div style={{ borderTop: '1px solid var(--color-slate-200)', borderBottom: '1px solid var(--color-slate-200)', padding: '16px 0', margin: '16px 0' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-slate-500)', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.05em' }}>
                    INCLUDED CAPABILITIES
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {tier.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8125rem', color: 'var(--color-slate-700)' }}>
                        <CheckCircle2 size={16} color="var(--color-success)" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <a href="#quote-form" className={`btn ${tier.popular ? 'btn--primary' : 'btn--secondary'}`} style={{ width: '100%', textAlign: 'center' }}>
                    Request Proposal for {tier.name.split(' ')[0]}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div id="quote-form" style={{ marginTop: '50px' }}>
            <DemoForm
              title="Request a Tailored School Quote &amp; Demo"
              subtitle="Tell us about your school and student strength. We’ll prepare a customized proposal and guided walkthrough within 24 hours."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <h2>Pricing &amp; Proposal FAQs</h2>
          </div>
          <FaqAccordion items={pricingFaqs} />
        </div>
      </section>
    </>
  );
}
