import React from 'react';
import { TattooHeader } from '@/themes/tattoo-v3/components/TattooHeader';
import { TattooHero } from '@/themes/tattoo-v3/components/TattooHero';
import { TattooVarieties } from '@/themes/tattoo-v3/components/TattooVarieties';
import { TattooStyles } from '@/themes/tattoo-v3/components/TattooStyles';
import { TattooArtists } from '@/themes/tattoo-v3/components/TattooArtists';
import { TattooGallery } from '@/themes/tattoo-v3/components/TattooGallery';
import { TattooProcess } from '@/themes/tattoo-v3/components/TattooProcess';
import { TattooHygiene } from '@/themes/tattoo-v3/components/TattooHygiene';
import { TattooAftercare } from '@/themes/tattoo-v3/components/TattooAftercare';
import { TattooFAQ } from '@/themes/tattoo-v3/components/TattooFAQ';
import { TattooTestimonials } from '@/themes/tattoo-v3/components/TattooTestimonials';
import { TattooInstagramFeed } from '@/themes/tattoo-v3/components/TattooInstagramFeed';
import { TattooLocation } from '@/themes/tattoo-v3/components/TattooLocation';
import { TattooBookingCTA } from '@/themes/tattoo-v3/components/TattooBookingCTA';
import { TattooFooter } from '@/themes/tattoo-v3/components/TattooFooter';

export default function TattooV3TestPage() {
  return (
    <>
      <TattooHeader />
      <main className="flex-1 flex flex-col">
        <TattooHero />
        <TattooVarieties />
        <TattooStyles />
        <TattooArtists />
        <TattooGallery />
        <TattooProcess />
        <TattooHygiene />
        <TattooTestimonials />
        <TattooAftercare />
        <TattooFAQ />
        <TattooBookingCTA />
        <TattooInstagramFeed />
        <TattooLocation />
      </main>
      <TattooFooter />
    </>
  );
}
