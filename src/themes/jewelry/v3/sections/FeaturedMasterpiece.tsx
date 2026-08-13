'use client';
import React from 'react';

export default function FeaturedMasterpiece() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="p-16 flex flex-col justify-center border border-gold-thin border-r-0 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#d4af37]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
          <h4 className="font-display text-[#d4af37] tracking-[0.3em] text-xs mb-4 uppercase relative z-10">Ayın Şaheseri</h4>
          <h2 className="font-display text-5xl text-white mb-6 relative z-10">L'Éternel <br/>Safir Yüzük</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-10 relative z-10">
            Merkezinde 12 karatlık kusursuz bir Ceylon safiri barındıran bu eşsiz tasarım, etrafını saran pırlantalarla gecenin karanlığında parlayan bir yıldızı andırıyor.
          </p>
          <div className="relative z-10">
            <button className="magnetic-btn">Detayları İncele</button>
          </div>
        </div>
        <div className="img-zoom-container border border-gold-thin h-[700px]">
          <img 
            src="https://images.unsplash.com/photo-1602752250014-411a003f0b27?q=80&w=1000&auto=format&fit=crop" 
            alt="Şaheser" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
