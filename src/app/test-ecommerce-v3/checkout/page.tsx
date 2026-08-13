"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Lock, MapPin, Clock, CreditCard, ShoppingBasket } from 'lucide-react';
import { useCart } from '@/store/ecommerce/CartContext';
import { useCheckout } from '@/store/ecommerce/CheckoutContext';
import { Price } from '@/components/ecommerce/shared/Price';

export default function GroceryCheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const { currentStep, setStep, checkoutData, updateData, placeOrder } = useCheckout();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [deliveryTime, setDeliveryTime] = useState('hemen');

  useEffect(() => {
    if (items.length === 0 && currentStep !== 'SUCCESS') {
      router.push('/test-ecommerce-v3');
    }
  }, [items, currentStep, router]);

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    const id = await placeOrder();
    setOrderId(id);
    clearCart();
    setIsProcessing(false);
  };

  if (currentStep === 'SUCCESS') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 bg-slate-50">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20 }}
          className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-center text-slate-800">Siparişiniz Alındı!</h1>
        <p className="text-slate-500 text-center mb-8 max-w-md">
          Siparişiniz hazırlanmaya başlandı. Belirttiğiniz saat diliminde teslim edilecektir.
        </p>
        <div className="bg-white border border-slate-200 p-6 rounded-2xl w-full max-w-sm mb-8 text-center shadow-sm">
          <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Sipariş Numarası</p>
          <p className="text-2xl font-black text-emerald-600">{orderId || 'TAZE-000000'}</p>
        </div>
        <Link href="/test-ecommerce-v3" className="bg-emerald-600 text-white px-8 py-4 font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
          Alışverişe Dön
        </Link>
      </div>
    );
  }

  const steps = [
    { id: 'INFORMATION', label: 'Teslimat & Zaman' },
    { id: 'PAYMENT', label: 'Ödeme' }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 w-full flex flex-col lg:flex-row gap-8 min-h-[80vh]">
      
      {/* Left Column - Forms */}
      <div className="lg:w-7/12 xl:w-2/3">
        <Link href="/test-ecommerce-v3" className="text-2xl font-black tracking-tight text-emerald-600 flex items-center gap-2 mb-10">
          <ShoppingBasket size={24} /> TAZE MARKET
        </Link>
        
        {/* Breadcrumb Steps */}
        <nav className="flex items-center gap-2 text-sm mb-8 font-bold">
          <span className="text-slate-400">Sepet</span>
          <ChevronRight size={16} className="text-slate-300" />
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <span className={`${
                currentStep === s.id ? 'text-emerald-600' : 
                steps.findIndex(x => x.id === currentStep) > i ? 'text-slate-400 line-through' : 'text-slate-300'
              }`}>
                {s.label}
              </span>
              {i < steps.length - 1 && <ChevronRight size={16} className="text-slate-300" />}
            </React.Fragment>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          {currentStep === 'INFORMATION' && (
            <motion.div key="info" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              
              {/* Address Box */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 mb-6 shadow-sm">
                 <h2 className="text-lg font-bold mb-6 text-slate-800 flex items-center gap-2">
                    <MapPin className="text-emerald-500" /> Teslimat Adresi
                 </h2>
                 <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Ad" value={checkoutData.firstName} onChange={e => updateData({ firstName: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:border-emerald-500 focus:bg-white focus:outline-none transition-colors" />
                    <input type="text" placeholder="Soyad" value={checkoutData.lastName} onChange={e => updateData({ lastName: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:border-emerald-500 focus:bg-white focus:outline-none transition-colors" />
                  </div>
                  <input type="text" placeholder="Mahalle, Sokak, Bina No, Daire" value={checkoutData.address} onChange={e => updateData({ address: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:border-emerald-500 focus:bg-white focus:outline-none transition-colors" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="email" placeholder="E-posta" value={checkoutData.email} onChange={e => updateData({ email: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:border-emerald-500 focus:bg-white focus:outline-none transition-colors" />
                    <input type="tel" placeholder="Telefon" value={checkoutData.phone} onChange={e => updateData({ phone: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:border-emerald-500 focus:bg-white focus:outline-none transition-colors" />
                  </div>
                 </div>
              </div>

              {/* Time Slot Box */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
                 <h2 className="text-lg font-bold mb-6 text-slate-800 flex items-center gap-2">
                    <Clock className="text-emerald-500" /> Teslimat Zamanı
                 </h2>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <label onClick={() => setDeliveryTime('hemen')} className={`border-2 rounded-xl p-4 cursor-pointer relative transition-all ${deliveryTime === 'hemen' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-slate-300'}`}>
                       {deliveryTime === 'hemen' && <span className="absolute top-2 right-2 flex w-5 h-5 bg-emerald-500 rounded-full items-center justify-center text-white"><CheckCircle2 size={14}/></span>}
                       <span className={`block font-bold mb-1 ${deliveryTime === 'hemen' ? 'text-emerald-800' : 'text-slate-700'}`}>Hemen Teslimat</span>
                       <span className={`block text-sm font-medium ${deliveryTime === 'hemen' ? 'text-emerald-600' : 'text-slate-500'}`}>30-45 dk içinde</span>
                    </label>
                    <label onClick={() => setDeliveryTime('bugun')} className={`border-2 rounded-xl p-4 cursor-pointer relative transition-all ${deliveryTime === 'bugun' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-slate-300'}`}>
                       {deliveryTime === 'bugun' && <span className="absolute top-2 right-2 flex w-5 h-5 bg-emerald-500 rounded-full items-center justify-center text-white"><CheckCircle2 size={14}/></span>}
                       <span className={`block font-bold mb-1 ${deliveryTime === 'bugun' ? 'text-emerald-800' : 'text-slate-700'}`}>Bugün</span>
                       <span className={`block text-sm font-medium ${deliveryTime === 'bugun' ? 'text-emerald-600' : 'text-slate-500'}`}>18:00 - 20:00</span>
                    </label>
                    <label onClick={() => setDeliveryTime('yarin')} className={`border-2 rounded-xl p-4 cursor-pointer relative transition-all ${deliveryTime === 'yarin' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-slate-300'}`}>
                       {deliveryTime === 'yarin' && <span className="absolute top-2 right-2 flex w-5 h-5 bg-emerald-500 rounded-full items-center justify-center text-white"><CheckCircle2 size={14}/></span>}
                       <span className={`block font-bold mb-1 ${deliveryTime === 'yarin' ? 'text-emerald-800' : 'text-slate-700'}`}>Yarın</span>
                       <span className={`block text-sm font-medium ${deliveryTime === 'yarin' ? 'text-emerald-600' : 'text-slate-500'}`}>10:00 - 12:00</span>
                    </label>
                 </div>
              </div>

              {/* Substitute Preference */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm mt-6">
                 <h2 className="text-lg font-bold mb-6 text-slate-800 flex items-center gap-2">
                    <ShoppingBasket className="text-emerald-500" /> Alternatif Ürün Tercihi
                 </h2>
                 <p className="text-sm text-slate-500 mb-4">Siparişinizdeki bazı ürünler stokta kalmadığında ne yapmamızı istersiniz?</p>
                 <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                       <input type="radio" name="substitute" defaultChecked className="w-5 h-5 accent-emerald-600" />
                       <div>
                         <span className="block font-bold text-slate-700 text-sm">Beni Ara</span>
                         <span className="block text-xs text-slate-500">Müşteri temsilcimiz alternatif ürünler için sizi arar.</span>
                       </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                       <input type="radio" name="substitute" className="w-5 h-5 accent-emerald-600" />
                       <div>
                         <span className="block font-bold text-slate-700 text-sm">Muadil Ürün Gönder</span>
                         <span className="block text-xs text-slate-500">Stokta olmayan ürün yerine en yakın muadil ürün gönderilir.</span>
                       </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                       <input type="radio" name="substitute" className="w-5 h-5 accent-emerald-600" />
                       <div>
                         <span className="block font-bold text-slate-700 text-sm">Ürünü İptal Et</span>
                         <span className="block text-xs text-slate-500">Sadece stokta olan ürünler gönderilir, eksik ürün tutarı iade edilir.</span>
                       </div>
                    </label>
                 </div>
              </div>

              <div className="flex justify-between items-center pt-8">
                <Link href="/test-ecommerce-v3/cart" className="text-sm font-bold text-slate-500 hover:text-emerald-600">Geri Dön</Link>
                <button 
                  onClick={() => setStep('PAYMENT')}
                  disabled={!checkoutData.firstName || !checkoutData.address}
                  className="bg-emerald-600 text-white px-8 py-4 font-bold rounded-2xl hover:bg-emerald-700 disabled:opacity-50 transition-colors shadow-lg shadow-emerald-200 text-lg"
                >
                  Devam Et
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'PAYMENT' && (
            <motion.div key="payment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              
              <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm mb-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                     <CreditCard className="text-emerald-500" /> Ödeme Yöntemi
                  </h2>
                  <span className="flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full"><Lock size={12}/> Güvenli Ödeme</span>
                </div>
                
                <div className="space-y-4">
                  <input type="text" placeholder="Kart Numarası" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-emerald-500 focus:bg-white focus:outline-none text-lg tracking-wide" />
                  <input type="text" placeholder="Kart Üzerindeki İsim" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-emerald-500 focus:bg-white focus:outline-none" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Ay / Yıl" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-emerald-500 focus:bg-white focus:outline-none" />
                    <input type="text" placeholder="CVV" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-emerald-500 focus:bg-white focus:outline-none" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <button onClick={() => setStep('INFORMATION')} className="text-sm font-bold text-slate-500 hover:text-emerald-600">Geri Dön</button>
                <button 
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="bg-emerald-600 text-white px-8 py-4 font-bold rounded-2xl hover:bg-emerald-700 disabled:opacity-70 flex items-center gap-2 shadow-lg shadow-emerald-200 text-lg"
                >
                  {isProcessing ? 'Onaylanıyor...' : 'Siparişi Onayla'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Column - Order Summary */}
      <div className="lg:w-5/12 xl:w-1/3">
        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl sticky top-28 shadow-sm">
          <h3 className="font-black text-xl mb-6 text-slate-800">Sepet Özeti</h3>
          
          <div className="space-y-4 mb-6 pb-6 border-b border-slate-100 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
            {items.map(item => (
              <div key={item.cartItemId} className="flex gap-4">
                <div className="relative w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 overflow-hidden">
                  <img src={item.product.thumbnail} alt={item.product.name} className="w-full h-full object-cover" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h4 className="text-sm font-bold text-slate-800 line-clamp-2 leading-tight mb-1">{item.product.name}</h4>
                  <Price amount={item.product.price * item.quantity} className="text-sm text-emerald-700" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm font-medium text-slate-600 mb-6">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <Price amount={subtotal} />
            </div>
            <div className="flex justify-between">
              <span>Teslimat Ücreti</span>
              {subtotal > 1500 ? (
                 <span className="text-emerald-600 font-bold flex items-center gap-1">Bedava</span>
              ) : (
                 <Price amount={29.90} />
              )}
            </div>
          </div>

          <div className="flex justify-between items-center text-2xl font-black text-slate-800 pt-6 border-t border-slate-200">
            <span>Toplam</span>
            <Price amount={subtotal > 1500 ? subtotal : subtotal + 29.9} className="text-emerald-600" />
          </div>
        </div>
      </div>

    </div>
  );
}
