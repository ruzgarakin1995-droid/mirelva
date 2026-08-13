"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';
import { Leaf, Users, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <FadeIn>
    <div>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Breadcrumb 
          items={[
            { label: 'LOCİZSA', href: '/test-ecommerce' },
            { label: 'Hakkımızda' }
          ]} 
          className="mb-8"
        />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">Modayı Değil, <span className="font-bold">Tarzı</span> Yaratıyoruz.</h1>
          <p className="text-zinc-500 font-light leading-relaxed">
            2018 yılından bu yana LOCİZSA Studio olarak, zamansız tasarımları etik üretim anlayışıyla buluşturuyoruz. 
            Amacımız sadece kıyafet üretmek değil, içinde kendinizi en iyi hissettiğiniz bir yaşam stili sunmaktır.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video w-full bg-zinc-100 overflow-hidden mb-24">
          <img src="/images/fashion/about.jpg" alt="LOCİZSA Atelier" className="w-full h-full object-cover" />
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
           <div className="text-center px-4">
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Leaf size={24} className="text-zinc-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-3">Sürdürülebilirlik</h3>
              <p className="text-sm font-light text-zinc-500 leading-relaxed">Ürünlerimizin %80'i geri dönüştürülmüş ve organik materyallerden üretiliyor. Doğaya saygı, tasarım sürecimizin merkezinde yer alıyor.</p>
           </div>
           <div className="text-center px-4">
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Users size={24} className="text-zinc-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-3">Adil Üretim</h3>
              <p className="text-sm font-light text-zinc-500 leading-relaxed">Tüm tedarik zincirimizde adil çalışma koşullarını gözetiyor, yerel zanaatkarları destekliyoruz.</p>
           </div>
           <div className="text-center px-4">
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Globe size={24} className="text-zinc-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-3">Zamansız Tasarım</h3>
              <p className="text-sm font-light text-zinc-500 leading-relaxed">Hızlı modaya karşı duruyor, yıllarca giyebileceğiniz kaliteli ve dayanıklı parçalar tasarlıyoruz.</p>
           </div>
        </div>

        {/* Manifesto */}
        <div className="bg-zinc-50 p-8 md:p-16 border border-zinc-100">
           <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 block">Manifestomuz</span>
              <h2 className="text-2xl md:text-3xl font-light leading-snug mb-8">
                "Bir kıyafet sadece bedeni değil, ruhu da yansıtmalı. Biz, sadeliğin içindeki güce ve kalitenin getirdiği özgüvene inanıyoruz."
              </h2>
              <p className="font-medium text-sm tracking-widest uppercase">LOCİZSA Kurucu Ekibi</p>
           </div>
        </div>

      </div>
        </div>
    </FadeIn>
  );
}