"use client";

import { motion } from 'framer-motion';

export function HairSalonServices() {
  const services = [
    {
      title: "İmza Kesim & Şekillendirme",
      desc: "Yüz hatlarınıza ve saç yapınıza en uygun kişiselleştirilmiş kesim tasarımı. Analiz, yıkama, premium bakım ve fön dahildir.",
      price: "₺1,200",
      delay: 0.1
    },
    {
      title: "Balyaj & Ombre Sanatı",
      desc: "Güneşten açılmış gibi doğal yansımalar veya dramatik geçişler. Saçın dokusuna zarar vermeyen özel açıcı formüllerle uygulanır.",
      price: "₺3,500+",
      delay: 0.2
    },
    {
      title: "Renk Değişimi & Dip Boya",
      desc: "Amonyaksız, saç derisine dost organik boyalarla dip kapatma veya komple yeni bir renk yaratma işlemi.",
      price: "₺1,800+",
      delay: 0.3
    },
    {
      title: "Keratin & Botox Bakımı",
      desc: "Yıpranmış saç tellerini onaran, elektriklenmeyi önleyen ve aylarca süren ipeksi düzlük sağlayan yoğun protein yüklemesi.",
      price: "₺2,500",
      delay: 0.4
    }
  ];

  return (
    <section className="py-32 bg-[#352F2A] text-[#FDFBF7] px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-[#C4A484]"></div>
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#FDFBF7]/60">Menü</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif leading-tight"
            >
              Ayrıcalıklı <span className="italic font-light text-[#C4A484]">Hizmetler.</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sans font-light text-[#FDFBF7]/60 max-w-sm text-sm"
          >
            Her saç tipi farklı bir hikaye anlatır. Servislerimiz, sizin hikayenize özel olarak tasarlanmıştır.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 gap-0 border-t border-[#FDFBF7]/10">
          {services.map((srv, i) => (
            <motion.div 
              key={srv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: srv.delay, duration: 0.8 }}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-[#FDFBF7]/10 hover:border-[#C4A484] transition-colors duration-500 gap-8"
            >
              <div className="flex-1 md:pr-12">
                <h3 className="text-2xl font-serif text-[#FDFBF7] group-hover:text-[#C4A484] transition-colors duration-500 mb-4">{srv.title}</h3>
                <p className="font-sans font-light text-[#FDFBF7]/50 text-sm leading-relaxed">{srv.desc}</p>
              </div>
              
              <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                <span className="font-sans text-lg text-[#FDFBF7]">{srv.price}</span>
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
                  className="w-12 h-12 rounded-full border border-[#FDFBF7]/20 flex items-center justify-center group-hover:bg-[#C4A484] group-hover:border-[#C4A484] transition-all duration-500"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#FDFBF7] group-hover:text-[#352F2A] transition-colors">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
