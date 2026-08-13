'use client';

import Hero from './sections/Hero';
import RoasteryProcess from './sections/RoasteryProcess';
import CoffeeSelection from './sections/CoffeeSelection';
import Subscription from './sections/Subscription';
import Footer from './sections/Footer';

export default function CoffeeThemeV2() {
  return (
    <main className="min-h-screen bg-stone-50 font-sans selection:bg-amber-900 selection:text-white">
      <Hero />
      <RoasteryProcess />
      <CoffeeSelection />
      <Subscription />
      <Footer />
    </main>
  );
}
