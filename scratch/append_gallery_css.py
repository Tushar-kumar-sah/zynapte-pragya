gallery_css = '''
/* VISUAL WORKBENCH & PHOTO FEATURE CARD */
.role-display-box--visual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 36px;
  background: #FFFFFF;
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.08);
}

.role-photo-feature-card {
  position: relative;
  width: 100%;
  height: 190px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
}

.role-feature-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  transition: transform 0.3s ease;
}

.role-photo-feature-card:hover .role-feature-photo-img {
  transform: scale(1.03);
}

.role-photo-badge-overlay {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(6px);
  color: #FFFFFF;
  font-size: 0.725rem;
  font-weight: 750;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* VISUAL ROLE GALLERY GRID */
.role-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.role-gallery-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
}

.role-gallery-card:hover {
  transform: translateY(-3px);
  border-color: #CBD5E1;
  box-shadow: 0 14px 28px -6px rgba(15, 23, 42, 0.1);
}

.role-gallery-img-box {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #F1F5F9;
}

.role-gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  transition: transform 0.4s ease;
}

.role-gallery-card:hover .role-gallery-img {
  transform: scale(1.04);
}

.role-gallery-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(6px);
  color: #0F172A;
  font-size: 0.725rem;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 4px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.role-gallery-content {
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.role-gallery-content h4 {
  font-size: 1.15rem;
  font-weight: 850;
  color: #0F172A;
  margin-bottom: 6px;
}

.role-gallery-content p {
  font-size: 0.85rem;
  color: #64748B;
  line-height: 1.45;
  margin-bottom: 14px;
}

.role-gallery-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: auto;
  margin-bottom: 16px;
}

.gallery-chip {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #334155;
}

.role-gallery-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  padding: 0;
  font-size: 0.85rem;
  font-weight: 750;
  color: #145EFF;
  cursor: pointer;
  transition: all 0.2s ease;
}

.role-gallery-action-btn:hover {
  color: #0A3DB8;
  transform: translateX(3px);
}

@media (max-width: 900px) {
  .role-display-box--visual {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  .role-gallery-grid {
    grid-template-columns: 1fr;
  }
}
'''

with open('src/index.css', 'a', encoding='utf-8') as f:
    f.write('\n\n' + gallery_css)

print('Appended gallery CSS successfully')
