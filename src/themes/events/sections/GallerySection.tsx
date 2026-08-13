"use client";
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2162&auto=format&fit=crop"
  ];

  return (
    <section className="w-full py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1}>
            <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Portfolyo</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#4A403A]">İlham Veren <span className="italic font-light">Kareler</span></h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`group overflow-hidden relative ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''} ${idx === 1 ? 'lg:row-span-2 lg:h-[616px]' : ''}`}
            >
              <ScrollReveal delay={0.2 + (idx * 0.1)}>
                <img 
                  src={img} 
                  alt="Event Gallery" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white tracking-widest uppercase text-sm border border-white px-6 py-2">Detaylar</span>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;




