"use client";
import React from 'react';

const partners = ["TechCorp", "Global AI", "InnovateX", "Future Labs", "Nexus Systems", "QuantumCore"];

export const Partners = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white border-y border-slate-900">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-500 text-sm md:text-base font-medium mb-8 uppercase tracking-widest">
          Global Partnerlerimiz ve Anlaşmalı Kurumlar
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((p, i) => (
            <div key={i} className="text-xl md:text-3xl font-black tracking-tighter text-slate-300 hover:text-white transition-colors cursor-default">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



