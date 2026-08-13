"use client";

import React from 'react';
import { realEstateProperties } from '@/lib/mock-data/ecommerce/realestate';
import { PropertyCard } from '@/components/ecommerce/realestate/PropertyCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FeaturedPage() {
  const featured = realEstateProperties[0]; // The top property
  const rest = realEstateProperties.slice(1, 4); // The next 3

  return (
    <div className="w-full bg-[#0a0a0a] min-h-screen">
      
      {/* Hero Showcase */}
      <section className="relative h-screen w-full flex items-center pt-24 pb-12 px-6 md:px-12 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img src={featured.images[0]} alt={featured.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
        </motion.div>

        <div className="max-w-[1600px] mx-auto w-full relative z-10 text-[#f5f5f0] mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ccff00] mb-6 block">Haftanın Seçimi</span>
            <h1 className="text-5xl md:text-8xl font-normal tracking-tighter mb-4 max-w-4xl leading-[0.9]">
              {featured.title}
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#f5f5f0]/70 mb-12 max-w-2xl">
              {featured.location.neighborhood}, {featured.location.city}
            </p>

            <Link 
              href={`/test-real-estate/property/${featured.slug}`}
              className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] border border-[#f5f5f0]/30 px-8 py-4 hover:bg-[#f5f5f0] hover:text-[#0a0a0a] transition-all"
            >
              Mülkü İncele <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Other Featured */}
      <section className="py-32 px-6 md:px-12 bg-[#f5f5f0]">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#1a1a1a]">
              Editörün <span className="font-serif italic text-[#1a1a1a]/50">Seçimleri</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {rest.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
