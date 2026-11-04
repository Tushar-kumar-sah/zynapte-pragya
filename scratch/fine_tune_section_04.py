import re

home_path = r'c:\Users\sah05\OneDrive\Desktop\pragya\src\pages\Home.jsx'

with open(home_path, 'r', encoding='utf-8') as f:
    home_content = f.read()

# Replace the library sample records and chips
old_lib_records = '''                <div className="library-sample-records">
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
              </div>'''

new_lib_records = '''                <div className="library-sample-records">
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

                  <div className="lib-book-item">
                    <div className="lib-book-spine lib-book-spine--science"></div>
                    <div className="lib-book-info">
                      <div className="lib-book-title-row">
                        <strong>Concepts of Physics (Vol 1 &amp; 2)</strong>
                        <span className="lib-book-tag">CBSE &amp; ICSE</span>
                      </div>
                      <small>Dr. H.C. Verma • Shelf C-01 • Acc #5920 • Reference</small>
                    </div>
                    <span className="badge badge--green lib-status-badge">
                      <Check size={11} /> Available (6)
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
                  <ScanLine size={15} /> 1-Tap Barcode Scan
                </span>
                <span className="visual-chip visual-chip--blue">
                  <BookOpen size={15} /> ICSE &amp; CBSE Index
                </span>
                <span className="visual-chip visual-chip--purple">
                  <Clock size={15} /> Overdue Fine Alerts
                </span>
              </div>'''

if old_lib_records in home_content:
    home_content = home_content.replace(old_lib_records, new_lib_records)
    with open(home_path, 'w', encoding='utf-8') as f:
        f.write(home_content)
    print("SUCCESS: 3rd book added and chips refined in Home.jsx")
else:
    print("ERROR: old_lib_records not found in Home.jsx")

# Also add lib-book-spine--science to index.css
css_path = r'c:\Users\sah05\OneDrive\Desktop\pragya\src\index.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

spine_target = '''.lib-book-spine--lit {
  background: linear-gradient(180deg, #F59E0B 0%, #D97706 100%);
}'''

spine_replacement = '''.lib-book-spine--lit {
  background: linear-gradient(180deg, #F59E0B 0%, #D97706 100%);
}

.lib-book-spine--science {
  background: linear-gradient(180deg, #10B981 0%, #059669 100%);
}'''

if spine_target in css_content:
    css_content = css_content.replace(spine_target, spine_replacement)
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css_content)
    print("SUCCESS: lib-book-spine--science added to index.css")
