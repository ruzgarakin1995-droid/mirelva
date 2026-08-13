"use client";
import React from "react";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { About } from "./sections/About";
import { PracticeAreas } from "./sections/PracticeAreas";
import { Stats } from "./sections/Stats";
import { Cases } from "./sections/Cases";
import { Attorneys } from "./sections/Attorneys";
import { Process } from "./sections/Process";
import { Testimonials } from "./sections/Testimonials";
import { Consultation } from "./sections/Consultation";
import { FAQ } from "./sections/FAQ";
import { Articles } from "./sections/Articles";
import { Newsletter } from "./sections/Newsletter";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function LawThemeV2() {
  return (
    <div className="min-h-screen font-sans selection:bg-amber-700 selection:text-white">
      <Hero />
      <Features />
      <About />
      <PracticeAreas />
      <Stats />
      <Cases />
      <Attorneys />
      <Process />
      <Testimonials />
      <Consultation />
      <FAQ />
      <Articles />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}
