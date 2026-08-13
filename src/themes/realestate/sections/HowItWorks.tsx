"use client";
import { motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export default function HowItWorks() {
  const steps = [
    { title: "Keşfedin", desc: "Sizi dinliyor, hayalinizdeki evi analiz edip size en uygun portföyü sunuyoruz." },
    { title: "Gezin", desc: "Uzman danışmanlarımızla evleri yerinde veya sanal turlarla detaylıca inceleyin." },
    { title: "Sahip Olun", desc: "Hukuki, finansal ve tapu süreçlerinin tamamını sizin adınıza pürüzsüzce yönetiyoruz." }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto text-center">
        <ScrollReveal variant="fade-up">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-4">Sürecimiz</h2>
          <h3 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter mb-20">
            <TextReveal text="Kusursuz Bir Deneyim" highlightedWords={["Kusursuz"]} highlightClassName="text-[var(--accent)]" />
          </h3>
        </ScrollReveal>
        
        <ScrollReveal staggerChildren className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-stone-100 z-0" />
          {steps.map((step, idx) => (
            <ScrollRevealChild 
              key={idx}
              variant="fade-up"
              className="relative z-10 bg-white p-8 rounded-3xl border border-stone-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="w-24 h-24 bg-[var(--primary)] text-[var(--accent)] rounded-full flex items-center justify-center text-4xl font-black mx-auto mb-8 shadow-lg">
                {idx + 1}
              </div>
              <h4 className="text-2xl font-bold text-stone-900 mb-4">{step.title}</h4>
              <p className="text-stone-600 font-medium leading-relaxed">{step.desc}</p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}


