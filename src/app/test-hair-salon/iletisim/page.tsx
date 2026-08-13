"use client";

import { HairSalonHeader } from '@/themes/hair-salon/components/HairSalonHeader';
import { HairSalonFooter } from '@/themes/hair-salon/components/HairSalonFooter';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen text-[#352F2A] selection:bg-[#C4A484] selection:text-[#352F2A]">
      <HairSalonHeader />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-20 px-8 bg-[#352F2A] text-[#FDFBF7] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C4A484]/5"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">İletişim</h1>
          <p className="font-sans font-light text-[#FDFBF7]/60 max-w-xl mx-auto">
            Yeni başlangıcınız için ilk adımı atın. Sizi Eclat Studio'da ağırlamak için sabırsızlanıyoruz.
          </p>
        </div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Info */}
          <div>
            <h2 className="text-4xl font-serif mb-12">Bize Ulaşın.</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#352F2A]/50 mb-2">Adres</h3>
                <p className="font-serif text-2xl text-[#352F2A]">Valikonağı Cd. No: 45<br/>Nişantaşı, İstanbul</p>
              </div>
              <div>
                <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#352F2A]/50 mb-2">Telefon</h3>
                <p className="font-serif text-2xl text-[#352F2A]">+90 (555) 123 45 67</p>
              </div>
              <div>
                <h3 className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#352F2A]/50 mb-2">Email</h3>
                <p className="font-serif text-2xl text-[#352F2A]">hello@eclathair.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#352F2A] text-[#FDFBF7] p-12">
            <h3 className="text-2xl font-serif mb-8">Mesaj Gönderin</h3>
            <form className="space-y-8">
              <div>
                <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-transparent border-b border-[#FDFBF7]/20 py-3 text-[#FDFBF7] focus:outline-none focus:border-[#C4A484] transition-colors" />
              </div>
              <div>
                <input type="email" placeholder="E-posta Adresiniz" className="w-full bg-transparent border-b border-[#FDFBF7]/20 py-3 text-[#FDFBF7] focus:outline-none focus:border-[#C4A484] transition-colors" />
              </div>
              <div>
                <textarea placeholder="Mesajınız" rows={4} className="w-full bg-transparent border-b border-[#FDFBF7]/20 py-3 text-[#FDFBF7] focus:outline-none focus:border-[#C4A484] transition-colors resize-none"></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-[#C4A484] text-[#352F2A] py-5 font-sans font-semibold tracking-[0.2em] uppercase text-[10px] hover:bg-[#FDFBF7] transition-colors duration-500"
              >
                Gönder
              </button>
            </form>
          </div>

        </div>
      </section>
      
      <HairSalonFooter />
    </main>
  );
}
