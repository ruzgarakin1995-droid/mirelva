"use client";

import React from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';
import { Cpu, ShieldCheck, Globe, MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <FadeIn>
    <div className="w-full bg-slate-50 pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Breadcrumb 
          items={[
            { label: 'LOCİZSA.', href: '/test-ecommerce-v2' },
            { label: 'Hakkımızda' }
          ]} 
          className="mb-8"
        />

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-slate-900">Geleceğin <span className="text-blue-600">Teknolojisi</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            LOCİZSA. olarak, dünyadaki en yenilikçi ve yüksek performanslı teknoloji ürünlerini ulaşılabilir kılıyoruz. Teknolojinin gücüyle hayatınızı kolaylaştırmak için buradayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="rounded-3xl overflow-hidden aspect-square bg-slate-200">
             <img src="https://images.unsplash.com/photo-1550009158-9fd373285ed2?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Innovation" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">İnovasyon Merkezimiz</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              2010 yılından bu yana, premium teknoloji markalarının en yetkin temsilcisi olarak faaliyet gösteriyoruz. Müşterilerimize sadece bir ürün değil, bir "ekosistem" sunuyoruz. 
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Kurulduğumuz günden bugüne "Sıfır Hata, Sonsuz Memnuniyet" ilkesiyle hareket ediyoruz. Sattığımız her cihazın arkasında LOCİZSA. güvencesi var.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="text-3xl font-black text-slate-900 mb-1">100K+</h4>
                  <p className="text-sm text-slate-500">Mutlu Müşteri</p>
               </div>
               <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="text-3xl font-black text-slate-900 mb-1">%99</h4>
                  <p className="text-sm text-slate-500">Müşteri Memnuniyeti</p>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Cpu size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">En Yeni Donanımlar</h3>
            <p className="text-slate-500 leading-relaxed">Sektördeki en son trendleri takip ediyor, yeni nesil işlemcileri ve cihazları ilk sizinle buluşturuyoruz.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Resmi Garantili</h3>
            <p className="text-slate-500 leading-relaxed">Sattığımız tüm ürünler Türkiye distribütör garantili olup, orijinal ambalajında teslim edilir.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Küresel Vizyon</h3>
            <p className="text-slate-500 leading-relaxed">Dünyanın dört bir yanındaki teknoloji devleriyle doğrudan partnerlik kurarak en iyi fiyatları sunuyoruz.</p>
          </div>
        </div>
        
        <div className="mt-24 bg-slate-900 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Geleceği Birlikte Şekillendirelim</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                 Kariyer fırsatlarını keşfetmek veya teknoloji iş ortaklıkları kurmak için bizimle iletişime geçin.
              </p>
              <Link href="/test-ecommerce-v2/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-colors">
                 Bize Ulaşın <MoveRight size={18} />
              </Link>
           </div>
        </div>

      </div>
    </div>
    </FadeIn>
  );
}
