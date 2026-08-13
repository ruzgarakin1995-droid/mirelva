const fs = require('fs');
const path = require('path');

const baseDir = 'src/app/test-ecommerce-v2';

const pages = {
  'order-tracking': `"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { PackageSearch, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function OrderTrackingPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'Sipariş Takibi' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm text-center">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <PackageSearch size={40} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-4">Siparişinizi Takip Edin</h1>
          <p className="text-slate-500 mb-10 max-w-lg mx-auto">Sipariş numaranız ve e-posta adresinizi girerek kargonuzun nerede olduğunu anında öğrenebilirsiniz.</p>

          {status === 'success' ? (
             <FadeIn className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl max-w-lg mx-auto">
               <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
               <h3 className="text-xl font-bold text-slate-900 mb-2">Siparişiniz Yolda!</h3>
               <p className="text-slate-600">Siparişiniz kargoya teslim edilmiştir. Tahmini teslimat süresi: <span className="font-bold">Yarın</span></p>
               <button onClick={() => setStatus('idle')} className="mt-6 text-emerald-700 font-semibold underline">Yeni bir sorgulama yap</button>
             </FadeIn>
          ) : (
             <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-5 text-left">
               <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">Sipariş Numarası</label>
                 <input type="text" required placeholder="Örn: TEK-123456789" className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
               </div>
               <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">E-posta Adresi</label>
                 <input type="email" required placeholder="ornek@mail.com" className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
               </div>
               <button type="submit" disabled={status === 'loading'} className="w-full h-14 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 mt-2">
                 {status === 'loading' ? 'Sorgulanıyor...' : 'Siparişimi Bul'}
                 {status !== 'loading' && <ArrowRight size={20} />}
               </button>
             </form>
          )}
        </div>
      </FadeIn>
    </div>
  );
}
`,
  'returns': `"use client";

import React from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { RefreshCcw, Box, Truck, Check } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function ReturnsPage() {
  const steps = [
    { icon: Box, title: "1. Talebinizi Oluşturun", desc: "Hesabım sayfasından iade etmek istediğiniz ürünü seçip talebinizi iletin." },
    { icon: Truck, title: "2. Kargoya Teslim Edin", desc: "Size verilen ücretsiz iade kodu ile ürünü anlaşmalı kargoya verin." },
    { icon: Check, title: "3. Ücret İadenizi Alın", desc: "Ürün depomuza ulaştıktan sonra 3 iş günü içinde ücretiniz iade edilir." }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'İptal ve İade Koşulları' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-8">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center shrink-0">
               <RefreshCcw size={32} />
            </div>
            <div>
               <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">Kolay İade.</h1>
               <p className="text-slate-500">14 gün içinde koşulsuz şartsız iade hakkınız güvence altında.</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-6">Nasıl iade edebilirim?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             {steps.map((step, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
                   <step.icon size={32} className="text-blue-600 mx-auto mb-4" />
                   <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                   <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
             ))}
          </div>

          <div className="prose prose-slate max-w-none">
             <h3 className="text-xl font-bold text-slate-900 mb-4">İade Koşulları</h3>
             <ul className="space-y-3 text-slate-600 list-disc pl-5">
                <li>Ürünün orijinal ambalajı bozulmamış ve ürün kullanılmamış olmalıdır.</li>
                <li>Tek kullanımlık ürünler, hızlı bozulan veya son kullanma tarihi geçme ihtimali olan ürünler iade edilemez.</li>
                <li>Hijyen standartları gereği kulak içi kulaklıkların güvenlik bandı açıldıktan sonra iadesi mümkün değildir (arızalı ürünler hariç).</li>
                <li>Fatura ve varsa tüm aksesuarları eksiksiz gönderilmelidir.</li>
             </ul>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
`,
  'warranty': `"use client";

import React from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { ShieldCheck, Tool, Clock } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function WarrantyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'Garanti Şartları' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-8">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
               <ShieldCheck size={32} />
            </div>
            <div>
               <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">TEKNOEMO Garantisi.</h1>
               <p className="text-slate-500">Tüm ürünlerimizde standart 2 yıl resmi Türkiye garantisi.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
               <Tool className="text-blue-600 mt-1" size={24} />
               <div>
                  <h4 className="font-bold text-slate-900 mb-2">Yetkili Servis Desteği</h4>
                  <p className="text-sm text-slate-600">Satın aldığınız ürünlerde yaşayacağınız teknik problemlerde doğrudan markanın yetkili servislerinden destek alabilirsiniz.</p>
               </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-start gap-4">
               <Clock className="text-blue-600 mt-1" size={24} />
               <div>
                  <h4 className="font-bold text-slate-900 mb-2">20 İş Günü Kuralı</h4>
                  <p className="text-sm text-slate-600">Servise verilen ürünlerin maksimum tamir süresi 20 iş günüdür. Aşılması durumunda ürün değişimi yapılır.</p>
               </div>
            </div>
          </div>

          <div className="space-y-6 text-slate-600">
             <h3 className="text-xl font-bold text-slate-900">Garanti Kapsamı Dışında Kalan Durumlar</h3>
             <ul className="list-disc pl-5 space-y-2">
                <li>Kullanıcı hatasından kaynaklanan fiziksel hasarlar (kırılma, çizilme, ezilme vb.).</li>
                <li>Sıvı teması (Ürünün suya dayanıklılık sertifikası olsa dahi servis onayı gerekir).</li>
                <li>Yetkisiz kişilerce veya servislerce cihazın içinin açılması, müdahale edilmesi.</li>
                <li>Voltaj dalgalanmaları veya standart dışı adaptör kullanımından kaynaklı arızalar.</li>
             </ul>
             <p className="pt-4 border-t border-slate-100 mt-8">
               Garanti işlemlerini başlatmak için <strong>0850 123 45 67</strong> numaralı destek hattımızı arayabilir veya doğrudan ürünün markasına ait resmi yetkili servislerle iletişime geçebilirsiniz.
             </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
`,
  'faq': `"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

const faqs = [
  {
    q: "Siparişim kaç günde teslim edilir?",
    a: "Hafta içi saat 16:00'a kadar verilen siparişler aynı gün kargoya teslim edilmektedir. Bulunduğunuz şehre göre ortalama 1-3 iş günü içerisinde adresinize ulaşır."
  },
  {
    q: "Hangi kargo şirketleriyle çalışıyorsunuz?",
    a: "Tüm Türkiye'ye Yurtiçi Kargo, MNG Kargo ve Kolay Gelsin (Belirli bölgeler) ile gönderim sağlamaktayız. Sipariş ekranında kargo firmanızı seçebilirsiniz."
  },
  {
    q: "Taksit imkanınız var mı?",
    a: "Evet, anlaşmalı kredi kartlarına (Bonus, World, Maximum, Axess, Paraf, CardFinans) peşin fiyatına 3, 6 ve 9 aya varan taksit seçeneklerimiz mevcuttur."
  },
  {
    q: "Faturam elime ulaşmadı, ne yapmalıyım?",
    a: "E-arşiv faturalarınız siparişiniz kargoya verildiğinde otomatik olarak kayıtlı e-posta adresinize gönderilmektedir. Ayrıca 'Hesabım > Siparişlerim' sayfasından da indirebilirsiniz."
  },
  {
    q: "Kapıda ödeme seçeneği var mı?",
    a: "Güvenlik politikalarımız gereği şu anda sadece Kredi Kartı, Banka Kartı ve Havale/EFT ile ödeme kabul etmekteyiz. Kapıda ödeme seçeneğimiz bulunmamaktadır."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'Sıkça Sorulan Sorular' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-8">
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shrink-0">
               <HelpCircle size={32} />
            </div>
            <div>
               <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">Nasıl yardımcı olabiliriz?</h1>
               <p className="text-slate-500">Müşterilerimizin en çok merak ettiği sorular ve cevapları.</p>
            </div>
          </div>
          
          <div className="space-y-4">
             {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                   <button 
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-slate-900 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                   >
                      <span>{faq.q}</span>
                      <ChevronDown size={20} className={\`text-slate-400 transition-transform duration-300 \${openIndex === index ? 'rotate-180' : ''}\`} />
                   </button>
                   <div className={\`overflow-hidden transition-all duration-300 \${openIndex === index ? 'max-h-40 border-t border-slate-200' : 'max-h-0'}\`}>
                      <div className="px-6 py-5 text-slate-600 leading-relaxed text-sm md:text-base">
                         {faq.a}
                      </div>
                   </div>
                </div>
             ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
             <h3 className="font-bold text-blue-900 mb-2">Cevabınızı bulamadınız mı?</h3>
             <p className="text-blue-700 text-sm mb-4">Müşteri temsilcilerimiz size yardım etmek için hazır.</p>
             <a href="/test-ecommerce-v2/contact" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">Bize Ulaşın</a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
`,
  'contact': `"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'İletişim' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
         <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Bizimle İletişime Geçin.</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Sorularınız, önerileriniz veya destek talepleriniz için bize ulaşmaktan çekinmeyin.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-4">
               <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                     <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Müşteri Hizmetleri</h3>
                  <p className="text-blue-600 font-semibold text-lg">0850 123 45 67</p>
                  <p className="text-xs text-slate-500 mt-2">Hafta içi: 09:00 - 18:00</p>
               </div>
               
               <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                     <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">E-Posta</h3>
                  <p className="text-slate-600">destek@teknoemo.com.tr</p>
                  <p className="text-xs text-slate-500 mt-2">Ortalama yanıt süresi: 2 saat</p>
               </div>

               <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                     <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Merkez Ofis</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Teknoloji Vadisi, Levent Mah. <br/>Büyükdere Cad. No: 123<br/>Şişli / İstanbul</p>
               </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
               <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm h-full flex flex-col justify-center">
                  {sent ? (
                     <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                           <Send size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Mesajınız Alındı!</h3>
                        <p className="text-slate-600">En kısa sürede tarafınıza geri dönüş sağlanacaktır. İlginiz için teşekkür ederiz.</p>
                        <button onClick={() => setSent(false)} className="mt-4 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full transition-colors">Yeni Mesaj Gönder</button>
                     </div>
                  ) : (
                     <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Mesaj Gönderin</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           <div>
                              <label className="block text-sm font-bold text-slate-700 mb-2">Ad Soyad</label>
                              <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                           </div>
                           <div>
                              <label className="block text-sm font-bold text-slate-700 mb-2">E-Posta</label>
                              <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" />
                           </div>
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-slate-700 mb-2">Konu</label>
                           <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors">
                              <option>Sipariş Durumu</option>
                              <option>Ürün İade/Değişim</option>
                              <option>Teknik Destek</option>
                              <option>Öneri ve Şikayet</option>
                           </select>
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-slate-700 mb-2">Mesajınız</label>
                           <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"></textarea>
                        </div>
                        <button type="submit" className="w-full h-14 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                           Gönder <Send size={18} />
                        </button>
                     </form>
                  )}
               </div>
            </div>
         </div>
      </FadeIn>
    </div>
  );
}
`
};

