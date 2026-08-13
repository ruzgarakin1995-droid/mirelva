"use client";

import { motion } from 'framer-motion';
import { SalonHeader } from '@/themes/salon/components/SalonHeader';
import { SalonFooter } from '@/themes/salon/components/SalonFooter';
import { SalonArtistsHome } from '@/themes/salon/components/SalonArtistsHome';

export default function EkibimizPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FCFBF9]">
      <SalonHeader />
      
      {/* Hero Section */}
      <section className="pt-48 pb-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif text-[#4A403F] leading-tight mb-8"
          >
            Yaratıcı <span className="italic text-[#D4A3A3] font-light">Eller.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans font-light text-[#4A403F]/70 max-w-lg mx-auto mb-20"
          >
            Her biri kendi alanında uzmanlaşmış, sanata ve detaya aşık profesyonel ekibimizle tanışın.
          </motion.p>
        </div>
      </section>

      {/* Re-use the artist component we built for the homepage but without the section padding */}
      <div className="-mt-32">
         <SalonArtistsHome />
      </div>
      
      <SalonFooter />
    </main>
  );
}
