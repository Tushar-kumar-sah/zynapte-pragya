import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, CheckCircle2, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { navLinks } from '../data/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Credentials & Reseller Bar (Page 1 & 4 of Brochure) */}
      <div className="top-gov-bar">
        <div className="container top-gov-bar-inner">
          <div className="gov-badges-group">
            <span className="gov-badge-highlight">
              <Sparkles size={11} className="text-orange" />
              <span>NEXT-GEN INDIAN SCHOOL &amp; COLLEGE ERP</span>
            </span>
            <span className="gov-sep">•</span>
            <span className="gov-badge-item">DPIIT <strong>#startupindia</strong> (DIPP187962)</span>
            <span className="gov-sep">•</span>
            <span className="gov-badge-item">Ministry of MSME (UDYAM-WB-10-0144056)</span>
            <span className="gov-sep">•</span>
            <span className="gov-badge-item"><strong>D-U-N-S®</strong> 766391467</span>
          </div>
          <div className="gov-partner-link">
            <span>Partner: <strong>Code Kumite</strong></span>
            <a href="https://wa.me/919748555490" target="_blank" rel="noopener noreferrer" className="gov-wa-link" title="Chat on WhatsApp with Code Kumite">
              <MessageSquare size={12} /> WhatsApp: 974855549
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          {/* Brand Logo */}
          <Link to="/" className="brand-link" aria-label="Pragya School ERP Homepage">
            <img src="/pragya-logo.png" alt="Pragya - Empowering Schools & Colleges. Enriching Futures." className="brand-logo-img" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navLinks.slice(1, 7).map((item, index) => {
              if (item.children) {
                return (
                  <li key={index} className="nav-item">
                    <span className="nav-link">
                      {item.label} <ChevronDown size={14} />
                    </span>
                    <ul className="dropdown-menu">
                      {item.children.map((sub, sIdx) => (
                        <li key={sIdx} className="dropdown-item">
                          <Link to={sub.path}>{sub.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={index} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''} ${item.highlight ? 'nav-link--highlight' : ''}`}
                  >
                    {item.label}
                    {item.highlight && <span className="dropdown-badge">APAAR</span>}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Action CTAs */}
          <div className="nav-actions">
            <a 
              href="https://wa.me/919748555490" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn--secondary btn--sm nav-wa-btn"
              title="Chat directly with Authorized Partner on WhatsApp"
            >
              <MessageSquare size={14} color="#25D366" />
              <span>WhatsApp</span>
            </a>
            <Link to="/contact" className="btn btn--primary btn--sm">
              Book a Demo
            </Link>
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-backdrop" 
          onClick={() => setMobileMenuOpen(false)} 
          aria-hidden="true" 
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-header">
          <div className="mobile-partner-badge">
            <small>AUTHORIZED RESELLER</small>
            <strong>Code Kumite • +91 97485 55490</strong>
          </div>
        </div>
        <ul className="mobile-nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">All Features Overview</Link></li>
          <li><Link to="/apaar-readiness">APAAR Readiness (Special Flow)</Link></li>
          <li><Link to="/solutions">Who It’s For (Roles)</Link></li>
          <li><Link to="/student-management">Student Management</Link></li>
          <li><Link to="/fees-management">Fees &amp; Receipts</Link></li>
          <li><Link to="/attendance-management">Attendance &amp; Leave</Link></li>
          <li><Link to="/academics-timetable">Academics &amp; Timetable</Link></li>
          <li><Link to="/exam-result-management">Exams &amp; Results</Link></li>
          <li><Link to="/staff-payroll-management">Staff &amp; Payroll</Link></li>
          <li><Link to="/school-communication">School Communication</Link></li>
          <li><Link to="/school-erp-mobile-app">Mobile App (iOS &amp; Android)</Link></li>
          <li><Link to="/west-bengal-schools">West Bengal Schools (WBBSE/WBCHSE)</Link></li>
          <li><Link to="/security">Security &amp; Cloud Hosting</Link></li>
          <li><Link to="/pricing">Pricing &amp; Proposal</Link></li>
          <li><Link to="/about">About Pragya &amp; Team</Link></li>
          <li><Link to="/faqs">FAQ &amp; Knowledge Base</Link></li>
        </ul>
        <div className="mobile-nav-footer">
          <a href="https://wa.me/919748555490" target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--block" style={{ marginBottom: '8px', color: '#166534' }}>
            <MessageSquare size={16} color="#25D366" /> Chat on WhatsApp
          </a>
          <Link to="/contact" className="btn btn--primary btn--block">
            Book a Personalised Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
