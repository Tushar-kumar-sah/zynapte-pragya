import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  School, ShieldCheck, CheckCircle2, ArrowRight, 
  Layers, Users, CreditCard, Building2, Check 
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function MultiBranchManagement() {
  const [activeBranch, setActiveBranch] = useState('main');

  const branches = {
    main: {
      name: "Main High School (South Kolkata)",
      code: "WB-CAMPUS-01",
      students: "1,248",
      staff: "68",
      todayFees: "₹1,84,500",
      attendance: "96.4%",
      apaarReady: "428 / 450 (95.1%)"
    },
    north: {
      name: "North Kolkata Secondary Campus",
      code: "WB-CAMPUS-02",
      students: "820",
      staff: "44",
      todayFees: "₹92,000",
      attendance: "94.8%",
      apaarReady: "290 / 310 (93.5%)"
    },
    saltlake: {
      name: "Salt Lake Junior & Primary Wing",
      code: "WB-CAMPUS-03",
      students: "450",
      staff: "28",
      todayFees: "₹64,200",
      attendance: "97.2%",
      apaarReady: "180 / 190 (94.7%)"
    }
  };

  const branch = branches[activeBranch];

  const faqs = [
    { question: 'Can executive leadership switch between branches seamlessly?', answer: 'Yes, authorized trustees and principals can switch branch views in 1 click without logging out, viewing individual or consolidated reports.' },
    { question: 'Are teachers and accountants restricted to their own branch?', answer: 'Yes, strict role boundaries ensure staff only view records, student profiles, and fee counters for their designated campus.' },
    { question: 'Can students transfer between branches easily?', answer: 'Yes, inter-branch student transfer carries academic history, APAAR readiness, and fee balance without starting from scratch.' },
    { question: 'Does each school have an isolated database?', answer: 'Yes, Pragya supports architectural separation with isolated school databases and custom domains for enterprise groups.' }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-live-pill" style={{ margin: '0 auto 16px' }}>
              <span className="hero-live-dot" />
              <span>Multi-Campus Master Control &bull; Segregated Ledgers</span>
            </div>
            <div className="eyebrow"><span className="eyebrow-dot" />GROUP &amp; CHAIN SCHOOL ERP</div>
            <h1 className="page-hero-title">More Than One Campus. One Connected Organization.</h1>
            <p className="page-hero-desc">
              Centralized visibility for trustees and principals, with strict branch boundaries for campus accountants and teachers.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Discuss Multi-Branch Requirements</Link>
              <Link to="/features" className="btn btn--secondary btn--lg">Explore All Features</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simulated Multi-Branch Executive Switcher */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />EXECUTIVE CONSOLE</div>
            <h2>Live Branch Switcher in Action</h2>
            <p>Click any campus tab to see how metrics update instantly while keeping records secure.</p>
          </div>

          <div style={{ maxWidth: '780px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ background: 'var(--color-ink)', padding: '16px 20px', display: 'flex', gap: '10px', overflowX: 'auto' }}>
              <button 
                onClick={() => setActiveBranch('main')}
                style={{ 
                  background: activeBranch === 'main' ? 'var(--color-blue)' : 'rgba(255,255,255,0.1)',
                  color: '#FFFFFF', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '0.8125rem', fontWeight: 700, cursor: 'pointer' 
                }}
              >
                🏫 Main Campus (South)
              </button>
              <button 
                onClick={() => setActiveBranch('north')}
                style={{ 
                  background: activeBranch === 'north' ? 'var(--color-blue)' : 'rgba(255,255,255,0.1)',
                  color: '#FFFFFF', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '0.8125rem', fontWeight: 700, cursor: 'pointer' 
                }}
              >
                🏫 North Campus
              </button>
              <button 
                onClick={() => setActiveBranch('saltlake')}
                style={{ 
                  background: activeBranch === 'saltlake' ? 'var(--color-blue)' : 'rgba(255,255,255,0.1)',
                  color: '#FFFFFF', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '0.8125rem', fontWeight: 700, cursor: 'pointer' 
                }}
              >
                🏫 Salt Lake Wing
              </button>
            </div>

            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '4px' }}>{branch.name}</h3>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-slate-500)' }}>Branch Code: {branch.code} &bull; Academic Year: 2026-27</span>
                </div>
                <span className="badge badge--cyan">Active Campus View</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '20px' }}>
                <div style={{ background: 'var(--color-soft-canvas)', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-md)', padding: '12px' }}>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--color-slate-500)', fontWeight: 600 }}>ENROLLED STUDENTS</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-ink)' }}>{branch.students}</div>
                </div>
                <div style={{ background: 'var(--color-soft-canvas)', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-md)', padding: '12px' }}>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--color-slate-500)', fontWeight: 600 }}>TEACHING FACULTY</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-ink)' }}>{branch.staff}</div>
                </div>
                <div style={{ background: 'var(--color-soft-canvas)', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-md)', padding: '12px' }}>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--color-slate-500)', fontWeight: 600 }}>TODAY'S FEES</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-success)' }}>{branch.todayFees}</div>
                </div>
                <div style={{ background: 'var(--color-soft-canvas)', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-md)', padding: '12px' }}>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--color-slate-500)', fontWeight: 600 }}>APAAR READINESS</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-blue)' }}>{branch.apaarReady.split(' ')[0]}</div>
                </div>
              </div>

              <div style={{ background: '#FAF5FF', border: '1px solid rgba(116, 45, 218, 0.2)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontSize: '0.8125rem', color: 'var(--color-violet)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>🔒 Campus access strictly locked to {branch.name} staff credentials.</span>
                <strong>Isolated DB Partition ✓</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Feature Cards with Icons */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />ENTERPRISE CAPABILITIES</div>
            <h2>Built for Multi-Campus Scalability</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <School size={28} />
              </div>
              <h3>1-Click Executive Switcher</h3>
              <p>Move between branches and academic sessions with zero logout friction, tracking performance indicators across campuses.</p>
              <div className="feature-card-tags">
                <span className="badge badge--blue">Session Switch</span>
                <span className="badge badge--blue">Group KPI</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <ShieldCheck size={28} />
              </div>
              <h3>Branch Role Isolation</h3>
              <p>Branch teachers and accountants only see students enrolled in their campus, preventing accidental cross-branch data access.</p>
              <div className="feature-card-tags">
                <span className="badge badge--violet">Data Sovereignty</span>
                <span className="badge badge--violet">Role Protection</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(5, 150, 105, 0.08)', color: 'var(--color-success)' }}>
                <CreditCard size={28} />
              </div>
              <h3>Independent Campus Fee Ledgers</h3>
              <p>Each branch maintains independent bank accounts and receipt books while group management sees consolidated collections.</p>
              <div className="feature-card-tags">
                <span className="badge badge--green">Separate Ledgers</span>
                <span className="badge badge--green">Consolidated Reports</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(0, 205, 229, 0.12)', color: '#028394' }}>
                <Users size={28} />
              </div>
              <h3>Inter-Branch Student Transfer</h3>
              <p>Transfer students seamlessly between sister branches, preserving historical marks, attendance records, and PEN numbers.</p>
              <div className="feature-card-tags">
                <span className="badge badge--cyan">Transfer Workflow</span>
                <span className="badge badge--cyan">History Preserved</span>
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
            <h2>Multi-Branch Management FAQs</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="See Your Real Campus Setup in the Conversation."
        subtitle="Tell us how many branches you manage, which responsibilities are centralised and what each school team needs to access."
        buttonText="Book a Multi-Branch Demo"
      />
    </>
  );
}
