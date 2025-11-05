import React, { useState } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import TeamSection from './components/TeamSection/TeamSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import Footer from './components/Footer/Footer';
import ConsultationModal from './components/Form/Form';
import ProfileModal from './components/TeamSection/ProfileModal';
// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import './App.css';
import CaseStudiesSection from './components/PracticeAreas/CaseStudiesSection';

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
        <div className="min-h-screen font-sans antialiased">
            {/* Tailwind CSS is assumed to be configured and available */}
            <Header onConsultationClick={openConsultation} />
            <main>
                <HeroSection onConsultationClick={openConsultation} />
                <PracticeAreas />
                <CaseStudiesSection />
                <TeamSection onViewProfile={viewProfile} />
                <TestimonialsSection />
            </main>
            <Footer onConsultationClick={openConsultation} />

            {/* Renders the static form modal */}
            <ConsultationModal show={showModal} onClose={closeConsultation} />
            <ProfileModal 
                member={selectedMember} 
                onClose={closeProfile}
                show={showProfileModal}
            />
        </div>
    );
};

export default App;