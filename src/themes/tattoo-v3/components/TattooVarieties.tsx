import React from 'react';
import Image from 'next/image';

export function TattooVarieties() {
  const varieties = [
    {
      title: 'KİŞİYE ÖZEL (BESPOKE)',
      description: 'Sadece senin hikayeni anlatan, dünyada eşi benzeri olmayan, sana özel olarak sıfırdan tasarlanan özgün dövmeler.',
      image: '/images/tattoo-v3/v3_bespoke.jpg',
      delay: '0'
    },
    {
      title: 'HAZIR KOLEKSİYON (FLASH ART)',
      description: 'Sanatçılarımızın kendi vizyonlarıyla yarattığı ve her biri sadece tek bir kişiye uygulanan özel flash koleksiyon parçaları.',
      image: '/images/tattoo-v3/v3_flash_art.jpg',
      delay: '150'
    },
    {
      title: 'DÖNÜŞÜM (COVER-UP)',
      description: 'Eski veya artık seni yansıtmayan dövmelerini, modern ve kusursuz dokunuşlarla tamamen yeni bir sanat eserine dönüştürüyoruz.',
      image: '/images/tattoo-v3/v3_cover_up.jpg',
      delay: '300'
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white uppercase tracking-tight mb-4">
            Dövme <span className="text-red-600 italic">Çeşitleri.</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {varieties.map((variety, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-10 duration-700 fill-mode-both"
              style={{ animationDelay: `${variety.delay}ms` }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-8 border border-zinc-800 shadow-2xl">
                <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <Image
                  src={variety.image}
                  alt={variety.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest mb-4 group-hover:text-red-500 transition-colors">
                {variety.title}
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
                {variety.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
