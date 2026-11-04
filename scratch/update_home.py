with open("src/pages/Home.jsx", "r", encoding="utf-8") as f:
    content = f.read()

target = """          {/* Connected OS Ribbon */}
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
          </div>

          {/* Role Switcher: "One system. Every role." */}
          <div className="role-showcase-box">
            <div className="role-showcase-top">
              <span className="role-showcase-tagline">One system. Every role.</span>
              <div className="role-pills-row" role="tablist">
                <button 
                  className={`role-pill-btn ${selectedRole === 'principal' ? 'active' : ''}`}
                  onClick={() => setSelectedRole('principal')}
                >
                  PRINCIPALS
                </button>
                <button 
                  className={`role-pill-btn ${selectedRole === 'administrator' ? 'active' : ''}`}
                  onClick={() => setSelectedRole('administrator')}
                >
                  ADMINISTRATORS
                </button>
                <button 
                  className={`role-pill-btn ${selectedRole === 'teacher' ? 'active' : ''}`}
                  onClick={() => setSelectedRole('teacher')}
                >
                  TEACHERS
                </button>
                <button 
                  className={`role-pill-btn ${selectedRole === 'accountant' ? 'active' : ''}`}
                  onClick={() => setSelectedRole('accountant')}
                >
                  ACCOUNTS
                </button>
                <button 
                  className={`role-pill-btn ${selectedRole === 'hr' ? 'active' : ''}`}
                  onClick={() => setSelectedRole('hr')}
                >
                  HR
                </button>
              </div>
            </div>

            <div className="role-showcase-detail">
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
            </div>
          </div>"""

