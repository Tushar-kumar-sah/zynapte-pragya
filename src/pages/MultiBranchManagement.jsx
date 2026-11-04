import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  School, ShieldCheck, CheckCircle2, ArrowRight, 
  Layers, Users, CreditCard, Building2, Check,
  BarChart3, RefreshCw, Lock
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

  const branchCards = [
    {
      title: 'Trust Executive Campus Switcher',
      badge: 'Unified Oversight',
      image: '/real-photos/real-campus-building.jpg',
      tagline: 'Trustees switch between schools, high schools, and primary branches in 1 tap without separate logins.',
      chips: ['1-Click Switcher', 'Consolidated Daybook', 'Trust Analytics']
    },
    {
      title: 'Campus Boundary RBAC Guardrails',
      badge: 'Isolated Accounting',
      image: '/real-photos/real-staff-meeting.jpg',
      tagline: 'Teachers, cashiers, and clerks operate strictly within their designated branch, preventing data cross-pollution.',
      chips: ['Campus Scoping', 'Separate Bank Ledgers', 'Local Fee POS']
    },
    {
      title: 'Inter-Branch Student Transfers',
      badge: 'Zero Retyping',
      image: '/real-photos/real-bangalore-school-coding.jpg',
      tagline: 'Transfer students between sister schools with 1 click. Carries marks history, fee receipts, and APAAR verification.',
      chips: ['Auto Transfer TC', 'Continuous History', 'Fee Balance Sync']
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
                GROUP &amp; CHAIN SCHOOL ERP
              </div>
              <h1 className="solutions-gov-title">
                More Than One Campus. One Connected Organization.
              </h1>
              <p className="solutions-gov-desc">
                Unify multi-branch trusts and school chains. Empower central trustees with consolidated oversight while keeping campus-level accounts strictly partitioned.
              </p>

              <div className="solutions-hero-actions">
                <a href="#branch-switcher-demo" className="apaar-link-arrow">
                  <span>Try Campus Switcher</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Book a Multi-Branch Demo
                </Link>
              </div>

              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>1-Click Branch Switcher</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>Consolidated Trust Daybook</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>Strict Campus RBAC</span>
                </span>
              </div>
            </div>

            {/* Right: Real Campus Photo with Live Trust Status Badge */}
            <div className="solutions-gov-hero-visual">
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(15,23,42,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img 
                    src="/real-photos/real-campus-building.jpg" 
                    alt="School campus building and trust grounds" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                    Central Trust Governance
                  </div>
                </div>

                <div style={{ padding: '14px 18px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>CAMPUSES</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: 'var(--color-blue)' }}>3 Branches</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>TOTAL STUDENTS</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#059669' }}>2,518 Enrolled</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>TODAY FEES</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 850, color: '#742DDA' }}>₹3.40 Lakhs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REALISTIC MULTI-CAMPUS SWITCHER SIMULATOR */}
      <section className="section section--white" id="branch-switcher-demo">
        <div className="container">
          <div className="section-header">
            <h2>Live Multi-Campus Switcher Simulator</h2>
            <p>Click any campus below to simulate the executive bird's-eye view.</p>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ background: '#0F172A', color: '#FFFFFF', padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building2 size={16} color="var(--color-blue)" />
                <strong style={{ fontSize: '0.85rem' }}>Pragya Education Trust • Central Executive Console</strong>
              </div>
              <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', border: '1px solid rgba(16,185,129,0.4)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                Trustee View (Full Access)
              </span>
            </div>

            {/* Campus Selector Pills */}
            <div style={{ display: 'flex', gap: '8px', padding: '12px 18px', background: '#F8FAFC', borderBottom: '1px solid var(--color-slate-200)', overflowX: 'auto' }}>
              {Object.keys(branches).map(b => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setActiveBranch(b)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '4px',
                    border: activeBranch === b ? '1px solid var(--color-blue)' : '1px solid var(--color-slate-200)',
                    background: activeBranch === b ? 'var(--color-blue)' : '#FFFFFF',
                    color: activeBranch === b ? '#FFFFFF' : 'var(--color-slate-700)',
                    fontWeight: 750,
                    fontSize: '0.74rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {branches[b].name}
                </button>
              ))}
            </div>

            <div style={{ padding: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 850, color: 'var(--color-ink)', margin: 0 }}>{branch.name}</h3>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-slate-400)' }}>Campus Code: {branch.code} • Local Database Isolated</span>
                </div>
                <span className="sec-chip" style={{ background: '#ECFDF5', color: '#059669', borderColor: '#A7F3D0' }}>
                  ✓ Campus Health Optimal
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                <div style={{ background: '#F8FAFC', border: '1px solid var(--color-slate-200)', borderRadius: '6px', padding: '12px' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>STUDENTS</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 850, color: 'var(--color-ink)' }}>{branch.students}</div>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid var(--color-slate-200)', borderRadius: '6px', padding: '12px' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>TEACHING STAFF</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 850, color: 'var(--color-ink)' }}>{branch.staff}</div>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid var(--color-slate-200)', borderRadius: '6px', padding: '12px' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>TODAY FEES</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 850, color: '#059669' }}>{branch.todayFees}</div>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid var(--color-slate-200)', borderRadius: '6px', padding: '12px' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>DAILY ATTENDANCE</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 850, color: 'var(--color-blue)' }}>{branch.attendance}</div>
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid var(--color-slate-200)', borderRadius: '6px', padding: '12px' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>APAAR READY</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 850, color: '#742DDA' }}>{branch.apaarReady}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL REAL PHOTO CAPABILITY CARDS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <h2>Built for School Groups &amp; Educational Trusts</h2>
            <p>Shared executive governance without blending daily classroom records.</p>
          </div>

          <div className="role-gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {branchCards.map((card, i) => (
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
            <h2>The Multi-Campus <span>Governance Architecture</span></h2>
            <p>How Pragya keeps multiple campuses synchronized and securely partitioned.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <Building2 size={22} color="#145EFF" />
                </div>
                <h4>Trust Master</h4>
                <p>Configure trust-wide academic calendar and unified fee policies</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <Lock size={22} color="#059669" />
                </div>
                <h4>Branch Scoping</h4>
                <p>Campus staff access only their school; zero data cross-bleed</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <RefreshCw size={22} color="#742DDA" />
                </div>
                <h4>1-Click Switcher</h4>
                <p>Trustees toggle between branches with real-time operational feeds</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <BarChart3 size={22} color="#F59E0B" />
                </div>
                <h4>Consolidated Audit</h4>
                <p>Roll-up fee collections, enrollment, and staff payroll across all campuses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions About Multi-Branch ERP</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Unify Governance Across Every Campus."
        subtitle="Book an architectural session with our engineering team to map your group school structure."
        buttonText="Book a Multi-Branch Demo"
      />
    </div>
  );
}
