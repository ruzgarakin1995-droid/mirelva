import React from 'react';
import { TattooHeader } from '@/themes/tattoo-v3/components/TattooHeader';
import { TattooFooter } from '@/themes/tattoo-v3/components/TattooFooter';
import { TattooStyles } from '@/themes/tattoo-v3/components/TattooStyles';
import { TattooBookingCTA } from '@/themes/tattoo-v3/components/TattooBookingCTA';

export default function StylesPage() {
  return (
    <>
      <TattooHeader />
      <main className="flex-1 bg-zinc-950">
        
        {/* Header Section */}
        <section className="pt-40 pb-20 border-b border-zinc-900">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Uzmanlık Alanlarımız</h1>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">
              Dövme Tarzları
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Her dövme tarzı kendi içinde bir dil barındırır. Iron & Ink stüdyosunda en yetenekli sanatçıların ellerinden çıkan popüler dövme tarzlarını inceleyin.
            </p>
          </div>
        </section>

        {/* Detailed Styles Component */}
        <div className="py-12">
          <TattooStyles />
        </div>

        {/* Deep Dive (Example of rich content) */}
        <section className="py-24 bg-zinc-900 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/images/tattoo-v3/v3_style_realism_1786315239782.jpg" 
                  alt="Realism Focus" 
                  className="w-full aspect-[3/4] object-cover border border-zinc-800"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">Realism <span className="text-red-600">Odak</span> Noktamız</h3>
                <p className="text-zinc-400 font-light leading-relaxed mb-6 text-lg">
                  Realizm, fotoğraf karelerinin veya hiper-gerçekçi portrelerin iğne ile deriye aktarılma sanatıdır. Gölgelendirme (shading) tekniklerinin doruk noktasıdır. 
                </p>
                <p className="text-zinc-400 font-light leading-relaxed text-lg">
                  Siyah ve gri (Black & Grey) tonlamalarla, ışığın ve gölgenin ten üzerindeki dansını kusursuz bir şekilde yakalamaya çalışıyoruz. Bu tarzda çalışılan dövmeler, sabır ve yüksek ustalık gerektirir.
                </p>
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
