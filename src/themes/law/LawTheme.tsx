"use client";
import React from 'react';
import './law.css';

import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Awards } from './sections/Awards';
import { AboutFirm } from './sections/AboutFirm';
import { PracticeAreas } from './sections/PracticeAreas';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { Attorneys } from './sections/Attorneys';
import { CaseResults } from './sections/CaseResults';
import { Process } from './sections/Process';
import { Testimonials } from './sections/Testimonials';
import { Insights } from './sections/Insights';
import { FAQ } from './sections/FAQ';
import { Offices } from './sections/Offices';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export const LawTheme: React.FC<{ clientData?: any }> = ({ clientData }) => {
  return (
    <div className="law-theme">
      <Header />
      <Hero />
      <Awards />
      <AboutFirm />
      <PracticeAreas />
      <WhyChooseUs />
      <Attorneys />
      <CaseResults />
      <Process />
      <Testimonials />
      <Insights />
      <FAQ />
      <Offices />
      <Contact />
      <Footer />
    </div>
  );
};

export default LawTheme;

