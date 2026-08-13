"use client";

import React, { useState } from 'react';
import { realEstateProperties } from '@/lib/mock-data/ecommerce/realestate';
import { PropertyCard } from '@/components/ecommerce/realestate/PropertyCard';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['Tümü', 'Villa', 'Penthouse', 'Loft', 'Mansion'];

export default function SalePage() {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const saleProperties = realEstateProperties.filter(p => p.status === 'Satılık');

  const filteredProperties = saleProperties.filter(property => {
    if (activeFilter === 'Tümü') return true;
    return property.type.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="w-full bg-[#f5f5f0] min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-normal tracking-tight mb-6"
          >
            Satılık <span className="font-serif italic text-[#1a1a1a]/60">Portföy</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest border-b border-[#1a1a1a]/10 pb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {CATEGORIES.map(category => (
              <button 
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-1 py-2 whitespace-nowrap transition-colors ${
                  activeFilter === category ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/40 hover:text-[#1a1a1a]/80'
                }`}
              >
                {category}
                {activeFilter === category && (
                  <motion.div 
                    layoutId="activeFilterIndicatorSale"
                    className="absolute -bottom-[25px] left-0 right-0 h-[1px] bg-[#1a1a1a]"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <PropertyCard property={property} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProperties.length === 0 && (
          <div className="py-24 text-center text-[#1a1a1a]/50 text-lg">
            Bu kategoride satılık ilan bulunmamaktadır.
          </div>
        )}

      </div>
    </div>
  );
}
