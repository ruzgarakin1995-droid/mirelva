"use client";
import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Search, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MenuManagement() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', price: '', categoryId: '', description: '' });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/restaurant/categories');
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async () => {
    if (!newItem.name || !newItem.price || !newItem.categoryId) return alert("Lütfen gerekli alanları doldurun.");
    setSaving(true);
    try {
      const res = await fetch('/api/restaurant/menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      });
      if (res.ok) {
        setShowAddModal(false);
        setNewItem({ name: '', price: '', categoryId: '', description: '' });
        fetchCategories(); // Refresh list
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="flex h-[400px] items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-orange-500" /></div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Menü Yönetimi</h1>
          <p className="text-slate-500 text-sm mt-1">Restoran menünüzü ve kategorileri buradan düzenleyin.</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input type="text" placeholder="Ürün ara..." className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:border-orange-500 transition-colors shadow-sm" />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
          >
            <Plus className="w-4 h-4" /> Yeni Ürün
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {categories.length === 0 ? (
          <div className="p-12 text-center text-slate-500">Hiç kategori bulunamadı.</div>
        ) : (
          <div className="divide-y divide-slate-100">
            {categories.map((category) => (
              <div key={category.id} className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    {category.name}
                    <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full">{category.items?.length || 0} Ürün</span>
                  </h2>
                  <button className="text-sm text-slate-400 hover:text-orange-500 font-medium flex items-center gap-1 transition-colors">
                    <Edit2 className="w-3 h-3" /> Düzenle
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items?.map((item: any) => (
                    <div key={item.id} className="group border border-slate-100 rounded-xl p-4 hover:border-orange-200 hover:shadow-md transition-all bg-slate-50 hover:bg-white relative">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-slate-800 pr-8">{item.name}</h3>
                        <span className="font-black text-orange-500 shrink-0">₺{parseFloat(item.price)}</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2">{item.description || "Açıklama yok"}</p>
                      
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity">
                        <button className="w-7 h-7 bg-white border border-slate-200 rounded text-slate-400 hover:text-blue-500 flex items-center justify-center shadow-sm">
                          <Edit2 className="w-3 h-3" />
                        </button>
                        <button className="w-7 h-7 bg-white border border-slate-200 rounded text-slate-400 hover:text-red-500 flex items-center justify-center shadow-sm">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  {category.items?.length === 0 && (
                    <div className="col-span-full py-4 text-sm text-slate-400 italic">Bu kategoride ürün yok.</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Item Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowAddModal(false)} />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white rounded-2xl w-full max-w-md relative z-10 shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-slate-100 bg-slate-50">
                <h2 className="text-xl font-bold text-slate-800">Yeni Ürün Ekle</h2>
                <p className="text-xs text-slate-500 mt-1">Veritabanına anında kayıt edilir.</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Ürün Adı *</label>
                  <input type="text" value={newItem.name} onChange={e => setNewItem({...newItem, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-orange-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Kategori *</label>
                  <select value={newItem.categoryId} onChange={e => setNewItem({...newItem, categoryId: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-orange-500 transition-colors">
                    <option value="">Kategori Seçin</option>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Fiyat (₺) *</label>
                  <input type="number" value={newItem.price} onChange={e => setNewItem({...newItem, price: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-orange-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Açıklama</label>
                  <textarea value={newItem.description} onChange={e => setNewItem({...newItem, description: e.target.value})} rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-orange-500 transition-colors resize-none"></textarea>
                </div>
              </div>
              <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
                <button onClick={() => setShowAddModal(false)} className="px-5 py-2.5 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors">İptal</button>
                <button onClick={handleAddItem} disabled={saving} className="px-5 py-2.5 rounded-lg text-sm font-bold bg-orange-500 hover:bg-orange-600 text-white transition-colors flex items-center gap-2">
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />} Kaydet
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
