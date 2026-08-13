"use client";
import React from 'react';

export function Heritage() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-zinc-900 mb-20 text-center">Tarihçe</h2>
        <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-zinc-200">
          {[
            { year: '1920', title: 'İlk Butik', desc: "Paris Place Vendôme'da ilk butiğin kapılarını açtık." },
            { year: '1955', title: 'İkonik Kesim', desc: 'Markamıza imza atan efsanevi pırlanta kesiminin icadı.' },
            { year: '1998', title: 'Küresel Büyüme', desc: 'Dubai ve New York butikleri ile uluslararası açılım.' }
          ].map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#D4AF37] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -ml-5 md:ml-0" />
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-16 md:ml-0 p-6 bg-zinc-50 border border-zinc-100 hover:shadow-xl transition-shadow duration-500">
                <span className="text-[#D4AF37] font-serif text-3xl block mb-2">{item.year}</span>
                <h4 className="text-xl font-medium mb-3 text-zinc-900">{item.title}</h4>
                <p className="text-zinc-500 font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



