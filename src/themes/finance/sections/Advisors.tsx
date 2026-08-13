"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const advisors = [
  { name: "Ahmet Yılmaz", title: "Baş Yatırım Sorumlusu (CIO)", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
  { name: "Ayşe Demir", title: "Portföy Yönetim Direktörü", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
  { name: "Kaan Tekin", title: "Kurumsal Finansman Lideri", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
  { name: "Elif Kaya", title: "Risk Analiz Müdürü", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" }
];

export const Advisors = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-blue-950 mb-6">
            <TextReveal text="Lider Kadromuz" className="justify-center" />
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">Her biri alanında kanıtlanmış bir geçmişe sahip olan uzman danışmanlarımızla tanışın.</p>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((adv, idx) => (
            <ScrollRevealChild variant="fade-up" key={idx} className="group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-full aspect-[4/5] overflow-hidden">
                <img src={adv.img} alt={adv.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="p-6 text-center border-b-4 border-transparent group-hover:border-yellow-500 transition-colors duration-300">
                <h4 className="text-xl font-bold text-blue-950 mb-1">{adv.name}</h4>
                <p className="text-sm text-yellow-600 font-medium uppercase tracking-wide">{adv.title}</p>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};



