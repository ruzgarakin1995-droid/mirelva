"use client";
import React from 'react';
import EventsHeader from './components/EventsHeader';
import EventsFooter from './components/EventsFooter';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import VenuesSection from './sections/VenuesSection';
import PlanningSection from './sections/PlanningSection';
import WeddingsSection from './sections/WeddingsSection';
import CorporateSection from './sections/CorporateSection';
import CateringSection from './sections/CateringSection';
import GallerySection from './sections/GallerySection';
import DecorSection from './sections/DecorSection';
import PackagesSection from './sections/PackagesSection';
import TeamSection from './sections/TeamSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';
import SplitScreenLoader from './components/SplitScreenLoader';

export default function EventsTheme() {
  return (
    <div className="font-sans antialiased text-[#4A403A] bg-[#FDFBF7] selection:bg-[#C19A6B] selection:text-white">
      <SplitScreenLoader />
      {/* 
        Custom styles for animations and global thematic elements. 
        In a real Next.js/Vite project, these could go to a global CSS file or tailwind config.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        /* Mobile-First Custom Enhancements */
        html {
          scroll-behavior: smooth;
        }
        /* Fluid typography for ultra-premium look across devices */
        h1, h2, h3, h4, h5, h6 {
          letter-spacing: -0.02em;
        }
      `}} />
      
      <EventsHeader />

      {/* 
        The 15 Sections for the Events Theme.
        Ordered to create a logical, high-end narrative flow.
      */}
      <main className="w-full flex flex-col overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WeddingsSection />
        <CorporateSection />
        <VenuesSection />
        <PlanningSection />
        <DecorSection />
        <CateringSection />
        <GallerySection />
        <PackagesSection />
        <TeamSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <EventsFooter />
    </div>
  );
}

