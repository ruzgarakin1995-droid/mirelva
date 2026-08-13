"use client";
import React from 'react';
import { Quote } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const TestimonialsSection = () => {
  return (
    <section className="w-full py-24 bg-[#E8DCC4] text-[#4A403A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <ScrollReveal delay={0.1}>
          <Quote className="w-16 h-16 text-[#C19A6B] mb-8 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-serif max-w-4xl leading-relaxed mb-12">
            "Hayallerimizin çok ötesinde bir geceydi. Her detayın böylesine kusursuz, böylesine zarif düşünüldüğü bir organizasyona sahip olmak en büyük şansımızdı."
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#C19A6B]">
              <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop" alt="Client" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-serif text-xl">Aylin & Caner</h4>
            <p className="text-sm tracking-widest uppercase text-[#8B7355] mt-1">Çırağan Sarayı Düğünü</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;




