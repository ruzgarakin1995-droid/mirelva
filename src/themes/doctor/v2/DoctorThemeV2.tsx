
"use client";
import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import Services from './sections/Services';
import Features from './sections/Features';
import Doctors from './sections/Doctors';
import Appointment from './sections/Appointment';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import Process from './sections/Process';
import Blog from './sections/Blog';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

export default function DoctorThemeV2() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Features />
      <Doctors />
      <Process />
      <Appointment />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Blog />
      <Newsletter />
      <Footer />
    </main>
  );
}
