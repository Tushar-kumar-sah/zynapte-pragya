import React, { useState } from 'react';
import { Download, Search, CheckCircle2, AlertTriangle, ShieldCheck, X } from 'lucide-react';
import { studentRecords } from '../data/studentRecords';
import AccuracyNotice from './AccuracyNotice';

export default function ApaarTracker({ showJourney = true }) {
  const [activeStatus, setActiveStatus] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);

  // Filter students based on status, class, and search query
  const filteredStudents = studentRecords.filter(student => {
    const matchesStatus = activeStatus === 'all' || student.status === activeStatus;
    const matchesClass = selectedClass === 'all' || student.class.toLowerCase().includes(selectedClass.toLowerCase());
    const matchesQuery = searchQuery === '' || 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.pen.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.roll.includes(searchQuery);

    return matchesStatus && matchesClass && matchesQuery;
  });

  const handleDownloadCsv = () => {
    const csvContent = `student_id,pen,student_name,dob,gender,class,section,guardian_name,consent_status,local_readiness
PRG-2026-001,2024881023,Ananya Roy,2010-05-14,Female,IX,A,Debashis Roy,Verified,Ready
PRG-2026-004,2024881099,Rohan Sen,2009-11-22,Male,X,B,Bikram Sen,Verified,Ready
PRG-2026-012,2024881144,Debabrata Das,2007-02-19,Male,XII,Science,Pradip Das,Verified,Ready
PRG-2026-018,2024881190,Sourav Ganguly,2010-07-08,Male,IX,A,Chandan Ganguly,Verified,Ready
PRG-2026-022,2024881211,Priyanka Bose,2011-12-11,Female,VIII,A,Sumit Bose,Verified,Ready`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'pragya_apaar_school_export_ready.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsCsvModalOpen(false);
  };

  return (
    <div className="apaar-tracker-component">
      {/* 4-Step Journey */}
      {showJourney && (
        <div className="apaar-journey-grid">
          <div className="journey-step-card">
            <div className="journey-step-number">1</div>
            <h3>1 · Gather</h3>
            <p>Keep the required student information and guardian consent details together, with the signed form attached.</p>
          </div>
          <div className="journey-step-card">
            <div className="journey-step-number">2</div>
            <h3>2 · Check</h3>
            <p>See blockers such as missing consent or required information, plus warnings for name/date mismatches and missing PEN.</p>
          </div>
          <div className="journey-step-card">
            <div className="journey-step-number">3</div>
            <h3>3 · Prepare</h3>
            <p>Filter by class, section and status, and export a CSV data sheet for the school’s official submission process.</p>
          </div>
          <div className="journey-step-card">
            <div className="journey-step-number">4</div>
            <h3>4 · Track</h3>
            <p>Record whether an application is pending, submitted, needs correction or has received a confirmed 12-digit APAAR ID.</p>
          </div>
        </div>
      )}

      {/* Overall Campus Readiness Meter */}
      <div className="apaar-overall-meter">
        <div className="meter-label-row">
          <div className="meter-title">
            <CheckCircle2 size={18} color="var(--color-success)" />
            <strong>Campus APAAR Readiness Score: 92.8% Verified</strong>
          </div>
          <span className="meter-detail">1,158 of 1,248 Records Completed</span>
        </div>
        <div className="meter-progress-track">
          <div className="meter-progress-bar animate-progress-fill" style={{ width: '92.8%' }} />
        </div>
      </div>

      {/* 4 Dashboard Status Cards */}
      <div className="apaar-status-grid" role="tablist" aria-label="APAAR Status Filters">
        <div
          className={`apaar-status-card apaar-status-card--ready ${activeStatus === 'ready' ? 'active' : ''}`}
          style={{
            background: 'linear-gradient(150deg, #FFFFFF 20%, #ECFDF5 100%)',
            border: '1.5px solid rgba(5, 150, 105, 0.32)',
            borderTop: '5px solid #059669',
            boxShadow: '0 6px 18px -4px rgba(5, 150, 105, 0.2)'
          }}
          onClick={() => setActiveStatus(activeStatus === 'ready' ? 'all' : 'ready')}
          role="tab"
          aria-selected={activeStatus === 'ready'}
          tabIndex={0}
        >
          <div className="apaar-status-header">
            <span className="apaar-status-title" style={{ color: '#059669' }}>Ready to Submit</span>
            <span className="badge badge--green">Ready</span>
          </div>
          <div className="apaar-status-count" style={{ color: '#059669' }}>428</div>
          <div className="apaar-status-desc">Locally recorded details meet Pragya’s readiness checks. Click to filter.</div>
        </div>

        <div
          className={`apaar-status-card apaar-status-card--attention ${activeStatus === 'attention' ? 'active' : ''}`}
          style={{
            background: 'linear-gradient(150deg, #FFFFFF 20%, #FFFBEB 100%)',
            border: '1.5px solid rgba(217, 119, 6, 0.32)',
            borderTop: '5px solid #D97706',
            boxShadow: '0 6px 18px -4px rgba(217, 119, 6, 0.2)'
          }}
          onClick={() => setActiveStatus(activeStatus === 'attention' ? 'all' : 'attention')}
          role="tab"
          aria-selected={activeStatus === 'attention'}
          tabIndex={0}
        >
          <div className="apaar-status-header">
            <span className="apaar-status-title" style={{ color: '#D97706' }}>Needs Attention</span>
            <span className="badge badge--orange">Follow Up</span>
          </div>
          <div className="apaar-status-count" style={{ color: '#D97706' }}>34</div>
          <div className="apaar-status-desc">Students with missing consent, missing PEN, or demographic mismatch alerts.</div>
        </div>

        <div
          className={`apaar-status-card apaar-status-card--submitted ${activeStatus === 'submitted' ? 'active' : ''}`}
          style={{
            background: 'linear-gradient(150deg, #FFFFFF 20%, #EFF6FF 100%)',
            border: '1.5px solid rgba(20, 94, 255, 0.32)',
            borderTop: '5px solid #145EFF',
            boxShadow: '0 6px 18px -4px rgba(20, 94, 255, 0.2)'
          }}
          onClick={() => setActiveStatus(activeStatus === 'submitted' ? 'all' : 'submitted')}
          role="tab"
          aria-selected={activeStatus === 'submitted'}
          tabIndex={0}
        >
          <div className="apaar-status-header">
            <span className="apaar-status-title" style={{ color: '#145EFF' }}>Submitted</span>
            <span className="badge badge--blue">In Progress</span>
          </div>
          <div className="apaar-status-count" style={{ color: '#145EFF' }}>512</div>
          <div className="apaar-status-desc">Marked as submitted after the school completes external government processing.</div>
        </div>

        <div
          className={`apaar-status-card apaar-status-card--generated ${activeStatus === 'generated' ? 'active' : ''}`}
          style={{
            background: 'linear-gradient(150deg, #FFFFFF 20%, #F5F3FF 100%)',
            border: '1.5px solid rgba(116, 45, 218, 0.32)',
            borderTop: '5px solid #742DDA',
            boxShadow: '0 6px 18px -4px rgba(116, 45, 218, 0.2)'
          }}
          onClick={() => setActiveStatus(activeStatus === 'generated' ? 'all' : 'generated')}
          role="tab"
          aria-selected={activeStatus === 'generated'}
          tabIndex={0}
        >
          <div className="apaar-status-header">
            <span className="apaar-status-title" style={{ color: '#742DDA' }}>APAAR Generated</span>
            <span className="badge badge--violet">Completed</span>
          </div>
          <div className="apaar-status-count" style={{ color: '#742DDA' }}>274</div>
          <div className="apaar-status-desc">Students whose confirmed 12-digit IDs have been received and logged.</div>
        </div>
      </div>

      {/* Interactive Table Container */}
      <div className="apaar-interactive-box">
        <div className="table-toolbar">
          <div className="table-filters">
            <select
              className="table-filter-select"
              value={selectedClass}
              onChange={e => setSelectedClass(e.target.value)}
              aria-label="Filter by Class"
            >
              <option value="all">All Classes &amp; Sections</option>
              <option value="VIII-A">Class VIII-A</option>
              <option value="IX-A">Class IX-A</option>
              <option value="X-B">Class X-B</option>
              <option value="XII-Science">Class XII-Science</option>
            </select>

            <input
              type="text"
              className="table-search-input"
              placeholder="Search by student, roll, or PEN..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              aria-label="Search student table"
            />
          </div>

          <div>
            <button
              className="btn btn--secondary btn--sm"
              onClick={() => setIsCsvModalOpen(true)}
              title="Preview and download school submission CSV"
            >
              <Download size={16} />
              <span>Export School CSV Sheet</span>
            </button>
          </div>
        </div>

        <div className="table-responsive-wrapper">
          <table className="interactive-data-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Class &amp; Section</th>
                <th>PEN (UDISE+)</th>
                <th>Guardian Consent</th>
                <th>Readiness Status</th>
                <th>APAAR Record</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '30px' }}>
                    No student records match the selected filters.
                  </td>
                </tr>
              ) : (
                filteredStudents.map(student => (
                  <tr key={student.id}>
                    <td>
                      <div className="student-meta-cell">
                        <div className="student-avatar">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <strong>{student.name}</strong><br />
                          <small style={{ color: 'var(--color-slate-500)' }}>
                            Roll #{student.roll} • DOB: {student.dob}
                          </small>
                        </div>
                      </div>
                    </td>
                    <td>Class {student.class}</td>
                    <td>
                      {student.pen.startsWith('Missing') ? (
                        <span className="badge badge--warning">{student.pen}</span>
                      ) : (
                        <code>{student.pen}</code>
                      )}
                    </td>
                    <td>
                      <span className={`badge ${student.consent.includes('Missing') ? 'badge--warning' : 'badge--cyan'}`}>
                        {student.consent}
                      </span>
                    </td>
                    <td>
                      <span className={`status-tag status-tag--${student.status}`}>
                        {student.statusLabel}
                      </span>
                    </td>
                    <td>
                      {student.status === 'generated' ? (
                        <code>{student.apaarId}</code>
                      ) : (
                        <span style={{ color: student.status === 'attention' ? 'var(--color-danger)' : 'var(--color-slate-500)' }}>
                          {student.apaarId}
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Accuracy Notice Callout */}
      <AccuracyNotice />

      {/* 3 Built-in Guardrail Cards */}
      <div className="guardrails-row">
        <div className="guardrail-card">
          <h4>
            <CheckCircle2 size={18} color="var(--color-blue)" />
            <span>Format &amp; Uniqueness Checks</span>
          </h4>
          <p>APAAR ID is checked as a unique 12-digit value; PEN is verified for character length and institutional uniqueness across your school records.</p>
        </div>

        <div className="guardrail-card">
          <h4>
            <CheckCircle2 size={18} color="var(--color-violet)" />
            <span>Parental Consent Tracking</span>
          </h4>
          <p>Captures guardian relationship, name and consent signature date; mismatches in demographic information are flagged prior to CSV generation.</p>
        </div>

        <div className="guardrail-card">
          <h4>
            <ShieldCheck size={18} color="#028394" />
            <span>Privacy &amp; Data Minimisation</span>
          </h4>
          <p>The APAAR record does not store the student’s Aadhaar number; local checks rely strictly on student name, date of birth and linked guardian mobile.</p>
        </div>
      </div>

      {/* CSV Preview Modal */}
      {isCsvModalOpen && (
        <div className="custom-dialog" style={{ display: 'block', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000, background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="dialog-inner" style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', maxWidth: '680px', width: '90%', padding: '30px' }}>
            <div className="dialog-header">
              <h3 style={{ fontSize: '1.25rem' }}>Sample APAAR School Export Sheet</h3>
              <button
                className="dialog-close-btn"
                onClick={() => setIsCsvModalOpen(false)}
                aria-label="Close dialog"
              >
                <X size={22} />
              </button>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-600)', marginBottom: '16px' }}>
              This preview shows the clean structured CSV data format exported by Pragya when local checks are complete, ready for your school’s submission process:
            </p>

            <div className="csv-code-box">
{`student_id,pen,student_name,dob,gender,class,section,guardian_name,consent_status,local_readiness
PRG-2026-001,2024881023,Ananya Roy,2010-05-14,Female,IX,A,Debashis Roy,Verified,Ready
PRG-2026-004,2024881099,Rohan Sen,2009-11-22,Male,X,B,Bikram Sen,Verified,Ready
PRG-2026-012,2024881144,Debabrata Das,2007-02-19,Male,XII,Science,Pradip Das,Verified,Ready`}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button className="btn btn--secondary" onClick={() => setIsCsvModalOpen(false)}>
                Close
              </button>
              <button className="btn btn--primary" onClick={handleDownloadCsv}>
                Download Sample CSV
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
