import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import BottomCta from '../components/BottomCta';
import { rolesData } from '../data/rolesData';

export default function SolutionsByRole() {
  const [selectedRole, setSelectedRole] = useState('principal');
  const role = rolesData[selectedRole];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              SCHOOL ADMINISTRATION MANAGEMENT SYSTEM
            </div>
            <h1 className="page-hero-title">One School. Different Roles. The Right View for Everyone.</h1>
            <p className="page-hero-desc">
              A principal, a class teacher and a fee accountant should not have to work from the same crowded screen. Pragya organises school workflows around people’s responsibilities, with permissions that help keep information relevant and access controlled.
            </p>
            <div className="page-hero-ctas">
              <Link to="/contact" className="btn btn--primary">Book a Role-Based Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Role Switcher Section */}
      <section className="section section--white">
        <div className="container">
          <div className="role-switcher-tabs" role="tablist">
            {Object.keys(rolesData).map(key => (
              <button
                key={key}
                className={`role-tab-btn ${selectedRole === key ? 'active' : ''}`}
                onClick={() => setSelectedRole(key)}
                role="tab"
                aria-selected={selectedRole === key}
              >
                {rolesData[key].name}
              </button>
            ))}
          </div>

          <div className="role-display-box" style={{ marginBottom: '40px' }}>
            <div className="role-info-content">
              <h3>{role.title}</h3>
              <p className="role-lead-outcome">{role.outcome}</p>

              <ul className="role-points-list">
                {role.points.map((p, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={20} color="var(--color-success)" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn btn--primary">
                {role.cta}
              </Link>
            </div>

            <div className="role-preview-card">
              <div className="role-preview-header">
                <div className="role-preview-user">
                  <div className="role-avatar-circle">{role.avatar}</div>
                  <div>
                    <strong>{role.userName}</strong><br />
                    <small style={{ color: 'var(--color-slate-500)' }}>{role.userTitle}</small>
                  </div>
                </div>
                <span className="badge badge--blue">{role.badge}</span>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-slate-200)', borderRadius: 'var(--radius-md)', padding: '16px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-slate-500)', marginBottom: '8px' }}>
                  ROLE PERMISSION SCOPE
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-700)', lineHeight: '1.5' }}>
                  Restricted to assigned classes, sections, and functional modules. Confidential records outside this scope remain strictly hidden.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed All-Role Breakdown Cards */}
          <div className="features-grid">
            {Object.keys(rolesData).map(key => {
              const item = rolesData[key];
              return (
                <div key={key} className="feature-card">
                  <div className="feature-card-icon">
                    <span style={{ fontSize: '1.25rem', fontWeight: 900 }}>{item.avatar}</span>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.outcome}</p>
                  <ul className="role-points-list" style={{ marginTop: 'auto', marginBottom: '16px' }}>
                    {item.points.slice(0, 2).map((pt, i) => (
                      <li key={i} style={{ fontSize: '0.85rem' }}>
                        <CheckCircle2 size={16} color="var(--color-success)" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="feature-card-link">
                    <span>See Workflow</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Multi-campus card */}
          <div className="multi-campus-banner" style={{ marginTop: '50px' }}>
            <div className="multi-campus-text">
              <h4>For Schools with More Than One Branch</h4>
              <p>Pragya includes branch-aware records and an academic-year and branch switcher, while keeping campus-specific access controlled. This is useful for school groups that need shared structure without blending every campus’s daily records.</p>
            </div>
            <Link to="/multi-branch-management" className="btn btn--secondary btn--sm">
              Explore Multi-Branch Management
            </Link>
          </div>
        </div>
      </section>

      <BottomCta
        title="A Demo Built Around Your Team."
        subtitle="Tell us which roles and workflows matter most. We’ll focus the product walkthrough on your school’s day-to-day work."
        buttonText="Book a Role-Based Demo"
      />
    </>
  );
}
