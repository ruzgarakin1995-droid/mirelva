"use client";
import React from 'react';

export function TattooV4Philosophy() {
  return (
    <section id="felsefemiz" className="py-32 bg-white border-y border-[#E5E0D8]">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="w-full lg:w-5/12">
            <h2 className="text-4xl lg:text-6xl font-serif text-[#1A1A1A] leading-tight mb-8">
              Kalıcılığın <br/><i className="text-[#8C8A84]">En Zarif</i> Hali.
            </h2>
            <div className="h-[1px] w-24 bg-[#B59461] mb-8"></div>
            <p className="text-[#5A5853] font-light leading-loose mb-6">
              Bizim için dövme, bedene kazınan agresif bir işaretten ziyade, ruhun derinliklerinden gelen bir fısıltıdır. <strong>La Ligne</strong>'de, her çizginin bir amacı, her boşluğun bir anlamı vardır.
            </p>
            <p className="text-[#5A5853] font-light leading-loose mb-10">
              Tek iğne (single needle) tekniği ile anatomiye saygı duyarak, zamanın ötesinde ve cildin doğal dokusuyla bütünleşen mikro sanat eserleri yaratıyoruz.
            </p>
            <button className="text-xs font-medium text-[#1A1A1A] tracking-[0.2em] uppercase border-b border-[#1A1A1A] pb-1 hover:text-[#B59461] hover:border-[#B59461] transition-colors">
              Hakkımızda Daha Fazla
            </button>
          </div>
          
          <div className="w-full lg:w-7/12 grid grid-cols-2 gap-4">
            <img 
              src="/themes/tattoo-v4/phil_1.jpg" 
              alt="Fine line tattoo close up" 
              className="w-full h-[500px] object-cover opacity-80 mt-12"
            />
            <img 
              src="/themes/tattoo-v4/phil_2.jpg" 
              alt="Minimalist design sketching" 
              className="w-full h-[500px] object-cover opacity-90"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
