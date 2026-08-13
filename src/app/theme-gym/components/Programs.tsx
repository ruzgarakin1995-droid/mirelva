'use client'
import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'

const programs = [
  { id: 1, title: 'YOGA & PILATES', color: 'bg-emerald-100', text: 'text-emerald-900', img: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2000&auto=format&fit=crop' },
  { id: 2, title: 'HIIT CARDIO', color: 'bg-rose-100', text: 'text-rose-900', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop' },
  { id: 3, title: 'POWER LIFT', color: 'bg-indigo-100', text: 'text-indigo-900', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop' }, // Reused img for simplicity
  { id: 4, title: 'SPINNING', color: 'bg-amber-100', text: 'text-amber-900', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop' },
]

export default function Programs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const wrapper = wrapperRef.current!
    const cards = gsap.utils.toArray('.program-card')
    
    gsap.to(cards, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (cards.length - 1),
        end: () => "+=" + wrapper.offsetWidth
      }
    })
  }, { scope: containerRef })

  return (
    <section id="programs" ref={containerRef} className="h-screen bg-slate-900 overflow-hidden flex flex-col justify-center relative">
      <div className="absolute top-12 left-6 md:left-12 z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white">PROGRAMLAR</h2>
        <p className="text-slate-400 mt-2 font-medium">Sana uygun ritmi bul.</p>
      </div>

      <div ref={wrapperRef} className="flex gap-8 px-6 md:px-12 w-[400vw] md:w-[200vw]">
        {programs.map((prog) => (
          <div 
            key={prog.id} 
            className={`program-card w-[80vw] md:w-[40vw] h-[60vh] shrink-0 rounded-3xl overflow-hidden relative group cursor-pointer ${prog.color}`}
          >
            <img 
              src={prog.img} 
              alt={prog.title} 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700" 
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className={`text-4xl md:text-5xl font-black ${prog.text}`}>{prog.title}</h3>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <button className={`px-6 py-2 rounded-full font-bold bg-white/50 backdrop-blur-md ${prog.text}`}>
                  Detayları Gör
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
