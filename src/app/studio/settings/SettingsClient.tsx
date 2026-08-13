"use client";

import React, { useState } from "react";
import { Save, Key, Plus, Trash2, Mail, Shield, Zap } from "lucide-react";
import { updateSetting, addApiKey, deleteApiKey } from "@/actions/settings";
import { useRouter } from "next/navigation";

export default function SettingsClient({ 
  initialSettings, 
  initialApiKeys 
}: { 
  initialSettings: any;
  initialApiKeys: any[];
}) {
  const router = useRouter();
  const [settings, setSettings] = useState(initialSettings);
  const [isSaving, setIsSaving] = useState(false);

  const [newProvider, setNewProvider] = useState("OPENAI");
  const [newKey, setNewKey] = useState("");
  const [isAddingKey, setIsAddingKey] = useState(false);

  const handleSaveSettings = async () => {
    setIsSaving(true);
    // Sadece değişenleri kaydetmek idealdir ama basitlik için hepsini dönebiliriz.
    for (const key of Object.keys(settings)) {
      await updateSetting(key, settings[key]);
    }
    setIsSaving(false);
    alert("Ayarlar kaydedildi.");
  };

  const handleAddKey = async () => {
    if (!newKey) return;
    setIsAddingKey(true);
    await addApiKey(newProvider, newKey);
    setNewKey("");
    setIsAddingKey(false);
    router.refresh();
  };

  const handleDeleteKey = async (id: string) => {
    if(confirm("Bu anahtarı silmek istediğinize emin misiniz?")) {
      await deleteApiKey(id);
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      
      {/* Sidebar Nav (mock) */}
      <div className="w-full lg:w-64 space-y-1">
        {[
          { id: 'general', name: 'Genel Ayarlar', icon: <Zap className="w-4 h-4" /> },
          { id: 'api', name: 'API & Entegrasyonlar', icon: <Key className="w-4 h-4" /> },
          { id: 'smtp', name: 'SMTP & Email', icon: <Mail className="w-4 h-4" /> },
          { id: 'security', name: 'Güvenlik', icon: <Shield className="w-4 h-4" /> },
        ].map(item => (
          <button 
            key={item.id}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              item.id === 'api' ? 'bg-indigo-500/10 text-indigo-400' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </div>

      {/* Main Settings Area */}
      <div className="flex-1 space-y-8 max-w-3xl">
        
        {/* API Keys Section */}
        <section className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-xl font-medium text-white">API & Entegrasyonlar</h2>
            <p className="text-sm text-gray-500 mt-1">Sistemin kullandığı harici servislerin anahtarları.</p>
          </div>
          
          <div className="p-6 space-y-6">
            
            {/* List existing keys */}
            <div className="space-y-3">
              {initialApiKeys.length === 0 ? (
                <div className="text-sm text-gray-500 italic">Henüz API anahtarı eklenmemiş.</div>
              ) : (
                initialApiKeys.map(k => (
                  <div key={k.id} className="flex items-center justify-between p-4 rounded-xl bg-[#1A1A1A] border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                        <Key className="w-4 h-4 text-gray-400" />
                      </div>
                      <div>
                        <div className="font-medium text-white">{k.provider}</div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {k.key.substring(0, 8)}************************
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleDeleteKey(k.id)}
                      className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Add new key */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3">
              <select 
                className="bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-indigo-500"
                value={newProvider}
                onChange={e => setNewProvider(e.target.value)}
              >
                <option value="OPENAI">OpenAI</option>
                <option value="STRIPE">Stripe</option>
                <option value="RESEND">Resend</option>
                <option value="SUPABASE">Supabase</option>
              </select>
              <input 
                type="text" 
                placeholder="sk-..." 
                className="flex-1 bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none text-white focus:border-indigo-500"
                value={newKey}
                onChange={e => setNewKey(e.target.value)}
              />
              <button 
                onClick={handleAddKey}
                disabled={isAddingKey || !newKey}
                className="flex items-center justify-center gap-2 bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-indigo-600 transition-colors disabled:opacity-50"
              >
                {isAddingKey ? 'Ekleniyor...' : <><Plus className="w-4 h-4" /> Ekle</>}
              </button>
            </div>

          </div>
        </section>
        
        {/* General Settings Section */}
        <section className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-xl font-medium text-white">Studio Yapılandırması</h2>
            <p className="text-sm text-gray-500 mt-1">Genel çalışma alanı ayarları.</p>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Studio Adı</label>
              <input 
                type="text" 
                value={settings['studio_name'] || ''} 
                onChange={e => setSettings({...settings, 'studio_name': e.target.value})}
                placeholder="Locizsa Studio"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none text-white focus:border-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">İletişim Email</label>
              <input 
                type="email" 
                value={settings['contact_email'] || ''} 
                onChange={e => setSettings({...settings, 'contact_email': e.target.value})}
                placeholder="hello@yazlik.studio"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none text-white focus:border-indigo-500"
              />
            </div>
            
            <div className="pt-4 flex justify-end">
              <button 
                onClick={handleSaveSettings}
                disabled={isSaving}
                className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {isSaving ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
