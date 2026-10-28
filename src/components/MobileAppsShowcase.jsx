import React, { useState } from 'react';
import { 
  Smartphone, CheckCircle2, Shield, Bell, Calendar, 
  CreditCard, Award, UserCheck, BookOpen, Clock, 
  Sparkles, Download, Layers, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileAppsShowcase() {
  const [activeTab, setActiveTab] = useState('parent');

  const apps = {
    parent: {
      name: "Parent & Student App",
      badge: "FAMILY PORTAL",
      badgeColor: "badge--cyan",
      headline: "Homework, Fees & Attendance at Parent's Fingertips",
      description: "Keeps families connected with real-time school notices, digital fee receipts, exam report cards, and daily homework diary without visiting the school office.",
      features: [
        "Instant Attendance Alerts (Notified within 3 mins of morning roll call)",
        "Counter & Bank Fee Receipts download in PDF with QR stamp",
        "Subject-wise Homework Diary with teacher attachments",
        "Term Examination Schedules, Admit Cards & Report Cards",
        "Direct School Notice Ribbon with circular attachments",
        "Multilingual support: English, Bengali and Hindi interface"
      ],
      screenUi: (
        <div className="phone-screen-content">
          <div className="phone-top-status">
            <span>09:41</span>
            <div className="phone-notch" />
            <div className="phone-signals">📶 5G 🔋</div>
          </div>
          
          <div className="app-header">
            <div className="app-user-row">
              <div className="app-avatar">👧</div>
              <div>
                <div className="app-user-name">Ananya Das</div>
                <div className="app-user-sub">Class IX-A • Roll 14</div>
              </div>
            </div>
            <span className="app-badge-pill">Term II Active</span>
          </div>

          <div className="app-metric-cards">
            <div className="app-metric-card">
              <span className="metric-lbl">Attendance</span>
              <span className="metric-val" style={{ color: 'var(--color-success)' }}>98.2%</span>
              <span className="metric-sub">Present Today ✓</span>
            </div>
            <div className="app-metric-card">
              <span className="metric-lbl">Fee Dues</span>
              <span className="metric-val" style={{ color: 'var(--color-blue)' }}>₹0.00</span>
              <span className="metric-sub">Receipt #842 Paid</span>
            </div>
          </div>

          <div className="app-section-title">TODAY'S HOMEWORK &amp; TASKS</div>
          <div className="app-task-card">
            <div className="app-task-icon">📐</div>
            <div className="app-task-info">
              <strong>Mathematics • Geometry</strong>
              <small>Exercise 8.2 • Q1 to Q12 • Due Tomorrow</small>
            </div>
          </div>
          <div className="app-task-card">
            <div className="app-task-icon">🧪</div>
            <div className="app-task-info">
              <strong>Physical Science</strong>
              <small>Periodic Table Worksheet (PDF attached)</small>
            </div>
          </div>

          <div className="app-section-title">LATEST CIRCULAR</div>
          <div className="app-notice-pill">
            <Bell size={14} color="var(--color-violet)" />
            <span>Winter Uniform Transition Notice • Signed by Principal</span>
          </div>

          <div className="app-bottom-nav">
            <span className="nav-item active">🏠 Home</span>
            <span className="nav-item">📚 Diary</span>
            <span className="nav-item">💳 Fees</span>
            <span className="nav-item">📊 Marks</span>
          </div>
        </div>
      )
    },
    teacher: {
      name: "Teacher & Staff App",
      badge: "STAFF WORKFLOWS",
      badgeColor: "badge--violet",
      headline: "Roll Call, Marks Entry & Lesson Plans in 40 Seconds",
      description: "Empowers educators to take daily attendance, input formative and summative marks, allocate homework, and apply for leave directly from their smartphone.",
      features: [
        "1-Tap Roll Call: Mark an entire class present in under 40 seconds",
        "Direct Subject Marks Entry with automatic grade calculation",
        "Homework Diary Creator with photo & PDF upload",
        "Class Timetable with real-time substitute teacher alerts",
        "Staff Attendance Punch & digital Casual Leave requests",
        "Controlled Parent Communication within school hours only"
      ],
      screenUi: (
        <div className="phone-screen-content">
          <div className="phone-top-status">
            <span>09:41</span>
            <div className="phone-notch" />
            <div className="phone-signals">📶 5G 🔋</div>
          </div>
          
          <div className="app-header" style={{ background: 'linear-gradient(135deg, #742DDA, #145EFF)' }}>
            <div className="app-user-row">
              <div className="app-avatar">👨‍🏫</div>
              <div>
                <div className="app-user-name">Prof. Sourav Mukherjee</div>
                <div className="app-user-sub">Senior Mathematics • Class IX-A Teacher</div>
              </div>
            </div>
            <span className="app-badge-pill" style={{ background: 'rgba(255,255,255,0.2)' }}>Staff ID: T-104</span>
          </div>

          <div className="app-metric-cards">
            <div className="app-metric-card">
              <span className="metric-lbl">Periods Today</span>
              <span className="metric-val" style={{ color: 'var(--color-violet)' }}>5 / 6</span>
              <span className="metric-sub">Next: Class X-B (Lab)</span>
            </div>
            <div className="app-metric-card">
              <span className="metric-lbl">Leave Balance</span>
              <span className="metric-val" style={{ color: 'var(--color-success)' }}>11 Days</span>
              <span className="metric-sub">CL &amp; Medical</span>
            </div>
          </div>

          <div className="app-section-title">QUICK ACTIONS</div>
          <div className="app-quick-actions">
            <div className="quick-btn">
              <span>✅</span>
              <small>Roll Call</small>
            </div>
            <div className="quick-btn">
              <span>📝</span>
              <small>Marks</small>
            </div>
            <div className="quick-btn">
              <span>📅</span>
              <small>Timetable</small>
            </div>
            <div className="quick-btn">
              <span>🏖️</span>
              <small>Leave</small>
            </div>
          </div>

          <div className="app-section-title">UPCOMING PERIODS</div>
          <div className="app-task-card">
            <div className="app-task-icon" style={{ background: '#EEF2FF' }}>⏰</div>
            <div className="app-task-info">
              <strong>Period 4: Class IX-A (Maths)</strong>
              <small>Room 204 • 11:15 AM - 12:00 PM</small>
            </div>
          </div>

          <div className="app-bottom-nav">
            <span className="nav-item active">📋 Classes</span>
            <span className="nav-item">✏️ Marks</span>
            <span className="nav-item">🗓️ Routine</span>
            <span className="nav-item">👤 Profile</span>
          </div>
        </div>
      )
    },
    admin: {
      name: "Principal & Admin App",
      badge: "EXECUTIVE OVERSIGHT",
      badgeColor: "badge--blue",
      headline: "Live Campus Metrics, Cash Counters & APAAR Progress",
      description: "Allows school leadership to monitor overall campus attendance, daily fee collections, pending parent consent forms, and staff leave approvals from anywhere.",
      features: [
        "Real-Time Executive Campus Overview across all class sections",
        "Live Counter Cash Drawer & Day-End Bank Deposit tracking",
        "APAAR Readiness Monitor: Count of pending consents and PEN mismatches",
        "1-Click Approval for teacher leave, purchase vouchers and fee concessions",
        "Multi-Branch Switching without logging out",
        "Emergency Broadcast Alert Ribbon to all teachers and parents"
      ],
      screenUi: (
        <div className="phone-screen-content">
          <div className="phone-top-status">
            <span>09:41</span>
            <div className="phone-notch" />
            <div className="phone-signals">📶 5G 🔋</div>
          </div>
          
          <div className="app-header" style={{ background: 'linear-gradient(135deg, #172552, #00CDE5)' }}>
            <div className="app-user-row">
              <div className="app-avatar">🏛️</div>
              <div>
                <div className="app-user-name">Principal Dr. Roy</div>
                <div className="app-user-sub">South Kolkata Main Campus</div>
              </div>
            </div>
            <span className="app-badge-pill" style={{ background: 'rgba(0, 205, 229, 0.3)' }}>Executive</span>
          </div>

          <div className="app-metric-cards">
            <div className="app-metric-card">
              <span className="metric-lbl">Total Students</span>
              <span className="metric-val" style={{ color: 'var(--color-blue)' }}>1,248</span>
              <span className="metric-sub">96.4% Present Today</span>
            </div>
            <div className="app-metric-card">
              <span className="metric-lbl">Today's Fees</span>
              <span className="metric-val" style={{ color: 'var(--color-success)' }}>₹1,84,500</span>
              <span className="metric-sub">48 Counter Receipts</span>
            </div>
          </div>

          <div className="app-section-title">COMPLIANCE &amp; APPROVALS</div>
          <div className="app-task-card">
            <div className="app-task-icon" style={{ background: '#ECFDF5' }}>🛡️</div>
            <div className="app-task-info">
              <strong>APAAR Consent: 91.2% Complete</strong>
              <small>112 records need parent signature check</small>
            </div>
          </div>
          <div className="app-task-card">
            <div className="app-task-icon" style={{ background: '#FFFBEB' }}>⏳</div>
            <div className="app-task-info">
              <strong>3 Staff Leave Requests Pending</strong>
              <small>Science Dept • Tap to review and approve</small>
            </div>
          </div>

          <div className="app-bottom-nav">
            <span className="nav-item active">📊 Summary</span>
            <span className="nav-item">💰 Finance</span>
            <span className="nav-item">👥 Staff</span>
            <span className="nav-item">⚙️ Switch</span>
          </div>
        </div>
      )
    }
  };

  const currentApp = apps[activeTab];

  return (
    <section className="section mobile-apps-section" id="mobile-apps">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            EVERYTHING AT YOUR FINGERTIPS
          </div>
          <h2>Smart Mobile Apps for Every Stakeholder</h2>
          <p>
            Experience true mobility. Empower parents, teachers, and school leadership with dedicated native mobile workflows on iOS and Android.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mobile-app-tabs">
          <button 
            className={`mobile-tab-btn ${activeTab === 'parent' ? 'active' : ''}`}
            onClick={() => setActiveTab('parent')}
          >
            <Smartphone size={18} />
            <span>Parent &amp; Student App</span>
          </button>
          <button 
            className={`mobile-tab-btn ${activeTab === 'teacher' ? 'active' : ''}`}
            onClick={() => setActiveTab('teacher')}
          >
            <UserCheck size={18} />
            <span>Teacher &amp; Staff App</span>
          </button>
          <button 
            className={`mobile-tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
            onClick={() => setActiveTab('admin')}
          >
            <Shield size={18} />
            <span>Principal &amp; Management App</span>
          </button>
        </div>

        {/* Interactive App Showcase Layout */}
        <div className="mobile-showcase-grid">
          {/* Left: Phone Mockup Frame */}
          <div className="mobile-phone-column">
            <div className="realistic-smartphone-wrapper">
              <div className="smartphone-body">
                <div className="smartphone-bezel">
                  <div className="smartphone-screen">
                    {currentApp.screenUi}
                  </div>
                </div>
              </div>
              <div className="smartphone-glow" aria-hidden="true" />
            </div>
          </div>

          {/* Right: Feature Highlights & App Store Badges */}
          <div className="mobile-details-column">
            <div className="app-details-header">
              <span className={`badge ${currentApp.badgeColor}`}>{currentApp.badge}</span>
              <h3 className="app-details-title">{currentApp.headline}</h3>
              <p className="app-details-desc">{currentApp.description}</p>
            </div>

            <div className="app-feature-checklist">
              {currentApp.features.map((feat, idx) => (
                <div key={idx} className="app-check-item">
                  <div className="check-icon-circle">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="app-store-strip">
              <div className="store-pill">
                <span className="store-icon">🤖</span>
                <div className="store-text">
                  <small>AVAILABLE FOR</small>
                  <strong>Android Phones</strong>
                </div>
              </div>
              <div className="store-pill">
                <span className="store-icon">🍏</span>
                <div className="store-text">
                  <small>AVAILABLE FOR</small>
                  <strong>Apple iOS Devices</strong>
                </div>
              </div>
            </div>

            <div className="mobile-cta-row">
              <Link to="/contact" className="btn btn--primary btn--lg">
                <span>Book a Live Mobile App Demo</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/school-erp-mobile-app" className="btn btn--secondary btn--lg">
                Explore Mobile Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
