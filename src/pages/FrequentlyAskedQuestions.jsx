import React from 'react';
import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';
import BottomCta from '../components/BottomCta';

export default function FrequentlyAskedQuestions() {
  const platformFaqs = [
    { question: 'What is Pragya School ERP?', answer: 'Pragya is a school management platform connecting student records, admissions, academic workflows, attendance, exams, fees, staff and communication, with a dedicated APAAR-readiness workflow.' },
    { question: 'Who is Pragya designed for?', answer: 'Indian school leaders, administrators, teachers, admissions and finance teams, staff and students using role-appropriate access.' },
    { question: 'Can we import existing records?', answer: 'Yes. Guided CSV/Excel imports with field mapping and validation are described for students, teachers and staff.' },
    { question: 'Does the platform support multiple school branches?', answer: 'Yes. Branch-aware records and a year-and-branch switcher are included.' }
  ];

  const academicFaqs = [
    { question: 'Can we manage classes, sections and subject offerings?', answer: 'Yes. The platform supports academic setup, class and section configuration, and required/optional subject offerings.' },
    { question: 'Can teachers enter exam marks?', answer: 'Yes, subject to their configured responsibilities and access permissions.' },
    { question: 'Can the school generate report cards?', answer: 'Yes. Pragya includes result calculation, finalisation, publication and report card workflows.' },
    { question: 'Does Pragya handle school fees?', answer: 'Yes. It supports fee assignment, counter collection, receipts and outstanding dues.' },
    { question: 'Can parents pay fees online?', answer: 'Parent/student checkout screens are on the roadmap, not confirmed live. The brief describes a built Razorpay payment engine, which should not be mistaken for an operational public checkout.' }
  ];

  const apaarFaqs = [
    { question: 'What does APAAR-ready mean in Pragya?', answer: 'It means Pragya can help a school organise and review student information, parental consent, PEN and recorded status to prepare for the official process.' },
    { question: 'Does Pragya generate APAAR IDs?', answer: 'No. Official government systems handle ID generation. Pragya provides local preparation, export and status tracking.' },
    { question: 'Does Pragya connect directly to UDISE+ or DigiLocker?', answer: 'Direct connectivity is planned, not available in the documented release.' },
    { question: 'Is Aadhaar information stored in the APAAR module?', answer: 'The supplied brief says the specific APAAR record does not store the Aadhaar number; official processes may require details separately.' }
  ];

  const mobileSecurityFaqs = [
    { question: 'Does Pragya offer mobile apps?', answer: 'The supplied brief confirms iOS and Android applications for core school workflows.' },
    { question: 'Is a parent portal currently available?', answer: 'A dedicated parent web portal is planned but not live in the documented release.' },
    { question: 'Can the platform send school notices?', answer: 'Yes. Notices and governed in-app messaging are documented features.' },
    { question: 'Are SMS and push notifications live?', answer: 'Delivery depends on provider connectivity and is listed on the roadmap; do not assume it is currently activated.' },
    { question: 'Can the school control who sees records?', answer: 'Yes. Role-based and campus-aware permission boundaries are described.' },
    { question: 'Can our school manage hosting?', answer: 'Yes. School-managed server deployment is supported.' }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Your Pragya Questions, Answered.</h1>
            <p className="page-hero-desc">
              Choosing school management software is an important decision. Here are straightforward answers about how Pragya works, what is currently supported and which capabilities are still planned.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ marginBottom: '20px' }}>Platform and Setup</h2>
            <FaqAccordion items={platformFaqs} />
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ marginBottom: '20px' }}>Academics and Administration</h2>
            <FaqAccordion items={academicFaqs} />
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ marginBottom: '20px' }}>APAAR Readiness</h2>
            <FaqAccordion items={apaarFaqs} />
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ marginBottom: '20px' }}>Mobile, Communication and Security</h2>
            <FaqAccordion items={mobileSecurityFaqs} />
          </div>
        </div>
      </section>

      <BottomCta
        title="Have a Question We Haven’t Covered?"
        subtitle="Tell us what your school needs. We’ll focus the conversation on actual workflows and confirmed product capabilities."
        buttonText="Contact Pragya"
        buttonLink="/contact"
      />
    </>
  );
}
