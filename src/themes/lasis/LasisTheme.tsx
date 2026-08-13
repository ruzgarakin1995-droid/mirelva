"use client";

import { LasisHeader } from './components/LasisHeader';
import { LasisPreloader } from './components/LasisPreloader';
import { LasisHero } from './components/LasisHero';
import { LasisStory } from './components/LasisStory';
import { LasisServices } from './components/LasisServices';
import { LasisPackages } from './components/LasisPackages';
import { LasisMakeup } from './components/LasisMakeup';
import { LasisTeam } from './components/LasisTeam';
import { LasisTestimonials } from './components/LasisTestimonials';
import { LasisInstagram } from './components/LasisInstagram';
import { LasisFAQ } from './components/LasisFAQ';
import { LasisFooter } from './components/LasisFooter';

export default function LasisTheme({ clientData }: { clientData?: any }) {
  return (
    <div className="bg-[#FAF5F0] min-h-screen text-[#3E2B2B] selection:bg-[#D4A373] selection:text-[#FAF5F0]">
      <LasisPreloader />
      <LasisHeader />
      <LasisHero />
      <LasisStory />
      <LasisServices />
      <LasisPackages />
      <LasisMakeup />
      <LasisTeam />
      <LasisTestimonials />
      <LasisInstagram />
      <LasisFAQ />
      <LasisFooter />
    </div>
  );
}
