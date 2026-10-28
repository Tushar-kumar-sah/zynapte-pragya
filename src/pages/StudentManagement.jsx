import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, FileSpreadsheet, Shield, Search, ArrowRight, 
  Printer, CheckCircle2, UserCheck, Award, FileText, Check 
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

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="hero-live-pill" style={{ margin: '0 auto 16px' }}>
              <span className="hero-live-dot" />
              <span>Unified 12-Year Student Dossier &bull; ID Card Generator</span>
            </div>
            <div className="eyebrow"><span className="eyebrow-dot" />STUDENT REGISTRY &amp; PROFILES</div>
            <h1 className="page-hero-title">Every Student Record, Organised for the Whole School Journey.</h1>
            <p className="page-hero-desc">
              One connected folder across admissions, classroom attendance, term marksheets, counter fees, and APAAR validation.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary btn--lg">Book a Student Registry Demo</Link>
              <Link to="/admission-management" className="btn btn--secondary btn--lg">Explore Admissions CRM</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Simulated Student ID Card & Digital Dossier */}
      <section className="section section--white">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />SMART ID CARDS</div>
            <h2>Batch-Printable Student Identity Cards</h2>
            <p>Ready to print on CR80 PVC plastic cards or 8-per-page A4 sticker sheets.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <div className="simulated-idcard">
              <div className="idcard-top">
                <div className="idcard-school">PRAGYA PUBLIC SCHOOL</div>
                <div className="idcard-affil">AFFILIATED TO WBBSE / CBSE • ESTD. 1994</div>
              </div>
              <div className="idcard-body">
                <div className="idcard-photo-box">
                  <div className="idcard-avatar-sample">👩‍🎓</div>
                  <span className="idcard-student-type">STUDENT</span>
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
                <span>UID: 2026-IX-14-0842</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Feature Cards with Icons */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow"><span className="eyebrow-dot" />STUDENT LIFECYCLE</div>
            <h2>Complete Control from Class I to Class XII</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(20, 94, 255, 0.08)', color: 'var(--color-blue)' }}>
                <Users size={28} />
              </div>
              <h3>Permanent Digital Dossier</h3>
              <p>Store birth certificates, Aadhaar numbers, caste certificates, previous school transfer certificates (TC), and guardian records in 1 encrypted place.</p>
              <div className="feature-card-tags">
                <span className="badge badge--blue">Cloud Dossier</span>
                <span className="badge badge--blue">Photo Upload</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(5, 150, 105, 0.08)', color: 'var(--color-success)' }}>
                <FileSpreadsheet size={28} />
              </div>
              <h3>Assisted Excel / CSV Importer</h3>
              <p>Migrate thousands of legacy students in minutes. Pragya's guided column mapper verifies phone numbers, date formats, and duplicates before import.</p>
              <div className="feature-card-tags">
                <span className="badge badge--green">Error Highlighting</span>
                <span className="badge badge--green">1-Click Commit</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(116, 45, 218, 0.08)', color: 'var(--color-violet)' }}>
                <Printer size={28} />
              </div>
              <h3>Bulk ID Card &amp; Certificate Studio</h3>
              <p>Generate Bonafide certificates, character certificates, transfer certificates, and barcoded photo ID cards in 1 click.</p>
              <div className="feature-card-tags">
                <span className="badge badge--violet">TC Generator</span>
                <span className="badge badge--violet">Bonafide Print</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon" style={{ background: 'rgba(0, 205, 229, 0.12)', color: '#028394' }}>
                <UserCheck size={28} />
              </div>
              <h3>APAAR &amp; UDISE+ Linked</h3>
              <p>Check parental consent flags, PEN numbers, and Aadhaar name matches directly from each student's personal view.</p>
              <div className="feature-card-tags">
                <span className="badge badge--cyan">Consent Tag</span>
                <span className="badge badge--cyan">PEN Link</span>
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
            <h2>Student Record Management FAQs</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <BottomCta
        title="See Student Management in Action."
        subtitle="Walk through how student profiles connect with attendance, exams, fees and APAAR readiness."
        buttonText="Book a Demo"
      />
    </>
  );
}
