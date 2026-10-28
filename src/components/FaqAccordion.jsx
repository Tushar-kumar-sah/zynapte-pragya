import React from 'react';
import { ChevronDown } from 'lucide-react';
import { faqsData } from '../data/faqsData';

export default function FaqAccordion({ items = faqsData, limit }) {
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="faq-container">
      {displayItems.map((item, idx) => (
        <details key={idx} className="faq-item" name="pragya-faq" defaultOpen={idx === 0}>
          <summary className="faq-summary">
            <span>{item.question}</span>
            <div className="faq-summary-icon" aria-hidden="true">
              <ChevronDown size={18} />
            </div>
          </summary>
          <div className="faq-content">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
