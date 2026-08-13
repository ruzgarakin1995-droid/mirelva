import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'Manikür & Jel Oje',
    desc: 'Kusursuz manikür ve asitsiz kalıcı oje uygulamalarıyla ellerinizde sanat eseri.',
    img: '/beauty/beauty_nails_1786272030225.jpg'
  },
  {
    id: '02',
    title: 'Kaş & Kirpik',
    desc: 'Göz şeklinize ve yüz anatomisine en uygun tasarımlarla bakışlarınıza derinlik katıyoruz.',
    img: '/beauty/beauty_lashes_1786272039522.jpg'
  },
  {
    id: '03',
    title: 'Pedikür & Ayak Bakımı',
    desc: 'Medikal standartlarda sterilizasyon ve podolojik yaklaşımlarla ayak sağlığınız güvende.',
    img: '/beauty/beauty_pedicure.jpg'
  }
];

export function BeautyServices() {
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
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">La Ville Dokunuşu</span>
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
