"use client";
import React from 'react';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import FleetSection from './sections/FleetSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ChauffeurSection from './sections/ChauffeurSection';
import AirportTransferSection from './sections/AirportTransferSection';
import BookingSection from './sections/BookingSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import StatsSection from './sections/StatsSection';
import BrandsSection from './sections/BrandsSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import FooterSection from './sections/FooterSection';

export const RentacarTheme = () => {
  return (
    <div className="font-sans antialiased text-zinc-900 selection:bg-amber-500 selection:text-white bg-zinc-950">
      <HeroSection />
      <FeaturesSection />
      <FleetSection />
      <BrandsSection />
      <AboutSection />
      <ServicesSection />
      <ChauffeurSection />
      <AirportTransferSection />
      <BookingSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default RentacarTheme;

