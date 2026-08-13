"use client";
import React from 'react';
import { Hero } from './sections/Hero';
import { BrandStory } from './sections/BrandStory';
import { FeaturedCollections } from './sections/FeaturedCollections';
import { NewArrivals } from './sections/NewArrivals';
import { Craftsmanship } from './sections/Craftsmanship';
import { HighJewelry } from './sections/HighJewelry';
import { LuxuryWatches } from './sections/LuxuryWatches';
import { BespokeServices } from './sections/BespokeServices';
import { Sustainability } from './sections/Sustainability';
import { Heritage } from './sections/Heritage';
import { Boutiques } from './sections/Boutiques';
import { Concierge } from './sections/Concierge';
import { Testimonials } from './sections/Testimonials';
import { Newsletter } from './sections/Newsletter';
import { Footer } from './sections/Footer';

export default function JewelryTheme() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
      <Hero />
      <BrandStory />
      <FeaturedCollections />
      <NewArrivals />
      <Craftsmanship />
      <HighJewelry />
      <LuxuryWatches />
      <BespokeServices />
      <Sustainability />
      <Heritage />
      <Boutiques />
      <Concierge />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

