"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function BookingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-50 rounded-[3rem] p-10 md:p-16 text-center border border-zinc-100 shadow-xl shadow-cyan-900/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10">
            <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center text-cyan-600 mb-8 shadow-sm">
              <Calendar size={28} />
            </div>
            <h2 className="text-3xl md:text-5xl font-light text-blue-950 mb-6">Maceranızı Planlayın</h2>
            <p className="text-zinc-500 mb-10 text-lg max-w-xl mx-auto">
              Size özel hazırladığımız eşsiz yat deneyimi için rezervasyonunuzu şimdi yapın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-700 text-white rounded-full hover:bg-cyan-800 transition-colors">
                Tarih Seçin
              </button>
              <button className="px-8 py-4 bg-white text-cyan-800 border border-cyan-100 rounded-full hover:bg-zinc-50 transition-colors">
                Fiyat Teklifi Al
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}