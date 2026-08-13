'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  const { scrollY } = useScroll()
  const headerY = useTransform(scrollY, [0, 50], [0, -100])
  const headerOpacity = useTransform(scrollY, [0, 50], [1, 0])
  
  return (
    <motion.header 
      style={{ y: headerY, opacity: headerOpacity }}
      className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center"
    >
      <div className="text-2xl font-black tracking-tighter text-slate-900">
        VIBE<span className="text-[#BAFF39]">GYM</span>
      </div>
      
      <nav className="hidden md:flex gap-8 bg-white/80 backdrop-blur-md px-8 py-4 rounded-full shadow-sm border border-slate-100">
        <Link href="#about" className="text-sm font-semibold hover:text-[#BAFF39] transition-colors">Hakkımızda</Link>
        <Link href="#programs" className="text-sm font-semibold hover:text-[#BAFF39] transition-colors">Programlar</Link>
        <Link href="#trainers" className="text-sm font-semibold hover:text-[#BAFF39] transition-colors">Eğitmenler</Link>
      </nav>
      
      <button className="md:hidden w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      
      <div className="hidden md:block">
        <button className="px-6 py-3 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-colors">
          Üye Ol
        </button>
      </div>
    </motion.header>
  )
}
