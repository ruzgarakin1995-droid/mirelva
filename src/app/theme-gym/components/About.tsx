'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const lines = gsap.utils.toArray('.reveal-line')
    
    lines.forEach((line: any) => {
      gsap.from(line, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: line,
          start: 'top 85%',
        }
      })
    })
  }, { scope: containerRef })

  return (
    <section id="about" ref={containerRef} className="py-32 bg-white px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
          <div className="overflow-hidden mb-2">
            <div className="reveal-line">BİZ SADECE BİR SPOR SALONU DEĞİLİZ.</div>
          </div>
          <div className="overflow-hidden mb-2 text-slate-400">
            <div className="reveal-line">POTANSİYELİNİ ORTAYA ÇIKARACAĞIN</div>
          </div>
          <div className="overflow-hidden mb-2">
            <div className="reveal-line">
              <span className="text-[#BAFF39] bg-slate-900 px-4 rounded-xl inline-block -rotate-2">EĞLENCELİ</span> BİR
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="reveal-line">YAŞAM ALANIYIZ.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
