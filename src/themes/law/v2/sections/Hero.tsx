"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop"
          alt="Hukuk Bürosu"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-2xl bg-white/90 border border-slate-200 text-amber-700 font-medium mb-8"
          >
            <Scale className="w-5 h-5" />
            <span>Adaletin Güvenilir Adresi</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6"
          >
            Hukuki Süreçlerinizde <br />
            <span className="text-amber-700">Profesyonel Çözüm</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
          >
            Alanında uzman avukat kadromuzla, bireysel ve kurumsal müvekkillerimize şeffaf, sonuç odaklı ve güvenilir hukuki danışmanlık hizmeti sunuyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors text-lg font-medium">
              Danışmanlık Al
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl border border-slate-200 hover:border-amber-700 hover:text-amber-700 transition-colors text-lg font-medium backdrop-blur-2xl">
              Hizmetlerimiz
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
