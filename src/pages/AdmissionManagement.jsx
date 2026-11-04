import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, CheckCircle2, FileSpreadsheet, ArrowRight, 
  Filter, UserCheck, ShieldCheck, FileCheck, Check,
  UserPlus, Award, CreditCard, Sparkles
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function AdmissionManagement() {
  const kanbanColumns = [
    { title: "New Enquiries", count: 18, color: "var(--color-blue)", items: ["Rohit Sharma (Class V)", "Tanvi Sen (Class IX)", "Ishaan Ghosh (Class I)"] },
    { title: "Document Check", count: 9, color: "#742DDA", items: ["Riya Banerjee (Class VII)", "Aarav Roy (Class XI Sc)"] },
    { title: "Principal Interview", count: 5, color: "#D97706", items: ["Aniket Paul (Class IX)", "Sneha Das (Class VI)"] },
    { title: "Enrolled & Paid", count: 42, color: "#059669", items: ["Priyanka Mukherjee (Class X)", "Soumya Pal (Class VIII)"] }
  ];

  const faqs = [
    { question: 'Does Pragya include an enquiry pipeline board?', answer: 'Yes, front-office staff manage walk-in, phone, and online enquiries on a visual Kanban pipeline.' },
    { question: 'Can documents and photos be attached during admission?', answer: 'Yes, birth certificates, previous marksheets, Transfer Certificates (TC), and guardian IDs attach directly.' },
    { question: 'Can we import bulk applicants from Excel?', answer: 'Yes, Pragya provides an assisted CSV/Excel importer that validates phone numbers and dates before enrollment.' },
    { question: 'Does admission automatically convert into ongoing student profiles?', answer: 'Yes, accepted applicants immediately receive an admission number, roll assignment, and fee ledger entry without re-typing.' }
  ];

  const admissionCards = [
    {
      title: 'Visual Intake Kanban Pipeline',
      badge: 'Zero Lost Inquiries',
      image: '/real-photos/real-students-study.jpg',
      tagline: 'Track every inquiry from walk-in visit to application fee, interview scheduling, and final enrollment.',
      chips: ['Kanban Drag-and-Drop', 'Follow-Up Reminders', 'Source Analytics']
    },
    {
      title: '1-Click Student Profile Conversion',
      badge: 'Zero Retyping',
      image: '/real-photos/real-bangalore-school-coding.jpg',
      tagline: 'When an applicant pays the admission fee, their profile, photos, and birth documents convert into an active student record.',
      chips: ['Auto Roll Number', 'Admission Book Entry', 'Fee Slabs Linked']
    },
    {
      title: 'Document Verification Vault',
      badge: 'Compliance First',
      image: '/real-photos/real-fee-accounting.jpg',
      tagline: 'Store birth certificates, Transfer Certificates (TC), medical records, and caste certificates safely in encrypted cloud storage.',
      chips: ['PDF & Image Scans', 'Missing Document Alert', 'Verification Stamp']
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
                ADMISSIONS CRM &amp; INTAKE
              </div>
              <h1 className="solutions-gov-title">
                From First Enquiry to Enrolled Student in Minutes.
              </h1>
              <p className="solutions-gov-desc">
                Organise enquiries on a visual Kanban board, verify guardian documentation, and convert accepted applicants into permanent student registers with 1 click.
              </p>

              <div className="solutions-hero-actions">
                <a href="#intake-pipeline" className="apaar-link-arrow">
                  <span>View Admissions Board</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Book an Admissions Demo
                </Link>
              </div>

              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>Visual Pipeline Board</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>1-Click Auto Student ID</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>Document Vault</span>
                </span>
              </div>
            </div>

            {/* Right: Real Students Photo with Live Admission Intake Badge */}
            <div className="solutions-gov-hero-visual">
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(15,23,42,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img 
                    src="/real-photos/real-students-study.jpg" 
                    alt="Indian students studying and admission candidates" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                    Academic Session 2026-27
                  </div>
                </div>

                <div style={{ padding: '14px 18px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>ENQUIRIES</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: 'var(--color-blue)' }}>74 Inquiries</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>ENROLLED</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#059669' }}>42 Students</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>CONVERSION</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#742DDA' }}>56.7% Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADMISSIONS KANBAN BOARD */}
      <section className="section section--white" id="intake-pipeline">
        <div className="container">
          <div className="section-header">
            <h2>Live Admission Intake Board</h2>
            <p>Track every enquiry, document verification status, and fee clearance stage in real time.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '14px', maxWidth: '1080px', margin: '0 auto' }}>
            {kanbanColumns.map((col, idx) => (
              <div key={idx} style={{ background: '#F8FAFC', border: '1px solid var(--color-slate-200)', borderRadius: '8px', padding: '14px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', paddingBottom: '8px', borderBottom: '1px solid var(--color-slate-200)' }}>
                  <strong style={{ fontSize: '0.82rem', color: 'var(--color-ink)' }}>{col.title}</strong>
                  <span style={{ background: col.color, color: '#FFFFFF', fontSize: '0.68rem', fontWeight: 800, padding: '2px 8px', borderRadius: '4px' }}>
                    {col.count}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                  {col.items.map((item, i) => (
                    <div key={i} style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '6px', padding: '10px', fontSize: '0.78rem', boxShadow: 'var(--shadow-sm)' }}>
                      <div style={{ fontWeight: 700, color: 'var(--color-ink)', marginBottom: '3px' }}>{item}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--color-slate-400)' }}>Applicant Ref #APP-0{idx}{i}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISUAL REAL PHOTO CAPABILITY CARDS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <h2>Built for Front-Desk &amp; Principals</h2>
            <p>Eliminate paper registration queues and missed applicant follow-ups.</p>
          </div>

          <div className="role-gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {admissionCards.map((card, i) => (
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
            <h2>The Student <span>Admission Lifecycle</span></h2>
            <p>From initial parent enquiry to official enrollment and roll call placement.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <UserPlus size={22} color="#145EFF" />
                </div>
                <h4>Enquiry Intake</h4>
                <p>Log walk-in, phone, or online applicant inquiries instantly</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <FileCheck size={22} color="#059669" />
                </div>
                <h4>Document Check</h4>
                <p>Verify birth certificate, previous TC, and Aadhaar scan</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <CreditCard size={22} color="#742DDA" />
                </div>
                <h4>Fee Clearance</h4>
                <p>3-second counter receipt for admission and tuition fee deposit</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <CheckCircle2 size={22} color="#F59E0B" />
                </div>
                <h4>1-Click Enrolled</h4>
                <p>Auto-assigns class, section, roll number, and smart ID card</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions About Admissions</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Speed Up Your Admission Season."
        subtitle="Book a walkthrough of Pragya's visual admissions pipeline and 1-click student conversion."
        buttonText="Book an Admissions Demo"
      />
    </div>
  );
}
