"use client";
import React from 'react';
import { ArrowRight, Code, Brain, Rocket } from 'lucide-react';

const programs = [
  {
    icon: <Brain className="w-6 h-6" />,
    category: "Yapay Zeka ve Veri Bilimi",
    title: "Yapay Zeka Lisans Programı",
    duration: "4 Yıl",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Code className="w-6 h-6" />,
    category: "Yazılım Mühendisliği",
    title: "Yazılım Mimarisi Yüksek Lisans Programı",
    duration: "2 Yıl",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    category: "Girişimcilik ve İnovasyon",
    title: "Teknoloji Yönetimi Executive MBA",
    duration: "18 Ay",
    color: "from-indigo-500 to-purple-500"
  }
];

export const Programs = () => {
  return (
    <section className="w-full py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0f1c] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-blue-400 font-medium tracking-wider text-sm mb-3 uppercase">Eğitim Programları</div>
            <h2 className="text-3xl md:text-5xl font-bold">Geleceğin Mesleklerine <br className="hidden md:block"/>Bugünden Hazırlanın</h2>
          </div>
          <button className="min-h-[44px] min-w-[44px] px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-2 self-start md:self-auto text-sm md:text-base">
            Tüm Programlar <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col cursor-pointer">
              <div className={`h-2 w-full bg-gradient-to-r ${p.color}`}></div>
              <div className="p-8 flex-1 flex flex-col">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-800 mb-6 text-white`}>
                  {p.icon}
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{p.category}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">{p.title}</h3>
                <div className="mt-auto pt-6 border-t border-slate-800/50 flex items-center justify-between">
                  <span className="text-slate-400 text-sm">{p.duration}</span>
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



