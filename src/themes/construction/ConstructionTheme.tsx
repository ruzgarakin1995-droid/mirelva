"use client";

import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { FeaturedProjectsSection } from "./sections/FeaturedProjectsSection";
import { ProcessSection } from "./sections/ProcessSection";
import { StatsSection } from "./sections/StatsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { TeamSection } from "./sections/TeamSection";
import { PartnersSection } from "./sections/PartnersSection";
import { FAQSection } from "./sections/FAQSection";
import { ContactSection } from "./sections/ContactSection";
import { CTASection } from "./sections/CTASection";
import { BlogSection } from "./sections/BlogSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { FooterSection } from "./sections/FooterSection";

export const ConstructionTheme = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500 selection:text-slate-900">
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <TeamSection />
      <PartnersSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <BlogSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
};

export default ConstructionTheme;

