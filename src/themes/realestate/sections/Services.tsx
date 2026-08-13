"use client";
import { motion } from 'framer-motion';
import { Home, Calculator, ShieldCheck, Key } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export default function Services() {
  const services = [
    { icon: <Home size={32}/>, title: "Mülk Satışı", desc: "Mülkünüzü en doğru değerle, en kısa sürede, doğru alıcıyla buluşturuyoruz." },
    { icon: <Key size={32}/>, title: "Lüks Kiralama", desc: "Özel portföyümüzdeki lüks rezidans ve yalıları güvenle kiralayın." },
    { icon: <Calculator size={32}/>, title: "Değerleme", desc: "Lisanslı uzmanlarımız mülkünüzün gerçek pazar değerini bilimsel olarak hesaplar." },
    { icon: <ShieldCheck size={32}/>, title: "Hukuki Danışmanlık", desc: "Tüm alım-satım sözleşmeleri ve vatandaşlık işlemleri avukatlarımızca yönetilir." }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-stone-900 text-white">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 gap-16">
        <ScrollReveal variant="slide-right" className="lg:col-span-1">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-4">Hizmetlerimiz</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
            <TextReveal text="Gayrimenkulde 360° Çözümler." highlightedWords={["360°", "Çözümler."]} highlightClassName="text-[var(--accent)]" />
          </h3>
          <p className="text-stone-400 font-medium leading-relaxed mb-8">
            Sadece emlak danışmanlığı değil; finans, hukuk ve mimari alanlarında tam kapsamlı bir gayrimenkul yatırım ortaklığı sunuyoruz.
          </p>
          <button className="px-8 py-4 bg-[var(--accent)] text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors rounded-xl">
            Tüm Hizmetler
          </button>
        </ScrollReveal>
        <ScrollReveal staggerChildren className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {services.map((svc, idx) => (
            <ScrollRevealChild 
              key={idx}
              variant="fade-up"
              className="bg-stone-800/50 p-8 rounded-3xl border border-stone-700 hover:bg-stone-800 transition-colors group cursor-pointer"
            >
              <div className="text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform origin-left">{svc.icon}</div>
              <h4 className="text-xl font-bold mb-4">{svc.title}</h4>
              <p className="text-stone-400 leading-relaxed text-sm">{svc.desc}</p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}


