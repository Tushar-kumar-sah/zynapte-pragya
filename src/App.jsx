import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AllFeatures from './pages/AllFeatures';
import ApaarReadiness from './pages/ApaarReadiness';
import SolutionsByRole from './pages/SolutionsByRole';
import SecurityHosting from './pages/SecurityHosting';
import AboutPragya from './pages/AboutPragya';
import ContactBookDemo from './pages/ContactBookDemo';
import StudentManagement from './pages/StudentManagement';
import AdmissionManagement from './pages/AdmissionManagement';
import AttendanceManagement from './pages/AttendanceManagement';
import FeesManagement from './pages/FeesManagement';
import AcademicsTimetable from './pages/AcademicsTimetable';
import ExamResultManagement from './pages/ExamResultManagement';
import StaffPayrollManagement from './pages/StaffPayrollManagement';
import SchoolCommunication from './pages/SchoolCommunication';
import MobileAppExperience from './pages/MobileAppExperience';
import MultiBranchManagement from './pages/MultiBranchManagement';
import PricingEnquiry from './pages/PricingEnquiry';
import FrequentlyAskedQuestions from './pages/FrequentlyAskedQuestions';
import WestBengalSchools from './pages/WestBengalSchools';
import NotFound from './pages/NotFound';
import { useScrollReveal } from './utils/useScrollAnimation';

function ScrollToTop() {
  const { pathname } = useLocation();
  useScrollReveal();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<AllFeatures />} />
          <Route path="/apaar-readiness" element={<ApaarReadiness />} />
          <Route path="/solutions" element={<SolutionsByRole />} />
          <Route path="/security" element={<SecurityHosting />} />
          <Route path="/about" element={<AboutPragya />} />
          <Route path="/contact" element={<ContactBookDemo />} />
          <Route path="/student-management" element={<StudentManagement />} />
          <Route path="/admission-management" element={<AdmissionManagement />} />
          <Route path="/attendance-management" element={<AttendanceManagement />} />
          <Route path="/fees-management" element={<FeesManagement />} />
          <Route path="/academics-timetable" element={<AcademicsTimetable />} />
          <Route path="/exam-result-management" element={<ExamResultManagement />} />
          <Route path="/staff-payroll-management" element={<StaffPayrollManagement />} />
          <Route path="/school-communication" element={<SchoolCommunication />} />
          <Route path="/school-erp-mobile-app" element={<MobileAppExperience />} />
          <Route path="/multi-branch-management" element={<MultiBranchManagement />} />
          <Route path="/pricing" element={<PricingEnquiry />} />
          <Route path="/faqs" element={<FrequentlyAskedQuestions />} />
          <Route path="/school-erp-west-bengal" element={<WestBengalSchools />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
