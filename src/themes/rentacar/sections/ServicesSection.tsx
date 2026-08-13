"use client";
import React from 'react';
import { Plane, Building, GlassWater, CarFront } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const ServicesSection = () => {
  const services = [
    {
      icon: <CarFront className="w-10 h-10 text-amber-500 mb-6" />,
      title: "Şoförlü Lüks Araç Kiralama",
      desc: "Özel eğitimli, protokol kurallarına hakim profesyonel şoförlerimizle yolculuğunuzun her saniyesinin tadını çıkarın."
    },
    {
      icon: <Plane className="w-10 h-10 text-amber-500 mb-6" />,
      title: "VIP Havalimanı Transferi",
      desc: "Uçağınızdan indiğiniz anda başlayan kusursuz bir karşılama ve varış noktanıza kadar uzanan elit bir yolculuk."
    },
    {
      icon: <Building className="w-10 h-10 text-amber-500 mb-6" />,
      title: "Kurumsal Çözümler",
      desc: "Şirket yöneticileriniz ve özel misafirleriniz için prestijinizi yansıtacak kurumsal filo ve transfer yönetimi."
    },
    {
      icon: <GlassWater className="w-10 h-10 text-amber-500 mb-6" />,
      title: "Özel Gün ve Davetler",
      desc: "Düğün, gala, açılış gibi en özel günlerinizde ihtişamınızı taçlandıracak lüks otomobil seçenekleri."
    }
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal variant="fade-up">
          <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-4 block">Hizmetlerimiz</span>
          <h2 className="text-4xl md:text-5xl font-light mb-16">
            <TextReveal text="Size Özel Ayrıcalıklar" highlightedWords={["Ayrıcalıklar"]} highlightClassName="font-bold" />
          </h2>
        </ScrollReveal>
        
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {services.map((srv, idx) => (
            <ScrollRevealChild key={idx} variant="fade-up" className="bg-zinc-950 p-8 rounded-sm hover:bg-zinc-800 transition-colors duration-500 border border-zinc-900 hover:border-amber-500/30 group">
              <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                {srv.icon}
                <h3 className="text-xl font-semibold mb-4 text-zinc-100">{srv.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;

