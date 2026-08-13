"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Alexander J.",
    role: "Koleksiyoner",
    text: "AeroMotors'taki profesyonellik seviyesi kesinlikle eşsiz. Özel üretim GT aracımın satın alma süreci baştan sona kusursuzdu.",
  },
  {
    name: "Sarah M.",
    role: "Otomobil Tutkunu",
    text: "Danışmanlık hizmetleri beklentilerin çok ötesinde. Araçlarımın her zaman en iyi ellerde olduğunu biliyorum.",
  },
  {
    name: "Marcus V.",
    role: "Özel Müşteri",
    text: "Sadece bir galeri değil, sıra dışı bir koleksiyon oluşturmada güvenilir bir iş ortağı. Ciddi alıcılara şiddetle tavsiye ederim.",
  }
];

export function Reviews() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-32 bg-zinc-950 text-white overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <Quote className="w-24 h-24 text-white/5 absolute -top-12 left-1/2 transform -translate-x-1/2" />
        
        <div className="h-[250px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl md:text-3xl font-light italic leading-relaxed mb-8">
                "{reviews[current].text}"
              </p>
              <h4 className="text-lg font-bold tracking-widest uppercase">{reviews[current].name}</h4>
              <p className="text-gray-500 text-sm uppercase tracking-widest">{reviews[current].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button onClick={prev} className="p-3 border border-white/20 hover:bg-white hover:text-black transition-colors rounded-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === current ? "bg-white" : "bg-white/20"}`} />
            ))}
          </div>
          <button onClick={next} className="p-3 border border-white/20 hover:bg-white hover:text-black transition-colors rounded-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

