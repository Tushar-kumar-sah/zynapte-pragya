import re

# 1. Update src/pages/Home.jsx
home_path = r'c:\Users\sah05\OneDrive\Desktop\pragya\src\pages\Home.jsx'
with open(home_path, 'r', encoding='utf-8') as f:
    home_content = f.read()

# Add payslipData right after line with setActivePayslipTab
payslip_state_line = "  const [activePayslipTab, setActivePayslipTab] = useState('teaching');"
payslip_data_code = """  const [activePayslipTab, setActivePayslipTab] = useState('teaching');

  const payslipData = {
    teaching: {
      category: 'TEACHING FACULTY',
      name: 'Dr. Ananya Mukherjee',
      role: 'Senior Faculty (Mathematics)',
      netPay: '₹ 48,500',
      basic: '₹ 38,000',
      allowances: '₹ 14,700',
      deductions: '₹ 4,200',
      status: 'OCT 2026 SALARY DISBURSED',
      bankNote: 'SBI & HDFC 1-Click NEFT Batch',
      appNote: 'Instant Mobile Payslip App Notification'
    },
    nonteaching: {
      category: 'TECHNICAL & LAB STAFF',
      name: 'Ramesh Verma',
      role: 'Senior Science Lab Technician',
      netPay: '₹ 32,800',
      basic: '₹ 25,000',
      allowances: '₹ 10,800',
      deductions: '₹ 3,000',
      status: 'OCT 2026 SALARY DISBURSED',
      bankNote: 'PNB Auto-Disburse Batch',
      appNote: 'Direct Bank NEFT Credited'
    },
    admin: {
      category: 'ADMINISTRATION & ACCOUNTS',
      name: 'Subhashish Sengupta',
      role: 'Head Accounts & Bursar Officer',
      netPay: '₹ 44,200',
      basic: '₹ 35,000',
      allowances: '₹ 13,000',
      deductions: '₹ 3,800',
      status: 'OCT 2026 SALARY DISBURSED',
      bankNote: 'HDFC Corporate Payroll Batch',
      appNote: 'Tax & EPF Reconciled'
    },
    support: {
      category: 'SUPPORT & LOGISTICS',
      name: 'Manoj Kumar',
      role: 'Campus Transport Supervisor',
      netPay: '₹ 26,400',
      basic: '₹ 20,000',
      allowances: '₹ 8,400',
      deductions: '₹ 2,000',
      status: 'OCT 2026 SALARY DISBURSED',
      bankNote: 'Direct Bank NEFT File',
      appNote: 'Mobile SMS & App Slip Sent'
    }
  };
  const currentPayslip = payslipData[activePayslipTab] || payslipData.teaching;"""

if payslip_state_line in home_content:
    home_content = home_content.replace(payslip_state_line, payslip_data_code)
    print("SUCCESS: payslipData added to Home.jsx state")
else:
    print("ERROR: payslip_state_line not found")

# Replace Section 05 in Home.jsx
old_section_05_pattern = re.compile(
    r'({\/\* ==========================================================================\s+05 \/ "PAYROLL THAT FITS EVERY EMPLOYEE\."[\s\S]*?)({\/\* ==========================================================================\s+06 \/ FLAGSHIP APAAR)',
    re.MULTILINE
)

