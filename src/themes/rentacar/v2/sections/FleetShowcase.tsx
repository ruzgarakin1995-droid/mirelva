"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Settings } from 'lucide-react';

const cars = [
  {
    name: "Mercedes-Benz S-Class",
    subtitle: "Birinci Sınıf Sedan",
    desc: "Mükemmelliğin tanımı. Sessiz, pürüzsüz ve en üst düzey teknolojiyle donatılmış eşsiz bir sürüş deneyimi.",
    price: "₺15.000",
    specs: { seats: "4 Kişi", luggage: "3 Bavul", trans: "Otomatik" },
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2500&auto=format&fit=crop"
  },
  {
    name: "Rolls Royce Ghost",
    subtitle: "Ultra Lüks",
    desc: "İngiliz zarafetinin zirvesi. Yolculuğunuzu bir sanat eserine dönüştüren kusursuz el işçiliği.",
    price: "₺45.000",
    specs: { seats: "4 Kişi", luggage: "2 Bavul", trans: "Otomatik" },
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2500&auto=format&fit=crop"
  },
  {
    name: "Range Rover",
    subtitle: "Lüks SUV",
    desc: "Güç ve prestijin kusursuz birleşimi. Hem şehirde hem de doğada en üstün konfor standartları.",
    price: "₺22.000",
    specs: { seats: "5 Kişi", luggage: "4 Bavul", trans: "Otomatik" },
    img: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=2500&auto=format&fit=crop"
  }
];

export const FleetShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-[#0a0a0a]" id="filo">
      {/* Pinned Title */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-[12vw] font-black text-white/5 tracking-tighter uppercase">Koleksiyon</h2>
      </div>

      <div className="relative z-10">
        {cars.map((car, index) => {
          return <CarSection key={index} car={car} index={index} />;
        })}
      </div>
    </section>
  );
};

const CarSection = ({ car, index }: { car: typeof cars[0], index: number }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <div ref={sectionRef} className="h-[120vh] w-full flex items-center justify-center py-20">
      <div className="max-w-[1400px] w-full px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        <motion.div 
          style={{ scale, opacity }} 
          className="w-full md:w-3/5 aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <img src={car.img} alt={car.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </motion.div>

        <motion.div 
          style={{ y: textY, opacity }} 
          className="w-full md:w-2/5 flex flex-col text-white"
        >
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">{car.subtitle}</span>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{car.name}</h3>
          <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
            {car.desc}
          </p>

          <div className="grid grid-cols-3 gap-6 mb-12 py-8 border-y border-white/10">
            <div className="flex flex-col gap-2">
              <Users className="w-5 h-5 text-white/40" />
              <span className="text-sm font-medium">{car.specs.seats}</span>
            </div>
            <div className="flex flex-col gap-2">
              <Briefcase className="w-5 h-5 text-white/40" />
              <span className="text-sm font-medium">{car.specs.luggage}</span>
            </div>
            <div className="flex flex-col gap-2">
              <Settings className="w-5 h-5 text-white/40" />
              <span className="text-sm font-medium">{car.specs.trans}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-white/40 uppercase tracking-widest">Günlük</span>
              <p className="text-3xl font-bold">{car.price}</p>
            </div>
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2 group">
              Kirala <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
