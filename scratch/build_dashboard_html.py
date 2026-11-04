import os

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pragya School ERP - Administrative Dashboard</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    body {
      background: #F1F5F9;
      color: #0F172A;
      display: flex;
      height: 100vh;
      overflow: hidden;
      font-size: 13px;
    }

    /* SIDEBAR */
    .sidebar {
      width: 250px;
      background: #0F172A;
      color: #94A3B8;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      border-right: 1px solid #1E293B;
    }
    .sidebar-brand {
      padding: 18px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid #1E293B;
      background: #0B1120;
    }
    .brand-logo-img {
      height: 30px;
      object-fit: contain;
    }
    .brand-version-badge {
      font-size: 10px;
      background: #1E293B;
      color: #38BDF8;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 700;
      margin-left: auto;
    }

    .school-switcher {
      padding: 12px 16px;
      margin: 12px 14px;
      background: #1E293B;
      border-radius: 6px;
      border: 1px solid #334155;
    }
    .school-name {
      font-size: 12px;
      font-weight: 700;
      color: #F8FAFC;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .school-meta {
      font-size: 11px;
      color: #94A3B8;
      margin-top: 3px;
    }

    .nav-group-title {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #64748B;
      padding: 12px 20px 6px;
    }
    .nav-list {
      list-style: none;
      padding: 0 10px;
      flex: 1;
      overflow-y: auto;
    }
    .nav-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border-radius: 6px;
      color: #94A3B8;
      font-weight: 500;
      cursor: pointer;
      margin-bottom: 2px;
      font-size: 12.5px;
    }
    .nav-item:hover {
      background: #1E293B;
      color: #F8FAFC;
    }
    .nav-item.active {
      background: #1D4ED8;
      color: #FFFFFF;
      font-weight: 650;
    }
    .nav-item .nav-count {
      margin-left: auto;
      font-size: 10px;
      background: rgba(255, 255, 255, 0.15);
      padding: 2px 6px;
      border-radius: 10px;
    }

    .sidebar-user {
      padding: 14px 18px;
      border-top: 1px solid #1E293B;
      background: #0B1120;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .user-avatar {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: linear-gradient(135deg, #F97316, #EF424B);
      color: #FFFFFF;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
    .user-info {
      flex: 1;
      min-width: 0;
    }
    .user-name {
      font-size: 12px;
      font-weight: 700;
      color: #F8FAFC;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .user-role {
      font-size: 10.5px;
      color: #64748B;
    }

    /* MAIN CONTENT */
    .main-wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background: #F8FAFC;
    }

    /* TOPBAR */
    .topbar {
      height: 56px;
      background: #FFFFFF;
      border-bottom: 1px solid #E2E8F0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      flex-shrink: 0;
    }
    .search-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #F1F5F9;
      border: 1px solid #CBD5E1;
      border-radius: 6px;
      padding: 6px 14px;
      width: 420px;
      color: #64748B;
      font-size: 12px;
    }
    .search-bar kbd {
      margin-left: auto;
      background: #FFFFFF;
      border: 1px solid #CBD5E1;
      border-radius: 3px;
      padding: 1px 5px;
      font-size: 10px;
      color: #94A3B8;
    }
    .topbar-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .topbar-chip {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
    }
    .chip-green {
      background: #ECFDF5;
      color: #059669;
      border: 1px solid #A7F3D0;
    }
    .btn-sm-primary {
      background: #1D68D8;
      color: #FFFFFF;
      border: none;
      padding: 6px 14px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 12px;
      cursor: pointer;
    }

    /* DASHBOARD BODY */
    .dash-body {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
    }

    .dash-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .dash-title-wrap h1 {
      font-size: 20px;
      font-weight: 850;
      color: #0F172A;
    }
    .dash-title-wrap p {
      font-size: 12px;
      color: #64748B;
      margin-top: 2px;
    }
    .dash-cta-btns {
      display: flex;
      gap: 10px;
    }
    .btn-outline {
      background: #FFFFFF;
      border: 1px solid #CBD5E1;
      color: #334155;
      padding: 7px 14px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 12px;
      cursor: pointer;
    }
    .btn-outline:hover {
      background: #F8FAFC;
    }

    /* 4 METRICS CARDS */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      margin-bottom: 22px;
    }
    .metric-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 18px 20px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.03);
      position: relative;
      overflow: hidden;
    }
    .metric-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
    }
    .metric-card.card-blue::before { background: #1D68D8; }
    .metric-card.card-purple::before { background: #6F3B9C; }
    .metric-card.card-emerald::before { background: #059669; }
    .metric-card.card-coral::before { background: #EF424B; }

    .metric-top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .metric-title {
      font-size: 11.5px;
      font-weight: 700;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .metric-tag {
      font-size: 10px;
      font-weight: 750;
      padding: 2px 6px;
      border-radius: 4px;
    }
    .tag-blue { background: #EFF6FF; color: #1D4ED8; }
    .tag-purple { background: #FAF5FF; color: #6F3B9C; }
    .tag-emerald { background: #ECFDF5; color: #059669; }
    .tag-coral { background: #FEF2F2; color: #EF424B; }

    .metric-value-row {
      display: flex;
      align-items: baseline;
      gap: 10px;
    }
    .metric-val {
      font-size: 26px;
      font-weight: 850;
      color: #0F172A;
      letter-spacing: -0.02em;
    }
    .metric-delta {
      font-size: 11px;
      font-weight: 600;
      color: #059669;
    }
    .metric-subtext {
      font-size: 11.5px;
      color: #64748B;
      margin-top: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* TWO COLUMN LAYOUT */
    .dashboard-two-col {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
    }

    /* PANELS */
    .panel {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.03);
      margin-bottom: 20px;
    }
    .panel-header {
      padding: 16px 20px;
      border-bottom: 1px solid #E2E8F0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .panel-header h3 {
      font-size: 14px;
      font-weight: 750;
      color: #0F172A;
    }
    .panel-header-action {
      font-size: 11px;
      color: #1D68D8;
      font-weight: 600;
      cursor: pointer;
    }

    /* TABLE */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
    }
    .data-table th {
      background: #F8FAFC;
      text-align: left;
      padding: 10px 18px;
      font-weight: 700;
      color: #475569;
      border-bottom: 1px solid #E2E8F0;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .data-table td {
      padding: 12px 18px;
      border-bottom: 1px solid #F1F5F9;
      color: #334155;
    }
    .data-table tr:hover td {
      background: #F8FAFC;
    }

    .student-cell {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .student-avatar-small {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #E0E7FF;
      color: #3730A3;
      font-weight: 700;
      font-size: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .badge-status {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 10.5px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 4px;
    }
    .status-verified { background: #ECFDF5; color: #047857; }
    .status-issued { background: #EFF6FF; color: #1D4ED8; }
    .status-pending { background: #FEF3C7; color: #B45309; }

    /* APAAR & PROGRESS WIDGET */
    .progress-list {
      padding: 18px 20px;
    }
    .progress-item {
      margin-bottom: 14px;
    }
    .progress-labels {
      display: flex;
      justify-content: space-between;
      font-size: 11.5px;
      margin-bottom: 5px;
      font-weight: 600;
    }
    .progress-bar-bg {
      height: 7px;
      background: #E2E8F0;
      border-radius: 4px;
      overflow: hidden;
    }
    .progress-bar-fill {
      height: 100%;
      border-radius: 4px;
    }

    /* THERMAL PREVIEW IN RIGHT PANEL */
    .thermal-box {
      margin: 16px 20px;
      background: #FFFBEB;
      border: 1px dashed #F59E0B;
      border-radius: 6px;
      padding: 14px;
      font-family: monospace;
      font-size: 11px;
      color: #78350F;
    }
    .thermal-line {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
    }

    /* FOOTER BAR */
    .system-status-bar {
      margin-top: 20px;
      background: #0F172A;
      border-radius: 6px;
      padding: 10px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #94A3B8;
      font-size: 11px;
    }
    .status-live-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #10B981;
      display: inline-block;
      margin-right: 6px;
      box-shadow: 0 0 8px #10B981;
    }
  </style>
</head>
<body>

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-brand">
      <img src="pragya-logo.png" alt="Pragya ERP" class="brand-logo-img">
      <span class="brand-version-badge">v2.4 PRO</span>
    </div>

    <div class="school-switcher">
      <div class="school-name">
        <span>St. Xavier's Model School</span>
        <span style="font-size: 10px; color: #38BDF8;">▾</span>
      </div>
      <div class="school-meta">Main Campus • CBSE &amp; ICSE Affil</div>
    </div>

    <div class="nav-group-title">Institutional Suite</div>
    <ul class="nav-list">
      <li class="nav-item active">
        <span>📊</span>
        <span>Executive Dashboard</span>
      </li>
      <li class="nav-item">
        <span>👥</span>
        <span>Student Registry</span>
        <span class="nav-count">1,248</span>
      </li>
      <li class="nav-item">
        <span>📅</span>
        <span>Daily Attendance</span>
        <span class="nav-count">96.4%</span>
      </li>
      <li class="nav-item">
        <span>💳</span>
        <span>Fee Counter &amp; POS</span>
      </li>
      <li class="nav-item">
        <span>📖</span>
        <span>Academics &amp; Timetable</span>
      </li>
      <li class="nav-item">
        <span>🎓</span>
        <span>Exams &amp; Report Cards</span>
      </li>
      <li class="nav-item">
        <span>💼</span>
        <span>Staff &amp; Payroll</span>
      </li>
      <li class="nav-item">
        <span>📚</span>
        <span>Digital Library</span>
      </li>
      <li class="nav-item">
        <span>📢</span>
        <span>WhatsApp Broadcast</span>
      </li>
      <li class="nav-item">
        <span>🏛️</span>
        <span>Multi-Branch Hub</span>
      </li>
    </ul>

    <div class="sidebar-user">
      <div class="user-avatar">SM</div>
      <div class="user-info">
        <div class="user-name">Dr. S. Mukherjee</div>
        <div class="user-role">Principal / Super Admin</div>
      </div>
      <span style="color: #64748B;">⚙️</span>
    </div>
  </aside>

  <!-- MAIN AREA -->
  <main class="main-wrap">
    <!-- TOPBAR -->
    <header class="topbar">
      <div class="search-bar">
        <span>🔍</span>
        <span>Search students by Name, PEN, Roll, or Parent Phone...</span>
        <kbd>Ctrl K</kbd>
      </div>

      <div class="topbar-actions">
        <div class="topbar-chip chip-green">
          <span style="font-size: 9px;">●</span> Session 2026-27 (Term 1)
        </div>
        <div class="topbar-chip" style="background: #F1F5F9; color: #334155;">
          <span>🇮🇳 APAAR 100% Ready</span>
        </div>
        <button class="btn-sm-primary">+ Quick Enrolment</button>
        <span style="font-size: 16px; cursor: pointer;">🔔</span>
      </div>
    </header>

    <!-- CONTENT BODY -->
    <div class="dash-body">
      <div class="dash-header">
        <div class="dash-title-wrap">
          <h1>Institutional Operations Command Center</h1>
          <p>Wednesday, 4 November 2026 • Real-time Cross-Module Operations</p>
        </div>
        <div class="dash-cta-btns">
          <button class="btn-outline">📊 Export UDISE+ Sheet</button>
          <button class="btn-outline">🖨️ Batch Print ID Cards</button>
          <button class="btn-sm-primary">⚡ Counter Fee POS</button>
        </div>
      </div>

      <!-- 4 TOP METRICS -->
      <div class="metrics-grid">
        <div class="metric-card card-blue">
          <div class="metric-top-row">
            <span class="metric-title">Active Enrolment</span>
            <span class="metric-tag tag-blue">+38 Term 1</span>
          </div>
          <div class="metric-value-row">
            <span class="metric-val">1,248</span>
            <span class="metric-delta">↑ 3.2% YoY</span>
          </div>
          <div class="metric-subtext">
            <span>Verified Dossiers</span>
            <strong>100% Complete</strong>
          </div>
        </div>

        <div class="metric-card card-purple">
          <div class="metric-top-row">
            <span class="metric-title">Today's Attendance</span>
            <span class="metric-tag tag-purple">96.4% Roll</span>
          </div>
          <div class="metric-value-row">
            <span class="metric-val">1,203</span>
            <span class="metric-delta" style="color: #6F3B9C;">/ 1,248 Present</span>
          </div>
          <div class="metric-subtext">
            <span>Absence WhatsApp</span>
            <strong style="color: #059669;">45 Sent (09:15 AM)</strong>
          </div>
        </div>

        <div class="metric-card card-emerald">
          <div class="metric-top-row">
            <span class="metric-title">Today's Counter POS</span>
            <span class="metric-tag tag-emerald">42 Receipts</span>
          </div>
          <div class="metric-value-row">
            <span class="metric-val">₹1,84,500</span>
            <span class="metric-delta">Balanced</span>
          </div>
          <div class="metric-subtext">
            <span>Cash: ₹74,500</span>
            <strong>UPI QR: ₹1,10,000</strong>
          </div>
        </div>

        <div class="metric-card card-coral">
          <div class="metric-top-row">
            <span class="metric-title">APAAR &amp; UDISE+</span>
            <span class="metric-tag tag-coral">91.2% Done</span>
          </div>
          <div class="metric-value-row">
            <span class="metric-val">1,138</span>
            <span class="metric-delta" style="color: #059669;">✓ Verified</span>
          </div>
          <div class="metric-subtext">
            <span>Mismatches Flagged</span>
            <strong style="color: #D97706;">0 Mismatches</strong>
          </div>
        </div>
      </div>

      <!-- TWO COLUMNS -->
      <div class="dashboard-two-col">
        <!-- LEFT: TRANSACTIONS & AUDIT TRAIL -->
        <div class="panel">
          <div class="panel-header">
            <h3>Recent Counter POS &amp; Student Operations</h3>
            <span class="panel-header-action">View Full Ledger →</span>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Student &amp; Class</th>
                <th>Operation</th>
                <th>Receipt / Ref</th>
                <th>Amount / Status</th>
                <th>Payment Mode</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="student-cell">
                    <div class="student-avatar-small" style="background: #DBEAFE; color: #1E40AF;">AR</div>
                    <div>
                      <strong>Ananya Roy</strong>
                      <div style="font-size: 11px; color: #64748B;">Class IX-A • Roll 01</div>
                    </div>
                  </div>
                </td>
                <td><span style="font-weight: 600;">Term 2 Tuition Fee</span></td>
                <td><code style="font-size: 11px; color: #0284C7;">PRG-REC-2026-1044</code></td>
                <td><strong style="color: #059669;">₹ 12,500.00</strong></td>
                <td><span class="badge-status status-issued">Dynamic UPI QR</span></td>
                <td style="color: #64748B;">10:42 AM</td>
              </tr>
              <tr>
                <td>
                  <div class="student-cell">
                    <div class="student-avatar-small" style="background: #F3E8FF; color: #6B21A8;">RS</div>
                    <div>
                      <strong>Rohan Sen</strong>
                      <div style="font-size: 11px; color: #64748B;">Class IX-A • Roll 04</div>
                    </div>
                  </div>
                </td>
                <td><span style="font-weight: 600;">APAAR Consent Verified</span></td>
                <td><code style="font-size: 11px; color: #6F3B9C;">PEN: 2024881099</code></td>
                <td><span class="badge-status status-verified">✓ DigiLocker Mapped</span></td>
                <td>Parent Signed</td>
                <td style="color: #64748B;">10:35 AM</td>
              </tr>
              <tr>
                <td>
                  <div class="student-cell">
                    <div class="student-avatar-small" style="background: #FEF3C7; color: #92400E;">DD</div>
                    <div>
                      <strong>Debabrata Das</strong>
                      <div style="font-size: 11px; color: #64748B;">Class VIII-C • Roll 12</div>
                    </div>
                  </div>
                </td>
                <td><span style="font-weight: 600;">Lab &amp; Bus Fee</span></td>
                <td><code style="font-size: 11px; color: #0284C7;">PRG-REC-2026-1043</code></td>
                <td><strong style="color: #059669;">₹ 4,700.00</strong></td>
                <td><span class="badge-status" style="background: #F1F5F9; color: #475569;">Cash Counter POS</span></td>
                <td style="color: #64748B;">10:18 AM</td>
              </tr>
              <tr>
                <td>
                  <div class="student-cell">
                    <div class="student-avatar-small" style="background: #FCE7F3; color: #9D174D;">IM</div>
                    <div>
                      <strong>Ishita Mukherjee</strong>
                      <div style="font-size: 11px; color: #64748B;">Class X-B • Roll 07</div>
                    </div>
                  </div>
                </td>
                <td><span style="font-weight: 600;">Smart PVC ID Card</span></td>
                <td><code style="font-size: 11px; color: #059669;">CR80-BATCH-04</code></td>
                <td><span class="badge-status status-verified">✓ Printed (QR Ready)</span></td>
                <td>School Store</td>
                <td style="color: #64748B;">09:54 AM</td>
              </tr>
              <tr>
                <td>
                  <div class="student-cell">
                    <div class="student-avatar-small" style="background: #CCFBF1; color: #115E59;">TS</div>
                    <div>
                      <strong>Tanvi Sharma</strong>
                      <div style="font-size: 11px; color: #64748B;">Class VII-A • Roll 18</div>
                    </div>
                  </div>
                </td>
                <td><span style="font-weight: 600;">Library Book Issued</span></td>
                <td><code style="font-size: 11px; color: #D97706;">ACC-LIB-4120</code></td>
                <td><span>Due: 18 Nov</span></td>
                <td>Barcode Scan</td>
                <td style="color: #64748B;">09:30 AM</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- RIGHT: COMPLIANCE GAUGES & SUMMARY -->
        <div>
          <div class="panel">
            <div class="panel-header">
              <h3>APAAR Class Readiness</h3>
              <span class="panel-header-action">UDISE+ CSV</span>
            </div>
            <div class="progress-list">
              <div class="progress-item">
                <div class="progress-labels">
                  <span>Class X (ICSE &amp; CBSE)</span>
                  <strong style="color: #059669;">100% (45/45)</strong>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" style="width: 100%; background: #059669;"></div>
                </div>
              </div>
              <div class="progress-item">
                <div class="progress-labels">
                  <span>Class IX (High School)</span>
                  <strong style="color: #1D68D8;">91.1% (41/45)</strong>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" style="width: 91.1%; background: #1D68D8;"></div>
                </div>
              </div>
              <div class="progress-item">
                <div class="progress-labels">
                  <span>Class VIII (Middle School)</span>
                  <strong style="color: #6F3B9C;">95.5% (43/45)</strong>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" style="width: 95.5%; background: #6F3B9C;"></div>
                </div>
              </div>
            </div>

            <div class="thermal-box">
              <div class="thermal-line"><strong>PRAGYA COUNTER POS</strong><span>SLIP #1044</span></div>
              <div class="thermal-line"><span>Ananya Roy (Class IX-A)</span><span>UPI QR</span></div>
              <div class="thermal-line" style="border-top: 1px dashed #F59E0B; padding-top: 4px; margin-top: 4px;">
                <strong>TOTAL PAID</strong>
                <strong style="color: #047857;">₹ 12,500.00</strong>
              </div>
              <div style="font-size: 9.5px; color: #92400E; margin-top: 4px;">3-Sec Thermal Print &amp; Parent WhatsApp Sent</div>
            </div>
          </div>
        </div>
      </div>

      <!-- SYSTEM STATUS BAR -->
      <div class="system-status-bar">
        <div>
          <span class="status-live-dot"></span>
          <strong>Cloud Engine:</strong> AWS Asia-Pacific (Mumbai) • 99.98% Uptime • Zero Data Leaks
        </div>
        <div>
          <span>Database: PostgreSQL 16 Encrypted</span> • 
          <span>Audit Trail: Immutable SHA-256</span> • 
          <span>Session: 2026-2027</span>
        </div>
      </div>
    </div>
  </main>

</body>
</html>
"""

# Copy pragya-logo.png to scratch folder so HTML can load it
import shutil
shutil.copy('public/pragya-logo.png', 'scratch/pragya-logo.png')

with open('scratch/dashboard_preview.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print('Generated scratch/dashboard_preview.html successfully!')
