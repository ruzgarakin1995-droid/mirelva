"use client";

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { Info, Truck, ShieldCheck, Plus, Minus, ShoppingBasket } from 'lucide-react';
import { groceryProducts } from '@/lib/mock-data/ecommerce/grocery';
import { Price } from '@/components/ecommerce/shared/Price';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';
import { useCart } from '@/store/ecommerce/CartContext';
import { useToast } from '@/components/ecommerce/shared/Toast';

export default function GroceryProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const product = groceryProducts.find(p => p.slug === resolvedParams.slug);
  
  if (!product) {
    return notFound();
  }

  const { items, addToCart, updateQuantity, removeFromCart } = useCart();
  const { toast } = useToast();

  const cartItem = items.find(item => item.product.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAddInitial = () => {
    addToCart(product, 1);
    toast('Sepete Eklendi', `${product.name} sepete eklendi.`, 'success');
  };

  const handleIncrease = () => {
    if (cartItem) {
      updateQuantity(cartItem.cartItemId, cartItem.quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (cartItem) {
      if (cartItem.quantity === 1) {
         removeFromCart(cartItem.cartItemId);
         toast('Sepetten Çıkarıldı', `${product.name} sepetten çıkarıldı.`, 'info');
      } else {
         updateQuantity(cartItem.cartItemId, cartItem.quantity - 1);
      }
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 md:py-8">
        <Breadcrumb 
          items={[
            { label: 'Anasayfa', href: '/test-ecommerce-v3' },
            { label: 'Ürünler', href: '/test-ecommerce-v3/shop' },
            { label: product.name }
          ]} 
          className="mb-6"
        />

        <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-10 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
            
            {/* Image (Quick View Style) */}
            <div className="md:w-1/2 flex flex-col gap-4">
               <div className="relative aspect-square bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-8">
                  <img 
                    src={product.thumbnail} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-multiply rounded-xl"
                  />
                  {product.compareAtPrice && product.compareAtPrice > product.price && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      %{(100 - (product.price / product.compareAtPrice) * 100).toFixed(0)} İndirim
                    </span>
                  )}
               </div>
            </div>

            {/* Info */}
            <div className="md:w-1/2 flex flex-col justify-center">
              
              <div className="flex items-center gap-3 mb-2">
                 <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">{product.brand}</span>
                 {product.specifications?.['Menşei'] && (
                    <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-md font-semibold">
                       {product.specifications['Menşei']}
                    </span>
                 )}
              </div>
              
              <h1 className="text-3xl font-black text-slate-900 mb-2 leading-tight">{product.name}</h1>
              <p className="text-sm text-slate-500 font-medium mb-6">{product.specifications?.['Birim']}</p>
              
              <div className="mb-8">
                 <Price 
                    amount={product.price} 
                    compareAt={product.compareAtPrice} 
                    className="text-4xl text-emerald-700" 
                    compareAtClassName="text-lg"
                 />
              </div>

              <div className="w-full max-w-sm mb-10">
                 {quantityInCart === 0 ? (
                  <button 
                    onClick={handleAddInitial}
                    className="w-full h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center gap-2 font-bold text-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
                  >
                    <ShoppingBasket size={24} /> Sepete Ekle
                  </button>
                ) : (
                  <div className="w-full h-14 flex items-center justify-between bg-emerald-600 text-white rounded-2xl overflow-hidden shadow-lg shadow-emerald-200 border-2 border-emerald-600">
                    <button 
                      onClick={handleDecrease}
                      className="w-16 h-full flex items-center justify-center hover:bg-emerald-700 transition-colors bg-emerald-600"
                    >
                      <Minus size={24} />
                    </button>
                    <span className="flex-1 text-center font-black text-2xl bg-white text-emerald-700 h-full flex items-center justify-center">{quantityInCart}</span>
                    <button 
                      onClick={handleIncrease}
                      className="w-16 h-full flex items-center justify-center hover:bg-emerald-700 transition-colors bg-emerald-600"
                    >
                      <Plus size={24} />
                    </button>
                  </div>
                )}
              </div>
              
              <div className="space-y-4 pt-8 border-t border-slate-100">
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                       <Truck size={20} />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-800 text-sm">Hızlı Teslimat</h4>
                       <p className="text-slate-500 text-sm">Bölgene göre dakikalar içinde kapında.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                       <ShieldCheck size={20} />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-800 text-sm">Tazelik Garantisi</h4>
                       <p className="text-slate-500 text-sm">Beğenmediğiniz ürünü anında iade edebilirsiniz.</p>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </div>

        {/* Product Details Box */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-10 shadow-sm">
           <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Info size={24} className="text-emerald-500" /> Ürün Bilgileri
           </h2>
           <div className="prose prose-slate max-w-none text-sm text-slate-600 mb-8">
              <p>{product.description}</p>
           </div>
           
           {product.specifications && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                 {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-slate-100 last:border-0">
                       <span className="font-semibold text-slate-500">{key}</span>
                       <span className="font-bold text-slate-800 text-right">{value as string}</span>
                    </div>
                 ))}
              </div>
           )}

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* Nutrition Table Mock */}
             <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
               <h3 className="font-bold text-slate-800 mb-4">Besin Değerleri <span className="text-sm text-slate-500 font-normal">(100g için)</span></h3>
               <div className="space-y-2 text-sm">
                 <div className="flex justify-between py-2 border-b border-slate-200">
                   <span className="text-slate-600">Enerji (kcal)</span>
                   <span className="font-bold text-slate-800">{Math.floor(Math.random() * 300) + 50} kcal</span>
                 </div>
                 <div className="flex justify-between py-2 border-b border-slate-200">
                   <span className="text-slate-600">Yağ</span>
                   <span className="font-bold text-slate-800">{(Math.random() * 10).toFixed(1)} g</span>
                 </div>
                 <div className="flex justify-between py-2 border-b border-slate-200">
                   <span className="text-slate-600">Karbonhidrat</span>
                   <span className="font-bold text-slate-800">{(Math.random() * 30).toFixed(1)} g</span>
                 </div>
                 <div className="flex justify-between py-2 border-b border-slate-200">
                   <span className="text-slate-600">Protein</span>
                   <span className="font-bold text-slate-800">{(Math.random() * 15).toFixed(1)} g</span>
                 </div>
                 <div className="flex justify-between py-2">
                   <span className="text-slate-600">Tuz</span>
                   <span className="font-bold text-slate-800">{(Math.random() * 2).toFixed(2)} g</span>
                 </div>
               </div>
             </div>

             {/* Important Warnings */}
             <div className="space-y-4">
               <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                 <h4 className="font-bold text-amber-800 text-sm mb-1">Alerjen Uyarısı</h4>
                 <p className="text-amber-700/80 text-xs leading-relaxed">
                   Bu ürün süt ürünleri, yumurta veya gluten işleyen tesislerde üretilmiş veya paketlenmiş olabilir. Lütfen ambalaj üzerindeki içindekiler kısmını okuyunuz.
                 </p>
               </div>
               
               <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
                 <h4 className="font-bold text-emerald-800 text-sm mb-1">Saklama Koşulları</h4>
                 <p className="text-emerald-700/80 text-xs leading-relaxed">
                   TETT (Tavsiye Edilen Tüketim Tarihi) ambalaj üzerindedir. Kuru ve serin yerde, güneş ışığından koruyarak muhafaza ediniz.
                 </p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
