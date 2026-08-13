"use client";
import React from 'react';
import { Hero } from './sections/Hero';
import { SignatureBurgers } from './sections/SignatureBurgers';
import { FreshIngredients } from './sections/FreshIngredients';
import { Locations } from './sections/Locations';
import { Footer } from './sections/Footer';

export function HamburgerThemeV2() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans overflow-hidden selection:bg-yellow-500 selection:text-black">
      <Hero />
      <SignatureBurgers />
      <FreshIngredients />
      <Locations />
      <Footer />
    </div>
  );
}
