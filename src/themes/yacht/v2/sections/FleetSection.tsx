"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';

export function FleetSection() {
  const yachts = [
    { name: "Ocean Breeze", type: "Mega Yacht", length: "45m", guests: 12 },
    { name: "Azure Dream", type: "Motor Yacht", length: "32m", guests: 8 },
    { name: "Crystal Pearl", type: "Catamaran", length: "24m", guests: 10 }
  ];

  return (
    <section className="py-24 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-blue-900 mb-6">Özel Filomuz</h2>
          <div className="w-24 h-1 bg-cyan-200 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {yachts.map((yacht, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-3xl p-6 border border-cyan-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-64 rounded-2xl overflow-hidden mb-6 relative">
                <img src="/yacht_sea.jpg" alt={yacht.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs text-cyan-800 font-medium">
                  {yacht.type}
                </div>
              </div>
              <h3 className="text-2xl text-blue-900 mb-2">{yacht.name}</h3>
              <div className="flex justify-between text-sm text-zinc-500 mb-6 border-t border-zinc-100 pt-4">
                <span>Uzunluk: {yacht.length}</span>
                <span>Kapasite: {yacht.guests} Misafir</span>
              </div>
              <button className="w-full py-3 bg-cyan-50 text-cyan-700 rounded-xl hover:bg-cyan-100 transition-colors flex items-center justify-center gap-2">
                <Navigation size={18} />
                Detayları Gör
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}