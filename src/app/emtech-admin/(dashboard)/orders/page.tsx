"use client";
import { useState, useRef } from 'react';
import { Search, Edit, CheckCircle, XCircle, Clock, ShoppingBag, MapPin, Phone, User, Package, Filter, MoreVertical, Eye, Truck, DollarSign, Upload, FileText, Trash2, TrendingUp, TrendingDown, Plus, Download, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin, Order, Document, OrderItem, CrmNote } from '../context/AdminContext';
import { exportToCsv } from '../utils/exportUtils';

export default function OrdersAdminPage() {
  const { orders, updateOrder, addOrder } = useAdmin();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED'>('ALL');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [editFormData, setEditFormData] = useState<Partial<Order>>({});
  
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [newNoteInput, setNewNoteInput] = useState('');

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerPhone.includes(searchQuery);
    
    let matchesStatus = true;
    if (statusFilter === 'ACTIVE') {
      matchesStatus = ['PENDING', 'PROCESSING', 'SHIPPED'].includes(order.status);
    } else if (statusFilter === 'COMPLETED') {
      matchesStatus = order.status === 'COMPLETED';
    } else if (statusFilter === 'CANCELLED') {
      matchesStatus = order.status === 'CANCELLED';
    }
    
    return matchesSearch && matchesStatus;
  });

  const openEditModal = (order: Order) => {
    setSelectedOrder(order);
    setEditFormData({ ...order, orderNotes: order.orderNotes || [] });
    setNewNoteInput('');
    setIsAddMode(false);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setSelectedOrder(null);
    setEditFormData({
      id: 'ORD-' + Math.floor(Math.random() * 100000).toString(),
      date: new Date().toISOString(),
      customerName: '',
      customerCompanyName: '',
      customerPhone: '',
      customerAddress: '',
      items: [{ id: 'ITM-1', name: '', quantity: 1, price: 0 }],
      totalAmount: 0,
      status: 'PENDING',
      paymentStatus: 'UNPAID',
      shippingCost: 0,
      costOfGoods: 0,
      documents: [],
      orderNotes: []
    });
    setNewNoteInput('');
    setIsAddMode(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleUpdateOrder = () => {
    if (isAddMode) {
      addOrder(editFormData as Order);
    } else if (selectedOrder) {
      updateOrder(selectedOrder.id, editFormData);
    }
    closeModal();
  };

  const handleExportExcel = () => {
    const itemsToExport = selectedIds.length > 0 
      ? orders.filter(o => selectedIds.includes(o.id))
      : filteredOrders;

    if (itemsToExport.length === 0) return alert("Dışa aktarılacak sipariş yok.");

    const exportData = itemsToExport.map(o => ({
      'Sipariş No': o.id,
      'Tarih': formatDate(o.date),
      'Müşteri Adı': o.customerName,
      'İşletme Adı': o.customerCompanyName || '-',
      'Telefon': o.customerPhone,
      'Adres': o.customerAddress,
      'Brüt Tutar (TL)': o.totalAmount,
      'Kargo Ücreti (TL)': o.shippingCost || 0,
      'Maliyet (TL)': o.costOfGoods || 0,
      'Net Gelir (TL)': (o.totalAmount || 0) - (o.shippingCost || 0) - (o.costOfGoods || 0),
      'Durum': o.status,
      'Ödeme Durumu': o.paymentStatus,
      'Kargo Firması': o.shippingCompany || '-',
      'Takip No': o.trackingNumber || '-'
    }));

    exportToCsv('Siparisler', exportData);
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredOrders.length && filteredOrders.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredOrders.map(o => o.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
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
    setTimeout(() => {
      const mockUrl = URL.createObjectURL(file);
      const newDoc: Document = {
        id: 'DOC-' + Math.random().toString(36).substr(2, 6),
        name: file.name,
        url: mockUrl
      };
      setEditFormData(prev => ({
        ...prev,
        documents: [...(prev.documents || []), newDoc]
      }));
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }, 1000);
  };

  const removeDocument = (id: string) => {
    if (!editFormData.documents) return;
    setEditFormData({
      ...editFormData,
      documents: editFormData.documents.filter(d => d.id !== id)
    });
  };

  const updateItem = (index: number, field: keyof OrderItem, value: any) => {
    if (!editFormData.items) return;
    const newItems = [...editFormData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    
    // Auto calculate total
    const total = newItems.reduce((acc, it) => acc + (it.price * it.quantity), 0);
    
    setEditFormData({ ...editFormData, items: newItems, totalAmount: total });
  };

  const addItem = () => {
    if (!editFormData.items) return;
    setEditFormData({
      ...editFormData,
      items: [...editFormData.items, { id: 'ITM-' + Math.random().toString(), name: '', quantity: 1, price: 0 }]
    });
  };

  const removeItem = (index: number) => {
    if (!editFormData.items || editFormData.items.length === 1) return;
    const newItems = editFormData.items.filter((_, i) => i !== index);
    const total = newItems.reduce((acc, it) => acc + (it.price * it.quantity), 0);
    setEditFormData({ ...editFormData, items: newItems, totalAmount: total });
  };

  const handleAddNoteToForm = () => {
    if (!newNoteInput.trim()) return;
    const newNote: CrmNote = {
      id: 'NOTE-' + Math.random().toString(36).substr(2, 6),
      content: newNoteInput.trim(),
      timestamp: new Date().toISOString()
    };
    
    setEditFormData(prev => ({
      ...prev,
      orderNotes: [...(prev.orderNotes || []), newNote]
    }));
    setNewNoteInput('');
  };

  const removeNote = (noteId: string) => {
    setEditFormData(prev => ({
      ...prev,
      orderNotes: (prev.orderNotes || []).filter(n => n.id !== noteId)
    }));
  };

  const getStatusBadge = (status: Order['status']) => {
    switch (status) {
      case 'COMPLETED':
        return <span className="bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold rounded-full border border-emerald-200 flex items-center gap-1 w-max"><CheckCircle className="w-3.5 h-3.5" /> Tamamlandı</span>;
      case 'PENDING':
        return <span className="bg-amber-100 text-amber-700 px-3 py-1 text-xs font-semibold rounded-full border border-amber-200 flex items-center gap-1 w-max"><Clock className="w-3.5 h-3.5" /> Bekliyor</span>;
      case 'PROCESSING':
        return <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold rounded-full border border-blue-200 flex items-center gap-1 w-max"><Package className="w-3.5 h-3.5" /> Hazırlanıyor</span>;
      case 'SHIPPED':
        return <span className="bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-semibold rounded-full border border-indigo-200 flex items-center gap-1 w-max"><Truck className="w-3.5 h-3.5" /> Kargoda</span>;
      case 'CANCELLED':
        return <span className="bg-red-100 text-red-700 px-3 py-1 text-xs font-semibold rounded-full border border-red-200 flex items-center gap-1 w-max"><XCircle className="w-3.5 h-3.5" /> İptal Edildi</span>;
      default:
        return null;
    }
  };

  const getPaymentBadge = (status: Order['paymentStatus']) => {
    switch (status) {
      case 'PAID':
        return <span className="text-emerald-600 font-medium text-xs">Ödendi</span>;
      case 'UNPAID':
        return <span className="text-amber-600 font-medium text-xs">Ödenmedi</span>;
      case 'REFUNDED':
        return <span className="text-slate-500 font-medium text-xs">İade Edildi</span>;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(d);
  };

  const validOrders = orders.filter(o => o.status !== 'CANCELLED');
  const grossRevenue = validOrders.reduce((acc, o) => acc + (o.totalAmount || 0), 0);
  const totalShippingCosts = validOrders.reduce((acc, o) => acc + (o.shippingCost || 0), 0);
  const totalCostOfGoods = validOrders.reduce((acc, o) => acc + (o.costOfGoods || 0), 0);
  const netIncome = grossRevenue - totalShippingCosts - totalCostOfGoods;
  const margin = grossRevenue > 0 ? ((netIncome / grossRevenue) * 100).toFixed(1) : '0.0';

  const activeOrdersCount = orders.filter(o => ['PENDING', 'PROCESSING', 'SHIPPED'].includes(o.status)).length;
  const completedOrdersCount = orders.filter(o => o.status === 'COMPLETED').length;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">Sipariş Yönetimi</h2>
          <p className="text-slate-500 text-sm">Gelen siparişleri takip edin, maliyet hesaplayın ve durumu güncelleyin.</p>
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
            <Plus className="w-5 h-5" /> Yeni Sipariş
          </button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-5 rounded-3xl shadow-lg shadow-indigo-500/20">
          <div className="flex items-center justify-between mb-2 opacity-80">
            <span className="text-sm font-semibold uppercase tracking-wider">Brüt Ciro (Geçerli)</span>
            <DollarSign className="w-5 h-5"/>
          </div>
          <p className="text-3xl font-bold">{formatCurrency(grossRevenue)}</p>
        </div>
        
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-rose-500 uppercase tracking-wider">Toplam Gider</span>
            <TrendingDown className="w-5 h-5 text-rose-500"/>
          </div>
          <p className="text-2xl font-bold text-slate-900">{formatCurrency(totalCostOfGoods + totalShippingCosts)}</p>
          <p className="text-xs text-slate-500 mt-1">Maliyet: {formatCurrency(totalCostOfGoods)} | Kargo: {formatCurrency(totalShippingCosts)}</p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wider">Net Gelir</span>
            <TrendingUp className="w-5 h-5 text-emerald-500"/>
          </div>
          <p className="text-3xl font-bold text-emerald-600">{formatCurrency(netIncome)}</p>
        </div>

        <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Kar Marjı</span>
            <Activity className="w-5 h-5 text-blue-500"/>
          </div>
          <p className="text-3xl font-bold text-blue-600">%{margin}</p>
        </div>
      </div>

      {/* Tabs / Filters */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4 hide-scrollbar">
        {[
          { id: 'ALL', label: 'Tümü', count: orders.length },
          { id: 'ACTIVE', label: 'Aktif Siparişler', count: activeOrdersCount },
          { id: 'COMPLETED', label: 'Tamamlanan', count: completedOrdersCount },
          { id: 'CANCELLED', label: 'İptal', count: orders.length - activeOrdersCount - completedOrdersCount }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setStatusFilter(tab.id as any)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all shadow-sm ${
              statusFilter === tab.id 
                ? 'bg-indigo-600 text-white shadow-indigo-500/30' 
                : 'bg-white/60 text-slate-600 border border-white/60 hover:bg-white'
            }`}
          >
            {tab.label} <span className={`ml-2 px-2 py-0.5 rounded-md text-xs ${statusFilter === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>{tab.count}</span>
          </button>
        ))}
      </div>

      <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Sipariş no, müşteri adı veya telefon ara..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/50 border border-white/80 rounded-2xl pl-12 pr-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-4 px-4 w-12">
                  <div className="flex items-center justify-center">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                      checked={filteredOrders.length > 0 && selectedIds.length === filteredOrders.length}
                      onChange={toggleSelectAll}
                    />
                  </div>
                </th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Sipariş No & Tarih</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Müşteri Detayı</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Brüt / Net Gelir</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Kargo & Durum</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => {
                const net = (order.totalAmount || 0) - (order.costOfGoods || 0) - (order.shippingCost || 0);
                
                return (
                  <tr key={order.id} className="border-b border-slate-100 hover:bg-white/40 transition-colors cursor-pointer group" onClick={() => openEditModal(order)}>
                    <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                          checked={selectedIds.includes(order.id)}
                          onChange={() => toggleSelect(order.id)}
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors block leading-tight">{order.id}</div>
                      <div className="text-xs text-slate-500 mt-1">{formatDate(order.date)}</div>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-600">
                      <div className="font-medium text-slate-800">{order.customerName}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-1"><Phone className="w-3 h-3"/> {order.customerPhone}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-slate-900" title="Brüt Tutar">{formatCurrency(order.totalAmount || 0)}</div>
                      {order.status !== 'CANCELLED' && (
                        <div className={`text-xs font-medium mt-1 ${net > 0 ? 'text-emerald-600' : 'text-rose-500'}`} title="Net Gelir (Brüt - Maliyet - Kargo)">
                          Net: {formatCurrency(net)}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <div className="mb-2">{getStatusBadge(order.status)}</div>
                      {order.shippingCompany && (
                        <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                          <Truck className="w-3 h-3"/> {order.shippingCompany} {order.trackingNumber && `(${order.trackingNumber})`}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-4 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                      <button onClick={() => openEditModal(order)} className="px-3 py-1.5 bg-white hover:bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100 hover:border-indigo-200 transition-colors text-xs font-medium flex items-center gap-1 shadow-sm">
                        <Edit className="w-3.5 h-3.5" /> Düzenle
                      </button>
                    </td>
                  </tr>
                );
              })}
              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-slate-500">
                    <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    Bu kriterlere uygun sipariş bulunamadı.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={closeModal}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white/95 backdrop-blur-2xl border border-white p-6 sm:p-8 w-full max-w-5xl relative z-10 shadow-2xl rounded-3xl max-h-[90vh] overflow-y-auto flex flex-col"
            >
              <div className="flex justify-between items-start border-b border-slate-200 pb-5 mb-5 shrink-0">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
                    {isAddMode ? 'Yeni Sipariş Oluştur' : `Sipariş Düzenle: ${editFormData.id}`}
                  </h3>
                  {isAddMode && (
                    <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                      </span>
                      Müşteri telefon/ismi CRM'de bulunursa otomatik eşleştirilecek.
                    </p>
                  )}
                  {!isAddMode && editFormData.date && <p className="text-sm text-slate-500 mt-1">{formatDate(editFormData.date)}</p>}
                </div>
                <div className="flex gap-2">
                  <button onClick={handleUpdateOrder} className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-colors">
                    {isAddMode ? 'Siparişi Oluştur' : 'Değişiklikleri Kaydet'}
                  </button>
                  <button onClick={closeModal} className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200">
                    <XCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                
                {/* Left Column: Customer & Items */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Customer Details */}
                  <div className="bg-slate-50/50 border border-slate-200 rounded-2xl p-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                      <User className="w-4 h-4"/> Müşteri Bilgileri
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-500 mb-1 block">Ad Soyad *</label>
                        <input type="text" value={editFormData.customerName || ''} onChange={e => setEditFormData({...editFormData, customerName: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm" placeholder="Müşteri Adı" required />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 mb-1 block">İşletme İsmi</label>
                        <input type="text" value={editFormData.customerCompanyName || ''} onChange={e => setEditFormData({...editFormData, customerCompanyName: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm" placeholder="Opsiyonel" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 mb-1 block">Telefon *</label>
                        <input type="tel" value={editFormData.customerPhone || ''} onChange={e => setEditFormData({...editFormData, customerPhone: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm" placeholder="0555..." required />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 mb-1 block">Adres</label>
                        <input type="text" value={editFormData.customerAddress || ''} onChange={e => setEditFormData({...editFormData, customerAddress: e.target.value})} className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm" placeholder="Teslimat Adresi" />
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600 flex items-center gap-2">
                        <Package className="w-4 h-4"/> Sipariş İçeriği
                      </h4>
                      <button onClick={addItem} className="text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"><Plus className="w-3.5 h-3.5"/> Ürün Ekle</button>
                    </div>
                    <div className="p-4 space-y-3">
                      {editFormData.items?.map((item, idx) => (
                        <div key={item.id || idx} className="grid grid-cols-12 gap-2 items-center">
                          <div className="col-span-5 sm:col-span-6">
                            <input type="text" placeholder="Ürün Adı" value={item.name} onChange={e => updateItem(idx, 'name', e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm" />
                          </div>
                          <div className="col-span-3 sm:col-span-2">
                            <input type="number" placeholder="Adet" min="1" value={item.quantity} onChange={e => updateItem(idx, 'quantity', Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-center" />
                          </div>
                          <div className="col-span-3 sm:col-span-3">
                            <input type="number" placeholder="Birim Fiyat" min="0" value={item.price} onChange={e => updateItem(idx, 'price', Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-right" />
                          </div>
                          <div className="col-span-1 flex justify-end">
                            <button onClick={() => removeItem(idx)} className="p-2 text-slate-400 hover:text-red-500 bg-white hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"><Trash2 className="w-4 h-4"/></button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-slate-50/80 px-5 py-3 border-t border-slate-200 text-right">
                      <span className="text-sm font-medium text-slate-500 mr-4">Toplam Tutar:</span>
                      <span className="text-xl font-bold text-slate-900">{formatCurrency(editFormData.totalAmount || 0)}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Status, Finance, Shipping */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Status */}
                  <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-4 flex items-center gap-2">
                      <Activity className="w-4 h-4"/> Durum Güncelle
                    </h4>
                    
                    <select 
                      value={editFormData.status}
                      onChange={(e) => setEditFormData({...editFormData, status: e.target.value as any})}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 mb-4"
                    >
                      <option value="PENDING">Bekliyor</option>
                      <option value="PROCESSING">Hazırlanıyor</option>
                      <option value="SHIPPED">Kargoda</option>
                      <option value="COMPLETED">Tamamlandı</option>
                      <option value="CANCELLED">İptal Edildi</option>
                    </select>

                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Ödeme Durumu</h4>
                    <select 
                      value={editFormData.paymentStatus}
                      onChange={(e) => setEditFormData({...editFormData, paymentStatus: e.target.value as any})}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    >
                      <option value="PAID">Ödendi</option>
                      <option value="UNPAID">Ödenmedi</option>
                      <option value="REFUNDED">İade Edildi</option>
                    </select>
                  </div>

                  {/* Finance & Shipping Data Input */}
                  <div className="bg-slate-50/50 border border-slate-200 rounded-2xl p-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                      <DollarSign className="w-4 h-4"/> Maliyet & Kargo
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Ürün Geliş Maliyeti (₺)</label>
                        <input 
                          type="number" min="0" placeholder="0"
                          value={editFormData.costOfGoods || ''} 
                          onChange={(e) => setEditFormData({...editFormData, costOfGoods: Number(e.target.value)})}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        />
                      </div>
                      <div className="pt-4 border-t border-slate-200">
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Kargo Firması</label>
                        <input 
                          type="text" placeholder="Örn: Yurtiçi Kargo"
                          value={editFormData.shippingCompany || ''} 
                          onChange={(e) => setEditFormData({...editFormData, shippingCompany: e.target.value})}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 mb-3"
                        />
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Takip Numarası</label>
                        <input 
                          type="text" placeholder="Takip kodu"
                          value={editFormData.trackingNumber || ''} 
                          onChange={(e) => setEditFormData({...editFormData, trackingNumber: e.target.value})}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 mb-3"
                        />
                        <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Kargo Ücreti (₺)</label>
                        <input 
                          type="number" min="0" placeholder="0"
                          value={editFormData.shippingCost || ''} 
                          onChange={(e) => setEditFormData({...editFormData, shippingCost: Number(e.target.value)})}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span className="text-slate-500 font-medium">Brüt Ciro:</span>
                        <span className="font-bold text-slate-900">{formatCurrency(editFormData.totalAmount || 0)}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-rose-500 mb-1">
                        <span className="font-medium">Toplam Gider:</span>
                        <span className="font-bold">- {formatCurrency((editFormData.costOfGoods || 0) + (editFormData.shippingCost || 0))}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-emerald-600 pt-2 border-t border-emerald-100 mt-2">
                        <span className="font-bold">Net Gelir:</span>
                        <span className="font-bold text-lg">{formatCurrency((editFormData.totalAmount || 0) - (editFormData.costOfGoods || 0) - (editFormData.shippingCost || 0))}</span>
                      </div>
                    </div>
                  </div>

                  {/* Order CRM Notes */}
                  <div className="bg-slate-50/50 border border-slate-200 rounded-2xl p-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4"/> Sipariş Notları (CRM)
                    </h4>
                    
                    <div className="space-y-3 mb-4 max-h-48 overflow-y-auto pr-2">
                      {editFormData.orderNotes && editFormData.orderNotes.length > 0 ? (
                        editFormData.orderNotes.map(note => (
                          <div key={note.id} className="relative bg-white border border-slate-200 rounded-xl p-4 pr-10 group shadow-sm">
                            <p className="text-sm text-slate-700 whitespace-pre-wrap">{note.content}</p>
                            <span className="absolute bottom-2 right-3 text-[10px] font-medium text-slate-400">{formatDate(note.timestamp)}</span>
                            <button type="button" onClick={() => removeNote(note.id)} className="absolute top-2 right-2 p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"><Trash2 className="w-3.5 h-3.5"/></button>
                          </div>
                        ))
                      ) : (
                        <div className="text-sm text-slate-400 italic text-center p-4 border border-dashed border-slate-200 rounded-xl">Bu siparişe henüz not eklenmemiş.</div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <input 
                        type="text"
                        placeholder="Siparişe dair yeni bir not ekleyin..."
                        value={newNoteInput}
                        onChange={e => setNewNoteInput(e.target.value)}
                        onKeyDown={e => { if(e.key === 'Enter') { e.preventDefault(); handleAddNoteToForm(); } }}
                        className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      />
                      <button type="button" onClick={handleAddNoteToForm} className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-xl transition-colors flex items-center justify-center">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Documents Upload Section */}
              <div className="bg-white/50 border border-slate-200 rounded-2xl p-5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4"/> Fatura / Dekont / Teslimat Kanıtı
                </h4>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                  {editFormData.documents?.map(doc => (
                    <a href={doc.url} target="_blank" rel="noreferrer" key={doc.id} className="relative group rounded-xl border border-slate-200 overflow-hidden bg-white h-24 flex items-center justify-center hover:border-indigo-300 hover:shadow-md transition-all">
                      {doc.url.match(/\.(jpeg|jpg|gif|png|webp)$/i) || doc.url.startsWith('blob:') ? (
                        <img src={doc.url} alt={doc.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-center p-2">
                          <FileText className="w-6 h-6 text-indigo-400 mx-auto mb-1" />
                          <span className="text-[10px] font-medium text-slate-600 truncate block w-full px-1">{doc.name}</span>
                        </div>
                      )}
                      <button 
                        type="button" 
                        onClick={(e) => { e.preventDefault(); removeDocument(doc.id); }}
                        className="absolute top-2 right-2 p-1.5 bg-white/80 hover:bg-red-50 text-slate-600 hover:text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-sm"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </a>
                  ))}
                  
                  <div className="relative rounded-xl border-2 border-dashed border-slate-200 bg-white/50 h-24 flex flex-col items-center justify-center hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors cursor-pointer group">
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*,.pdf,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      disabled={isUploading}
                    />
                    {isUploading ? (
                      <Upload className="w-5 h-5 text-indigo-500 animate-bounce mb-2" />
                    ) : (
                      <>
                        <Upload className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors mb-1" />
                        <span className="text-[10px] font-medium text-slate-500 group-hover:text-indigo-600 text-center px-2">Görsel/Belge</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Activity(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  );
}
