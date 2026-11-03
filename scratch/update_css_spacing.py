with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update lines around .role-showcase-box
old_block1 = """.role-showcase-box {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 28px;
  margin-top: 36px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
}

.role-showcase-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 22px;
  padding-bottom: 18px;
  border-bottom: 1px solid #F1F5F9;
}

.role-showcase-tagline {
  font-size: 1.05rem;
  font-weight: 850;
  color: var(--color-ink);
}

.role-pills-row {
  display: inline-flex;
  background: #F1F5F9;
  padding: 4px;
  border-radius: 6px;
  gap: 4px;
  flex-wrap: wrap;
}

.role-pill-btn {
  border: none;
  background: transparent;
  padding: 7px 16px;
  border-radius: 6px;
  font-size: 0.725rem;
  font-weight: 750;
  letter-spacing: 0.04em;
  color: #64748B;
  cursor: pointer;
  transition: all 0.15s ease;
}

.role-pill-btn.active {
  background: #FFFFFF;
  color: #1D68D8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  font-weight: 850;
}

.role-showcase-detail {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  flex-wrap: wrap;
}"""

new_block1 = """.role-showcase-box {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 16px 20px;
  margin-top: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
}

.role-showcase-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid #F1F5F9;
}

.role-showcase-tagline {
  font-size: 0.95rem;
  font-weight: 850;
  color: var(--color-ink);
}

.role-pills-row {
  display: inline-flex;
  background: #F1F5F9;
  padding: 3px;
  border-radius: 6px;
  gap: 3px;
  flex-wrap: wrap;
}

.role-pill-btn {
  border: none;
  background: transparent;
  padding: 5px 12px;
  border-radius: 5px;
  font-size: 0.725rem;
  font-weight: 750;
  letter-spacing: 0.03em;
  color: #64748B;
  cursor: pointer;
  transition: all 0.15s ease;
}

.role-pill-btn.active {
  background: #FFFFFF;
  color: #1D68D8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  font-weight: 850;
}

.role-showcase-detail {
  display: flex;
  flex-direction: column;
  gap: 10px;
}"""

# 2. Update visual-first classes at bottom
old_block2 = """.role-detail-header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
}

.role-chips-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.role-capabilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  margin: 16px 0 14px;
}

.role-capability-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 12px 14px;
  transition: all 0.2s ease;
}

.role-capability-card:hover {
  background: #FFFFFF;
  border-color: #CBD5E1;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
}

.role-cap-icon-box {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.role-cap-text strong {
  display: block;
  font-size: 0.85rem;
  font-weight: 750;
  color: var(--color-ink);
  line-height: 1.25;
}

.role-cap-text small {
  display: block;
  font-size: 0.75rem;
  color: #64748B;
  margin-top: 2px;
  line-height: 1.35;
}"""

new_block2 = """.role-detail-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 14px;
  flex-wrap: wrap;
}

.role-heading-text h3 {
  font-size: 1.15rem;
  font-weight: 850;
  color: var(--color-ink);
  margin: 0 0 2px 0;
  line-height: 1.25;
}

.role-detail-outcome {
  font-size: 0.825rem;
  color: #64748B;
  margin: 0;
  line-height: 1.35;
}

.role-header-action {
  flex-shrink: 0;
}

.role-capabilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  margin: 2px 0 0;
}

.role-capability-card {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 9px 12px;
  transition: all 0.2s ease;
}

.role-capability-card:hover {
  background: #FFFFFF;
  border-color: #CBD5E1;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
}

.role-cap-icon-box {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.role-cap-text {
  flex: 1;
  min-width: 0;
}

.role-cap-top-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
}

.role-cap-text strong {
  display: block;
  font-size: 0.825rem;
  font-weight: 750;
  color: var(--color-ink);
  line-height: 1.2;
}

.role-cap-text small {
  display: block;
  font-size: 0.725rem;
  color: #64748B;
  margin-top: 1px;
  line-height: 1.3;
}

.role-micro-chip {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 650;
  padding: 1px 5px;
  background: #EFF6FF;
  color: #1D68D8;
  border: 1px solid #DBEAFE;
  border-radius: 4px;
  white-space: nowrap;
}"""

css_norm = css.replace('\r\n', '\n')
b1_norm = old_block1.replace('\r\n', '\n')
b2_norm = old_block2.replace('\r\n', '\n')

print("Block1 in CSS:", b1_norm in css_norm)
print("Block2 in CSS:", b2_norm in css_norm)

if b1_norm in css_norm and b2_norm in css_norm:
    css_norm = css_norm.replace(b1_norm, new_block1.replace('\r\n', '\n'))
    css_norm = css_norm.replace(b2_norm, new_block2.replace('\r\n', '\n'))
    with open('src/index.css', 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(css_norm)
    print("Successfully updated src/index.css")
else:
    print("FAILED to find blocks")
