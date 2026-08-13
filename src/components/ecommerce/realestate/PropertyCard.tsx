"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bed, Bath, Square } from 'lucide-react';
import { RealEstateProperty } from '@/lib/mock-data/ecommerce/realestate';

interface PropertyCardProps {
  property: RealEstateProperty;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0
  }).format(property.price);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="group flex flex-col cursor-pointer"
    >
      <Link href={`/test-real-estate/property/${property.slug}`} className="block overflow-hidden relative aspect-[4/3] w-full mb-6 bg-[#eaeaea]">
        <motion.img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-full object-cover origin-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
           <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1a1a1a] scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out">
             <ArrowUpRight size={24} strokeWidth={1.5} />
           </div>
        </div>
        
        {/* Status Badge */}
        {property.status !== 'For Sale' && (
          <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">
            {property.status}
          </div>
        )}
      </Link>

      <div className="flex flex-col gap-2">
         <div className="flex justify-between items-start">
            <h3 className="text-2xl font-normal tracking-tight text-[#1a1a1a] group-hover:text-[#1a1a1a]/70 transition-colors">
              {property.title}
            </h3>
            <span className="text-xl font-serif italic text-[#1a1a1a]">
              {formattedPrice}
            </span>
         </div>
         
         <p className="text-[#1a1a1a]/50 text-sm font-medium">
           {property.location.neighborhood}, {property.location.city}
         </p>

         <div className="flex items-center gap-6 mt-4 pt-4 border-t border-[#1a1a1a]/10 text-[#1a1a1a]/60 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Bed size={16} strokeWidth={1.5} />
              <span>{property.features.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath size={16} strokeWidth={1.5} />
              <span>{property.features.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-2">
              <Square size={16} strokeWidth={1.5} />
              <span>{property.features.areaSqM} m²</span>
            </div>
         </div>
      </div>
    </motion.div>
  );
}
