import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Calendar, CheckCircle2, CreditCard, Bell, Smartphone, 
  ArrowRight, ShieldCheck, Check, Sparkles, School, Layers, 
  FileSpreadsheet, Award, Printer, Clock, HelpCircle, X
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

  return (
    <>
      {/* Visual Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              PRAGYA ERP ARCHITECTURE
            </div>
            <h1 className="page-hero-title">A Connected School, from Admission to Results.</h1>
            <p className="page-hero-desc">
              Replace fragmented spreadsheets and isolated software. Every module in Pragya shares the same verified student database.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Book a Complete Walkthrough</Link>
              <Link to="/apaar-readiness" className="btn btn--secondary btn--lg">Explore APAAR Readiness</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <StatsBanner />

      {/* 16 Iconic Modules Component (with Category Filter & Interactive Modal) */}
      <IconicModules />

      {/* Visual Comparison: Traditional Manual School vs Pragya ERP */}
      <section className="section section--soft" id="comparison">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              OPERATIONAL COMPARISON
            </div>
            <h2>Why Modern Schools Switch to Pragya</h2>
            <p>
              See how replacing manual school bookkeeping with Pragya's visual ERP saves hundreds of staff hours every term.
            </p>
          </div>

          <div style={{ maxWidth: '960px', margin: '0 auto', background: '#FFFFFF', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-slate-200)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
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
                  padding: '16px 24px', 
                  borderBottom: i < comparisonItems.length - 1 ? '1px solid var(--color-slate-100)' : 'none',
                  background: i % 2 === 0 ? '#FFFFFF' : 'var(--color-soft-canvas)',
                  alignItems: 'center',
                  fontSize: '0.875rem'
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--color-ink)' }}>
                  {c.feature}
                </div>
                <div style={{ color: 'var(--color-slate-600)', paddingRight: '12px' }}>
                  <span style={{ color: 'var(--color-danger)', marginRight: '6px' }}>✕</span>
                  {c.manual}
                </div>
                <div style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
                  <span style={{ color: 'var(--color-success)', marginRight: '6px' }}>✓</span>
                  {c.pragya}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Direct Dive Cards with Colorful Badges */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              DEEP-DIVE MODULE GUIDES
            </div>
            <h2>Explore Dedicated System Documentation</h2>
            <p>
              Read in-depth specifications for each administrative department and board syllabus.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <Users size={28} />
              </div>
              <h3>Admissions &amp; Student Registry</h3>
              <p>Kanban enquiry pipeline, assisted spreadsheet bulk imports, student identity card batch generation, and permanent digital records.</p>
              <Link to="/student-management" className="feature-card-link">
                <span>Explore Student Guide</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <Calendar size={28} />
              </div>
              <h3>Academics &amp; Clash-Free Timetables</h3>
              <p>Configure classes, sections, required and optional subjects. Detect scheduling clashes automatically across rooms and staff.</p>
              <Link to="/academics-timetable" className="feature-card-link">
                <span>Explore Academics Guide</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(0, 205, 229, 0.12)', color: '#028394' }}>
                <CheckCircle2 size={28} />
              </div>
              <h3>Daily Attendance &amp; Leave Ledger</h3>
              <p>Mobile 1-tap roll call, biometric integration, staff casual/medical leave tracking, and instant parent absence notifications.</p>
              <Link to="/attendance-management" className="feature-card-link">
                <span>Explore Attendance Guide</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(5, 150, 105, 0.08)', color: 'var(--color-success)' }}>
                <CreditCard size={28} />
              </div>
              <h3>Fee POS, Receipts &amp; Payroll</h3>
              <p>Cash, UPI &amp; cheque collection with instant printable receipts, sibling fee rules, staff gross-to-net payroll, and bank payout files.</p>
              <Link to="/fees-management" className="feature-card-link">
                <span>Explore Fees Guide</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(236, 50, 204, 0.08)', color: 'var(--color-magenta)' }}>
                <Award size={28} />
              </div>
              <h3>Examinations &amp; Report Cards</h3>
              <p>Summative &amp; Formative marks entry with subject-teacher locks, board-standard grade calculations, and bulk PDF report cards.</p>
              <Link to="/exam-result-management" className="feature-card-link">
                <span>Explore Exam Guide</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(23, 37, 82, 0.08)', color: 'var(--color-ink)' }}>
                <School size={28} />
              </div>
              <h3>Multi-Branch &amp; Campus Switcher</h3>
              <p>Manage multiple campuses or sister schools with one executive login, keeping finance and student records strictly partitioned.</p>
              <Link to="/multi-branch-management" className="feature-card-link">
                <span>Explore Multi-Branch</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section FAQ */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              IMPLEMENTATION FAQ
            </div>
            <h2>Common Questions on Pragya Modules</h2>
          </div>
          <FaqAccordion limit={4} />
        </div>
      </section>

      <BottomCta />
    </>
  );
}
