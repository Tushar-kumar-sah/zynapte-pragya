import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, CheckCircle2 } from 'lucide-react';
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
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          {/* Brand Logo & Wordmark */}
          <Link to="/" className="brand-link" aria-label="Pragya School ERP Homepage">
            <img src="/pragya-logo.png" alt="Pragya Logo" className="brand-logo-img" width="44" height="44" />
            <div className="brand-text-group">
              <span className="brand-wordmark">Pragya</span>
              <span className="brand-tagline-small">School ERP</span>
            </div>
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
          <li><Link to="/school-erp-mobile-app">Mobile App</Link></li>
          <li><Link to="/multi-branch-management">Multi-Branch Schools</Link></li>
          <li><Link to="/school-erp-west-bengal">West Bengal Schools (WBBSE/WBCHSE)</Link></li>
          <li><Link to="/security">Security &amp; Hosting</Link></li>
          <li><Link to="/about">About Pragya</Link></li>
          <li><Link to="/pricing">Pricing &amp; Enquiry</Link></li>
          <li><Link to="/faqs">Frequently Asked Questions</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="mobile-cta-group">
          <Link to="/contact" className="btn btn--primary btn--block">Book a Demo</Link>
          <Link to="/apaar-readiness" className="btn btn--secondary btn--block">See APAAR Readiness</Link>
        </div>
      </div>
    </header>
  );
}
