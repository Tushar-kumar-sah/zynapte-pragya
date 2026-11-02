import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, ShieldCheck, CheckCircle2, Award, Building2 } from 'lucide-react';
import { footerPlatformLinks, footerSolutionsLinks } from '../data/navigation';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Government Credentials & Partner Trust Banner (Directly from Brochure Page 1 & 4) */}
        <div className="footer-credentials-strip">
          <div className="footer-cred-item">
            <Award size={18} className="text-orange" />
            <div>
              <strong>DPIIT #startupindia</strong>
              <small>Govt. of India Recognition: DIPP187962</small>
            </div>
          </div>
          <div className="footer-cred-sep" />
          <div className="footer-cred-item">
            <Building2 size={18} className="text-blue" />
            <div>
              <strong>Ministry of MSME</strong>
              <small>Govt. of India: UDYAM-WB-10-0144056</small>
            </div>
          </div>
          <div className="footer-cred-sep" />
          <div className="footer-cred-item">
            <ShieldCheck size={18} className="text-green" />
            <div>
              <strong>D-U-N-S® Registered</strong>
              <small>Global Entity ID: 766391467</small>
            </div>
          </div>
          <div className="footer-cred-sep" />
          <div className="footer-cred-item">
            <MessageSquare size={18} color="#25D366" />
            <div>
              <strong>Meta Tech Provider</strong>
              <small>WhatsApp-Ready School Broadcasts</small>
            </div>
          </div>
        </div>

        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-brand-link" aria-label="Pragya School ERP Homepage">
              <div className="footer-logo-card">
                <img src="/pragya-logo.png" alt="Pragya - Empowering Schools & Colleges. Enriching Futures." className="footer-logo-img" />
              </div>
            </Link>
            <p className="footer-tagline-text">
              <strong>Empowering Schools &amp; Colleges. Enriching Futures.</strong><br />
              One connected platform for student records, academics, attendance, fees, exams, staff payroll and APAAR readiness.
            </p>
            <div className="footer-cta-btns">
              <Link to="/contact" className="btn btn--primary btn--sm">
                Book a Live Demo
              </Link>
              <a 
                href="https://wa.me/919748555490" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn--secondary btn--sm"
                style={{ color: '#166534' }}
              >
                <MessageSquare size={13} color="#25D366" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <div className="footer-col-title">Platform &amp; Modules</div>
            <ul className="footer-nav-list">
              {footerPlatformLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Company */}
          <div>
            <div className="footer-col-title">Solutions &amp; Compliance</div>
            <ul className="footer-nav-list">
              {footerSolutionsLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
              <li><Link to="/west-bengal-schools">West Bengal Board (WBBSE/WBCHSE)</Link></li>
              <li><Link to="/security">AWS Cloud &amp; Security</Link></li>
            </ul>
          </div>

          {/* Authorized Partner Box (From Page 4) */}
          <div className="footer-partner-card">
            <div className="footer-col-title">Authorized Reseller</div>
            <div className="footer-partner-badge">
              <strong>Code Kumite</strong>
              <small>Sold Exclusively via Authorized Partners</small>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-300)', marginBottom: '8px' }}>
              <strong>Phone / WhatsApp:</strong><br />
              <a href="tel:974855549" style={{ color: '#FFFFFF', fontWeight: 700 }}>+91 97485 55490 / 974855549</a>
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-300)', marginBottom: '8px' }}>
              <strong>Engineering &amp; IP:</strong><br />
              Developed by Zynapte Technologies Pvt. Ltd., India 🇮🇳
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-300)', marginBottom: '14px' }}>
              <strong>Platform URLs:</strong><br />
              pragyaschoolerp.in · zynapte.com
            </p>
            <span className="badge badge--orange" style={{ fontSize: '0.7rem' }}>
              Schools &amp; Colleges • Web, Android &amp; iPhone
            </span>
          </div>
        </div>

        {/* Required Accuracy Disclaimer Notice */}
        <div className="footer-disclaimer-box">
          <strong>Accuracy &amp; Government Process Notice:</strong> Pragya School ERP prepares, checks, exports and tracks student records for school operations and APAAR readiness. Pragya does not generate APAAR IDs, does not verify Aadhaar OTP directly, and does not replace the official government workflow. APAAR IDs are generated by authorized government systems through DigiLocker and UDISE+. Direct DigiLocker/UDISE+ connectivity, parent-facing online payment checkout, SMS/push gateway delivery and dedicated parent web portal are planned product roadmap items.
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 Pragya School ERP. Developed by <strong>Zynapte Technologies Pvt. Ltd., India 🇮🇳</strong>. Authorized Partner: <strong>Code Kumite</strong>.
          </div>
          <div className="footer-legal-links">
            <Link to="/contact">Contact Partner</Link>
            <Link to="/security">Data Protection &amp; AWS</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
