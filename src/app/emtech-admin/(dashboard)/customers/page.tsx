"use client";
import { useState, useRef, useEffect } from 'react';
import { Search, Plus, Edit, Trash2, Phone, Mail, MapPin, Calendar, CreditCard, Clock, Star, MessageSquare, ShoppingBag, Upload, FileText, Send, Download, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin, Customer, Document, CrmNote } from '../context/AdminContext';
import { exportToCsv } from '../utils/exportUtils';

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function CustomersCRMPage() {
  const { customers, updateCustomer, deleteCustomer, addCustomer, orders } = useAdmin();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const [formData, setFormData] = useState<Partial<Customer>>({});
  const [newNoteInput, setNewNoteInput] = useState('');
  
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const openWhatsApp = (phone: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    let clean = phone.replace(/\D/g, '');
    if (clean.startsWith('0')) clean = clean.substring(1);
    if (!clean.startsWith('90')) clean = '90' + clean;
    window.open(`https://wa.me/${clean}`, '_blank');
  };

  const normalizeNotes = (notes: any): CrmNote[] => {
    if (Array.isArray(notes)) return notes;
    if (typeof notes === 'string' && notes.trim() !== '') {
      return [{ id: 'LEGACY-' + Math.random().toString(36).substr(2, 6), content: notes, timestamp: new Date().toISOString() }];
    }
    return [];
  };

  useEffect(() => {
    if (customers.length > 0 && !selectedCustomer) {
      const params = new URLSearchParams(window.location.search);
      const cId = params.get('customerId');
      if (cId) {
        const c = customers.find(x => x.id === cId);
        if (c) openViewModal(c);
      }
    }
  }, [customers]);

  const filteredCustomers = customers.filter(c => {
    const matchesSearch = 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (c.companyName && c.companyName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.phone.includes(searchQuery) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'ALL' || c.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: string) => {
    if (!confirm('Bu müşteriyi silmek istediğinize emin misiniz? Tüm geçmiş silinecektir.')) return;
    deleteCustomer(id);
  };

  const openAddModal = () => {
    setSelectedCustomer(null);
    setIsEditMode(false);
    setFormData({
      name: '', companyName: '', phone: '', email: '', address: '', status: 'ACTIVE', totalSpent: 0, totalPaid: 0, 
      joinDate: new Date().toISOString().split('T')[0],
      lastOrderDate: '-',
      notes: [],
      documents: []
    });
    setNewNoteInput('');
    setIsModalOpen(true);
  };

  const openEditModal = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsEditMode(true);
    setFormData({ ...customer });
    setNewNoteInput('');
    setIsModalOpen(true);
  };

  const openViewModal = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsEditMode(false);
    setNewNoteInput('');
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

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
      setFormData(prev => ({
        ...prev,
        documents: [...(prev.documents || []), newDoc]
      }));
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }, 1000);
  };

  const removeDocument = (id: string) => {
    if (!formData.documents) return;
    setFormData({
      ...formData,
      documents: formData.documents.filter(d => d.id !== id)
    });
  };

  const handleExportExcel = () => {
    const itemsToExport = selectedIds.length > 0 
      ? customers.filter(c => selectedIds.includes(c.id))
      : filteredCustomers;

    if (itemsToExport.length === 0) return alert("Dışa aktarılacak müşteri yok.");

    const exportData = itemsToExport.map(c => ({
      'ID': c.id,
      'Ad Soyad': c.name,
      'İşletme Adı': c.companyName || '-',
      'Telefon': c.phone,
      'E-posta': c.email || '-',
      'Adres': c.address || '-',
      'Durum': c.status,
      'Kayıt Tarihi': formatDate(c.joinDate),
      'Toplam Harcama (TL)': c.totalSpent,
      'Toplam Ödeme (TL)': c.totalPaid,
      'Kalan Borç (TL)': c.totalSpent - c.totalPaid,
      'Son Sipariş': formatDate(c.lastOrderDate)
    }));

    exportToCsv('Musteriler', exportData);
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredCustomers.length && filteredCustomers.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredCustomers.map(c => c.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleAddNoteToForm = () => {
    if (!newNoteInput.trim()) return;
    const newNote: CrmNote = {
      id: 'NOTE-' + Math.random().toString(36).substr(2, 6),
      content: newNoteInput.trim(),
      timestamp: new Date().toISOString()
    };
    
    // If in view mode, instantly save to global state as well
    if (!isEditMode && selectedCustomer) {
      const currentNotes = normalizeNotes(selectedCustomer.notes);
      const updatedNotes = [...currentNotes, newNote];
      updateCustomer(selectedCustomer.id, { notes: updatedNotes });
      setSelectedCustomer({ ...selectedCustomer, notes: updatedNotes });
    } else {
      setFormData(prev => ({
        ...prev,
        notes: [...normalizeNotes(prev.notes), newNote]
      }));
    }
    setNewNoteInput('');
  };

  const removeNote = (noteId: string) => {
    if (isEditMode) {
      setFormData(prev => ({
        ...prev,
        notes: normalizeNotes(prev.notes).filter(n => n.id !== noteId)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCustomer && isEditMode) {
      const updatedData = { ...formData, notes: normalizeNotes(formData.notes) };
      updateCustomer(selectedCustomer.id, updatedData);
      setSelectedCustomer({ ...selectedCustomer, ...updatedData } as Customer);
    } else {
      const newCustomer: Customer = {
        ...formData as Customer,
        id: 'CUST-' + Math.random().toString(36).substr(2, 9),
        notes: normalizeNotes(formData.notes),
        documents: formData.documents || []
      };
      addCustomer(newCustomer);
    }
    closeModal();
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'VIP':
        return <span className="bg-purple-100 text-purple-700 px-3 py-1 text-xs font-semibold rounded-full border border-purple-200 flex items-center gap-1 w-max"><Star className="w-3 h-3" /> VIP</span>;
      case 'ACTIVE':
        return <span className="bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold rounded-full border border-emerald-200 w-max inline-block">AKTİF</span>;
      case 'INACTIVE':
        return <span className="bg-slate-100 text-slate-600 px-3 py-1 text-xs font-semibold rounded-full border border-slate-200 w-max inline-block">PASİF</span>;
      case 'LEAD':
        return <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold rounded-full border border-blue-200 w-max inline-block">POTANSİYEL</span>;
      default:
        return null;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(amount);
  };

  const formatDate = (dateString: string) => {
    if (!dateString || dateString === '-') return '-';
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' }).format(d);
  };

  const formatDateTime = (isoString: string) => {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return new Intl.DateTimeFormat('tr-TR', { 
      day: 'numeric', month: 'short', year: 'numeric', 
      hour: '2-digit', minute: '2-digit' 
    }).format(d);
  };

  const customerOrders = selectedCustomer 
    ? orders.filter(o => o.customerId === selectedCustomer.id).sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : [];

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">Müşteriler & CRM</h2>
          <p className="text-slate-500 text-sm">Müşteri portföyünüzü, harcamalarını, ödemelerini ve sipariş geçmişlerini detaylı takip edin.</p>
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
            <Plus className="w-5 h-5" /> Yeni Müşteri
          </button>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
        
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Müşteri adı, işletme, telefon veya e-posta ara..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/50 border border-white/80 rounded-2xl pl-12 pr-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full md:w-48 bg-white/50 border border-white/80 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm cursor-pointer"
          >
            <option value="ALL">Tümü</option>
            <option value="VIP">VIP</option>
            <option value="ACTIVE">Aktif</option>
            <option value="INACTIVE">Pasif</option>
            <option value="LEAD">Potansiyel</option>
          </select>
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
                      checked={filteredCustomers.length > 0 && selectedIds.length === filteredCustomers.length}
                      onChange={toggleSelectAll}
                    />
                  </div>
                </th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Müşteri / İşletme</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">İletişim</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Durum</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Bakiye Durumu</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Son Sipariş & Kayıt</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => {
                const debt = customer.totalSpent - customer.totalPaid;
                const activeOrdersCount = orders.filter(o => o.customerId === customer.id && (o.status === 'PENDING' || o.status === 'PROCESSING')).length;
                return (
                  <tr key={customer.id} className="border-b border-slate-100 hover:bg-white/40 transition-colors cursor-pointer group" onClick={() => openViewModal(customer)}>
                    <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                          checked={selectedIds.includes(customer.id)}
                          onChange={() => toggleSelect(customer.id)}
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {customer.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors block leading-tight">{customer.name}</span>
                            {activeOrdersCount > 0 && (
                              <span className="bg-indigo-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full" title={`${activeOrdersCount} Aktif Sipariş`}>
                                {activeOrdersCount}
                              </span>
                            )}
                          </div>
                          {customer.companyName && <span className="text-xs text-slate-500">{customer.companyName}</span>}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-600" onClick={(e) => e.stopPropagation()}>
                      <div className="flex flex-col gap-1">
                        <button onClick={(e) => openWhatsApp(customer.phone, e)} className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors w-max text-left">
                          <WhatsappIcon className="w-3.5 h-3.5" /> 
                          {customer.phone}
                        </button>
                        <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-400" /> {customer.email || '-'}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                      {getStatusBadge(customer.status)}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-col gap-1 text-sm">
                        <span className="font-medium text-slate-900" title="Toplam Harcama">H: {formatCurrency(customer.totalSpent)}</span>
                        {debt > 0 ? (
                          <span className="text-red-500 font-medium text-xs" title="Kalan Borç">K: {formatCurrency(debt)}</span>
                        ) : (
                          <span className="text-emerald-500 font-medium text-xs" title="Borç Yok">K: {formatCurrency(0)}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-600">
                      <div className="flex flex-col gap-1">
                        <span className="flex items-center gap-1.5 text-indigo-600 font-medium"><ShoppingBag className="w-3.5 h-3.5" /> {formatDate(customer.lastOrderDate)}</span>
                        <span className="flex items-center gap-1.5 text-xs"><Calendar className="w-3.5 h-3.5 text-slate-400" /> {formatDate(customer.joinDate)}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                      <button onClick={() => openEditModal(customer)} className="p-2 bg-white hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 rounded-xl border border-slate-200 transition-colors" title="Düzenle">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(customer.id)} className="p-2 bg-white hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-xl border border-slate-200 transition-colors" title="Sil">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {filteredCustomers.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">Hiç müşteri bulunamadı.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
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
              className={`bg-white/95 backdrop-blur-2xl border border-white p-6 md:p-8 w-full max-w-5xl relative z-10 shadow-2xl rounded-3xl max-h-[90vh] overflow-y-auto`}
            >
              {isEditMode || !selectedCustomer ? (
                // EDIT / ADD FORM
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-6 border-b border-slate-200 pb-4">
                    {selectedCustomer ? 'Müşteriyi Düzenle' : 'Yeni Müşteri Ekle'}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Ad Soyad *</label>
                      <input 
                        type="text" required
                        value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">İşletme İsmi</label>
                      <input 
                        type="text"
                        value={formData.companyName || ''} onChange={e => setFormData({...formData, companyName: e.target.value})}
                        className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Telefon *</label>
                      <input 
                        type="tel" required
                        value={formData.phone || ''} onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">E-posta</label>
                      <input 
                        type="email"
                        value={formData.email || ''} onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Müşteri Durumu</label>
                      <select 
                        value={formData.status || 'ACTIVE'} 
                        onChange={e => setFormData({...formData, status: e.target.value as any})}
                        className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm cursor-pointer"
                      >
                        <option value="ACTIVE">Aktif</option>
                        <option value="VIP">VIP</option>
                        <option value="INACTIVE">Pasif</option>
                        <option value="LEAD">Potansiyel</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Kayıt Tarihi</label>
                      <input 
                        type="date"
                        value={formData.joinDate || ''} onChange={e => setFormData({...formData, joinDate: e.target.value})}
                        className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Toplam Harcama (₺)</label>
                      <input 
                        type="number" min="0"
                        value={formData.totalSpent || 0} onChange={e => setFormData({...formData, totalSpent: Number(e.target.value)})}
                        className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Yapılan Ödeme (₺)</label>
                      <input 
                        type="number" min="0"
                        value={formData.totalPaid || 0} onChange={e => setFormData({...formData, totalPaid: Number(e.target.value)})}
                        className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Adres</label>
                      <input 
                        type="text"
                        value={formData.address || ''} onChange={e => setFormData({...formData, address: e.target.value})}
                        className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      />
                    </div>
                    
                    {/* EDIT CRM NOTES */}
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4"/> CRM Notları</span>
                      </label>
                      
                      <div className="space-y-3 mb-4 max-h-48 overflow-y-auto pr-2">
                        {(() => {
                          const safeNotes = normalizeNotes(formData.notes);
                          return safeNotes.length > 0 ? (
                            safeNotes.map(note => (
                              <div key={note.id} className="relative bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 pr-10 group">
                                <p className="text-sm text-slate-700 whitespace-pre-wrap">{note.content}</p>
                                <span className="absolute bottom-2 right-3 text-[10px] font-medium text-slate-400">{formatDateTime(note.timestamp)}</span>
                                <button type="button" onClick={() => removeNote(note.id)} className="absolute top-2 right-2 p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"><Trash2 className="w-3.5 h-3.5"/></button>
                              </div>
                            ))
                          ) : (
                            <div className="text-sm text-slate-400 italic text-center p-4 border border-dashed border-slate-200 rounded-xl">Henüz not eklenmemiş.</div>
                          );
                        })()}
                      </div>

                      <div className="flex gap-2">
                        <input 
                          type="text"
                          placeholder="Yeni bir not ekleyin..."
                          value={newNoteInput}
                          onChange={e => setNewNoteInput(e.target.value)}
                          onKeyDown={e => { if(e.key === 'Enter') { e.preventDefault(); handleAddNoteToForm(); } }}
                          className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                        />
                        <button type="button" onClick={handleAddNoteToForm} className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-xl transition-colors flex items-center justify-center">
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* DOCUMENTS UPLOAD */}
                    <div className="md:col-span-2 border-t border-slate-200 pt-6 mt-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 block flex items-center gap-2">
                        <FileText className="w-4 h-4"/> Sözleşme ve Belgeler
                      </label>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                        {formData.documents?.map(doc => (
                          <div key={doc.id} className="relative group rounded-xl border border-slate-200 overflow-hidden bg-slate-50 h-32 flex items-center justify-center">
                            {doc.url.match(/\.(jpeg|jpg|gif|png|webp)$/i) || doc.url.startsWith('blob:') ? (
                              <img src={doc.url} alt={doc.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="text-center p-2">
                                <FileText className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                                <span className="text-xs text-slate-600 truncate block w-full px-2">{doc.name}</span>
                              </div>
                            )}
                            <button 
                              type="button" 
                              onClick={() => removeDocument(doc.id)}
                              className="absolute top-2 right-2 p-1.5 bg-white/80 hover:bg-red-50 text-slate-600 hover:text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-sm"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                        
                        <div className="relative rounded-xl border-2 border-dashed border-slate-200 bg-white/50 h-32 flex flex-col items-center justify-center hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors cursor-pointer group">
                          <input 
                            type="file" 
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                            accept="image/*,.pdf,.doc,.docx"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            disabled={isUploading}
                          />
                          {isUploading ? (
                            <Upload className="w-6 h-6 text-indigo-500 animate-bounce mb-2" />
                          ) : (
                            <>
                              <Upload className="w-6 h-6 text-slate-400 group-hover:text-indigo-500 transition-colors mb-2" />
                              <span className="text-xs font-medium text-slate-500 group-hover:text-indigo-600 text-center px-4">Görsel / Belge Ekle</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
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
              ) : (
                // VIEW MODAL
                <div>
                  <div className="flex justify-between items-start border-b border-slate-200 pb-6 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-3xl text-white shadow-lg shadow-indigo-500/30">
                        {selectedCustomer.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                          {selectedCustomer.name}
                        </h3>
                        {selectedCustomer.companyName && (
                          <p className="text-slate-500 text-sm font-medium">{selectedCustomer.companyName}</p>
                        )}
                        <div className="flex items-center gap-3 mt-2">
                          {getStatusBadge(selectedCustomer.status)}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => openEditModal(selectedCustomer)} className="p-2 bg-white hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 rounded-xl border border-slate-200 transition-colors" title="Düzenle">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button onClick={closeModal} className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <XCircle className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Contact Info */}
                    <div className="bg-white/50 border border-slate-200 rounded-2xl p-5 shadow-sm lg:col-span-1">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">İletişim & Tarih</h4>
                      <div className="space-y-4 text-sm">
                        <button onClick={(e) => openWhatsApp(selectedCustomer.phone, e)} className="flex items-center gap-3 font-medium text-slate-900 hover:text-[#25D366] transition-colors w-full text-left group">
                          <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-[#25D366]/10 transition-colors"><WhatsappIcon className="w-4 h-4 text-slate-500 group-hover:text-[#25D366]" /></div> 
                          <span>{selectedCustomer.phone}</span>
                        </button>
                        <div className="flex items-center gap-3"><div className="p-2 bg-slate-100 rounded-lg"><Mail className="w-4 h-4 text-slate-500" /></div> <span className="text-slate-700">{selectedCustomer.email || 'Belirtilmedi'}</span></div>
                        <div className="flex items-center gap-3"><div className="p-2 bg-slate-100 rounded-lg"><MapPin className="w-4 h-4 text-slate-500" /></div> <span className="text-slate-700">{selectedCustomer.address || 'Belirtilmedi'}</span></div>
                        <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                          <div className="p-2 bg-slate-100 rounded-lg"><Calendar className="w-4 h-4 text-slate-500" /></div>
                          <div>
                            <p className="text-xs text-slate-400">Kayıt Tarihi</p>
                            <span className="font-medium text-slate-700">{formatDate(selectedCustomer.joinDate)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Financial Summary */}
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-5 shadow-lg shadow-indigo-500/20 lg:col-span-2 flex flex-col justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-white/70 mb-4 flex items-center gap-2">
                        <CreditCard className="w-4 h-4" /> Finansal Özet
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                          <p className="text-white/70 text-xs font-medium mb-1">Yapılan Harcamalar</p>
                          <p className="text-xl font-bold">{formatCurrency(selectedCustomer.totalSpent)}</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                          <p className="text-white/70 text-xs font-medium mb-1">Yapılan Ödemeler</p>
                          <p className="text-xl font-bold text-emerald-300">{formatCurrency(selectedCustomer.totalPaid)}</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                          <p className="text-white/70 text-xs font-medium mb-1">Kalan Bakiye</p>
                          <p className={`text-xl font-bold ${selectedCustomer.totalSpent - selectedCustomer.totalPaid > 0 ? 'text-rose-300' : 'text-white'}`}>
                            {formatCurrency(selectedCustomer.totalSpent - selectedCustomer.totalPaid)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Order History */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" /> Sipariş Geçmişi
                      </h4>
                      <div className="border border-slate-200 rounded-2xl bg-white/50 overflow-hidden shadow-sm h-64 overflow-y-auto">
                        {customerOrders && customerOrders.length > 0 ? (
                          <table className="w-full text-left border-collapse text-sm">
                            <thead className="sticky top-0 bg-slate-50 shadow-sm z-10">
                              <tr className="border-b border-slate-200">
                                <th className="py-3 px-4 font-semibold text-slate-600">Sipariş</th>
                                <th className="py-3 px-4 font-semibold text-slate-600">Ürünler</th>
                                <th className="py-3 px-4 font-semibold text-slate-600">Tutar</th>
                                <th className="py-3 px-4 font-semibold text-slate-600">Durum</th>
                              </tr>
                            </thead>
                            <tbody>
                              {customerOrders.map(order => (
                                <tr key={order.id} className="border-b border-slate-100 last:border-0 hover:bg-white/60">
                                  <td className="py-3 px-4">
                                    <span className="font-medium text-slate-900 block">{order.id}</span>
                                    <span className="text-xs text-slate-500">{formatDate(order.date)}</span>
                                  </td>
                                  <td className="py-3 px-4 text-slate-600 truncate max-w-[120px]" title={order.items.map(i => i.name).join(', ')}>
                                    {order.items.length === 1 ? order.items[0].name : `${order.items[0].name} ve ${order.items.length - 1} ürün`}
                                  </td>
                                  <td className="py-3 px-4 font-medium text-slate-900">{formatCurrency(order.totalAmount)}</td>
                                  <td className="py-3 px-4">
                                    {order.status === 'COMPLETED' ? <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-medium">Tamamlandı</span> :
                                     ['PENDING', 'PROCESSING', 'SHIPPED'].includes(order.status) ? <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded-md text-xs font-medium">Aktif</span> :
                                     <span className="text-red-600 bg-red-50 px-2 py-1 rounded-md text-xs font-medium">İptal</span>}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <div className="p-8 text-center flex flex-col items-center justify-center h-full text-slate-500 text-sm">
                            <ShoppingBag className="w-8 h-8 text-slate-300 mb-2" />
                            Henüz bir sipariş geçmişi bulunmuyor.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Documents */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4" /> Sözleşme ve Belgeler
                      </h4>
                      <div className="border border-slate-200 rounded-2xl bg-white/50 p-4 shadow-sm h-64 overflow-y-auto">
                        {selectedCustomer.documents && selectedCustomer.documents.length > 0 ? (
                          <div className="grid grid-cols-2 gap-4">
                            {selectedCustomer.documents.map(doc => (
                              <a href={doc.url} target="_blank" rel="noreferrer" key={doc.id} className="relative group rounded-xl border border-slate-200 overflow-hidden bg-white h-24 flex items-center justify-center hover:border-indigo-300 hover:shadow-md transition-all">
                                {doc.url.match(/\.(jpeg|jpg|gif|png|webp)$/i) || doc.url.startsWith('blob:') ? (
                                  <img src={doc.url} alt={doc.name} className="w-full h-full object-cover" />
                                ) : (
                                  <div className="text-center p-2">
                                    <FileText className="w-6 h-6 text-indigo-400 mx-auto mb-1" />
                                    <span className="text-[10px] font-medium text-slate-600 truncate block w-full px-1">{doc.name}</span>
                                  </div>
                                )}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
                              </a>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center flex flex-col items-center justify-center h-full text-slate-500 text-sm">
                            <FileText className="w-8 h-8 text-slate-300 mb-2" />
                            Yüklenmiş sözleşme veya belge yok.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* VIEW CRM NOTES */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" /> CRM Notları
                    </h4>
                    
                    <div className="bg-slate-50/50 border border-slate-200 rounded-2xl p-5 mb-4 max-h-64 overflow-y-auto space-y-3">
                      {(() => {
                        const safeNotes = normalizeNotes(selectedCustomer.notes);
                        return safeNotes.length > 0 ? (
                          safeNotes.map((note) => (
                            <div key={note.id} className="relative bg-white border border-slate-200 rounded-xl p-4 shadow-sm group">
                              <p className="text-sm text-slate-700 whitespace-pre-wrap pr-4">{note.content}</p>
                              <span className="absolute bottom-2 right-3 text-[10px] font-medium text-slate-400">{formatDateTime(note.timestamp)}</span>
                            </div>
                          ))
                        ) : (
                          <div className="text-center p-4 text-sm text-slate-400 italic">Müşteri için henüz not eklenmemiş.</div>
                        );
                      })()}
                    </div>

                    <div className="flex gap-2">
                      <input 
                        type="text"
                        placeholder="Müşteri profiline hızlıca yeni bir not ekleyin..."
                        value={newNoteInput}
                        onChange={e => setNewNoteInput(e.target.value)}
                        onKeyDown={e => { if(e.key === 'Enter') { e.preventDefault(); handleAddNoteToForm(); } }}
                        className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      />
                      <button onClick={handleAddNoteToForm} className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-2 rounded-xl transition-colors font-medium text-sm flex items-center gap-2 shadow-sm">
                        <Send className="w-4 h-4" /> Ekle
                      </button>
                    </div>
                  </div>

                  <div className="flex pt-4 border-t border-slate-100">
                    <button 
                      onClick={closeModal} 
                      className="w-full py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      Kapat
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
