"use client";

import { BeautyHeader } from './components/BeautyHeader';
import { BeautyPreloader } from './components/BeautyPreloader';
import { BeautyHero } from './components/BeautyHero';
import { BeautyStory } from './components/BeautyStory';
import { BeautyServices } from './components/BeautyServices';
import { BeautyPackages } from './components/BeautyPackages';
import { BeautyMakeup } from './components/BeautyMakeup';
import { BeautyTeam } from './components/BeautyTeam';
import { BeautyTestimonials } from './components/BeautyTestimonials';
import { BeautyInstagram } from './components/BeautyInstagram';
import { BeautyFAQ } from './components/BeautyFAQ';
import { BeautyFooter } from './components/BeautyFooter';

export default function BeautyTheme({ clientData }: { clientData?: any }) {
  return (
    <div className="bg-[#FAF5F0] min-h-screen text-[#3E2B2B] selection:bg-[#D4A373] selection:text-[#FAF5F0]">
      <BeautyPreloader />
      <BeautyHeader />
      <BeautyHero />
      <BeautyStory />
      <BeautyServices />
      <BeautyPackages />
      <BeautyMakeup />
      <BeautyTeam />
      <BeautyTestimonials />
      <BeautyInstagram />
      <BeautyFAQ />
      <BeautyFooter />
    </div>
  );
}
