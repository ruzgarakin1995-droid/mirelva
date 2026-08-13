"use client";

import { SalonHeader } from '@/themes/salon/components/SalonHeader';
import { SalonHero } from '@/themes/salon/components/SalonHero';
import { SalonBrandsHome } from '@/themes/salon/components/SalonBrandsHome';
import { SalonPhilosophyHome } from '@/themes/salon/components/SalonPhilosophyHome';
import { SalonProcessHome } from '@/themes/salon/components/SalonProcessHome';
import { SalonServicesHome } from '@/themes/salon/components/SalonServicesHome';
import { SalonPricingHome } from '@/themes/salon/components/SalonPricingHome';
import { SalonArtistsHome } from '@/themes/salon/components/SalonArtistsHome';
import { SalonGalleryHome } from '@/themes/salon/components/SalonGalleryHome';
import { SalonReviewsHome } from '@/themes/salon/components/SalonReviewsHome';
import { SalonCallToActionHome } from '@/themes/salon/components/SalonCallToActionHome';
import { SalonFooter } from '@/themes/salon/components/SalonFooter';

export default function SalonHomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <SalonHeader />
      <SalonHero />
      <SalonBrandsHome />
      <SalonPhilosophyHome />
      <SalonProcessHome />
      <SalonServicesHome />
      <SalonPricingHome />
      <SalonArtistsHome />
      <SalonGalleryHome />
      <SalonReviewsHome />
      <SalonCallToActionHome />
      <SalonFooter />
    </main>
  );
}
