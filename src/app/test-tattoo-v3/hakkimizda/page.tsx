import React from 'react';
import { TattooHeader } from '@/themes/tattoo-v3/components/TattooHeader';
import { TattooFooter } from '@/themes/tattoo-v3/components/TattooFooter';
import { TattooArtists } from '@/themes/tattoo-v3/components/TattooArtists';
import { TattooBookingCTA } from '@/themes/tattoo-v3/components/TattooBookingCTA';

export default function AboutPage() {
  return (
    <>
      <TattooHeader />
      <main className="flex-1 bg-zinc-950">
        
        {/* Hero Section */}
        <section className="relative pt-40 pb-32 overflow-hidden border-b border-zinc-900">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="/images/tattoo-v3/v3_hero_1786315232478.jpg" 
              alt="Studio Texture" 
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-sm font-bold text-red-600 tracking-[0.3em] uppercase mb-6">Biz Kimiz?</h1>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              Iron & <br/>Ink Hikayesi
            </h2>
            <p className="text-zinc-400 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Sadece bir dövme stüdyosu değil, İstanbul'un kalbinde doğan bir vizyon, bir sanat kolektifi.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">
                  Deri Üzerindeki <span className="text-red-600">Devrim</span>
                </h3>
                <div className="space-y-6 text-zinc-400 font-light text-lg leading-relaxed">
                  <p>
                    2018 yılında, alışılagelmiş dövme stüdyolarının ötesine geçmek; sanatı, hijyeni ve müşteri deneyimini bir üst seviyeye taşımak amacıyla yola çıktık.
                  </p>
                  <p>
                    Kuruluşumuzdan bu yana temel felsefemiz hiç değişmedi: Vücudunuz, sahip olduğunuz en değerli tuvaldir. Bizim görevimiz ise bu tuvale hayallerinizi en yüksek çözünürlükte ve en güvenli şekilde işlemektir.
                  </p>
                  <p>
                    Sterilizasyon standartlarımız bir hastaneden farksızdır. Kullandığımız tüm pigmentler vegan, tüm ekipmanlarımız tek kullanımlıktır.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/tattoo-v3/v3_hygiene_1786315301938.jpg" 
                  alt="Studio Detail" 
                  className="w-full aspect-[4/5] object-cover border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <img 
                  src="/images/tattoo-v3/v3_booking_bg_1786315555835.jpg" 
                  alt="Tattoo Process" 
                  className="w-full aspect-[4/5] object-cover border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700 mt-12"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section (Imported from Sanatcilar) */}
        <div className="border-t border-zinc-900 pt-24 pb-12">
          <div className="container mx-auto px-6 text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Yaratıcı <span className="text-red-600">Ekibimiz</span></h3>
            <p className="text-zinc-400 font-light mt-4 text-lg">Her biri kendi alanında uzman, uluslararası vizyona sahip sanatçılarımız.</p>
          </div>
          <TattooArtists />
        </div>

        <TattooBookingCTA />
      </main>
      <TattooFooter />
    </>
  );
}
