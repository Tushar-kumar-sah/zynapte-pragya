import React, { useState } from 'react';
import { 
  Lock, FileText, CheckCircle2, CreditCard, Users, UserCheck, 
  ChevronDown, Check, AlertTriangle, IndianRupee, Printer, Clock
} from 'lucide-react';

export default function ErpMockup({ onOpenCsvPreview }) {
  const [activeTab, setActiveTab] = useState('apaar');

  return (
    <div className="erp-mockup-wrapper">
      {/* Subtle ambient multi-color glow */}
      <div className="erp-mockup-glow" aria-hidden="true" />

      {/* Main SaaS Window Frame */}
      <div className="erp-mockup">
        {/* Browser Top Window Bar */}
        <div className="mockup-window-bar">
          <div className="mockup-dots">
            <div className="mockup-dot mockup-dot--red" />
            <div className="mockup-dot mockup-dot--yellow" />
            <div className="mockup-dot mockup-dot--green" />
          </div>

          <div className="mockup-address-pill">
            <Lock size={10} className="mockup-lock-icon" />
            <span className="mockup-url">pragyaschoolerp.in/admin/dashboard</span>
          </div>

          <div className="mockup-header-right">
            <span className="mockup-gov-tag">
              <span className="mockup-live-dot" /> 100% APAAR Format Ready
            </span>
            <div className="mockup-branch-badge">
              <span>Main Campus • 2026-27</span>
              <ChevronDown size={11} />
            </div>
          </div>
        </div>

        {/* Inner ERP Dashboard Canvas */}
        <div className="mockup-inner">
          {/* 4 Clean Metric Cards (Image 3) */}
          <div className="mockup-compact-metrics-grid">
            <div className="compact-metric-item">
              <span className="metric-label">Total Students</span>
              <strong className="metric-value">1,248</strong>
              <span className="metric-sub">Active records</span>
            </div>

            <div className="compact-metric-item">
              <span className="metric-label">Attendance</span>
              <strong className="metric-value">96.4%</strong>
              <span className="metric-sub">Today's roll</span>
            </div>

            <div className="compact-metric-item">
              <span className="metric-label">Counter Fees</span>
              <strong className="metric-value">₹1,84,500</strong>
              <span className="metric-sub">Receipts issued</span>
            </div>

            <div className="compact-metric-item">
              <span className="metric-label">APAAR Consent</span>
              <strong className="metric-value">91.2%</strong>
              <span className="metric-sub">Forms logged</span>
            </div>
          </div>

          {/* Segmented Controller Tabs (Image 3) */}
          <div className="mockup-segmented-tabs" role="tablist">
            <button
              className={`segmented-tab-btn ${activeTab === 'apaar' ? 'active' : ''}`}
              onClick={() => setActiveTab('apaar')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'apaar'}
            >
              APAAR Statuses
            </button>
            <button
              className={`segmented-tab-btn ${activeTab === 'fees' ? 'active' : ''}`}
              onClick={() => setActiveTab('fees')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'fees'}
            >
              Counter Collection
            </button>
            <button
              className={`segmented-tab-btn ${activeTab === 'attendance' ? 'active' : ''}`}
              onClick={() => setActiveTab('attendance')}
              type="button"
              role="tab"
              aria-selected={activeTab === 'attendance'}
            >
              Daily Attendance
            </button>
          </div>

          {/* Active View Container */}
          <div className="mockup-subcard">
            {/* TAB 1: APAAR READINESS CHECK (Image 3) */}
            {activeTab === 'apaar' && (
              <>
                <div className="subcard-header">
                  <div className="subcard-title-group">
                    <FileText size={14} className="text-blue" />
                    <strong>Class IX-A • APAAR Readiness Check</strong>
                  </div>
                  <span className="subcard-badge subcard-badge--blue">
                    Local Checks Active
                  </span>
                </div>

                <div className="subcard-table-wrap">
                  <table className="subcard-table">
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
                        <td>
                          <strong>Ananya Roy</strong> <span className="roll-muted">(Roll 01)</span>
                        </td>
                        <td><code>2024881023</code></td>
                        <td>
                          <span className="text-green-check">✓ Verified &amp; Signed</span>
                        </td>
                        <td>
                          <span className="status-pill status-pill--purple">APAAR Generated</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Rohan Sen</strong> <span className="roll-muted">(Roll 04)</span>
                        </td>
                        <td><code>2024881099</code></td>
                        <td>
                          <span className="text-green-check">✓ Form Attached</span>
                        </td>
                        <td>
                          <span className="status-pill status-pill--green">Ready to Submit</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Ishita Mukherjee</strong> <span className="roll-muted">(Roll 07)</span>
                        </td>
                        <td>
                          <span className="text-orange-code">Pending</span>
                        </td>
                        <td>
                          <span className="text-red-alert">✕ Missing Form</span>
                        </td>
                        <td>
                          <span className="status-pill status-pill--orange">Needs Attention</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Debabrata Das</strong> <span className="roll-muted">(Roll 12)</span>
                        </td>
                        <td><code>2024881144</code></td>
                        <td>
                          <span className="text-green-check">✓ Verified</span>
                        </td>
                        <td>
                          <span className="status-pill status-pill--sky">Submitted</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="subcard-footer">
                  <span className="export-note">Export format: CSV for school submission</span>
                </div>
              </>
            )}

            {/* TAB 2: COUNTER COLLECTION */}
            {activeTab === 'fees' && (
              <>
                <div className="subcard-header">
                  <div className="subcard-title-group">
                    <CreditCard size={14} className="text-orange" />
                    <strong>Counter Collection • Cash &amp; UPI Desk</strong>
                  </div>
                  <span className="subcard-badge subcard-badge--orange">
                    3-Sec POS Active
                  </span>
                </div>

                <div className="subcard-table-wrap">
                  <table className="subcard-table">
                    <thead>
                      <tr>
                        <th>Receipt No</th>
                        <th>Student</th>
                        <th>Mode</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>#REC-2026-1044</code></td>
                        <td><strong>Priyanka Paul</strong> (X-B)</td>
                        <td><span className="text-green-check">UPI Counter</span></td>
                        <td><strong className="text-emerald">₹17,200</strong></td>
                      </tr>
                      <tr>
                        <td><code>#REC-2026-1043</code></td>
                        <td><strong>Arjun Banerjee</strong> (VII-A)</td>
                        <td><span className="text-green-check">Cash Counter</span></td>
                        <td><strong className="text-emerald">₹9,800</strong></td>
                      </tr>
                      <tr>
                        <td><code>#REC-2026-1042</code></td>
                        <td><strong>Rohan Roy</strong> (IX-A)</td>
                        <td><span className="text-green-check">UPI Counter</span></td>
                        <td><strong className="text-emerald">₹14,500</strong></td>
                      </tr>
                      <tr>
                        <td><code>#REC-2026-1041</code></td>
                        <td><strong>Sneha Das</strong> (XI-Sc)</td>
                        <td><span className="text-green-check">Cheque Cleared</span></td>
                        <td><strong className="text-emerald">₹22,000</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="subcard-footer">
                  <span className="export-note">Dual ledger synced with automated SMS receipts</span>
                </div>
              </>
            )}

            {/* TAB 3: DAILY ATTENDANCE */}
            {activeTab === 'attendance' && (
              <>
                <div className="subcard-header">
                  <div className="subcard-title-group">
                    <UserCheck size={14} className="text-green" />
                    <strong>Daily Attendance Roll Call</strong>
                  </div>
                  <span className="subcard-badge subcard-badge--green">
                    96.4% Recorded
                  </span>
                </div>

                <div className="subcard-table-wrap">
                  <table className="subcard-table">
                    <thead>
                      <tr>
                        <th>Class &amp; Section</th>
                        <th>Strength</th>
                        <th>Present</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Class X-A</strong></td>
                        <td>45 Students</td>
                        <td><code>44 Present</code></td>
                        <td><span className="status-pill status-pill--green">97.8% Complete</span></td>
                      </tr>
                      <tr>
                        <td><strong>Class IX-B</strong></td>
                        <td>42 Students</td>
                        <td><code>41 Present</code></td>
                        <td><span className="status-pill status-pill--green">97.6% Complete</span></td>
                      </tr>
                      <tr>
                        <td><strong>Class VIII-A</strong></td>
                        <td>40 Students</td>
                        <td><code>38 Present</code></td>
                        <td><span className="status-pill status-pill--green">95.0% Complete</span></td>
                      </tr>
                      <tr>
                        <td><strong>Teaching Staff</strong></td>
                        <td>36 Teachers</td>
                        <td><code>35 On Duty</code></td>
                        <td><span className="status-pill status-pill--purple">97.2% Logged</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="subcard-footer">
                  <span className="export-note">Instant absent SMS triggered at 09:30 AM</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
