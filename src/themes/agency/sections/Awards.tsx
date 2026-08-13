"use client";
import React from 'react';
import { Trophy } from 'lucide-react';

const awards = [
  { year: '2025', title: 'Yılın En İyi Dijital Ajansı', project: 'Agency of the Year', org: 'Awwwards' },
  { year: '2024', title: 'En İyi Kullanıcı Deneyimi (UX)', project: 'Lumina App', org: 'FWA' },
  { year: '2024', title: 'Web Tasarımında İnovasyon', project: 'Quantum AI', org: 'CSS Design Awards' },
  { year: '2023', title: 'En İyi Mobil Uygulama', project: 'Aura Lifestyle', org: 'Webby Awards' },
];

export const Awards = () => {
  return (
    <section className="py-24 lg:py-32 bg-neutral-950 text-white border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-4 block">Ödüller & Başarılar</span>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Tescillenmiş <br /> Mükemmellik
            </h2>
          </div>
          <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-colors min-h-[48px] min-w-[48px]">
            <Trophy className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col">
          {awards.map((award, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row items-start md:items-center py-8 border-b border-white/10 hover:border-lime-400 transition-colors gap-4 md:gap-8 cursor-pointer">
              <div className="w-24 md:w-32 text-neutral-500 text-lg md:text-xl font-black group-hover:text-lime-400 transition-colors">
                {award.year}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{award.title}</h3>
                <p className="text-neutral-400 text-sm">{award.project}</p>
              </div>
              <div className="mt-4 md:mt-0 text-sm font-bold tracking-widest uppercase text-lime-400 border border-lime-400/30 px-4 py-2 rounded-full bg-lime-400/5">
                {award.org}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



