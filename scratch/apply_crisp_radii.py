import os
import re

css_path = 'src/index.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update :root variables
root_old = """  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;"""

root_new = """  --radius-xs: 3px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 8px;
  --radius-full: 6px;"""

if root_old in css:
    css = css.replace(root_old, root_new)
    print("Updated :root radius variables successfully")
else:
    print("WARNING: root_old not found directly, checking regex")
    css = re.sub(r'--radius-md:\s*10px;', '--radius-md: 6px;', css)
    css = re.sub(r'--radius-lg:\s*16px;', '--radius-lg: 8px;', css)
    css = re.sub(r'--radius-xl:\s*24px;', '--radius-xl: 8px;', css)
    css = re.sub(r'--radius-full:\s*9999px;', '--radius-full: 6px;', css)
    print("Updated :root via regex")

# 2. Replace hardcoded 9999px with 6px in index.css (except when followed by anything unexpected)
css = css.replace('9999px', '6px')

# 3. Replace card and button hardcoded radii:
# 18px -> 8px
css = re.sub(r'border-radius:\s*18px', 'border-radius: 8px', css)
# 16px -> 8px (unless it's something else)
css = re.sub(r'border-radius:\s*16px', 'border-radius: 8px', css)
# 14px -> 6px
css = re.sub(r'border-radius:\s*14px', 'border-radius: 6px', css)
# 12px -> 6px
css = re.sub(r'border-radius:\s*12px', 'border-radius: 6px', css)
# 10px -> 6px
css = re.sub(r'border-radius:\s*10px', 'border-radius: 6px', css)
# 9px -> 5px
css = re.sub(r'border-radius:\s*9px', 'border-radius: 5px', css)
# 0 0 20px 20px -> 0 0 8px 8px
css = css.replace('0 0 20px 20px', '0 0 8px 8px')
# 44px, 36px, 34px (phone bezel) -> 16px
css = re.sub(r'border-radius:\s*44px', 'border-radius: 16px', css)
css = re.sub(r'border-radius:\s*36px', 'border-radius: 14px', css)
css = re.sub(r'border-radius:\s*34px', 'border-radius: 14px', css)

# 4. Add explicit modern crisp edge overrides at the end of CSS
crisp_override = """

/* ==========================================================================
   CLEAN & CRISP ENTERPRISE BORDER RADIUS SYSTEM
   Ensures all cards, buttons, badges and inputs have subtle modern corners (4px - 8px)
   and eliminates excessively rounded / pill-shaped edges.
   ========================================================================== */

/* Buttons: Crisp 6px edges */
.btn,
.btn--primary,
.btn--secondary,
.btn--accent-gradient,
.btn--sm,
.btn--lg,
.btn--block,
.nav-demo-btn,
.nav-wa-btn,
.role-pill-btn,
.module-filter-btn,
.role-tab-btn,
.mobile-tab-btn,
.mockup-tab-btn,
.segmented-tab-btn,
.hamburger-btn {
  border-radius: 6px !important;
}

/* Cards & Mockup Containers: Clean 8px corners */
.erp-mockup,
.core-module-card,
.feature-card,
.page3-card,
.advantage-feature-card,
.brochure-payslip-card,
.stat-box-card,
.security-card,
.journey-step-card,
.apaar-status-card,
.faq-item,
.demo-card-container,
.bottom-cta-card,
.role-showcase-box,
.iconic-card,
.pricing-card,
.pricing-tier-card,
.benefit-icon-box,
.indian-schools-strip,
.multi-campus-banner,
.simulated-idcard,
.workflow-step-card {
  border-radius: 8px !important;
}

/* Sub-cards, inner boxes & inputs: 6px corners */
.mockup-subcard,
.mockup-apaar-panel,
.brochure-receipt,
.brochure-library,
.pillar-bottom-card,
.value-pillar-card,
.app-metric-card,
.app-task-card,
.form-control,
.table-filter-select,
.table-search-input,
.role-pills-row,
.payslip-category-bar {
  border-radius: 6px !important;
}

/* Tags, Badges & Pills: Refined 4px - 6px subtle badges instead of giant pills */
.eyebrow,
.dropdown-badge,
.badge,
.strip-tag,
.board-pill,
.faculty-badge,
.receipt-badge,
.subcard-badge,
.status-pill,
.status-tag,
.brand-logo-pill,
.mockup-address-pill,
.mockup-gov-tag,
.mockup-branch-badge,
.mockup-tab-badge,
.feature-card-tag,
.stat-metric-pill,
.bottom-cta-badge,
.hero-floating-badge {
  border-radius: 5px !important;
}
"""

css += crisp_override

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated src/index.css with clean & crisp border radius system")

# 5. Update JSX files
jsx_files = [
    'src/pages/AcademicsTimetable.jsx',
    'src/pages/AdmissionManagement.jsx',
    'src/pages/AttendanceManagement.jsx',
    'src/pages/ExamResultManagement.jsx',
    'src/pages/FeesManagement.jsx',
    'src/pages/PricingEnquiry.jsx',
    'src/pages/SecurityHosting.jsx',
    'src/pages/AboutPragya.jsx',
    'src/pages/ContactBookDemo.jsx',
    'src/pages/SchoolCommunication.jsx',
    'src/pages/MultiBranchManagement.jsx',
    'src/pages/StaffPayrollManagement.jsx'
]

for p in jsx_files:
    if os.path.exists(p):
        with open(p, 'r', encoding='utf-8') as f:
            content = f.read()
        content = content.replace("'999px'", "'6px'")
        content = content.replace('"999px"', '"6px"')
        content = content.replace("'12px'", "'6px'")
        content = content.replace('"12px"', '"6px"')
        content = content.replace("'10px'", "'6px'")
        content = content.replace('"10px"', '"6px"')
        with open(p, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated JSX: {p}")
