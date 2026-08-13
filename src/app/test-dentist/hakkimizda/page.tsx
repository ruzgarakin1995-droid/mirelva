"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HakkimizdaPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-32 text-center"
        >
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-8 block">
            Hikayemiz
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight mb-8">
            Sanat. Bilim. <br />
            <span className="italic text-[#D4C9C3] font-light">Estetik.</span>
          </h1>
        </motion.div>

        {/* Content Split */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-serif mb-6">Mükemmellik Arayışı</h2>
            <p className="font-sans font-light text-[#1A1A1A]/70 leading-relaxed mb-6">
              Dişmekan Ağız ve Diş Sağlığı Polikliniği, sıradan bir diş kliniği olmanın ötesinde, kişinin kendi potansiyelini keşfettiği bir estetik ve sağlık merkezidir. Biz, diş hekimliğini sadece bir tedavi süreci olarak değil, bireyin ruhunu ve sağlığını yüzüne yansıtan bir sanat eseri olarak görüyoruz.
            </p>
            <p className="font-sans font-light text-[#1A1A1A]/70 leading-relaxed">
              Kullandığımız en son teknolojiler sadece birer araç, asıl olan o aracı yönlendiren uzmanlığımız ve estetik vizyonumuzdur.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:w-1/2 w-full h-[500px] relative overflow-hidden"
          >
            <img 
              src="/lumina_after.jpg" 
              alt="Estetik Gülüş"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-[#D4C9C3]/20 mix-blend-multiply"></div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[#1A1A1A]/10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-6 block">
              Vizyon
            </span>
            <p className="font-serif text-2xl leading-relaxed">
              Dünya standartlarında, zamansız estetiği kişiye özel tasarımlarla buluşturarak, lüks diş hekimliğinde referans noktası olmak.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-6 block">
              Felsefe
            </span>
            <p className="font-serif text-2xl leading-relaxed text-[#1A1A1A]/60">
              Gülüş, bir insanın en güçlü imtiyazıdır. Onu en saf, en doğal ve en etkileyici haline getirmek tek tutkumuzdur.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