new_section_05 = '''{/* ==========================================================================
          05 / "PAYROLL THAT FITS EVERY EMPLOYEE." (PAGE 4)
          ========================================================================== */}
      <section className="section section--white" id="payroll-overview">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker-badge section-kicker-badge--blue">
              <Sparkles size={13} />
              <span>AUTOMATED FACULTY &amp; STAFF DISBURSEMENT</span>
            </span>
            <h2>Payroll that fits every employee.</h2>
            <p>
              A separate salary structure for each staff category with automated deductions and instant bank NEFT batch files.
            </p>
          </div>

          <div className="payroll-showcase-container">
            {/* Top Category Switcher */}
            <div className="payslip-category-bar">
              <div className="payslip-category-title-wrap">
                <Users size={16} className="text-blue" />
                <span className="payslip-category-label">Staff Category Structures:</span>
              </div>
              <div className="payslip-pills-row" role="tablist">
                <button 
                  className={`payslip-pill-btn payslip-pill-btn--teaching ${activePayslipTab === 'teaching' ? 'active' : ''}`}
                  onClick={() => setActivePayslipTab('teaching')}
                >
                  TEACHING FACULTY
                </button>
                <button 
                  className={`payslip-pill-btn payslip-pill-btn--nonteaching ${activePayslipTab === 'nonteaching' ? 'active' : ''}`}
                  onClick={() => setActivePayslipTab('nonteaching')}
                >
                  LAB &amp; TECHNICAL
                </button>
                <button 
                  className={`payslip-pill-btn payslip-pill-btn--admin ${activePayslipTab === 'admin' ? 'active' : ''}`}
                  onClick={() => setActivePayslipTab('admin')}
                >
                  ADMINISTRATIVE
                </button>
                <button 
                  className={`payslip-pill-btn payslip-pill-btn--support ${activePayslipTab === 'support' ? 'active' : ''}`}
                  onClick={() => setActivePayslipTab('support')}
                >
                  SUPPORT STAFF
                </button>
              </div>
              <span className="page3-live-pill page3-live-pill--purple">
                <span className="live-dot-pulse live-dot-pulse--purple"></span> {currentPayslip.status}
              </span>
            </div>

            <div className="payroll-split-grid">
              {/* Left Column: Faculty & Staff Context with Visual Cards */}
              <div className="payroll-faculty-info">
                <div className="faculty-badge">
                  <Users size={15} />
                  <span>{currentPayslip.category}</span>
                </div>
                <h3>Tailored Compensation &amp; Allowances</h3>
                <p className="payroll-subheading">
                  Automated salary formulas mapped to central, state, and private school scales with automated deductions and instant NEFT file generation.
                </p>

                {/* 4 Visual Capability Cards */}
                <div className="payroll-visual-grid">
                  <div className="payroll-feat-card">
                    <div className="payroll-feat-icon payroll-feat-icon--emerald">
                      <FileSpreadsheet size={18} />
                    </div>
                    <div>
                      <strong>DA, HRA &amp; EPF</strong>
                      <small>Govt compliant formulas</small>
                    </div>
                  </div>

                  <div className="payroll-feat-card">
                    <div className="payroll-feat-icon payroll-feat-icon--blue">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <strong>Bank NEFT Batch</strong>
                      <small>SBI, HDFC &amp; PNB upload</small>
                    </div>
                  </div>

                  <div className="payroll-feat-card">
                    <div className="payroll-feat-icon payroll-feat-icon--purple">
                      <Clock size={18} />
                    </div>
                    <div>
                      <strong>Attendance Sync</strong>
                      <small>1-Click salary calculation</small>
                    </div>
                  </div>

                  <div className="payroll-feat-card">
                    <div className="payroll-feat-icon payroll-feat-icon--coral">
                      <Smartphone size={18} />
                    </div>
                    <div>
                      <strong>Mobile Payslips</strong>
                      <small>Direct to staff mobile app</small>
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="page3-card-action-bar" style={{ marginTop: '16px' }}>
                  <div className="page3-action-note">
                    <CheckCircle2 size={15} className="text-emerald" />
                    <span>1-Click Salary Disbursement • Zero Manual Excel Retyping</span>
                  </div>
                  <Link to="/staff-payroll-management" className="btn btn--primary btn--sm page3-cta-btn page3-cta-btn--payroll">
                    Explore Staff &amp; Payroll Module <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Showcase Frame with Authentic Indian Faculty Photo */}
              <div className="payroll-visual-column">
                <div className="page3-visual-frame payroll-visual-frame">
                  <img 
                    src="/real-photos/real-indian-faculty-payroll.jpg" 
                    alt="Indian school teacher reviewing monthly payslip on smartphone in faculty office" 
                    className="page3-showcase-img"
                    loading="lazy"
                  />
                  <div className="page3-img-overlay page3-img-overlay--top">
                    <span className="page3-overlay-chip page3-overlay-chip--success">
                      <CheckCircle2 size={13} />
                      <span>{currentPayslip.status}</span>
                    </span>
                    <span className="page3-overlay-tag">
                      {currentPayslip.name}
                    </span>
                  </div>
                  <div className="page3-img-overlay page3-img-overlay--bottom">
                    <div className="page3-overlay-amount-pill">
                      <span className="overlay-amount-label">Net Salary Credited</span>
                      <strong className="overlay-amount-val">{currentPayslip.netPay}</strong>
                    </div>
                    <span className="page3-overlay-badge page3-overlay-badge--blue">
                      <Building2 size={13} /> {currentPayslip.bankNote}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Capability Chips (single line) */}
            <div className="page3-visual-chips payroll-bottom-chips">
              <span className="visual-chip visual-chip--blue">
                <Building2 size={15} /> Instant Bank NEFT Batches
              </span>
              <span className="visual-chip visual-chip--purple">
                <Smartphone size={15} /> Direct Mobile App Payslips
              </span>
              <span className="visual-chip visual-chip--green">
                <FileSpreadsheet size={15} /> Automated EPF &amp; Tax Deductions
              </span>
            </div>
          </div>

          {/* 3 Pragya Advantage Cards (Page 4) */}
          <div className="the-pragya-advantage-grid">
            <div className="advantage-feature-card advantage-feature-card--theme">
              <div className="adv-icon-row">
                <div className="adv-icon-circle adv-icon-circle--theme"><Sun size={17} /></div>
                <div className="adv-icon-circle adv-icon-circle--theme"><Moon size={17} /></div>
              </div>
              <span className="adv-card-kicker text-blue">ADAPTIVE DISPLAY MODES</span>
              <h4>Light &amp; Dark Modes</h4>
              <p>Dual high-contrast themes designed for sunlit fee counters and fatigue-free evening reviews.</p>
              <div className="adv-preview-theme">
                <div className="theme-half theme-half--light">☀️ Daylight POS</div>
                <div className="theme-half theme-half--dark">🌙 Night Review</div>
              </div>
              <div className="adv-bottom-chips">
                <span className="visual-chip visual-chip--blue">☀️ Anti-Glare POS</span>
                <span className="visual-chip visual-chip--purple">🌙 OLED Dark Theme</span>
              </div>
            </div>

            <div className="advantage-feature-card advantage-feature-card--mobile">
              <div className="adv-icon-row">
                <div className="adv-icon-circle adv-icon-circle--mobile"><Smartphone size={17} /></div>
                <div className="adv-icon-circle adv-icon-circle--mobile"><Laptop size={17} /></div>
              </div>
              <span className="adv-card-kicker text-emerald">MULTI-DEVICE ECOSYSTEM</span>
              <h4>Mobile Apps &amp; Cloud Web</h4>
              <p>One unified school database, accessible across any mobile or desktop device with offline resilience.</p>
              <div className="adv-platform-badges">
                <span className="platform-chip"><Smartphone size={12} /> Android App</span>
                <span className="platform-chip"><Smartphone size={12} /> iOS App</span>
                <span className="platform-chip"><Laptop size={12} /> Desktop Web</span>
              </div>
              <div className="adv-bottom-chips">
                <span className="visual-chip visual-chip--green">⚡ 100% Offline Cache</span>
                <span className="visual-chip visual-chip--teal">🔄 Cloud Auto-Sync</span>
              </div>
            </div>

            <div className="advantage-feature-card advantage-feature-card--aws">
              <div className="adv-icon-row">
                <div className="adv-icon-circle adv-icon-circle--aws"><Cloud size={17} /></div>
                <div className="adv-icon-circle adv-icon-circle--aws"><ShieldCheck size={17} /></div>
              </div>
              <span className="adv-card-kicker text-orange">ENTERPRISE INFRASTRUCTURE</span>
              <h4>Secure on AWS Cloud</h4>
              <p>Hosted in AWS Asia-Pacific (Mumbai) with ISO 27001 data isolation and 99.9% uptime SLA.</p>
              <div className="adv-aws-badges">
                <span className="badge badge--green">AWS MUMBAI</span>
                <span className="badge badge--violet">SECURE RBAC</span>
                <span className="badge badge--blue">META TECH PROVIDER</span>
                <span className="badge badge--orange">99.9% UPTIME</span>
              </div>
              <div className="adv-bottom-chips">
                <span className="visual-chip visual-chip--orange">🔒 256-Bit TLS</span>
                <span className="visual-chip visual-chip--blue">💾 Nightly Snapshots</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      '''

if old_section_05_pattern.search(home_content):
    home_content = old_section_05_pattern.sub(new_section_05 + r'\2', home_content)
    with open(home_path, 'w', encoding='utf-8') as f:
        f.write(home_content)
    print("SUCCESS: Home.jsx section 05 updated!")
else:
    print("ERROR: old_section_05_pattern did not match in Home.jsx")
