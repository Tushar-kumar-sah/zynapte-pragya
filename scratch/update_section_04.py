import re

# 1. Update src/pages/Home.jsx
with open(r'c:\Users\sah05\OneDrive\Desktop\pragya\src\pages\Home.jsx', 'r', encoding='utf-8') as f:
    home_content = f.read()

old_section_pattern = re.compile(
    r'(<section className="section section--soft" id="indian-context">[\s\S]*?)(<div className="page3-bottom-pillars-grid">)',
    re.MULTILINE
)

new_section_part = '''<section className="section section--soft" id="indian-context">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker-badge section-kicker-badge--orange">
              <Sparkles size={13} />
              <span>NATIVE INDIAN SCHOOL WORKFLOWS</span>
            </span>
            <h2>Ready for the way Indian schools work.</h2>
            <p>
              Built for counter fee collections, cash POS receipts, library accessions, and state board workflows.
            </p>
          </div>

          {/* Board Alignment Ribbon */}
          <div className="indian-boards-ribbon">
            <span className="ribbon-chip ribbon-chip--violet">APAAR READY</span>
            <span className="ribbon-chip ribbon-chip--blue">UDISE+ READY</span>
            <span className="ribbon-chip ribbon-chip--orange">KHELO INDIA READY</span>
            <span className="ribbon-chip ribbon-chip--green">CBSE ALIGNED</span>
            <span className="ribbon-chip ribbon-chip--red">ICSE ALIGNED</span>
            <span className="ribbon-chip ribbon-chip--teal">STATE &amp; CENTRAL BOARDS</span>
            <span className="ribbon-chip ribbon-chip--purple">COLLEGES READY</span>
          </div>

          {/* 2 Clean Side-by-Side Showcases: Fees & Library */}
          <div className="brochure-page3-showcase-grid">
            {/* Fees Showcase with Real Receipt */}
            <div className="page3-card page3-card--fees">
              <div className="page3-card-header">
                <div className="page3-icon-badge page3-icon-badge--fees">
                  <CreditCard size={22} />
                </div>
                <div className="page3-header-meta">
                  <span className="page3-kicker-tag text-orange">INSTANT COUNTER BILLING</span>
                  <h3>Fees &amp; Dynamic UPI Counter</h3>
                  <small>Class-wise Fee Slabs • Automated Dues • 3-Sec Slips</small>
                </div>
                <span className="page3-live-pill page3-live-pill--orange">
                  <span className="live-dot-pulse live-dot-pulse--orange"></span> Counter Live
                </span>
              </div>

              {/* Fee Receipt Mockup from Page 3 */}
              <div className="brochure-receipt-box">
                <div className="receipt-box-top">
                  <div className="receipt-brand-meta">
                    <strong className="receipt-school-title">PRAGYA MODEL ACADEMY</strong>
                    <div className="receipt-meta-sub">
                      <span className="receipt-reg-no">SLIP #PRG-2026-1044</span>
                      <span className="receipt-pos-counter">BURSAR DESK #01</span>
                    </div>
                  </div>
                  <span className="receipt-status-badge receipt-status-badge--success">
                    <CheckCircle2 size={12} /> PAID &amp; RECONCILED
                  </span>
                </div>

                <div className="receipt-student-meta">
                  <div className="receipt-meta-cell">
                    <span className="meta-label">STUDENT</span>
                    <strong className="meta-val">Ananya Roy</strong>
                  </div>
                  <div className="receipt-meta-cell">
                    <span className="meta-label">CLASS &amp; ROLL</span>
                    <strong className="meta-val">Class IX-A • Roll 01</strong>
                  </div>
                  <div className="receipt-meta-cell">
                    <span className="meta-label">SETTLEMENT</span>
                    <strong className="meta-val text-emerald">Dynamic UPI QR / Cash</strong>
                  </div>
                </div>

                <div className="receipt-line-items">
                  <div className="receipt-row">
                    <span className="receipt-item-name">Quarterly Tuition (Term II)</span>
                    <strong className="receipt-item-amount">₹ 12,500</strong>
                  </div>
                  <div className="receipt-row">
                    <span className="receipt-item-name">Composite Transport (Route #4)</span>
                    <strong className="receipt-item-amount">₹ 3,000</strong>
                  </div>
                  <div className="receipt-row">
                    <span className="receipt-item-name">Digital Library &amp; STEM Lab</span>
                    <strong className="receipt-item-amount">₹ 500</strong>
                  </div>
                  <div className="receipt-row">
                    <span className="receipt-item-name">Board Exam &amp; Verification Fee</span>
                    <strong className="receipt-item-amount">₹ 1,200</strong>
                  </div>
                </div>

                <div className="receipt-total-row">
                  <div className="receipt-total-label-wrap">
                    <span className="receipt-total-label">Total Settled at Counter</span>
                    <span className="receipt-reconcile-tag">✓ SBI &amp; HDFC Dynamic QR Auto-Sync</span>
                  </div>
                  <strong className="receipt-total-val">₹ 17,200</strong>
                </div>

                <div className="receipt-footer-action">
                  <div className="receipt-footer-status">
                    <Printer size={14} className="text-blue" />
                    <span>Instant 3-sec Thermal Print • Auto WhatsApp Slip</span>
                  </div>
                  <Link to="/fees-management" className="btn btn--primary btn--sm page3-cta-btn page3-cta-btn--fees">
                    Explore Fees POS <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Visual Capability Chips (Icons replace text checklist) */}
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

            {/* Library Showcase */}
            <div className="page3-card page3-card--library">
              <div className="page3-card-header">
                <div className="page3-icon-badge page3-icon-badge--library">
                  <Library size={22} />
                </div>
                <div className="page3-header-meta">
                  <span className="page3-kicker-tag text-teal">SMART ACCESSION SYSTEM</span>
                  <h3>Digital Library Catalogue</h3>
                  <small>Barcode Search • Accession Tracking • Due Alerts</small>
                </div>
                <span className="page3-live-pill page3-live-pill--teal">
                  <span className="live-dot-pulse live-dot-pulse--teal"></span> 14,820 Volumes
                </span>
              </div>

              {/* Digital Catalogue Mockup */}
              <div className="brochure-library-box">
                <div className="library-box-header">
                  <div className="library-badge-group">
                    <span className="library-tag">DIGITAL REPOSITORY</span>
                    <span className="library-curriculum-badge">ICSE &amp; CBSE READY</span>
                  </div>
                  <small className="library-header-hint">Barcoded &amp; Accession Number Indexed</small>
                </div>

                <div className="library-search-preview">
                  <Search size={15} className="library-search-icon" />
                  <span className="library-search-placeholder">NCERT Class IX Mathematics &amp; Science...</span>
                  <span className="library-scan-shortcut">
                    <ScanLine size={13} /> Barcode Scan
                  </span>
                </div>

                <div className="library-sample-records">
                  <div className="lib-book-item">
                    <div className="lib-book-spine lib-book-spine--math"></div>
                    <div className="lib-book-info">
                      <div className="lib-book-title-row">
                        <strong>Higher Algebra &amp; Trigonometry</strong>
                        <span className="lib-book-tag">CBSE &amp; ICSE</span>
                      </div>
                      <small>S.L. Loney • Shelf B-04 • Acc #4120 • 9th Edition</small>
                    </div>
                    <span className="badge badge--green lib-status-badge">
                      <Check size={11} /> Available (4)
                    </span>
                  </div>

                  <div className="lib-book-item">
                    <div className="lib-book-spine lib-book-spine--lit"></div>
                    <div className="lib-book-info">
                      <div className="lib-book-title-row">
                        <strong>Sahitya Sanchayan (Secondary Literature)</strong>
                        <span className="lib-book-tag">ICSE &amp; CBSE</span>
                      </div>
                      <small>Curriculum Text • Shelf A-02 • Acc #2811 • Class X</small>
                    </div>
                    <span className="badge badge--orange lib-status-badge">
                      <Clock size={11} /> Issued (Roll 14)
                    </span>
                  </div>
                </div>

                <div className="receipt-footer-action">
                  <div className="receipt-footer-status">
                    <ScanLine size={14} className="text-teal" />
                    <span>Student ID Barcode Linked • 1-Tap Checkout</span>
                  </div>
                  <Link to="/features" className="btn btn--primary btn--sm page3-cta-btn page3-cta-btn--library">
                    View Live Catalogue <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Visual Capability Chips (Icons replace text checklist) */}
              <div className="page3-visual-chips">
                <span className="visual-chip visual-chip--teal">
                  <ScanLine size={15} /> 1-Tap Barcode Accession
                </span>
                <span className="visual-chip visual-chip--blue">
                  <BookOpen size={15} /> ICSE &amp; CBSE Curriculum
                </span>
                <span className="visual-chip visual-chip--purple">
                  <Clock size={15} /> Auto Overdue Fine Alerts
                </span>
              </div>
            </div>
          </div>

          {/* 3 Quiet Regulatory Pillars at Bottom of Section */}
          '''

if old_section_pattern.search(home_content):
    new_home = old_section_pattern.sub(new_section_part + r'\2', home_content)
    with open(r'c:\Users\sah05\OneDrive\Desktop\pragya\src\pages\Home.jsx', 'w', encoding='utf-8') as f:
        f.write(new_home)
    print("SUCCESS: Home.jsx updated!")
else:
    print("ERROR: pattern did not match in Home.jsx")
