"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { techProducts, techCategories } from '@/lib/mock-data/ecommerce/electronics';
import { TechProductCard } from '@/components/ecommerce/tech/TechProductCard';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';
import { Filter, SlidersHorizontal, Check } from 'lucide-react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [showFilters, setShowFilters] = useState(false);
  const [sort, setSort] = useState('recommended');

  let displayedProducts = [...techProducts];
  if (categoryParam) {
    if (categoryParam === 'indirim') {
       displayedProducts = displayedProducts.filter(p => p.compareAtPrice);
    } else {
       const targetCategory = techCategories.find(c => c.slug === categoryParam);
       if (targetCategory) {
          displayedProducts = displayedProducts.filter(p => p.categoryIds.includes(targetCategory.id));
       }
    }
  }

  if (sort === 'price-asc') displayedProducts.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') displayedProducts.sort((a, b) => b.price - a.price);
  if (sort === 'newest') displayedProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  if (sort === 'rating') displayedProducts.sort((a, b) => b.rating - a.rating);

  const currentCategoryName = categoryParam 
    ? (techCategories.find(c => c.slug === categoryParam)?.name || (categoryParam === 'indirim' ? 'Fırsat Ürünleri' : 'Tüm Ürünler'))
    : 'Tüm Ürünler';

  return (
    <FadeIn>
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'Ürünler', href: '/test-ecommerce-v2/shop' },
          ...(categoryParam ? [{ label: currentCategoryName }] : [])
        ]} 
        className="mb-8"
      />

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-2">{currentCategoryName}</h1>
          <p className="text-slate-500 text-sm font-medium">{displayedProducts.length} ürün listeleniyor</p>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center gap-2 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-slate-100 transition-colors md:hidden w-full md:w-auto"
          >
            <Filter size={18} /> Filtrele
          </button>
          
          <div className="relative flex-1 md:flex-none">
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full md:w-64 appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 pr-10 text-sm font-semibold focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
            >
              <option value="recommended">Önerilen Sıralama</option>
              <option value="rating">En Çok Değerlendirilenler</option>
              <option value="newest">En Yeniler</option>
              <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
              <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
            </select>
            <SlidersHorizontal size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Sidebar (Desktop) */}
        <aside className={`w-full md:w-72 shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white border border-slate-200 rounded-xl p-6 sticky top-28 shadow-sm">
            
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center justify-between">
                Kategoriler
              </h3>
              <ul className="space-y-3 text-sm">
                {techCategories.map(cat => (
                  <li key={cat.id}>
                    <a href={`/test-ecommerce-v2/shop?category=${cat.slug}`} className={`flex items-center justify-between hover:text-blue-600 transition-colors ${categoryParam === cat.slug ? 'font-bold text-blue-600' : 'text-slate-600'}`}>
                      <span>{cat.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-4">Markalar</h3>
              <div className="space-y-3 text-sm">
                {['Apple', 'Sony', 'Logitech', 'Samsung', 'Dyson'].map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                      {/* Using simple checkbox UI mock */}
                    </div>
                    <span className="text-slate-600 group-hover:text-slate-900">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4">Fiyat Aralığı (₺)</h3>
              <div className="flex items-center gap-3">
                <input type="number" placeholder="En Az" className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500" />
                <span className="text-slate-400">-</span>
                <input type="number" placeholder="En Çok" className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <button className="w-full mt-4 bg-slate-900 text-white rounded-lg py-2 text-sm font-bold hover:bg-slate-800 transition-colors">Uygula</button>
            </div>
            
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {displayedProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Aradığınız kriterlere uygun ürün bulunamadı.</h3>
              <p className="text-slate-500">Lütfen filtrelerinizi temizleyerek tekrar deneyin.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.map(product => (
                <TechProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </FadeIn>
  );
}

export default function TechShopPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-96">Yükleniyor...</div>}>
      <ShopContent />
    </Suspense>
  );
}
