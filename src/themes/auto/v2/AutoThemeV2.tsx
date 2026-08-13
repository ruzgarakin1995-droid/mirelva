'use client';

import React from 'react';
import Hero from './sections/Hero';
import FeaturesBento from './sections/FeaturesBento';
import ModelsSlider from './sections/ModelsSlider';
import InteriorView from './sections/InteriorView';
import PerformanceSpecs from './sections/PerformanceSpecs';
import TestDriveCta from './sections/TestDriveCta';
import TimelineHeritage from './sections/TimelineHeritage';
import Configuration from './sections/Configuration';
import Testimonials from './sections/Testimonials';
import Footer from './sections/Footer';

export default function AutoThemeV2() {
  return (
    <div className="font-sans antialiased overflow-hidden">
      <Hero />
      <ModelsSlider />
      <FeaturesBento />
      <PerformanceSpecs />
      <InteriorView />
      <Configuration />
      <TimelineHeritage />
      <Testimonials />
      <TestDriveCta />
      <Footer />
    </div>
  );
}
