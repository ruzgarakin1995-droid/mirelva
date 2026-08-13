"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Beef, Wheat, Leaf } from 'lucide-react';

export function FreshIngredients() {
  return (
    <section className="py-32 bg-black relative border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop" 
                alt="Fresh Ingredients" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-2">Asla Dondurulmaz</h3>
                <p className="text-yellow-500 font-bold uppercase tracking-widest">%100 Yerli Besi</p>
              </div>
            </div>
          </motion.div>

          <div className="w-full md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-10"
            >
              Lezzetin <br/><span className="text-yellow-500">Sırrı</span> Malzemede.
            </motion.h2>

            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-6"
              >
                <div className="w-16 h-16 shrink-0 bg-neutral-900 flex items-center justify-center rounded-xl text-yellow-500">
                  <Beef className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-black uppercase italic mb-2">Günlük Çekim Et</h4>
                  <p className="text-neutral-400 leading-relaxed">
                    Dana döş ve antrikottan oluşan özel blendimiz her sabah taze olarak hazırlanır ve asla dondurucuya girmez.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-6"
              >
                <div className="w-16 h-16 shrink-0 bg-neutral-900 flex items-center justify-center rounded-xl text-yellow-500">
                  <Wheat className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-black uppercase italic mb-2">Artizan Brioche</h4>
                  <p className="text-neutral-400 leading-relaxed">
                    Bol tereyağlı, bulut gibi yumuşak brioche ekmeklerimiz kendi fırınımızda günlük olarak pişirilir.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-6"
              >
                <div className="w-16 h-16 shrink-0 bg-neutral-900 flex items-center justify-center rounded-xl text-yellow-500">
                  <Leaf className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-black uppercase italic mb-2">Taze Yeşillikler</h4>
                  <p className="text-neutral-400 leading-relaxed">
                    Özenle seçilmiş, çıtır taze malzemeler ve kendi mutfağımızda hazırlanan imza soslarımızla kusursuz uyum.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
