import React from 'react';
import { TattooV4Hero } from '@/themes/tattoo-v4/components/TattooV4Hero';
import { TattooV4Philosophy } from '@/themes/tattoo-v4/components/TattooV4Philosophy';
import { TattooV4Studio } from '@/themes/tattoo-v4/components/TattooV4Studio';
import { TattooV4Varieties } from '@/themes/tattoo-v4/components/TattooV4Varieties';
import { TattooV4Gallery } from '@/themes/tattoo-v4/components/TattooV4Gallery';
import { TattooV4Artists } from '@/themes/tattoo-v4/components/TattooV4Artists';
import { TattooV4Pricing } from '@/themes/tattoo-v4/components/TattooV4Pricing';
import { TattooV4Testimonials } from '@/themes/tattoo-v4/components/TattooV4Testimonials';
import { TattooV4FAQ } from '@/themes/tattoo-v4/components/TattooV4FAQ';
import { TattooV4Booking } from '@/themes/tattoo-v4/components/TattooV4Booking';

export default function TattooV4Page() {
  return (
    <>
      <TattooV4Hero />
      <TattooV4Philosophy />
      <TattooV4Studio />
      <TattooV4Varieties />
      <TattooV4Gallery />
      <TattooV4Artists />
      <TattooV4Pricing />
      <TattooV4Testimonials />
      <TattooV4FAQ />
      <TattooV4Booking />
    </>
  );
}
