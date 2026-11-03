import re

def update_file(path, replacements):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            print(f"Replaced in {path}: {old[:30]}...")
        else:
            print(f"NOT FOUND in {path}: {old[:30]}...")
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# 1. Navbar.jsx
navbar_replacements = [
    ("import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';",
     "import { Menu, X, ChevronDown } from 'lucide-react';\nimport WhatsAppIcon from './WhatsAppIcon';"),
    ("<MessageSquare size={15} color=\"#25D366\" />\n              <span className=\"nav-btn-text\">WhatsApp</span>",
     "<WhatsAppIcon size={18} />\n              <span className=\"nav-btn-text\">WhatsApp</span>"),
    ("<MessageSquare size={16} color=\"#25D366\" /> Chat on WhatsApp",
     "<WhatsAppIcon size={18} /> Chat on WhatsApp")
]
update_file('src/components/Navbar.jsx', navbar_replacements)

# 2. Footer.jsx
footer_replacements = [
    ("import { MessageSquare, Phone, ShieldCheck, CheckCircle2, Award, Building2 } from 'lucide-react';",
     "import { Phone, ShieldCheck, CheckCircle2, Award, Building2 } from 'lucide-react';\nimport WhatsAppIcon from './WhatsAppIcon';"),
    ("<MessageSquare size={18} color=\"#25D366\" />\n            <div>\n              <strong>Meta Tech Provider</strong>",
     "<WhatsAppIcon size={18} />\n            <div>\n              <strong>Meta Tech Provider</strong>"),
    ("<MessageSquare size={13} color=\"#25D366\" /> WhatsApp",
     "<WhatsAppIcon size={16} /> WhatsApp")
]
update_file('src/components/Footer.jsx', footer_replacements)

# 3. BottomCta.jsx
bottom_cta_replacements = [
    ("import { ArrowRight, Sparkles, MessageSquare, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';",
     "import { ArrowRight, Sparkles, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';\nimport WhatsAppIcon from './WhatsAppIcon';"),
    ("<MessageSquare size={15} /> Message Partner on WhatsApp",
     "<WhatsAppIcon size={18} /> Message Partner on WhatsApp")
]
update_file('src/components/BottomCta.jsx', bottom_cta_replacements)

# 4. ContactBookDemo.jsx
contact_replacements = [
    ("import { Clock, ShieldCheck, Video, CheckCircle2, Phone, MessageSquare, Award, Building2 } from 'lucide-react';",
     "import { Clock, ShieldCheck, Video, CheckCircle2, Phone, Award, Building2 } from 'lucide-react';\nimport WhatsAppIcon from '../components/WhatsAppIcon';"),
    ("<MessageSquare size={18} color=\"#25D366\" />\n                <span>WhatsApp: 974855549</span>",
     "<WhatsAppIcon size={18} />\n                <span>WhatsApp: 974855549</span>")
]
update_file('src/pages/ContactBookDemo.jsx', contact_replacements)
