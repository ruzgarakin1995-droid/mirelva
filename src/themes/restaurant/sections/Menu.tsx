"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Başlangıçlar');
  
  const categories = ['Başlangıçlar', 'Ana Yemekler', 'Tatlılar'];
  
  const menuData = {
    'Başlangıçlar': [
      { name: "İstiridye İncisi", desc: "Mignonette incileri, havyar misket limonu, prosecco köpüğü", price: "$45" },
      { name: "Kaz Ciğeri Parfe", desc: "İncir kompostosu, kızarmış brioche, yıllanmış balzamik", price: "$55" },
      { name: "Pancar Tartar", desc: "Tütsülenmiş kaju kreması, salamura hardal tohumu", price: "$35" }
    ],
    'Ana Yemekler': [
      { name: "Portakallı Ördek", desc: "Kuru dinlendirilmiş ördek göğsü, narenciye glazesı, yaban havucu püresi", price: "$95" },
      { name: "Şili Levreği", desc: "Miso glazesı, siyah sarımsak, edamame risotto", price: "$110" },
      { name: "Trüflü Risotto", desc: "Acquerello pirinci, mevsimlik trüf mantarları, yıllanmış parmesan", price: "$85" }
    ],
    'Tatlılar': [
      { name: "Altın Yapraklı Küre", desc: "Bitter çikolata, fındık pralin, yenilebilir altın yaprak", price: "$40" },
      { name: "Vanilya Çekirdekli Sufle", desc: "Grand Marnier anglaise sos", price: "$35" },
      { name: "Limon ve Fesleğenli Tart", desc: "Beze dokunuşları, fesleğen yağı", price: "$30" }
    ]
  };

  return (
    <section id="menu" className="section-padding bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-6">À La Carte</h2>
          
          <div className="flex justify-center space-x-8 border-b border-gray-800 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`uppercase tracking-widest text-sm font-bold pb-2 transition-colors relative ${
                  activeCategory === cat ? 'text-gold' : 'text-gray-500 hover:text-white'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="menu-underline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-gold" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {menuData[activeCategory as keyof typeof menuData].map((item, idx) => (
                <div key={idx} className="flex justify-between items-baseline group">
                  <div className="w-4/5">
                    <h3 className="text-xl text-white font-serif mb-1 group-hover:text-gold transition-colors">{item.name}</h3>
                    <p className="text-gray-400 font-sans text-sm">{item.desc}</p>
                  </div>
                  <div className="text-gold font-serif text-xl">{item.price}</div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Menu;


