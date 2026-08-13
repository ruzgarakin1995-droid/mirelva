"use client";
import React from 'react';
const instructors = [
  {
    name: "Prof. Dr. Alan Turing",
    role: "Yapay Zeka Bölüm Başkanı",
    desc: "Eski Stanford araştırmacısı, AI etiği ve kuantum algoritmaları uzmanı.",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Dr. Elena Rostova",
    role: "Veri Bilimi Enstitüsü Direktörü",
    desc: "Büyük veri mimarileri ve makine öğrenmesi modelleri üzerine 50+ patent sahibi.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Assoc. Prof. Marcus Chen",
    role: "İnovasyon Laboratuvarı Lideri",
    desc: "Silikon Vadisi eski mühendisi, girişimcilik ve teknoloji transferi mentoru.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export const Instructors = () => {
  return (
    <section className="w-full py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <div className="text-purple-400 font-medium tracking-wider text-sm mb-3 uppercase">Akademik Kadro</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Dünya Standartlarında <br className="hidden md:block"/>Eğitmenler</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">Sektöre yön veren, küresel vizyona sahip lider akademisyenlerle birebir çalışma ayrıcalığını yaşayın.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((ins, i) => (
            <div key={i} className="group relative rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={ins.img} alt={ins.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-1">{ins.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-4">{ins.role}</p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{ins.desc}</p>
                <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
                  <button className="text-slate-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center -ml-3">
                    <span className="w-5 h-5">Icon</span>
                  </button>
                  <button className="text-slate-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                    <span className="w-5 h-5">Icon</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};





