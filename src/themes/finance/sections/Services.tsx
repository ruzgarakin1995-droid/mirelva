"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const services = [
  {
    title: "Kurumsal Finansman",
    desc: "Şirket birleşmeleri, satın almalar ve halka arz süreçlerinde stratejik finansal danışmanlık.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Özel Varlık Yönetimi",
    desc: "Yüksek net değere sahip bireyler ve aile ofisleri için özelleştirilmiş portföy stratejileri.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Küresel Piyasalar",
    desc: "Uluslararası borsalar ve emtia piyasalarına doğrudan ve kesintisiz erişim imkanı.",
    img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-blue-950 mb-6">
            <TextReveal text="Finansal Uzmanlık Alanlarımız" className="justify-center" />
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">İhtiyaçlarınıza özel olarak tasarlanmış, yenilikçi ve sonuç odaklı finansal çözümler sunuyoruz.</p>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <ScrollRevealChild variant="fade-up" key={i} className="group relative overflow-hidden bg-blue-950 text-white cursor-pointer">
              <div className="absolute inset-0 opacity-50 group-hover:opacity-30 transition-opacity duration-500">
                <img src={svc.img} alt={svc.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="relative z-10 p-10 h-96 flex flex-col justify-end">
                <div className="w-12 h-1 bg-yellow-500 mb-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <h3 className="text-2xl font-semibold mb-3">{svc.title}</h3>
                <p className="text-blue-100 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                  {svc.desc}
                </p>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};




