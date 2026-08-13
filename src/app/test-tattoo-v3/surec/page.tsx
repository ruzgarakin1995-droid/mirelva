import React from 'react';
import { TattooHeader } from '@/themes/tattoo-v3/components/TattooHeader';
import { TattooFooter } from '@/themes/tattoo-v3/components/TattooFooter';
import { TattooProcess } from '@/themes/tattoo-v3/components/TattooProcess';
import { TattooFAQ } from '@/themes/tattoo-v3/components/TattooFAQ';
import { TattooAftercare } from '@/themes/tattoo-v3/components/TattooAftercare';
import { TattooBookingCTA } from '@/themes/tattoo-v3/components/TattooBookingCTA';

export default function ProcessPage() {
  return (
    <>
      <TattooHeader />
      <main className="flex-1 bg-zinc-950">
        
        {/* Header Section */}
        <section className="pt-40 pb-20 border-b border-zinc-900">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Adım Adım</h1>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">
              Süreç Nasıl İşliyor?
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Aklınızdaki fikrin kusursuz bir tasarıma ve ardından ömür boyu taşıyacağınız bir sanat eserine dönüşme yolculuğu.
            </p>
          </div>
        </section>

        {/* Existing Process Component */}
        <div className="py-12">
          <TattooProcess />
        </div>

        {/* Aftercare Section */}
        <TattooAftercare />

        {/* FAQ Section */}
        <TattooFAQ />

        <TattooBookingCTA />
      </main>
      <TattooFooter />
    </>
  );
}
