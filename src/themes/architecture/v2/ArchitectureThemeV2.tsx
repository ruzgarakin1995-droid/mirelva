"use client";
import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";
import Statistics from "./sections/Statistics";
import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function ArchitectureThemeV2() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-zinc-900 selection:bg-amber-100 selection:text-amber-900">
      <Hero />
      <About />
      <Features />
      <Services />
      <Portfolio />
      <Projects />
      <Process />
      <Team />
      <Testimonials />
      <Statistics />
      <CTA />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
