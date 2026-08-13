"use client";
import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';
import { MagneticButton } from './MagneticButton';
import { ArrowRight, Cpu } from 'lucide-react';
import Image from 'next/image';

export function TechHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax background
    gsap.to('.hero-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Content fade out on scroll
    gsap.to('.hero-content', {
      yPercent: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '70% top',
        scrub: true,
      },
    });

    // Entrance Animation
    const tl = gsap.timeline();
    tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.8, ease: 'power4.out', delay: 0.2 })
      .from('.hero-title-word', { y: 100, opacity: 0, stagger: 0.1, duration: 1, ease: 'power4.out' }, '-=0.6')
      .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6')
      .from('.hero-cta', { scale: 0.9, opacity: 0, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.6');
      
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#05050A]">
      
      {/* Parallax Background */}
      <div className="hero-bg absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none">
        <Image 
          src="/images/tech-repair-v1/hero-repair.jpg" 
          alt="Motherboard Macro Photography" 
          fill
          className="object-cover opacity-40 mix-blend-screen"
          priority
        />
        {/* Gradients to blend into background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-[#05050A] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#05050A] via-transparent to-[#05050A] z-10"></div>
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none z-10 mix-blend-overlay"></div>

      {/* Content */}
      <div className="hero-content relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center mt-20">
        
        <div className="hero-badge flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-8">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-bold">Premium Repair Engineering</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-space tracking-tighter text-white leading-[0.9] flex flex-wrap justify-center gap-x-4 md:gap-x-8 uppercase overflow-hidden pb-4">
          <span className="hero-title-word block">Restore</span>
          <span className="hero-title-word block">The</span>
          <span className="hero-title-word block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Core</span>
        </h1>

        <p className="hero-subtitle mt-6 max-w-xl text-zinc-400 font-inter text-sm md:text-base leading-relaxed">
          We don't just fix devices. We perform microscopic surgery on the technology you rely on every day. Welcome to the lab.
        </p>

        <div className="hero-cta mt-12 flex items-center gap-6">
          <MagneticButton>
            <button className="h-14 px-8 rounded-full bg-white text-black font-space font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-cyan-400 transition-colors">
              Book A Repair <ArrowRight className="w-4 h-4" />
            </button>
          </MagneticButton>
          
          <MagneticButton>
            <button className="h-14 px-8 rounded-full border border-white/20 text-white font-space font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
              Shop Devices
            </button>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