// Create directories and write pages
Object.entries(pages).forEach(([folder, content]) => {
  const dir = path.join(baseDir, folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
});

console.log("Created 5 new customer service pages.");

// Update TechFooter.tsx and TechHeader.tsx links
let footer = fs.readFileSync(path.join(baseDir, '../../components/ecommerce/tech/TechFooter.tsx'), 'utf8');

footer = footer.replace(
  /<li><Link href="#" className="hover:text-blue-400">Sipariş Takibi<\/Link><\/li>/g, 
  '<li><Link href="/test-ecommerce-v2/order-tracking" className="hover:text-blue-600">Sipariş Takibi</Link></li>'
).replace(
  /<li><Link href="#" className="hover:text-blue-400">İptal ve İade Koşulları<\/Link><\/li>/g,
  '<li><Link href="/test-ecommerce-v2/returns" className="hover:text-blue-600">İptal ve İade Koşulları</Link></li>'
).replace(
  /<li><Link href="#" className="hover:text-blue-400">Garanti Şartları<\/Link><\/li>/g,
  '<li><Link href="/test-ecommerce-v2/warranty" className="hover:text-blue-600">Garanti Şartları</Link></li>'
).replace(
  /<li><Link href="#" className="hover:text-blue-400">Sıkça Sorulan Sorular<\/Link><\/li>/g,
  '<li><Link href="/test-ecommerce-v2/faq" className="hover:text-blue-600">Sıkça Sorulan Sorular</Link></li>'
).replace(
  /<li><Link href="#" className="hover:text-blue-400">İletişim<\/Link><\/li>/g,
  '<li><Link href="/test-ecommerce-v2/contact" className="hover:text-blue-600">İletişim</Link></li>'
);

// Since TechFooter had light mode classes replacing previous dark mode, I need to match the actual text.
// My previous script changed hover:text-blue-400 to hover:text-blue-600.
footer = footer.replace(
  /<li><Link href="#" className="hover:text-blue-600">Sipariş Takibi<\/Link><\/li>/g, 
  '<li><Link href="/test-ecommerce-v2/order-tracking" className="hover:text-blue-600">Sipariş Takibi</Link></li>'
).replace(
  /<li><Link href="#" className="hover:text-blue-600">İptal ve İade Koşulları<\/Link><\/li>/g,
  '<li><Link href="/test-ecommerce-v2/returns" className="hover:text-blue-600">İptal ve İade Koşulları</Link></li>'
).replace(
  /<li><Link href="#" className="hover:text-blue-600">Garanti Şartları<\/Link><\/li>/g,
  '<li><Link href="/test-ecommerce-v2/warranty" className="hover:text-blue-600">Garanti Şartları</Link></li>'
).replace(
  /<li><Link href="#" className="hover:text-blue-600">Sıkça Sorulan Sorular<\/Link><\/li>/g,
  '<li><Link href="/test-ecommerce-v2/faq" className="hover:text-blue-600">Sıkça Sorulan Sorular</Link></li>'
).replace(
  /<li><Link href="#" className="hover:text-blue-600">İletişim<\/Link><\/li>/g,
  '<li><Link href="/test-ecommerce-v2/contact" className="hover:text-blue-600">İletişim</Link></li>'
);

fs.writeFileSync(path.join(baseDir, '../../components/ecommerce/tech/TechFooter.tsx'), footer);

// Update Header Top Bar links
let header = fs.readFileSync(path.join(baseDir, '../../components/ecommerce/tech/TechHeader.tsx'), 'utf8');
header = header.replace(
  /<Link href="#" className="hover:text-blue-600 transition-colors">Sipariş Takibi<\/Link>/g,
  '<Link href="/test-ecommerce-v2/order-tracking" className="hover:text-blue-600 transition-colors">Sipariş Takibi</Link>'
).replace(
  /<span className="flex items-center gap-1"><HelpCircle size={14} \/> Destek Merkezi<\/span>/g,
  '<Link href="/test-ecommerce-v2/faq" className="flex items-center gap-1 hover:text-blue-600 transition-colors"><HelpCircle size={14} /> Destek Merkezi</Link>'
);
fs.writeFileSync(path.join(baseDir, '../../components/ecommerce/tech/TechHeader.tsx'), header);

console.log("Footer and Header links updated.");
