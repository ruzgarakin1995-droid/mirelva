"use client";
import React from 'react';

export function Boutiques() {
  return (
    <section className="py-24 md:py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-zinc-900 mb-6">Butiklerimiz</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto font-light">Lüksü ve zarafeti yerinde deneyimlemek için sizi en yakın butiğimize bekliyoruz.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 md:order-1 space-y-12">
            {[
              { city: 'İstanbul', desc: 'Zorlu Center, Meydan Katı', phone: '+90 212 555 0123' },
              { city: 'Paris', desc: 'Place Vendôme, 75001', phone: '+33 1 44 55 66 77' },
              { city: 'Dubai', desc: 'The Dubai Mall, Fashion Avenue', phone: '+971 4 333 4444' }
            ].map((store, i) => (
              <div key={i} className="group border-b border-zinc-200 pb-8 cursor-pointer">
                <h3 className="font-serif text-3xl text-zinc-900 group-hover:text-[#D4AF37] transition-colors mb-2">{store.city}</h3>
                <p className="text-zinc-500 font-light mb-1">{store.desc}</p>
                <p className="text-zinc-400 font-light text-sm">{store.phone}</p>
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] w-full">
            <img src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=1470&auto=format&fit=crop" alt="Boutique" className="absolute inset-0 w-full h-full object-cover shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}



