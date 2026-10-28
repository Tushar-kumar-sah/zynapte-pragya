import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, Printer, CheckCircle2, Clock, AlertCircle, 
  ArrowRight, DollarSign, Receipt, Percent, FileText, Check 
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function FeesManagement() {
  const faqs = [
    { question: 'Can we generate printed counter receipts?', answer: 'Yes, counter collection prints instant receipts (thermal or A4) with sequential serial numbers, QR verification stamp, and school letterhead.' },
    { question: 'Can we configure sibling discounts?', answer: 'Yes, Pragya supports automated sibling concession rules (e.g., 10% off for the younger child) and staff ward waivers.' },
    { question: 'Can parents pay online today?', answer: 'Counter collection with cash, UPI QR reference, and cheques is live. An automated parent app checkout flow is scheduled on the product roadmap.' },
    { question: 'Can we track school expenses and petty cash?', answer: 'Yes, staff travel, science lab consumables, and vendor expense vouchers are categorized and balanced against collections.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-live-pill" style={{ margin: '0 auto 16px' }}>
              <span className="hero-live-dot" />
              <span>Counter POS &bull; Instant 3-Sec Receipts &bull; Sibling Waivers</span>
            </div>
            <div className="eyebrow"><span className="eyebrow-dot" />FEE &amp; REVENUE ENGINE</div>
            <h1 className="page-hero-title">School Fee Management That Keeps Every Rupee Accounted.</h1>
            <p className="page-hero-desc">
              Fast counter collections, thermal &amp; A4 receipts, sibling discount linking, and real-time dues tracking connected directly with student registers.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Book a Fee Counter Demo</Link>
              <Link to="/features" className="btn btn--secondary btn--lg">Explore All Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Simulated POS Fee Receipt Section */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />INSTANT DOCUMENTATION</div>
            <h2>Print-Ready Counter Receipts in 3 Seconds</h2>
            <p>Thermal roll slips or standard A4 duplicates issued directly at the counter.</p>
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto', background: '#FFFFFF', border: '1px dashed var(--color-slate-300)', borderRadius: 'var(--radius-lg)', padding: '28px', boxShadow: 'var(--shadow-md)', fontFamily: 'monospace' }}>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-ink)' }}>PRAGYA MEMORIAL ACADEMY</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-slate-500)' }}>AFFILIATED TO WBBSE / CBSE • SCHOOL CODE: WB-9402</div>
              <span style={{ display: 'inline-block', background: 'var(--color-slate-100)', padding: '3px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, marginTop: '6px' }}>
                FEE PAYMENT RECEIPT (OFFICIAL)
              </span>
            </div>
            <div style={{ borderBottom: '1px dashed var(--color-slate-300)', margin: '14px 0' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', fontSize: '0.8125rem', marginBottom: '16px' }}>
              <div><strong>Receipt No:</strong> REC-2026-0842</div>
              <div><strong>Date &amp; Time:</strong> 28 Oct 2026, 11:42 AM</div>
              <div><strong>Student:</strong> Ananya Das (Roll 14)</div>
              <div><strong>Class:</strong> Class IX, Section A</div>
              <div><strong>Payment Mode:</strong> Counter Cash / POS</div>
              <div><strong>Cashier ID:</strong> CASH-03 (Front Desk)</div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem', marginBottom: '16px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-slate-300)', textAlign: 'left' }}>
                  <th style={{ padding: '6px 0' }}>Fee Head</th>
                  <th style={{ padding: '6px 0' }}>Period</th>
                  <th style={{ padding: '6px 0', textAlign: 'right' }}>Amount (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px dashed var(--color-slate-200)' }}>
                  <td style={{ padding: '6px 0' }}>Tuition &amp; Smart Class</td>
                  <td style={{ padding: '6px 0' }}>Q3 (Oct-Dec)</td>
                  <td style={{ padding: '6px 0', textAlign: 'right' }}>₹4,500.00</td>
                </tr>
                <tr style={{ borderBottom: '1px dashed var(--color-slate-200)' }}>
                  <td style={{ padding: '6px 0' }}>Science &amp; Lab Maintenance</td>
                  <td style={{ padding: '6px 0' }}>Annual 2026</td>
                  <td style={{ padding: '6px 0', textAlign: 'right' }}>₹1,200.00</td>
                </tr>
                <tr style={{ borderBottom: '1px dashed var(--color-slate-200)' }}>
                  <td style={{ padding: '6px 0' }}>Sibling Concession (Younger Child)</td>
                  <td style={{ padding: '6px 0' }}>Rule: Sibling 10%</td>
                  <td style={{ padding: '6px 0', textAlign: 'right', color: 'var(--color-success)' }}>-₹450.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" style={{ paddingTop: '10px' }}><strong>Net Amount Collected</strong></td>
                  <td style={{ paddingTop: '10px', textAlign: 'right', fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-ink)' }}>₹5,250.00</td>
                </tr>
              </tfoot>
            </table>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--color-slate-500)', borderTop: '1px solid var(--color-slate-200)', paddingTop: '10px' }}>
              <span>Words: Five Thousand Two Hundred Fifty Only</span>
              <span style={{ color: 'var(--color-success)', fontWeight: 700, border: '1px solid var(--color-success)', padding: '2px 8px', borderRadius: '4px' }}>
                PAID &bull; Pragya Ledger Logged
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Features Cards */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />COUNTER WORKFLOWS</div>
            <h2>Full Financial Control for Accounts Staff</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(5, 150, 105, 0.08)', color: 'var(--color-success)' }}>
                <Receipt size={28} />
              </div>
              <h3>Fast 3-Second Counter Receipting</h3>
              <p>Type student roll number, select quarter or custom installment, receive payment, and print formatted receipt instantly.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <Percent size={28} />
              </div>
              <h3>Sibling &amp; Scholarship Waivers</h3>
              <p>Auto-apply sibling percentage waivers across enrolled brothers and sisters without manual ledger adjustments.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <Clock size={28} />
              </div>
              <h3>Automated Dues &amp; Reminder Registers</h3>
              <p>Generate class-wise defaulter lists with overdue days, penalty calculations, and parent notification ribbons.</p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(217, 119, 6, 0.08)', color: 'var(--color-warning)' }}>
                <FileText size={28} />
              </div>
              <h3>School Expense &amp; Petty Cash</h3>
              <p>Record laboratory supplies, building repairs, generator diesel, and vendor invoices balanced against daily counter intake.</p>
            </div>
          </div>

          {/* Roadmap Guardrail Notice */}
          <div style={{ marginTop: '36px', background: 'var(--color-warning-bg)', border: '1px solid rgba(217, 119, 6, 0.3)', borderRadius: 'var(--radius-lg)', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <AlertCircle size={28} color="var(--color-warning)" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ display: 'block', color: 'var(--color-ink)', fontSize: '0.95rem', marginBottom: '2px' }}>
                Payment Processing Transparency Note:
              </strong>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-slate-700)' }}>
                Counter fee collection, cash registers, POS receipt printing, and cheque clearance are fully operational today. While our underlying payment gateway engine is built, direct online parent app self-checkout is scheduled on our upcoming release roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>School Fee Accounting Questions</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="A Clearer Fee Counter Starts Here."
        subtitle="Walk through fee assignment, payment entry, receipts and balance tracking with the Pragya team."
        buttonText="Request a Fee Management Demo"
      />
    </>
  );
}
