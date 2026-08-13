"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  return (
    <section className="py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase mb-4 block">Portfolyo</span>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 leading-tight max-w-2xl">
            Seçilmiş <span className="italic font-serif">Eserlerimiz</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Project 1 - Large */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 group relative cursor-pointer"
          >
            <div className="overflow-hidden relative h-[600px] w-full backdrop-blur-2xl bg-white/20 p-3 border border-black/5 shadow-xl shadow-zinc-200/50">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
                alt="Lumina Rezidans" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
              
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="bg-white/90 backdrop-blur-md p-6 border border-white/20">
                  <span className="text-xs tracking-widest text-zinc-500 uppercase mb-2 block">Konut Projesi</span>
                  <h3 className="text-2xl font-light text-zinc-900">Lumina Rezidans</h3>
                </div>
                <div className="w-12 h-12 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-zinc-900" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text block for Project 1 */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h4 className="text-xl font-medium text-zinc-900 mb-4">Geleceğin Konut Anlayışı</h4>
            <p className="text-zinc-600 font-light leading-relaxed mb-6">
              Lumina Rezidans, modern yaşamın tüm gereksinimlerini karşılayan, doğal ışıkla yıkanan iç mekanları ve brütalist dış cephesiyle bölgenin yeni simgesi olmaya aday bir projedir. Geniş teraslar, çevreyle kusursuz bir bütünlük sağlar.
            </p>
            <div className="flex gap-8 text-sm">
              <div>
                <span className="block font-medium text-zinc-900">Konum</span>
                <span className="text-zinc-500 font-light">İstanbul, TR</span>
              </div>
              <div>
                <span className="block font-medium text-zinc-900">Yıl</span>
                <span className="text-zinc-500 font-light">2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
