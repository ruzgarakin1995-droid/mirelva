"use client";

import React from "react";
import { Globe, Layers, Server, Cloud, Cpu, Database } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export const SoftwareClients = () => {
  const clients = [
    { icon: <Globe className="w-8 h-8" />, name: "GlobalTech" },
    { icon: <Layers className="w-8 h-8" />, name: "StackFlow" },
    { icon: <Server className="w-8 h-8" />, name: "DataSys" },
    { icon: <Cloud className="w-8 h-8" />, name: "CloudNative" },
    { icon: <Cpu className="w-8 h-8" />, name: "CoreProcess" },
    { icon: <Database className="w-8 h-8" />, name: "BaseMatrix" },
  ];

  return (
    <section className="py-20 bg-slate-950 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal variant="fade-up">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-12">
            Sektör Lideri Teknoloji Şirketleri Tarafından Güveniliyor
          </p>
        </ScrollReveal>
        
        <ScrollReveal staggerChildren className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700">
          {clients.map((client, index) => (
            <ScrollRevealChild key={index} variant="scale" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300">
              {client.icon}
              <span className="text-xl font-bold tracking-tight">{client.name}</span>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};
