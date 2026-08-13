"use client";

import { motion } from 'framer-motion';

export function SalonBrandsHome() {
  const brands = [
    "CHANEL", "DIOR", "OPI", "ESSIE", "CND", "YSL BEAUTY", "TOM FORD", "GUCCI"
  ];

  return (
    <section className="py-16 bg-[#F0EBE6] border-y border-[#4A403F]/10 overflow-hidden flex items-center">
      <div className="w-full flex">
        {/* Double array to create seamless loop */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex flex-nowrap whitespace-nowrap items-center gap-16 md:gap-32 px-8"
        >
          {[...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-3xl font-serif text-[#4A403F]/30 tracking-[0.2em] uppercase select-none"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
