"use client";

import { HairSalonHeader } from '@/themes/hair-salon/components/HairSalonHeader';
import { HairSalonHero } from '@/themes/hair-salon/components/HairSalonHero';
import { HairSalonBrands } from '@/themes/hair-salon/components/HairSalonBrands';
import { HairSalonPhilosophy } from '@/themes/hair-salon/components/HairSalonPhilosophy';
import { HairSalonRitual } from '@/themes/hair-salon/components/HairSalonRitual';
import { HairSalonServices } from '@/themes/hair-salon/components/HairSalonServices';
import { HairSalonProducts } from '@/themes/hair-salon/components/HairSalonProducts';
import { HairSalonTeam } from '@/themes/hair-salon/components/HairSalonTeam';
import { HairSalonGallery } from '@/themes/hair-salon/components/HairSalonGallery';
import { HairSalonTestimonials } from '@/themes/hair-salon/components/HairSalonTestimonials';
import { HairSalonCallToAction } from '@/themes/hair-salon/components/HairSalonCallToAction';
import { HairSalonFooter } from '@/themes/hair-salon/components/HairSalonFooter';

export default function HairSalonHomePage() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen text-[#352F2A] selection:bg-[#C4A484] selection:text-[#352F2A]">
      <HairSalonHeader />
      <HairSalonHero />
      <HairSalonBrands />
      <HairSalonPhilosophy />
      <HairSalonRitual />
      <HairSalonServices />
      <HairSalonProducts />
      <HairSalonTeam />
      <HairSalonGallery />
      <HairSalonTestimonials />
      <HairSalonCallToAction />
      <HairSalonFooter />
    </main>
  );
}
