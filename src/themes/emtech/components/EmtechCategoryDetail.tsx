"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, ArrowLeft, PackageCheck } from 'lucide-react';

interface CategoryData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: string[];
  products: {
    id: number;
    name: string;
    price: string;
    image: string;
    stock: string;
  }[];
}

export function EmtechCategoryDetail({ data }: { data: CategoryData }) {
  if (!data) return <div className="min-h-screen flex items-center justify-center font-space text-2xl font-black uppercase text-zinc-900">Kategori Bulunamadı</div>;

  return (
    <div className="bg-zinc-50 min-h-screen pt-24">
      
      {/* Navigation Breadcrumb */}
      <div className="border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center gap-3">
          <Link href="/emtech-store" className="text-zinc-500 hover:text-[#0055FF] transition-colors flex items-center gap-2 font-inter text-sm">
            <ArrowLeft className="w-4 h-4" />
            Mağazaya Dön
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="font-space font-bold uppercase tracking-wider text-xs text-zinc-900">{data.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] bg-zinc-950 flex items-center border-b-[8px] border-[#0055FF] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <Image src={data.heroImage} alt={data.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-3 py-1 bg-[#0055FF] text-white font-mono text-[10px] font-bold tracking-[0.2em] uppercase mb-6 shadow-[4px_4px_0px_#fff]">
              Resmi Distribütör
            </div>
            <h1 className="text-6xl md:text-8xl font-space font-black text-white uppercase tracking-tighter leading-none mb-6 drop-shadow-xl">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-inter mb-8 border-l-4 border-[#0055FF] pl-4">
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-space font-black text-3xl md:text-5xl text-zinc-950 uppercase tracking-tighter mb-6">Neden <span className="text-[#0055FF]">{data.title}?</span></h3>
              <p className="font-inter text-zinc-600 text-lg leading-relaxed mb-8">
                {data.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 border-2 border-zinc-950 bg-zinc-50 shadow-[4px_4px_0px_#000]">
                    <ShieldCheck className="text-[#0055FF] w-6 h-6 flex-shrink-0" />
                    <span className="font-space font-bold text-sm uppercase tracking-tight text-zinc-900">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] border-4 border-zinc-950 shadow-[12px_12px_0px_#0055FF]">
              <Image src={data.heroImage} alt={data.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-space font-black text-zinc-950 uppercase tracking-tighter">Ürünler</h2>
            <div className="font-mono text-sm font-bold text-zinc-500">{data.products.length} Ürün Listeleniyor</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {data.products.map((product: any, idx) => (
              <Link href={`/emtech-store/urun/${product.slug}`} key={product.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative bg-white flex flex-col justify-between overflow-hidden border-2 border-zinc-950 shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#0055FF] hover:-translate-y-2 transition-all duration-300 h-full"
                >
                  <div className="relative h-72 w-full bg-zinc-100 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#0055FF] text-white font-mono text-[10px] uppercase font-bold tracking-widest shadow-[4px_4px_0px_#000]">
                      {data.title}
                    </div>
                    <div className="absolute inset-0 bg-[#0055FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1 border-t-2 border-zinc-950 bg-white relative z-20">
                    <h4 className="font-space font-black text-2xl uppercase tracking-tighter text-zinc-950 leading-none mb-4 group-hover:text-[#0055FF] transition-colors">
                      {product.name}
                    </h4>
                    
                    <div className="mb-8 flex-1 flex flex-col justify-end">
                      <div className={`self-start inline-flex items-center gap-2 px-3 py-1.5 border-2 ${
                        product.stock === 'Stokta Var' 
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                          : product.stock === 'Kritik Stok' 
                            ? 'bg-amber-50 border-amber-200 text-amber-700' 
                            : 'bg-red-50 border-red-200 text-red-700'
                      }`}>
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          product.stock === 'Stokta Var' ? 'bg-emerald-500' : product.stock === 'Kritik Stok' ? 'bg-amber-500' : 'bg-red-500'
                        }`}></div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest">{product.stock}</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="w-full flex items-center justify-center gap-2 bg-zinc-950 text-white group-hover:bg-[#0055FF] transition-colors py-3 px-4 border-2 border-transparent group-hover:border-[#0055FF] shadow-[4px_4px_0px_transparent] group-hover:shadow-[4px_4px_0px_#000]">
                        <span className="font-space font-black text-sm uppercase tracking-widest">
                          Detayları Gör
                        </span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
