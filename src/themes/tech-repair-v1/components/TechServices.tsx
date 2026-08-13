"use client";
import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';
import Image from 'next/image';
import { Settings, Droplet, Battery, Smartphone, Activity, ArrowRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const services = [
  { id: 1, title: 'Screen Reconstruction', desc: 'Surgical precision glass replacement with OLED color calibration. Returning your display to factory zero state.', icon: Smartphone, image: '/images/tech-repair-v1/service-screen.jpg', color: 'from-cyan-500 to-blue-600' },
  { id: 2, title: 'Core Energy Revival', desc: 'Lithium-ion core swapping and capacity optimization. No warning messages, pure sustained power.', icon: Battery, image: null, color: 'from-violet-500 to-purple-600' },
  { id: 3, title: 'Micro-Soldering', desc: 'Level 3 logic board repair, IC chip replacement, and trace rebuilding under the microscope.', icon: Activity, image: null, color: 'from-emerald-400 to-teal-500' },
  { id: 4, title: 'Liquid Recovery', desc: 'Ultrasonic cleaning and deep corrosion reversal protocols. Saving data when all hope seems lost.', icon: Droplet, image: null, color: 'from-blue-400 to-cyan-500' },
  { id: 5, title: 'Hardware Diagnostics', desc: 'Full-system scanning, short-circuit detection, and thermal imaging to isolate phantom issues.', icon: Settings, image: null, color: 'from-zinc-400 to-zinc-600' },
];

export function TechServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // We only want the horizontal scroll effect on desktop
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray('.service-card');
      
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => "+=" + containerRef.current?.offsetWidth
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="services" className="md:h-screen bg-[#05050A] md:flex md:items-center overflow-hidden border-t border-white/5 relative py-20 md:py-0">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full h-full max-w-[100vw] overflow-hidden flex flex-col md:flex-row items-center px-4 md:px-8">
        
        {/* Intro Block */}
        <div className="w-full md:w-[40vw] flex-shrink-0 mb-12 md:mb-0 md:pr-12 relative z-10">
          <h2 className="font-mono text-cyan-400 text-xs tracking-[0.2em] uppercase mb-4">[ Capabilities ]</h2>
          <h3 className="text-4xl md:text-6xl font-space font-black text-white leading-tight uppercase tracking-tighter">
            Precision <br /> Engineering
          </h3>
          <p className="mt-6 text-zinc-400 font-inter text-sm md:text-base leading-relaxed max-w-sm">
            Our lab is equipped with medical-grade microscopes and military-spec diagnostic tools. If it has a circuit, we can fix it.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div ref={containerRef} className="w-full flex flex-col md:flex-row gap-6 md:gap-8 flex-nowrap">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card w-full md:w-[400px] h-[500px] flex-shrink-0 rounded-xl bg-zinc-900/40 border border-white/5 relative overflow-hidden group flex flex-col"
            >
              {/* Image / Gradient Header */}
              <div className={`h-[45%] w-full relative bg-gradient-to-br ${service.color} overflow-hidden`}>
                {service.image ? (
                  <Image src={service.image} alt={service.title} fill className="object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
                )}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-4 right-4 text-white/30 font-mono text-4xl font-black">
                  0{index + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between relative z-10 bg-gradient-to-b from-transparent to-[#05050A]">
                <div>
                  <h4 className="font-space font-bold text-xl text-white uppercase tracking-wider mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h4>
                  <p className="font-inter text-sm text-zinc-400 leading-relaxed">{service.desc}</p>
                </div>
                
                <MagneticButton className="self-start mt-4">
                  <button className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors group/btn">
                    Book Service <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
