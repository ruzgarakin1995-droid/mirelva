"use client";

import React from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Fingerprint, Eye, Database } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function KVKKPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'KVKK Aydınlatma Metni' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-8">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
               <Fingerprint size={32} />
            </div>
            <div>
               <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">KVKK Aydınlatma Metni.</h1>
               <p className="text-slate-500 font-medium">6698 sayılı Kişisel Verilerin Korunması Kanunu Kapsamında Bilgilendirme.</p>
            </div>
          </div>
          
          <div className="space-y-10 text-slate-600 leading-relaxed text-base">
             
             <div>
                <p>
                   <strong>TEKNOEMO Elektronik Tic. A.Ş. ("Şirket")</strong> olarak, müşterilerimize ait kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu'na ("KVKK") uygun olarak işlenmesine ve korunmasına büyük önem veriyoruz. Bu Aydınlatma Metni, veri sorumlusu sıfatıyla Şirketimiz tarafından kişisel verilerinizin nasıl toplandığı, işlendiği, aktarıldığı ve bu konudaki haklarınız hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                   <div className="flex items-center gap-3 mb-4">
                      <Database className="text-emerald-600" size={24} />
                      <h4 className="font-bold text-slate-900 text-lg">Kişisel Verilerin Toplanması</h4>
                   </div>
                   <p className="text-sm">
                      Kişisel verileriniz, internet sitemiz, mobil uygulamalarımız, çağrı merkezimiz, mağazalarımız ve sosyal medya hesaplarımız üzerinden sözlü, yazılı veya elektronik ortamda toplanmaktadır.
                   </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                   <div className="flex items-center gap-3 mb-4">
                      <Eye className="text-emerald-600" size={24} />
                      <h4 className="font-bold text-slate-900 text-lg">Verilerin İşlenme Amacı</h4>
                   </div>
                   <p className="text-sm">
                      Verileriniz; mal/hizmet satış süreçlerinin yürütülmesi, fatura kesilmesi, müşteri ilişkileri süreçlerinin yönetilmesi ve pazarlama analiz çalışmalarının yürütülmesi amaçlarıyla işlenmektedir.
                   </p>
                </div>
             </div>

             <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Kişisel Verilerin Aktarılması</h3>
                <p>
                   Toplanan kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda; yasal düzenlemelerin izin verdiği kurumlara (Bakanlıklar, Yargı Mercileri), anlaşmalı olduğumuz kargo şirketlerine, ödeme kuruluşlarına ve pazarlama/yazılım altyapı hizmeti aldığımız yurt içi/yurt dışı iş ortaklarımıza aktarılabilmektedir.
                </p>
             </div>

             <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Veri Sahibinin Hakları (KVKK Madde 11)</h3>
                <p className="mb-4">KVKK'nın 11. maddesi uyarınca veri sahipleri olarak aşağıdaki haklara sahipsiniz:</p>
                <ul className="space-y-3 list-disc pl-5">
                   <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme.</li>
                   <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme.</li>
                   <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme.</li>
                   <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme.</li>
                   <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme.</li>
                   <li>Kanun'da öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme.</li>
                   <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme.</li>
                   <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
                </ul>
             </div>

             <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                   <h4 className="font-bold text-lg mb-1">Başvuru Yöntemi</h4>
                   <p className="text-slate-400 text-sm">Haklarınızı kullanmak için kimliğinizi tespit edici belgeler ile birlikte yazılı talebinizi Şirketimize iletebilirsiniz.</p>
                </div>
                <a href="mailto:kvkk@teknoemo.com.tr" className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold text-sm shrink-0 hover:bg-slate-100 transition-colors">
                   kvkk@teknoemo.com.tr
                </a>
             </div>
             
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
