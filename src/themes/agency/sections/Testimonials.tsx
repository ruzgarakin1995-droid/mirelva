"use client";
import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-black text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-400/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="flex justify-center mb-12">
          <Quote className="w-16 h-16 text-lime-400 opacity-50" />
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-relaxed mb-12">
            "Sadece beklentilerimizi karşılamakla kalmadılar, dijital vizyonumuzu baştan yarattılar. Sürecin her aşamasında hissettiğimiz profesyonellik, ortaya çıkan kusursuz ürüne doğrudan yansıdı."
          </h2>
          
          <div className="flex flex-col items-center gap-4">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="CEO" className="w-16 h-16 rounded-full object-cover border-2 border-lime-400" />
            <div>
              <h4 className="text-lg font-bold">Ahmet Y.</h4>
              <p className="text-neutral-500 text-sm">CEO, Nexus Corp</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};



