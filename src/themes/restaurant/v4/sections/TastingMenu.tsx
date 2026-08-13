"use client";
import { motion } from "framer-motion";

const menuItems = [
  {
    course: "Başlangıç",
    title: "Deniz Taraklı Trüf Mantarı",
    description: "Kereviz püresi, siyah trüf, havyar, limon köpüğü",
    price: "₺1.200"
  },
  {
    course: "Ara Sıcak",
    title: "Istakoz Ravioli",
    description: "Safranlı tereyağı sosu, taze fesleğen, kurutulmuş domates",
    price: "₺1.850"
  },
  {
    course: "Ana Yemek",
    title: "Kuru Dinlendirilmiş Dana Antrikot",
    description: "Kuşkonmaz, porçini mantarı, bordo şarabı redüksiyonu",
    price: "₺3.400"
  },
  {
    course: "Tatlı",
    title: "Altın Varaklı Bitter Çikolata Küresi",
    description: "Madagaskar vanilyalı dondurma, sıcak ahududu sosu",
    price: "₺950"
  }
];

export default function TastingMenu() {
  return (
    <section className="py-32 bg-[#050505] text-white relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Left side text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">Tadım <span className="italic font-serif text-[#D4AF37]">Menüsü</span></h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mb-8" />
            <p className="text-white/60 font-light leading-relaxed mb-12 max-w-md">
              Şefimizin mevsimsel malzemelerle hazırladığı, modern teknikleri klasik lezzetlerle buluşturan yedi aşamalı imza menümüz.
            </p>
          </motion.div>

          <div className="space-y-12">
            {menuItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="flex justify-between items-baseline mb-2 border-b border-white/5 group-hover:border-[#D4AF37]/30 transition-colors pb-2">
                  <h3 className="text-xl tracking-wide group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                  <span className="text-[#D4AF37]/80 text-sm tracking-wider ml-4">{item.price}</span>
                </div>
                <div className="flex justify-between items-start mt-2">
                  <p className="text-white/40 text-sm font-light italic">{item.description}</p>
                  <span className="text-xs uppercase tracking-widest text-white/30">{item.course}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <button className="text-xs tracking-[0.2em] text-white/70 hover:text-[#D4AF37] border-b border-[#D4AF37]/30 pb-1 transition-colors">
              TÜM MENÜYÜ İNCELE
            </button>
          </motion.div>
        </div>

        {/* Right side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[800px] w-full"
        >
          <div className="absolute inset-0 border border-[#D4AF37]/20 translate-x-4 translate-y-4" />
          <img 
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1740&auto=format&fit=crop" 
            alt="Fine Dining Plate" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
