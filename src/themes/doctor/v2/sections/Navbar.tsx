
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Phone, Calendar } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full z-50 top-0 left-0 backdrop-blur-2xl bg-white/80 border-b border-blue-50/50 shadow-xl shadow-blue-100/40"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-800">MedikaLight</span>
        </div>
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors">Ana Sayfa</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Hizmetlerimiz</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Doktorlarımız</a>
          <a href="#" className="hover:text-blue-600 transition-colors">İletişim</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-blue-600 font-medium px-4 py-2 bg-blue-50 rounded-full">
            <Phone className="w-4 h-4" /> 444 1 234
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-medium shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all">
            <Calendar className="w-4 h-4" /> Randevu Al
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
