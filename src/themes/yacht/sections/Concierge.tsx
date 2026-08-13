"use client";
import React from 'react';
import { Plane, ShieldCheck, Gem, Car } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const services = [
  { icon: Plane, title: 'Helikopter Transferi', desc: 'Havalimanından doğrudan yatınızın güvertesine kesintisiz ulaşım.' },
  { icon: ShieldCheck, title: 'VIP Güvenlik', desc: 'Gizliliğinizi ve güvenliğinizi sağlamak üzere eğitilmiş özel personel.' },
  { icon: Gem, title: 'Kişiye Özel Etkinlikler', desc: 'Yatta gerçekleştirilecek özel partiler ve kutlamalar için eksiksiz organizasyon.' },
  { icon: Car, title: 'Karada Premium Araç', desc: 'Demirlediğiniz her limanda hazır bekleyen lüks araç filosu.' }
];

export function Concierge() {
  return (
    <section id="hizmetler" className="py-24 bg-[#0b1a2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop')" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-[#c0c0c0] tracking-[0.2em] uppercase text-sm mb-4 block">Sınır Tanımayan Hizmet</span>
        <h2 className="text-white font-serif text-[clamp(2rem,3vw+1rem,3.5rem)] leading-tight mb-16">
          <TextReveal text="ULTRA LÜKS CONCIERGE" highlightedWords={["CONCIERGE"]} highlightClassName="italic text-[#c0c0c0]" />
        </h2>
        
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => (
            <ScrollRevealChild key={idx} variant="fade-up" className="bg-[#143050]/80 backdrop-blur-sm p-8 border border-[#c0c0c0]/10 hover:border-[#c0c0c0]/50 transition-colors duration-500 group">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#0b1a2e] flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-500 border border-[#c0c0c0]/20">
                <srv.icon size={28} className="text-white group-hover:text-[#c0c0c0] transition-colors" />
              </div>
              <h3 className="text-white text-lg font-serif mb-4">{srv.title}</h3>
              <p className="text-[#c0c0c0]/70 font-light text-sm">{srv.desc}</p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}



