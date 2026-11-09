import React, { useState, useEffect } from 'react';
import SEO from './components/SEO';
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
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Handle browser back/forward, direct path URLs, or hash changes cleanly
  useEffect(() => {
    const parseRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      const pathMatch = path.match(/^\/services\/([a-z0-9_-]+)/i);
      if (pathMatch) {
        setSelectedServiceId(pathMatch[1]);
        return;
      }

      if (hash.startsWith('#service-')) {
        const id = hash.replace('#service-', '');
        setSelectedServiceId(id);
        return;
      }

      setSelectedServiceId(null);
    };

    window.addEventListener('popstate', parseRoute);
    window.addEventListener('hashchange', parseRoute);
    parseRoute();

    return () => {
      window.removeEventListener('popstate', parseRoute);
      window.removeEventListener('hashchange', parseRoute);
    };
  }, []);

  const handleSelectService = (id: string) => {
    window.history.pushState({}, '', `/services/${id}`);
    setSelectedServiceId(id);
  };

  const handleBackToHome = () => {
    window.history.pushState({}, '', '/');
    setSelectedServiceId(null);
  };

  const handleGoToContact = () => {
    handleNavigateSection('contact');
  };

  const handleNavigateSection = (sectionId: string) => {
    if (selectedServiceId) {
      setSelectedServiceId(null);
      window.history.pushState({}, '', `/#${sectionId}`);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${selectedServiceId ? 'bg-[#070D18] text-white' : 'bg-white text-gray-900'} flex flex-col font-sans selection:bg-[#E87121] selection:text-white w-full overflow-x-hidden transition-colors duration-200`}>
      {/* 1. Header Navigation - Full Width Edge to Edge */}
      <Navbar 
        onSelectService={handleSelectService}
        onNavigateSection={handleNavigateSection}
        onGoToContact={handleGoToContact}
      />

      {/* Fixed Navbar Spacer */}
      <div className="h-20 shrink-0" aria-hidden="true" />

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
          <SEO 
            title="Crabster Technology | Industrial IoT, Panels & Plant Automation — Coimbatore"
            description="Upgrade your existing manufacturing machinery without enterprise costs. Custom automation panel boards, non-invasive Industrial IoT, and machine retrofits in Coimbatore, Tamil Nadu."
            keywords="Industrial IoT Coimbatore, Automation Panel Boards, Process Automation, Machine Retrofit, PLC Integration, Tamil Nadu Manufacturing Automation, Crabster Technology"
            canonicalUrl="https://www.crabstertech.in/"
            ogType="website"
            image="https://www.crabstertech.in/assets/crabster-logo.png"
            jsonLd={{
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.crabstertech.in/#organization",
                  "name": "Crabster Technology",
                  "url": "https://www.crabstertech.in",
                  "logo": "https://www.crabstertech.in/assets/crabster-logo.png",
                  "image": "https://www.crabstertech.in/assets/control-panel-hd.jpg",
                  "description": "Crabster Technology designs and builds Industrial IoT, custom automation panel boards, and machine control retrofits for manufacturers across Tamil Nadu, India.",
                  "email": "crabstertech@gmail.com",
                  "telephone": "+91 98765 43210",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Coimbatore",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "641001",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "11.0168",
                    "longitude": "76.9558"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Industrial Automation Services",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial IoT & Edge Solutions" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automation Panel Boards & PLC Integration" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Process Automation & Closed-Loop Control" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Production Automation & Machine Retrofits" } }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.crabstertech.in/#website",
                  "url": "https://www.crabstertech.in",
                  "name": "Crabster Technology",
                  "publisher": { "@id": "https://www.crabstertech.in/#organization" }
                }
              ]
            }}
          />

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
