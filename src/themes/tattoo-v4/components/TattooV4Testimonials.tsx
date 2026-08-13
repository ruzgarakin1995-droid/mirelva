"use client";
import React from 'react';

const testimonials = [
  {
    quote: "Hayatım boyunca dövme yaptırmaktan çekinmiştim. Ancak La Ligne'nin steril ortamı ve sanatçının zarif yaklaşımı tüm endişelerimi sildi.",
    author: "Zeynep T."
  },
  {
    quote: "Bedenimde taşıyacağım sanat eserinin bu kadar ince ve hatasız işlenebileceğini tahmin etmezdim. Gerçekten eşsiz bir deneyim.",
    author: "Cem K."
  },
  {
    quote: "İçeri girdiğiniz an bir SPA merkezine gelmişsiniz gibi hissediyorsunuz. Tek iğne ustalığı gerçekten muazzam.",
    author: "Lara D."
  }
];

export function TattooV4Testimonials() {
  return (
    <section className="py-32 bg-[#FAF9F6] border-y border-[#E5E0D8]">
      <div className="container mx-auto px-8 lg:px-12 text-center max-w-5xl">
        <span className="text-[10px] text-[#B59461] tracking-[0.3em] uppercase block mb-12">Misafir Deneyimleri</span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl font-serif text-[#E5E0D8] mb-4">"</span>
              <p className="text-[#5A5853] font-serif italic text-lg leading-relaxed mb-6 flex-1">
                {item.quote}
              </p>
              <span className="text-[10px] text-[#1A1A1A] tracking-[0.2em] uppercase font-semibold">
                — {item.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
