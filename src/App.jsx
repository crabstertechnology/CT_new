import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatementBanner from './components/StatementBanner';
import ProblemsSection from './components/ProblemsSection';
import ServicesSection from './components/ServicesSection';
import ModernizeSection from './components/ModernizeSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import WhoWeWorkWithSection from './components/WhoWeWorkWithSection';
import FAQSection from './components/FAQSection';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 w-full overflow-x-hidden">
      {/* 1. Header Navigation - Full Width Edge to Edge */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Snap Page-by-Page Viewport Flow */}
      <main className="flex-1 w-full">
        {/* Page 1: Hero Section */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Page 2: Mission Statement Banner */}
        <StatementBanner />

        {/* Page 3: The Four Problems */}
        <ProblemsSection />

        {/* Page 4: Four Ways We Modernise a Plant */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* Page 5: The Affordable Route */}
        <ModernizeSection onOpenContact={handleOpenContact} />

        {/* Page 6: How We Work (01 - 05 Stages) */}
        <HowWeWorkSection />

        {/* Page 7: Who We Work With (6 Sectors) */}
        <WhoWeWorkWithSection />

        {/* Page 8: Common Questions (FAQ Accordion) */}
        <FAQSection />

        {/* Page 9: Start With A Conversation (Enquiry Form) */}
        <EnquirySection />
      </main>

      {/* Site Footer - Full Width Edge to Edge */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Direct Floor Consultation Modal Dialog */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={handleCloseContact}
      />
    </div>
  );
}
