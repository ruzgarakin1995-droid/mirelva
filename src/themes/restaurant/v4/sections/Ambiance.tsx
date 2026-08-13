"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Ambiance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-32 bg-[#020202] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Zarafetin <span className="italic font-serif text-[#D4AF37]">Mekanı</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto font-light"
          >
            Modern mimarinin klasik zarafetle buluştuğu, her bir detayı özenle tasarlanmış atmosferimizde unutulmaz bir akşam yemeği sizi bekliyor.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center h-[700px]">
          <motion.div style={{ y: y1 }} className="h-[80%] relative">
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1740&auto=format&fit=crop" 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="h-[100%] relative pt-20">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
              alt="Wine Glass and Table" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
