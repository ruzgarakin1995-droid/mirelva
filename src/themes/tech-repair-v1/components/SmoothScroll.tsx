"use client";

import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    
    lenis.on('scroll', ScrollTrigger.update);
    
    const update = (time: number, deltaTime: number, frame: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    
    return () => { 
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(update);
    };
  }, [lenis]);

  return (
    <ReactLenis root autoRaf={false} options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
