'use client'
import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { MagneticButton } from './MagneticButton'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to('.parallax-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.from('.hero-text-line', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
      delay: 0.2
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-slate-100 flex items-center">
      <div className="parallax-bg absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym interior" 
          className="w-full h-[120%] object-cover object-center opacity-40 brightness-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-2">
            <h1 className="hero-text-line text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
              ENERJİNİ
            </h1>
          </div>
          <div className="overflow-hidden mb-6 flex items-center gap-4">
            <h1 className="hero-text-line text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
              KEŞFET
            </h1>
            <div className="hero-text-line hidden md:block w-32 h-4 bg-[#BAFF39] rounded-full mt-4" />
          </div>
          
          <div className="overflow-hidden mb-12">
            <p className="hero-text-line text-lg md:text-xl text-slate-600 font-medium max-w-lg">
              Sıradan spor salonlarını unut. Ferah alanlar, modern ekipmanlar ve eğlenceli bir komünite ile hedeflerine ulaş.
            </p>
          </div>

          <div className="hero-text-line">
            <MagneticButton>
              Ücretsiz Deneme Başlat
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  )
}
