import React from 'react';
import { TattooHeader } from '@/themes/tattoo-v3/components/TattooHeader';
import { TattooFooter } from '@/themes/tattoo-v3/components/TattooFooter';
import { TattooLocation } from '@/themes/tattoo-v3/components/TattooLocation';

export default function ContactPage() {
  return (
    <>
      <TattooHeader />
      <main className="flex-1 bg-zinc-950">
        
        {/* Hero Section */}
        <section className="pt-40 pb-20 border-b border-zinc-900 bg-zinc-900/50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Bize Ulaşın</h1>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">
              İletişim
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Hayalinizdeki dövmeyi konuşmak, stüdyomuzu ziyaret etmek veya sadece bir kahve içmek için kapımız her zaman açık.
            </p>
          </div>
        </section>

        {/* Visual Contact Form Area */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 border border-zinc-800">
              
              {/* Form Side */}
              <div className="p-12 md:p-16 bg-zinc-950 flex flex-col justify-center">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Randevu <span className="text-red-600">Talebi</span></h3>
                <p className="text-zinc-400 font-light mb-10 text-sm">Formu doldurun, çalışma saatleri içinde en kısa sürede size dönüş yapalım.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">İsim Soyisim</label>
                      <input type="text" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors" placeholder="Adınız" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Telefon</label>
                      <input type="tel" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors" placeholder="0555 123 4567" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Dövme Fikriniz / Tarzı</label>
                    <input type="text" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors" placeholder="Örn: Koluma minimal bir pusula..." />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Eklemek İstedikleriniz</label>
                    <textarea className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-colors h-32 resize-none" placeholder="Tahmini boyut, bölge vb..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest py-4 transition-colors">
                    Gönder
                  </button>
                </form>
              </div>

              {/* Image Side */}
              <div className="relative hidden lg:block">
                <img 
                  src="/images/tattoo-v3/v3_style_blackwork_1786315243407.jpg" 
                  alt="Contact Visual" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-zinc-950/20"></div>
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="border-4 border-white/10 p-12 backdrop-blur-sm text-center">
                    <span className="block text-4xl font-black text-white tracking-widest uppercase mb-2">NO PAIN</span>
                    <span className="block text-4xl font-black text-red-600 tracking-widest uppercase">NO GAIN</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Existing Location Component */}
        <TattooLocation />

      </main>
      <TattooFooter />
    </>
  );
}
