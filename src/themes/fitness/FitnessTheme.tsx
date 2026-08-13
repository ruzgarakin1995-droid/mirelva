"use client";
'use client';

import React, { useState } from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Philosophy } from './sections/Philosophy';
import { Features } from './sections/Features';
import { Classes } from './sections/Classes';
import { Trainers } from './sections/Trainers';
import { Timetable } from './sections/Timetable';
import { Memberships } from './sections/Memberships';
import { Facilities } from './sections/Facilities';
import { Testimonials } from './sections/Testimonials';
import { AppPromo } from './sections/AppPromo';
import { FAQ } from './sections/FAQ';
import { BlogPreview } from './sections/BlogPreview';
import { TrialBanner } from './sections/TrialBanner';
import { Footer } from './sections/Footer';
import { TrialClassModal } from './components/TrialClassModal';

export default function FitnessTheme({ clientData }: { clientData?: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-black selection:bg-cyan-400 selection:text-black">
      <Header onOpenTrial={openModal} />
      <main>
        <Hero onOpenTrial={openModal} />
        <Philosophy />
        <Features />
        <Classes />
        <Facilities />
        <Trainers />
        <Timetable />
        <Testimonials />
        <AppPromo />
        <Memberships />
        <TrialBanner onOpenTrial={openModal} />
        <BlogPreview />
        <FAQ />
      </main>
      <Footer />
      <TrialClassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

