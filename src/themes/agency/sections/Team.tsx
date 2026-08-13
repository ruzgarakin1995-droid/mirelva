"use client";
import React from 'react';
const team = [
  { name: 'Kaan Yılmaz', role: 'Kurucu & Kreatif Direktör', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Zeynep Demir', role: 'Baş Tasarımcı (Lead UI/UX)', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
  { name: 'Caner Şahin', role: 'Teknoloji Yöneticisi (CTO)', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Elif Kaya', role: 'Pazarlama Stratejisti', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
];

export const Team = () => {
  return (
    <section className="py-24 lg:py-32 bg-neutral-950 text-white border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-lime-400 text-sm font-bold tracking-widest uppercase mb-4 block">Ekibimiz</span>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Kreatif <br /> Zihinler
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm sm:text-base leading-relaxed">
            Farklı disiplinlerden gelen, tutkulu ve vizyoner uzmanlardan oluşan çekirdek kadromuzla tanışın.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-neutral-900 border border-white/5">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end gap-3 translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="w-10 h-10 rounded-full bg-lime-400 text-black flex items-center justify-center hover:bg-white transition-colors min-h-[44px] min-w-[44px]">
                    <span className="w-4 h-4">Icon</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-lime-400 text-black flex items-center justify-center hover:bg-white transition-colors min-h-[44px] min-w-[44px]">
                    <span className="w-4 h-4">Icon</span>
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-lime-400 text-sm font-semibold">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};





