"use client";
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const VenuesSection = () => {
  const venues = [
    {
      name: "Büyük Balo Salonu",
      capacity: "500-1000 Kişi",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
      type: "İç Mekan"
    },
    {
      name: "Tarihi Yalı Bahçesi",
      capacity: "200-400 Kişi",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
      type: "Dış Mekan"
    },
    {
      name: "Panoramik Teras",
      capacity: "100-250 Kişi",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
      type: "Yarı Açık"
    }
  ];

  return (
    <section className="w-full py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col mb-16 gap-6 items-start">
          <ScrollReveal delay={0.1}>
            <div>
              <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Mekanlarımız</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#4A403A] mb-8">Büyüleyici <span className="italic font-light text-[#8B7355]">Atmosferler</span></h2>
            </div>
          </ScrollReveal>
          <button className="border-b border-[#4A403A] pb-1 text-sm tracking-widest uppercase hover:text-[#C19A6B] hover:border-[#C19A6B] transition-colors">
            Tüm Mekanları İncele
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <ScrollReveal key={index} delay={0.2 + (index * 0.1)}>
              <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img 
                  src={venue.image} 
                  alt={venue.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#4A403A] text-xs px-3 py-1 uppercase tracking-wider">
                  {venue.type}
                </div>
              </div>
              <h3 className="text-2xl font-serif text-[#4A403A] mb-2">{venue.name}</h3>
              <p className="text-[#8B7355] text-sm tracking-widest uppercase">{venue.capacity}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenuesSection;




