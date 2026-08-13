"use client";
import React from 'react';

const varieties = [
  {
    title: "Kişiye Özel (Bespoke)",
    desc: "Sadece sizin için, sizin hikayenizle sıfırdan çizilen, dünyada eşi olmayan özgün tasarımlar.",
    img: "/themes/tattoo-v4/var_1.jpg"
  },
  {
    title: "Hazır Koleksiyon (Flash Art)",
    desc: "Sanatçılarımızın kendi vizyonlarıyla yarattığı ve sadece bir kez uygulanan özel koleksiyon parçaları.",
    img: "/themes/tattoo-v4/var_2.jpg"
  },
  {
    title: "Dönüşüm (Cover-Up)",
    desc: "Eski veya istenmeyen dövmelerinizi, modern ve zarif dokunuşlarla tamamen yeni bir sanat eserine dönüştürüyoruz.",
    img: "/themes/tattoo-v4/var_3.jpg"
  }
];

export function TattooV4Varieties() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-[10px] text-[#B59461] tracking-[0.3em] uppercase block mb-4">Hizmetlerimiz</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-4">Dövme Çeşitleri.</h2>
          <div className="h-[1px] w-16 bg-[#E5E0D8] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {varieties.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-[#FAF9F6] border border-[#E5E0D8] shadow-sm">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#B59461]/0 group-hover:bg-[#B59461]/5 transition-colors duration-500"></div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="text-[#5A5853] font-light leading-relaxed text-sm px-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
