"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

export function Locations() {
  return (
    <section className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
            Bizi <span className="text-yellow-500">Bulun</span>
          </h2>
          <p className="text-neutral-400 text-lg uppercase tracking-widest font-bold">
            Şehrin en iyi burgerine bir adım uzaktasınız.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-yellow-500/50 transition-colors"
          >
            <h3 className="text-3xl font-black uppercase italic mb-6">Kadıköy Merkez</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 text-neutral-300">
                <MapPin className="w-6 h-6 shrink-0 text-yellow-500" />
                <p>Caferağa Mah. Moda Cad. No: 123<br/>Kadıköy, İstanbul</p>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <Clock className="w-6 h-6 shrink-0 text-yellow-500" />
                <p>11:30 - 02:00 (Her Gün)</p>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <Phone className="w-6 h-6 shrink-0 text-yellow-500" />
                <p>0216 555 00 11</p>
              </div>
            </div>
            <button className="w-full py-4 border-2 border-neutral-700 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition-colors rounded-sm">
              Yol Tarifi Al
            </button>
          </motion.div>

          {/* Location 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-yellow-500/50 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-black px-4 py-1 uppercase tracking-widest rounded-bl-xl z-10">
              Yeni Şube
            </div>
            <h3 className="text-3xl font-black uppercase italic mb-6">Beşiktaş Çarşı</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 text-neutral-300">
                <MapPin className="w-6 h-6 shrink-0 text-yellow-500" />
                <p>Sinanpaşa Mah. Şair Leyla Sok. No: 45<br/>Beşiktaş, İstanbul</p>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <Clock className="w-6 h-6 shrink-0 text-yellow-500" />
                <p>11:30 - 04:00 (Hafta Sonu)</p>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <Phone className="w-6 h-6 shrink-0 text-yellow-500" />
                <p>0212 555 00 22</p>
              </div>
            </div>
            <button className="w-full py-4 border-2 border-neutral-700 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition-colors rounded-sm">
              Yol Tarifi Al
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
