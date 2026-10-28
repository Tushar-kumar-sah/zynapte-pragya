import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <div className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ marginBottom: '16px' }}>404 • Page Not Found</span>
          <h1 style={{ marginBottom: '16px', fontSize: '2.5rem' }}>This page isn’t on the timetable.</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-slate-600)', marginBottom: '30px' }}>
            The page you were looking for may have moved. Find your way back to Pragya’s features or contact our team.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--primary">Go to Homepage</Link>
            <Link to="/features" className="btn btn--secondary">Explore Features</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
