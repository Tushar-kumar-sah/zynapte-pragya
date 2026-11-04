import os

def update_erp_mockup_jsx():
    code = """import React, { useState } from 'react';
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
"""
    with open('src/components/ErpMockup.jsx', 'w', encoding='utf-8') as f:
        f.write(code)
    print('Updated src/components/ErpMockup.jsx with real screenshot!')

def append_screenshot_css():
    css = """
/* ==========================================================================
   REAL SOFTWARE SCREENSHOT PRESENTATION IN HERO
   ========================================================================== */
.real-screenshot-frame {
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  background: #0F172A !important;
}

.real-screenshot-frame:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.16), 0 6px 20px rgba(29, 104, 216, 0.15) !important;
}

.real-screenshot-container {
  position: relative;
  overflow: hidden;
  background: #0F172A;
  line-height: 0;
  display: block;
}

.real-erp-screenshot-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.real-screenshot-frame:hover .real-erp-screenshot-img {
  transform: scale(1.012);
}

.screenshot-hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
}

.real-screenshot-frame:hover .screenshot-hover-overlay {
  opacity: 1;
}

.screenshot-expand-pill {
  background: rgba(15, 23, 42, 0.88);
  color: #FFFFFF;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8125rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform: translateY(6px);
  transition: transform 0.25s ease;
}

.real-screenshot-frame:hover .screenshot-expand-pill {
  transform: translateY(0);
}

.screenshot-corner-badge {
  position: absolute;
  bottom: 10px;
  right: 12px;
  background: rgba(15, 23, 42, 0.85);
  color: #F8FAFC;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.6875rem;
  font-weight: 750;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(6px);
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.live-pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10B981;
  box-shadow: 0 0 8px #10B981;
}

/* Lightbox Modal */
.screenshot-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(6px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: fadeInModal 0.2s ease-out;
}

@keyframes fadeInModal {
  from { opacity: 0; }
  to { opacity: 1; }
}

.screenshot-modal-content {
  background: #0F172A;
  border: 1px solid #334155;
  border-radius: 8px;
  width: 100%;
  max-width: 1300px;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
}

.screenshot-modal-header {
  padding: 12px 20px;
  background: #1E293B;
  border-bottom: 1px solid #334155;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #F8FAFC;
}

.modal-header-title {
  display: flex;
  align-items: center;
  font-size: 0.9375rem;
}

.modal-close-btn {
  background: transparent;
  border: none;
  color: #94A3B8;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.15s ease, background 0.15s ease;
}

.modal-close-btn:hover {
  color: #FFFFFF;
  background: #334155;
}

.screenshot-modal-body {
  overflow: auto;
  padding: 0;
  background: #0B1120;
}

.modal-full-img {
  width: 100%;
  height: auto;
  display: block;
}
"""
    with open('src/index.css', 'a', encoding='utf-8') as f:
        f.write(css)
    print('Appended screenshot presentation CSS to src/index.css!')

if __name__ == '__main__':
    update_erp_mockup_jsx()
    append_screenshot_css()
