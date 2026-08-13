import { motion } from 'framer-motion';

export function LasisMakeup() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-start overflow-hidden">
      {/* Background Image with Parallax-like slow scale */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center md:bg-[center_top_-5rem]"
        />
        {/* Gradient Overlay for Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5F0]/95 via-[#FAF5F0]/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-24 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="w-8 h-[1px] bg-[#D4A373]"></div>
             <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">Medikal Estetik</span>
          </div>
          
          <h2 className="font-serif text-5xl md:text-7xl text-[#3E2B2B] mb-6 leading-[1.1]">
            Gençliğin <br/>
            <span className="italic text-[#D4A373]">Sırrı.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-[#3E2B2B]/80 leading-relaxed mb-10">
            Uzman doktorumuz tarafından uygulanan, yüz hatlarınızı en doğal şekilde vurgulayan özel teknikler. Botoks, dolgu ve medikal cilt yenileme işlemleriyle zamanın etkilerini geri çeviren kalıcı çözümler sunuyoruz.
          </p>
          
          <button onClick={() => window.dispatchEvent(new Event('openLasisBooking'))} className="bg-[#3E2B2B] text-[#FAF5F0] font-sans font-medium text-[11px] tracking-[0.2em] uppercase px-10 py-4 rounded-full hover:bg-[#D4A373] transition-all duration-500 shadow-xl">
            Randevu Oluştur
          </button>
        </motion.div>
      </div>
    </section>
  );
}
