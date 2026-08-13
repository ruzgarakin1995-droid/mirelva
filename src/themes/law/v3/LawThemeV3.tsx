import React from 'react';
import Header from './sections/Header';
import MajesticHero from './sections/MajesticHero';
import FirmLegacy from './sections/FirmLegacy';
import Values from './sections/Values';
import PracticeGrid from './sections/PracticeGrid';
import CaseStudiesAccordion from './sections/CaseStudiesAccordion';
import PartnersShowcase from './sections/PartnersShowcase';
import GlobalReach from './sections/GlobalReach';
import Testimonials from './sections/Testimonials';
import Publications from './sections/Publications';
import News from './sections/News';
import Careers from './sections/Careers';
import ProBono from './sections/ProBono';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function LawThemeV3() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-yellow-600/30 selection:text-white font-sans overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-up { animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-fade-in-up { animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-fade-in { animation: fadeIn 1.5s ease-out forwards; opacity: 0; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
      `}} />
      
      <Header />
      <main className="pt-24">
        <MajesticHero />
        <FirmLegacy />
        <Values />
        <PracticeGrid />
        <CaseStudiesAccordion />
        <PartnersShowcase />
        <GlobalReach />
        <Testimonials />
        <Publications />
        <News />
        <Careers />
        <ProBono />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
