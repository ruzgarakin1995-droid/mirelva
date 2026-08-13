"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function TrialClassModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-zinc-950 border border-cyan-400 p-8 z-[101] shadow-[0_0_50px_rgba(34,211,238,0.2)]"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
              <X />
            </button>
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Claim Pass</h3>
            <p className="text-gray-400 text-sm mb-8 font-light">Experience 3 days of elite training. On us.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div>
                <input type="text" placeholder="FULL NAME" className="w-full bg-black border border-white/20 px-4 py-3 text-white placeholder:text-gray-600 focus:border-cyan-400 focus:outline-none transition-colors uppercase text-sm tracking-wider" required />
              </div>
              <div>
                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-black border border-white/20 px-4 py-3 text-white placeholder:text-gray-600 focus:border-cyan-400 focus:outline-none transition-colors uppercase text-sm tracking-wider" required />
              </div>
              <div>
                <input type="tel" placeholder="PHONE NUMBER" className="w-full bg-black border border-white/20 px-4 py-3 text-white placeholder:text-gray-600 focus:border-cyan-400 focus:outline-none transition-colors uppercase text-sm tracking-wider" required />
              </div>
              <button type="submit" className="w-full bg-cyan-400 text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors mt-4 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                Send Request
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

