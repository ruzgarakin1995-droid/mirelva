"use client";
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  { name: 'Başlangıç', price: 'â‚º25.000', desc: 'Gelişmekte olan markalar için temel dijital varlık paketleri.', features: ['Özel Web Tasarımı (3 Sayfa)', 'Temel SEO Optimizasyonu', 'Mobil Uyumlu Yapı', '1 Yıllık Hosting & Alan Adı'] },
  { name: 'Profesyonel', price: 'â‚º75.000', desc: 'Büyüme odaklı şirketler için tam kapsamlı dijital çözüm.', features: ['Gelişmiş Web Uygulaması', 'UI/UX Denetimi & Yeniden Tasarım', 'Kapsamlı SEO & Hız Optimizasyonu', 'Özel CMS Entegrasyonu', 'Öncelikli 7/24 Destek'], popular: true },
  { name: 'Kurumsal', price: 'Özel', desc: 'Sektör liderleri için sınırları zorlayan inovatif projeler.', features: ['Native Mobil Uygulama (iOS/Android)', 'Ölçeklenebilir Mikroservis Mimarisi', 'Tam Kapsamlı Marka Kimliği', 'Gelişmiş Veri Analitiği', 'Sürekli İyileştirme & A/B Testleri'] }
];

export const Pricing = () => {
  return (
    <section className="py-24 lg:py-32 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-4 block">Yatırım Planları</span>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">Şeffaf, Değer Odaklı <br /> Fiyatlandırma</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative p-8 flex flex-col h-full ${plan.popular ? 'bg-neutral-900 border-lime-400 border-2' : 'bg-neutral-950 border-white/10 border'} hover:border-lime-400/50 transition-colors`}>
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-lime-400 text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">
                  En Popüler
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-neutral-400 text-sm h-12">{plan.desc}</p>
              
              <div className="my-8">
                <span className="text-4xl lg:text-5xl font-black">{plan.price}</span>
                {plan.price !== 'Özel' && <span className="text-neutral-500">/proje</span>}
              </div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-lime-400 shrink-0" />
                    <span className="text-sm text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full min-h-[56px] flex items-center justify-center font-bold transition-colors ${plan.popular ? 'bg-lime-400 text-black hover:bg-white' : 'bg-white/5 border border-white/20 text-white hover:bg-white/10'}`}>
                Hemen Başla
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



