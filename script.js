/**
 * Pragya School ERP — Interactive UI Script
 * Includes:
 * 1. Mobile Menu Drawer
 * 2. Sticky Header Effect
 * 3. Hero ERP Mockup Tab Switcher
 * 4. APAAR Status Cards & Live Table Filtering
 * 5. Native Dialog CSV Preview & Download
 * 6. Role-Based Solutions Switcher
 * 7. Accessible Form Validation & Submission (modern-web-guidance compliant)
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. MOBILE DRAWER NAVIGATION
  // =========================================================================
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta-group a');

  const toggleMobileNav = (open) => {
    const isOpen = open !== undefined ? open : !mobileNav.classList.contains('open');
    mobileNav.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
    mobileNav.setAttribute('aria-hidden', (!isOpen).toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', () => toggleMobileNav());

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => toggleMobileNav(false));
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        toggleMobileNav(false);
      }
    });
  }

  // =========================================================================
  // 2. STICKY HEADER SHADOW ON SCROLL
  // =========================================================================
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // =========================================================================
  // 3. HERO ERP DASHBOARD MOCKUP VIEWS
  // =========================================================================
  const mockupTabBtns = document.querySelectorAll('.mockup-tab-btn');
  const mockupTableBody = document.getElementById('mockup-table-body');
  const mockupPanelTitle = document.querySelector('.apaar-panel-title span');

  const mockupViewsData = {
    apaar: {
      title: 'Class IX-A • APAAR Readiness Check',
      headers: ['Student', 'PEN', 'Guardian Consent', 'Status'],
      rows: `
        <tr>
          <td><strong>Ananya Roy</strong> (Roll 01)</td>
          <td>2024881023</td>
          <td><span style="color:var(--color-success)">✓ Verified &amp; Signed</span></td>
          <td><span class="status-tag status-tag--generated">APAAR Generated</span></td>
        </tr>
        <tr>
          <td><strong>Rohan Sen</strong> (Roll 04)</td>
          <td>2024881099</td>
          <td><span style="color:var(--color-success)">✓ Form Attached</span></td>
          <td><span class="status-tag status-tag--ready">Ready to Submit</span></td>
        </tr>
        <tr>
          <td><strong>Ishita Mukherjee</strong> (Roll 07)</td>
          <td><span style="color:var(--color-warning)">Pending</span></td>
          <td><span style="color:var(--color-danger)">✗ Missing Form</span></td>
          <td><span class="status-tag status-tag--attention">Needs Attention</span></td>
        </tr>
        <tr>
          <td><strong>Debabrata Das</strong> (Roll 12)</td>
          <td>2024881144</td>
          <td><span style="color:var(--color-success)">✓ Verified</span></td>
          <td><span class="status-tag status-tag--submitted">Submitted</span></td>
        </tr>
      `
    },
    fees: {
      title: 'Counter Collection & Receipts • Today',
      headers: ['Student & Roll', 'Receipt #', 'Amount Paid', 'Mode'],
      rows: `
        <tr>
          <td><strong>Pritam Paul</strong> (X-B, Roll 03)</td>
          <td><code>REC-2026-0891</code></td>
          <td><strong style="color:var(--color-ink)">₹14,500</strong></td>
          <td><span class="badge" style="background:#ECFDF5; color:#059669">Cash / Counter</span></td>
        </tr>
        <tr>
          <td><strong>Sneha Karmakar</strong> (IX-A, Roll 15)</td>
          <td><code>REC-2026-0892</code></td>
          <td><strong style="color:var(--color-ink)">₹9,200</strong></td>
          <td><span class="badge" style="background:#F0F9FF; color:#0284C7">Cheque Cleared</span></td>
        </tr>
        <tr>
          <td><strong>Arjun Sengupta</strong> (XII-Sci, Roll 02)</td>
          <td><code>REC-2026-0893</code></td>
          <td><strong style="color:var(--color-ink)">₹18,000</strong></td>
          <td><span class="badge" style="background:#ECFDF5; color:#059669">Counter POS Card</span></td>
        </tr>
        <tr>
          <td><strong>Riya Bhattacharya</strong> (VIII-B, Roll 11)</td>
          <td><code>REC-2026-0894</code></td>
          <td><strong style="color:var(--color-ink)">₹11,000</strong></td>
          <td><span class="badge" style="background:#ECFDF5; color:#059669">Cash / Counter</span></td>
        </tr>
      `
    },
    attendance: {
      title: 'Class Attendance Headcount • Morning Roll',
      headers: ['Class & Section', 'Total Enrolled', 'Present', 'Attendance %'],
      rows: `
        <tr>
          <td><strong>Class VIII-A</strong></td>
          <td>44 Students</td>
          <td>43 Present</td>
          <td><span class="badge" style="background:#ECFDF5; color:#059669">97.7%</span></td>
        </tr>
        <tr>
          <td><strong>Class IX-A</strong></td>
          <td>45 Students</td>
          <td>43 Present</td>
          <td><span class="badge" style="background:#ECFDF5; color:#059669">95.5%</span></td>
        </tr>
        <tr>
          <td><strong>Class X-B</strong></td>
          <td>42 Students</td>
          <td>41 Present</td>
          <td><span class="badge" style="background:#ECFDF5; color:#059669">97.6%</span></td>
        </tr>
        <tr>
          <td><strong>Class XII-Science</strong></td>
          <td>38 Students</td>
          <td>36 Present</td>
          <td><span class="badge" style="background:#ECFDF5; color:#059669">94.7%</span></td>
        </tr>
      `
    }
  };

  mockupTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mockupTabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const view = btn.getAttribute('data-view');
      const data = mockupViewsData[view];
      if (data && mockupTableBody) {
        if (mockupPanelTitle) mockupPanelTitle.textContent = data.title;
        // update thead headers
        const table = mockupTableBody.closest('table');
        if (table) {
          const theadTr = table.querySelector('thead tr');
          if (theadTr) {
            theadTr.innerHTML = data.headers.map(h => `<th>${h}</th>`).join('');
          }
        }
        mockupTableBody.innerHTML = data.rows;
      }
    });
  });

  // =========================================================================
  // 4. APAAR STATUS CARDS & LIVE TABLE FILTERING
  // =========================================================================
  const statusCards = document.querySelectorAll('.apaar-status-card');
  const classFilter = document.getElementById('filter-class-select');
  const studentSearch = document.getElementById('filter-student-search');
  const tableRows = document.querySelectorAll('#interactive-student-rows tr');

  let activeStatusFilter = 'ready'; // default active

  const filterTable = () => {
    const classVal = classFilter ? classFilter.value.toLowerCase() : 'all';
    const query = studentSearch ? studentSearch.value.trim().toLowerCase() : '';

    tableRows.forEach(row => {
      const rowStatus = row.getAttribute('data-status');
      const rowClass = row.getAttribute('data-class').toLowerCase();
      const rowText = row.textContent.toLowerCase();

      const matchesStatus = (activeStatusFilter === 'all' || rowStatus === activeStatusFilter);
      const matchesClass = (classVal === 'all' || rowClass.includes(classVal));
      const matchesSearch = query === '' || rowText.includes(query);

      if (matchesStatus && matchesClass && matchesSearch) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  };

  statusCards.forEach(card => {
    card.addEventListener('click', () => {
      statusCards.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });
      card.classList.add('active');
      card.setAttribute('aria-selected', 'true');
      activeStatusFilter = card.getAttribute('data-status');
      filterTable();
    });

    // Keyboard navigation (Enter / Space)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  if (classFilter) {
    classFilter.addEventListener('change', filterTable);
  }

  if (studentSearch) {
    studentSearch.addEventListener('input', filterTable);
  }

  // Initial filter run
  filterTable();

  // =========================================================================
  // 5. NATIVE DIALOG: CSV PREVIEW & DOWNLOAD
  // =========================================================================
  const csvDialog = document.getElementById('csv-preview-dialog');
  const openCsvBtn1 = document.getElementById('open-csv-preview');
  const openCsvBtn2 = document.getElementById('btn-export-csv');
  const closeDialogBtn = document.getElementById('close-dialog-btn');
  const cancelDialogBtn = document.getElementById('dialog-cancel-btn');
  const downloadCsvBtn = document.getElementById('dialog-download-btn');

  const openCsvModal = () => {
    if (csvDialog && typeof csvDialog.showModal === 'function') {
      csvDialog.showModal();
    }
  };

  const closeCsvModal = () => {
    if (csvDialog) {
      csvDialog.close();
    }
  };

  if (openCsvBtn1) openCsvBtn1.addEventListener('click', openCsvModal);
  if (openCsvBtn2) openCsvBtn2.addEventListener('click', openCsvModal);
  if (closeDialogBtn) closeDialogBtn.addEventListener('click', closeCsvModal);
  if (cancelDialogBtn) cancelDialogBtn.addEventListener('click', closeCsvModal);

  // Close dialog on backdrop click
  if (csvDialog) {
    csvDialog.addEventListener('click', (e) => {
      const rect = csvDialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeCsvModal();
      }
    });
  }

  // Handle CSV Download simulation
  if (downloadCsvBtn) {
    downloadCsvBtn.addEventListener('click', () => {
      const csvContent = `student_id,pen,student_name,dob,gender,class,section,guardian_name,consent_status,local_readiness
PRG-2026-001,2024881023,Ananya Roy,2010-05-14,Female,IX,A,Debashis Roy,Verified,Ready
PRG-2026-004,2024881099,Rohan Sen,2009-11-22,Male,X,B,Bikram Sen,Verified,Ready
PRG-2026-012,2024881144,Debabrata Das,2007-02-19,Male,XII,Science,Pradip Das,Verified,Ready
PRG-2026-018,2024881190,Sourav Ganguly,2010-07-08,Male,IX,A,Chandan Ganguly,Verified,Ready`;

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'pragya_apaar_school_export_ready.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      closeCsvModal();
    });
  }

  // =========================================================================
  // 6. SOLUTIONS BY ROLE DYNAMIC SWITCHER
  // =========================================================================
  const roleTabBtns = document.querySelectorAll('.role-tab-btn');
  const roleTitle = document.getElementById('role-title');
  const roleOutcome = document.getElementById('role-outcome');
  const rolePoints = document.getElementById('role-points');
  const roleCtaBtn = document.getElementById('role-cta-btn');
  const roleAvatarTxt = document.getElementById('role-avatar-txt');
  const roleUserName = document.getElementById('role-user-name');
  const roleUserTitle = document.getElementById('role-user-title');
  const roleBadgeTxt = document.getElementById('role-badge-txt');

  const roleData = {
    principal: {
      title: 'For Principals and School Leaders',
      outcome: 'See attendance, results, fees and APAAR progress at a glance.',
      avatar: 'P',
      name: 'Dr. S. Mukherjee',
      roleTxt: 'Principal • Pragya School',
      badge: 'Executive View',
      points: [
        'Live consolidated visibility into daily attendance, outstanding dues, and academic performance.',
        'Institutional APAAR readiness tracking across classes without chasing teachers for paper lists.',
        'Faster institutional decisions with role-level auditing and fewer disconnected spreadsheets.'
      ],
      cta: "See Principal's View in Action"
    },
    administrator: {
      title: 'For Administrators & Academic Coordinators',
      outcome: 'Set up classes, subjects, staff and fee structures, with clear pending-work visibility.',
      avatar: 'A',
      name: 'M. Chakraborty',
      roleTxt: 'Head Administrator',
      badge: 'Admin Console',
      points: [
        'Central academic structure: configure years, branches, classes, sections, and subject teachers.',
        'Pending task queue: instantly view pending admissions, verification requests, and fee reconciliations.',
        'WBBSE/WBCHSE catalogue support with custom school elective groups.'
      ],
      cta: 'Explore Admin Configuration'
    },
    teacher: {
      title: 'For Class and Subject Teachers',
      outcome: 'Mark attendance, manage subject work, enter permitted marks and track syllabus progress.',
      avatar: 'T',
      name: 'P. Sengupta',
      roleTxt: 'Senior Math Teacher • Class IX-A',
      badge: 'Teacher Desk',
      points: [
        'Rapid daily roll call from browser or mobile app without paper registers.',
        'Permitted marks entry: enter subject examination marks with automated grade threshold calculations.',
        'Direct syllabus progress tracking and conflict-free timetable view.'
      ],
      cta: "Explore Teacher's Workflow"
    },
    admissions: {
      title: 'For Admissions & Front-Office Teams',
      outcome: 'Move enquiries to accepted applications and answer student or guardian queries from one record.',
      avatar: 'F',
      name: 'R. Goswami',
      roleTxt: 'Admissions Officer',
      badge: 'Front Office',
      points: [
        'Kanban-style admissions board to manage enquiries, scheduled visits, and submitted documents.',
        'Guided Excel/CSV data import for bulk student entries with field matching and validation.',
        'Instant student lookup when parents call with fee, attendance, or document queries.'
      ],
      cta: 'See Admissions Workflow'
    },
    accountant: {
      title: 'For Accounts & Finance Teams',
      outcome: 'Collect fees, issue receipts, follow up on dues and manage monthly payroll.',
      avatar: '₹',
      name: 'K. Nandy',
      roleTxt: 'School Accountant',
      badge: 'Finance Desk',
      points: [
        'Counter fee collection with instant receipt printing and clear dues balance breakdown.',
        'INR accounting with head-wise breakdowns (Tuition, Development, Transport, Lab).',
        'Staff monthly payroll workflow with salary slips, adjustments, and recorded history.'
      ],
      cta: 'See Fee Collection Workflow'
    },
    hr: {
      title: 'For HR & Staff Administration',
      outcome: 'Manage profiles, leave, attendance and salary changes with a recorded history.',
      avatar: 'H',
      name: 'T. Roy',
      roleTxt: 'HR Manager',
      badge: 'Staff Admin',
      points: [
        'Maintain complete teacher and support staff dossiers, service records, and qualifications.',
        'Streamline staff leave requests, approvals, and daily presence tracking.',
        'Keep workforce records connected to the rest of school administration.'
      ],
      cta: 'Explore HR Workflows'
    },
    student: {
      title: 'For Students',
      outcome: 'Access personal timetable, attendance, homework, results, fees, syllabus and notices.',
      avatar: 'S',
      name: 'Ananya Roy',
      roleTxt: 'Student • Class IX-A',
      badge: 'Student Portal',
      points: [
        'Clear daily schedule and conflict-aware timetable available on mobile and browser.',
        'View published report cards, term assessments, and homework assignments.',
        'Stay updated with daily school message ribbons and official notices.'
      ],
      cta: 'Explore Student Experience'
    }
  };

  roleTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roleTabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const roleKey = btn.getAttribute('data-role');
      const d = roleData[roleKey];
      if (d) {
        if (roleTitle) roleTitle.textContent = d.title;
        if (roleOutcome) roleOutcome.textContent = d.outcome;
        if (roleAvatarTxt) roleAvatarTxt.textContent = d.avatar;
        if (roleUserName) roleUserName.textContent = d.name;
        if (roleUserTitle) roleUserTitle.textContent = d.roleTxt;
        if (roleBadgeTxt) roleBadgeTxt.textContent = d.badge;
        if (roleCtaBtn) roleCtaBtn.textContent = d.cta;

        if (rolePoints) {
          rolePoints.innerHTML = d.points.map(p => `
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${p}</span>
            </li>
          `).join('');
        }
      }
    });
  });

  // =========================================================================
  // 7. ACCESSIBLE FORM VALIDATION & SUBMISSION (Modern Web Guidance)
  // =========================================================================
  const leadForm = document.getElementById('lead-form');
  const successState = document.getElementById('form-success-state');
  const resetFormBtn = document.getElementById('reset-form-btn');
  const consentCheck = document.getElementById('consent-check');
  const consentError = document.getElementById('consent-error');
  const submitBtn = document.getElementById('submit-demo-btn');

  // Sync aria-invalid with CSS :user-invalid state for screen readers
  const syncAria = (el) => {
    if (el && typeof el.getAttribute === 'function') {
      const isUserInvalid = el.matches ? el.matches(':user-invalid') : false;
      el.setAttribute('aria-invalid', isUserInvalid ? 'true' : 'false');
    }
  };

  document.addEventListener('blur', (e) => {
    if (e.target && e.target.form === leadForm) {
      syncAria(e.target);
    }
  }, true);

  document.addEventListener('input', (e) => {
    if (e.target && e.target.hasAttribute && e.target.hasAttribute('aria-invalid')) {
      syncAria(e.target);
    }
    if (e.target === consentCheck && consentError) {
      consentError.style.display = consentCheck.checked ? 'none' : 'block';
    }
  });

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Check form validity
      let isValid = leadForm.checkValidity();

      if (!consentCheck.checked) {
        isValid = false;
        if (consentError) consentError.style.display = 'block';
        consentCheck.focus();
      } else {
        if (consentError) consentError.style.display = 'none';
      }

      if (!isValid) {
        // Trigger native reportValidity to focus first invalid control
        leadForm.reportValidity();
        return;
      }

      // Show loading state
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
        <span>Sending your enquiry...</span>
      `;

      // Simulated network submission
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;

        leadForm.style.display = 'none';
        if (successState) {
          successState.style.display = 'block';
          successState.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 700);
    });
  }

  if (resetFormBtn && leadForm && successState) {
    resetFormBtn.addEventListener('click', () => {
      leadForm.reset();
      leadForm.style.display = 'block';
      successState.style.display = 'none';
    });
  }

});

// Add CSS keyframes for loading spinner dynamically if needed
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);
