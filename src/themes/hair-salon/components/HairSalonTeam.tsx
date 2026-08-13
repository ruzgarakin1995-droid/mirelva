"use client";

import { motion } from 'framer-motion';

export function HairSalonTeam() {
  const team = [
    {
      name: "Céline V.",
      role: "Kreatif Direktör",
      desc: "Paris moda haftalarının aranan ismi, Eclat'ın kurucu sanatçısı.",
      img: "/hair-salon/hair_stylist_1.jpg"
    },
    {
      name: "Julian M.",
      role: "Master Colorist",
      desc: "Doğal balyaj ve renk geçişleri konusundaki eşsiz vizyonuyla tanınır.",
      img: "/hair-salon/hair_stylist_2.jpg"
    }
  ];

  return (
    <section className="py-32 bg-[#352F2A] px-8 text-[#FDFBF7]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C4A484]"></div>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#FDFBF7]/50">Sanatçılarımız</span>
            <div className="w-8 h-[1px] bg-[#C4A484]"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-[#FDFBF7]"
          >
            Kreatif <span className="italic text-[#C4A484] font-light">Vizyon.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {team.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8">
                {/* Image with grayscale to color effect on hover */}
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                />
                
                {/* Animated Border Reveal */}
                <div className="absolute inset-4 border border-[#FDFBF7]/0 group-hover:border-[#C4A484]/40 transition-colors duration-700 z-10 pointer-events-none"></div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <h3 className="text-3xl font-serif mb-2">{member.name}</h3>
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#C4A484] mb-4">{member.role}</span>
                <p className="font-sans font-light text-sm text-[#FDFBF7]/60 max-w-sm">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
