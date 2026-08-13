"use client";
import { motion } from 'framer-motion';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 bg-stone-50 overflow-hidden">
      <ScrollReveal variant="fade-up" className="max-w-[1400px] mx-auto text-center mb-20">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-4">Referanslar</h2>
        <h3 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter">
          <TextReveal text="Bizi Müşterilerimizden Dinleyin" highlightedWords={["Müşterilerimizden"]} highlightClassName="text-[var(--accent)]" />
        </h3>
      </ScrollReveal>
      
      <ScrollReveal staggerChildren className="flex gap-8 overflow-x-auto pb-12 snap-x px-6 md:px-12 no-scrollbar">
        {[1, 2, 3, 4].map((i) => (
          <ScrollRevealChild 
            key={i}
            variant="slide-left"
            className="min-w-[350px] md:min-w-[450px] bg-white p-10 rounded-3xl shadow-xl snap-center border border-stone-100"
          >
            <div className="text-[var(--accent)] text-6xl font-serif leading-none mb-6">"</div>
            <p className="text-stone-600 text-lg font-medium leading-relaxed mb-8">
              "Lüks segmentte aradığım evi bulmam aylar sürdü sanıyordum. Ancak bu ekiple tanıştıktan sadece 2 hafta sonra hayalimdeki Boğaz manzaralı penthouse'un anahtarı elimdeydi. Profesyonellikleri inanılmaz."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-stone-200 rounded-full overflow-hidden">
                 <img src={`https://i.pravatar.cc/150?img=${i+10}`} className="w-full h-full object-cover" alt="User" />
              </div>
              <div className="text-left">
                <div className="font-bold text-stone-900">Ahmet Yılmaz</div>
                <div className="text-sm text-[var(--accent)] font-medium">Yatırımcı</div>
              </div>
            </div>
          </ScrollRevealChild>
        ))}
      </ScrollReveal>
    </section>
  );
}


