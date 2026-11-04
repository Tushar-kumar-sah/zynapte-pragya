import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, FileSpreadsheet, Shield, Search, ArrowRight, 
  Printer, CheckCircle2, UserCheck, Award, FileText, Check,
  QrCode, FileCheck, Layers, Sparkles
} from 'lucide-react';
import BottomCta from '../components/BottomCta';
import FaqAccordion from '../components/FaqAccordion';

export default function StudentManagement() {
  const faqs = [
    { question: 'Can student documents and photos be attached?', answer: 'Yes, student birth certificates, Aadhaar scans, medical records, and passport photos attach directly to the digital dossier.' },
    { question: 'Can we import students from Excel or CSV?', answer: 'Yes, Pragya includes an assisted column mapper that matches headers and highlights validation errors before importing.' },
    { question: 'Can we print student ID cards in bulk?', answer: 'Yes, Pragya provides an ID card layout engine with barcode/QR code, photo auto-scaling, and A4 multi-card sheet printing.' },
    { question: 'Is student data restricted by role?', answer: 'Yes, subject teachers see only academic performance; accounts see fee history; principals see comprehensive summaries.' }
  ];

  const studentCards = [
    {
      title: 'Permanent Digital Dossier',
      badge: '12-Year Unified Record',
      image: '/real-photos/real-bangalore-school-coding.jpg',
      tagline: 'Store birth certificates, Aadhaar numbers, previous school transfer certificates (TC), and guardian records in 1 encrypted place.',
      chips: ['Aadhaar & PEN Ready', 'Document Vault', 'All-Grade History']
    },
    {
      title: 'Batch-Printable PVC ID Cards',
      badge: '1-Click Multi-Card Print',
      image: '/real-photos/real-indian-teacher-computer.jpg',
      tagline: 'Generate high-resolution CR80 plastic identity cards with dynamic QR codes, blood group badges, and emergency contact numbers.',
      chips: ['CR80 Card Standard', 'QR Barcode Scanner', '8-per-A4 Sheets']
    },
    {
      title: 'Assisted Excel / CSV Importer',
      badge: 'Zero Manual Retyping',
      image: '/real-photos/real-fee-accounting.jpg',
      tagline: 'Migrate thousands of legacy student records in minutes. Guided column mapper verifies phone numbers, date formats, and duplicates.',
      chips: ['Auto Column Mapping', 'Duplicate Blocker', 'Roll Auto-Numbering']
    }
  ];

  return (
    <div className="features-page-wrapper">
      {/* 1. VISUAL HERO WITH REAL PHOTO & KPI CHIPS */}
      <section className="solutions-gov-hero">
        <div className="container">
          <div className="solutions-gov-hero-grid">
            <div className="solutions-gov-hero-text">
              <div className="solutions-gov-eyebrow">
                STUDENT REGISTRY &amp; PROFILES
              </div>
              <h1 className="solutions-gov-title">
                Every Student Record, Organised for the Whole School Journey.
              </h1>
              <p className="solutions-gov-desc">
                One connected folder across admissions, classroom attendance, term marksheets, counter fees, and APAAR validation.
              </p>

              <div className="solutions-hero-actions">
                <a href="#smart-id-card" className="apaar-link-arrow">
                  <span>View Smart ID Cards</span>
                  <span className="arrow-sym">⟶</span>
                </a>
                <Link to="/contact" className="btn btn--primary btn--sm" style={{ marginLeft: '16px' }}>
                  Book a Registry Demo
                </Link>
              </div>

              <div className="solutions-hero-chips">
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  <span>1,248 Active Students</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#145EFF" />
                  <span>100% Digital Dossiers</span>
                </span>
                <span className="hero-kpi-chip">
                  <CheckCircle2 size={14} color="#742DDA" />
                  <span>Batch PVC ID Ready</span>
                </span>
              </div>
            </div>

            {/* Right: Real Student Photo Hero Showcase */}
            <div className="solutions-gov-hero-visual">
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(15,23,42,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img 
                    src="/real-photos/real-teacher-students-hnahthial-opt.jpg" 
                    alt="Real Indian school students in uniform" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 750 }}>
                    Real Indian School Cohort
                  </div>
                </div>

                <div style={{ padding: '14px 18px', background: '#F8FAFC', borderTop: '1px solid var(--color-slate-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 750, color: 'var(--color-ink)' }}>Verified Institutional Registry</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 600 }}>Class I to Class XII</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL SMART ID CARD DEMO (WITH REAL STUDENT PHOTO) */}
      <section className="section section--white" id="smart-id-card">
        <div className="container">
          <div className="section-header">
            <h2>Batch-Printable Student Identity Cards</h2>
            <p>Ready to print on CR80 PVC plastic cards or 8-per-page A4 sticker sheets.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <div className="simulated-idcard" style={{ borderRadius: '8px' }}>
              <div className="idcard-top">
                <div className="idcard-school">PRAGYA MODEL ACADEMY</div>
                <div className="idcard-affil">AFFILIATED TO WBBSE / CBSE • ESTD. 1994</div>
              </div>
              <div className="idcard-body">
                <div className="idcard-photo-box">
                  {/* REAL PHOTOGRAPH OF INDIAN STUDENT */}
                  <img 
                    src="/real-student-id-ananya.jpg" 
                    alt="Ananya Das Student Photo" 
                    style={{ width: '100%', height: '110px', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--color-slate-300)' }}
                  />
                  <span className="idcard-student-type" style={{ marginTop: '6px' }}>STUDENT</span>
                </div>
                <div className="idcard-details">
                  <div className="idcard-name">ANANYA DAS</div>
                  <div className="idcard-field"><span>Class &amp; Sec:</span> <strong>IX - Section A</strong></div>
                  <div className="idcard-field"><span>Roll Number:</span> <strong>14</strong></div>
                  <div className="idcard-field"><span>Admission No:</span> <strong>ADM-2023-812</strong></div>
                  <div className="idcard-field"><span>Blood Group:</span> <strong style={{ color: 'var(--color-danger)' }}>B +ve</strong></div>
                  <div className="idcard-field"><span>Emergency Ph:</span> <strong>+91 98300 12345</strong></div>
                  <div className="idcard-field"><span>Valid Till:</span> <strong>31 March 2027</strong></div>
                </div>
              </div>
              <div className="idcard-barcode-strip">
                <div className="barcode-mock">|||||| |||| ||||| ||||||| ||||</div>
                <span>UID: 2026-IX-14-0842 • APAAR Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL REAL PHOTO CAPABILITY CARDS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <h2>Complete Control Across All 12 School Years</h2>
            <p>Maintain accurate academic records and legal custody of student documentation.</p>
          </div>

          <div className="role-gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {studentCards.map((card, i) => (
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

      {/* 4. 4-STEP CONNECTED LIFECYCLE TIMELINE */}
      <section className="apaar-how-section" id="how-it-works">
        <div className="container">
          <div className="apaar-how-header">
            <h2>The Student <span>Record Lifecycle</span></h2>
            <p>From day one of admission through graduation, student documents remain verified and accessible.</p>
          </div>

          <div className="apaar-stepper-container">
            <div className="apaar-stepper-connector-line" aria-hidden="true" />

            <div className="apaar-how-steps-grid">
              <div className="how-step-node">
                <div className="step-circle-badge">01.</div>
                <div className="step-icon-box">
                  <Users size={22} color="#145EFF" />
                </div>
                <h4>Digital Intake</h4>
                <p>Upload birth cert, Aadhaar scan, and passport photo</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">02.</div>
                <div className="step-icon-box">
                  <FileCheck size={22} color="#059669" />
                </div>
                <h4>Auto Verification</h4>
                <p>Spelling and PEN validation against UDISE+ database</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">03.</div>
                <div className="step-icon-box">
                  <Printer size={22} color="#742DDA" />
                </div>
                <h4>Smart ID Print</h4>
                <p>Batch PVC card printing with encrypted QR barcode</p>
              </div>

              <div className="how-step-node">
                <div className="step-circle-badge">04.</div>
                <div className="step-icon-box">
                  <Award size={22} color="#F59E0B" />
                </div>
                <h4>12-Year History</h4>
                <p>Permanent marksheets, fee history, and transfer certificates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <h2>Common Questions on Student Management</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="Ready to Digitise Your Student Records?"
        subtitle="Bring your school's Excel roster or paper registers. We'll map your classes in a live demo."
        buttonText="Book a Student Registry Demo"
      />
    </div>
  );
}
