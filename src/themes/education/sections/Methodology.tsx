"use client";
import React from 'react';
import { Layers, Lightbulb, Target } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb className="w-6 h-6 text-purple-400" />,
    title: "Teori ve Keşif",
    desc: "En güncel akademik araştırmalarla donatılmış teorik altyapı."
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-400" />,
    title: "Pratik Uygulama",
    desc: "Gerçek dünya projeleri ve endüstri simülasyonları ile deneyim."
  },
  {
    icon: <Target className="w-6 h-6 text-indigo-400" />,
    title: "Sektörel Entegrasyon",
    desc: "Staj, bitirme projeleri ve mentorluk ile kariyere doğrudan geçiş."
  }
];

export const Methodology = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Yenilikçi Eğitim <br className="hidden lg:block"/>Modelimiz</h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">Geleneksel ezberci sistemleri geride bırakıyoruz. Sektör odaklı, proje bazlı ve tamamen deneyimsel öğrenme modelimizle geleceğin liderlerini yetiştiriyoruz.</p>
          <div className="flex flex-col gap-6 text-left">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-200">{s.title}</h4>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="aspect-square md:aspect-video lg:aspect-square w-full rounded-3xl overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" alt="Student" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};




