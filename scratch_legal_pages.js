const fs = require('fs');
const path = require('path');

const baseDir = 'src/app/test-ecommerce-v2';

const pages = {
  'privacy': `"use client";

import React from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Shield, Lock, FileText } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'Gizlilik Sözleşmesi' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-8">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
               <Shield size={32} />
            </div>
            <div>
               <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">Gizlilik Sözleşmesi.</h1>
               <p className="text-slate-500 font-medium">Verilerinizin güvenliği ve gizliliği bizim için en önemli önceliktir.</p>
            </div>
          </div>
          
          <div className="space-y-8 text-slate-600 leading-relaxed text-base">
             
             <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">1</div>
                   Sözleşmenin Amacı
                </h3>
                <p className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                   İşbu Gizlilik Sözleşmesi, TEKNOEMO (bundan böyle "Şirket" olarak anılacaktır) tarafından işletilen web sitesini (bundan böyle "Site" olarak anılacaktır) kullanan tüm kullanıcıların ve müşterilerin (bundan böyle "Kullanıcı" olarak anılacaktır) kişisel verilerinin toplanması, kullanılması, saklanması ve korunması süreçlerini düzenlemeyi amaçlar.
                </p>
             </section>

             <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">2</div>
                   Toplanan Veriler
                </h3>
                <p className="mb-4">
                   Kullanıcıların Site'ye kaydolması, alışveriş yapması, bültenlere abone olması veya destek hizmetlerinden faydalanması sırasında aşağıdaki kişisel veriler toplanabilir:
                </p>
                <ul className="space-y-2 pl-4">
                   <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası (fatura süreçleri için).</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, fatura ve teslimat adresleri.</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span><strong>Finansal Bilgiler:</strong> Kredi kartı numarası, banka hesap bilgileri (Bu bilgiler şirket sunucularında tutulmaz, aracı ödeme kuruluşları tarafından doğrudan işlenir).</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <span><strong>Dijital İzler:</strong> IP adresi, tarayıcı tipi, Site içi dolaşım alışkanlıkları ve çerez (cookie) verileri.</span>
                   </li>
                </ul>
             </section>

             <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">3</div>
                   Verilerin Kullanım Amacı
                </h3>
                <p>
                   Toplanan kişisel verileriniz, yalnızca size sunulan hizmetin kalitesini artırmak amacıyla işlenir. Siparişlerinizin sorunsuz bir şekilde tarafınıza ulaştırılması, müşteri hizmetleri taleplerinizin karşılanması, yasal faturalandırma yükümlülüklerinin yerine getirilmesi ve açık rızanız olması kaydıyla kampanya bilgilendirmelerinin yapılması temel işleme amaçlarımızdır.
                </p>
             </section>

             <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">4</div>
                   Çerez (Cookie) Kullanımı
                </h3>
                <p>
                   Sitemizde, kullanıcı deneyimini iyileştirmek, Site performansını analiz etmek ve kişiselleştirilmiş reklamlar sunmak amacıyla çerezler kullanılmaktadır. Tarayıcı ayarlarınız üzerinden çerezleri dilediğiniz zaman sınırlandırabilir veya tamamen engelleyebilirsiniz.
                </p>
             </section>

             <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-sm text-blue-800 flex gap-4 items-start">
                <FileText className="shrink-0 mt-1" size={24} />
                <p>
                   Gizlilik Sözleşmesi ile ilgili detaylı bilgi almak veya verilerinizin silinmesini talep etmek için dilediğiniz zaman <strong>destek@teknoemo.com.tr</strong> adresinden bizimle iletişime geçebilirsiniz.
                </p>
             </div>
             
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
`,
  'terms': `"use client";

import React from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { FileSignature, ScrollText } from 'lucide-react';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 w-full min-h-[70vh]">
      <Breadcrumb 
        items={[
          { label: 'Anasayfa', href: '/test-ecommerce-v2' },
          { label: 'Mesafeli Satış Sözleşmesi' }
        ]} 
        className="mb-8"
      />
      
      <FadeIn>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-8">
            <div className="w-16 h-16 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center shrink-0">
               <FileSignature size={32} />
            </div>
            <div>
               <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">Mesafeli Satış Sözleşmesi.</h1>
               <p className="text-slate-500 font-medium">Satın alma sürecindeki yasal haklarınız ve yükümlülükler.</p>
            </div>
          </div>
          
          <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
             
             <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-slate-900 mb-2">Madde 1: Taraflar</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <strong className="block text-slate-800 mb-1">Satıcı:</strong>
                      Unvanı: TEKNOEMO Elektronik Tic. A.Ş.<br/>
                      Adresi: Levent Mah. Büyükdere Cad. Şişli/İstanbul<br/>
                      Telefon: 0850 123 45 67<br/>
                      E-posta: destek@teknoemo.com.tr
                   </div>
                   <div>
                      <strong className="block text-slate-800 mb-1">Alıcı:</strong>
                      Alıcı, siparişi oluşturan ve siteye üye olan/misafir alışveriş yapan gerçek veya tüzel kişidir. İletişim bilgileri sipariş ekranında beyan edildiği şekildedir.
                   </div>
                </div>
             </div>

             <h4 className="font-bold text-slate-900 text-lg">Madde 2: Sözleşmenin Konusu</h4>
             <p className="pl-4 border-l-2 border-slate-200">
                İşbu sözleşmenin konusu, Alıcı'nın Satıcı'ya ait web sitesinden elektronik ortamda siparişini yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.
             </p>

             <h4 className="font-bold text-slate-900 text-lg mt-8">Madde 3: Sözleşme Konusu Ürün/Hizmet</h4>
             <p>
                Ürünlerin cinsi ve türü, miktarı, marka/modeli, rengi, satış bedeli, ödeme şekli ve teslimat bilgileri alışveriş sepetinde ve ödeme sayfasında açıkça beyan edilmiştir.
             </p>

             <h4 className="font-bold text-slate-900 text-lg mt-8">Madde 4: Genel Hükümler</h4>
             <ul className="space-y-3 list-decimal pl-5">
                <li>Alıcı, web sitesinde sözleşme konusu ürünün temel nitelikleri, tüm vergiler dahil satış fiyatı, ödeme şekli ve teslimata ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini beyan eder.</li>
                <li>Sözleşme konusu ürün, yasal 30 günlük süreyi aşmamak koşulu ile Alıcı'nın yerleşim yerinin uzaklığına bağlı olarak ön bilgiler içinde açıklanan süre içinde Alıcı veya gösterdiği adresteki kişi/kuruluşa teslim edilir.</li>
                <li>Sözleşme konusu ürünün teslimatı için işbu sözleşmenin elektronik ortamda onaylanmış olması ve bedelinin Alıcı'nın tercih ettiği ödeme şekli ile ödenmiş olması şarttır. Herhangi bir nedenle ürün bedeli ödenmez veya banka kayıtlarında iptal edilirse, Satıcı ürünün teslimi yükümlülüğünden kurtulmuş kabul edilir.</li>
                <li>Satıcı mücbir sebepler veya nakliyeyi engelleyen hava muhalefeti, ulaşımın kesilmesi gibi olağanüstü durumlar nedeni ile sözleşme konusu ürünü süresi içinde teslim edemez ise, durumu Alıcı'ya bildirmekle yükümlüdür.</li>
             </ul>

             <h4 className="font-bold text-slate-900 text-lg mt-8">Madde 5: Cayma Hakkı</h4>
             <p className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                Alıcı, sözleşme konusu ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa tesliminden itibaren <strong>14 (ondört) gün</strong> içinde hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin malı reddederek sözleşmeden cayma hakkına sahiptir. Cayma hakkının kullanımı için bu süre içinde Satıcı'ya yazılı bildirimde bulunulması şarttır. Kurulumu servis tarafından yapılan ürünlerin kutusunun açılması veya kullanılması halinde cayma hakkı kullanılamaz.
             </p>

             <div className="flex items-center gap-2 mt-8 text-slate-400">
                <ScrollText size={16} />
                <span className="text-xs">Son Güncelleme: 01.08.2026</span>
             </div>
             
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
`,
  'kvkk': `"use client";

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
`
};

