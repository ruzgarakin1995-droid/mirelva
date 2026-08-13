"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ImplantolojiPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24 md:mb-32 text-center max-w-4xl mx-auto"
        >
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-8 block">
            Uzmanlık / İmplantoloji
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight mb-8">
            Güçlü Bir Temel. <br />
            <span className="italic text-[#D4C9C3] font-light">Ömürlük Güven.</span>
          </h1>
          <p className="font-sans font-light text-[#1A1A1A]/60 leading-relaxed text-lg">
            Kayıp dişlerinizi, doğanın yarattığı kusursuzluğa en yakın şekilde; titanium mimarisi ve ileri teknoloji 3D rehberlik sistemleriyle yeniden var ediyoruz.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-[#1A1A1A] p-12 text-[#FAFAFA] flex flex-col justify-center"
          >
            <h3 className="text-3xl font-serif mb-6">Dijital ve Acısız Süreç</h3>
            <p className="font-sans font-light text-[#FAFAFA]/70 leading-relaxed mb-8">
              Eski nesil, tahmine dayalı ve ağrılı cerrahi yöntemleri unutun. Lumina Dental'de, tüm implant süreci işlem öncesinde 3 Boyutlu Tomografi (CBCT) ile bilgisayar ortamında simüle edilir. 
            </p>
            <p className="font-sans font-light text-[#FAFAFA]/70 leading-relaxed">
              Cerrahi operasyon, milimetrik "Smart Guide" rehber plaklar kullanılarak, dikişsiz (flapless) ve tamamen acısız bir şekilde gerçekleştirilir.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="border border-[#1A1A1A]/10 p-12 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-serif mb-6 text-[#1A1A1A]">Biouyumlu Titanium</h3>
            <p className="font-sans font-light text-[#1A1A1A]/70 leading-relaxed mb-8">
              Kullandığımız Grade 5 Titanium ve Zirkonyum alaşımlı üst segment implantlar, kemik hücreleriyle en hızlı şekilde bütünleşecek pürüzlendirilmiş özel yüzey teknolojisine (SLA) sahiptir.
            </p>
            <ul className="flex flex-col gap-4 font-sans text-sm text-[#1A1A1A]">
              <li className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#D4C9C3]"></span>
                Ömür Boyu Uluslararası Garanti
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#D4C9C3]"></span>
                Hücresel Entegrasyon (Osseointegrasyon)
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#D4C9C3]"></span>
                Aynı Gün Estetik Yükleme (Fast&Fixed)
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
