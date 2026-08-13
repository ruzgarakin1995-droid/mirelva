"use client";

import React from "react";
import { Globe } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const TeamSection = () => {
  const team = [
    { name: "Dr. Mehmet Demir", role: "BAŞ MÜHENDİS", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Elif Kaya", role: "MİMARİ TASARIM DİREKTÖRÜ", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Caner Yıldız", role: "PROJE YÖNETİCİSİ", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-amber-500"></span> Yönetim Kadrosu
            </h4>
            <h2 className="text-4xl font-bold text-white">
              <TextReveal text="Deneyimli ve Lider Mühendislik Ekibi" highlightedWords={["Mühendislik", "Ekibi"]} highlightClassName="text-slate-400 font-light" />
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <ScrollRevealChild key={i} variant="fade-up" className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg bg-slate-800">
                <div className="absolute inset-0 bg-slate-700"></div>
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-amber-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Globe className="w-6 h-6 text-slate-900 hover:text-white cursor-pointer" />
                    <Globe className="w-6 h-6 text-slate-900 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">{member.name}</h3>
              <p className="text-amber-500/80 text-sm font-bold tracking-wider">{member.role}</p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

