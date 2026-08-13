"use client";
import React from "react";
import { motion } from "framer-motion";
import { Maximize, Sun, Leaf, Layers } from "lucide-react";

const featuresData = [
  {
    icon: <Maximize className="w-6 h-6" />,
    title: "Mekan Optimizasyonu",
    description: "Kullanılabilir alanı en üst düzeye çıkaran, ferah ve işlevsel iç mekan planlaması.",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Doğal Işık Entegrasyonu",
    description: "Gün ışığından maksimum düzeyde faydalanmayı sağlayan yenilikçi cephe ve pencere tasarımları.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Sürdürülebilirlik",
    description: "Çevre dostu malzemeler ve enerji verimliliği odaklı, yeşil bina sertifikalı projeler.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Malzeme Uyumu",
    description: "Beton, ahşap, cam ve çeliğin pürüzsüz geçişleriyle yaratılan zamansız estetik.",
  },
];

const Features = () => {
  return (
    <section className="py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase mb-4 block">Felsefemiz</span>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 leading-tight">
            Tasarımın <span className="italic font-serif">Temel</span> Prensipleri
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-2xl bg-white/60 border border-black/5 p-10 shadow-xl shadow-zinc-200/30 group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#FDFBF7] border border-zinc-200 text-zinc-900 mb-8 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-4">{feature.title}</h3>
              <p className="text-zinc-600 font-light leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
