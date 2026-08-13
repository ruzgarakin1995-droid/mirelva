import React from 'react';
import { TattooHeader } from '@/themes/tattoo-v3/components/TattooHeader';
import { TattooFooter } from '@/themes/tattoo-v3/components/TattooFooter';
import { TattooAftercare } from '@/themes/tattoo-v3/components/TattooAftercare';

export default function AftercarePage() {
  return (
    <>
      <TattooHeader />
      <main className="flex-1 bg-zinc-950">
        
        {/* Hero Section */}
        <section className="relative pt-40 pb-32 overflow-hidden border-b border-zinc-900">
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              src="/images/tattoo-v3/v3_hygiene_1786315301938.jpg" 
              alt="Medical Hygiene" 
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/50 to-zinc-950" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-sm font-bold text-red-600 tracking-[0.3em] uppercase mb-6">Ömür Boyu Kalite İçin</h1>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              Bakım <br/>Rehberi
            </h2>
            <p className="text-zinc-400 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Dövmenizin kalitesi sadece sanatçının becerisine değil, sizin ona nasıl baktığınıza da bağlıdır.
            </p>
          </div>
        </section>

        {/* Existing Aftercare Component */}
        <div className="py-12">
          <TattooAftercare />
        </div>

        {/* Warning Section */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto border-l-4 border-red-600 bg-red-950/20 p-8">
              <h4 className="text-white font-black uppercase tracking-widest mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Kesinlikle Yapılmaması Gerekenler
              </h4>
              <ul className="space-y-4 text-zinc-400 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>İlk 2 hafta kesinlikle havuza, denize, saunaya veya hamama girmeyin. Enfeksiyon riski çok yüksektir.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Oluşan kabukları ASLA soymayın, kaşımayın. Kendi kendilerine düşmelerini bekleyin, aksi takdirde mürekkep kusulur ve dövmede boşluklar oluşur.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Güneş ışınlarından koruyun. İyileşme sürecinden sonra bile güneşe çıkarken yüksek faktörlü güneş kremi kullanmayı alışkanlık edinin.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </main>
      <TattooFooter />
    </>
  );
}
