import React from 'react';
import { TattooHeader } from '@/themes/tattoo-v3/components/TattooHeader';
import { TattooFooter } from '@/themes/tattoo-v3/components/TattooFooter';
import { TattooArtists } from '@/themes/tattoo-v3/components/TattooArtists';
import { TattooBookingCTA } from '@/themes/tattoo-v3/components/TattooBookingCTA';

export default function ArtistsPage() {
  return (
    <>
      <TattooHeader />
      <main className="flex-1 bg-zinc-950">
        
        {/* Header Section */}
        <section className="pt-40 pb-20 border-b border-zinc-900">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Ekibimiz</h1>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">
              Sanatçılarımız
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Her biri kendi tarzında uzmanlaşmış, uluslararası deneyime sahip sanatçı kadromuzla tanışın.
            </p>
          </div>
        </section>

        {/* Existing Artists Component */}
        <div className="py-12">
          <TattooArtists />
        </div>

        {/* Artist Spotlights */}
        <section className="py-24 bg-zinc-900 border-y border-white/5">
          <div className="container mx-auto px-6 space-y-32">
            
            {/* Artist 1 Spotlight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Deniz <span className="text-red-600">Arslan</span></h3>
                <p className="text-zinc-500 font-bold tracking-widest uppercase text-sm mb-8">Senior Sanatçı & Kurucu Ortak</p>
                <div className="space-y-4 text-zinc-400 font-light leading-relaxed text-lg mb-8">
                  <p>
                    10 yılı aşkın süredir sektörde olan Deniz, özellikle Traditional ve Neo-Traditional tarzlarında uzmanlaşmıştır. Kalın, net çizgileri ve doygun renk paletleriyle bilinir.
                  </p>
                  <p>
                    "Dövme, sadece estetik bir tercih değil, kişinin cildine kazıdığı kalıcı bir sözdür. Benim amacım bu sözü en yüksek çözünürlükte ifade etmek."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="/images/tattoo-v3/v3_style_trad_1786315247182.jpg" alt="Deniz Work 1" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-800" />
                  <img src="/images/tattoo-v3/v3_gallery_2_1786315294323.jpg" alt="Deniz Work 2" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-800" />
                </div>
              </div>
              <div className="relative">
                <img src="/images/tattoo-v3/v3_artist_1_1786315271023.jpg" alt="Deniz Arslan Portrait" className="w-full aspect-[3/4] object-cover border border-zinc-800 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Artist 2 Spotlight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                <img src="/images/tattoo-v3/v3_artist_2_1786315279260.jpg" alt="Aslı Demir Portrait" className="w-full aspect-[3/4] object-cover border border-zinc-800 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Aslı <span className="text-red-600">Demir</span></h3>
                <p className="text-zinc-500 font-bold tracking-widest uppercase text-sm mb-8">Fine Line Uzmanı</p>
                <div className="space-y-4 text-zinc-400 font-light leading-relaxed text-lg mb-8">
                  <p>
                    Güzel Sanatlar Akademisi çıkışlı olan Aslı, minimalizm ve 'Fine Line' (tek iğne) dövme sanatında ustalaşmıştır. Detaylardaki narinlik ve zarafet onun imzasıdır.
                  </p>
                  <p>
                    "Az olan, çoğu zaman en fazla şeyi anlatır. Tek bir çizginin vücuttaki akışını ve estetiğini bulmak, benim için bir tutku."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="/images/tattoo-v3/v3_style_fine_1786315262164.jpg" alt="Asli Work 1" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-800" />
                  <img src="/images/tattoo-v3/v3_gallery_1_1786315287427.jpg" alt="Asli Work 2" className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-zinc-800" />
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
