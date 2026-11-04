import React, { useState } from 'react';
import { Lock, ChevronDown, Maximize2, X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ErpMockup() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="erp-mockup-wrapper">
        {/* Subtle ambient multi-color glow */}
        <div className="erp-mockup-glow" aria-hidden="true" />

        {/* Main SaaS Window Frame */}
        <div 
          className="erp-mockup real-screenshot-frame" 
          onClick={() => setIsModalOpen(true)} 
          title="Click to view full-resolution software interface"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsModalOpen(true); }}
        >
          {/* Browser Top Window Bar */}
          <div className="mockup-window-bar">
            <div className="mockup-dots">
              <div className="mockup-dot mockup-dot--red" />
              <div className="mockup-dot mockup-dot--yellow" />
              <div className="mockup-dot mockup-dot--green" />
            </div>

            <div className="mockup-address-pill">
              <Lock size={10} className="mockup-lock-icon" />
              <span className="mockup-url">pragyaschoolerp.in/admin/dashboard</span>
            </div>

            <div className="mockup-header-right">
              <span className="mockup-gov-tag">
                <span className="mockup-live-dot" /> 100% APAAR Format Ready
              </span>
              <div className="mockup-branch-badge">
                <span>Main Campus • 2026-27</span>
                <ChevronDown size={11} />
              </div>
            </div>
          </div>

          {/* Real Software Screenshot Container */}
          <div className="real-screenshot-container">
            <img 
              src="/pragya-erp-dashboard-real.png" 
              alt="Pragya School ERP Real Administrative Dashboard Interface" 
              className="real-erp-screenshot-img"
              loading="eager"
            />
            
            {/* Interactive Hover Badge */}
            <div className="screenshot-hover-overlay">
              <span className="screenshot-expand-pill">
                <Maximize2 size={13} /> Click to View Full Interface
              </span>
            </div>

            {/* Corner Live Micro-Badge */}
            <div className="screenshot-corner-badge">
              <span className="live-pulse-dot" />
              <span>LIVE SYSTEM INTERFACE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isModalOpen && (
        <div className="screenshot-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="screenshot-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="screenshot-modal-header">
              <div className="modal-header-title">
                <strong>Pragya School ERP — Executive Command Center (Live Product Interface)</strong>
                <span className="badge badge--green" style={{ marginLeft: '12px', fontSize: '0.72rem' }}>CBSE &amp; ICSE Aligned</span>
              </div>
              <button className="modal-close-btn" onClick={() => setIsModalOpen(false)} aria-label="Close Preview">
                <X size={20} />
              </button>
            </div>
            <div className="screenshot-modal-body">
              <img 
                src="/pragya-erp-dashboard-real.png" 
                alt="Pragya School ERP Full Resolution Dashboard" 
                className="modal-full-img"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
