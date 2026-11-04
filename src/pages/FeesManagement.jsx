import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, Printer, CheckCircle2, Clock, AlertCircle, 
  ArrowRight, Receipt, Percent, FileText, Check, QrCode,
  DollarSign, BarChart3, ShieldCheck
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function FeesManagement() {
  const faqs = [
    { question: 'Can we generate printed counter receipts?', answer: 'Yes, counter collection prints instant receipts (3-inch thermal roll or standard A4 duplicates) with sequential serial numbers, QR verification stamp, and school letterhead.' },
    { question: 'Can we configure sibling discounts?', answer: 'Yes, Pragya supports automated sibling concession rules (e.g., 10% off for the younger child) and staff ward waivers with single-click parent linking.' },
    { question: 'Does it support Dynamic UPI QR at the counter?', answer: 'Yes, cashiers can generate a dynamic UPI QR code on the counter monitor that encodes the exact outstanding rupee amount for instant PhonePe, GPay, or Paytm payment.' },
    { question: 'Can we track school expenses and petty cash?', answer: 'Yes, staff travel, science lab consumables, and vendor expense vouchers are categorized and balanced against daily counter collections.' }
  ];

  const feeCards = [
    {
      title: 'Counter POS & 3-Second Receipts',
      badge: 'Rapid Collection',
      image: '/real-photos/real-fee-accounting.jpg',
      tagline: 'Cashiers process fee payments in 3 seconds with auto-selected tuition, exam, lab, and transport heads.',
      chips: ['Thermal Roll Print', 'Sequential Series', 'Duplicate Prevention']
    },
    {
      title: 'Dynamic UPI QR & Cheque Batches',
      badge: 'Zero Cash Discrepancies',
      image: '/real-photos/real-mobile-comm.jpg',
      tagline: 'Display exact dynamic UPI QR codes on customer-facing screens. Cheque clearance tracking with bounce alerts.',
      chips: ['BHIM UPI / PhonePe', 'Cheque Clearance', 'Bank Deposit Slip']
    },
    {
      title: 'Head-Wise Ledger & Daybook',
      badge: 'Daily Audit Tally',
      image: '/real-photos/real-campus-building.jpg',
      tagline: 'Automatically separates tuition fees from bus fees and security deposits. Evening cashbook closes in 2 minutes.',
      chips: ['Tuition / Bus Split', 'Evening Cash Tally', 'Export to Tally/Excel']
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
                FEE &amp; REVENUE ENGINE
              </div>
              <h1 className="solutions-gov-title">
                School Fee Management That Keeps Every Rupee Accounted.
              </h1>
              <p className="solutions-gov-desc">
                Fast counter collections, 3-second thermal receipts, sibling discount linking, and real-time dues tracking connected directly with student registers.
              </p>

              <div className="solutions-hero-actions">
                <a href="#pos-receipt" className="apaar-link-arrow">
                  <span>Inspect Counter Receipt</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Book a Fee Counter Demo
                </Link>
              </div>

              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>3-Sec Thermal Slips</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>Dynamic UPI QR POS</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>Head-Wise Daybook</span>
                </span>
              </div>
            </div>

            {/* Right: Real Fee Desk Photo with Live Collections Badge */}
            <div className="solutions-gov-hero-visual">
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(15,23,42,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img 
                    src="/real-photos/real-fee-accounting.jpg" 
                    alt="School fee ledger and payment accounting" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                    Fee Counter Terminal
                  </div>
                </div>

                <div style={{ padding: '14px 18px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>COLLECTED TODAY</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#059669' }}>₹1,42,500</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>RECEIPTS ISSUED</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: 'var(--color-blue)' }}>34 Slips</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>DAYBOOK RECON</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#742DDA' }}>100% Balanced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REALISTIC 3-SECOND POS COUNTER RECEIPT */}
      <section className="section section--white" id="pos-receipt">
        <div className="container">
          <div className="section-header">
            <h2>Print-Ready Counter Receipts in 3 Seconds</h2>
            <p>Thermal roll slips or standard A4 duplicates issued directly at the school counter.</p>
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto', background: '#FFFFFF', border: '1px dashed var(--color-slate-300)', borderRadius: '8px', padding: '24px', boxShadow: 'var(--shadow-md)', fontFamily: 'monospace' }}>
            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 850, color: 'var(--color-ink)' }}>PRAGYA MODEL ACADEMY</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-slate-500)' }}>AFFILIATED TO ICSE / CBSE • SCHOOL CODE: IC-9402</div>
              <span style={{ display: 'inline-block', background: 'var(--color-slate-100)', padding: '2px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700, marginTop: '6px' }}>
                FEE PAYMENT RECEIPT (OFFICIAL)
              </span>
            </div>

            <div style={{ borderBottom: '1px dashed var(--color-slate-300)', margin: '12px 0' }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 14px', fontSize: '0.78rem', marginBottom: '14px' }}>
              <div><strong>Receipt No:</strong> REC-2026-0842</div>
              <div><strong>Date &amp; Time:</strong> Today, 11:42 AM</div>
              <div><strong>Student:</strong> Ananya Das (Roll 14)</div>
              <div><strong>Class &amp; Sec:</strong> Class IX - A</div>
              <div><strong>Payment Mode:</strong> Counter POS (Cash &amp; UPI)</div>
              <div><strong>Cashier ID:</strong> CASH-03 (Front Desk)</div>
            </div>

            <div style={{ overflowX: 'auto', marginBottom: '14px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-slate-300)', textAlign: 'left' }}>
                    <th style={{ padding: '6px 0' }}>Fee Head</th>
                    <th style={{ padding: '6px 0' }}>Period</th>
                    <th style={{ padding: '6px 0', textAlign: 'right' }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px dashed var(--color-slate-200)' }}>
                    <td style={{ padding: '6px 0' }}>Tuition Fee</td>
                    <td style={{ padding: '6px 0' }}>Oct - Dec 2026 (Q3)</td>
                    <td style={{ padding: '6px 0', textAlign: 'right' }}>₹4,500.00</td>
                  </tr>
                  <tr style={{ borderBottom: '1px dashed var(--color-slate-200)' }}>
                    <td style={{ padding: '6px 0' }}>Computer &amp; STEM Lab</td>
                    <td style={{ padding: '6px 0' }}>Oct - Dec 2026</td>
                    <td style={{ padding: '6px 0', textAlign: 'right' }}>₹750.00</td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{ padding: '8px 0', fontWeight: 700 }}>Total Collected</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 850, color: 'var(--color-blue)', fontSize: '0.95rem' }}>₹5,250.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ borderTop: '1px dashed var(--color-slate-300)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', color: '#475569' }}>
              <span>Verified System Hash: #sha256:7f83b165...</span>
              <button 
                type="button" 
                className="btn btn--primary btn--sm" 
                style={{ padding: '4px 10px', fontSize: '0.72rem', borderRadius: '4px' }}
                onClick={() => alert('Printing 3-inch thermal slip with duplicate record')}
              >
                <Printer size={13} style={{ marginRight: '4px' }} />
                Print Thermal Slip
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL REAL PHOTO CAPABILITY CARDS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <h2>Built for Financial Accuracy &amp; Audits</h2>
            <p>Every collection automatically syncs to the student dossier and institutional ledger.</p>
          </div>

          <div className="role-gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {feeCards.map((card, i) => (
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
            <h2>The School <span>Fee Collection Flow</span></h2>
            <p>From fee slab definition to evening cashbook reconciliation, every transaction is secure.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <Receipt size={22} color="#145EFF" />
                </div>
                <h4>Fee Slabs &amp; Rules</h4>
                <p>Define class-wise fees, sibling discounts, and staff ward waivers</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <CreditCard size={22} color="#059669" />
                </div>
                <h4>3-Sec POS Entry</h4>
                <p>Cashier scans student ID or enters roll; auto-computes dues</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <Printer size={22} color="#742DDA" />
                </div>
                <h4>Instant Receipts</h4>
                <p>3-second thermal slip print &amp; automated WhatsApp receipt to parent</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <BarChart3 size={22} color="#F59E0B" />
                </div>
                <h4>Evening Cashbook</h4>
                <p>Instant daily collection tally; export to Tally or Excel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions About Fee Management</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Zero Cash Leaks. 100% Audit Precision."
        subtitle="Schedule a walkthrough of Pragya's 3-second counter fee terminal and automated sibling rules."
        buttonText="Book a Fee Counter Demo"
      />
    </div>
  );
}
