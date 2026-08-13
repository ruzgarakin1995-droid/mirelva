import { createClient } from '@/actions/client'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NewClientPage() {
  async function onSubmit(formData: FormData) {
    'use server'
    await createClient(formData)
    redirect('/admin/clients')
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center space-x-4 border-b border-white/10 pb-6">
        <Link href="/admin/clients" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Yeni İşletme Ekle</h2>
          <p className="mt-1 text-sm text-white/40">Müşteriniz için yeni bir web arayüzü ve yönetim paneli oluşturun.</p>
        </div>
      </div>
      
      <form action={onSubmit} className="bg-[#111111] rounded-2xl border border-white/5 p-8 space-y-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-white flex items-center gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-white/60">1</span>
            Temel Bilgiler
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-9">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">İşletme Adı</label>
              <input required type="text" name="name" className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl p-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white placeholder-white/20 transition-all" placeholder="Örn: Elegance Güzellik" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">URL (Slug)</label>
              <input required type="text" name="slug" className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl p-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white placeholder-white/20 transition-all" placeholder="Örn: elegance-guzellik" />
            </div>
          </div>

          <div className="ml-9">
            <label className="block text-sm font-medium text-white/80 mb-2">Sektör / Tema</label>
            <select name="sector" className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl p-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-white transition-all appearance-none cursor-pointer">
              <option value="beauty">Güzellik Merkezi</option>
              <option value="restaurant">Restoran / Kafe (QR Menü)</option>
              <option value="ecommerce">E-Ticaret / Butik</option>
              <option value="realestate">Emlak / Gayrimenkul</option>
              <option value="hotel">Otel / Konaklama</option>
              <option value="fitness">Fitness / Spor Salonu</option>
            </select>
          </div>
        </div>

        <div className="space-y-6 pt-6 border-t border-white/5">
          <h3 className="text-lg font-medium text-white flex items-center gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-white/60">2</span>
            Tasarım & Renkler
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-9">
            <div className="p-4 rounded-xl border border-white/5 bg-[#1A1A1A]">
              <label className="block text-sm font-medium text-white/80 mb-3">Ana Renk (Primary)</label>
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/20 cursor-pointer">
                  <input type="color" name="primaryColor" defaultValue="#ffffff" className="absolute -top-2 -left-2 w-16 h-16 cursor-pointer" />
                </div>
                <span className="text-xs text-white/40 leading-relaxed flex-1">Apple stili için genelde beyaz ve açık tonlar önerilir.</span>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-[#1A1A1A]">
              <label className="block text-sm font-medium text-white/80 mb-3">Vurgu Rengi (Accent)</label>
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/20 cursor-pointer">
                  <input type="color" name="accentColor" defaultValue="#6366f1" className="absolute -top-2 -left-2 w-16 h-16 cursor-pointer" />
                </div>
                <span className="text-xs text-white/40 leading-relaxed flex-1">Aksiyon butonları ve dikkat çekici alanlar için kullanılır.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-6 border-t border-white/5">
          <h3 className="text-lg font-medium text-white flex items-center gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-white/60">3</span>
            Aktif Edilecek Modüller
          </h3>
          <div className="space-y-4 ml-9">
            <label className="flex items-center p-4 rounded-xl border border-white/5 bg-[#1A1A1A] cursor-pointer hover:border-white/20 transition-colors">
              <input type="checkbox" name="hasBooking" value="true" className="w-5 h-5 rounded border-white/20 bg-[#222] text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0" />
              <div className="ml-4">
                <span className="block text-white font-medium">Randevu Sistemi</span>
                <span className="block text-xs text-white/40 mt-0.5">Güzellik, Kuaför, Klinik vb. hizmet odaklı işletmeler için</span>
              </div>
            </label>
            <label className="flex items-center p-4 rounded-xl border border-white/5 bg-[#1A1A1A] cursor-pointer hover:border-white/20 transition-colors">
              <input type="checkbox" name="hasQrMenu" value="true" className="w-5 h-5 rounded border-white/20 bg-[#222] text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0" />
              <div className="ml-4">
                <span className="block text-white font-medium">QR Menü / Sipariş Sistemi</span>
                <span className="block text-xs text-white/40 mt-0.5">Restoran, Kafe, Bar gibi masadan sipariş alan işletmeler için</span>
              </div>
            </label>
            <label className="flex items-center p-4 rounded-xl border border-white/5 bg-[#1A1A1A] cursor-pointer hover:border-white/20 transition-colors">
              <input type="checkbox" name="hasEcom" value="true" className="w-5 h-5 rounded border-white/20 bg-[#222] text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0" />
              <div className="ml-4">
                <span className="block text-white font-medium">E-Ticaret / Sepet Sistemi</span>
                <span className="block text-xs text-white/40 mt-0.5">Butik, Market, Online ürün satan işletmeler için</span>
              </div>
            </label>
          </div>
        </div>

        <div className="pt-8 ml-9 flex justify-end">
          <button type="submit" className="bg-white text-black font-medium px-8 py-3.5 rounded-xl hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95">
            Sistemi Kur ve Yayına Al
          </button>
        </div>
      </form>
    </div>
  )
}
