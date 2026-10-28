import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BottomCta({
  title = "A simpler school day starts with a clearer system.",
  subtitle = "See how Pragya can support your school’s admissions, teaching, attendance, fees, results and APAAR preparation in one guided walkthrough.",
  buttonText = "Book Your Pragya Demo",
  buttonLink = "/contact"
}) {
  return (
    <section className="section section--soft" style={{ borderTop: '1px solid var(--color-slate-200)' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '28px' }}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to={buttonLink} className="btn btn--primary btn--lg">
            <span>{buttonText}</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
