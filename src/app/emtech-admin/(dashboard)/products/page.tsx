"use client";
import { useState, useEffect, useRef } from 'react';
import { Plus, Edit, Trash2, CheckCircle, XCircle, Search, Upload, Image as ImageIcon, Video, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { exportToCsv } from '../utils/exportUtils';

type Category = {
  id: string;
  name: string;
};

type Product = {
  id: string;
  name: string;
  inStock: boolean;
  brand: string;
  imageUrl?: string;
  categoryId?: string;
  category?: Category;
};

export default function ProductsAdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    categoryId: '',
    newCategoryName: '',
    inStock: true,
    imageUrl: ''
  });
  
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/admin/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/admin/categories');
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bu ürünü silmek istediğinize emin misiniz?')) return;
    try {
      await fetch(`/api/admin/products?id=${id}`, { method: 'DELETE' });
      setProducts(products.filter(p => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleStock = async (product: Product) => {
    try {
      const res = await fetch('/api/admin/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...product, inStock: !product.inStock })
      });
      if (res.ok) {
        setProducts(products.map(p => p.id === product.id ? { ...p, inStock: !product.inStock } : p));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert("Dosya boyutu en fazla 10MB olmalıdır.");
      return;
    }

    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: uploadData
      });
      const data = await res.json();
      if (data.url) {
        setFormData(prev => ({ ...prev, imageUrl: data.url }));
      } else {
        alert("Dosya yüklenirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Upload error", error);
      alert("Dosya yüklenirken bir hata oluştu.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let finalCategoryId = formData.categoryId;
    
    // If user wants to create a new category
    if (formData.categoryId === 'ADD_NEW' && formData.newCategoryName.trim() !== '') {
      try {
        const catRes = await fetch('/api/admin/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formData.newCategoryName.trim() })
        });
        const catData = await catRes.json();
        finalCategoryId = catData.id;
        await fetchCategories(); // Refresh categories
      } catch (err) {
        console.error("Kategori oluşturulamadı", err);
        alert("Kategori oluşturulurken bir hata oluştu.");
        return;
      }
    } else if (formData.categoryId === 'ADD_NEW') {
      alert("Lütfen yeni kategori adını giriniz.");
      return;
    }

    const isEdit = !!editingProduct;
    const url = '/api/admin/products';
    const method = isEdit ? 'PUT' : 'POST';
    
    const bodyData = {
      id: editingProduct?.id,
      name: formData.name,
      brand: formData.brand,
      categoryId: finalCategoryId,
      inStock: formData.inStock,
      imageUrl: formData.imageUrl
    };

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData)
      });
      
      if (res.ok) {
        fetchProducts();
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({ 
      name: '', 
      brand: '', 
      categoryId: categories.length > 0 ? categories[0].id : '', 
      newCategoryName: '',
      inStock: true, 
      imageUrl: '' 
    });
    setIsModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      brand: product.brand || '',
      categoryId: product.categoryId || (product.category?.id) || '',
      newCategoryName: '',
      inStock: product.inStock,
      imageUrl: product.imageUrl || ''
    });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExportExcel = () => {
    const itemsToExport = selectedIds.length > 0 
      ? products.filter(p => selectedIds.includes(p.id))
      : filteredProducts;

    if (itemsToExport.length === 0) return alert("Dışa aktarılacak ürün yok.");

    const exportData = itemsToExport.map(p => ({
      'ID': p.id,
      'Ürün Adı': p.name,
      'Marka': p.brand || '-',
      'Kategori': p.category?.name || 'Kategorisiz',
      'Stok Durumu': p.inStock ? 'Stokta Var' : 'Tükendi'
    }));

    exportToCsv('Urunler', exportData);
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredProducts.length && filteredProducts.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredProducts.map(p => p.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">Ürün Yönetimi</h2>
          <p className="text-slate-500 text-sm">Katalogda sergilenecek ürünleri ekleyin, kategorilendirin ve stoklarını güncelleyin.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <button 
            onClick={handleExportExcel}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:-translate-y-1 hover:shadow-emerald-500/40 active:translate-y-0 active:shadow-none transition-all whitespace-nowrap"
          >
            <Download className="w-5 h-5" /> Excel İndir {selectedIds.length > 0 && `(${selectedIds.length})`}
          </button>
          <button 
            onClick={openAddModal}
            className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 hover:-translate-y-1 hover:shadow-indigo-500/40 active:translate-y-0 active:shadow-none transition-all whitespace-nowrap"
          >
            <Plus className="w-5 h-5" /> Yeni Ürün
          </button>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
        <div className="flex items-center gap-4 mb-6 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4" />
          <input 
            type="text" 
            placeholder="Ürün, marka veya kategori ara..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/50 border border-white/80 rounded-2xl pl-12 pr-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
          />
        </div>

        {loading ? (
          <div className="py-12 text-center text-slate-500 animate-pulse">Ürünler Yükleniyor...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-4 w-12">
                    <div className="flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                        checked={filteredProducts.length > 0 && selectedIds.length === filteredProducts.length}
                        onChange={toggleSelectAll}
                      />
                    </div>
                  </th>
                  <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Medya</th>
                  <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Ürün Adı</th>
                  <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Kategori</th>
                  <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Marka</th>
                  <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Stok Durumu</th>
                  <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-slate-100 hover:bg-white/40 transition-colors group">
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                          checked={selectedIds.includes(product.id)}
                          onChange={() => toggleSelect(product.id)}
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      {product.imageUrl ? (
                        <div className="w-12 h-12 rounded-xl border border-slate-200 overflow-hidden relative shadow-sm">
                          {product.imageUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                            <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                              <Video className="w-5 h-5 text-slate-400" />
                            </div>
                          ) : (
                            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                          )}
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl border border-slate-200 border-dashed flex items-center justify-center bg-white/50 text-slate-400">
                          <ImageIcon className="w-5 h-5" />
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-900">{product.name}</td>
                    <td className="py-4 px-4">
                      <span className="bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium rounded-full border border-indigo-100">
                        {product.category?.name || 'Kategorisiz'}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 rounded-full border border-slate-200">{product.brand || '-'}</span>
                    </td>
                    <td className="py-4 px-4">
                      <button 
                        onClick={() => handleToggleStock(product)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all shadow-sm ${product.inStock ? 'border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100' : 'border-red-200 text-red-700 bg-red-50 hover:bg-red-100'}`}
                      >
                        {product.inStock ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                        {product.inStock ? 'Stokta Var' : 'Tükendi'}
                      </button>
                    </td>
                    <td className="py-4 px-4 flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => openEditModal(product)} className="p-2 bg-white hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 rounded-xl border border-slate-200 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="p-2 bg-white hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-xl border border-slate-200 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredProducts.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-500">Hiç ürün bulunamadı.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={closeModal}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white/90 backdrop-blur-2xl border border-white p-6 md:p-8 w-full max-w-xl relative z-10 shadow-2xl rounded-3xl max-h-[90vh] overflow-y-auto"
            >
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-6 border-b border-slate-200 pb-4">
                {editingProduct ? 'Ürünü Düzenle' : 'Yeni Ürün Ekle'}
              </h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center bg-white/50 relative group transition-colors hover:bg-white hover:border-indigo-300">
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*,video/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    disabled={isUploading}
                  />
                  
                  {isUploading ? (
                    <div className="flex flex-col items-center gap-2 text-indigo-600 font-medium">
                      <Upload className="w-8 h-8 animate-bounce" />
                      Yükleniyor...
                    </div>
                  ) : formData.imageUrl ? (
                    <div className="flex flex-col items-center gap-3">
                      {formData.imageUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                        <video src={formData.imageUrl} className="max-h-32 rounded-xl shadow-sm border border-slate-200" controls />
                      ) : (
                        <img src={formData.imageUrl} alt="Önizleme" className="max-h-32 object-contain rounded-xl shadow-sm border border-slate-200" />
                      )}
                      <span className="text-xs font-medium text-slate-500">Değiştirmek için tıklayın veya sürükleyin</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-slate-500">
                      <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-indigo-100 transition-all">
                        <Upload className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-slate-700">Fotoğraf veya Video Yükle</span>
                      <span className="text-xs">Sürükle bırak veya gözat (Maks: 10MB)</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Ürün Adı *</label>
                    <input 
                      type="text" required
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Kategori *</label>
                    <select 
                      required
                      value={formData.categoryId} 
                      onChange={e => setFormData({...formData, categoryId: e.target.value})}
                      className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Kategori Seçiniz</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                      <option value="ADD_NEW" className="font-bold text-indigo-600">+ Yeni Kategori Ekle...</option>
                    </select>
                    {formData.categoryId === 'ADD_NEW' && (
                      <input 
                        type="text" 
                        placeholder="Yeni Kategori Adı" 
                        required
                        value={formData.newCategoryName} 
                        onChange={e => setFormData({...formData, newCategoryName: e.target.value})}
                        className="w-full mt-3 bg-indigo-50/50 border border-indigo-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      />
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Marka *</label>
                    <input 
                      type="text" required
                      value={formData.brand} onChange={e => setFormData({...formData, brand: e.target.value})}
                      className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl bg-white/50 shadow-sm cursor-pointer" onClick={() => setFormData({...formData, inStock: !formData.inStock})}>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${formData.inStock ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300 bg-white'}`}>
                    {formData.inStock && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className="text-sm font-medium text-slate-700 select-none">Stokta Var</span>
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <button type="button" onClick={closeModal} className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors">
                    İptal
                  </button>
                  <button type="submit" className="flex-1 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:shadow-indigo-500/40 transition-all">
                    Kaydet
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
