"use client";
import { useState } from 'react';
import { Search, CheckCircle, XCircle, Eye, Building, Phone, Mail, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin, Application } from '../context/AdminContext';

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function ApplicationsAdminPage() {
  const { applications, updateApplicationStatus } = useAdmin();
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

  const openWhatsApp = (phone: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    let clean = phone.replace(/\D/g, '');
    if (clean.startsWith('0')) clean = clean.substring(1);
    if (!clean.startsWith('90')) clean = '90' + clean;
    window.open(`https://wa.me/${clean}`, '_blank');
  };

  const handleStatusChange = (id: string, newStatus: 'APPROVED' | 'REJECTED') => {
    if (!confirm(`Bu başvuruyu ${newStatus === 'APPROVED' ? 'onaylamak' : 'reddetmek'} istediğinize emin misiniz?`)) return;
    
    updateApplicationStatus(id, newStatus);
    
    if (selectedApplication?.id === id) {
      setSelectedApplication({ ...selectedApplication, status: newStatus });
    }
  };

  const openViewModal = (app: Application) => {
    setSelectedApplication(app);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const filteredApplications = applications.filter(a => 
    a.companyName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    a.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return <span className="bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold rounded-full border border-emerald-200">ONAYLANDI</span>;
      case 'REJECTED':
        return <span className="bg-red-100 text-red-700 px-3 py-1 text-xs font-semibold rounded-full border border-red-200">REDDEDİLDİ</span>;
      default:
        return <span className="bg-amber-100 text-amber-700 px-3 py-1 text-xs font-semibold rounded-full border border-amber-200">BEKLİYOR</span>;
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-between items-start mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">Bayi Başvuruları</h2>
          <p className="text-slate-500 text-sm">Bayilik talebinde bulunan firmaları görüntüleyin, değerlendirin ve onaylayın.</p>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
        <div className="flex items-center gap-4 mb-6 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4" />
          <input 
            type="text" 
            placeholder="Firma, yetkili veya şehir ara..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/50 border border-white/80 rounded-2xl pl-12 pr-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Firma Adı</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Yetkili</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">İletişim</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Şehir</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Durum</th>
                <th className="py-4 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((app) => (
                <tr key={app.id} className="border-b border-slate-100 hover:bg-white/40 transition-colors group">
                  <td className="py-4 px-4 font-semibold text-slate-900">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-indigo-50 rounded-lg text-indigo-500"><Building className="w-4 h-4" /></div>
                      {app.companyName}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-600 font-medium">{app.contactPerson}</td>
                  <td className="py-4 px-4">
                    <div className="flex flex-col text-sm text-slate-600 space-y-1">
                      <button onClick={(e) => openWhatsApp(app.phone, e)} className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors w-max text-left">
                        <WhatsappIcon className="w-3.5 h-3.5" /> 
                        {app.phone}
                      </button>
                      <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-400" /> {app.email}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 rounded-full border border-slate-200">{app.city}</span>
                  </td>
                  <td className="py-4 px-4">
                    {getStatusBadge(app.status)}
                  </td>
                  <td className="py-4 px-4 flex items-center justify-end gap-2">
                    <button 
                      onClick={() => openViewModal(app)} 
                      className="p-2 bg-white hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 rounded-xl border border-slate-200 transition-colors"
                      title="Görüntüle"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    {app.status === 'PENDING' && (
                      <>
                        <button 
                          onClick={() => handleStatusChange(app.id, 'APPROVED')} 
                          className="p-2 bg-white hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 rounded-xl border border-slate-200 transition-colors"
                          title="Onayla"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleStatusChange(app.id, 'REJECTED')} 
                          className="p-2 bg-white hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-xl border border-slate-200 transition-colors"
                          title="Reddet"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              {filteredApplications.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-500">Hiç başvuru bulunamadı.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedApplication && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={closeModal}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white/90 backdrop-blur-2xl border border-white p-6 md:p-8 w-full max-w-2xl relative z-10 shadow-2xl rounded-3xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start border-b border-slate-200 pb-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-2xl"><Building className="w-6 h-6" /></div>
                    {selectedApplication.companyName}
                  </h3>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-sm font-medium text-slate-500">Tarih: {selectedApplication.date}</span>
                    {getStatusBadge(selectedApplication.status)}
                  </div>
                </div>
                <button onClick={closeModal} className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Yetkili Kişi</label>
                    <div className="flex items-center gap-3 font-medium text-slate-900 border border-slate-200 rounded-xl p-4 bg-white/50">
                      <User className="w-5 h-5 text-slate-400" />
                      {selectedApplication.contactPerson}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Şehir</label>
                    <div className="font-medium text-slate-900 border border-slate-200 rounded-xl p-4 bg-white/50">
                      {selectedApplication.city}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Telefon Numarası</label>
                    <button onClick={(e) => openWhatsApp(selectedApplication.phone, e)} className="flex items-center gap-3 font-medium text-slate-900 border border-slate-200 rounded-xl p-4 bg-white/50 w-full text-left hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all">
                      <WhatsappIcon className="w-5 h-5 text-[#25D366]" />
                      {selectedApplication.phone}
                    </button>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">E-posta Adresi</label>
                    <div className="flex items-center gap-3 font-medium text-slate-900 border border-slate-200 rounded-xl p-4 bg-white/50 break-all">
                      <Mail className="w-5 h-5 text-slate-400" />
                      {selectedApplication.email}
                    </div>
                  </div>
                </div>
              </div>

              {selectedApplication.notes && (
                <div className="mb-8">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Ek Notlar</label>
                  <div className="text-slate-700 border border-indigo-100 rounded-xl p-5 bg-indigo-50/50">
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">{selectedApplication.notes}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-4 border-t border-slate-100">
                <button 
                  onClick={closeModal} 
                  className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Kapat
                </button>
                
                {selectedApplication.status === 'PENDING' && (
                  <>
                    <button 
                      onClick={() => handleStatusChange(selectedApplication.id, 'REJECTED')}
                      className="flex-1 py-3 bg-red-500 text-white font-medium rounded-xl shadow-lg shadow-red-500/30 hover:bg-red-600 hover:shadow-red-500/40 transition-all"
                    >
                      Reddet
                    </button>
                    <button 
                      onClick={() => handleStatusChange(selectedApplication.id, 'APPROVED')}
                      className="flex-1 py-3 bg-emerald-500 text-white font-medium rounded-xl shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 hover:shadow-emerald-500/40 transition-all"
                    >
                      Onayla
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
