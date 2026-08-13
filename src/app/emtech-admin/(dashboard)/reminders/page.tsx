"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Plus, Calendar, Clock, Trash2, CheckCircle2, RotateCw, X, AlertTriangle, History } from 'lucide-react';
import { useAdmin, Reminder } from '../context/AdminContext';

export default function RemindersPage() {
  const { reminders, addReminder, cancelReminder, completeReminder } = useAdmin();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'ACTIVE' | 'HISTORY'>('ACTIVE');

  // New Reminder Form State
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [repeat, setRepeat] = useState<'NONE' | 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY'>('NONE');

  // Action Modal State (For Early Complete or Cancel)
  const [actionModal, setActionModal] = useState<{ isOpen: boolean; type: 'COMPLETE' | 'CANCEL'; reminderId: string | null; note: string }>({
    isOpen: false,
    type: 'COMPLETE',
    reminderId: null,
    note: ''
  });

  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !time) return;

    const targetDate = new Date(`${date}T${time}`).toISOString();

    addReminder({
      title,
      note,
      targetDate,
      repeatPattern: repeat
    });

    setIsAddModalOpen(false);
    setTitle('');
    setNote('');
    setDate('');
    setTime('');
    setRepeat('NONE');
  };

  const handleCompleteRequest = (reminder: Reminder) => {
    const isEarly = new Date(reminder.targetDate) > new Date();
    if (isEarly) {
      setActionModal({ isOpen: true, type: 'COMPLETE', reminderId: reminder.id, note: '' });
    } else {
      completeReminder(reminder.id);
    }
  };

  const handleCancelRequest = (reminderId: string) => {
    setActionModal({ isOpen: true, type: 'CANCEL', reminderId, note: '' });
  };

  const submitActionModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!actionModal.reminderId) return;

    if (actionModal.type === 'COMPLETE') {
      completeReminder(actionModal.reminderId, actionModal.note);
    } else if (actionModal.type === 'CANCEL') {
      cancelReminder(actionModal.reminderId, actionModal.note);
    }

    setActionModal({ isOpen: false, type: 'COMPLETE', reminderId: null, note: '' });
  };

  const getStatusBadge = (reminder: Reminder) => {
    const now = new Date();
    const isDue = new Date(reminder.targetDate) <= now;

    if (reminder.status === 'COMPLETED') {
      return <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Tamamlandı</span>;
    }
    if (reminder.status === 'CANCELLED') {
      return <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium flex items-center gap-1"><X className="w-3 h-3"/> İptal Edildi</span>;
    }
    if (reminder.status === 'SNOOZED') {
      return <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium flex items-center gap-1"><Clock className="w-3 h-3"/> Ertelendi</span>;
    }
    if (isDue) {
      return <span className="px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-medium flex items-center gap-1"><Bell className="w-3 h-3 animate-bounce"/> Süresi Geldi</span>;
    }
    return <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium flex items-center gap-1"><Calendar className="w-3 h-3"/> Bekliyor</span>;
  };

  const activeReminders = reminders
    .filter(r => r.status === 'PENDING' || r.status === 'SNOOZED')
    .sort((a, b) => new Date(a.targetDate).getTime() - new Date(b.targetDate).getTime());

  const historyReminders = reminders
    .filter(r => r.status === 'COMPLETED' || r.status === 'CANCELLED')
    .sort((a, b) => new Date(b.completedAt || b.targetDate).getTime() - new Date(a.completedAt || a.targetDate).getTime());

  const currentList = activeTab === 'ACTIVE' ? activeReminders : historyReminders;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Hatırlatıcılar</h1>
          <p className="text-slate-500 text-sm mt-1">Önemli işlerinizi, aramalarınızı ve randevularınızı takip edin.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-200 flex items-center gap-2 whitespace-nowrap"
        >
          <Plus className="w-5 h-5" />
          Yeni Hatırlatıcı Ekle
        </button>
      </div>

      <div className="flex items-center gap-2 border-b border-slate-200">
        <button 
          onClick={() => setActiveTab('ACTIVE')}
          className={`pb-3 px-4 text-sm font-medium transition-colors border-b-2 ${activeTab === 'ACTIVE' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Aktif Hatırlatıcılar ({activeReminders.length})
        </button>
        <button 
          onClick={() => setActiveTab('HISTORY')}
          className={`pb-3 px-4 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 ${activeTab === 'HISTORY' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <History className="w-4 h-4" />
          Geçmiş Hatırlatıcılar ({historyReminders.length})
        </button>
      </div>

      {/* Reminders List */}
      <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        {currentList.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
              {activeTab === 'ACTIVE' ? <Bell className="w-8 h-8" /> : <History className="w-8 h-8" />}
            </div>
            <h3 className="text-lg font-medium text-slate-700 mb-1">
              {activeTab === 'ACTIVE' ? 'Bekleyen Hatırlatıcı Yok' : 'Geçmiş Hatırlatıcı Yok'}
            </h3>
            <p className="text-slate-500 text-sm">
              {activeTab === 'ACTIVE' ? 'İlk hatırlatıcınızı ekleyerek işlerinizi planlamaya başlayın.' : 'Tamamlanmış veya iptal edilmiş bir hatırlatıcı bulunmuyor.'}
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            <AnimatePresence>
              {currentList.map((reminder) => (
                <motion.div 
                  key={reminder.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:shadow-md hover:border-indigo-50"
                >
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className={`font-semibold text-lg ${reminder.status === 'COMPLETED' || reminder.status === 'CANCELLED' ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
                        {reminder.title}
                      </h3>
                      {getStatusBadge(reminder)}
                    </div>
                    {reminder.note && <p className="text-slate-500 text-sm mb-3">{reminder.note}</p>}
                    
                    {reminder.actionNote && (
                      <div className={`text-sm p-3 rounded-xl mb-3 ${reminder.status === 'CANCELLED' ? 'bg-red-50 text-red-700' : 'bg-slate-50 text-slate-700'}`}>
                        <strong>Not:</strong> {reminder.actionNote}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                      <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        Hedef: {new Date(reminder.targetDate).toLocaleDateString('tr-TR')} {new Date(reminder.targetDate).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      
                      {reminder.completedAt && (
                        <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg">
                          <Clock className="w-4 h-4 text-slate-400" />
                          Kapanış: {new Date(reminder.completedAt).toLocaleDateString('tr-TR')} {new Date(reminder.completedAt).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      )}

                      {reminder.repeatPattern !== 'NONE' && (
                        <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg">
                          <RotateCw className="w-4 h-4" />
                          {reminder.repeatPattern === 'HOURLY' && 'Saatte Bir'}
                          {reminder.repeatPattern === 'DAILY' && 'Günde Bir'}
                          {reminder.repeatPattern === 'WEEKLY' && 'Haftada Bir'}
                          {reminder.repeatPattern === 'MONTHLY' && 'Ayda Bir'}
                        </div>
                      )}
                    </div>
                  </div>

                  {activeTab === 'ACTIVE' && (
                    <div className="flex items-center gap-2 w-full md:w-auto shrink-0 mt-4 md:mt-0">
                      <button 
                        onClick={() => handleCompleteRequest(reminder)}
                        className="flex-1 md:flex-none bg-green-50 text-green-700 hover:bg-green-100 px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Tamamla
                      </button>
                      <button 
                        onClick={() => handleCancelRequest(reminder.id)}
                        className="flex-1 md:flex-none p-2 text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-xl transition-colors flex items-center justify-center gap-2"
                        title="İptal Et"
                      >
                        <Trash2 className="w-5 h-5" />
                        <span className="md:hidden">İptal Et</span>
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Add Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-white"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-indigo-500" />
                  Yeni Hatırlatıcı
                </h2>
                <button 
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddReminder} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Hatırlatıcı Başlığı <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Örn: Müşteri araması"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Notlar / Detaylar</label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="İsteğe bağlı not..."
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Tarih <span className="text-red-500">*</span></label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Saat <span className="text-red-500">*</span></label>
                    <input
                      type="time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Tekrar</label>
                  <select
                    value={repeat}
                    onChange={(e) => setRepeat(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm bg-white"
                  >
                    <option value="NONE">Tekrar Yok</option>
                    <option value="HOURLY">Saatte Bir</option>
                    <option value="DAILY">Günde Bir (Aynı saatte)</option>
                    <option value="WEEKLY">Haftada Bir</option>
                    <option value="MONTHLY">Ayda Bir</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-slate-100 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="flex-1 px-4 py-2.5 text-slate-600 bg-slate-50 hover:bg-slate-100 font-medium rounded-xl transition-colors text-sm"
                  >
                    Vazgeç
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2.5 text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-xl transition-colors shadow-lg shadow-indigo-200 text-sm flex items-center justify-center gap-2"
                  >
                    <Bell className="w-4 h-4" />
                    Alarm Kur
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Action (Early Complete or Cancel) Modal */}
      <AnimatePresence>
        {actionModal.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-white"
            >
              <div className={`p-6 border-b border-slate-100 flex justify-between items-center ${actionModal.type === 'CANCEL' ? 'bg-red-50' : 'bg-amber-50'}`}>
                <h2 className={`text-lg font-bold flex items-center gap-2 ${actionModal.type === 'CANCEL' ? 'text-red-700' : 'text-amber-700'}`}>
                  <AlertTriangle className="w-5 h-5" />
                  {actionModal.type === 'CANCEL' ? 'Hatırlatıcıyı İptal Et' : 'Erken Tamamlama'}
                </h2>
                <button 
                  onClick={() => setActionModal({ ...actionModal, isOpen: false })}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white/50 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={submitActionModal} className="p-6 space-y-4">
                <p className="text-sm text-slate-600">
                  {actionModal.type === 'CANCEL' 
                    ? 'Bu hatırlatıcıyı iptal ediyorsunuz. Lütfen iptal nedeninizi kısaca belirtin.' 
                    : 'Bu hatırlatıcının süresi henüz dolmadı. Erkenden kapattığınız için lütfen bir açıklama yazın.'}
                </p>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Açıklama / Neden <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={actionModal.note}
                    onChange={(e) => setActionModal({ ...actionModal, note: e.target.value })}
                    placeholder="Lütfen nedenini yazın..."
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setActionModal({ ...actionModal, isOpen: false })}
                    className="flex-1 px-4 py-2.5 text-slate-600 bg-slate-50 hover:bg-slate-100 font-medium rounded-xl transition-colors text-sm"
                  >
                    Vazgeç
                  </button>
                  <button
                    type="submit"
                    disabled={!actionModal.note.trim()}
                    className={`flex-1 px-4 py-2.5 text-white font-medium rounded-xl transition-colors shadow-lg text-sm flex items-center justify-center gap-2 ${
                      !actionModal.note.trim() 
                        ? 'bg-slate-300 shadow-none cursor-not-allowed' 
                        : actionModal.type === 'CANCEL' 
                          ? 'bg-red-600 hover:bg-red-700 shadow-red-200' 
                          : 'bg-amber-500 hover:bg-amber-600 shadow-amber-200'
                    }`}
                  >
                    {actionModal.type === 'CANCEL' ? 'İptal Et' : 'Tamamla'}
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
