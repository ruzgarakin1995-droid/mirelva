import React from 'react';
import Hero from './sections/Hero';
import BentoFeatures from './sections/BentoFeatures';
import PerformanceStats from './sections/PerformanceStats';
import Services from './sections/Services';
import PartsShowcase from './sections/PartsShowcase';
import Process from './sections/Process';
import Gallery from './sections/Gallery';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

const TuningThemeV2 = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans overflow-hidden selection:bg-red-500 selection:text-white">
      <Hero />
      <BentoFeatures />
      <PerformanceStats />
      <Services />
      <PartsShowcase />
      <Process />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default TuningThemeV2;
