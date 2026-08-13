'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const colors = [
  { name: 'Saf Siyah', hex: '#000000', img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2000&auto=format&fit=crop' },
  { name: 'İnci Beyazı', hex: '#FFFFFF', img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Çok Katmanlı Kırmızı', hex: '#990000', img: 'https://images.unsplash.com/photo-1614200179396-2bdb77bc9815?q=80&w=2000&auto=format&fit=crop' }
];

export default function Configuration() {
  const [activeColor, setActiveColor] = useState(0);

  return (
    <section className="py-24 bg-zinc-950 text-white min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 w-full">
          <motion.div
             key={activeColor}
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
          >
             <img src={colors[activeColor].img} alt={colors[activeColor].name} className="w-full h-auto rounded-xl shadow-2xl" />
          </motion.div>
        </div>
        
        <div className="lg:w-1/3 w-full">
          <h2 className="text-4xl font-light mb-8">Tarzınızı Yansıtın.</h2>
          
          <div className="mb-12">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Renk</h3>
            <div className="flex gap-4">
              {colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveColor(idx)}
                  className={`w-12 h-12 rounded-full border-2 transition-all ${activeColor === idx ? 'border-white scale-110' : 'border-transparent hover:border-gray-600'}`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={color.name}
                />
              ))}
            </div>
            <p className="mt-6 text-xl font-medium">{colors[activeColor].name}</p>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex justify-between items-center">
             <span className="text-3xl font-light">$89,990</span>
             <button className="px-8 py-3 bg-white text-black font-medium text-sm tracking-widest rounded-sm hover:bg-gray-200 transition-colors">
               SATIN AL
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
