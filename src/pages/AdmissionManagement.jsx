import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, CheckCircle2, FileSpreadsheet, ArrowRight, 
  Filter, UserCheck, ShieldCheck, FileCheck, Check 
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function AdmissionManagement() {
  const kanbanColumns = [
    { title: "New Enquiries", count: 18, color: "var(--color-blue)", items: ["Rohit Sharma (Class V)", "Tanvi Sen (Class IX)", "Ishaan Ghosh (Class I)"] },
    { title: "Document Check", count: 9, color: "var(--color-violet)", items: ["Riya Banerjee (Class VII)", "Aarav Roy (Class XI Sc)"] },
    { title: "Principal Interview", count: 5, color: "#D97706", items: ["Aniket Paul (Class IX)", "Sneha Das (Class VI)"] },
    { title: "Enrolled & Paid", count: 42, color: "var(--color-success)", items: ["Priyanka Mukherjee (Class X)", "Soumya Pal (Class VIII)"] }
  ];

  const faqs = [
    { question: 'Does Pragya include an enquiry pipeline board?', answer: 'Yes, front-office staff manage walk-in, phone, and online enquiries on a visual Kanban pipeline.' },
    { question: 'Can documents and photos be attached during admission?', answer: 'Yes, birth certificates, previous marksheets, Transfer Certificates, and guardian IDs are attached directly.' },
    { question: 'Can we import bulk applicants from Excel?', answer: 'Yes, Pragya provides an assisted CSV/Excel importer that validates phone numbers and dates before enrollment.' },
    { question: 'Does admission automatically convert into ongoing student profiles?', answer: 'Yes, accepted applicants immediately receive an admission number, roll assignment, and fee ledger entry without re-typing.' }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="eyebrow"><span className="eyebrow-dot" />ADMISSIONS CRM &amp; INTAKE</div>
            <h1 className="page-hero-title">From First Enquiry to Enrolled Student in Minutes.</h1>
            <p className="page-hero-desc">
              Organise enquiries on a visual Kanban board, verify guardian documentation, and convert accepted applicants into permanent student registers with 1 click.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Book an Admissions Demo</Link>
              <Link to="/student-management" className="btn btn--secondary btn--lg">Explore Student Profiles</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simulated Admissions Kanban Board */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />VISUAL PIPELINE</div>
            <h2>Live Admission Intake Board</h2>
            <p>Track every enquiry, document verification status, and fee clearance stage in real time.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', maxWidth: '1080px', margin: '0 auto' }}>
            {kanbanColumns.map((col, idx) => (
              <div key={idx} style={{ background: 'var(--color-soft-canvas)', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-lg)', padding: '16px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <strong style={{ fontSize: '0.875rem', color: 'var(--color-ink)' }}>{col.title}</strong>
                  <span style={{ background: col.color, color: '#FFFFFF', fontSize: '0.6875rem', fontWeight: 800, padding: '2px 8px', borderRadius: '999px' }}>
                    {col.count}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.items.map((item, i) => (
                    <div key={i} style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-md)', padding: '12px', boxShadow: 'var(--shadow-xs)' }}>
                      <strong style={{ fontSize: '0.8125rem', display: 'block', color: 'var(--color-ink)' }}>{item}</strong>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--color-slate-500)' }}>Applicant ID: WB-2026-{(idx + 1) * 10 + i}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Feature Cards */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />FRONT OFFICE CAPABILITIES</div>
            <h2>Eliminate Admission Season Paper Chaos</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <Users size={28} />
              </div>
              <h3>Central Enquiry Pipeline</h3>
              <p>Log walk-in parents, phone enquiries, and referral applications. Set automatic follow-up reminders for front-desk counselors.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <FileCheck size={28} />
              </div>
              <h3>Document Verification Vault</h3>
              <p>Capture birth certificates, immunization logs, previous school marksheets, and guardian photo identification directly on the form.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(5, 150, 105, 0.08)', color: 'var(--color-success)' }}>
                <CheckCircle2 size={28} />
              </div>
              <h3>1-Click Student Enrollment</h3>
              <p>Accepted applicants automatically convert into active student records, assigning class sections, rolls, and initial admission fee ledgers.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(0, 205, 229, 0.12)', color: '#028394' }}>
                <FileSpreadsheet size={28} />
              </div>
              <h3>Bulk Spreadsheet Migration</h3>
              <p>Migrate thousands of legacy admission records from Excel. Column validation flags missing guardian contacts and invalid dates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Admission Management FAQs</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Explore the Admission Workflow."
        subtitle="See how enquiries move to accepted applications and ongoing student records."
        buttonText="Book an Admissions Demo"
      />
    </>
  );
}
