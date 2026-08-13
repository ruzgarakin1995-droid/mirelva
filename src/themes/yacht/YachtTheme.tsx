"use client";
import React from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Fleet } from './sections/Fleet';
import { Destinations } from './sections/Destinations';
import { Experiences } from './sections/Experiences';
import { Amenities } from './sections/Amenities';
import { Charter } from './sections/Charter';
import { VIPMembers } from './sections/VIPMembers';
import { Concierge } from './sections/Concierge';
import { Gallery } from './sections/Gallery';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export default function YachtTheme() {
  return (
    <div className="font-sans antialiased text-[#c0c0c0] bg-[#0b1a2e] selection:bg-[#c0c0c0] selection:text-[#0b1a2e]">
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <Destinations />
      <Experiences />
      <Amenities />
      <Charter />
      <VIPMembers />
      <Concierge />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

