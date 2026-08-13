import React from 'react';
import { ImmersiveHero, SensoryIntro, CulinaryPhilosophy, SignatureDishShowcase, ChefStory } from './sections/SectionsPart1';
import { IngredientsJourney, AmbientGallery, TheMenuTeaser, WinePairing, AuthenticProcess } from './sections/SectionsPart2';
import { LocalProducers, GuestExperience, PrivateDining, ReservationCTA, ImmersiveFooter } from './sections/SectionsPart3';

export const RestaurantThemeV3 = () => {
  return (
    <div className="min-h-screen bg-[#1A0F0A] font-sans selection:bg-[#E2725B] selection:text-[#1A0F0A]">
      <ImmersiveHero />
      <SensoryIntro />
      <CulinaryPhilosophy />
      <SignatureDishShowcase />
      <ChefStory />
      
      <IngredientsJourney />
      <AmbientGallery />
      <TheMenuTeaser />
      <WinePairing />
      <AuthenticProcess />
      
      <LocalProducers />
      <GuestExperience />
      <PrivateDining />
      <ReservationCTA />
      <ImmersiveFooter />
    </div>
  );
};
