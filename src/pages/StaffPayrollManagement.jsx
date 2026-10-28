import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSpreadsheet, UserCheck, ShieldCheck, DollarSign, 
  Printer, ArrowRight, Check, Users, Clock, FileText 
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function StaffPayrollManagement() {
  const faqs = [
    { question: 'Does Pragya support staff leave tracking & salary deductions?', answer: 'Yes, casual, medical, and earned leave balances are tracked. Unpaid absences automatically calculate daily salary deductions.' },
    { question: 'Can we generate printable payslips in PDF?', answer: 'Yes, staff can download encrypted monthly payslips with detailed allowance (DA, HRA) and deduction (EPF, PT) breakdowns.' },
    { question: 'Can we import faculty and staff from Excel?', answer: 'Yes, bulk employee imports include designations, qualification documents, bank account details, and PAN numbers.' },
    { question: 'Does it produce bank transfer payout files?', answer: 'Yes, Pragya exports standard NEFT/RTGS batch transfer Excel/CSV sheets for direct bank portal processing.' }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-live-pill" style={{ margin: '0 auto 16px' }}>
              <span className="hero-live-dot" />
              <span>Automated Gross-to-Net Payroll &bull; Bank Transfer Export</span>
            </div>
            <div className="eyebrow"><span className="eyebrow-dot" />STAFF HR &amp; PAYROLL ENGINE</div>
            <h1 className="page-hero-title">Make Staff Administration as Organised as Your Academics.</h1>
            <p className="page-hero-desc">
              Manage teacher profiles, biometric presence, leave ledgers, monthly salary slips, and confidential bank payouts from 1 secure console.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Book an HR &amp; Payroll Demo</Link>
              <Link to="/features" className="btn btn--secondary btn--lg">Explore All Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simulated Confidential Staff Payslip */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />SALARY SLIP PREVIEW</div>
            <h2>Automated Monthly Staff Payslips (INR)</h2>
            <p>Generated in 1 click and delivered securely to employee mobile apps and emails.</p>
          </div>

          <div style={{ maxWidth: '680px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-xl)', padding: '28px', boxShadow: 'var(--shadow-md)', fontFamily: 'monospace' }}>
            <div style={{ textAlign: 'center', borderBottom: '1px solid var(--color-slate-300)', paddingBottom: '14px', marginBottom: '14px' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-ink)' }}>PRAGYA HERITAGE HIGH SCHOOL</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>MONTHLY SALARY SLIP • FOR THE MONTH OF OCTOBER 2026</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 20px', fontSize: '0.8125rem', marginBottom: '16px', background: 'var(--color-soft-canvas)', padding: '12px', borderRadius: 'var(--radius-md)' }}>
              <div><strong>Employee:</strong> Prof. Sourav Mukherjee</div>
              <div><strong>Employee ID:</strong> EMP-T-104</div>
              <div><strong>Designation:</strong> Senior Maths Teacher</div>
              <div><strong>Department:</strong> Secondary Faculty</div>
              <div><strong>Bank A/C:</strong> ********4819 (SBI)</div>
              <div><strong>Days Worked:</strong> 26 / 26 Days</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '0.8125rem', marginBottom: '16px' }}>
              {/* Earnings */}
              <div style={{ border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-md)', padding: '12px' }}>
                <strong style={{ display: 'block', borderBottom: '1px solid var(--color-slate-200)', paddingBottom: '6px', marginBottom: '8px', color: 'var(--color-success)' }}>
                  EARNINGS &amp; ALLOWANCES
                </strong>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Basic Pay</span>
                  <strong>₹32,500.00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Dearness Allowance (DA)</span>
                  <strong>₹8,125.00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>House Rent (HRA)</span>
                  <strong>₹4,875.00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--color-slate-200)', paddingTop: '6px', marginTop: '6px' }}>
                  <strong>Gross Earnings</strong>
                  <strong style={{ color: 'var(--color-success)' }}>₹45,500.00</strong>
                </div>
              </div>

              {/* Deductions */}
              <div style={{ border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-md)', padding: '12px' }}>
                <strong style={{ display: 'block', borderBottom: '1px solid var(--color-slate-200)', paddingBottom: '6px', marginBottom: '8px', color: 'var(--color-danger)' }}>
                  DEDUCTIONS &amp; TAXES
                </strong>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Provident Fund (EPF)</span>
                  <strong>₹3,900.00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Professional Tax (PT)</span>
                  <strong>₹200.00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>TDS / Income Tax</span>
                  <strong>₹1,200.00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--color-slate-200)', paddingTop: '6px', marginTop: '6px' }}>
                  <strong>Total Deductions</strong>
                  <strong style={{ color: 'var(--color-danger)' }}>₹5,300.00</strong>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--color-ink)', color: '#FFFFFF', padding: '12px 16px', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>NET SALARY TRANSFERRED (INR)</div>
                <strong style={{ fontSize: '1.25rem', color: '#6EE7B7' }}>₹40,200.00</strong>
              </div>
              <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '4px' }}>
                Direct NEFT Dispatched
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Feature Cards */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />CAPABILITIES</div>
            <h2>Modern Human Resource Management for Schools</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <Users size={28} />
              </div>
              <h3>Faculty &amp; Staff Dossiers</h3>
              <p>Store educational credentials, B.Ed certifications, teacher service books, appointment letters, and emergency contacts in 1 place.</p>
              <div className="feature-card-tags">
                <span className="badge badge--blue">Service Books</span>
                <span className="badge badge--blue">Qualifications</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <Clock size={28} />
              </div>
              <h3>Leave Ledgers &amp; Approvals</h3>
              <p>Teachers request casual or medical leaves on their smartphone app. Principals approve leaves with 1 tap, auto-updating pay registers.</p>
              <div className="feature-card-tags">
                <span className="badge badge--violet">Mobile Approval</span>
                <span className="badge badge--violet">Auto-Deductions</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(5, 150, 105, 0.08)', color: 'var(--color-success)' }}>
                <DollarSign size={28} />
              </div>
              <h3>1-Click Monthly Payroll Engine</h3>
              <p>Process 100+ teacher salaries in seconds. Handles basic pay, allowances, EPF, professional tax, and generates batch bank payout files.</p>
              <div className="feature-card-tags">
                <span className="badge badge--green">Bank Transfer File</span>
                <span className="badge badge--green">EPF Calculation</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(0, 205, 229, 0.12)', color: '#028394' }}>
                <Printer size={28} />
              </div>
              <h3>Confidential Payslip Vault</h3>
              <p>Teachers access past payslips and Form 16 summaries from their personal mobile portal without visiting administrative offices.</p>
              <div className="feature-card-tags">
                <span className="badge badge--cyan">PDF Slips</span>
                <span className="badge badge--cyan">Form 16 Summary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />FAQS</div>
            <h2>Staff Administration &amp; Payroll FAQs</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Connect Workforce Processes With School Operations."
        subtitle="Manage teacher profiles, leave, presence and monthly salary slips from one unified workspace."
        buttonText="Explore Staff &amp; Payroll"
      />
    </>
  );
}
