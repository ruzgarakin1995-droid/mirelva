"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { ShoppingBag, Menu, X, Cpu } from 'lucide-react';

export function TechHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#05050A]/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/tech-repair-v1" className="flex items-center gap-3 group">
            <MagneticButton>
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
            </MagneticButton>
            <div className="flex flex-col">
              <span className="font-space font-bold tracking-widest text-white leading-none">THE LAB</span>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em] mt-1">Tech / Repair</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'Devices', 'Accessories', 'Support'].map((item) => (
              <Link 
                key={item} 
                href={`/tech-repair-v1/#${item.toLowerCase()}`}
                className="font-space text-xs font-semibold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <MagneticButton>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-zinc-300" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-violet-500 text-white text-[9px] font-mono font-bold flex items-center justify-center rounded-full border border-[#05050A]">
                  0
                </span>
              </button>
            </MagneticButton>

            <MagneticButton>
              <button 
                className="hidden md:flex h-10 px-6 items-center justify-center bg-white text-black font-space text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors rounded-sm"
              >
                Book Repair
              </button>
            </MagneticButton>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center border border-white/10 rounded-lg"
            >
              <Menu className="w-5 h-5 text-zinc-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-[#0A0A0F] border-l border-white/5 z-50 flex flex-col shadow-2xl"
            >
              <div className="h-20 border-b border-white/5 px-6 flex items-center justify-between">
                <span className="font-space font-bold tracking-widest text-white">CART</span>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4 text-zinc-400" />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <ShoppingBag className="w-6 h-6 text-zinc-600" />
                </div>
                <h3 className="font-space text-lg text-white mb-2">YOUR CART IS EMPTY</h3>
                <p className="text-sm text-zinc-500 font-inter">Looks like you haven't added any devices or services to your cart yet.</p>
              </div>
              
              <div className="p-6 border-t border-white/5 bg-[#05050A]">
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full h-12 bg-white text-black font-space text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors rounded-sm"
                >
                  Continue Shopping
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
