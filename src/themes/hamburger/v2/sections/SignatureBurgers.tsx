"use client";
import React from 'react';
import { motion } from 'framer-motion';

const burgers = [
  {
    name: "Classic Smash",
    desc: "İki adet 90g smash köfte, double cheddar, karamelize soğan, ev yapımı turşu, özel smash sos ve brioche ekmek.",
    price: "₺280",
    image: "https://images.unsplash.com/photo-1594212202875-5463f6990c64?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Truffle Mushroom",
    desc: "140g sulu köfte, trüf mayonez, sote kültür mantarı, isli çerkez peyniri ve taze roka.",
    price: "₺320",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Spicy Inferno",
    desc: "Acı severler için: Jalapeno relish, spicy mayo, pepper jack peyniri, çıtır soğan ve dana bacon.",
    price: "₺340",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
  }
];

export function SignatureBurgers() {
  return (
    <section className="py-32 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
            İmza <span className="text-yellow-500">Lezzetler</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Sıradan burgerleri unutun. Etin en güzel hali, özenle seçilmiş peynirler ve günlük pişen brioche ekmeklerimizle hazırlanan şaheserler.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {burgers.map((burger, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group bg-neutral-900 rounded-2xl overflow-hidden hover:bg-neutral-800 transition-colors border border-neutral-800 hover:border-yellow-500/50 flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={burger.image} 
                  alt={burger.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black font-black px-3 py-1 rounded-sm text-lg">
                  {burger.price}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-3xl font-black uppercase italic tracking-tight mb-4 group-hover:text-yellow-500 transition-colors">
                  {burger.name}
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-8 flex-grow">
                  {burger.desc}
                </p>
                <button className="w-full py-4 border border-neutral-700 text-white font-bold uppercase tracking-wider hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-colors rounded-sm">
                  Sepete Ekle
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
