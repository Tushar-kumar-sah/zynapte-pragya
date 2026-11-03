import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Calendar, CheckCircle2, CreditCard, Bell, Smartphone, 
  ArrowRight, ShieldCheck, Check, Sparkles, School, Layers, 
  FileSpreadsheet, Award, Printer, Clock, HelpCircle, X,
  FileCheck, BookOpen, HardDrive
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';
import IconicModules from '../components/IconicModules';
import StatsBanner from '../components/StatsBanner';

export default function AllFeatures() {
  const comparisonItems = [
    {
      feature: "Student Records & Profile",
      manual: "Disconnected paper registers & Excel sheets with duplicate rows",
      pragya: "1 Unified permanent digital folder across all 12 years with APAAR readiness"
    },
    {
      feature: "Fee Counter & Dues Collection",
      manual: "Handwritten receipt books, manual cash tallying, lost counter copies",
      pragya: "3-Second POS receipts, instant sibling discounts, real-time collection ledger"
    },
    {
      feature: "Daily Roll Call & Leave",
      manual: "Attendance registers passed around; 20 minutes wasted per morning",
      pragya: "1-Tap mobile roll call in 40 seconds; auto-absent notification to parents"
    },
    {
      feature: "Examination & Report Cards",
      manual: "Manual marks entry on paper sheets, manual formula errors in grading",
      pragya: "Subject-teacher marks portal; 1-click WBBSE/CBSE report card batch print"
    },
    {
      feature: "APAAR & UDISE+ Compliance",
      manual: "Repeated follow-ups, rejected CSV uploads, spelling mismatch headaches",
      pragya: "Built-in validation engine flagging missing consent & spelling differences"
    },
    {
      feature: "Parent Communication",
      manual: "Disorganized WhatsApp groups with uncontrolled after-hours messages",
      pragya: "School-governed circular ribbon, homework diary & controlled messaging"
    }
  ];

  const flagshipCards = [
    {
      title: "Student Registry & Profiles",
      badge: "Real Student Records",
      image: "/real-photos/real-teacher-students-hnahthial-opt.jpg",
      tagline: "Single permanent student dossier across admissions, roll call, fees, and results.",
      link: "/student-management",
      chips: ["Batch PVC ID Cards", "APAAR Verification", "Aadhaar Scans"]
    },
    {
      title: "Daily Attendance & Roll Call",
      badge: "30-Sec Morning Roll",
      image: "/real-photos/real-classroom.jpg",
      tagline: "Class teachers take period attendance in 30 seconds with auto WhatsApp alerts.",
      link: "/attendance-management",
      chips: ["1-Tap Present/Absent", "WhatsApp Alerts", "Leave Workflow"]
    },
    {
      title: "Fee Counter POS & Ledger",
      badge: "3-Sec Thermal POS",
      image: "/real-photos/real-fee-accounting.jpg",
      tagline: "Instant cash and UPI collection with automatic daybook and sibling rules.",
      link: "/fees-management",
      chips: ["Thermal Print Slips", "Dynamic UPI QR", "Bank NEFT Files"]
    },
    {
      title: "Examinations & Marksheets",
      badge: "WBBSE / CBSE Ready",
      image: "/real-photos/real-exam-writing.jpg",
      tagline: "Subject-teacher marks lock, automatic grade calculations, and batch report cards.",
      link: "/exam-result-management",
      chips: ["1-Click Bulk PDF", "Auto-Calculated %", "Co-Scholastic Grades"]
    },
    {
      title: "Academics & Timetables",
      badge: "Clash-Free Scheduling",
      image: "/real-photos/real-teacher-instruct.jpg",
      tagline: "Automated period distribution with teacher substitution and syllabus tracking.",
      link: "/academics-timetable",
      chips: ["Clash Detection", "Substitution Board", "Syllabus Progress"]
    },
    {
      title: "Multi-Branch Governance",
      badge: "Trust-Wide Control",
      image: "/real-photos/real-campus-building.jpg",
      tagline: "Manage multiple schools and branches with central governance and isolated accounts.",
      link: "/multi-branch-management",
      chips: ["1-Click Switcher", "Consolidated KPIs", "Campus Boundaries"]
    }
  ];

  return (
    <div className="features-page-wrapper">
      {/* 1. VISUAL HERO WITH REAL PHOTO & LIVE KPI COMMAND */}
      <section className="solutions-gov-hero">
        <div className="container">
          <div className="solutions-gov-hero-grid">
            <div className="solutions-gov-hero-text">
              <div className="solutions-gov-eyebrow">
                PRAGYA ERP ARCHITECTURE • ALL MODULES
              </div>
              <h1 className="solutions-gov-title">
                A Connected School, from Admission to Final Results.
              </h1>
              <p className="solutions-gov-desc">
                Replace fragmented spreadsheets with one unified, verified database shared across every campus department.
              </p>

              <div className="solutions-hero-actions">
                <a href="#flagship-modules" className="apaar-link-arrow">
                  <span>Explore 16 Core Modules</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Book a Complete Walkthrough
                </Link>
              </div>

              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>16 Connected Modules</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>Zero Spreadsheet Chaos</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>APAAR &amp; CBSE Ready</span>
                </span>
              </div>
            </div>

            {/* Right: Visual Real Photo Hero Card */}
            <div className="solutions-gov-hero-visual">
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(15,23,42,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                  <img 
                    src="/real-photos/real-bangalore-school-coding.jpg" 
                    alt="Students in Indian school computer laboratory" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                    Real Indian School Campus
                  </div>
                </div>

                <div style={{ padding: '16px 20px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', textAlign: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>ACTIVE MODULES</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 850, color: 'var(--color-blue)' }}>16 Connected</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>DATA INTEGRITY</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 850, color: '#059669' }}>100% Unified</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 750, color: 'var(--color-slate-400)' }}>STAFF EFFICIENCY</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 850, color: '#742DDA' }}>4x Faster</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <StatsBanner />

      {/* 2. FLAGSHIP MODULE DEEP DIVES WITH REAL PHOTOGRAPHY */}
      <section className="section section--white" id="flagship-modules">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              FLAGSHIP CAPABILITIES
            </div>
            <h2>Purpose-Built for Indian School Workflows</h2>
            <p>Every module is designed around the daily rhythm of teachers, accountants, and principals.</p>
          </div>

          <div className="role-gallery-grid">
            {flagshipCards.map((card, i) => (
              <div key={i} className="role-gallery-card">
                <div className="role-gallery-img-box">
                  <img src={card.image} alt={card.title} className="role-gallery-img" />
                  <div className="role-gallery-badge">
                    <span>{card.badge}</span>
                  </div>
                </div>
                <div className="role-gallery-content">
                  <h4>{card.title}</h4>
                  <p>{card.tagline}</p>
                  <div className="role-gallery-chips">
                    {card.chips.map((c, idx) => (
                      <span key={idx} className="gallery-chip">{c}</span>
                    ))}
                  </div>
                  <Link to={card.link} className="role-gallery-action-btn">
                    <span>Explore Module Guide</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 16 ICONIC MODULES INTERACTIVE CATALOG */}
      <IconicModules />

      {/* 4. 4-STEP CONNECTED WORKFLOW TIMELINE */}
      <section className="apaar-how-section" id="how-it-works">
        <div className="container">
          <div className="apaar-how-header">
            <h2>The Pragya <span>Connected ERP Workflow</span></h2>
            <p>Data entered once at admission flows automatically to attendance, fee collections, and report cards.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <Users size={22} color="#145EFF" />
                </div>
                <h4>Admission Dossier</h4>
                <p>Digital registration with photo, birth cert &amp; PEN validation</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <Calendar size={22} color="#059669" />
                </div>
                <h4>Daily Roll Call</h4>
                <p>30-sec mobile attendance with auto WhatsApp absent alerts</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <CreditCard size={22} color="#742DDA" />
                </div>
                <h4>Counter POS Receipts</h4>
                <p>3-second thermal print slips &amp; instant ledger reconciliation</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <Award size={22} color="#F59E0B" />
                </div>
                <h4>Term Report Cards</h4>
                <p>Auto-computed grades with 1-click batch PDF print</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISUAL COMPARISON TABLE */}
      <section className="section section--soft" id="comparison">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              OPERATIONAL COMPARISON
            </div>
            <h2>Why Modern Schools Switch to Pragya</h2>
            <p>See how replacing manual school bookkeeping with Pragya's visual ERP saves hundreds of staff hours every term.</p>
          </div>

          <div style={{ maxWidth: '960px', margin: '0 auto', background: '#FFFFFF', borderRadius: '8px', border: '1px solid var(--color-slate-200)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div style={{ minWidth: '680px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: 'var(--color-ink)', color: '#FFFFFF', padding: '16px 24px', fontWeight: 700, fontSize: '0.875rem' }}>
                  <div>Core Operation</div>
                  <div style={{ color: '#FCA5A5' }}>Traditional Manual Methods</div>
                  <div style={{ color: '#6EE7B7' }}>Pragya School ERP</div>
                </div>

                {comparisonItems.map((c, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: '1.2fr 1.4fr 1.4fr', 
                      padding: '14px 24px', 
                      borderBottom: '1px solid var(--color-slate-100)',
                      fontSize: '0.84rem',
                      background: i % 2 === 0 ? '#FFFFFF' : 'var(--color-slate-50)'
                    }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--color-ink)' }}>{c.feature}</div>
                    <div style={{ color: 'var(--color-slate-600)', paddingRight: '12px' }}>
                      <span style={{ color: 'var(--color-danger)', fontWeight: 700, marginRight: '6px' }}>✕</span>
                      {c.manual}
                    </div>
                    <div style={{ color: 'var(--color-slate-800)', fontWeight: 600 }}>
                      <span style={{ color: 'var(--color-success)', fontWeight: 700, marginRight: '6px' }}>✓</span>
                      {c.pragya}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              COMMON QUESTIONS
            </div>
            <h2>Frequently Asked Questions About Pragya Modules</h2>
          </div>
          <FaqAccordion limit={4} />
        </div>
      </section>

      <BottomCta />
    </div>
  );
}
