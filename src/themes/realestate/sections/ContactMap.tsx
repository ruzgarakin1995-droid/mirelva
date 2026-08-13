"use client";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export default function ContactMap() {
  return (
    <section id="contact" className="relative h-[700px] bg-stone-200 flex items-center">
      <div className="absolute inset-0 bg-stone-300">
        {/* Placeholder for map */}
        <div className="w-full h-full bg-cover bg-center mix-blend-multiply opacity-50" style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Istanbul&zoom=12&size=2000x700&style=feature:all|element:labels.text.fill|color:0x333333&style=feature:all|element:labels.text.stroke|color:0xffffff&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative|element:geometry.fill|color:0xfefefe&style=feature:administrative|element:geometry.stroke|color:0xfefefe&style=feature:landscape|element:geometry|color:0xf5f5f5&style=feature:poi|element:geometry|color:0xf5f5f5&style=feature:road.highway|element:geometry.fill|color:0xffffff&style=feature:road.highway|element:geometry.stroke|color:0xffffff&style=feature:road.arterial|element:geometry.fill|color:0xffffff&style=feature:road.arterial|element:geometry.stroke|color:0xffffff&style=feature:road.local|element:geometry.fill|color:0xffffff&style=feature:road.local|element:geometry.stroke|color:0xffffff&style=feature:transit|element:geometry|color:0xf5f5f5&style=feature:water|element:geometry|color:0xc9c9c9')" }} />
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <ScrollReveal variant="fade-up" className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl max-w-lg">
          <h2 className="text-4xl font-black text-stone-900 mb-2">
            <TextReveal text="Bize Ulaşın" highlightedWords={["Ulaşın"]} highlightClassName="text-[var(--accent)]" />
          </h2>
          <p className="text-stone-500 font-medium mb-8">Lüks emlak dünyasında yerinizi almak için uzmanlarımızla görüşün.</p>
          
          <form className="space-y-4">
            <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-stone-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all font-medium" />
            <input type="tel" placeholder="Telefon Numaranız" className="w-full bg-stone-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all font-medium" />
            <textarea placeholder="Size nasıl yardımcı olabiliriz?" rows={4} className="w-full bg-stone-50 p-4 rounded-xl outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all font-medium resize-none" />
            <button className="w-full bg-[var(--primary)] text-white py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-[var(--accent)] transition-colors mt-4">
              Gönder
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

