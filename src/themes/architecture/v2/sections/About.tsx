"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-32 bg-[#FDFBF7] relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 backdrop-blur-2xl bg-white/40 p-4 border border-black/5 shadow-xl shadow-zinc-200/50">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop" 
                alt="Modern İç Mimari" 
                className="w-full h-auto object-cover grayscale-[20%]"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-zinc-200 z-0 hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase mb-6 block">Hakkımızda</span>
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 mb-8 leading-tight">
              Geleneksel Sınırları <br />
              <span className="italic font-serif">Aşan Tasarımlar</span>
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed mb-8 text-lg">
              20 yılı aşkın süredir, formu ve işlevi bir araya getiren yenilikçi mimari çözümler üretiyoruz. Her projeye, mekanın ruhunu ve kullanıcının ihtiyaçlarını anlayarak başlıyoruz. Bizim için mimari, sadece binalar inşa etmek değil; insan hayatına değer katan, sürdürülebilir yaşam alanları yaratmaktır.
            </p>
            <p className="text-zinc-500 font-light leading-relaxed mb-12">
              Malzeme seçiminden ışık kullanımına kadar her detayı titizlikle planlıyor, estetikten ödün vermeden maksimum verimlilik sağlayan yapılar tasarlıyoruz. Porselen beyazı sadeliğinde, doğayla uyumlu projelerle geleceğin mimarisini bugünden inşa ediyoruz.
            </p>
            
            <div className="flex items-center gap-8 border-t border-zinc-200 pt-8">
              <div>
                <span className="block text-4xl font-light text-zinc-900 mb-1">20+</span>
                <span className="text-xs uppercase tracking-wider text-zinc-500">Yıllık Tecrübe</span>
              </div>
              <div className="w-px h-12 bg-zinc-200"></div>
              <div>
                <span className="block text-4xl font-light text-zinc-900 mb-1">150+</span>
                <span className="text-xs uppercase tracking-wider text-zinc-500">Tamamlanan Proje</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
