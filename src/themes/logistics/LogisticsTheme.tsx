"use client";
import React from 'react';

import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { StatsSection } from './sections/StatsSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { TrackingSection } from './sections/TrackingSection';
import { FleetSection } from './sections/FleetSection';
import { GlobalNetworkSection } from './sections/GlobalNetworkSection';
import { ProcessSection } from './sections/ProcessSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { PartnersSection } from './sections/PartnersSection';
import { SimulationSection } from './sections/SimulationSection';
import { PricingSection } from './sections/PricingSection';
import { FaqSection } from './sections/FaqSection';
import { CtaSection } from './sections/CtaSection';
import { FooterSection } from './sections/FooterSection';

export const LogisticsTheme = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <FeaturesSection />
      <TrackingSection />
      <FleetSection />
      <GlobalNetworkSection />
      <ProcessSection />
      <TestimonialsSection />
      <PartnersSection />
      <SimulationSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default LogisticsTheme;

