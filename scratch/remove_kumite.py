import os

def update_bottom_cta():
    path = 'src/components/BottomCta.jsx'
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    c = c.replace('Code Kumite', 'Pragya Advisory Desk')
    c = c.replace('EXCLUSIVE RESELLER', 'DIRECT SCHOOL DESK')
    c = c.replace('<h4>Authorized Partner</h4>', '<h4>Implementation &amp; Support</h4>')
    c = c.replace('Quick WhatsApp: 974855549', 'Quick WhatsApp: +91 97485 55490')
    c = c.replace('+91 97485 55490 / 974855549', '+91 97485 55490')
    c = c.replace('href="tel:974855549"', 'href="tel:9748555490"')
    c = c.replace('Hello%20Code%20Kumite,%20we', 'Hello,%20we')
    c = c.replace('Message Partner on WhatsApp', 'Message on WhatsApp')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print('Updated BottomCta.jsx')

def update_footer():
    path = 'src/components/Footer.jsx'
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    # Lines around partner card
    old_card = """          {/* Authorized Partner Box (From Page 4) */}
          <div className="footer-partner-card">
            <div className="footer-col-title">Authorized Reseller</div>
            <div className="footer-partner-badge">
              <strong>Code Kumite</strong>
              <small>Sold Exclusively via Authorized Partners</small>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-300)', marginBottom: '8px' }}>
              <strong>Phone / WhatsApp:</strong><br />
              <a href="tel:974855549" style={{ color: '#FFFFFF', fontWeight: 700 }}>+91 97485 55490 / 974855549</a>
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-300)', marginBottom: '8px' }}>
              <strong>Engineering &amp; IP:</strong><br />
              Developed by Zynapte Technologies Pvt. Ltd., India 🇮🇳
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-300)', marginBottom: '14px' }}>
              <strong>Platform URLs:</strong><br />
              pragyaschoolerp.in · zynapte.com
            </p>
            <span className="badge badge--orange" style={{ fontSize: '0.7rem' }}>
              Schools &amp; Colleges • Web, Android &amp; iPhone
            </span>
          </div>"""

    new_card = """          {/* Advisory & Support Box */}
          <div className="footer-partner-card">
            <div className="footer-col-title">School Advisory Desk</div>
            <div className="footer-partner-badge">
              <strong>Pragya Support Desk</strong>
              <small>Dedicated Implementation &amp; Advisory</small>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-300)', marginBottom: '8px' }}>
              <strong>Phone / WhatsApp:</strong><br />
              <a href="tel:9748555490" style={{ color: '#FFFFFF', fontWeight: 700 }}>+91 97485 55490</a>
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-300)', marginBottom: '8px' }}>
              <strong>Engineering &amp; IP:</strong><br />
              Developed by Zynapte Technologies Pvt. Ltd., India 🇮🇳
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-slate-300)', marginBottom: '14px' }}>
              <strong>Platform URLs:</strong><br />
              pragyaschoolerp.in · zynapte.com
            </p>
            <span className="badge badge--orange" style={{ fontSize: '0.7rem' }}>
              Schools &amp; Colleges • Web, Android &amp; iPhone
            </span>
          </div>"""

    # Handle CRLF if needed
    c_norm = c.replace('\r\n', '\n')
    old_card_norm = old_card.replace('\r\n', '\n')
    new_card_norm = new_card.replace('\r\n', '\n')
    if old_card_norm in c_norm:
        c_norm = c_norm.replace(old_card_norm, new_card_norm)
    else:
        # fallback manual replacement
        c_norm = c_norm.replace('<strong>Code Kumite</strong>\n              <small>Sold Exclusively via Authorized Partners</small>',
                                '<strong>Pragya Support Desk</strong>\n              <small>Dedicated Implementation &amp; Advisory</small>')
        c_norm = c_norm.replace('<div className="footer-col-title">Authorized Reseller</div>',
                                '<div className="footer-col-title">School Advisory Desk</div>')
        c_norm = c_norm.replace('+91 97485 55490 / 974855549', '+91 97485 55490')
        c_norm = c_norm.replace('href="tel:974855549"', 'href="tel:9748555490"')

    # Bottom bar replacement
    c_norm = c_norm.replace('Authorized Partner: <strong>Code Kumite</strong>.', 'All rights reserved.')
    c_norm = c_norm.replace('<Link to="/contact">Contact Partner</Link>', '<Link to="/contact">Contact Support</Link>')

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c_norm)
    print('Updated Footer.jsx')

def update_navbar():
    path = 'src/components/Navbar.jsx'
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    c_norm = c.replace('\r\n', '\n')
    c_norm = c_norm.replace('title="Chat with Authorized Partner Code Kumite on WhatsApp"',
                            'title="Chat with Pragya Support on WhatsApp"')
    c_norm = c_norm.replace('<small>AUTHORIZED RESELLER</small>\n            <strong>Code Kumite • +91 97485 55490</strong>',
                            '<small>DIRECT SCHOOL DESK</small>\n            <strong>Pragya Support • +91 97485 55490</strong>')
    c_norm = c_norm.replace('Code Kumite • +91 97485 55490', 'Pragya Support • +91 97485 55490')
    c_norm = c_norm.replace('Code Kumite', 'Pragya Support')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c_norm)
    print('Updated Navbar.jsx')

def update_contact():
    path = 'src/pages/ContactBookDemo.jsx'
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    c_norm = c.replace('\r\n', '\n')
    c_norm = c_norm.replace('<div className="ap-badge-tag">EXCLUSIVE AUTHORIZED RESELLER</div>',
                            '<div className="ap-badge-tag">DIRECT INSTITUTIONAL DESK</div>')
    c_norm = c_norm.replace('<h2>Authorized Partner: Code Kumite</h2>',
                            '<h2>Pragya Institutional Advisory &amp; Implementation Desk</h2>')
    c_norm = c_norm.replace('Official sales, institutional implementation, and teacher onboarding partner for Pragya School ERP.',
                            'Direct institutional advisory, implementation support, and campus onboarding for Pragya School ERP.')
    c_norm = c_norm.replace('href="tel:974855549"', 'href="tel:9748555490"')
    c_norm = c_norm.replace('Call: 974855549', 'Call: +91 97485 55490')
    c_norm = c_norm.replace('<span>WhatsApp: 974855549</span>', '<span>WhatsApp: +91 97485 55490</span>')
    c_norm = c_norm.replace('Hello%20Code%20Kumite,%20we', 'Hello,%20we')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c_norm)
    print('Updated ContactBookDemo.jsx')

if __name__ == '__main__':
    update_bottom_cta()
    update_footer()
    update_navbar()
    update_contact()
