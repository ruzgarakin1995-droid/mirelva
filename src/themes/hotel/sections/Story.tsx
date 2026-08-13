"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-40 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-4">Hikayemiz</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[var(--primary)] leading-tight">
            Zamansız bir zarafet ve kusursuz misafirperverlik
          </h2>
          <div className="space-y-6 text-[var(--muted)] text-lg font-light leading-relaxed">
            <p>
              1920'lerden günümüze uzanan köklü tarihimizle, misafirlerimize sadece bir konaklama değil, her detayı özenle düşünülmüş bir yaşam stili sunuyoruz. 
            </p>
            <p>
              Klasik mimarinin modern çizgilerle buluştuğu alanlarımızda, şehrin gürültüsünden uzaklaşıp huzur dolu bir sığınağa adım atacaksınız. Kendinizi evinizde hissedeceğiniz samimi ve profesyonel hizmet anlayışımızla buradayız.
            </p>
          </div>
          <div className="mt-12 pt-12 border-t border-[var(--border)]">
            <span className="font-serif text-3xl italic">Jean-Pierre Dubois</span>
            <p className="text-sm font-bold tracking-widest uppercase mt-4 text-[var(--primary)]">Jean-Pierre Dubois, Genel Müdür</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-[var(--primary)]/5 transform translate-x-4 translate-y-4" />
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470&auto=format&fit=crop" 
            alt="Hotel Lobby" 
            className="absolute inset-0 w-full h-full object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

