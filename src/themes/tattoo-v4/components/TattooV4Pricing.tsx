"use client";
import React from 'react';

const pricingPlans = [
  {
    name: "Minimalist Seans",
    price: "₺2.500",
    desc: "Küçük boyutlu (1-5 cm), tek iğne detaylı, minimalist tasarımlar için ayrılan seans süresi.",
    features: [
      "1 Saatlik Seans",
      "Ücretsiz Ön Görüşme",
      "Hazır Şablon veya Basit Çizim",
      "Vegan Bakım Kremi Hediyesi"
    ]
  },
  {
    name: "Yarım Gün Seans",
    price: "₺6.000",
    desc: "Orta boyutlu (5-15 cm), detaylı, gölgelendirmeli veya birkaç küçük tasarımın birleştirildiği seans.",
    featured: true,
    features: [
      "3-4 Saatlik Seans",
      "Özel (Bespoke) Tasarım",
      "Detaylı Gölgelendirme (Whip Shading)",
      "Premium Bakım Kiti Hediyesi"
    ]
  },
  {
    name: "Tam Gün Seans",
    price: "₺10.000",
    desc: "Büyük boyutlu, oldukça kompleks, anatomiyle bütünleşen devasa projeler için tam gün kapatması.",
    features: [
      "6-8 Saatlik Seans",
      "Tamamen Kişiye Özel Projelendirme",
      "Öncelikli Randevu Takvimi",
      "VIP Stüdyo Ayrıcalıkları"
    ]
  }
];

export function TattooV4Pricing() {
  return (
    <section className="py-32 bg-[#FAF9F6] border-t border-[#E5E0D8]">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-[#E5E0D8] pb-10">
          <div>
            <span className="text-[10px] text-[#B59461] tracking-[0.3em] uppercase block mb-4">Değerimiz</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">Seans Paketleri.</h2>
          </div>
          <p className="text-[#5A5853] font-light max-w-sm text-sm hidden md:block">
            Sanatı santimetre ile değil, adandığı süre ve ustalıkla değerlendiriyoruz. Her seans, size özel bir deneyim sunmak için tasarlandı.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white p-10 flex flex-col border transition-all duration-300 hover:-translate-y-2 ${
                plan.featured ? 'border-[#1A1A1A] shadow-xl relative' : 'border-[#E5E0D8] shadow-sm'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1A1A1A] text-white text-[10px] tracking-[0.2em] uppercase py-1 px-4">
                  En Çok Tercih Edilen
                </div>
              )}
              
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">{plan.name}</h3>
              <p className="text-[#5A5853] font-light text-sm mb-6 h-16">{plan.desc}</p>
              
              <div className="text-4xl font-serif text-[#1A1A1A] mb-8 pb-8 border-b border-[#E5E0D8]">
                {plan.price} <span className="text-sm font-light text-[#8C8A84]">'den başlayan</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-[#5A5853] font-light">
                    <svg className="w-4 h-4 text-[#B59461] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                  plan.featured 
                    ? 'bg-[#1A1A1A] hover:bg-[#B59461] text-white' 
                    : 'bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                }`}
              >
                Seans Seç
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
