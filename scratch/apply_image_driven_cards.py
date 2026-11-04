import re

# 1. Update src/pages/Home.jsx
with open(r'c:\Users\sah05\OneDrive\Desktop\pragya\src\pages\Home.jsx', 'r', encoding='utf-8') as f:
    home_content = f.read()

pattern = re.compile(
    r'(<div className="brochure-page3-showcase-grid">[\s\S]*?)({\/\* 3 Quiet Regulatory Pillars at Bottom of Section \*\/})',
    re.MULTILINE
)

new_cards_markup = '''<div className="brochure-page3-showcase-grid">
            {/* Fees Showcase with Real Photo */}
            <div className="page3-card page3-card--fees">
              <div className="page3-card-header">
                <div className="page3-icon-badge page3-icon-badge--fees">
                  <CreditCard size={22} />
                </div>
                <div className="page3-header-meta">
                  <span className="page3-kicker-tag text-orange">INSTANT COUNTER BILLING</span>
                  <h3>Fees &amp; Dynamic UPI Counter</h3>
                  <small>Instant INR Billing • Dynamic UPI QR • 3-Sec Thermal Slips</small>
                </div>
                <span className="page3-live-pill page3-live-pill--orange">
                  <span className="live-dot-pulse live-dot-pulse--orange"></span> Counter Live
                </span>
              </div>

              {/* Visual Showcase Frame with Authentic Indian School Fee Counter Photo */}
              <div className="page3-visual-frame">
                <img 
                  src="/real-photos/real-indian-fees-pos.jpg" 
                  alt="Indian school fees counter with POS thermal printer and UPI QR" 
                  className="page3-showcase-img"
                  loading="lazy"
                />
                <div className="page3-img-overlay page3-img-overlay--top">
                  <span className="page3-overlay-chip page3-overlay-chip--success">
                    <CheckCircle2 size={13} />
                    <span>PAID &amp; RECONCILED</span>
                  </span>
                  <span className="page3-overlay-tag">
                    BURSAR DESK #01
                  </span>
                </div>
                <div className="page3-img-overlay page3-img-overlay--bottom">
                  <div className="page3-overlay-amount-pill">
                    <span className="overlay-amount-label">Counter Collection</span>
                    <strong className="overlay-amount-val">₹ 17,200</strong>
                  </div>
                  <span className="page3-overlay-badge page3-overlay-badge--orange">
                    <CreditCard size={13} /> Dynamic UPI QR &amp; Cash POS
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="page3-card-action-bar">
                <div className="page3-action-note">
                  <Printer size={15} className="text-orange" />
                  <span>3-Sec Thermal Slip • WhatsApp Receipts Sent</span>
                </div>
                <Link to="/fees-management" className="btn btn--primary btn--sm page3-cta-btn page3-cta-btn--fees">
                  Explore Fees POS <ArrowRight size={14} />
                </Link>
              </div>

              {/* Visual Capability Chips */}
              <div className="page3-visual-chips">
                <span className="visual-chip visual-chip--orange">
                  <CreditCard size={15} /> Cash &amp; Dynamic UPI QR
                </span>
                <span className="visual-chip visual-chip--blue">
                  <Printer size={15} /> 3-Sec Thermal Slip
                </span>
                <span className="visual-chip visual-chip--green">
                  <WhatsAppIcon size={15} /> WhatsApp Receipts
                </span>
              </div>
            </div>

            {/* Library Showcase with Real Photo */}
            <div className="page3-card page3-card--library">
              <div className="page3-card-header">
                <div className="page3-icon-badge page3-icon-badge--library">
                  <Library size={22} />
                </div>
                <div className="page3-header-meta">
                  <span className="page3-kicker-tag text-teal">SMART ACCESSION SYSTEM</span>
                  <h3>Digital Library Catalogue</h3>
                  <small>14,800+ Volumes • Barcode Accession • Auto Overdue Alerts</small>
                </div>
                <span className="page3-live-pill page3-live-pill--teal">
                  <span className="live-dot-pulse live-dot-pulse--teal"></span> 14,820 Volumes
                </span>
              </div>

              {/* Visual Showcase Frame with Authentic Indian School Library Photo */}
              <div className="page3-visual-frame">
                <img 
                  src="/real-photos/real-indian-library.jpg" 
                  alt="Indian school library with student in uniform and digital catalog desk" 
                  className="page3-showcase-img"
                  loading="lazy"
                />
                <div className="page3-img-overlay page3-img-overlay--top">
                  <span className="page3-overlay-chip page3-overlay-chip--teal">
                    <BookOpen size={13} />
                    <span>ICSE &amp; CBSE CATALOGUE</span>
                  </span>
                  <span className="page3-overlay-tag page3-overlay-tag--teal">
                    14,820 VOLUMES
                  </span>
                </div>
                <div className="page3-img-overlay page3-img-overlay--bottom">
                  <div className="page3-overlay-amount-pill page3-overlay-amount-pill--teal">
                    <span className="overlay-amount-label">Smart Accession</span>
                    <strong className="overlay-amount-val">1-Tap Scan</strong>
                  </div>
                  <span className="page3-overlay-badge page3-overlay-badge--teal">
                    <ScanLine size={13} /> Barcode Scanner Integrated
                  </span>
                </div>
              </div>

              {/* Action Bar */}
              <div className="page3-card-action-bar">
                <div className="page3-action-note">
                  <ScanLine size={15} className="text-teal" />
                  <span>Student ID Barcode Linked • Overdue Reminders</span>
                </div>
                <Link to="/features" className="btn btn--primary btn--sm page3-cta-btn page3-cta-btn--library">
                  View Live Catalogue <ArrowRight size={14} />
                </Link>
              </div>

              {/* Visual Capability Chips */}
              <div className="page3-visual-chips">
                <span className="visual-chip visual-chip--teal">
                  <ScanLine size={15} /> 1-Tap Barcode Scan
                </span>
                <span className="visual-chip visual-chip--blue">
                  <BookOpen size={15} /> ICSE &amp; CBSE Index
                </span>
                <span className="visual-chip visual-chip--purple">
                  <Clock size={15} /> Overdue Fine Alerts
                </span>
              </div>
            </div>
          </div>

          '''

if pattern.search(home_content):
    home_content = pattern.sub(new_cards_markup + r'\2', home_content)
    with open(r'c:\Users\sah05\OneDrive\Desktop\pragya\src\pages\Home.jsx', 'w', encoding='utf-8') as f:
        f.write(home_content)
    print("SUCCESS: Home.jsx replaced with image-driven cards!")
else:
    print("ERROR: pattern did not match in Home.jsx")
