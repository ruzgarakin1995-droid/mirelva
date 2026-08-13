"use client";
import React from 'react';
import {
  Hero,
  Features,
  Programs,
  Stats,
  Instructors,
  Methodology,
  Campus,
  Alumni,
  Pricing,
  FAQ,
  Events,
  News,
  Partners,
  CTA,
  Footer
} from './sections';

export const EducationTheme = () => {
  return (
    <div className="w-full min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30">
      <Hero />
      <Features />
      <Programs />
      <Stats />
      <Instructors />
      <Methodology />
      <Campus />
      <Alumni />
      <Pricing />
      <FAQ />
      <Events />
      <News />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
};

export default EducationTheme;

