"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const testimonials = [
  {
    quote: "Finansal stratejileri sayesinde portföyümüz son 5 yılda piyasa ortalamasının çok üzerinde bir getiri sağladı. Güven ve şeffaflık mükemmel.",
    author: "Mehmet K.",
    role: "CEO, Teknoloji A.Şž."
  },
  {
    quote: "Aile ofisimizin yönetiminde gösterdikleri titizlik ve profesyonellik, gelecek nesillere bırakacağımız mirası güvence altına aldı.",
    author: "Zeynep B.",
    role: "Yönetim Kurulu Üyesi"
  },
  {
    quote: "Kurumsal satın alma sürecimizde sundukları stratejik danışmanlık paha biçilemezdi. Gerçek bir iş ortağı.",
    author: "Caner T.",
    role: "Kurucu Ortak"
  }
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal variant="fade-up">
          <Quote className="w-16 h-16 text-yellow-500 opacity-50 mx-auto mb-8" />
        </ScrollReveal>
        
        <ScrollReveal variant="fade-up" className="relative min-h-[250px] flex items-center justify-center">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`absolute transition-all duration-700 ease-in-out ${idx === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}
            >
              <p className="text-2xl md:text-3xl font-serif text-blue-950 font-light leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-slate-900">{t.author}</h4>
                <p className="text-sm text-yellow-600 font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal variant="fade-up" className="flex justify-center items-center gap-6 mt-12">
          <button onClick={prev} className="p-3 rounded-full border border-slate-300 hover:border-yellow-500 hover:text-yellow-600 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-colors min-w-[44px] min-h-[44px] m-0 p-0 flex items-center justify-center before:content-[''] before:block before:w-3 before:h-3 before:rounded-full ${idx === current ? 'before:bg-yellow-500' : 'before:bg-slate-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-3 rounded-full border border-slate-300 hover:border-yellow-500 hover:text-yellow-600 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
            <ChevronRight className="w-6 h-6" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};



