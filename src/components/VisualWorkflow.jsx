import React from 'react';
import { FileInput, SearchCheck, CheckCircle2, DownloadCloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VisualWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FileInput size={24} />,
      color: "#145EFF",
      gradient: "linear-gradient(135deg, #145EFF 0%, #3B82F6 100%)",
      cardBg: "linear-gradient(150deg, #FFFFFF 20%, #EFF6FF 100%)",
      borderColor: "rgba(20, 94, 255, 0.28)",
      shadowColor: "rgba(20, 94, 255, 0.2)",
      title: "Parent Consent Logging",
      desc: "Record written or physical consent status per child directly into the school register.",
      badge: "Form Validation"
    },
    {
      num: "02",
      icon: <SearchCheck size={24} />,
      color: "#742DDA",
      gradient: "linear-gradient(135deg, #742DDA 0%, #9333EA 100%)",
      cardBg: "linear-gradient(150deg, #FFFFFF 20%, #F5F3FF 100%)",
      borderColor: "rgba(116, 45, 218, 0.28)",
      shadowColor: "rgba(116, 45, 218, 0.2)",
      title: "Name & DOB Pre-Check",
      desc: "Spot spelling variations between Aadhaar documentation and school admission records.",
      badge: "Discrepancy Flags"
    },
    {
      num: "03",
      icon: <CheckCircle2 size={24} />,
      color: "#0891B2",
      gradient: "linear-gradient(135deg, #00CDE5 0%, #0891B2 100%)",
      cardBg: "linear-gradient(150deg, #FFFFFF 20%, #ECFEFF 100%)",
      borderColor: "rgba(0, 205, 229, 0.32)",
      shadowColor: "rgba(0, 205, 229, 0.2)",
      title: "UDISE+ & PEN Match",
      desc: "Link Permanent Education Numbers and detect unassigned or duplicate records early.",
      badge: "Format Assurance"
    },
    {
      num: "04",
      icon: <DownloadCloud size={24} />,
      color: "#059669",
      gradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
      cardBg: "linear-gradient(150deg, #FFFFFF 20%, #ECFDF5 100%)",
      borderColor: "rgba(5, 150, 105, 0.28)",
      shadowColor: "rgba(5, 150, 105, 0.2)",
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
            <div 
              key={i} 
              className="workflow-step-card"
              style={{
                background: st.cardBg,
                border: `1.5px solid ${st.borderColor}`,
                boxShadow: `0 6px 18px -4px ${st.shadowColor}`
              }}
            >
              <div className="iconic-top-accent" style={{ background: st.gradient }} />
              <div className="workflow-step-top">
                <span className="workflow-num" style={{ color: st.color, background: `${st.color}15` }}>{st.num}</span>
                <span 
                  className="workflow-badge"
                  style={{
                    backgroundColor: `${st.color}12`,
                    color: st.color,
                    borderColor: `${st.color}35`,
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                >
                  {st.badge}
                </span>
              </div>
              <div 
                className="workflow-icon-box" 
                style={{ 
                  background: st.gradient,
                  color: '#FFFFFF',
                  boxShadow: `0 6px 16px -2px ${st.color}50`
                }}
              >
                {st.icon}
              </div>
              <h3 className="workflow-step-title">{st.title}</h3>
              <p className="workflow-step-desc">{st.desc}</p>
              {i < steps.length - 1 && (
                <div className="workflow-connector-arrow" aria-hidden="true" style={{ color: st.color }}>
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
