"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from '@/components/animations/ScrollReveal';

export function TattooHygiene() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-800">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <ScrollReveal variant="fade-up" delay={0.2} className="w-full lg:w-1/2">
            <div className="relative h-[500px] w-full border border-zinc-800 p-2">
              <img 
                src="/images/tattoo-v3/v3_hygiene_1786315301938.jpg" 
                alt="Hygiene Standards" 
                className="w-full h-full object-cover filter grayscale opacity-80"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 p-6 shadow-xl hidden md:block">
                <h4 className="text-white font-black text-2xl uppercase tracking-tighter">Premium<br/>Kalite</h4>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="slide-right" className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-2">Güvenlik & Sterilizasyon</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">%100 Hijyen Standartları</h3>
            
            <p className="text-zinc-400 font-light mb-10 leading-relaxed text-lg">
              Sanatımız kadar sağlığınıza da önem veriyoruz. Stüdyomuz uluslararası sağlık standartlarında sterilize edilmekte ve tüm ekipmanlarımız tek kullanımlıktır.
            </p>

            <ScrollReveal staggerChildren={true} staggerDelay={0.15} as="ul" className="space-y-6">
              <ScrollRevealChild variant="slide-right" as="li" className="flex items-start gap-4">
                <div className="mt-1 bg-zinc-900 p-2 rounded-full text-red-600 border border-zinc-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl uppercase tracking-tight mb-2">Tek Kullanımlık İğneler</h4>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">Her seansta paketinden ilk defa sizin için açılan, medikal kalitede tek kullanımlık steril iğneler kullanıyoruz.</p>
                </div>
              </ScrollRevealChild>
              <ScrollRevealChild variant="slide-right" as="li" className="flex items-start gap-4">
                <div className="mt-1 bg-zinc-900 p-2 rounded-full text-red-600 border border-zinc-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl uppercase tracking-tight mb-2">Vegan & Güvenli Boyalar</h4>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">Ağır metal içermeyen, dermatolojik olarak test edilmiş dünyanın en kaliteli vegan mürekkeplerini tercih ediyoruz.</p>
                </div>
              </ScrollRevealChild>
              <ScrollRevealChild variant="slide-right" as="li" className="flex items-start gap-4">
                <div className="mt-1 bg-zinc-900 p-2 rounded-full text-red-600 border border-zinc-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl uppercase tracking-tight mb-2">Çapraz Kontaminasyon Koruması</h4>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">Çalışma alanlarımız her seanstan sonra hastane sınıfı dezenfektanlarla temizlenir ve streç film ile korunur.</p>
                </div>
              </ScrollRevealChild>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
