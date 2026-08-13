"use client";
import React from 'react';

const clients = [
  "GLOBAL CORP", "NEXUS", "VERTEX", "LUMINA", "QUANTUM", "AURA", "SYNAPSE", "ORBIT"
];

export const Clients = () => {
  return (
    <section className="py-20 bg-black border-t border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12 text-center">
         <span className="text-neutral-500 text-sm font-bold tracking-widest uppercase">Bize Güvenen Global İş Ortaklarımız</span>
      </div>
      
      <div className="relative flex overflow-x-hidden w-full group">
        <div className="flex animate-marquee whitespace-nowrap min-w-full justify-around items-center">
          {clients.map((client, idx) => (
            <div key={idx} className="mx-8 lg:mx-16 text-2xl lg:text-4xl font-black text-neutral-800 hover:text-lime-400 transition-colors cursor-pointer select-none">
              {client}
            </div>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap min-w-full justify-around items-center absolute top-0">
          {clients.map((client, idx) => (
            <div key={idx + clients.length} className="mx-8 lg:mx-16 text-2xl lg:text-4xl font-black text-neutral-800 hover:text-lime-400 transition-colors cursor-pointer select-none">
              {client}
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};



