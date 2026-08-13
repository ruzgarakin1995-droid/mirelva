"use client";
import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { EmtechHeader } from '@/themes/emtech/components/EmtechHeader';
import { EmtechFooter } from '@/themes/emtech/components/EmtechFooter';
import { Search, Filter, QrCode, ChevronRight, X } from 'lucide-react';

type Category = {
  id: string;
  slug: string;
  name: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
  imageUrl?: string;
  brand: string;
  category: {
    slug: string;
    name: string;
  };
};

export default function KatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOption, setSortOption] = useState<'newest' | 'az' | 'za'>('newest');

  const [products, setProducts] = useState<Product[]>([]);
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/store/katalog')
      .then(res => res.json())
      .then(data => {
        setCategoriesList(data.categories || []);
        setProducts(data.products || []);
      })
      .catch(err => console.error("Katalog veri hatası:", err))
      .finally(() => setLoading(false));
  }, []);

  // Filtering and Sorting Logic
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category?.slug === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category?.name.toLowerCase().includes(query) ||
        p.brand?.toLowerCase().includes(query)
      );
    }

    // Sort
    if (sortOption === 'az') {
      result = result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'za') {
      result = result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'newest') {
      // Products from DB are already sorted by createdAt desc, but we can rely on ID roughly
      // We don't have createdAt in the type, so we won't mutate if newest
    }

    return result;
  }, [searchQuery, selectedCategory, sortOption, products]);

  const categories = [
    { id: 'all', name: 'Tüm Ürünler' },
    ...categoriesList.map(cat => ({ id: cat.slug, name: cat.name }))
  ];

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col selection:bg-[#0055FF] selection:text-white">
      <EmtechHeader />
      
      <div className="flex-1 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header & Search */}
          <div className="mb-12 border-b-4 border-zinc-950 pb-8 flex flex-col md:flex-row gap-6 md:items-end justify-between">
            <div>
              <h1 className="text-4xl md:text-6xl font-space font-black text-zinc-950 uppercase tracking-tighter leading-none mb-2">
                Toptan <span className="text-[#0055FF]">Katalog</span>
              </h1>
              <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
                {products.length} Profesyonel Yedek Parça
              </p>
            </div>
            
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-zinc-400" />
              </div>
              <input
                type="text"
                placeholder="Ürün veya marka ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-zinc-200 pl-12 pr-4 py-4 font-inter text-sm outline-none focus:border-[#0055FF] focus:shadow-[4px_4px_0px_#0055FF] transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  <X className="w-4 h-4 text-zinc-400 hover:text-zinc-900" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white border-2 border-zinc-200 p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6 border-b border-zinc-100 pb-4">
                  <Filter className="w-5 h-5 text-zinc-900" />
                  <h3 className="font-space font-bold text-lg uppercase tracking-tighter text-zinc-900">Filtreler</h3>
                </div>

                <div className="mb-8">
                  <h4 className="font-mono text-[10px] uppercase font-bold text-zinc-400 tracking-widest mb-4">Kategoriler</h4>
                  {loading ? (
                    <div className="animate-pulse space-y-3">
                      <div className="h-6 bg-zinc-200 w-full"></div>
                      <div className="h-6 bg-zinc-100 w-3/4"></div>
                      <div className="h-6 bg-zinc-100 w-5/6"></div>
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {categories.map((cat) => (
                        <li key={cat.id}>
                          <button
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`w-full text-left font-inter text-sm py-2 px-3 transition-colors ${
                              selectedCategory === cat.id 
                                ? 'bg-zinc-950 text-white font-semibold' 
                                : 'text-zinc-600 hover:bg-zinc-100'
                            }`}
                          >
                            {cat.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <h4 className="font-mono text-[10px] uppercase font-bold text-zinc-400 tracking-widest mb-4">Sıralama</h4>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as any)}
                    className="w-full bg-zinc-50 border border-zinc-200 p-3 font-inter text-sm outline-none focus:border-[#0055FF]"
                  >
                    <option value="newest">En Yeniler</option>
                    <option value="az">A-Z'ye Sırala</option>
                    <option value="za">Z-A'ya Sırala</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="h-96 bg-zinc-200 animate-pulse border-2 border-zinc-200"></div>
                  ))}
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="bg-white border-2 border-zinc-200 border-dashed p-16 flex flex-col items-center justify-center text-center">
                  <Search className="w-12 h-12 text-zinc-300 mb-4" />
                  <h3 className="font-space font-bold text-2xl text-zinc-900 mb-2">Ürün Bulunamadı</h3>
                  <p className="font-inter text-zinc-500">Arama kriterlerinize uyan bir yedek parça bulunamadı. Lütfen farklı kelimeler deneyin.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                    className="mt-6 font-mono text-xs bg-zinc-950 text-white px-6 py-3 uppercase tracking-widest hover:bg-[#0055FF] transition-colors"
                  >
                    Filtreleri Temizle
                  </button>
                </div>
              ) : (
                <motion.div 
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  <AnimatePresence>
                    {filteredProducts.map((product) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        key={product.id}
                      >
                        <Link href={`/emtech-store/urun/${product.id}`} className="block h-full">
                          <div className="group bg-white border-2 border-zinc-200 hover:border-zinc-950 rounded-none overflow-hidden hover:-translate-y-2 hover:shadow-[6px_6px_0px_#0055FF] transition-all duration-300 flex flex-col h-full">
                            
                            {/* Product Image */}
                            <div className="h-64 w-full bg-zinc-100 relative overflow-hidden flex items-center justify-center p-6 border-b-2 border-zinc-200 group-hover:border-zinc-950 transition-colors">
                              {product.imageUrl ? (
                                <Image src={product.imageUrl} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                              ) : (
                                <div className="w-full h-full bg-zinc-50 flex items-center justify-center text-zinc-300">
                                  <QrCode className="w-16 h-16" />
                                </div>
                              )}
                              
                              <div className="absolute inset-0 bg-[#0055FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply"></div>

                              {/* Category Badge */}
                              <div className="absolute top-4 left-4 font-mono text-[9px] bg-white border border-zinc-200 text-zinc-900 px-2 py-1 font-bold tracking-wider z-10 shadow-sm uppercase">
                                {product.category?.name || product.brand}
                              </div>
                            </div>

                            {/* Product Details */}
                            <div className="p-6 flex flex-col flex-1 bg-white relative z-10">
                              <h4 className="font-space font-bold text-zinc-950 uppercase text-lg leading-tight group-hover:text-[#0055FF] transition-colors mb-4">
                                {product.name}
                              </h4>
                              
                              <div className="mb-6 flex-1 flex flex-col justify-end">
                                <div className={`self-start inline-flex items-center gap-2 px-3 py-1.5 border-2 ${
                                  product.inStock 
                                    ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                                    : 'bg-red-50 border-red-200 text-red-700'
                                }`}>
                                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                                    product.inStock ? 'bg-emerald-500' : 'bg-red-500'
                                  }`}></div>
                                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                                    {product.inStock ? 'Stokta Var' : 'Tükendi'}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="mt-auto">
                                <div className="w-full flex items-center justify-center gap-2 bg-zinc-950 text-white group-hover:bg-[#0055FF] transition-colors py-3 px-4 border-2 border-transparent group-hover:border-[#0055FF] shadow-[4px_4px_0px_transparent] group-hover:shadow-[4px_4px_0px_#000]">
                                  <span className="font-space font-black text-xs uppercase tracking-widest">
                                    Detayları Gör
                                  </span>
                                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                              </div>
                            </div>

                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </div>

      <EmtechFooter />
    </main>
  );
}