replacement = """          {/* Connected OS Ribbon - STRICTLY SINGLE LINE */}
          <div className="core-modules-integration-ribbon">
            <div className="integration-ribbon-item">
              <span className="ribbon-glow-dot" style={{ background: '#1D68D8', boxShadow: '0 0 8px #1D68D8' }} />
              <span><strong>Unified Single Ledger:</strong> Zero cross-desk retyping</span>
            </div>
            <div className="integration-ribbon-sep" />
            <div className="integration-ribbon-item">
              <span className="ribbon-glow-dot" style={{ background: '#059669', boxShadow: '0 0 8px #059669' }} />
              <span><strong>Instant Board Exports:</strong> 100% ICSE &amp; CBSE aligned</span>
            </div>
            <div className="integration-ribbon-sep" />
            <div className="integration-ribbon-item">
              <span className="ribbon-glow-dot" style={{ background: '#EF424B', boxShadow: '0 0 8px #EF424B' }} />
              <span><strong>Zero-Leak Privacy:</strong> Strict role-isolated access</span>
            </div>
          </div>

          {/* Eye-Catching Multi-Desk Role Showcase */}
          <div className="role-showcase-box">
            {/* Top Bar: Headline & Sleek Interactive Tabs */}
            <div className="role-showcase-top">
              <div className="role-showcase-top-meta">
                <span className="role-showcase-kicker" style={{ color: role.color }}>
                  MULTI-DESK ARCHITECTURE
                </span>
                <span className="role-showcase-tagline">One system. Every role.</span>
              </div>
              <div className="role-pills-row" role="tablist">
                {[
                  { id: 'principal', label: 'PRINCIPALS', icon: <GraduationCap size={14} /> },
                  { id: 'administrator', label: 'ADMINISTRATORS', icon: <Settings size={14} /> },
                  { id: 'teacher', label: 'TEACHERS', icon: <BookOpenCheck size={14} /> },
                  { id: 'accountant', label: 'ACCOUNTS', icon: <CreditCard size={14} /> },
                  { id: 'hr', label: 'HR & STAFF', icon: <Users size={14} /> }
                ].map((item) => (
                  <button 
                    key={item.id}
                    className={`role-pill-btn ${selectedRole === item.id ? 'active' : ''}`}
                    onClick={() => setSelectedRole(item.id)}
                    style={selectedRole === item.id ? { background: role.gradient } : {}}
                  >
                    <span className="role-pill-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Split Showcase Body */}
            <div className="role-showcase-split">
              {/* Left Column: Role Details & Capabilities */}
              <div className="role-showcase-left">
                <div className="role-desk-meta">
                  <div className="role-meta-badge-row">
                    <span className="role-desk-badge" style={{ color: role.color, background: `${role.color}12`, borderColor: `${role.color}30` }}>
                      {role.badge}
                    </span>
                    <span className="role-live-badge">
                      <span className="role-live-dot" style={{ background: role.color }} />
                      <span>{role.liveTag}</span>
                    </span>
                  </div>
                  <h3 className="role-desk-title">{role.title}</h3>
                  <p className="role-desk-outcome">{role.outcome}</p>
                </div>

                {/* 3 Visual Capability Cards with Dynamic Color Badges */}
                <div className="role-capabilities-grid-pro">
                  {role.features?.map((feat, idx) => (
                    <div key={idx} className="role-capability-card-pro">
                      <div className="role-cap-icon-tile" style={{ background: `${role.color}10`, borderColor: `${role.color}25` }}>
                        {renderRoleIcon(feat.icon)}
                      </div>
                      <div className="role-cap-content">
                        <div className="role-cap-header-line">
                          <strong className="role-cap-title">{feat.title}</strong>
                          {role.chips?.[idx] && (
                            <span className="role-cap-chip" style={{ color: role.color, background: `${role.color}14` }}>
                              {role.chips[idx]}
                            </span>
                          )}
                        </div>
                        <p className="role-cap-description">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Role Highlights Checklist */}
                <div className="role-points-checklist">
                  {role.points?.map((pt, pIdx) => (
                    <div key={pIdx} className="role-point-item">
                      <CheckCircle2 size={15} style={{ color: role.color, flexShrink: 0 }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action */}
                <div className="role-footer-action">
                  <Link 
                    to="/solutions" 
                    className="btn btn--primary role-cta-btn"
                    style={{ background: role.gradient, borderColor: 'transparent' }}
                  >
                    <span>{role.cta}</span>
                    <ArrowRight size={16} />
                  </Link>
                  <span className="role-privacy-note">
                    <Lock size={13} style={{ color: '#059669' }} />
                    <span>Role-isolated view • Zero cross-desk data leaks</span>
                  </span>
                </div>
              </div>

              {/* Right Column: High-Res Real Indian School Photography + Live Persona Floating Glass Card */}
              <div className="role-showcase-right">
                <div className="role-media-card">
                  <img 
                    src={role.image} 
                    alt={role.title} 
                    className="role-media-photo" 
                    loading="lazy"
                  />
                  <div className="role-media-gradient-overlay" />
                  
                  {/* Top Live Session Pill */}
                  <div className="role-floating-live-pill">
                    <span className="live-status-pulse" />
                    <span>ICSE &amp; CBSE Formats Active</span>
                  </div>

                  {/* Bottom Floating Persona Glass Card */}
                  <div className="role-persona-glass-card">
                    <div className="role-persona-avatar" style={{ background: role.gradient }}>
                      {role.avatar}
                    </div>
                    <div className="role-persona-details">
                      <div className="role-persona-name">{role.userName}</div>
                      <div className="role-persona-title">{role.userTitle}</div>
                    </div>
                    {role.chips?.[0] && (
                      <span className="role-persona-stat-badge" style={{ color: role.color, borderColor: `${role.color}40`, background: '#FFFFFF' }}>
                        {role.chips[0]}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>"""

if target in content:
    content = content.replace(target, replacement, 1)
    with open("src/pages/Home.jsx", "w", encoding="utf-8") as f:
        f.write(content)
    print("Replaced successfully in Home.jsx!")
else:
    print("Target not found! Checking partial match...")
    target_start = target[:60]
    print("target_start found:", target_start in content)
