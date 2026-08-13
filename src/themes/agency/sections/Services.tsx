"use client";
import React from 'react';
import { Monitor, Smartphone, PenTool, BarChart } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Web & Platform Geliştirme',
    desc: 'Ölçeklenebilir, ultra hızlı ve modern teknolojilerle inşa edilmiş web platformları.'
  },
  {
    icon: Smartphone,
    title: 'Mobil Deneyimler',
    desc: 'Kullanıcı alışkanlıklarını baştan yazan, native kalitesinde mobil uygulamalar.'
  },
  {
    icon: PenTool,
    title: 'Marka Kimliği & UX/UI',
    desc: 'Akıllara kazınan marka kimlikleri ve kusursuz kullanıcı arayüzleri.'
  },
  {
    icon: BarChart,
    title: 'Dijital Pazarlama',
    desc: 'Veri destekli, performansa dayalı büyüme stratejileri ve kampanyalar.'
  }
];

export const Services = () => {
  return (
    <section className="py-24 lg:py-32 bg-black text-white relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-lime-400/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-4 block">Uzmanlık Alanlarımız</span>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Dijital Dünyada <br />
              İz Bırakan Çözümler
            </h2>
          </div>
          <button className="min-h-[44px] px-6 py-2 border-b-2 border-lime-400 text-white font-bold hover:text-lime-400 transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2">
            Tüm Hizmetler <span className="text-lime-400">&rarr;</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="group p-8 bg-neutral-900/50 border border-white/5 hover:border-lime-400/50 transition-all duration-300 hover:bg-neutral-900 flex flex-col h-full cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <srv.icon className="w-10 h-10 text-lime-400 mb-8 stroke-1" />
              <h3 className="text-xl font-bold mb-4">{srv.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">{srv.desc}</p>
              
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-lime-400 group-hover:text-black group-hover:border-lime-400 transition-all mt-auto">
                <span className="font-bold">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



