"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Filter } from 'lucide-react';
import { groceryProducts, groceryCategories } from '@/lib/mock-data/ecommerce/grocery';
import { GroceryProductCard } from '@/components/ecommerce/grocery/GroceryProductCard';

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const filterParam = searchParams.get('filter');
  const searchString = searchParams.get('q');

  let displayedProducts = [...groceryProducts];
  if (categoryParam) {
    if (categoryParam === 'indirim') {
       displayedProducts = displayedProducts.filter(p => p.compareAtPrice);
    } else {
       // Support dynamic matching, e.g. gc-fruit or just meyve-sebze
       const cat = groceryCategories.find(c => c.slug === categoryParam);
       if (cat) {
          displayedProducts = displayedProducts.filter(p => p.categoryIds.includes(cat.id));
       }
    }
  }

  if (filterParam) {
    const filterLower = filterParam.toLowerCase();
    displayedProducts = displayedProducts.filter(p => {
       if (!p.specifications) return false;
       return Object.values(p.specifications).some(val => typeof val === 'string' && val.toLowerCase().includes(filterLower));
    });
  }

  if (searchString) {
    const sLower = searchString.toLowerCase();
    displayedProducts = displayedProducts.filter(p => 
      p.name.toLowerCase().includes(sLower) || 
      p.description.toLowerCase().includes(sLower) || 
      p.shortDescription.toLowerCase().includes(sLower) ||
      (p.brand && p.brand.toLowerCase().includes(sLower))
    );
  }

  const currentCategoryName = searchString
    ? `"${searchString}" Arama Sonuçları`
    : categoryParam 
    ? (groceryCategories.find(c => c.slug === categoryParam)?.name || (categoryParam === 'indirim' ? 'İndirimli Ürünler' : 'Tüm Ürünler'))
    : filterParam ? `${filterParam.charAt(0).toUpperCase() + filterParam.slice(1)} Ürünler` : 'Tüm Ürünler';

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 md:py-8">
        
        {/* Mobile Header / Filters */}
        <div className="lg:hidden flex items-center justify-between mb-6">
           <h1 className="text-xl font-bold text-slate-800">{currentCategoryName}</h1>
           <button className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600">
              <Filter size={16} /> Filtreler
           </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-32">
                 <h3 className="bg-emerald-50 text-emerald-800 font-bold px-5 py-4 border-b border-emerald-100">Kategoriler</h3>
                 <ul className="divide-y divide-slate-50">
                    <li key="all">
                       <Link 
                          href="/test-ecommerce-v3/shop"
                          className={`flex items-center justify-between px-5 py-3.5 hover:bg-slate-50 group transition-colors ${!categoryParam && !filterParam ? 'bg-emerald-50/50' : ''}`}
                       >
                          <span className={`text-sm font-medium group-hover:text-emerald-600 ${!categoryParam && !filterParam ? 'text-emerald-700 font-bold' : 'text-slate-700'}`}>Tüm Ürünler</span>
                          <ChevronRight size={16} className={`group-hover:text-emerald-500 ${!categoryParam && !filterParam ? 'text-emerald-600' : 'text-slate-300'}`} />
                       </Link>
                    </li>
                    {groceryCategories.map(cat => (
                       <li key={cat.id}>
                          <Link 
                             href={`/test-ecommerce-v3/shop?category=${cat.slug}`}
                             className={`flex items-center justify-between px-5 py-3.5 hover:bg-slate-50 group transition-colors ${categoryParam === cat.slug ? 'bg-emerald-50/50' : ''}`}
                          >
                             <span className={`text-sm font-medium group-hover:text-emerald-600 ${categoryParam === cat.slug ? 'text-emerald-700 font-bold' : 'text-slate-700'}`}>{cat.name}</span>
                             <ChevronRight size={16} className={`group-hover:text-emerald-500 ${categoryParam === cat.slug ? 'text-emerald-600' : 'text-slate-300'}`} />
                          </Link>
                       </li>
                    ))}
                 </ul>
                 
                 <h3 className="bg-slate-50 text-slate-800 font-bold px-5 py-4 border-y border-slate-100 mt-2">Özel Filtreler</h3>
                 <ul className="divide-y divide-slate-50">
                    {['Organik', 'Vegan', 'Glutensiz', 'Şekersiz'].map(filterName => {
                       const f = filterName.toLowerCase();
                       const isActive = filterParam === f;
                       return (
                         <li key={f}>
                            <Link 
                               href={`/test-ecommerce-v3/shop?filter=${f}`}
                               className={`flex items-center justify-between px-5 py-3.5 hover:bg-slate-50 group transition-colors ${isActive ? 'bg-emerald-50/50' : ''}`}
                            >
                               <span className={`text-sm font-medium group-hover:text-emerald-600 ${isActive ? 'text-emerald-700 font-bold' : 'text-slate-700'}`}>{filterName} Ürünler</span>
                               <ChevronRight size={16} className={`group-hover:text-emerald-500 ${isActive ? 'text-emerald-600' : 'text-slate-300'}`} />
                            </Link>
                         </li>
                       );
                    })}
                 </ul>
              </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
             <div className="hidden lg:flex items-end justify-between mb-6 border-b border-slate-200 pb-4">
                <h1 className="text-3xl font-black text-slate-800">{currentCategoryName}</h1>
                <span className="text-slate-500 font-medium text-sm">{displayedProducts.length} ürün</span>
             </div>

             {displayedProducts.length === 0 ? (
               <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center">
                 <h3 className="text-lg font-bold text-slate-800 mb-2">Ürün bulunamadı</h3>
                 <p className="text-slate-500">Bu kategoride şu an ürün bulunmuyor.</p>
               </div>
             ) : (
               <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
                 {displayedProducts.map(product => (
                   <GroceryProductCard key={product.id} product={product} />
                 ))}
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GroceryShopPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-96">Yükleniyor...</div>}>
      <ShopContent />
    </Suspense>
  );
}
