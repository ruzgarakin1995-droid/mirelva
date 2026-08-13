"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Studio() {
  return (
    <section className="bg-white text-black py-32 px-6 md:px-12" id="studio">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1470&auto=format&fit=crop" 
                alt="Studio Space" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-black/50 mb-4">Çalışma Alanı</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-8">Stüdyomuz.</h2>
            <p className="text-black/70 mb-8 max-w-md leading-relaxed">
              Tasarım bölgesinin kalbinde yer alan stüdyomuz, mekansal deneyler için bir laboratuvar niteliğindedir. Açık planlı alanlar, zengin bir malzeme kütüphanesi ve derin odaklanma için sessiz mekanlar barındırarak işbirliğini teşvik edecek şekilde tasarlanmıştır.
            </p>
            <a href="#contact" className="inline-block text-xs uppercase tracking-[0.2em] border-b border-black/30 pb-1 hover:border-black transition-colors self-start">
              Bizi Ziyaret Edin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


