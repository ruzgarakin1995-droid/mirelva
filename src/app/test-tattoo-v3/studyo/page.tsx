import React from 'react';
import { TattooHeader } from '@/themes/tattoo-v3/components/TattooHeader';
import { TattooFooter } from '@/themes/tattoo-v3/components/TattooFooter';
import { TattooHygiene } from '@/themes/tattoo-v3/components/TattooHygiene';
import { TattooLocation } from '@/themes/tattoo-v3/components/TattooLocation';

export default function StudioPage() {
  return (
    <>
      <TattooHeader />
      <main className="flex-1 bg-zinc-950">
        
        {/* Studio Hero */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/tattoo-v3/v3_hero_1786315232478.jpg" 
              alt="Studio Interior" 
              className="w-full h-full object-cover filter grayscale opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-6">
              Iron & <span className="text-red-600">Ink</span>
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light max-w-3xl mx-auto uppercase tracking-widest">
              Sıradanlığa Karşı Bir İsyan
            </p>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="py-24 border-y border-zinc-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Manifestomuz</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8 leading-tight">
                  Vücudun <br />Senin Tuvalin.
                </h3>
                <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg">
                  <p>
                    Iron & Ink, dövmeyi sadece bir beden süslemesi olarak değil, bir kendini ifade etme sanatı, bir manifesto olarak görür. Her çizgi, her gölge, her nokta sizin hikayenizin bir parçasıdır.
                  </p>
                  <p>
                    2018 yılında İstanbul'un kalbinde kurulan stüdyomuz, sınırları zorlayan tasarımları ve tavizsiz kalite anlayışıyla kısa sürede kendi sadık kitlesini yarattı. Bizim için her müşteri, yeni bir başyapıtın başlangıcıdır.
                  </p>
                  <p>
                    Steril ortamımız, son teknoloji ekipmanlarımız ve sadece en üst kalite pigmentleri kullanma felsefemizle, sağlığınızı ve dövmenizin ömrünü en az tasarımı kadar önemsiyoruz.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] w-full overflow-hidden border border-zinc-800">
                  <img 
                    src="/images/tattoo-v3/v3_booking_bg_1786315555835.jpg" 
                    alt="Tattoo Equipment" 
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-red-600"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-red-600"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Hygiene Standards */}
        <TattooHygiene />
        
        {/* Location & Contact */}
        <TattooLocation />

      </main>
      <TattooFooter />
    </>
  );
}
