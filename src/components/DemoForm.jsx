import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function DemoForm({ title = "Book a Pragya Demo", subtitle = "Complete the details below so our team can understand your school before the conversation." }) {
  const [formData, setFormData] = useState({
    fullName: '',
    schoolName: '',
    userRole: '',
    workEmail: '',
    phoneNumber: '',
    cityState: '',
    studentCount: '',
    modules: ['APAAR Readiness', 'Admissions & Records'],
    message: '',
    consent: false
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const handleModuleToggle = (moduleName) => {
    setFormData(prev => {
      const exists = prev.modules.includes(moduleName);
      if (exists) {
        return { ...prev, modules: prev.modules.filter(m => m !== moduleName) };
      } else {
        return { ...prev, modules: [...prev.modules, moduleName] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setConsentError(true);
      return;
    }
    setConsentError(false);

    setLoading(true);
    // Simulate server-side lead capture
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 750);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      schoolName: '',
      userRole: '',
      workEmail: '',
      phoneNumber: '',
      cityState: '',
      studentCount: '',
      modules: ['APAAR Readiness', 'Admissions & Records'],
      message: '',
      consent: false
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="demo-card-container">
        <div className="form-success-alert" role="status" aria-live="polite">
          <div className="form-success-icon">
            <CheckCircle2 size={40} />
          </div>
          <h3>Thanks for reaching out!</h3>
          <p>
            Your enquiry has been received. Our team will review your school requirements for <strong>{formData.schoolName || 'your institution'}</strong> and reach out using the contact details provided to schedule a tailored walkthrough.
          </p>
          <button className="btn btn--secondary" onClick={handleReset}>
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-card-container">
      <div className="demo-card-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <form className="demo-form" onSubmit={handleSubmit} noValidate={false}>
        <div className="form-grid-2">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="full-name" className="form-label">
              <span>Full Name <span className="required-star">*</span></span>
            </label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              className="form-control"
              placeholder="e.g. Debashis Banerjee"
              required
              minLength={2}
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
            />
            <span className="field-error-msg">Please enter your full name.</span>
          </div>

          {/* School / Institution Name */}
          <div className="form-group">
            <label htmlFor="school-name" className="form-label">
              <span>School / Institution Name <span className="required-star">*</span></span>
            </label>
            <input
              type="text"
              id="school-name"
              name="schoolName"
              className="form-control"
              placeholder="e.g. Modern Academy High School"
              required
              minLength={3}
              value={formData.schoolName}
              onChange={e => setFormData({ ...formData, schoolName: e.target.value })}
            />
            <span className="field-error-msg">Please enter your school or institution name.</span>
          </div>
        </div>

        <div className="form-grid-2">
          {/* Your Role */}
          <div className="form-group">
            <label htmlFor="user-role" className="form-label">
              <span>Your Role <span className="required-star">*</span></span>
            </label>
            <select
              id="user-role"
              name="userRole"
              className="form-control"
              required
              value={formData.userRole}
              onChange={e => setFormData({ ...formData, userRole: e.target.value })}
            >
              <option value="" disabled>Select your responsibility...</option>
              <option value="Principal">Principal / Headmaster</option>
              <option value="Administrator">Administrator / Management Committee</option>
              <option value="Academic Coordinator">Academic Coordinator</option>
              <option value="Teacher">Class / Subject Teacher</option>
              <option value="Accountant">Accountant / Finance Team</option>
              <option value="Admissions">Admissions / Front Office</option>
              <option value="IT Partner">School IT Partner / Consultant</option>
              <option value="Other">Other</option>
            </select>
            <span className="field-error-msg">Please select your role.</span>
          </div>

          {/* City / State */}
          <div className="form-group">
            <label htmlFor="city-state" className="form-label">
              <span>City / State <span className="required-star">*</span></span>
            </label>
            <input
              type="text"
              id="city-state"
              name="cityState"
              className="form-control"
              placeholder="e.g. Kolkata, West Bengal"
              required
              value={formData.cityState}
              onChange={e => setFormData({ ...formData, cityState: e.target.value })}
            />
            <span className="field-error-msg">Please enter your city and state.</span>
          </div>
        </div>

        <div className="form-grid-2">
          {/* Work Email */}
          <div className="form-group">
            <label htmlFor="work-email" className="form-label">
              <span>Work Email <span className="required-star">*</span></span>
            </label>
            <input
              type="email"
              id="work-email"
              name="workEmail"
              className="form-control"
              placeholder="principal@school.edu.in"
              required
              value={formData.workEmail}
              onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
            />
            <span className="field-error-msg">Enter a valid institutional email.</span>
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phone-number" className="form-label">
              <span>Phone Number <span className="required-star">*</span></span>
            </label>
            <input
              type="tel"
              id="phone-number"
              name="phoneNumber"
              className="form-control"
              placeholder="e.g. 98300 12345"
              required
              pattern="[0-9+ \-]{10,15}"
              value={formData.phoneNumber}
              onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
            <span className="field-error-msg">Enter a valid contact number.</span>
          </div>
        </div>

        {/* Approx Students */}
        <div className="form-group">
          <label htmlFor="student-count" className="form-label">
            <span>Approximate Number of Students <span className="optional-tag">(Optional)</span></span>
          </label>
          <select
            id="student-count"
            name="studentCount"
            className="form-control"
            value={formData.studentCount}
            onChange={e => setFormData({ ...formData, studentCount: e.target.value })}
          >
            <option value="">Select range...</option>
            <option value="under-250">Fewer than 250 students</option>
            <option value="250-500">250 – 500 students</option>
            <option value="500-1500">500 – 1,500 students</option>
            <option value="1500-3000">1,500 – 3,000 students</option>
            <option value="above-3000">More than 3,000 students (Multi-branch)</option>
          </select>
        </div>

        {/* Modules Checklist */}
        <div className="form-group">
          <label className="form-label">
            <span>Modules You’re Interested In <span className="optional-tag">(Select all that apply)</span></span>
          </label>
          <div className="modules-checklist">
            {[
              { id: 'APAAR Readiness', label: 'APAAR Readiness & Consent Tracking' },
              { id: 'Admissions & Records', label: 'Admissions & Student Management' },
              { id: 'Academics & Timetables', label: 'Academics & Conflict-Aware Timetable' },
              { id: 'Attendance & Leave', label: 'Daily Attendance & Leave Records' },
              { id: 'Exams & Reports', label: 'Exams, Marks Entry & Report Cards' },
              { id: 'Fees & Payroll', label: 'Fee Counter Collection & Receipts' },
              { id: 'Mobile App', label: 'Mobile App Workflows (Android / iOS)' },
              { id: 'Multi-Branch', label: 'Multi-Branch & Dedicated Server Hosting' }
            ].map(m => (
              <label key={m.id} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.modules.includes(m.id)}
                  onChange={() => handleModuleToggle(m.id)}
                />
                <span>{m.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="user-message" className="form-label">
            <span>Message / Questions <span className="optional-tag">(Optional)</span></span>
          </label>
          <textarea
            id="user-message"
            name="message"
            className="form-control"
            rows="3"
            placeholder="Tell us about your school structure, existing software, or specific questions regarding data migration and APAAR preparation..."
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        {/* Consent Checkbox */}
        <div className="consent-box">
          <label className="checkbox-label">
            <input
              type="checkbox"
              required
              checked={formData.consent}
              onChange={e => {
                setFormData({ ...formData, consent: e.target.checked });
                if (e.target.checked) setConsentError(false);
              }}
            />
            <span>
              I agree that Pragya School ERP may contact me regarding my enquiry using the details provided, in accordance with the published Privacy Policy. <span className="required-star">*</span>
            </span>
          </label>
          {consentError && (
            <p style={{ color: 'var(--color-danger)', fontSize: '0.8rem', marginTop: '6px', fontWeight: 600 }}>
              You must provide consent before requesting a demo.
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={loading}>
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              <span>Sending your enquiry...</span>
            </>
          ) : (
            <>
              <span>Request a Demo</span>
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
