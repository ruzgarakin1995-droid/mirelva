"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sadece bir ofis binası değil, şirket kültürümüzü yansıtan, çalışanlarımızın içinde bulunmaktan mutluluk duyduğu bir sanat eseri yarattılar.",
    author: "Ahmet Erdem",
    company: "TechNova A.Ş. CEO'su"
  },
  {
    quote: "Geleneksel malzemeleri modern bir dille yorumlamaları, evimizi hem sıcak hem de çağdaş bir mekana dönüştürdü. Sürecin her aşamasındaki profesyonellikleri takdire şayan.",
    author: "Zeynep Alkan",
    company: "Konut Projesi İşvereni"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase mb-4 block">Müşteri Yorumları</span>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 leading-tight">
            Memnuniyetin <span className="italic font-serif">İzleri</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="backdrop-blur-2xl bg-white/80 p-12 border border-black/5 shadow-xl shadow-zinc-200/50 relative"
            >
              <Quote className="w-12 h-12 text-zinc-100 absolute top-8 left-8 -z-10" />
              <p className="text-xl md:text-2xl font-light text-zinc-700 leading-relaxed mb-10 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-amber-600"></div>
                <div>
                  <h4 className="text-lg font-medium text-zinc-900">{testimonial.author}</h4>
                  <span className="text-sm font-light text-zinc-500">{testimonial.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
