import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeBanner from './components/MarqueeBanner';
import ProgramServices from './components/ProgramServices';
import AboutDarkSection from './components/AboutDarkSection';
import TajwidInteractive from './components/TajwidInteractive';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';

export default function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleOpenTrial = (programName = '') => {
    setSelectedProgram(programName);
    setIsTrialOpen(true);
  };

  const handleCloseTrial = () => {
    setIsTrialOpen(false);
    setSelectedProgram('');
  };

  return (
    <div className="min-h-screen bg-[#F9FAF6] text-[#1A241F] selection:bg-[#EB9414] selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenTrial={() => handleOpenTrial()} />

      {/* Hero Section */}
      <HeroSection onOpenTrial={() => handleOpenTrial()} />

      {/* Running Marquee Ticker */}
      <MarqueeBanner />

      {/* Services / Program Belajar */}
      <ProgramServices onSelectProgram={(prog) => handleOpenTrial(prog)} />

      {/* About & Stats Dark Section matching image */}
      <AboutDarkSection onOpenTrial={() => handleOpenTrial()} />

      {/* Tajwid & Makhraj Interactive Feature */}
      <TajwidInteractive />

      {/* Tutors & Santri Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Footer */}
      <Footer onOpenTrial={() => handleOpenTrial()} />

      {/* Trial Modal Popup */}
      <TrialModal 
        isOpen={isTrialOpen} 
        onClose={handleCloseTrial} 
        selectedProgramDefault={selectedProgram}
      />
    </div>
  );
}
