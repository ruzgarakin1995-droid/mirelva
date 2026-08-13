"use client";
import React from 'react';
import { Navbar } from './sections/Navbar';
import { HeroCinematic } from './sections/HeroCinematic';
import { BrandStory } from './sections/BrandStory';
import { FleetShowcase } from './sections/FleetShowcase';
import { BentoFeatures } from './sections/BentoFeatures';
import { LifestyleExperience } from './sections/LifestyleExperience';
import { ProcessTimeline } from './sections/ProcessTimeline';
import { Metrics } from './sections/Metrics';
import { TestimonialsMarquee } from './sections/TestimonialsMarquee';
import { AppPromo } from './sections/AppPromo';
import { FAQAccordion } from './sections/FAQAccordion';
import { PremiumFooter } from './sections/PremiumFooter';

export function RentACarThemeV2() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <HeroCinematic />
        <BrandStory />
        <FleetShowcase />
        <BentoFeatures />
        <LifestyleExperience />
        <ProcessTimeline />
        <Metrics />
        <TestimonialsMarquee />
        <AppPromo />
        <FAQAccordion />
      </main>
      <PremiumFooter />
    </div>
  );
}
