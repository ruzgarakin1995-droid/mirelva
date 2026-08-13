"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section className="py-24 bg-[var(--surface-alt)]">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop" 
            alt="Clinic Interior" 
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-[var(--border)]">
            <div className="text-4xl font-bold text-[var(--accent)] mb-2">25+</div>
            <div className="text-sm font-semibold text-[var(--muted)]">Yıllık Tıbbi Tecrübe</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">Hakkımızda</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary)] leading-tight">
            Sağlıkta Güvenin ve <br/> Kalitenin Adresi
          </h2>
          <p className="text-[var(--muted)] text-lg mb-6 leading-relaxed">
            1998 yılından bu yana, etik değerlerden ödün vermeden, hasta odaklı yaklaşımımızla on binlerce kişiye şifa dağıtmanın gururunu yaşıyoruz. Modern tıbbın sunduğu tüm imkanları, şefkatli bir bakım anlayışıyla birleştiriyoruz.
          </p>
          <p className="text-[var(--muted)] text-lg mb-8 leading-relaxed">
            Amacımız, sadece hastalıkları tedavi etmek değil, bireylerin sağlıklı bir yaşam sürmeleri için koruyucu hekimlik uygulamalarını da yaygınlaştırmaktır.
          </p>
          
          <div className="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop" className="w-16 h-16 rounded-full object-cover" alt="Başhekim" />
            <div>
              <div className="font-bold text-xl">Prof. Dr. Ahmet Yılmaz</div>
              <div className="text-[var(--accent)]">Başhekim / Kurucu</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


