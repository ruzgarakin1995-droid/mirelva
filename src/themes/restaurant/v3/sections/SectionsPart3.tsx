import React from 'react';

export const LocalProducers = () => {
  return (
    <section className="py-24 bg-[#FFFDD0] text-[#1A0F0A] px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl md:text-7xl mb-12 text-center text-[#CC5500]">Yerel Üreticilerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Ayşe Teyze'nin Peynirleri", "Kazdağları Mantarları", "Ege'nin Zeytini", "Köy Fırını"].map((producer, i) => (
            <div key={i} className="border-t border-[#1A0F0A] pt-4">
              <h3 className="font-serif text-2xl font-bold mb-2">{producer}</h3>
              <p className="text-sm opacity-70">El emeğiyle doğadan sofraya, yılların tecrübesi ve saygıyla.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const GuestExperience = () => {
  return (
    <section className="py-32 bg-[#1A0F0A] text-[#FFFDD0] px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-[#E2725B] text-4xl mb-8">❝</div>
        <h2 className="font-serif text-3xl md:text-5xl italic leading-relaxed">
          "Hayatımda yediğim en büyüleyici yemekti. Sadece damaklara değil, ruha dokunan bir deneyim."
        </h2>
        <p className="tracking-widest uppercase text-sm text-[#CC5500]">— Gastronomi Dergisi</p>
      </div>
    </section>
  );
};

export const PrivateDining = () => {
  return (
    <section className="py-24 bg-[#2A1810] px-4">
      <div className="max-w-7xl mx-auto bg-[#1A0F0A] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img src="/restaurant_v3_private.jpg" alt="Özel Yemek" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 space-y-6 text-[#FFFDD0]">
          <h2 className="font-serif text-4xl md:text-6xl text-[#E2725B]">Mahzen & VIP</h2>
          <p className="text-lg opacity-80">
            Özel kutlamalar ve unutulmaz anlar için şarap mahzenimizin gizli dünyasında, sadece size özel hazırlanan bir menü deneyimi.
          </p>
          <button className="border border-[#E2725B] text-[#E2725B] px-6 py-3 hover:bg-[#E2725B] hover:text-[#1A0F0A] transition-colors uppercase tracking-widest text-sm">
            Detaylı Bilgi
          </button>
        </div>
      </div>
    </section>
  );
};

export const ReservationCTA = () => {
  return (
    <section className="py-40 bg-[#E2725B] text-[#1A0F0A] px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"></div>
      <div className="relative z-10 space-y-12 max-w-4xl mx-auto">
        <h2 className="font-serif text-6xl md:text-9xl">Masanız Hazır</h2>
        <p className="text-2xl font-light">Bu ateşe ortak olmak için yerinizi ayırtın.</p>
        <button className="bg-[#1A0F0A] text-[#FFFDD0] px-12 py-5 text-xl tracking-widest hover:bg-[#FFFDD0] hover:text-[#1A0F0A] transition-all">
          REZERVASYON YAP
        </button>
      </div>
    </section>
  );
};

export const ImmersiveFooter = () => {
  return (
    <footer className="bg-[#1A0F0A] text-[#FFFDD0] pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-b border-[#FFFDD0]/20 pb-16">
        <div>
          <h2 className="font-serif text-5xl mb-6 text-[#CC5500]">KÖK <span className="italic">&</span> KÖZ</h2>
          <p className="opacity-60 max-w-sm">Odun ateşinin etrafında toplanıyoruz.</p>
        </div>
        <div className="flex gap-16">
          <div className="space-y-4">
            <h4 className="uppercase tracking-widest text-sm text-[#E2725B]">İletişim</h4>
            <p>0212 555 55 55</p>
            <p>info@kokvekoz.com</p>
          </div>
          <div className="space-y-4">
            <h4 className="uppercase tracking-widest text-sm text-[#E2725B]">Adres</h4>
            <p>Ateş Sokak No:12<br/>Kadıköy, İstanbul</p>
          </div>
        </div>
      </div>
      <div className="text-center opacity-40 text-sm">
        © 2026 KÖK & KÖZ. Tüm Hakları Saklıdır. Tasarım: V3 Premium Mimari.
      </div>
    </footer>
  );
};
