import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'Q Switch Epilasyon',
    desc: 'Son teknoloji Q-Switch lazer sistemleriyle istenmeyen tüylerden kalıcı ve konforlu bir şekilde kurtulun. Her cilt tipine uygun güvenilir çözüm.',
    img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Masseter Botoksu',
    desc: 'Çene kaslarını rahatlatarak hem diş sıkma (bruksizm) problemlerini giderir hem de yüz ovalini incelterek V-Shape (V Yüz) görünümü sağlar.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Karbon Peeling',
    desc: 'Cilt lekeleri, gözenek sıkılaştırma ve anti-aging için uygulanan, lazerle entegre çalışan derinlemesine cilt yenileme protokolü.',
    img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop'
  }
];

export function LasisServices() {
  return (
    <section id="hizmetler" className="py-32 px-6 lg:px-8 bg-[#FAF5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">Lasis Klinik Dokunuşu</span>
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#3E2B2B]"
          >
            İmza Hizmetlerimiz
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-full mb-6">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#3E2B2B]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="text-center px-4">
                <span className="text-[#D4A373] font-serif italic text-lg mb-2 block">{service.id}.</span>
                <h3 className="text-2xl font-serif text-[#3E2B2B] mb-3">{service.title}</h3>
                <p className="font-sans text-sm text-[#3E2B2B]/70 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
