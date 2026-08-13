"use client";
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    company: "Kıdemli Yapay Zeka Mühendisi @ Google",
    text: "Burada aldığım eğitim sadece teknik bilgilerimi değil, vizyonumu da şekillendirdi. Mezun olmadan önce uluslararası projelerde yer alma şansı buldum."
  },
  {
    name: "Can Özkan",
    company: "Kurucu @ TechVenture",
    text: "İnovasyon laboratuvarlarında geçirdiğim her saat, şu an kurduğum girişimin temelini oluşturdu. Akademik kadronun mentorluğu paha biçilemez."
  }
];

export const Alumni = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Mezunlarımızın Başarıları</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">Dünyanın en iyi teknoloji şirketlerinde ve kendi girişimlerinde fark yaratan mezunlarımızla gurur duyuyoruz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 md:p-10 rounded-3xl bg-slate-900/50 border border-slate-800 relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-500/20" />
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}
              </div>
              <p className="text-lg md:text-xl text-slate-300 italic mb-8 relative z-10 leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-white text-lg">{t.name}</h4>
                <p className="text-blue-400 text-sm font-medium">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



