"use client";
import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { FleetSection } from './sections/FleetSection';
import { DestinationsSection } from './sections/DestinationsSection';
import { ServicesSection } from './sections/ServicesSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { InteriorSection } from './sections/InteriorSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { GallerySection } from './sections/GallerySection';
import { StatsSection } from './sections/StatsSection';
import { BookingSection } from './sections/BookingSection';
import { CrewSection } from './sections/CrewSection';
import { FAQSection } from './sections/FAQSection';
import { ContactSection } from './sections/ContactSection';
import { FooterSection } from './sections/FooterSection';

export default function YachtThemeV2() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-cyan-100 selection:text-cyan-900 text-zinc-900">
      <HeroSection />
      <FeaturesSection />
      <FleetSection />
      <DestinationsSection />
      <ServicesSection />
      <InteriorSection />
      <GallerySection />
      <ExperienceSection />
      <TestimonialsSection />
      <StatsSection />
      <CrewSection />
      <FAQSection />
      <BookingSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}