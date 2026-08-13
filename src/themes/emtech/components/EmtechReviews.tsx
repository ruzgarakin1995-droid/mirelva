"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const reviews = [
  {
    company: "Aydın GSM Bayi",
    logo: "/emtech-assets/kbs_ekran.jpg",
    text: "Orijinal ekran panellerinin renk kalibrasyonu kusursuz. Müşterilerimiz ekran değişiminden sonra cihazın ilk günkü gibi olduğunu söylüyor. Kargo hızı ise muazzam.",
    rating: 5
  },
  {
    company: "İstanbul GSM Bayi",
    logo: "/emtech-assets/logo.svg",
    text: "Lityum bataryalardaki hücre kalitesi çok yüksek. Döngü testlerinden her zaman başarıyla geçiyor. Emtech ile çalışmaya başladıktan sonra iade oranlarımız sıfıra yaklaştı.",
    rating: 5
  },
  {
    company: "Ankara GSM Bayi",
    logo: null,
    text: "Özellikle entegre ve mikroskobik anakart bileşenleri tedarikinde Türkiye'de tek geçiyorum. Laboratuvar testlerinden geçmiş olması bize montaj aşamasında büyük bir güven veriyor.",
    rating: 5
  }
];

export function EmtechReviews() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="font-mono text-[#0055FF] text-xs tracking-[0.2em] uppercase mb-4">[ Güven Ağı ]</h2>
          <h3 className="text-4xl md:text-5xl font-space font-black text-zinc-950 uppercase tracking-tighter">
            İş Ortaklarımız Ne Diyor?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white p-8 border border-zinc-200 hover:border-[#0055FF] transition-colors relative flex flex-col h-full group shadow-sm hover:shadow-xl hover:shadow-[#0055FF]/10"
            >
              {/* Quote marks aesthetic */}
              <div className="absolute top-6 right-6 font-space text-8xl text-zinc-100 group-hover:text-[#0055FF]/10 transition-colors pointer-events-none select-none leading-none">
                "
              </div>
              
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#0055FF] text-[#0055FF]" />
                ))}
              </div>

              <p className="font-inter text-sm text-zinc-600 leading-relaxed mb-8 flex-1 relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-zinc-100 pt-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 overflow-hidden relative flex items-center justify-center">
                  {review.logo ? (
                     <Image src={review.logo} alt={review.company} fill className="object-cover mix-blend-multiply" />
                  ) : (
                     <span className="font-space font-bold text-zinc-400">AG</span>
                  )}
                </div>
                <div>
                  <h5 className="font-space font-bold text-xs uppercase tracking-widest text-zinc-900">{review.company}</h5>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#0055FF]">Onaylı Bayi</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
