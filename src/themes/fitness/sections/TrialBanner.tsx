"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function TrialBanner({ onOpenTrial }: { onOpenTrial: () => void }) {
  return (
    <section className="py-24 bg-cover bg-center relative bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/80" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black tracking-tighter text-white mb-6 uppercase">Evrimleşmeye Hazır mısın?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">Ücretsiz 3 günlük tam erişim geçişini al ve Nexus farkını hemen deneyimle.</p>
          <button onClick={onOpenTrial} className="bg-fuchsia-500 text-white px-12 py-5 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors text-lg shadow-[0_0_20px_rgba(217,70,239,0.4)]">
            Geçişini Al
          </button>
        </motion.div>
      </div>
    </section>
  );
}

