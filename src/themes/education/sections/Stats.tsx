"use client";
import React from 'react';

const stats = [
  { value: "98%", label: "Mezuniyet Sonrası İlk Yıl İstihdam Oranı" },
  { value: "150+", label: "Uluslararası Kurumsal Partner" },
  { value: "$25M", label: "Yıllık Ar-Ge ve Araştırma Fonu" },
  { value: "12:1", label: "Öğrenci / Akademisyen Oranı" }
];

export const Stats = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-blue-900/50">
          {stats.map((s, i) => (
            <div key={i} className="text-center pt-8 md:pt-0 first:pt-0 flex flex-col items-center justify-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                {s.value}
              </div>
              <div className="text-blue-200 text-sm md:text-base font-medium max-w-[200px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



