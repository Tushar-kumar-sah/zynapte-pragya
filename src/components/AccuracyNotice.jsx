import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function AccuracyNotice() {
  return (
    <div className="accuracy-notice-banner" role="note">
      <AlertTriangle size={24} style={{ color: 'var(--color-warning)', flexShrink: 0, marginTop: '2px' }} />
      <div>
        <strong>Required Accuracy Notice:</strong> Pragya prepares and tracks APAAR-related information. The actual submission, Aadhaar OTP verification and ID generation take place through DigiLocker and official government channels. Direct DigiLocker/UDISE+ connectivity is planned, not currently available. Schools remain responsible for following the official process and ensuring records are accurate.
      </div>
    </div>
  );
}
