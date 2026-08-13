"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[var(--primary)]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
          alt="Clinic Hero" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Yeni Hastalar Kabul Ediliyor
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Sağlığınız İçin <br/><span className="text-blue-300">En İyisi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
            Alanında uzman kadromuz ve en son teknoloji tıbbi cihazlarımızla, size ve sevdiklerinize en üst düzeyde sağlık hizmeti sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBook}
              className="px-8 py-4 rounded-full bg-[var(--accent)] text-white font-bold text-lg hover:opacity-90 transition-all shadow-[0_0_20px_rgba(49,130,206,0.4)]">
              Hemen Randevu Al
            </button>
            <a href="#uzmanliklar" className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 transition-all text-center border border-white/20">
              Uzmanlıklarımız
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


