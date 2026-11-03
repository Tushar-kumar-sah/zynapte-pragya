# Update Home.jsx
with open('src/pages/Home.jsx', 'r', encoding='utf-8') as f:
    home_src = f.read()

old_showcase_detail = """            <div className="role-showcase-detail">
              <div className="role-detail-header-row">
                <div>
                  <h3>{role.title}</h3>
                  <p className="role-detail-outcome">{role.outcome}</p>
                </div>
                <div className="role-chips-row">
                  {role.chips?.map((chip, idx) => (
                    <span key={idx} className="badge badge--slate">{chip}</span>
                  ))}
                </div>
              </div>

              {/* Visual 3-Capability Grid with Icons */}
              <div className="role-capabilities-grid">
                {role.features?.map((feat, idx) => (
                  <div key={idx} className="role-capability-card">
                    <div className="role-cap-icon-box">
                      {renderRoleIcon(feat.icon)}
                    </div>
                    <div className="role-cap-text">
                      <strong>{feat.title}</strong>
                      <small>{feat.desc}</small>
                    </div>
                  </div>
                ))}
              </div>

              <div className="role-detail-action" style={{ marginTop: '6px' }}>
                <Link to="/solutions" className="btn btn--secondary btn--sm">
                  {role.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>"""

new_showcase_detail = """            <div className="role-showcase-detail">
              <div className="role-detail-header-row">
                <div className="role-heading-text">
                  <h3>{role.title}</h3>
                  <p className="role-detail-outcome">{role.outcome}</p>
                </div>
                <div className="role-header-action">
                  <Link to="/solutions" className="btn btn--secondary btn--sm">
                    {role.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Visual 3-Capability Grid with Integrated Micro Badges */}
              <div className="role-capabilities-grid">
                {role.features?.map((feat, idx) => (
                  <div key={idx} className="role-capability-card">
                    <div className="role-cap-icon-box">
                      {renderRoleIcon(feat.icon)}
                    </div>
                    <div className="role-cap-text">
                      <div className="role-cap-top-line">
                        <strong>{feat.title}</strong>
                        {role.chips?.[idx] && (
                          <span className="role-micro-chip">{role.chips[idx]}</span>
                        )}
                      </div>
                      <small>{feat.desc}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>"""

if old_showcase_detail.replace('\r\n', '\n') in home_src.replace('\r\n', '\n'):
    home_src_norm = home_src.replace('\r\n', '\n').replace(
        old_showcase_detail.replace('\r\n', '\n'),
        new_showcase_detail.replace('\r\n', '\n')
    )
    with open('src/pages/Home.jsx', 'w', encoding='utf-8', newline='\r\n') as f:
        f.write(home_src_norm)
    print("Updated Home.jsx successfully")
else:
    print("WARNING: old_showcase_detail not found in Home.jsx")
