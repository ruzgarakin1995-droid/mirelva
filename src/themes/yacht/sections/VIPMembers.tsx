"use client";
import React from 'react';
import { Crown, Key, Clock, Compass } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const benefits = [
  { icon: Crown, title: "Öncelikli Rezervasyon", desc: "En yoğun sezonlarda bile filo garantisi." },
  { icon: Key, title: "Özel Kasa & Depolama", desc: "Değerli eşyalarınız için yatta özel güvenlik kasası." },
  { icon: Clock, title: "Esnek Saatler", desc: "Standart check-in kurallarına bağlı kalmadan esnek biniş." },
  { icon: Compass, title: "Gizli Rotalar", desc: "Sadece VIP üyelere açık haritada olmayan koylar." }
];

export function VIPMembers() {
  return (
    <section className="py-24 bg-[#0b1a2e] border-y border-[#c0c0c0]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#143050] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#c0c0c0] rounded-full blur-[120px] opacity-10"></div>
          
          <ScrollReveal variant="fade-up" className="text-center mb-16 relative z-10">
            <Crown size={48} className="mx-auto text-[#c0c0c0] mb-6" />
            <h2 className="text-white font-serif text-[clamp(2rem,3vw+1rem,3.5rem)] mb-4">
              <TextReveal text="CLUB OCEANIA" highlightedWords={["OCEANIA"]} highlightClassName="italic text-[#c0c0c0]" />
            </h2>
            <p className="text-[#c0c0c0]/80 font-light max-w-2xl mx-auto">
              Sadece davetle girilebilen, dünya elitlerinin buluşma noktası. Kendi okyanus imparatorluğunuzu yönetin.
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {benefits.map((b, idx) => (
              <ScrollRevealChild key={idx} variant="fade-up" className="text-center">
                <div className="w-12 h-12 mx-auto border border-[#c0c0c0]/30 rounded-full flex items-center justify-center mb-4">
                  <b.icon size={20} className="text-white" />
                </div>
                <h4 className="text-white font-serif mb-2">{b.title}</h4>
                <p className="text-[#c0c0c0]/60 text-sm font-light">{b.desc}</p>
              </ScrollRevealChild>
            ))}
          </ScrollReveal>

          <div className="mt-16 text-center relative z-10">
            <button className="px-10 py-4 border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#0b1a2e] transition-colors duration-500 tracking-widest text-sm uppercase">
              ÜYELİK BAŞVURUSU
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



