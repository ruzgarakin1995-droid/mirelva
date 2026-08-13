"use client";
import React from 'react';
import { GlassWater, Camera, Music, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#C19A6B]" />,
      title: "Konsept Tasarımı",
      description: "Etkinliğinizin ruhunu yansıtan, size özel renk, doku ve ambiyans kurgusunun uzman tasarımcılarımızca yaratılması."
    },
    {
      icon: <GlassWater className="w-8 h-8 text-[#C19A6B]" />,
      title: "Fine Dining Catering",
      description: "Ödüllü şeflerimiz tarafından hazırlanan, damak hafızasından silinmeyecek özel menüler ve sunumlar."
    },
    {
      icon: <Music className="w-8 h-8 text-[#C19A6B]" />,
      title: "Premium Eğlence",
      description: "Senfoni orkestralarından ünlü DJ'lere kadar gecenizi taçlandıracak en üst düzey müzik ve performans organizasyonu."
    },
    {
      icon: <Camera className="w-8 h-8 text-[#C19A6B]" />,
      title: "Fotoğraf & Prodüksiyon",
      description: "Sinematik kalitede video prodüksiyonu ve her anınızı bir moda çekimi hassasiyetinde yakalayan fotoğraf sanatçıları."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#2A2421] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Hizmetlerimiz</span>
            <h2 className="text-3xl md:text-5xl font-serif">Ayrıcalıklı <span className="italic font-light">Dokunuşlar</span></h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={0.2 + (index * 0.1)}>
              <div className="group p-8 border border-white/10 hover:border-[#C19A6B]/50 transition-colors duration-500 bg-white/5 backdrop-blur-sm h-full">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 text-[#FDFBF7]">{service.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;



