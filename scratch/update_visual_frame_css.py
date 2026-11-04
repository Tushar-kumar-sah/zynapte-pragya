import re

css_path = r'c:\Users\sah05\OneDrive\Desktop\pragya\src\index.css'

with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

pattern = re.compile(
    r'(/\* Exact Fee Receipt Mockup from Page 3 \*/[\s\S]*?)(/\* Visual Capability Chips \*/)',
    re.MULTILINE
)

replacement = '''/* Visual Showcase Frame & Realistic Photography for Page 3 */
.page3-visual-frame {
  position: relative;
  width: 100%;
  height: 290px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 16px;
  border: 1px solid rgba(226, 232, 240, 0.95);
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
  background: #0F172A;
}

.page3-showcase-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.page3-card:hover .page3-showcase-img {
  transform: scale(1.03);
}

.page3-img-overlay {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  pointer-events: none;
  z-index: 2;
}

.page3-img-overlay--top {
  top: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.72) 0%, rgba(15, 23, 42, 0) 100%);
}

.page3-img-overlay--bottom {
  bottom: 0;
  background: linear-gradient(0deg, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0) 100%);
}

.page3-overlay-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.6875rem;
  font-weight: 850;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  letter-spacing: 0.03em;
  backdrop-filter: blur(8px);
}

.page3-overlay-chip--success {
  background: rgba(34, 197, 94, 0.92);
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(34, 197, 94, 0.35);
}

.page3-overlay-chip--teal {
  background: rgba(13, 148, 136, 0.92);
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(13, 148, 136, 0.35);
}

.page3-overlay-tag {
  font-size: 0.65rem;
  font-weight: 800;
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(8px);
  padding: 3px 8px;
  border-radius: 4px;
  letter-spacing: 0.04em;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.page3-overlay-tag--teal {
  background: rgba(13, 148, 136, 0.45);
  border-color: rgba(94, 234, 212, 0.35);
}

.page3-overlay-amount-pill {
  display: flex;
  flex-direction: column;
  background: rgba(15, 23, 42, 0.78);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px 12px;
  border-radius: 6px;
}

.page3-overlay-amount-pill .overlay-amount-label {
  font-size: 0.58rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.page3-overlay-amount-pill .overlay-amount-val {
  font-size: 0.95rem;
  font-weight: 900;
  color: #34D399;
  letter-spacing: -0.01em;
}

.page3-overlay-amount-pill--teal .overlay-amount-val {
  color: #2DD4BF;
}

.page3-overlay-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 800;
  color: #FFFFFF;
  background: rgba(15, 23, 42, 0.78);
  backdrop-filter: blur(8px);
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.page3-overlay-badge--orange {
  border-left: 3px solid #EA580C;
}

.page3-overlay-badge--teal {
  border-left: 3px solid #0D9488;
}

.page3-card-action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  padding: 10px 14px;
  margin-bottom: 18px;
  gap: 12px;
  flex-wrap: wrap;
}

.page3-action-note {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.725rem;
  color: #475569;
  font-weight: 650;
  flex: 1;
}

.page3-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 800;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 0.775rem;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  white-space: nowrap;
}

.page3-cta-btn--fees {
  background: linear-gradient(135deg, #F97316 0%, #EA580C 100%) !important;
  color: #FFFFFF !important;
  border: none !important;
}

.page3-cta-btn--fees:hover {
  background: linear-gradient(135deg, #EA580C 0%, #C2410C 100%) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(234, 88, 12, 0.38) !important;
}

.page3-cta-btn--library {
  background: linear-gradient(135deg, #0D9488 0%, #059669 100%) !important;
  color: #FFFFFF !important;
  border: none !important;
}

.page3-cta-btn--library:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(13, 148, 136, 0.38) !important;
}

'''

if pattern.search(css_content):
    css_content = pattern.sub(replacement + r'\2', css_content)
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css_content)
    print("SUCCESS: index.css updated with visual frame styles!")
else:
    print("ERROR: pattern did not match in index.css")
