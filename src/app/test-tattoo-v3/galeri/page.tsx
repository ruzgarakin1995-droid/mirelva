import React from 'react';
import { TattooHeader } from '@/themes/tattoo-v3/components/TattooHeader';
import { TattooFooter } from '@/themes/tattoo-v3/components/TattooFooter';
import { TattooGallery } from '@/themes/tattoo-v3/components/TattooGallery';
import { TattooBookingCTA } from '@/themes/tattoo-v3/components/TattooBookingCTA';

export default function GalleryPage() {
  return (
    <>
      <TattooHeader />
      <main className="flex-1 bg-zinc-950">
        
        {/* Header Section */}
        <section className="pt-40 pb-10 border-b border-zinc-900">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Portfolyo</h1>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">
              Devasa Galeri
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Geçmişten bugüne stüdyomuzdan çıkan, sanatçılarımızın imzasını taşıyan dövme çalışmalarını inceleyin. Her biri benzersiz, her biri kişiye özel.
            </p>
          </div>
        </section>

        {/* Categories / Filters (Static UI for visual richness) */}
        <div className="bg-zinc-900 border-b border-zinc-800 py-6 sticky top-[72px] z-40 hidden md:block">
          <div className="container mx-auto px-6 flex justify-center gap-4">
            {['Tümü', 'Realism', 'Traditional', 'Blackwork', 'Fine Line', 'Minimalist'].map((cat, i) => (
              <button 
                key={cat} 
                className={`px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-widest transition-colors ${
                  i === 0 ? 'bg-red-600 text-white' : 'bg-transparent text-zinc-500 border border-zinc-700 hover:border-zinc-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Existing Gallery Component */}
        <div className="py-12">
          <TattooGallery />
        </div>
        
        {/* New Beautiful Editorial Section instead of repeated gallery */}
        <section className="py-24 relative bg-zinc-900 border-y border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20 pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square w-full max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay z-10"></div>
                  <img 
                    src="/images/tattoo-v3/v3_bespoke.jpg" 
                    alt="Bespoke Design Process" 
                    className="object-cover w-full h-full filter grayscale opacity-80"
                  />
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-zinc-800 z-0 hidden md:block"></div>
                  <div className="absolute -top-8 -left-8 w-48 h-48 bg-zinc-950 z-0 hidden md:block"></div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8">
                <h3 className="text-sm font-bold text-red-600 tracking-[0.3em] uppercase">Sıfırdan Zirveye</h3>
                <h4 className="text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-tighter leading-none">
                  Her Dövme <br/>
                  <span className="text-zinc-500 italic font-light">Bir Hikaye</span> Anlatır.
                </h4>
                <p className="text-zinc-400 font-light leading-relaxed text-lg max-w-xl">
                  Portfolyomuzdaki her bir eser, müşterilerimizin hayalleriyle bizim sanatsal vizyonumuzun birleştiği uzun bir tasarım sürecinin sonucudur. Klişelerden uzak, sadece sana özel ve cildinle bütünleşen tasarımlar üretiyoruz.
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-red-600"></div>
                  <span className="text-xs tracking-widest text-zinc-500 uppercase">Premium İşçilik</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TattooBookingCTA />
      </main>
      <TattooFooter />
    </>
  );
}
