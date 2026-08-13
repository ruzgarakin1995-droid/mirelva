"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SeffafPlakPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-32 flex flex-col items-center text-center"
        >
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-8 block">
            Uzmanlık / Şeffaf Plak
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight mb-8">
            Görünmez Özgürlük. <br />
            <span className="italic text-[#D4C9C3] font-light">Kusursuz Uyum.</span>
          </h1>
          <p className="max-w-2xl font-sans font-light text-[#1A1A1A]/70 leading-relaxed text-lg">
            Geleneksel metal tellerin yerini alan; neredeyse tamamen görünmez, çıkarılabilir ve yaşam tarzınızı kısıtlamayan şeffaf estetik ortodonti deneyimi.
          </p>
        </motion.div>

        {/* Split Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-8">Dijital Tarama ve <span className="italic text-[#D4C9C3] font-light">Geleceği Görmek</span></h2>
            <p className="font-sans font-light text-[#1A1A1A]/70 leading-relaxed mb-6">
              Tedavi süreciniz, ağız içi optik kameralarla saniyeler içinde alınan üç boyutlu dijital ölçü ile başlar. Klasik, mide bulandıran ölçü maddelerine veda edin.
            </p>
            <p className="font-sans font-light text-[#1A1A1A]/70 leading-relaxed mb-8">
              Tedaviye başlamadan önce, yapay zeka destekli yazılımlar sayesinde aylar sonraki mükemmel gülüşünüzün 3D simülasyonunu ekranda izleyebilirsiniz.
            </p>
            
            <div className="border-l border-[#D4C9C3] pl-6 py-2">
              <p className="font-serif text-xl text-[#1A1A1A]/80 italic">
                "Hiçbir kısıtlama olmadan özgürce gülümseyin, konuşun, yemek yiyin."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-[#D4C9C3]/20 aspect-square rounded-[3rem] flex items-center justify-center relative overflow-hidden"
          >
            {/* Artistic abstract element representing a clear aligner */}
            <div className="w-64 h-64 border-[1px] border-[#FAFAFA]/60 rounded-[4rem] backdrop-blur-md bg-[#FAFAFA]/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transform rotate-12 transition-transform duration-1000 hover:rotate-0 flex items-center justify-center">
               <span className="font-sans font-light text-[#1A1A1A]/30 tracking-widest uppercase text-xs">Invisible</span>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
