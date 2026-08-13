"use client";

import React from "react";
import { Server, Database, Cloud, Cpu, Command, Box } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export const SoftwareTechStack = () => {
  const stack = [
    { icon: <Cloud />, name: "Multi-Cloud", desc: "AWS, GCP, Azure" },
    { icon: <Box />, name: "Containerization", desc: "Docker & K8s" },
    { icon: <Database />, name: "Data Layer", desc: "PostgreSQL & Redis" },
    { icon: <Server />, name: "Edge Network", desc: "Global CDN" },
    { icon: <Command />, name: "Event Bus", desc: "Kafka & RabbitMQ" },
    { icon: <Cpu />, name: "Compute", desc: "Serverless & Edge" },
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <ScrollReveal variant="slide-right" className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6">Modern ve Güçlü <br/><span className="text-indigo-400">Teknoloji Yığını</span></h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Dünyanın en zorlu mühendislik problemlerini çözmek için endüstri standardı, açık kaynaklı ve kendini kanıtlamış teknolojileri kullanıyoruz.
            </p>
            <button className="text-indigo-400 font-semibold hover:text-indigo-300 flex items-center gap-2 transition-colors">
              Mimari dokümanı incele &rarr;
            </button>
          </ScrollReveal>
          
          <ScrollReveal staggerChildren staggerDelay={0.1} className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {stack.map((item, i) => (
              <ScrollRevealChild key={i} variant="scale" className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="text-indigo-400 mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-1">{item.name}</h4>
                <div className="text-sm text-slate-500">{item.desc}</div>
              </ScrollRevealChild>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

