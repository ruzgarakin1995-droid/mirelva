"use client";
import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Lisans Programları",
    price: "$12,500",
    period: "/ yıl",
    desc: "4 yıllık global standartlarda mühendislik ve bilim eğitimleri.",
    features: ["Uluslararası Akreditasyon", "Kariyer Mentorluğu", "Kampüs İçi Konaklama Desteği", "Silikon Vadisi Staj İmkanı"]
  },
  {
    name: "Yüksek Lisans",
    price: "$18,000",
    period: "/ program",
    desc: "1.5 - 2 yıllık yoğun uzmanlık ve araştırma programları.",
    features: ["Özel Ar-Ge Fonları", "Birebir Akademik Danışmanlık", "Global Yayın Desteği", "Sektörel Proje Ortaklıkları"],
    popular: true
  }
];

export const Pricing = () => {
  return (
    <section className="w-full py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0f1c] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Eğitim Ücretleri & Burslar</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">Geleceğinize yapacağınız en değerli yatırım. %100'e varan başarı ve yetenek bursu imkanlarımızı inceleyin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div key={i} className={`p-8 md:p-10 rounded-3xl border flex flex-col ${p.popular ? 'bg-gradient-to-b from-blue-900/50 to-slate-900 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] relative' : 'bg-slate-900 border-slate-800'}`}>
              {p.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold uppercase rounded-full tracking-wider">
                  En Çok Tercih Edilen
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">{p.desc}</p>
              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-extrabold">{p.price}</span>
                <span className="text-slate-400 font-medium ml-2">{p.period}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-slate-300 text-sm md:text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full min-h-[44px] py-4 rounded-xl font-bold transition-all ${p.popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                Başvuru Şartlarını İncele
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



