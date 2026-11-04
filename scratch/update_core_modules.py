import re

def update_home_jsx():
    path = 'src/pages/Home.jsx'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update imports
    old_imports = """import { 
  ArrowRight, CheckCircle2, Shield, Users, Calendar, 
  CreditCard, Award, Sparkles, Check, Lock, ShieldCheck, 
  Database, Cloud, MessageSquare, UserPlus, BookOpen, 
  FileText, Library, Send, Building2, Sun, Moon, Laptop, 
  Eye, ChevronRight, Phone, BarChart3, Settings, Layers, 
  UserCheck, FileUp, Search, Receipt, CalendarCheck, 
  ScanLine, Printer, FileSpreadsheet, Smartphone, Clock
} from 'lucide-react';"""

    new_imports = """import { 
  ArrowRight, CheckCircle2, Shield, Users, Calendar, 
  CreditCard, Award, Sparkles, Check, Lock, ShieldCheck, 
  Database, Cloud, MessageSquare, UserPlus, BookOpen, 
  FileText, Library, Send, Building2, Sun, Moon, Laptop, 
  Eye, ChevronRight, Phone, BarChart3, Settings, Layers, 
  UserCheck, FileUp, Search, Receipt, CalendarCheck, 
  ScanLine, Printer, FileSpreadsheet, Smartphone, Clock,
  CalendarCheck2, BookOpenCheck, GraduationCap, WalletCards, LibraryBig, Network
} from 'lucide-react';"""

    if old_imports in content:
        content = content.replace(old_imports, new_imports)
    else:
        # fallback regex or string replace
        content = re.sub(
            r"import \{[^}]+Clock\s*\} from 'lucide-react';",
            new_imports,
            content
        )

    # 2. Update coreNineModules array
    old_modules_pattern = re.compile(r'const coreNineModules = \[[\s\S]*?\];\s*(?=\/\/\s*Active Payslip)', re.MULTILINE)

    new_modules_code = """const coreNineModules = [
    {
      id: 'admissions',
      num: '01',
      title: 'Admissions & CRM',
      subtitle: 'Streamline enquiry intake, verification, fee collection, and 1-click student enrolment.',
      icon: <UserCheck size={26} color="#FFFFFF" />,
      accent: '#1D68D8',
      rgb: '29, 104, 216',
      gradient: 'linear-gradient(135deg, #1D68D8 0%, #3B82F6 100%)',
      badge: 'ENROLMENT CRM',
      chips: ['Lead Pipeline', 'Aadhaar Check', 'Auto Roll No'],
      path: '/student-management'
    },
    {
      id: 'attendance',
      num: '02',
      title: 'Attendance & Leave',
      subtitle: '1-Tap classroom roll call, biometric sync, and instant WhatsApp absence alerts to parents.',
      icon: <CalendarCheck2 size={26} color="#FFFFFF" />,
      accent: '#6F3B9C',
      rgb: '111, 59, 156',
      gradient: 'linear-gradient(135deg, #6F3B9C 0%, #8B5CF6 100%)',
      badge: 'REAL-TIME TRACKING',
      chips: ['1-Tap Roll Call', 'WhatsApp SMS', 'Leave Workflow'],
      path: '/attendance-management'
    },
    {
      id: 'academics',
      num: '03',
      title: 'Academics & Timetables',
      subtitle: 'Interactive clash-free timetable scheduler with 1-click substitute teacher assignments.',
      icon: <BookOpenCheck size={26} color="#FFFFFF" />,
      accent: '#D97706',
      rgb: '217, 119, 6',
      gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
      badge: 'ZERO-CLASH GRID',
      chips: ['ICSE & CBSE Ready', 'Smart Substitution', 'Room Balancer'],
      path: '/academics-timetable'
    },
    {
      id: 'exams',
      num: '04',
      title: 'Exams & Report Cards',
      subtitle: 'Co-scholastic grading, marksheet calculations, and batch printing of board-format report cards.',
      icon: <GraduationCap size={26} color="#FFFFFF" />,
      accent: '#059669',
      rgb: '5, 150, 105',
      gradient: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
      badge: 'BOARD EVALUATION',
      chips: ['ICSE / CBSE Scales', '1-Click Batch PDF', 'Co-Scholastic'],
      path: '/exam-result-management'
    },
    {
      id: 'fees',
      num: '05',
      title: 'Counter Fees & POS',
      subtitle: '3-Second thermal slips, customer-facing dynamic UPI QR, and automated sibling discount rules.',
      icon: <Receipt size={26} color="#FFFFFF" />,
      accent: '#EF424B',
      rgb: '239, 66, 75',
      gradient: 'linear-gradient(135deg, #EF424B 0%, #F43F5E 100%)',
      badge: 'CASH & DYNAMIC UPI',
      chips: ['3-Sec Slip Print', 'Dynamic UPI QR', 'Head-Wise Ledger'],
      path: '/fees-management'
    },
    {
      id: 'payroll',
      num: '06',
      title: 'Staff, HR & Payroll',
      subtitle: 'EPF, ESI & PTax statutory deductions, biometric attendance sync, and instant salary slip batches.',
      icon: <WalletCards size={26} color="#FFFFFF" />,
      accent: '#0D9488',
      rgb: '13, 148, 136',
      gradient: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)',
      badge: 'STATUTORY SALARY',
      chips: ['EPF & PTax Ready', 'Bank NEFT Batch', 'Payslip Generator'],
      path: '/staff-payroll-management'
    },
    {
      id: 'library',
      num: '07',
      title: 'Digital Library Catalogue',
      subtitle: 'Barcode accession cataloguing, NCERT curriculum search, and automatic overdue fine alerts.',
      icon: <LibraryBig size={26} color="#FFFFFF" />,
      accent: '#0284C7',
      rgb: '2, 132, 199',
      gradient: 'linear-gradient(135deg, #0284C7 0%, #06B6D4 100%)',
      badge: 'ACCESSION CATALOGUE',
      chips: ['Barcode Scanner', 'NCERT Book Index', 'Overdue Tracking'],
      path: '/features'
    },
    {
      id: 'communication',
      num: '08',
      title: 'School Communication',
      subtitle: 'Official circulars, emergency holiday broadcasts, exam schedules, and parent announcements.',
      icon: <Send size={26} color="#FFFFFF" />,
      accent: '#7C3AED',
      rgb: '124, 58, 237',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
      badge: 'PARENT BROADCAST',
      chips: ['WhatsApp Push', 'Circular Manager', 'SMS Fallback'],
      path: '/school-communication'
    },
    {
      id: 'multi-branch',
      num: '09',
      title: 'Multi-Branch Group ERP',
      subtitle: '1-Click executive campus switcher with segregated accounting ledgers and group-wide MIS.',
      icon: <Network size={26} color="#FFFFFF" />,
      accent: '#EA580C',
      rgb: '234, 88, 12',
      gradient: 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
      badge: 'INSTITUTIONAL CHAINS',
      chips: ['1-Click Switcher', 'Separate Books', 'Unified MIS'],
      path: '/multi-branch-management'
    }
  ];"""

    content = old_modules_pattern.sub(new_modules_code + "\n\n  ", content)

    # 3. Update the section rendering
    old_section_render = re.compile(
        r'<div className="core-nine-modules-grid">[\s\S]*?<\/div>\s*(?=\{\/\*\s*Role Switcher)',
        re.MULTILINE
    )

    new_section_render = """<div className="core-nine-modules-grid">
            {coreNineModules.map((mod) => (
              <Link 
                to={mod.path} 
                key={mod.id} 
                className="core-module-card"
                style={{ 
                  '--mod-accent': mod.accent, 
                  '--mod-rgb': mod.rgb,
                  '--mod-gradient': mod.gradient 
                }}
              >
                {/* Top Row: Vibrant Gradient Icon & Step Pill */}
                <div className="core-module-header">
                  <div className="core-module-icon-tile" style={{ background: mod.gradient }}>
                    {mod.icon}
                  </div>
                  <div className="core-module-badge-wrap">
                    <span className="core-module-num">{mod.num}</span>
                    <span className="core-module-pill">{mod.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="core-module-content">
                  <h3 className="core-module-title">{mod.title}</h3>
                  <p className="core-module-desc">{mod.subtitle}</p>
                </div>

                {/* Feature Micro-Chips */}
                <div className="core-module-chips">
                  {mod.chips.map((chip, idx) => (
                    <span key={idx} className="core-module-chip">
                      <span className="core-module-chip-dot" />
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Interactive Bottom Action Bar with Animated Arrow */}
                <div className="core-module-footer">
                  <span className="core-module-cta-text">Explore Module</span>
                  <div className="core-module-arrow-btn">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Connected OS Ribbon */}
          <div className="core-modules-integration-ribbon">
            <div className="integration-ribbon-item">
              <span className="ribbon-glow-dot" style={{ background: '#1D68D8', boxShadow: '0 0 8px #1D68D8' }} />
              <span><strong>Unified Single Ledger:</strong> Zero manual retyping across desks</span>
            </div>
            <div className="integration-ribbon-sep" />
            <div className="integration-ribbon-item">
              <span className="ribbon-glow-dot" style={{ background: '#059669', boxShadow: '0 0 8px #059669' }} />
              <span><strong>Instant Board Exports:</strong> 100% ICSE &amp; CBSE compliant</span>
            </div>
            <div className="integration-ribbon-sep" />
            <div className="integration-ribbon-item">
              <span className="ribbon-glow-dot" style={{ background: '#EF424B', boxShadow: '0 0 8px #EF424B' }} />
              <span><strong>Zero-Leak Privacy:</strong> Strict role-isolated data boundaries</span>
            </div>
          </div>\n\n          """

    content = old_section_render.sub(new_section_render, content)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Updated Home.jsx successfully!')

