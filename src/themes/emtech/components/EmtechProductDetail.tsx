"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, PackageCheck, Zap, ShieldCheck, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductData {
  id: number;
  slug: string;
  name: string;
  price: string;
  image: string;
  stock: string;
  categoryTitle: string;
  detailedFeatures: { title: string, desc: string }[];
}

export function EmtechProductDetail({ product }: { product: ProductData }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image,
      quantity: 1
    });
  };

  if (!product) return <div className="min-h-screen flex items-center justify-center font-space text-2xl font-black uppercase text-zinc-900">Ürün Bulunamadı</div>;

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Navigation Breadcrumb */}
      <div className="border-b-2 border-zinc-950 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center gap-3">
          <Link href={`/emtech-store/kategori/${product.categoryTitle.toLowerCase().replace(/ /g, '-').replace('ı', 'i')}`} className="text-zinc-500 hover:text-[#0055FF] transition-colors flex items-center gap-2 font-inter text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Kategoriye Dön
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="font-space font-bold uppercase tracking-wider text-xs text-zinc-900">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square w-full bg-zinc-100 border-4 border-zinc-950 shadow-[16px_16px_0px_#0055FF]">
              <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-zinc-950 text-white font-mono text-xs uppercase font-bold tracking-widest shadow-[4px_4px_0px_#0055FF]">
                {product.categoryTitle}
              </div>
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover p-8 hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 font-mono text-xs font-bold uppercase tracking-widest border-2 border-green-700 w-max mb-6">
              <PackageCheck className="w-4 h-4" />
              {product.stock}
            </div>
            
            <h1 className="font-space font-black text-4xl md:text-6xl text-zinc-950 uppercase tracking-tighter leading-none mb-6">
              {product.name}
            </h1>
            
            <p className="font-inter text-zinc-600 text-lg md:text-xl leading-relaxed mb-8 border-l-4 border-[#0055FF] pl-4">
              Orijinal standartlarda üretilmiş, üstün performanslı ve yüksek kaliteli {product.categoryTitle} ürünüdür. Cihazınızın ömrünü uzatır ve ilk günkü verimliliğine kavuşturur.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 p-4 border-2 border-zinc-950 bg-zinc-50 hover:bg-[#0055FF] hover:text-white transition-colors group">
                <CheckCircle2 className="text-[#0055FF] group-hover:text-white w-6 h-6 flex-shrink-0" />
                <span className="font-space font-bold text-sm uppercase tracking-tight">Orijinal Entegre</span>
              </div>
              <div className="flex items-center gap-3 p-4 border-2 border-zinc-950 bg-zinc-50 hover:bg-[#0055FF] hover:text-white transition-colors group">
                <ShieldCheck className="text-[#0055FF] group-hover:text-white w-6 h-6 flex-shrink-0" />
                <span className="font-space font-bold text-sm uppercase tracking-tight">1 Yıl Garanti</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="p-8 bg-zinc-50 border-4 border-zinc-950 shadow-[8px_8px_0px_#000]">
              <div className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-widest mb-4">B2B Özel Fiyatlandırma</div>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                
                {/* Single Item WhatsApp Quote */}
                <a 
                  href={`https://wa.me/905555555555?text=${encodeURIComponent(`Merhaba, ${product.name} ürünü hakkında toptan alım fiyatı ve bilgi almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-4 bg-zinc-950 text-white font-space font-black text-lg uppercase tracking-wider border-4 border-transparent hover:bg-[#25D366] hover:text-white hover:border-zinc-950 hover:shadow-[4px_4px_0px_#000] transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Teklif Al
                </a>

                {/* Add to Cart */}
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 px-6 py-4 bg-[#0055FF] text-white font-space font-black text-lg uppercase tracking-wider border-4 border-transparent hover:bg-white hover:text-[#0055FF] hover:border-zinc-950 hover:shadow-[4px_4px_0px_#000] transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Sepete Ekle
                </button>

              </div>
              
              <div className="text-zinc-500 font-inter text-sm mt-6 flex flex-col gap-3 border-t-2 border-zinc-200 pt-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-900">Teklif Al:</span> Sadece bu ürün için doğrudan WhatsApp üzerinden fiyat isteyin.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShoppingBag className="w-5 h-5 text-[#0055FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-900">Sepete Ekle:</span> Bu ürünü sepetinize ekleyerek, diğer ihtiyacınız olan yedek parçalarla birlikte toplu olarak tek bir mesajda fiyat sorabilirsiniz.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Detailed Features List */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-16 border-t-4 border-zinc-950"
        >
          <div className="max-w-4xl">
            <h2 className="font-space font-black text-3xl md:text-5xl text-zinc-950 uppercase tracking-tighter mb-12">
              Öne Çıkan <span className="text-[#0055FF]">Özellikler</span>
            </h2>
            
            <div className="space-y-8">
              {product.detailedFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full border-4 border-zinc-950 bg-white group-hover:bg-[#0055FF] transition-colors"></div>
                  </div>
                  <div>
                    <h3 className="font-space font-bold text-xl text-zinc-950 uppercase tracking-tighter mb-2 group-hover:text-[#0055FF] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-zinc-600 text-lg leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
