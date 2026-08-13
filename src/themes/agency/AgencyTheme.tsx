"use client";
import React from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Portfolio } from './sections/Portfolio';
import { Clients } from './sections/Clients';
import { Statistics } from './sections/Statistics';
import { Process } from './sections/Process';
import { Team } from './sections/Team';
import { Testimonials } from './sections/Testimonials';
import { Awards } from './sections/Awards';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { BlogPreview } from './sections/BlogPreview';
import { Newsletter } from './sections/Newsletter';
import { Contact } from './sections/Contact';

export const AgencyTheme = () => {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-lime-400 selection:text-black">
      <Hero />
      <Clients />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Statistics />
      <Team />
      <Awards />
      <Testimonials />
      <Pricing />
      <FAQ />
      <BlogPreview />
      <Newsletter />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-black text-white border-t border-white/10 text-center text-sm text-neutral-500">
        <p>Â© {new Date().getFullYear()} Kreatif Dijital Ajans. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
};

export default AgencyTheme;

