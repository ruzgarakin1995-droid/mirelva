"use client";

import { motion } from 'framer-motion';

export function HairSalonBrands() {
  const brands = [
    "KÉRASTASE", "DYSON", "L'ORÉAL", "ORIBE", "OLAPLEX", "DAVINES", "WELLA"
  ];

  return (
    <section className="bg-[#352F2A] py-8 border-y border-[#FDFBF7]/5 overflow-hidden flex items-center">
      <div className="flex w-[200%] md:w-max">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap items-center gap-16 md:gap-32 px-8"
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center gap-16 md:gap-32">
              <span className="text-xl md:text-2xl font-serif text-[#FDFBF7]/40 uppercase tracking-widest">{brand}</span>
              {/* Star separator */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#C4A484]/50">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="currentColor"/>
              </svg>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
