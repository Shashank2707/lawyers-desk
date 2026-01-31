import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import TeamSection from './components/TeamSection/TeamSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import Footer from './components/Footer/Footer';
import ConsultationModal from './components/Form/Form';
import ProfileModal from './components/TeamSection/ProfileModal';
import CaseStudiesSection from './components/PracticeAreas/CaseStudiesSection';

import TermsAndPolicies from './components/TermsCondition/TermsAndPolicies';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const openConsultation = () => setShowModal(true);
  const closeConsultation = () => setShowModal(false);

  const viewProfile = (member) => {
    setSelectedMember(member);
    setShowProfileModal(true);
  };

  const closeProfile = () => {
    setShowProfileModal(false);
    setSelectedMember(null);
  };

  return (
    <Router>
        <ScrollToTop />
      <div className="min-h-screen font-sans antialiased">
        <Header onConsultationClick={openConsultation} />

        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <main>
                <HeroSection onConsultationClick={openConsultation} />
                <PracticeAreas />
                <CaseStudiesSection />
                <TeamSection onViewProfile={viewProfile} />
                <TestimonialsSection />
              </main>
            }
          />

          {/* TERMS & POLICY PAGE */}
          <Route path="/terms" element={<TermsAndPolicies />} />
        </Routes>

        <Footer onConsultationClick={openConsultation} />

        {/* Modals remain global */}
        <ConsultationModal show={showModal} onClose={closeConsultation} />
        <ProfileModal
          member={selectedMember}
          onClose={closeProfile}
          show={showProfileModal}
        />
      </div>
    </Router>
  );
};

export default App;