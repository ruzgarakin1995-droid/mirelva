import React from 'react';
import Link from 'next/link';
import { ChefHat, Leaf, Utensils, Star, ArrowRight, Award, History, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop" alt="Restaurant Interior" className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-950/60 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-orange-500"></span>
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Köhne Hikayesi</span>
            <span className="h-px w-12 bg-orange-500"></span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.85]">
            Mükemmellik <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Bir Gelenektir.</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-2xl font-medium max-w-2xl mx-auto mt-8">
            2010'dan beri gastronomi dünyasında standartları yeniden belirliyoruz.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Köklerimiz</span>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 uppercase tracking-tighter mb-8 leading-tight">
              Küçük Bir Mutfaktan <br/> Ödüllü Bir Restorana
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-6">
              Her şey, baş şefimiz Ege'nin İtalya'nın küçük bir kasabasında yerel malzemelerin gücünü keşfetmesiyle başladı. Türkiye'ye döndüğünde tek bir amacı vardı: Anadolu'nun zengin yerel ürünlerini, modern Avrupa teknikleriyle birleştirmek.
            </p>
            <p className="text-stone-500 text-lg leading-relaxed mb-10">
              Bugün Köhne, sadece bir restoran değil; sanatın, tutkunun ve misafirperverliğin buluştuğu bir gastronomi enstitüsüdür.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-black text-stone-900 mb-1">15+</div>
                <div className="text-sm font-bold text-orange-500 uppercase tracking-wider">Yıllık Tecrübe</div>
              </div>
              <div>
                <div className="text-4xl font-black text-stone-900 mb-1">3</div>
                <div className="text-sm font-bold text-orange-500 uppercase tracking-wider">Michelin Yıldızı</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-100 rounded-[3rem] -z-10 transform -rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" alt="Chef Preparing Food" className="w-full h-[600px] object-cover rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Değerlerimiz</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Taviz Vermediğimiz <br/> Prensiplerimiz</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Sürdürülebilirlik", desc: "Mutfağımızda sıfır atık prensibiyle çalışıyor, malzemelerimizin %80'ini doğrudan yerel üreticilerden sağlıyoruz." },
              { icon: Heart, title: "Tutku", desc: "Her detayı önemsiyoruz. Servis edilen her tabak, şeflerimizin elinden çıkan bir sanat eseri titizliğinde hazırlanır." },
              { icon: Award, title: "Mükemmeliyetçilik", desc: "Sadece yemekte değil, mekanda geçirdiğiniz her saniyede kusursuz bir deneyim yaşamanız için çalışıyoruz." },
            ].map((value, i) => (
              <div key={i} className="bg-stone-950 p-10 rounded-3xl border border-stone-800 hover:border-orange-500 transition-colors group">
                <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{value.title}</h3>
                <p className="text-stone-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Chef */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop" alt="Executive Chef" className="w-full h-[700px] object-cover rounded-3xl shadow-xl" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Mutfak Şefi</span>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 uppercase tracking-tighter mb-8 leading-tight">
              Ege M.
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-6 italic">
              "Yemek yapmak benim için bir zorunluluk değil, hayata karşı hissettiğim şükranı ifade etme biçimimdir. Misafirlerimizin yüzündeki ilk tebessüm, benim için en büyük ödüldür."
            </p>
            <p className="text-stone-500 leading-relaxed mb-10">
              Le Cordon Bleu mezunu Ege, Paris ve Tokyo'daki Michelin yıldızlı restoranlarda edindiği tecrübeleri Köhne mutfağına taşıyor. Uluslararası yarışmalarda kazandığı pek çok ödülle, Türkiye'nin en inovatif şeflerinden biri olarak gösteriliyor.
            </p>
            <Link href="/restaurant/reservation" className="bg-stone-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors inline-flex items-center gap-2">
              Onun Elinden Yiyin <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
