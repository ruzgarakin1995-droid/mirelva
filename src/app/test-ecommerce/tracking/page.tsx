"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';
import { PackageSearch, MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TrackingPage() {
  const [orderNo, setOrderNo] = useState('');
  const [email, setEmail] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNo && email) {
      setIsSearched(true);
    }
  };

  return (
    <FadeIn>
    <div>
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <Breadcrumb 
          items={[
            { label: 'LOCİZSA', href: '/test-ecommerce' },
            { label: 'Sipariş Takibi' }
          ]} 
          className="mb-8"
        />

        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <PackageSearch size={32} strokeWidth={1.5} className="text-zinc-900" />
          </div>
          <h1 className="text-4xl font-light tracking-tighter mb-4">Kargom <span className="font-bold">Nerede?</span></h1>
          <p className="text-zinc-500 font-light">Siparişinizin durumunu öğrenmek için sipariş numaranızı ve e-posta adresinizi girin.</p>
        </div>

        <form onSubmit={handleSearch} className="bg-zinc-50 p-8 md:p-12 border border-zinc-100 mb-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                 <label className="text-xs font-bold tracking-widest uppercase text-zinc-500">Sipariş Numarası</label>
                 <input 
                   type="text" 
                   value={orderNo}
                   onChange={e => setOrderNo(e.target.value)}
                   placeholder="Örn: YZL-123456" 
                   className="w-full border-b border-zinc-300 py-3 focus:outline-none focus:border-zinc-900 transition-colors bg-transparent text-lg" 
                   required 
                 />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold tracking-widest uppercase text-zinc-500">E-Posta Adresi</label>
                 <input 
                   type="email" 
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   placeholder="Siparişi verdiğiniz e-posta" 
                   className="w-full border-b border-zinc-300 py-3 focus:outline-none focus:border-zinc-900 transition-colors bg-transparent text-lg" 
                   required 
                 />
              </div>
           </div>
           <button type="submit" className="w-full bg-zinc-900 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
              Sorgula <MoveRight size={16} />
           </button>
        </form>

        <AnimatePresence>
           {isSearched && (
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="border border-zinc-200 p-8 text-center"
              >
                 <h3 className="text-xl font-bold tracking-tight mb-2">Siparişiniz Kargoya Verildi</h3>
                 <p className="text-zinc-600 font-light mb-6">Siparişiniz Yurtiçi Kargo'ya teslim edilmiştir. Tahmini teslimat: Yarın.</p>
                 <a href="#" className="inline-flex text-xs font-bold uppercase tracking-widest border-b-2 border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
                    Kargo Firması Sitesinden Takip Et
                 </a>
              </motion.div>
           )}
        </AnimatePresence>
      </div>
        </div>
    </FadeIn>
  );
}