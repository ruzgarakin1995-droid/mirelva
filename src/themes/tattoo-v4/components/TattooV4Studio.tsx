"use client";
import React from 'react';

export function TattooV4Studio() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="/themes/tattoo-v4/studio_1.jpg" 
                alt="Luxury Studio Interior" 
                className="w-full h-[600px] object-cover opacity-90 border border-[#E5E0D8] p-4 bg-white shadow-sm"
              />
              <img 
                src="/themes/tattoo-v4/studio_2.jpg" 
                alt="Studio Workstation" 
                className="hidden lg:block absolute -right-16 -bottom-16 w-64 h-64 object-cover border border-[#E5E0D8] p-2 bg-white shadow-md"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-[10px] text-[#B59461] tracking-[0.3em] uppercase block mb-6">Stüdyomuz</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-8 leading-tight">
              Karanlıktan <br/>
              Aydınlığa Bir Vaha.
            </h2>
            <div className="h-[1px] w-16 bg-[#E5E0D8] mb-8"></div>
            <p className="text-[#5A5853] font-light leading-relaxed mb-6">
              Geleneksel, karanlık ve gürültülü dövmeci algısını tamamen yıkıyoruz. Sizi, güneş ışığının doldurduğu, huzurlu ve steril bir sanat galerisinde ağırlıyoruz.
            </p>
            <p className="text-[#5A5853] font-light leading-relaxed mb-10">
              Uluslararası sağlık ve hijyen standartlarında kurulan stüdyomuz, endişelerinizi kapıda bırakıp kendinizi tamamen sanata teslim etmeniz için tasarlandı.
            </p>
            <button className="px-8 py-3 bg-transparent border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-xs font-light uppercase tracking-[0.2em] transition-all duration-300">
              Stüdyoyu İncele
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
