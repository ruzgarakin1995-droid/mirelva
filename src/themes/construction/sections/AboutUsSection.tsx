"use client";

import React from "react";
import { CheckCircle2, Shield, HardHat, Award } from "lucide-react";
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const AboutUsSection = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative">
            <ScrollReveal variant="clip-path">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000" 
                  alt="Modern Bina" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="scale" className="absolute -bottom-10 -right-10 bg-amber-500 p-8 rounded-lg shadow-xl max-w-xs hidden md:block z-20">
              <h3 className="text-slate-900 font-bold text-2xl mb-2">Mükemmeliyetçilik</h3>
              <p className="text-slate-800 font-medium">Her metrekarede kalite, her detayda mühendislik harikası.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal staggerChildren className="w-full lg:w-1/2">
            <ScrollRevealChild variant="fade-up">
              <h4 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                <span className="w-8 h-px bg-amber-500"></span> Kurumsal Kimliğimiz
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                <TextReveal text="Taştan ve Çelikten Ötesini İnşa Ediyoruz" highlightedWords={["Ötesini", "İnşa", "Ediyoruz"]} highlightClassName="text-slate-400 font-light" />
              </h2>
            </ScrollRevealChild>
            
            <ScrollRevealChild variant="fade-up">
              <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
                Endüstri standartlarını yeniden belirleyen yaklaşımımızla, sadece yapılar değil, yaşam biçimleri tasarlıyoruz. Modern mühendislik pratiklerini estetikle harmanlayarak, zamana meydan okuyan, sürdürülebilir ve prestijli projelere imza atıyoruz.
              </p>
            </ScrollRevealChild>

            <ScrollRevealChild variant="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                  <Shield className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Tavizsiz Güvenlik</h4>
                  <p className="text-sm text-slate-400">Uluslararası standartlarda iş sağlığı ve yapısal güvenlik protokolleri.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                  <Award className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Ödüllü Mimari</h4>
                  <p className="text-sm text-slate-400">Estetik ve fonksiyonelliği buluşturan elit tasarım anlayışı.</p>
                </div>
              </div>
            </ScrollRevealChild>

            <ScrollRevealChild variant="fade-up">
              <ul className="space-y-4 mb-10">
                {['Sürdürülebilir yeşil bina teknolojileri', 'Zamanında ve bütçe dahilinde teslimat', 'Üst düzey malzeme kalitesi ve işçilik'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollRevealChild>

          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

