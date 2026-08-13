'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { motion } from 'framer-motion'

export default function Footer() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    gsap.from(textRef.current, {
      scale: 0.5,
      opacity: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true
      }
    })
  }, { scope: textRef })

  return (
    <footer className="bg-slate-900 text-white pt-32 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          <div className="max-w-md">
            <h3 className="text-2xl font-black mb-4">VIBE<span className="text-[#BAFF39]">GYM</span></h3>
            <p className="text-slate-400 font-medium">Sporu bir rutinden çıkarıp, yaşam tarzına dönüştürüyoruz. Enerjini bul, sınırlarını aş.</p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="font-bold mb-4 text-[#BAFF39]">MENÜ</h4>
              <ul className="space-y-2 text-slate-400 font-medium">
                <li><a href="#about" className="hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Programlar</a></li>
                <li><a href="#trainers" className="hover:text-white transition-colors">Eğitmenler</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#BAFF39]">İLETİŞİM</h4>
              <ul className="space-y-2 text-slate-400 font-medium">
                <li>0(555) 123 45 67</li>
                <li>hello@vibegym.com</li>
                <li>İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center w-full mt-24">
          <h1 ref={textRef} className="text-[12vw] font-black leading-none tracking-tighter whitespace-nowrap opacity-10">
            HADİ BAŞLAYALIM
          </h1>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex justify-between text-sm text-slate-500 font-medium">
          <p>© 2026 VibeGym. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#BAFF39]">Instagram</a>
            <a href="#" className="hover:text-[#BAFF39]">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
