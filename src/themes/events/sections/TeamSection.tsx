"use client";
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const TeamSection = () => {
  const team = [
    { name: "Zehra İsmail Akdemir", role: "Kurucu & Kreatif Direktör", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop" },
    { name: "Mert Yılmaz", role: "Etkinlik Prodüktörü", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop" },
    { name: "Zeynep Aslan", role: "Floral Tasarım Şefi", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop" }
  ];

  return (
    <section className="w-full py-24 bg-[#FDFBF7] text-[#4A403A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <ScrollReveal delay={0.1}>
            <div>
              <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Usta Eller</span>
              <h2 className="text-3xl md:text-5xl font-serif">Rüya <span className="italic text-[#8B7355]">Ekibimiz</span></h2>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={index} delay={0.2 + (index * 0.1)}>
              <div className="group text-center">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded-t-full">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <h3 className="text-xl font-serif text-[#4A403A] mb-1">{member.name}</h3>
                <p className="text-[#8B7355] text-xs tracking-widest uppercase">{member.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;




