"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  { text: "M4'ümü tamamen dönüştürdü. Güç aktarımı acımasız ama bir o kadar da pürüzsüz. Kesinlikle tavsiye ederim.", name: "Alex R.", car: "BMW M4 Comp" },
  { text: "Şehirdeki en iyi dyno tuner'ları. Başka bir servisin gözden kaçırdığı 50hp'yi buldular.", name: "Marcus T.", car: "Nissan GT-R" },
  { text: "Profesyonel, temiz bir dükkan ve inanılmaz sonuçlar. Stage 2 tamamen farklı bir araç gibi hissettiriyor.", name: "Sarah L.", car: "Audi RS3" }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-16 text-center">
          Sürücü <span className="text-red-500">Yorumları</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-neutral-900/50 p-8 rounded-xl border border-neutral-800 relative"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-red-500/20" />
              <p className="text-neutral-300 font-light mb-6 relative z-10 italic">"{test.text}"</p>
              <div>
                <h4 className="font-bold uppercase tracking-wider text-white">{test.name}</h4>
                <span className="text-red-500 text-sm font-bold">{test.car}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
