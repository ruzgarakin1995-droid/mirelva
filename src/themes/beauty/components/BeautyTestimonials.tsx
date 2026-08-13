import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "Hayatımda gördüğüm en zarif güzellik salonu. Tırnak detaylarım için kullandıkları ürünler inanılmaz kaliteli ve 3 hafta geçmesine rağmen ilk günkü gibi duruyor.",
    author: "Elif S.",
    service: "VIP Protez Tırnak"
  },
  {
    text: "Gelin paketini tercih ettim ve makyajımdan ipek kirpiğime kadar her şey kusursuzdu. Düğün günümde bana kendimi bir prenses gibi hissettirdiler. Tüm ekibe teşekkürler.",
    author: "Büşra K.",
    service: "VIP Gelin Paketi"
  },
  {
    text: "La Ville Refresh paketiyle resmen yenilendim! Cilt bakımında kullandıkları organik serumlar ve o dingin atmosferi başka hiçbir yerde bulamadım. Kesinlikle tavsiye ederim.",
    author: "Merve A.",
    service: "Cilt Bakımı & SPA"
  }
];

export function BeautyTestimonials() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-[#FAF5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
           <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#3E2B2B]"
          >
            Sizden <span className="italic text-[#D4A373]">Gelenler</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col relative"
            >
              <span className="font-serif text-8xl text-[#D4A373]/20 absolute -top-10 -left-4 leading-none">"</span>
              <p className="font-sans text-[#3E2B2B]/70 leading-relaxed italic mb-8 relative z-10 text-sm md:text-base">
                {item.text}
              </p>
              <div className="mt-auto">
                <span className="block font-serif text-xl text-[#3E2B2B] mb-1">{item.author}</span>
                <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#D4A373]">{item.service}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
