"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RealEstatePlaceholder() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full text-center py-12 p-12 border border-zinc-800 border-dashed rounded-3xl bg-zinc-900/30 backdrop-blur-sm"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Gayrimenkul Sistemi</h1>
        <p className="text-zinc-400 mb-8 text-lg">Bu sektör için LOCİZSA STUDIO ENGINE mimarisiyle sıfırdan, tam kapsamlı (Front-end + Backoffice + Database) bir platform inşa edilecek. Önceki "landing page" sürümü silinmiştir.</p>
        
        <Link href="/studio/library" className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors">
          Kütüphaneye Dön
        </Link>
      </motion.div>
    </div>
  );
}
