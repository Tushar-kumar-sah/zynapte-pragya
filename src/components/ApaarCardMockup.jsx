import React from 'react';

export default function ApaarCardMockup({
  name = 'Aarav Sharma',
  dob = '14 April 2014',
  gender = 'Male',
  idNumber = '9154 5678 3420',
  showStacked = true,
  className = ''
}) {
  return (
    <div className={`apaar-card-stack-wrapper ${className}`}>
      {/* Background Decorative Ambient Radial Glow */}
      <div className="apaar-card-ambient-glow" aria-hidden="true" />

      {/* Back Layered Card (Pragya Palette: Rich Emerald-to-Teal / Cyan Gradient) */}
      {showStacked && (
        <div className="apaar-card-physical apaar-card-physical--back" aria-hidden="true">
          <div className="apaar-back-inner">
            <div className="apaar-back-header">
              <div className="emblem-symbol-svg">
                <svg viewBox="0 0 24 28" width="20" height="24" fill="currentColor">
                  <path d="M12 1L8 5h8l-4-4zm-6 6h12v2H6V7zm1 4h10v6H7v-6zm5 8c2.2 0 4 1.8 4 4H8c0-2.2 1.8-4 4-4z" opacity="0.9"/>
                </svg>
              </div>
              <div>
                <div className="back-emblem-hi">शिक्षा मंत्रालय</div>
                <div className="back-emblem-en">MINISTRY OF EDUCATION</div>
              </div>
            </div>
            <div className="apaar-back-center">
              <div className="apaar-back-logo">APAAR</div>
              <div className="apaar-back-sub">ONE NATION, ONE STUDENT ID</div>
            </div>
            <div className="apaar-back-footer">
              <span>National Academic Depository (NAD)</span>
              <span>DigiLocker Integrated</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Front Physical APAAR Card (White Plastic with Chip & QR) */}
      <div className="apaar-card-physical apaar-card-physical--front">
        {/* Hologram / Security Strip */}
        <div className="apaar-card-top-bar">
          <div className="apaar-gov-logos">
            <div className="emblem-crest">
              {/* Ashoka Stambh Emblem Vector */}
              <svg viewBox="0 0 24 28" width="22" height="26" fill="#1E293B">
                <path d="M12 1L8 5h8l-4-4zm-6 6h12v2H6V7zm1 4h10v6H7v-6zm5 8c2.2 0 4 1.8 4 4H8c0-2.2 1.8-4 4-4z" opacity="0.85"/>
              </svg>
            </div>
            <div className="apaar-gov-text">
              <span className="gov-hi">शिक्षा मंत्रालय</span>
              <span className="gov-en">MINISTRY OF EDUCATION</span>
              <span className="gov-in">GOVERNMENT OF INDIA</span>
            </div>
          </div>

          <div className="apaar-brand-wrap">
            <div className="apaar-tricolor-bar">
              <span className="tri-saffron" />
              <span className="tri-white" />
              <span className="tri-green" />
            </div>
            <div className="apaar-brand-title">APAAR</div>
            <div className="apaar-brand-sub">ONE NATION, ONE STUDENT ID</div>
          </div>
        </div>

        {/* Full Name of Registry */}
        <div className="apaar-card-subtitle">
          AUTOMATED PERMANENT ACADEMIC ACCOUNT REGISTRY (APAAR)
        </div>

        {/* Card Body: Student Photo + Metadata + QR Code */}
        <div className="apaar-card-body">
          {/* Student Photo */}
          <div className="apaar-student-photo-box">
            <div className="student-photo-frame">
              <img
                src="/apaar-student-avatar.png"
                alt={name}
                className="student-photo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextElementSibling) {
                    e.target.nextElementSibling.style.display = 'block';
                  }
                }}
              />
              <div className="student-photo-fallback" style={{ display: 'none' }}>
                <svg viewBox="0 0 80 80" width="68" height="68">
                  <circle cx="40" cy="40" r="39" fill="#F1F5F9" />
                  <circle cx="40" cy="26" r="13" fill="#FBBF24" />
                  <path d="M26 24c0-8 6-14 14-14s14 6 14 14c0 3-1 6-3 8-2-6-6-9-11-9s-9 3-11 9c-2-2-3-5-3-8z" fill="#1E293B" />
                  <circle cx="35" cy="26" r="1.5" fill="#1E293B" />
                  <circle cx="45" cy="26" r="1.5" fill="#1E293B" />
                  <path d="M18 70c0-14 10-22 22-22s22 8 22 22z" fill="#FFFFFF" />
                  <polygon points="40,50 43,53 42,70 38,70 37,53" fill="#1D4ED8" />
                </svg>
              </div>
            </div>
            <div className="apaar-verified-dot" title="Verified Biometric and PEN">
              <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          {/* Student Details */}
          <div className="apaar-student-info">
            <div className="student-info-name">{name}</div>
            <div className="student-info-meta">
              <div className="info-row">
                <span className="info-lbl">DOB:</span>
                <strong className="info-val">{dob}</strong>
              </div>
              <div className="info-row">
                <span className="info-lbl">Gender:</span>
                <strong className="info-val">{gender}</strong>
              </div>
            </div>
          </div>

          {/* Realistic High-Res Vector QR Code */}
          <div className="apaar-qr-box">
            <svg viewBox="0 0 100 100" width="72" height="72" className="apaar-qr-code">
              <rect width="100" height="100" fill="#FFFFFF" />
              {/* Corner 1: Top-Left Finder */}
              <rect x="8" y="8" width="28" height="28" fill="#0F172A" rx="2" />
              <rect x="14" y="14" width="16" height="16" fill="#FFFFFF" />
              <rect x="18" y="18" width="8" height="8" fill="#0F172A" />
              {/* Corner 2: Top-Right Finder */}
              <rect x="64" y="8" width="28" height="28" fill="#0F172A" rx="2" />
              <rect x="70" y="14" width="16" height="16" fill="#FFFFFF" />
              <rect x="74" y="18" width="8" height="8" fill="#0F172A" />
              {/* Corner 3: Bottom-Left Finder */}
              <rect x="8" y="64" width="28" height="28" fill="#0F172A" rx="2" />
              <rect x="14" y="70" width="16" height="16" fill="#FFFFFF" />
              <rect x="18" y="74" width="8" height="8" fill="#0F172A" />
              {/* Modules */}
              <rect x="42" y="12" width="6" height="6" fill="#0F172A" />
              <rect x="52" y="18" width="6" height="6" fill="#0F172A" />
              <rect x="42" y="26" width="6" height="6" fill="#0F172A" />
              <rect x="12" y="44" width="6" height="6" fill="#0F172A" />
              <rect x="22" y="50" width="6" height="6" fill="#0F172A" />
              <rect x="44" y="44" width="12" height="12" fill="#0F172A" rx="2" />
              <rect x="62" y="42" width="6" height="6" fill="#0F172A" />
              <rect x="76" y="48" width="6" height="6" fill="#0F172A" />
              <rect x="84" y="56" width="6" height="6" fill="#0F172A" />
              <rect x="42" y="66" width="6" height="6" fill="#0F172A" />
              <rect x="52" y="74" width="6" height="6" fill="#0F172A" />
              <rect x="68" y="68" width="6" height="6" fill="#0F172A" />
              <rect x="82" y="78" width="8" height="8" fill="#0F172A" />
            </svg>
          </div>
        </div>

        {/* 12-Digit Formatted Number */}
        <div className="apaar-card-id-number">
          <span>{idNumber}</span>
        </div>
      </div>
    </div>
  );
}
