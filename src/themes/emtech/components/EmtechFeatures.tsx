"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Zap } from "lucide-react";

const features = [
  "AYNI GÜN KARGO", "6 AY GARANTİ", "%100 ORİJİNAL", "TOPTAN FİYAT AVANTAJI", "SERTİFİKALI BİLEŞENLER"
];

export function EmtechFeatures() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // We animate the track to -50% to create an infinite loop since we duplicated the items
    gsap.to('.marquee-track', {
      xPercent: -50,
      ease: 'none',
      duration: 15,
      repeat: -1,
    });
  }, { scope: marqueeRef });

  // Repeat array multiple times to ensure the track is long enough
  const trackItems = [...features, ...features, ...features, ...features];

  return (
    <div ref={marqueeRef} className="w-full bg-[#0055FF] py-5 overflow-hidden flex relative z-30 shadow-[0_0_40px_rgba(0,85,255,0.1)] transform-gpu">
      <div className="marquee-track flex whitespace-nowrap items-center gap-12 px-6 w-max will-change-transform transform-gpu">
        {trackItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className="font-space font-black text-white text-xl tracking-[0.2em]">{item}</span>
            <Zap className="w-5 h-5 text-zinc-950 fill-zinc-950" />
          </div>
        ))}
      </div>
    </div>
  );
}
