"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Settings, PenToolIcon as Tool } from 'lucide-react';

const parts = [
  { name: "Dövme Pistonlar", brand: "Mahle", price: "$1,200", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { name: "Büyük Turbo Kiti", brand: "Garrett", price: "$2,500", image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { name: "Coilover Süspansiyon", brand: "KW", price: "$1,800", image: "https://images.unsplash.com/photo-1623912644265-1d48c9096fc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  { name: "Karbon Hava Filtresi", brand: "Eventuri", price: "$1,400", image: "https://images.unsplash.com/photo-1506544777-64cf9778ceb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
];

const PartsShowcase = () => {
  return (
    <section className="py-24 bg-neutral-900 border-t border-neutral-800 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-2">
              Performans <span className="text-red-500">Parçaları</span>
            </h2>
            <p className="text-neutral-400">Eşsiz projeler için premium donanımlar.</p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 border border-red-500 text-red-500 uppercase italic font-bold hover:bg-red-500 hover:text-white transition-colors">
            Tüm Parçaları Gör
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {parts.map((part, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden group hover:border-red-500/50 transition-colors"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-color"></div>
                <img src={part.image} alt={part.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 z-20 bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-bold text-red-500">
                  {part.brand}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold uppercase italic mb-1">{part.name}</h3>
                <p className="text-neutral-400 font-light mb-4">{part.price}</p>
                <button className="w-full py-2 bg-neutral-800 hover:bg-red-600 text-white font-bold uppercase text-sm tracking-wider transition-colors flex items-center justify-center gap-2">
                  <Tool className="w-4 h-4" /> Projeye Ekle
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartsShowcase;
