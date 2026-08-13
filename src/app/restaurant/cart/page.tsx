"use client";
import React, { useState } from 'react';
import { useCart } from '@/components/CartContext';
import { Minus, Plus, Trash2, ArrowRight, MapPin, CreditCard, CheckCircle2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    note: ''
  });

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setLoading(true);

    try {
      const res = await fetch('/api/restaurant/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, customer: formData, total: cartTotal })
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(data.orderId);
        clearCart();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-stone-50 pt-32 px-6 pb-24 flex items-center justify-center">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg w-full border border-stone-100">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-stone-900 mb-2">Siparişiniz Alındı!</h2>
          <p className="text-stone-500 mb-6">Sipariş numaranız: <strong className="text-stone-900">{success}</strong></p>
          <p className="text-sm text-stone-400 mb-8">Siparişiniz şu anda hazırlanıyor. Ortalama teslimat süresi 30-45 dakikadır.</p>
          <Link href="/restaurant" className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors inline-block w-full">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-32">
      <div className="bg-stone-900 text-white py-12 px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Sepetim</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cart.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl border border-stone-100 text-center shadow-sm">
              <div className="text-stone-300 mb-4 flex justify-center"><ShoppingBag className="w-16 h-16" /></div>
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Sepetiniz şu an boş.</h2>
              <Link href="/restaurant/menu" className="text-orange-500 font-bold hover:underline">Menüye Göz At</Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-stone-100">
                <h2 className="text-xl font-bold text-stone-800">Sipariş Özeti</h2>
              </div>
              <div className="divide-y divide-stone-100">
                {cart.map((c) => (
                  <div key={c.item.id} className="p-6 flex flex-col sm:flex-row gap-6 items-center">
                    {c.item.imageUrl && (
                      <img src={c.item.imageUrl} alt={c.item.name} className="w-24 h-24 object-cover rounded-xl" />
                    )}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-bold text-lg text-stone-800 mb-1">{c.item.name}</h3>
                      <p className="text-stone-500 text-sm">{parseFloat(c.item.price).toLocaleString('tr-TR')} ₺</p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4 bg-stone-100 px-4 py-2 rounded-full">
                        <button onClick={() => updateQuantity(c.item.id, -1)} className="text-stone-500 hover:text-stone-900 transition-colors"><Minus className="w-4 h-4" /></button>
                        <span className="font-bold text-sm w-4 text-center">{c.quantity}</span>
                        <button onClick={() => updateQuantity(c.item.id, 1)} className="text-stone-500 hover:text-stone-900 transition-colors"><Plus className="w-4 h-4" /></button>
                      </div>
                      <span className="font-black text-lg w-20 text-right">{(parseFloat(c.item.price) * c.quantity).toLocaleString('tr-TR')} ₺</span>
                      <button onClick={() => removeFromCart(c.item.id)} className="text-stone-300 hover:text-red-500 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Checkout Form */}
        {cart.length > 0 && (
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-stone-800 mb-6">Teslimat Bilgileri</h2>
              
              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Ad Soyad</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500 transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Telefon</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500 transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Teslimat Adresi</label>
                  <textarea required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} rows={3} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500 transition-colors text-sm resize-none"></textarea>
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Sipariş Notu (Opsiyonel)</label>
                  <input type="text" value={formData.note} onChange={e => setFormData({...formData, note: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 outline-none focus:border-orange-500 transition-colors text-sm" />
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100">
                  <div className="flex justify-between items-center mb-4 text-sm text-stone-500 font-medium">
                    <span>Ara Toplam</span>
                    <span>{cartTotal.toLocaleString('tr-TR')} ₺</span>
                  </div>
                  <div className="flex justify-between items-center mb-6 text-sm text-stone-500 font-medium">
                    <span>Teslimat Ücreti</span>
                    <span className="text-emerald-500 font-bold">Ücretsiz</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-stone-800 uppercase tracking-wider text-sm">Genel Toplam</span>
                    <span className="text-2xl font-black text-orange-500">{cartTotal.toLocaleString('tr-TR')} ₺</span>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70 disabled:active:scale-100 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                  >
                    {loading ? "İşleniyor..." : "Siparişi Tamamla"}
                    {!loading && <ArrowRight className="w-5 h-5" />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
