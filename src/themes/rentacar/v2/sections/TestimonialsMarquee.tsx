"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Emre T.",
    role: "CEO, TechFlow",
    text: "İstanbul'daki yoğun toplantı trafiğimde, LuxeDrive'ın şoförlü kiralama hizmeti sayesinde ofis konforumu yolda da sürdürebildim. Kesinlikle kusursuz.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Cem Y.",
    role: "Mimar",
    text: "Range Rover Autobiography ile yaptığımız Ege turu inanılmazdı. Araç teslimatı ve temizliği, beklentilerimin çok ötesindeydi.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Aslı G.",
    role: "Moda Tasarımcısı",
    text: "Özel defilemiz için filolarından kiraladığımız Rolls Royce, etkinliğin prestijini ikiye katladı. Concierge hizmeti çok ilgiliydi.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Burak K.",
    role: "Yatırımcı",
    text: "Havalimanına adım attığım an başlayan profesyonel süreç, otele kadar pürüzsüzdü. Vakit nakittir diyenler için tek adres.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
  }
];

export const TestimonialsMarquee = () => {
  // Duplicate array to create a seamless loop
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-32 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-4">Referanslarımız</h2>
          <p className="text-xl text-slate-500 font-light">Liderlerin ve vizyonerlerin tercihi.</p>
        </div>
        <div className="hidden md:flex items-center gap-4 text-slate-900 mt-6 md:mt-0">
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <span className="font-bold text-xl">4.9/5</span>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Left/Right Fades */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F5F5F7] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F5F5F7] to-transparent z-10"></div>

        <motion.div 
          className="flex gap-6 px-6 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {loopTestimonials.map((item, idx) => (
            <div key={idx} className="w-[350px] md:w-[450px] bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] shrink-0 flex flex-col justify-between">
              <p className="text-slate-600 text-lg leading-relaxed font-light mb-8 italic">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
