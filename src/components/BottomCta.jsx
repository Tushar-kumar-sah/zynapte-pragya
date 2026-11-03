import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function BottomCta({
  title = "Your school deserves a smarter system.",
  subtitle = "See how Pragya empowers leadership, streamlines admissions, attendance, fees, payroll, exams and ensures 100% APAAR & UDISE+ readiness.",
  buttonText = "Book Your Personalised Demo",
  buttonLink = "/contact"
}) {
  return (
    <section className="section section-bottom-cta">
      <div className="container">
        <div className="bottom-cta-card">
          <div className="bottom-cta-main">
            <div className="bottom-cta-badge">
              <Sparkles size={16} />
              <span>NEXT-GEN INDIAN SCHOOL &amp; COLLEGE ERP</span>
            </div>
            <h2 className="bottom-cta-title">{title}</h2>
            <p className="bottom-cta-sub">{subtitle}</p>

            <div className="bottom-cta-actions">
              <Link to={buttonLink} className="btn btn--accent-gradient btn--lg">
                <span>{buttonText}</span>
                <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/919748555490" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn--secondary btn--lg btn-wa-light"
              >
                <MessageSquare size={18} color="#25D366" />
                <span>Quick WhatsApp: 974855549</span>
              </a>
            </div>

            <div className="bottom-cta-trust-chips">
              <span><CheckCircle2 size={14} color="#2E9D60" /> APAAR &amp; UDISE+ Ready</span>
              <span><CheckCircle2 size={14} color="#2E9D60" /> Khelo India Aligned</span>
              <span><CheckCircle2 size={14} color="#2E9D60" /> CBSE · ICSE · WB Board</span>
              <span><CheckCircle2 size={14} color="#2E9D60" /> AWS Cloud (99.9% Uptime)</span>
            </div>
          </div>

          <div className="bottom-cta-partner-box">
            <div className="partner-card-header">
              <div className="partner-pill">EXCLUSIVE RESELLER</div>
              <h4>Authorized Partner</h4>
              <div className="partner-org-name">Code Kumite</div>
            </div>

            <div className="partner-details-list">
              <div className="partner-detail-item">
                <span className="partner-detail-label">Phone &amp; WhatsApp:</span>
                <a href="tel:974855549" className="partner-detail-val">
                  <Phone size={13} /> +91 97485 55490 / 974855549
                </a>
              </div>
              <div className="partner-detail-item">
                <span className="partner-detail-label">Platform Architecture:</span>
                <span className="partner-detail-val">pragyaschoolerp.in · zynapte.com</span>
              </div>
              <div className="partner-detail-item">
                <span className="partner-detail-label">Parent Engineering:</span>
                <span className="partner-detail-val">Zynapte Technologies Pvt. Ltd., India 🇮🇳</span>
              </div>
            </div>

            <div className="partner-card-action">
              <a 
                href="https://wa.me/919748555490?text=Hello%20Code%20Kumite,%20we%20want%20to%20schedule%20a%20Pragya%20School%20ERP%20demonstration." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn--block btn--partner-wa"
              >
                <WhatsAppIcon size={18} /> Message Partner on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
