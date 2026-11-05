import React, { useState, useEffect } from 'react';
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
import ServiceDetailPage from './components/ServiceDetailPage';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  // Handle browser back/forward or hash changes cleanly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#service-')) {
        const id = hash.replace('#service-', '');
        setSelectedServiceId(id);
      } else if (hash === '' || hash === '#') {
        setSelectedServiceId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check initial hash
    if (window.location.hash.startsWith('#service-')) {
      setSelectedServiceId(window.location.hash.replace('#service-', ''));
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectService = (id) => {
    window.location.hash = `service-${id}`;
    setSelectedServiceId(id);
  };

  const handleBackToHome = () => {
    window.location.hash = '';
    setSelectedServiceId(null);
  };

  const handleGoToContact = () => {
    handleNavigateSection('contact');
  };

  const handleNavigateSection = (sectionId) => {
    if (selectedServiceId) {
      setSelectedServiceId(null);
      window.location.hash = '';
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900 w-full overflow-x-hidden">
      {/* 1. Header Navigation - Full Width Edge to Edge */}
      <Navbar 
        onSelectService={handleSelectService}
        onNavigateSection={handleNavigateSection}
        onGoToContact={handleGoToContact}
      />

      {/* Main Content Router without Popups */}
      {selectedServiceId ? (
        /* Dedicated Full Page for Selected Service */
        <ServiceDetailPage 
          serviceId={selectedServiceId}
          onBack={handleBackToHome}
          onNavigateService={handleSelectService}
        />
      ) : (
        /* Full Home Landing Page */
        <main className="flex-1 w-full">
          {/* Page 1: Hero Section */}
          <Hero onOpenContact={handleGoToContact} />

          {/* Page 2: Mission Statement Banner */}
          <StatementBanner />

          {/* Page 3: The Four Problems */}
          <ProblemsSection />

          {/* Page 4: Four Ways We Modernise a Plant */}
          <ServicesSection onSelectService={handleSelectService} />

          {/* Page 5: The Affordable Route */}
          <ModernizeSection onOpenContact={handleGoToContact} />

          {/* Page 6: How We Work (01 - 05 Stages) */}
          <HowWeWorkSection />

          {/* Page 7: Who We Work With (6 Sectors) */}
          <WhoWeWorkWithSection />

          {/* Page 8: Common Questions (FAQ Accordion - Default Closed) */}
          <FAQSection />

          {/* Page 9: Start With A Conversation (Enquiry Form) */}
          <EnquirySection />
        </main>
      )}

      {/* Site Footer - Full Width Edge to Edge */}
      <Footer 
        onSelectService={handleSelectService}
        onNavigateSection={handleNavigateSection}
        onOpenContact={handleGoToContact} 
      />
    </div>
  );
}
