"use client";
import React from 'react';

export function NewArrivals() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-zinc-900">Yeni Gelenler</h2>
      </div>
      <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 pb-12 gap-6 max-w-7xl mx-auto">
        {[1,2,3,4].map((i) => (
          <div key={i} className="min-w-[80vw] sm:min-w-[40vw] lg:min-w-[25vw] snap-center group cursor-pointer flex-shrink-0">
            <div className="aspect-square bg-zinc-100 mb-6 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=1470&auto=format&fit=crop" alt="Jewelry" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 className="font-serif text-xl mb-2 group-hover:text-[#D4AF37] transition-colors">Diamond Solitaire</h3>
            <p className="text-zinc-500 font-light">18k White Gold</p>
          </div>
        ))}
      </div>
    </section>
  );
}


