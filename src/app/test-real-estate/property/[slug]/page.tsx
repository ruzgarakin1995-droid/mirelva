"use client";

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { realEstateProperties } from '@/lib/mock-data/ecommerce/realestate';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Calendar, Phone, ArrowLeft, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { useRealEstateWishlist } from '@/store/ecommerce/RealEstateWishlistContext';

export default function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const property = realEstateProperties.find(p => p.slug === resolvedParams.slug);
  const { toggleWishlist, isInWishlist } = useRealEstateWishlist();

  if (!property) {
    return notFound();
  }

  const inWishlist = isInWishlist(property.id);

  const formattedPrice = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0
  }).format(property.price);

  return (
    <div className="w-full bg-[#f5f5f0] min-h-screen">
      
      {/* Top Nav */}
      <div className="px-6 md:px-12 py-6">
        <Link href="/test-real-estate/properties" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
          <ArrowLeft size={16} /> Geri Dön
        </Link>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-24">
         <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Huge Images */}
            <div className="lg:w-2/3 flex flex-col gap-8">
               {property.images.map((img, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: i * 0.2 }}
                   className="w-full aspect-[4/3] bg-[#eaeaea] overflow-hidden"
                 >
                   <img src={img} alt={property.title} className="w-full h-full object-cover" />
                 </motion.div>
               ))}
               
               {/* Description */}
               <div className="mt-8 max-w-3xl">
                 <h2 className="text-3xl font-normal tracking-tight mb-6">Mülk Hakkında</h2>
                 <p className="text-lg text-[#1a1a1a]/70 leading-relaxed font-medium">
                   {property.description}
                 </p>
               </div>

               {/* Amenities */}
               <div className="mt-12 pt-12 border-t border-[#1a1a1a]/10">
                 <h2 className="text-3xl font-normal tracking-tight mb-8">Özellikler</h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                   {property.amenities.map((amenity, i) => (
                     <div key={i} className="flex items-center gap-3 text-[#1a1a1a]/80 font-medium">
                       <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full"></div>
                       {amenity}
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* Right: Sticky Details */}
            <div className="lg:w-1/3">
               <div className="sticky top-[120px] bg-white p-8 md:p-12 border border-[#1a1a1a]/10 shadow-2xl shadow-black/5 flex flex-col">
                  
                  <div className="mb-8">
                    <span className="inline-block px-3 py-1 bg-[#1a1a1a] text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                      {property.status}
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-normal tracking-tight mb-4">
                      {property.title}
                    </h1>
                    <div className="flex items-center gap-2 text-[#1a1a1a]/60 font-medium mb-6">
                      <MapPin size={18} />
                      {property.location.neighborhood}, {property.location.city}
                    </div>
                    <div className="text-3xl font-serif italic">
                      {formattedPrice}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 py-8 border-y border-[#1a1a1a]/10 mb-8">
                     <div className="flex flex-col gap-1">
                       <span className="text-xs uppercase tracking-widest text-[#1a1a1a]/50 font-bold">Yatak Odası</span>
                       <div className="flex items-center gap-2 text-xl font-medium">
                         <Bed size={20} className="text-[#1a1a1a]/40" /> {property.features.bedrooms}
                       </div>
                     </div>
                     <div className="flex flex-col gap-1">
                       <span className="text-xs uppercase tracking-widest text-[#1a1a1a]/50 font-bold">Banyo</span>
                       <div className="flex items-center gap-2 text-xl font-medium">
                         <Bath size={20} className="text-[#1a1a1a]/40" /> {property.features.bathrooms}
                       </div>
                     </div>
                     <div className="flex flex-col gap-1">
                       <span className="text-xs uppercase tracking-widest text-[#1a1a1a]/50 font-bold">Alan</span>
                       <div className="flex items-center gap-2 text-xl font-medium">
                         <Square size={20} className="text-[#1a1a1a]/40" /> {property.features.areaSqM} m²
                       </div>
                     </div>
                     <div className="flex flex-col gap-1">
                       <span className="text-xs uppercase tracking-widest text-[#1a1a1a]/50 font-bold">Yapım Yılı</span>
                       <div className="flex items-center gap-2 text-xl font-medium">
                         <Calendar size={20} className="text-[#1a1a1a]/40" /> {property.features.yearBuilt}
                       </div>
                     </div>
                  </div>

                  {/* Agent Info */}
                  <div className="flex items-center gap-4 mb-8">
                    <img src={property.agent.avatar} alt={property.agent.name} className="w-16 h-16 rounded-full grayscale" />
                    <div>
                      <div className="text-sm font-bold uppercase tracking-widest text-[#1a1a1a]/50 mb-1">Gayrimenkul Danışmanı</div>
                      <div className="text-lg font-medium">{property.agent.name}</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    <a 
                      href={`tel:${property.agent.phone}`}
                      className="w-full bg-[#1a1a1a] text-[#f5f5f0] py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors flex items-center justify-center gap-3"
                    >
                      <Phone size={16} /> GÖRÜŞME AYARLA
                    </a>
                    
                    <button 
                      onClick={() => toggleWishlist(property)}
                      className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-3 border ${
                        inWishlist 
                          ? 'border-[#1a1a1a] text-[#1a1a1a] bg-[#1a1a1a]/5' 
                          : 'border-[#1a1a1a]/20 text-[#1a1a1a]/70 hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
                      }`}
                    >
                      <Bookmark size={16} className={inWishlist ? "fill-[#1a1a1a]" : ""} /> 
                      {inWishlist ? 'Favorilerde' : 'Favorilere Ekle'}
                    </button>
                  </div>

               </div>
            </div>

         </div>
      </div>
    </div>
  );
}
