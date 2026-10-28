import React, { useState } from 'react';
import { Lock, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ErpMockup({ onOpenCsvPreview }) {
  const [activeTab, setActiveTab] = useState('apaar');

  return (
    <div className="erp-mockup-wrapper animate-float-slow">
      <div className="erp-mockup-glow" aria-hidden="true" />
      
      {/* Floating Dynamic Badges */}
      <div className="hero-floating-badge badge-float-top-left animate-float-reverse" aria-hidden="true">
        <span className="badge-pulse-indicator" />
        <div className="badge-text-block">
          <small>GOV STANDARDS</small>
          <strong>100% APAAR Format Ready</strong>
        </div>
      </div>

      <div className="hero-floating-badge badge-float-bottom-right animate-float-slow" aria-hidden="true">
        <span className="badge-icon-pill">₹</span>
        <div className="badge-text-block">
          <small>TODAY'S COUNTER</small>
          <strong style={{ color: 'var(--color-success)' }}>₹1,84,500 Receipts Logged</strong>
        </div>
      </div>

      <div className="erp-mockup">
        {/* Window Bar */}
        <div className="mockup-window-bar">
          <div className="mockup-dots">
            <div className="mockup-dot" />
            <div className="mockup-dot" />
            <div className="mockup-dot" />
          </div>
          <div className="mockup-address-pill">
            <Lock size={12} />
            <span>pragyaschoolerp.in/admin/dashboard</span>
          </div>
          <div className="mockup-branch-badge">Main Campus • 2026-27</div>
        </div>

        {/* Inner Dashboard View */}
        <div className="mockup-inner">
          {/* Quick Metrics */}
          <div className="mockup-stat-row">
            <div className="mockup-stat-card">
              <div className="label">Total Students</div>
              <div className="value">1,248</div>
              <div className="note">Active records</div>
            </div>
            <div className="mockup-stat-card">
              <div className="label">Attendance</div>
              <div className="value">96.4%</div>
              <div className="note">Today's roll</div>
            </div>
            <div className="mockup-stat-card">
              <div className="label">Counter Fees</div>
              <div className="value">₹1,84,500</div>
              <div className="note">Receipts issued</div>
            </div>
            <div className="mockup-stat-card">
              <div className="label">APAAR Consent</div>
              <div className="value">91.2%</div>
              <div className="note">Forms logged</div>
            </div>
          </div>

          {/* Interactive Switcher inside Mockup */}
          <div className="mockup-tabs" role="tablist">
            <button
              className={`mockup-tab-btn ${activeTab === 'apaar' ? 'active' : ''}`}
              onClick={() => setActiveTab('apaar')}
              role="tab"
              aria-selected={activeTab === 'apaar'}
            >
              APAAR Statuses
            </button>
            <button
              className={`mockup-tab-btn ${activeTab === 'fees' ? 'active' : ''}`}
              onClick={() => setActiveTab('fees')}
              role="tab"
              aria-selected={activeTab === 'fees'}
            >
              Counter Collection
            </button>
            <button
              className={`mockup-tab-btn ${activeTab === 'attendance' ? 'active' : ''}`}
              onClick={() => setActiveTab('attendance')}
              role="tab"
              aria-selected={activeTab === 'attendance'}
            >
              Daily Attendance
            </button>
          </div>

          {/* Active View Panel */}
          <div className="mockup-apaar-panel">
            {activeTab === 'apaar' && (
              <>
                <div className="apaar-panel-header">
                  <div className="apaar-panel-title">
                    <FileText size={16} color="var(--color-blue)" />
                    <span>Class IX-A • APAAR Readiness Check</span>
                  </div>
                  <span className="badge badge--cyan">Local Checks Active</span>
                </div>

                <table className="mockup-table">
                  <thead>
                    <tr>
                      <th>Student</th>
                      <th>PEN</th>
                      <th>Guardian Consent</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Ananya Roy</strong> (Roll 01)</td>
                      <td>2024881023</td>
                      <td><span style={{ color: 'var(--color-success)' }}>✓ Verified &amp; Signed</span></td>
                      <td><span className="status-tag status-tag--generated">APAAR Generated</span></td>
                    </tr>
                    <tr>
                      <td><strong>Rohan Sen</strong> (Roll 04)</td>
                      <td>2024881099</td>
                      <td><span style={{ color: 'var(--color-success)' }}>✓ Form Attached</span></td>
                      <td><span className="status-tag status-tag--ready">Ready to Submit</span></td>
                    </tr>
                    <tr>
                      <td><strong>Ishita Mukherjee</strong> (Roll 07)</td>
                      <td><span style={{ color: 'var(--color-warning)' }}>Pending</span></td>
                      <td><span style={{ color: 'var(--color-danger)' }}>✗ Missing Form</span></td>
                      <td><span className="status-tag status-tag--attention">Needs Attention</span></td>
                    </tr>
                    <tr>
                      <td><strong>Debabrata Das</strong> (Roll 12)</td>
                      <td>2024881144</td>
                      <td><span style={{ color: 'var(--color-success)' }}>✓ Verified</span></td>
                      <td><span className="status-tag status-tag--submitted">Submitted</span></td>
                    </tr>
                  </tbody>
                </table>

                <div className="mockup-footer-note">
                  <span>Export format: CSV for school submission</span>
                  {onOpenCsvPreview && (
                    <button
                      className="btn btn--sm btn--secondary"
                      onClick={onOpenCsvPreview}
                      style={{ fontSize: '0.72rem', padding: '4px 8px' }}
                    >
                      Preview CSV Sheet
                    </button>
                  )}
                </div>
              </>
            )}

            {activeTab === 'fees' && (
              <>
                <div className="apaar-panel-header">
                  <div className="apaar-panel-title">
                    <FileText size={16} color="var(--color-blue)" />
                    <span>Counter Collection &amp; Receipts • Today</span>
                  </div>
                  <span className="badge badge--blue">Receipts Logged</span>
                </div>

                <table className="mockup-table">
                  <thead>
                    <tr>
                      <th>Student &amp; Roll</th>
                      <th>Receipt #</th>
                      <th>Amount Paid</th>
                      <th>Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Pritam Paul</strong> (X-B, Roll 03)</td>
                      <td><code>REC-2026-0891</code></td>
                      <td><strong>₹14,500</strong></td>
                      <td><span className="badge" style={{ background: '#ECFDF5', color: '#059669' }}>Cash Counter</span></td>
                    </tr>
                    <tr>
                      <td><strong>Sneha Karmakar</strong> (IX-A, Roll 15)</td>
                      <td><code>REC-2026-0892</code></td>
                      <td><strong>₹9,200</strong></td>
                      <td><span className="badge" style={{ background: '#F0F9FF', color: '#0284C7' }}>Cheque Cleared</span></td>
                    </tr>
                    <tr>
                      <td><strong>Arjun Sengupta</strong> (XII-Sci, Roll 02)</td>
                      <td><code>REC-2026-0893</code></td>
                      <td><strong>₹18,000</strong></td>
                      <td><span className="badge" style={{ background: '#ECFDF5', color: '#059669' }}>Counter POS Card</span></td>
                    </tr>
                    <tr>
                      <td><strong>Riya Bhattacharya</strong> (VIII-B, Roll 11)</td>
                      <td><code>REC-2026-0894</code></td>
                      <td><strong>₹11,000</strong></td>
                      <td><span className="badge" style={{ background: '#ECFDF5', color: '#059669' }}>Cash Counter</span></td>
                    </tr>
                  </tbody>
                </table>

                <div className="mockup-footer-note">
                  <span>INR cash drawer &amp; receipts printed at office</span>
                  <span className="badge badge--roadmap">Parent Online Checkout: Roadmap</span>
                </div>
              </>
            )}

            {activeTab === 'attendance' && (
              <>
                <div className="apaar-panel-header">
                  <div className="apaar-panel-title">
                    <FileText size={16} color="var(--color-blue)" />
                    <span>Daily Attendance • Morning Roll Call</span>
                  </div>
                  <span className="badge badge--cyan">Real-time Count</span>
                </div>

                <table className="mockup-table">
                  <thead>
                    <tr>
                      <th>Class &amp; Section</th>
                      <th>Total Enrolled</th>
                      <th>Present</th>
                      <th>Attendance %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Class VIII-A</strong></td>
                      <td>44 Students</td>
                      <td>43 Present</td>
                      <td><span className="badge" style={{ background: '#ECFDF5', color: '#059669' }}>97.7%</span></td>
                    </tr>
                    <tr>
                      <td><strong>Class IX-A</strong></td>
                      <td>45 Students</td>
                      <td>43 Present</td>
                      <td><span className="badge" style={{ background: '#ECFDF5', color: '#059669' }}>95.5%</span></td>
                    </tr>
                    <tr>
                      <td><strong>Class X-B</strong></td>
                      <td>42 Students</td>
                      <td>41 Present</td>
                      <td><span className="badge" style={{ background: '#ECFDF5', color: '#059669' }}>97.6%</span></td>
                    </tr>
                    <tr>
                      <td><strong>Class XII-Science</strong></td>
                      <td>38 Students</td>
                      <td>36 Present</td>
                      <td><span className="badge" style={{ background: '#ECFDF5', color: '#059669' }}>94.7%</span></td>
                    </tr>
                  </tbody>
                </table>

                <div className="mockup-footer-note">
                  <span>Marked via class teacher portal &amp; mobile app</span>
                  <span style={{ color: 'var(--color-slate-500)' }}>1,203 Total Present</span>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
