"use client";

import React from "react";
import { SoftwareHeader } from "./sections/SoftwareHeader";
import { SoftwareHero } from "./sections/SoftwareHero";
import { SoftwareClients } from "./sections/SoftwareClients";
import { SoftwareFeatures } from "./sections/SoftwareFeatures";
import { SoftwareDashboard } from "./sections/SoftwareDashboard";
import { SoftwareMetrics } from "./sections/SoftwareMetrics";
import { SoftwareProcess } from "./sections/SoftwareProcess";
import { SoftwareCode } from "./sections/SoftwareCode";
import { SoftwareTestimonials } from "./sections/SoftwareTestimonials";
import { SoftwarePricing } from "./sections/SoftwarePricing";
import { SoftwareFAQ } from "./sections/SoftwareFAQ";
import { SoftwareTechStack } from "./sections/SoftwareTechStack";
import { SoftwareSecurity } from "./sections/SoftwareSecurity";
import { SoftwareCTA } from "./sections/SoftwareCTA";
import { SoftwareFooter } from "./sections/SoftwareFooter";

export const SoftwareTheme = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <SoftwareHeader />
      <SoftwareHero />
      <SoftwareClients />
      <SoftwareFeatures />
      <SoftwareDashboard />
      <SoftwareMetrics />
      <SoftwareProcess />
      <SoftwareCode />
      <SoftwareTestimonials />
      <SoftwarePricing />
      <SoftwareFAQ />
      <SoftwareTechStack />
      <SoftwareSecurity />
      <SoftwareCTA />
      <SoftwareFooter />
    </main>
  );
};

export default SoftwareTheme;

