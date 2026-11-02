import React, { useState } from 'react';
import { 
  Lock, FileText, CheckCircle2, CreditCard, Users, UserCheck, 
  ShieldCheck, Sparkles, ChevronDown, Eye, Printer, 
  Clock, Check, AlertTriangle
} from 'lucide-react';

export default function ErpMockup({ onOpenCsvPreview }) {
  const [activeTab, setActiveTab] = useState('apaar');

  return (
    <div className="erp-mockup-wrapper animate-float-slow">
      {/* Ambient Multi-Color Brand Glow */}
      <div className="erp-mockup-glow" aria-hidden="true" />
      
      {/* Snug Top Floating Badge */}
      <div className="hero-floating-badge badge-float-top-right animate-float-reverse" aria-hidden="true">
        <div className="badge-icon-pill badge-icon-pill--gov">
          <ShieldCheck size={14} />
        </div>
        <div className="badge-text-block">
          <small>UDISE+ &amp; DIGILOCKER</small>
          <strong>100% APAAR Format</strong>
        </div>
        <span className="badge-live-pulse" />
      </div>

      {/* Snug Bottom Floating Badge */}
      <div className="hero-floating-badge badge-float-bottom-left animate-float-slow" aria-hidden="true">
        <div className="badge-icon-pill badge-icon-pill--counter">
          <Sparkles size={14} />
        </div>
        <div className="badge-text-block">
          <small>TODAY'S COUNTER</small>
          <strong className="text-emerald">₹1,84,500 Receipts</strong>
        </div>
      </div>

      {/* Main Sleek SaaS Window Frame */}
      <div className="erp-mockup">
        {/* Browser Top Window Bar */}
        <div className="mockup-window-bar">
          <div className="mockup-dots">
            <div className="mockup-dot mockup-dot--red" />
            <div className="mockup-dot mockup-dot--yellow" />
            <div className="mockup-dot mockup-dot--green" />
          </div>

          <div className="mockup-address-pill">
            <Lock size={11} className="mockup-lock-icon" />
            <span className="mockup-url">pragyaschoolerp.in/admin</span>
            <span className="mockup-live-indicator">
              <span className="mockup-live-dot" /> LIVE
            </span>
          </div>

          <div className="mockup-branch-badge">
            <span>Main Campus • 2026-27</span>
            <ChevronDown size={11} />
          </div>
        </div>

        {/* Inner ERP Dashboard Canvas */}
        <div className="mockup-inner">
          {/* Compact Metric Ribbon (Inline 4 Chips) */}
          <div className="mockup-stat-row">
            <div className="mockup-stat-chip mockup-stat-chip--blue">
              <span className="chip-icon chip-icon--blue">
                <Users size={12} />
              </span>
              <div className="chip-data">
                <strong>1,248</strong>
                <span>Students</span>
              </div>
            </div>

            <div className="mockup-stat-chip mockup-stat-chip--green">
              <span className="chip-icon chip-icon--green">
                <UserCheck size={12} />
              </span>
              <div className="chip-data">
                <strong>96.4%</strong>
                <span>Present</span>
              </div>
            </div>

            <div className="mockup-stat-chip mockup-stat-chip--orange">
              <span className="chip-icon chip-icon--orange">
                <CreditCard size={12} />
              </span>
              <div className="chip-data">
                <strong>₹1.84L</strong>
                <span>Counter</span>
              </div>
            </div>

            <div className="mockup-stat-chip mockup-stat-chip--violet">
              <span className="chip-icon chip-icon--violet">
                <CheckCircle2 size={12} />
              </span>
              <div className="chip-data">
                <strong>91.2%</strong>
                <span>APAAR</span>
              </div>
            </div>
          </div>

          {/* Segmented Controller Tabs */}
          <div className="mockup-tabs" role="tablist">
            <button
              className={`mockup-tab-btn ${activeTab === 'apaar' ? 'active' : ''}`}
              onClick={() => setActiveTab('apaar')}
              role="tab"
              aria-selected={activeTab === 'apaar'}
            >
              <FileText size={13} />
              <span>APAAR Status</span>
              <span className="mockup-tab-badge mockup-tab-badge--violet">41/45 Ready</span>
            </button>
            <button
              className={`mockup-tab-btn ${activeTab === 'fees' ? 'active' : ''}`}
              onClick={() => setActiveTab('fees')}
              role="tab"
              aria-selected={activeTab === 'fees'}
            >
              <CreditCard size={13} />
              <span>Counter POS</span>
              <span className="mockup-tab-badge mockup-tab-badge--orange">₹1.84L</span>
            </button>
            <button
              className={`mockup-tab-btn ${activeTab === 'attendance' ? 'active' : ''}`}
              onClick={() => setActiveTab('attendance')}
              role="tab"
              aria-selected={activeTab === 'attendance'}
            >
              <UserCheck size={13} />
              <span>Roll Call</span>
              <span className="mockup-tab-badge mockup-tab-badge--green">96.4%</span>
            </button>
          </div>

          {/* Active Interactive Views */}
          <div className="mockup-apaar-panel">
            {/* VIEW 1: APAAR READINESS CONSOLE */}
            {activeTab === 'apaar' && (
              <>
                <div className="apaar-panel-header">
                  <div className="apaar-panel-title">
                    <div className="apaar-title-icon-box">
                      <FileText size={14} />
                    </div>
                    <div>
                      <strong>Class IX-A • APAAR Readiness Console</strong>
                      <span className="apaar-title-sub">Pre-submission discrepancy &amp; consent auditor</span>
                    </div>
                  </div>
                  <div className="apaar-header-actions">
                    <span className="badge badge--green">
                      <Check size={11} /> 41 Ready
                    </span>
                  </div>
                </div>

                {/* Micro Progress Bar */}
                <div className="mockup-progress-banner">
                  <div className="mockup-progress-meta">
                    <span>Class Readiness Progress</span>
                    <strong>41 of 45 Students Validated (91.1%)</strong>
                  </div>
                  <div className="mockup-progress-track">
                    <div className="mockup-progress-fill" style={{ width: '91.1%' }} />
                  </div>
                </div>

                {/* Table View (3 Concise Rows) */}
                <div className="mockup-table-container">
                  <table className="mockup-table">
                    <thead>
                      <tr>
                        <th>Student &amp; Roll</th>
                        <th>PEN Number</th>
                        <th>Guardian Consent</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="mockup-student-cell">
                            <span className="mockup-avatar mockup-avatar--violet">AR</span>
                            <div>
                              <strong>Ananya Roy</strong>
                              <small>Roll 01 • Sec A</small>
                            </div>
                          </div>
                        </td>
                        <td><code className="pen-code">2024881023</code></td>
                        <td>
                          <span className="status-pill status-pill--success">
                            ✓ Verified &amp; Signed
                          </span>
                        </td>
                        <td>
                          <span className="status-tag status-tag--generated">
                            <Sparkles size={10} /> APAAR Ready
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="mockup-student-cell">
                            <span className="mockup-avatar mockup-avatar--blue">RS</span>
                            <div>
                              <strong>Rohan Sen</strong>
                              <small>Roll 04 • Sec A</small>
                            </div>
                          </div>
                        </td>
                        <td><code className="pen-code">2024881099</code></td>
                        <td>
                          <span className="status-pill status-pill--success">
                            ✓ Form Attached
                          </span>
                        </td>
                        <td>
                          <span className="status-tag status-tag--ready">
                            <Check size={10} /> Ready
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="mockup-student-cell">
                            <span className="mockup-avatar mockup-avatar--orange">IM</span>
                            <div>
                              <strong>Ishita Mukherjee</strong>
                              <small>Roll 07 • Sec A</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="status-pill status-pill--warning">
                            Pending
                          </span>
                        </td>
                        <td>
                          <span className="status-pill status-pill--danger">
                            <AlertTriangle size={10} /> Missing Form
                          </span>
                        </td>
                        <td>
                          <span className="status-tag status-tag--attention">
                            Attention
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mockup-footer-note">
                  <div className="mockup-footer-info">
                    <span className="mockup-footer-dot" />
                    <span>Formatted to official UDISE+ &amp; DigiLocker CSV</span>
                  </div>
                  {onOpenCsvPreview ? (
                    <button
                      className="mockup-action-btn"
                      onClick={onOpenCsvPreview}
                    >
                      <Eye size={11} /> Preview CSV
                    </button>
                  ) : (
                    <span className="badge badge--orange">CSV Formatter Ready</span>
                  )}
                </div>
              </>
            )}

            {/* VIEW 2: COUNTER FEE COLLECTION */}
            {activeTab === 'fees' && (
              <>
                <div className="apaar-panel-header">
                  <div className="apaar-panel-title">
                    <div className="apaar-title-icon-box apaar-title-icon-box--orange">
                      <CreditCard size={14} />
                    </div>
                    <div>
                      <strong>Counter Collection &amp; Receipts • Live Desk</strong>
                      <span className="apaar-title-sub">Instant 3-sec printed receipts with dual ledger</span>
                    </div>
                  </div>
                  <div className="apaar-header-actions">
                    <span className="badge badge--orange">
                      <Printer size={11} /> POS Active
                    </span>
                  </div>
                </div>

                <div className="mockup-table-container">
                  <table className="mockup-table">
                    <thead>
                      <tr>
                        <th>Student &amp; Class</th>
                        <th>Receipt No</th>
                        <th>Amount</th>
                        <th>Mode</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="mockup-student-cell">
                            <span className="mockup-avatar mockup-avatar--blue">PP</span>
                            <div>
                              <strong>Pritam Paul</strong>
                              <small>Class X-B • Roll 03</small>
                            </div>
                          </div>
                        </td>
                        <td><code className="pen-code">REC-0891</code></td>
                        <td><strong className="text-emerald">₹14,500</strong></td>
                        <td><span className="status-pill status-pill--success">Cash Desk</span></td>
                      </tr>

                      <tr>
                        <td>
                          <div className="mockup-student-cell">
                            <span className="mockup-avatar mockup-avatar--teal">SK</span>
                            <div>
                              <strong>Sneha Karmakar</strong>
                              <small>Class IX-A • Roll 15</small>
                            </div>
                          </div>
                        </td>
                        <td><code className="pen-code">REC-0892</code></td>
                        <td><strong className="text-emerald">₹9,200</strong></td>
                        <td><span className="status-pill status-pill--blue">UPI QR</span></td>
                      </tr>

                      <tr>
                        <td>
                          <div className="mockup-student-cell">
                            <span className="mockup-avatar mockup-avatar--violet">AS</span>
                            <div>
                              <strong>Arjun Sengupta</strong>
                              <small>Class XII-Sci • Roll 02</small>
                            </div>
                          </div>
                        </td>
                        <td><code className="pen-code">REC-0893</code></td>
                        <td><strong className="text-emerald">₹18,000</strong></td>
                        <td><span className="status-pill status-pill--success">Card POS</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mockup-footer-note">
                  <div className="mockup-footer-info">
                    <span className="mockup-footer-dot" />
                    <span>Cash: <strong>₹1.12L</strong> &nbsp;|&nbsp; Digital: <strong>₹72.5K</strong></span>
                  </div>
                  <span className="badge badge--green">Thermal Slip Ready</span>
                </div>
              </>
            )}

            {/* VIEW 3: DAILY ATTENDANCE */}
            {activeTab === 'attendance' && (
              <>
                <div className="apaar-panel-header">
                  <div className="apaar-panel-title">
                    <div className="apaar-title-icon-box apaar-title-icon-box--green">
                      <UserCheck size={14} />
                    </div>
                    <div>
                      <strong>Daily Attendance • Morning Register</strong>
                      <span className="apaar-title-sub">Teacher mobile submission with absent SMS trigger</span>
                    </div>
                  </div>
                  <div className="apaar-header-actions">
                    <span className="badge badge--green">
                      <Clock size={11} /> 100% In
                    </span>
                  </div>
                </div>

                <div className="mockup-table-container">
                  <table className="mockup-table">
                    <thead>
                      <tr>
                        <th>Class &amp; Section</th>
                        <th>Enrolled</th>
                        <th>Present Today</th>
                        <th>Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Class VIII-A</strong></td>
                        <td>44 Students</td>
                        <td><strong>43 Present</strong></td>
                        <td>
                          <div className="attendance-rate-cell">
                            <div className="attendance-mini-track">
                              <div className="attendance-mini-fill" style={{ width: '97.7%' }} />
                            </div>
                            <span className="badge badge--green">97.7%</span>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td><strong>Class IX-A</strong></td>
                        <td>45 Students</td>
                        <td><strong>43 Present</strong></td>
                        <td>
                          <div className="attendance-rate-cell">
                            <div className="attendance-mini-track">
                              <div className="attendance-mini-fill" style={{ width: '95.5%' }} />
                            </div>
                            <span className="badge badge--green">95.5%</span>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td><strong>Class X-B</strong></td>
                        <td>42 Students</td>
                        <td><strong>41 Present</strong></td>
                        <td>
                          <div className="attendance-rate-cell">
                            <div className="attendance-mini-track">
                              <div className="attendance-mini-fill" style={{ width: '97.6%' }} />
                            </div>
                            <span className="badge badge--green">97.6%</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mockup-footer-note">
                  <div className="mockup-footer-info">
                    <span className="mockup-footer-dot" />
                    <span>Teacher mobile sync completed at 08:45 AM</span>
                  </div>
                  <span className="badge badge--blue">1,203 / 1,248 Present</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
