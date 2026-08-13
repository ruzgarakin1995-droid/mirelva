"use client";
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const TrackingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal variant="fade-up" className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <MapPin className="w-64 h-64 text-white" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              <TextReveal text="Yükünüzü Anlık Takip Edin" />
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              Konşimento, AWB veya takip numaranızı girerek yükünüzün güncel durumunu, lokasyonunu ve tahmini varış süresini 7/24 izleyin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20">
              <div className="flex-1 flex items-center px-4">
                <Search className="w-6 h-6 text-blue-200 mr-3" />
                <input 
                  type="text" 
                  placeholder="Takip Numaranızı Girin (Örn: TRK-847291)" 
                  className="w-full bg-transparent text-white placeholder-blue-200 outline-none text-lg h-14"
                />
              </div>
              <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
                Sorgula
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

