"use client";
import React from 'react';
import { MapPin, Coffee, Wifi, Dumbbell } from 'lucide-react';

const facilities = [
  { icon: <Wifi className="w-5 h-5" />, label: "7/24 AÃ§Ä±k YÃ¼ksek Teknoloji KÃ¼tÃ¼phanesi" },
  { icon: <Coffee className="w-5 h-5" />, label: "Premium Sosyal Alanlar" },
  { icon: <Dumbbell className="w-5 h-5" />, label: "Olimpik Spor Kompleksi" },
  { icon: <MapPin className="w-5 h-5" />, label: "Ãƒâ€¦Ã‚Âehir Merkezine 10 Dk" },
];

export const Campus = () => {
  return (
    <section className="w-full py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0f1c] text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <div className="text-indigo-400 font-medium tracking-wider text-sm mb-3 uppercase">KampÃ¼s YaÅŸamÄ±</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Sadece Bir Okul DeÄŸil, <br className="hidden lg:block"/>Bir Ekosistem</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed">Ä°lham verici mimari, sonsuz olanaklar ve 24 saat yaÅŸayan dinamik bir kampÃ¼s. Burada her anÄ±nÄ±z dolu dolu geÃ§ecek.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {facilities.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-indigo-400 shrink-0">{f.icon}</div>
                <span className="font-medium text-slate-200 text-sm md:text-base">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(79,70,229,0.2)]">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200" alt="KampÃ¼s" className="w-full h-auto object-cover aspect-video md:aspect-[4/3] lg:aspect-[4/5]" />
          </div>
        </div>
      </div>
    </section>
  );
};




