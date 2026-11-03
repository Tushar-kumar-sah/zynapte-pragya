# append_security_css.py
css_content = """
/* ==========================================================================
   SECURITY & HOSTING PAGE ENHANCEMENTS (VISUAL-FIRST, 6-8PX CRISP CORNERS)
   ========================================================================== */

/* Security Hero Command Center */
.security-command-center {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
}

.security-top-badge,
.security-bottom-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #FFFFFF;
  border: 1px solid var(--color-slate-200);
  border-radius: 6px;
  padding: 6px 14px;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-ink);
  box-shadow: var(--shadow-sm);
  width: fit-content;
}

.security-bottom-badge {
  color: var(--color-blue);
  background: #EFF6FF;
  border-color: #BFDBFE;
}

.security-command-window {
  background: #FFFFFF;
  border: 1px solid var(--color-slate-200);
  border-radius: 8px;
  box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04);
  overflow: hidden;
}

.security-window-bar {
  background: #0F172A;
  color: #FFFFFF;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.security-window-dots {
  display: flex;
  gap: 6px;
}

.security-window-dots .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.security-window-dots .dot--red { background: #EF4444; }
.security-window-dots .dot--yellow { background: #F59E0B; }
.security-window-dots .dot--green { background: #10B981; }

.security-window-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #E2E8F0;
  letter-spacing: 0.02em;
}

.security-live-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(16, 185, 129, 0.15);
  color: #10B981;
  border: 1px solid rgba(16, 185, 129, 0.3);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 800;
}

.pulsing-green-dot {
  width: 6px;
  height: 6px;
  background: #10B981;
  border-radius: 50%;
  box-shadow: 0 0 6px #10B981;
  animation: pulseGreen 2s infinite ease-in-out;
}

@keyframes pulseGreen {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

.security-kpi-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid var(--color-slate-200);
  background: #F8FAFC;
}

.security-kpi-cell {
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-right: 1px solid var(--color-slate-200);
}

.security-kpi-cell:last-child {
  border-right: none;
}

.sec-kpi-label {
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: var(--color-slate-400);
}

.sec-kpi-value {
  font-size: 0.95rem;
  font-weight: 850;
  color: var(--color-ink);
}

.sec-kpi-value.text-blue { color: var(--color-blue); }
.sec-kpi-value.text-emerald { color: #059669; }
.sec-kpi-value.text-violet { color: #742DDA; }

.sec-kpi-sub {
  font-size: 0.7rem;
  color: var(--color-slate-500);
  font-weight: 500;
}

/* Gatekeeper Box */
.security-gatekeeper-box {
  padding: 16px;
}

.gatekeeper-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.gatekeeper-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--color-ink);
}

.gatekeeper-hint {
  font-size: 0.72rem;
  color: var(--color-slate-400);
}

.gatekeeper-tabs {
  display: flex;
  gap: 6px;
  background: var(--color-slate-100);
  padding: 4px;
  border-radius: 6px;
  margin-bottom: 14px;
}

.gatekeeper-tab-btn {
  flex: 1;
  padding: 6px 10px;
  border: none;
  background: transparent;
  color: var(--color-slate-600);
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: center;
}

.gatekeeper-tab-btn:hover {
  color: var(--color-ink);
}

.gatekeeper-tab-btn.active {
  background: #FFFFFF;
  color: var(--color-blue);
  box-shadow: var(--shadow-sm);
}

.gatekeeper-matrix {
  background: #F8FAFC;
  border: 1px solid var(--color-slate-200);
  border-radius: 6px;
  padding: 14px;
}

.gatekeeper-role-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px dashed var(--color-slate-200);
}

.role-summary-name {
  font-size: 0.85rem;
  font-weight: 850;
  color: var(--color-ink);
}

.role-summary-badge {
  font-size: 0.7rem;
  font-weight: 750;
  padding: 2px 8px;
  border-radius: 4px;
}

.gatekeeper-items-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.gate-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.78rem;
  gap: 12px;
}

.gate-item-label {
  color: var(--color-slate-600);
  font-weight: 600;
}

.gate-item-status {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  font-weight: 750;
  padding: 3px 8px;
  border-radius: 4px;
}

.gate-item-status.status--allow {
  background: #ECFDF5;
  color: #059669;
  border: 1px solid #A7F3D0;
}

.gate-item-status.status--block {
  background: #FEF2F2;
  color: #DC2626;
  border: 1px solid #FECACA;
}

.security-command-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: var(--color-slate-50);
  border-top: 1px solid var(--color-slate-200);
  font-size: 0.72rem;
  color: var(--color-slate-600);
}

.footer-seal-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 650;
}

/* Security Gallery Grid (Images Rather Than Wall of Text) */
.security-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 32px;
}

@media (max-width: 840px) {
  .security-gallery-grid {
    grid-template-columns: 1fr;
  }
}

.security-gallery-card {
  background: #FFFFFF;
  border: 1px solid var(--color-slate-200);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.security-gallery-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: #CBD5E1;
}

.security-gallery-img-box {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #0F172A;
}

.security-gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.security-gallery-card:hover .security-gallery-img {
  transform: scale(1.02);
}

.security-gallery-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #FFFFFF;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 750;
  letter-spacing: 0.02em;
}

.security-gallery-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.security-gallery-content h4 {
  font-size: 1.15rem;
  font-weight: 850;
  color: var(--color-ink);
  margin-bottom: 6px;
}

.security-gallery-content p {
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.5;
  margin-bottom: 16px;
  flex: 1;
}

.security-gallery-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.sec-chip {
  background: var(--color-slate-100);
  color: var(--color-slate-700);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid var(--color-slate-200);
}

/* Interactive Audit Terminal */
.security-audit-terminal {
  max-width: 880px;
  margin: 0 auto;
  background: #FFFFFF;
  border: 1px solid var(--color-slate-200);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.audit-terminal-header {
  background: #0F172A;
  color: #FFFFFF;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.audit-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.audit-header-title {
  font-size: 0.85rem;
  font-weight: 800;
  color: #F8FAFC;
}

.audit-filter-bar {
  display: flex;
  gap: 6px;
  padding: 10px 16px;
  background: var(--color-slate-50);
  border-bottom: 1px solid var(--color-slate-200);
  overflow-x: auto;
}

.audit-filter-btn {
  padding: 5px 12px;
  border: 1px solid var(--color-slate-200);
  background: #FFFFFF;
  color: var(--color-slate-600);
  font-size: 0.72rem;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.audit-filter-btn:hover {
  background: var(--color-slate-100);
  color: var(--color-ink);
}

.audit-filter-btn.active {
  background: var(--color-blue);
  color: #FFFFFF;
  border-color: var(--color-blue);
}

.audit-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8125rem;
}

.audit-table th {
  padding: 10px 14px;
  background: #FFFFFF;
  color: var(--color-slate-500);
  font-weight: 700;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-bottom: 1px solid var(--color-slate-200);
  text-align: left;
}

.audit-table td {
  padding: 12px 14px;
  border-bottom: 1px solid var(--color-slate-100);
}

.audit-table tr:hover td {
  background: #F8FAFC;
}

.audit-verify-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18px;
  background: var(--color-slate-50);
  border-top: 1px solid var(--color-slate-200);
  font-size: 0.72rem;
  color: var(--color-slate-600);
  flex-wrap: wrap;
  gap: 8px;
}

.verify-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #FFFFFF;
  border: 1px solid var(--color-slate-300);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--color-ink);
  cursor: pointer;
  transition: all 0.15s ease;
}

.verify-action-btn:hover {
  border-color: #059669;
  color: #059669;
}

/* Hosting Deployment Comparison */
.hosting-compare-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 32px;
}

@media (max-width: 768px) {
  .hosting-compare-container {
    grid-template-columns: 1fr;
  }
}

.hosting-option-card {
  background: #FFFFFF;
  border: 1px solid var(--color-slate-200);
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.hosting-option-card.card--recommended {
  border: 2px solid var(--color-blue);
  position: relative;
}

.hosting-rec-badge {
  position: absolute;
  top: -12px;
  left: 24px;
  background: var(--color-blue);
  color: #FFFFFF;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 2px 10px;
  border-radius: 4px;
  letter-spacing: 0.04em;
}

.hosting-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.hosting-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hosting-title-box h3 {
  font-size: 1.15rem;
  font-weight: 850;
  color: var(--color-ink);
  margin-bottom: 2px;
}

.hosting-title-box span {
  font-size: 0.75rem;
  color: var(--color-slate-500);
  font-weight: 600;
}

.hosting-checklist {
  list-style: none;
  padding: 0;
  margin: 18px 0 24px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.hosting-checklist li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.83rem;
  color: var(--color-slate-700);
}

.hosting-checklist li strong {
  color: var(--color-ink);
}
"""

with open('src/index.css', 'r', encoding='utf-8') as f:
    orig = f.read()

if 'SECURITY & HOSTING PAGE ENHANCEMENTS' not in orig:
    with open('src/index.css', 'a', encoding='utf-8') as f:
        f.write('\n' + css_content)
    print('Appended security CSS successfully')
else:
    print('Security CSS already present')