Object.entries(pages).forEach(([folder, content]) => {
  const dir = path.join(baseDir, folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
});
console.log("Created 3 legal pages.");

let footer = fs.readFileSync(path.join(baseDir, '../../components/ecommerce/tech/TechFooter.tsx'), 'utf8');

footer = footer.replace(
  /<Link href="#" className="hover:text-slate-900 transition-colors">Gizlilik Sözleşmesi<\/Link>/g, 
  '<Link href="/test-ecommerce-v2/privacy" className="hover:text-slate-900 transition-colors">Gizlilik Sözleşmesi</Link>'
).replace(
  /<Link href="#" className="hover:text-slate-900 transition-colors">Mesafeli Satış Sözleşmesi<\/Link>/g,
  '<Link href="/test-ecommerce-v2/terms" className="hover:text-slate-900 transition-colors">Mesafeli Satış Sözleşmesi</Link>'
).replace(
  /<Link href="#" className="hover:text-slate-900 transition-colors">KVKK Aydınlatma Metni<\/Link>/g,
  '<Link href="/test-ecommerce-v2/kvkk" className="hover:text-slate-900 transition-colors">KVKK Aydınlatma Metni</Link>'
);

fs.writeFileSync(path.join(baseDir, '../../components/ecommerce/tech/TechFooter.tsx'), footer);
console.log("Footer legal links updated.");
