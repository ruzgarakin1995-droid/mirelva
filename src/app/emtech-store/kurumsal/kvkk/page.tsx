"use client";
import React from 'react';
import { EmtechHeader } from '@/themes/emtech/components/EmtechHeader';
import { EmtechFooter } from '@/themes/emtech/components/EmtechFooter';

export default function KVKKPage() {
  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col selection:bg-[#0055FF] selection:text-white">
      <EmtechHeader />
      
      <div className="flex-1 pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar / Sticky Nav */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 bg-white border-2 border-zinc-950 p-6 shadow-[8px_8px_0px_#000]">
              <h3 className="font-space font-black text-xl uppercase tracking-tighter text-zinc-950 mb-6 pb-4 border-b-2 border-zinc-200">
                Sözleşmeler
              </h3>
              <ul className="space-y-4 font-inter text-sm">
                <li><a href="#aydinlatma-metni" className="text-[#0055FF] font-bold">KVKK Aydınlatma Metni</a></li>
                <li><a href="#cerez-politikasi" className="text-zinc-500 hover:text-zinc-950 transition-colors">Çerez Politikası</a></li>
                <li><a href="#toptan-satis" className="text-zinc-500 hover:text-zinc-950 transition-colors">B2B Satış Sözleşmesi</a></li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/4 bg-white border-2 border-zinc-950 p-8 md:p-16 shadow-[8px_8px_0px_#000]">
            <div className="prose prose-zinc max-w-none">
              
              {/* Header */}
              <div className="mb-12 border-b-4 border-zinc-950 pb-8">
                <p className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Son Güncelleme: 10 Ağustos 2026</p>
                <h1 id="aydinlatma-metni" className="text-4xl font-space font-black text-zinc-950 uppercase tracking-tighter m-0">
                  KVKK Aydınlatma Metni
                </h1>
              </div>

              {/* Text Blocks */}
              <div className="font-inter text-zinc-700 space-y-6 leading-relaxed">
                <p>
                  <strong>Emtech Bilişim</strong> olarak (bundan böyle “Şirket” olarak anılacaktır), kişisel verilerinizin güvenliğine en üst düzeyde hassasiyet göstermekteyiz. Bu bilinçle, Şirket olarak ürün ve hizmetlerimizden faydalanan B2B bayilerimiz başta olmak üzere, Şirket ile ilişkili tüm şahıslara ait her türlü kişisel verinin 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”)’na uygun olarak işlenerek muhafaza edilmesine büyük önem atfetmekteyiz.
                </p>

                <h3 className="font-space font-bold text-xl uppercase tracking-tighter text-zinc-950 mt-8 mb-4">1. Kişisel Verilerin Toplanması ve İşlenmesi</h3>
                <p>
                  Kişisel verileriniz, Şirketimiz tarafından sunulan toptan satış, bayilik başvuru süreçleri, teknik destek ve lojistik faaliyetleri çerçevesinde otomatik ya da otomatik olmayan yöntemlerle; WhatsApp sipariş hattımız, web sitemiz, çağrı merkezimiz ve benzeri vasıtalarla sözlü, yazılı veya elektronik olarak toplanabilmektedir.
                </p>

                <h3 className="font-space font-bold text-xl uppercase tracking-tighter text-zinc-950 mt-8 mb-4">2. Kişisel Verilerin İşlenme Amacı</h3>
                <p>
                  Toplanan kişisel verileriniz (Firma unvanı, yetkili adı, telefon, vergi dairesi/no, teslimat adresi vb.);
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Toptan sipariş süreçlerinin ve faturalandırmanın gerçekleştirilmesi,</li>
                  <li>Kargo ve teslimat operasyonlarının sağlanması,</li>
                  <li>Garanti ve iade prosedürlerinin yönetilmesi,</li>
                  <li>Yeni ürün katalogları ve B2B fiyat listelerinden sizleri haberdar etmek amaçlarıyla işlenmektedir.</li>
                </ul>

                <h3 id="cerez-politikasi" className="font-space font-black text-2xl uppercase tracking-tighter text-zinc-950 mt-16 mb-4 pt-8 border-t-2 border-zinc-200">Çerez (Cookie) Politikası</h3>
                <p>
                  Web sitemiz, sistem performansını artırmak ve sizlere daha iyi bir ziyaret deneyimi sunmak amacıyla çerezler kullanmaktadır. Kesinlikle gerekli çerezler (Strictly Necessary Cookies) dışında, kişisel profilinizi hedefleyen pazarlama çerezleri aktif B2B sistemimizde kullanılmamaktadır.
                </p>

                <h3 id="toptan-satis" className="font-space font-black text-2xl uppercase tracking-tighter text-zinc-950 mt-16 mb-4 pt-8 border-t-2 border-zinc-200">B2B Satış Sözleşmesi (Özet)</h3>
                <p>
                  İşbu web sitesi ve iletişim kanalları üzerinden kurulan tüm ticari ilişkiler Türk Ticaret Kanunu ("TTK") hükümlerine tabidir. Tüketicinin Korunması Hakkında Kanun (TKHK) hükümleri, alıcının bir ticari işletme (teknik servis, telefon bayi vb.) olması sebebiyle B2B toptan alışverişlerde geçerli değildir.
                </p>
                <p>
                  Garanti koşulları ve ürün değişim süreçleri "Sıkça Sorulan Sorular" sayfasında belirtilen standartlara ve distribütör şartnamelerine göre yürütülür.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      <EmtechFooter />
    </main>
  );
}
