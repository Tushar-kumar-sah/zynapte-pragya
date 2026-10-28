import React from 'react';
import { FileInput, SearchCheck, CheckCircle2, DownloadCloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VisualWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FileInput size={24} />,
      color: "var(--color-blue)",
      bg: "rgba(20, 94, 255, 0.08)",
      title: "Parent Consent Logging",
      desc: "Record written or physical consent status per child directly into the school register.",
      badge: "Form Validation"
    },
    {
      num: "02",
      icon: <SearchCheck size={24} />,
      color: "var(--color-violet)",
      bg: "rgba(116, 45, 218, 0.08)",
      title: "Name & DOB Pre-Check",
      desc: "Spot spelling variations between Aadhaar documentation and school admission records.",
      badge: "Discrepancy Flags"
    },
    {
      num: "03",
      icon: <CheckCircle2 size={24} />,
      color: "var(--color-cyan)",
      bg: "rgba(0, 205, 229, 0.12)",
      title: "UDISE+ & PEN Match",
      desc: "Link Permanent Education Numbers and detect unassigned or duplicate records early.",
      badge: "Format Assurance"
    },
    {
      num: "04",
      icon: <DownloadCloud size={24} />,
      color: "var(--color-success)",
      bg: "rgba(5, 150, 105, 0.08)",
      title: "Export Ready Data Sheet",
      desc: "Download verified, clean CSV/Excel formatted exactly for the government portal.",
      badge: "Portal-Ready"
    }
  ];

  return (
    <section className="section visual-workflow-section" aria-label="4-Step APAAR Readiness Flow">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            4-STEP VISUAL READINESS JOURNEY
          </div>
          <h2>From Admission Form to Clean Export</h2>
          <p>
            Pragya structures the entire APAAR readiness flow so school staff never submit incomplete records or face portal rejections.
          </p>
        </div>

        <div className="workflow-steps-grid">
          {steps.map((st, i) => (
            <div key={i} className="workflow-step-card">
              <div className="workflow-step-top">
                <span className="workflow-num">{st.num}</span>
                <span className="workflow-badge">{st.badge}</span>
              </div>
              <div className="workflow-icon-box" style={{ color: st.color, backgroundColor: st.bg }}>
                {st.icon}
              </div>
              <h3 className="workflow-step-title">{st.title}</h3>
              <p className="workflow-step-desc">{st.desc}</p>
              {i < steps.length - 1 && (
                <div className="workflow-connector-arrow" aria-hidden="true">
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="workflow-cta-center">
          <Link to="/apaar-readiness" className="btn btn--accent-gradient btn--lg">
            <span>Explore Complete APAAR Journey &amp; CSV Template</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
