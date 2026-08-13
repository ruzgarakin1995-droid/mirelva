"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TestDriveModal({ isOpen, onClose }: TestDriveModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl"
          >
            <div className="hidden md:block md:w-1/2 relative bg-black">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-luminosity"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="w-12 h-[1px] bg-white/50 mb-4" />
                <h3 className="text-2xl font-bold text-white tracking-tighter mb-2">EXPERIENCE THE THRILL</h3>
                <p className="text-gray-400 text-sm font-light">Get behind the wheel of our most exclusive models. A private session tailored to your driving style.</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Book a Test Drive</h3>
              <p className="text-gray-400 text-sm mb-8">Please provide your details below and a concierge will contact you to confirm your appointment.</p>
              
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Full Name</label>
                  <input required type="text" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-white/50 transition-colors text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Phone</label>
                    <input required type="tel" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-white/50 transition-colors text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Preferred Date</label>
                    <input type="date" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-white/50 transition-colors text-sm" style={{ colorScheme: 'dark' }} />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Vehicle of Interest</label>
                  <select className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-white/50 transition-colors text-sm appearance-none">
                    <option>Aero GT 2026</option>
                    <option>Carbon Wraith</option>
                    <option>Silver Shadow EV</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                
                <button type="submit" className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors mt-8 text-sm">
                  Request Appointment
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


