"use client";
import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-32 bg-[#FDFBF7] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Architecture Details" 
          className="w-full h-full object-cover opacity-[0.05]"
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center backdrop-blur-3xl bg-white/60 border border-black/10 shadow-2xl shadow-zinc-200/50 p-16 md:p-24"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase mb-6 block">Yeni Bir Başlangıç</span>
          <h2 className="text-4xl md:text-6xl font-light text-zinc-900 leading-tight mb-8">
            Hayalinizdeki <span className="italic font-serif">Mekanı</span> İnşa Edelim
          </h2>
          <p className="text-lg text-zinc-600 font-light mb-12 max-w-2xl mx-auto">
            Projenizi detaylandırmak ve mimari vizyonumuzu mekanınıza nasıl entegre edebileceğimizi konuşmak için bizimle iletişime geçin.
          </p>
          <button className="px-10 py-5 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-300 text-sm font-medium tracking-wider uppercase">
            Proje Görüşmesi Ayarla
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
