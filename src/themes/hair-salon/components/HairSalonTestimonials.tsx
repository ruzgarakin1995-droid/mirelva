"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function HairSalonTestimonials() {
  const testimonials = [
    {
      text: "Yıllardır aradığım o doğal Paris ışıltısını sonunda buldum. İçeri girdiğiniz an hissettiğiniz o özel ilgi ve saçlarınıza gösterilen sanatsal özen inanılmaz.",
      author: "Derin Y.",
      service: "İmza Kesim & Balyaj"
    },
    {
      text: "Sadece bir kuaför salonu değil, tam anlamıyla bir arınma merkezi. Kullandıkları vegan ürünler sayesinde saçlarım hiç olmadığı kadar sağlıklı.",
      author: "Lara M.",
      service: "Keratin & Detox"
    },
    {
      text: "Céline'in vizyonu tek kelimeyle kusursuz. Saç rengimi tamamen değiştirdik ve sonuç hayal ettiğimden bile daha doğal oldu.",
      author: "Aslı K.",
      service: "Renk Değişimi"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-32 bg-[#FDFBF7] px-8 border-t border-[#352F2A]/10 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        
        {/* Giant Quote Icon Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-serif text-[#352F2A]/5 italic leading-none pointer-events-none select-none">
          "
        </div>

        <div className="relative z-10 min-h-[300px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <p className="text-2xl md:text-4xl font-serif text-[#352F2A] leading-relaxed italic mb-10 max-w-3xl">
                "{testimonials[current].text}"
              </p>
              
              <div className="flex flex-col items-center gap-2">
                <span className="text-[12px] font-sans tracking-[0.2em] uppercase text-[#352F2A] font-semibold">
                  {testimonials[current].author}
                </span>
                <span className="text-[10px] font-sans tracking-widest uppercase text-[#C4A484]">
                  {testimonials[current].service}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex gap-4 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 h-[1px] ${current === i ? 'w-10 bg-[#C4A484]' : 'w-4 bg-[#352F2A]/20 hover:bg-[#352F2A]/50'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