def update_index_css():
    path = 'src/index.css'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match old core-nine-modules CSS
    old_css_pattern = re.compile(
        r'\.core-nine-modules-grid\s*\{[\s\S]*?\.core-module-card:hover \.core-module-arrow\s*\{[\s\S]*?\}',
        re.MULTILINE
    )

    new_css = """/* ==========================================================================
   ENHANCED CORE 9 ERP MODULES GRID (VIBRANT, EYE-CATCHING & INTERACTIVE)
   ========================================================================== */
.core-nine-modules-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-bottom: 24px;
}

@media (max-width: 1024px) {
  .core-nine-modules-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }
}

@media (max-width: 640px) {
  .core-nine-modules-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.core-module-card {
  background: #FFFFFF;
  border: 1px solid var(--color-slate-200);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(23, 37, 82, 0.04);
  position: relative;
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
              border-color 0.25s ease,
              background 0.25s ease;
}

/* Vibrant Top Accent Stripe */
.core-module-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--mod-gradient);
  transition: height 0.2s ease;
}

/* Subtle corner radial glow on hover */
.core-module-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 10% 10%, rgba(var(--mod-rgb), 0.07) 0%, rgba(255, 255, 255, 0) 70%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.core-module-card:hover {
  transform: translateY(-5px);
  border-color: rgba(var(--mod-rgb), 0.45);
  box-shadow: 0 16px 32px rgba(23, 37, 82, 0.08), 0 4px 14px rgba(var(--mod-rgb), 0.15);
}

.core-module-card:hover::before {
  height: 5px;
}

.core-module-card:hover::after {
  opacity: 1;
}

/* Card Header: Icon tile & Module number/badge */
.core-module-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  position: relative;
  z-index: 1;
}

.core-module-icon-tile {
  width: 52px;
  height: 52px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(var(--mod-rgb), 0.28);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.25s ease;
}

.core-module-card:hover .core-module-icon-tile {
  transform: scale(1.08) rotate(-2deg);
  box-shadow: 0 12px 24px rgba(var(--mod-rgb), 0.4);
}

.core-module-badge-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.core-module-num {
  font-size: 0.8125rem;
  font-weight: 850;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: var(--color-slate-400);
  letter-spacing: 0.05em;
}

.core-module-pill {
  font-size: 0.6875rem;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(var(--mod-rgb), 0.08);
  color: var(--mod-accent);
  border: 1px solid rgba(var(--mod-rgb), 0.2);
}

/* Content Area */
.core-module-content {
  flex: 1;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

.core-module-title {
  font-size: 1.15rem;
  font-weight: 850;
  color: var(--color-ink);
  margin-bottom: 8px;
  line-height: 1.25;
  transition: color 0.2s ease;
}

.core-module-card:hover .core-module-title {
  color: var(--mod-accent);
}

.core-module-desc {
  font-size: 0.875rem;
  color: var(--color-slate-600);
  line-height: 1.5;
  margin: 0;
}

/* Feature Micro-Chips */
.core-module-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
  position: relative;
  z-index: 1;
}

.core-module-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.725rem;
  font-weight: 600;
  color: var(--color-slate-700);
  background: var(--color-slate-50);
  border: 1px solid var(--color-slate-200);
  border-radius: 4px;
  padding: 3px 8px;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.core-module-card:hover .core-module-chip {
  background: #FFFFFF;
  border-color: rgba(var(--mod-rgb), 0.3);
}

.core-module-chip-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--mod-accent);
}

/* Interactive Footer with Arrow */
.core-module-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid var(--color-slate-100);
  position: relative;
  z-index: 1;
}

.core-module-cta-text {
  font-size: 0.8125rem;
  font-weight: 750;
  color: var(--color-slate-700);
  transition: color 0.2s ease;
}

.core-module-card:hover .core-module-cta-text {
  color: var(--mod-accent);
}

.core-module-arrow-btn {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-slate-100);
  color: var(--color-slate-600);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.core-module-card:hover .core-module-arrow-btn {
  background: var(--mod-gradient);
  color: #FFFFFF;
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(var(--mod-rgb), 0.35);
}

/* Interconnected OS Ribbon */
.core-modules-integration-ribbon {
  background: linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%);
  border: 1px solid var(--color-slate-200);
  border-radius: 8px;
  padding: 14px 24px;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 0.875rem;
  color: var(--color-slate-700);
  box-shadow: 0 2px 6px rgba(23, 37, 82, 0.03);
}

.integration-ribbon-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ribbon-glow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.integration-ribbon-sep {
  width: 1px;
  height: 20px;
  background: var(--color-slate-300);
}

@media (max-width: 768px) {
  .integration-ribbon-sep {
    display: none;
  }
  .core-modules-integration-ribbon {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}"""

    if old_css_pattern.search(content):
        content = old_css_pattern.sub(new_css, content)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated index.css successfully!')
    else:
        print('Could not find old_css_pattern in index.css! Check regex.')

if __name__ == '__main__':
    update_home_jsx()
    update_index_css()
