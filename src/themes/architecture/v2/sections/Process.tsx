"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Keşif ve Analiz",
    description: "Alan analizi, müşteri beklentileri ve çevresel faktörlerin derinlemesine incelenmesi."
  },
  {
    number: "02",
    title: "Konsept Geliştirme",
    description: "İlk eskizler, kütle çalışmaları ve projenin ana fikrinin 3 boyutlu modellenmesi."
  },
  {
    number: "03",
    title: "Tasarım ve Planlama",
    description: "Malzeme seçimleri, detay çözümleri ve kesinleşmiş mimari planların oluşturulması."
  },
  {
    number: "04",
    title: "Uygulama ve Teslim",
    description: "Şantiye süreçlerinin titizlikle yürütülmesi ve projenin anahtar teslim olarak tamamlanması."
  }
];

const Process = () => {
  return (
    <section className="py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* Subtle background lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "100px 100px" }}></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase mb-4 block">Yaklaşımımız</span>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 leading-tight">
            Fikirden <span className="italic font-serif">Gerçeğe</span> Dönüşüm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 backdrop-blur-2xl bg-white/70 border border-black/5 shadow-xl shadow-zinc-200/50"
            >
              <span className="text-5xl font-serif italic text-zinc-200 block mb-6">{step.number}</span>
              <h3 className="text-xl font-medium text-zinc-900 mb-4">{step.title}</h3>
              <p className="text-zinc-600 font-light leading-relaxed text-sm">
                {step.description}
              </p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-zinc-300"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
