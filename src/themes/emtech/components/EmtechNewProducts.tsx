"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, PackageCheck, ChevronLeft } from 'lucide-react';
import { categoriesData } from '@/themes/emtech/data/categories';

export function EmtechNewProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const res = await fetch('/api/store/katalog');
        const data = await res.json();
        if (data && data.products) {
          // Take the newest 10 products
          const newest = data.products.slice(0, 10).map((p: any) => ({
            id: p.id,
            name: p.name,
            slug: p.id,
            image: p.imageUrl || '/emtech-assets/pro_5.jpg',
            stock: p.inStock ? 'Stokta Var' : 'Tükendi',
            categoryTitle: p.category?.name || 'Genel'
          }));
          setProducts(newest);
        }
      } catch(e) {
        console.error("Failed to fetch new products", e);
      }
    };
    fetchNewProducts();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (products.length === 0) return null;

  return (
    <section id="yeni-urunler" className="py-20 bg-zinc-50 border-b-2 border-zinc-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-[#0055FF] text-white font-mono text-[10px] font-bold tracking-[0.2em] uppercase mb-4 shadow-[4px_4px_0px_#000]">
              YENİ GELENLER
            </div>
            <h2 className="text-4xl md:text-6xl font-space font-black text-zinc-950 uppercase tracking-tighter">
              Yeni <span className="text-[#0055FF]">Ürünler</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 bg-white border-2 border-zinc-950 flex items-center justify-center hover:bg-[#0055FF] hover:text-white transition-colors shadow-[4px_4px_0px_#000]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 bg-white border-2 border-zinc-950 flex items-center justify-center hover:bg-[#0055FF] hover:text-white transition-colors shadow-[4px_4px_0px_#000]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-8 overflow-x-auto pb-12 pt-4 px-4 -mx-4 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}} />
          
          {products.map((product, idx) => (
            <Link 
              href={`/emtech-store/urun/${product.slug}`} 
              key={product.id}
              className="snap-center sm:snap-start shrink-0 w-[calc(100vw-2rem)] sm:w-[300px] md:w-[350px]"
            >
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white flex flex-col justify-between h-[450px] overflow-hidden border-2 border-zinc-950 shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#0055FF] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 w-full bg-zinc-100 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-zinc-950 text-white font-mono text-[10px] uppercase font-bold tracking-widest">
                    {product.categoryTitle}
                  </div>
                  <div className="absolute inset-0 bg-[#0055FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                
                <div className="p-5 flex flex-col flex-1 border-t-2 border-zinc-950 bg-white relative z-20">
                  <div className="flex items-center gap-2 mb-3 text-green-600 font-mono text-[10px] font-bold uppercase tracking-widest">
                    <PackageCheck className="w-4 h-4" />
                    {product.stock}
                  </div>
                  
                  <h4 className="font-space font-black text-xl uppercase tracking-tighter text-zinc-950 leading-none mb-4 group-hover:text-[#0055FF] transition-colors line-clamp-2">
                    {product.name}
                  </h4>
                  
                  <div className="mt-auto pt-3 border-t-2 border-zinc-950 flex items-center justify-between group-hover:bg-[#0055FF] transition-colors -mx-5 -mb-5 px-5 py-3">
                    <span className="font-space font-black text-base text-zinc-950 group-hover:text-white uppercase tracking-wider transition-colors">
                      Detayları Gör
                    </span>
                    <div className="w-8 h-8 bg-zinc-950 text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#0055FF] transition-colors rounded-none border-2 border-transparent group-hover:border-zinc-950">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
