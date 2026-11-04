import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSpreadsheet, UserCheck, ShieldCheck, DollarSign, 
  Printer, ArrowRight, Check, Users, Clock, FileText,
  CreditCard, CheckCircle2, Building2, BarChart3
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function StaffPayrollManagement() {
  const [selectedCategory, setSelectedCategory] = useState('teaching');

  const faqs = [
    { question: 'Does Pragya support staff leave tracking & salary deductions?', answer: 'Yes, casual, medical, and earned leave balances are tracked. Unpaid absences automatically calculate daily salary deductions.' },
    { question: 'Can we generate printable payslips in PDF?', answer: 'Yes, staff can download encrypted monthly payslips with detailed allowance (DA, HRA) and deduction (EPF, PT) breakdowns.' },
    { question: 'Can we import faculty and staff from Excel?', answer: 'Yes, bulk employee imports include designations, qualification documents, bank account details, and PAN numbers.' },
    { question: 'Does it produce bank transfer payout files?', answer: 'Yes, Pragya exports standard NEFT/RTGS batch transfer Excel/CSV sheets for direct bank portal processing.' }
  ];

  const payrollCards = [
    {
      title: 'Teaching & Non-Teaching Pay Slabs',
      badge: 'Multi-Structure Ready',
      image: '/real-photos/real-indian-principal-inspection.jpg',
      tagline: 'Distinct pay structures for senior faculty, administrative officers, lab assistants, and support staff.',
      chips: ['DA / HRA Allowances', 'EPF & PTax Rules', 'Annual Increments']
    },
    {
      title: 'Biometric Attendance & Leave Sync',
      badge: 'Zero Manual Days Tally',
      image: '/real-photos/real-indian-teacher-students.jpg',
      tagline: 'Connects staff biometric machines or mobile check-ins directly to the monthly salary calculation engine.',
      chips: ['Casual & Medical Leave', 'Loss of Pay (LOP)', 'Overtime Tracking']
    },
    {
      title: 'Bank NEFT Batches & PDF Payslips',
      badge: '1-Click Disbursement',
      image: '/real-photos/real-indian-fee-counter.jpg',
      tagline: 'Export standard SBI, HDFC, and PNB batch payout files and generate encrypted digital salary slips.',
      chips: ['Direct Bank Upload', 'Encrypted Payslip PDF', 'Tax Deduction Form 16']
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
                STAFF HR &amp; PAYROLL ENGINE
              </div>
              <h1 className="solutions-gov-title">
                Make Staff Administration as Organised as Your Academics.
              </h1>
              <p className="solutions-gov-desc">
                Manage teacher profiles, biometric presence, leave ledgers, monthly salary slips, and confidential bank payouts from 1 secure console.
              </p>

              <div className="solutions-hero-actions">
                <a href="#payslip-preview" className="apaar-link-arrow">
                  <span>Inspect Payslip Structure</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Book an HR &amp; Payroll Demo
                </Link>
              </div>

              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>Teaching &amp; Staff Slabs</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>1-Click Salary Calculation</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>Bank NEFT Batches</span>
                </span>
              </div>
            </div>

            {/* Right: Real Staff Meeting Photo with Live Payroll Status */}
            <div className="solutions-gov-hero-visual">
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(15,23,42,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img 
                    src="/real-photos/real-indian-principal-inspection.jpg" 
                    alt="School faculty and staff meeting around table" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                    Monthly Payroll Batch
                  </div>
                </div>

                <div style={{ padding: '14px 18px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>STAFF ACTIVE</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#059669' }}>68 Members</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>MONTHLY BATCH</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: 'var(--color-blue)' }}>₹14.85 Lakhs</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>STATUS</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#742DDA' }}>NEFT Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONFIDENTIAL STAFF PAYSLIP SIMULATOR */}
      <section className="section section--white" id="payslip-preview">
        <div className="container">
          <div className="section-header">
            <h2>Payroll Built for Indian School Structures</h2>
            <p>Separate salary formulas for teaching, non-teaching, and support staff with automated deductions.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {['teaching', 'non-teaching', 'admin', 'support'].map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '5px 14px',
                  borderRadius: '4px',
                  border: selectedCategory === cat ? '1px solid var(--color-blue)' : '1px solid var(--color-slate-200)',
                  background: selectedCategory === cat ? 'var(--color-blue)' : '#FFFFFF',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--color-slate-700)',
                  fontWeight: 750,
                  fontSize: '0.74rem',
                  cursor: 'pointer'
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div style={{ maxWidth: '680px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', padding: '24px', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid var(--color-slate-800)', paddingBottom: '14px', marginBottom: '14px' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 850, color: 'var(--color-ink)' }}>PRAGYA MODEL ACADEMY</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-slate-500)' }}>SALARY SLIP FOR THE MONTH OF OCTOBER 2026</div>
              <span style={{ display: 'inline-block', background: '#ECFDF5', color: '#059669', padding: '2px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700, marginTop: '6px' }}>
                CONFIDENTIAL • SALARY CREDITED
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px 14px', fontSize: '0.78rem', marginBottom: '14px', background: '#F8FAFC', padding: '10px 14px', borderRadius: '6px' }}>
              <div><strong>Employee:</strong> Prof. Soumya Mukherjee</div>
              <div><strong>Employee ID:</strong> T-104</div>
              <div><strong>Designation:</strong> Senior Mathematics Teacher</div>
              <div><strong>Bank Account:</strong> SBI •••• 4892</div>
              <div><strong>Working Days:</strong> 26 / 26 Days</div>
              <div><strong>PAN:</strong> ABCDE1234F</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
              {/* Earnings */}
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#059669', marginBottom: '6px', borderBottom: '1px solid #A7F3D0', paddingBottom: '4px' }}>
                  EARNINGS &amp; ALLOWANCES
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', padding: '4px 0' }}>
                  <span>Basic Salary</span>
                  <strong>₹32,500.00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', padding: '4px 0' }}>
                  <span>Dearness Allowance (DA)</span>
                  <strong>₹4,875.00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', padding: '4px 0' }}>
                  <span>House Rent (HRA)</span>
                  <strong>₹3,250.00</strong>
                </div>
              </div>

              {/* Deductions */}
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#DC2626', marginBottom: '6px', borderBottom: '1px solid #FECACA', paddingBottom: '4px' }}>
                  STATUTORY DEDUCTIONS
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', padding: '4px 0' }}>
                  <span>Employee PF (EPF)</span>
                  <strong>₹1,800.00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', padding: '4px 0' }}>
                  <span>Professional Tax (PTax)</span>
                  <strong>₹200.00</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', padding: '4px 0' }}>
                  <span>TDS / Income Tax</span>
                  <strong>₹1,500.00</strong>
                </div>
              </div>
            </div>

            <div style={{ background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', padding: '10px 14px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#475569' }}>NET TAKE-HOME SALARY</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 850, color: 'var(--color-blue)' }}>₹37,125.00</div>
              </div>
              <button 
                type="button" 
                className="btn btn--primary btn--sm" 
                style={{ padding: '4px 10px', fontSize: '0.72rem', borderRadius: '4px' }}
                onClick={() => alert('Downloading official encrypted salary slip PDF')}
              >
                <Printer size={13} style={{ marginRight: '4px' }} />
                Download Payslip PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL REAL PHOTO CAPABILITY CARDS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <h2>Built for Campus Administrators &amp; HR</h2>
            <p>Maintain accurate staff records, statutory deductions, and confidential bank payouts.</p>
          </div>

          <div className="role-gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {payrollCards.map((card, i) => (
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
            <h2>The Monthly <span>Staff Payroll Cycle</span></h2>
            <p>From biometric attendance sync to bank NEFT file generation.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <Clock size={22} color="#145EFF" />
                </div>
                <h4>Attendance Tally</h4>
                <p>Biometric punch &amp; approved casual leaves automatically synced</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <DollarSign size={22} color="#059669" />
                </div>
                <h4>Salary Calculation</h4>
                <p>Auto-computes gross-to-net pay with EPF, PTax, and TDS deductions</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <FileSpreadsheet size={22} color="#742DDA" />
                </div>
                <h4>Bank NEFT File</h4>
                <p>Export standard bank batch file for 1-click SBI/HDFC disbursement</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <Printer size={22} color="#F59E0B" />
                </div>
                <h4>Digital Payslips</h4>
                <p>Encrypted payslips delivered to teacher smartphones on pay day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions About Staff &amp; Payroll</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Make Payroll Run Smoothly Every Month."
        subtitle="Bring your school’s salary register. We’ll show you how to generate payslips and bank files in 1 click."
        buttonText="Book an HR &amp; Payroll Demo"
      />
    </div>
  );
}
