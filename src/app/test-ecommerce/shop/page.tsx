"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { fashionProducts, fashionCategories } from '@/lib/mock-data/ecommerce/fashion';
import { FashionProductCard } from '@/components/ecommerce/fashion/FashionProductCard';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [showFilters, setShowFilters] = useState(false);
  const [sort, setSort] = useState('recommended');

  // Filter products based on URL param
  let displayedProducts = [...fashionProducts];
  if (categoryParam) {
    const selectedCategory = fashionCategories.find(c => c.slug === categoryParam);
    const categoryId = selectedCategory?.id;

    displayedProducts = displayedProducts.filter(p => {
      if (categoryParam === 'yeni-gelenler') return p.isNew;
      if (categoryParam === 'indirim') return p.compareAtPrice;
      if (categoryId) return p.categoryIds.includes(categoryId);
      return false;
    });
  }

  // Sort products
  if (sort === 'price-asc') displayedProducts.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') displayedProducts.sort((a, b) => b.price - a.price);
  if (sort === 'newest') displayedProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

  const currentCategoryName = categoryParam 
    ? (fashionCategories.find(c => c.slug === categoryParam)?.name || (categoryParam === 'yeni-gelenler' ? 'Yeni Gelenler' : categoryParam === 'indirim' ? 'İndirim' : 'Koleksiyon'))
    : 'Tüm Ürünler';

  return (
    <FadeIn>
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce' },
          { label: 'Koleksiyon', href: '/test-ecommerce/shop' },
          ...(categoryParam ? [{ label: currentCategoryName }] : [])
        ]} 
        className="mb-8"
      />

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2">{currentCategoryName}</h1>
          <p className="text-zinc-500 text-sm">{displayedProducts.length} Ürün Bulundu</p>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 border border-zinc-200 px-4 py-2 text-sm font-medium hover:bg-zinc-50 transition-colors md:hidden"
          >
            <Filter size={16} /> Filtrele
          </button>
          
          <div className="relative flex-1 md:flex-none">
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full md:w-auto appearance-none bg-transparent border border-zinc-200 px-4 py-2 pr-10 text-sm font-medium focus:outline-none focus:border-zinc-900"
            >
              <option value="recommended">Önerilenler</option>
              <option value="newest">En Yeniler</option>
              <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
              <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
            </select>
            <SlidersHorizontal size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Sidebar (Desktop) */}
        <aside className={`w-full md:w-64 shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="space-y-8 sticky top-28">
            <div>
              <h3 className="font-semibold mb-4 pb-2 border-b border-zinc-100">Kategoriler</h3>
              <ul className="space-y-3 text-sm text-zinc-600">
                {fashionCategories.map(cat => (
                  <li key={cat.id}>
                    <a href={`/test-ecommerce/shop?category=${cat.slug}`} className={`hover:text-zinc-900 ${categoryParam === cat.slug ? 'font-medium text-zinc-900' : ''}`}>
                      {cat.name} ({cat.itemCount})
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 pb-2 border-b border-zinc-100">Fiyat Aralığı</h3>
              <div className="flex items-center gap-2">
                <input type="number" placeholder="Min" className="w-full border border-zinc-200 p-2 text-sm" />
                <span>-</span>
                <input type="number" placeholder="Max" className="w-full border border-zinc-200 p-2 text-sm" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 pb-2 border-b border-zinc-100">Renk</h3>
              <div className="flex flex-wrap gap-2">
                {['#000000', '#ffffff', '#F5F5DC', '#8b4513', '#556B2F'].map(color => (
                  <button 
                    key={color}
                    className="w-8 h-8 rounded-full border border-zinc-200 hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {displayedProducts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium mb-2">Ürün Bulunamadı</h3>
              <p className="text-zinc-500">Bu kategoriye ait ürün bulunmuyor. Lütfen başka bir kategori seçin.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-6 md:gap-y-10">
              {displayedProducts.map(product => (
                <FashionProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </FadeIn>
  );
}

export default function FashionShopPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-96">Yükleniyor...</div>}>
      <ShopContent />
    </Suspense>
  );
}
