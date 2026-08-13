import React from 'react';
import { TattooHeader } from '@/themes/tattoo-v3/components/TattooHeader';
import { TattooFooter } from '@/themes/tattoo-v3/components/TattooFooter';
import { TattooFAQ } from '@/themes/tattoo-v3/components/TattooFAQ';
import { TattooBookingCTA } from '@/themes/tattoo-v3/components/TattooBookingCTA';

export default function FAQPage() {
  return (
    <>
      <TattooHeader />
      <main className="flex-1 bg-zinc-950">
        
        {/* Hero Section */}
        <section className="pt-40 pb-20 border-b border-zinc-900 bg-[url('/images/tattoo-v3/v3_hero_1786315232478.jpg')] bg-cover bg-center bg-no-repeat relative">
          <div className="absolute inset-0 bg-zinc-950/90"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Soru İşaretlerini Silelim</h1>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">
              Aklınızdaki <br/>Sorular
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Dövme yaptırmak büyük bir karardır. Kafanıza takılan tüm soruların şeffaf ve profesyonel cevaplarını burada bulabilirsiniz.
            </p>
          </div>
        </section>

        {/* Existing FAQ Component Expanded */}
        <div className="py-12">
          <TattooFAQ />
        </div>

        {/* Additional Info Box */}
        <section className="pb-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="p-8 border border-zinc-800 bg-zinc-900/30 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="text-xl font-black text-white uppercase tracking-widest mb-2">Cevabınızı Bulamadınız mı?</h4>
                <p className="text-zinc-400 font-light text-sm">Özel bir durumunuz veya farklı bir sorunuz varsa bizimle iletişime geçmekten çekinmeyin.</p>
              </div>
              <a href="/test-tattoo-v3/iletisim" className="shrink-0 px-8 py-3 border border-red-600 text-red-600 font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors text-sm">
                Bize Yazın
              </a>
            </div>
          </div>
        </section>

        <TattooBookingCTA />
      </main>
      <TattooFooter />
    </>
  );
}
