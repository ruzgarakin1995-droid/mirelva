"use client";
import React from 'react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const Location = () => {
  return (
    <section className="section-padding bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal
            variant="slide-right"
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold">Bize Ulaşın</span>
              <span className="h-[1px] w-12 bg-gold"></span>
            </div>
            <h2 className="text-4xl text-white font-serif mb-8">
              <TextReveal text="Konum ve Saatler" highlightedWords={["Saatler"]} highlightClassName="italic text-gray-500" />
            </h2>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-2">Adres</h4>
                <p className="text-gray-300 font-sans">
                  123 Luxury Avenue<br />
                  Metropolis, NY 10001
                </p>
              </div>
              
              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-2">Çalışma Saatleri</h4>
                <div className="text-gray-300 font-sans space-y-1">
                  <p>Salı - Perşembe: 18:00 - 23:00</p>
                  <p>Cuma - Cumartesi: 17:30 - 23:30</p>
                  <p className="text-gray-500 italic">Pazar ve Pazartesi Kapalı</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-2">İletişim</h4>
                <p className="text-gray-300 font-sans">reservations@auradining.com</p>
                <p className="text-gray-300 font-sans">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <button className="btn-outline mt-10">Yol Tarifi Al</button>
          </ScrollReveal>
          
          <ScrollReveal
            variant="scale"
            className="h-[500px] w-full bg-black relative border border-gold/20"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-sans">
              [ İnteraktif Harita Entegrasyonu ]
            </div>
            {/* Map styling overlay */}
            <div className="absolute inset-0 bg-bordeaux/5 mix-blend-color pointer-events-none"></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Location;


