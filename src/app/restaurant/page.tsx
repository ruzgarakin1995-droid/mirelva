import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Clock, MapPin, ChefHat, Award, Wine, Users } from 'lucide-react';

export default function RestaurantHome() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-orange-500"></span>
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Fine Dining Deneyimi</span>
            <span className="h-px w-12 bg-orange-500"></span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
            Lezzetin <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Sanata</span> Dönüştüğü Yer.
          </h1>
          <p className="text-stone-300 text-lg md:text-2xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Geleneksel tariflerin modern mutfak teknikleriyle yeniden yorumlandığı eşsiz bir gastronomi yolculuğuna davetlisiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/restaurant/menu" className="bg-orange-500 text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors active:scale-95 flex items-center justify-center gap-3 text-sm shadow-[0_0_30px_rgba(249,115,22,0.4)]">
              Sipariş Ver <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/restaurant/reservation" className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-colors active:scale-95 flex items-center justify-center text-sm">
              Masa Ayırt
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-white text-xs uppercase tracking-widest font-bold">Keşfet</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-white border-b border-stone-100 relative z-20 -mt-16 mx-6 md:mx-auto rounded-3xl shadow-2xl p-8 md:p-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-100">
          <div className="flex items-center gap-5 md:px-6">
            <div className="w-14 h-14 bg-stone-50 border border-stone-100 text-orange-500 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-stone-900 uppercase tracking-tight text-sm mb-1">Çalışma Saatleri</h3>
              <p className="text-sm text-stone-500 font-medium">Her Gün: 10:00 - 23:30</p>
            </div>
          </div>
          <div className="flex items-center gap-5 md:px-6 pt-6 md:pt-0">
            <div className="w-14 h-14 bg-stone-50 border border-stone-100 text-orange-500 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-stone-900 uppercase tracking-tight text-sm mb-1">Lokasyon</h3>
              <p className="text-sm text-stone-500 font-medium">Nişantaşı, Şişli / İstanbul</p>
            </div>
          </div>
          <div className="flex items-center gap-5 md:px-6 pt-6 md:pt-0">
            <div className="w-14 h-14 bg-stone-50 border border-stone-100 text-orange-500 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <Star className="w-6 h-6 fill-orange-500" />
            </div>
            <div>
              <h3 className="font-black text-stone-900 uppercase tracking-tight text-sm mb-1">Değerlendirme</h3>
              <p className="text-sm text-stone-500 font-medium">4.9/5 (1.2k+ Yorum)</p>
            </div>
          </div>
          <div className="flex items-center gap-5 md:px-6 pt-6 md:pt-0">
            <div className="w-14 h-14 bg-stone-50 border border-stone-100 text-orange-500 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-stone-900 uppercase tracking-tight text-sm mb-1">Ödüller</h3>
              <p className="text-sm text-stone-500 font-medium">Michelin Guide 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Business Intro */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-100 rounded-[3rem] -z-10 transform rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=800&auto=format&fit=crop" alt="Chef Cooking" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover relative z-10" />
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-stone-100 z-20">
              <div className="text-orange-500 font-black text-4xl md:text-5xl mb-1">15+</div>
              <div className="text-stone-800 font-bold uppercase tracking-tight text-xs md:text-sm">Yıllık Deneyim</div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Köhne Hakkında</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-stone-900 uppercase tracking-tighter mb-6 leading-tight">
              Tutkuyla Hazırlanan Her Tabak Bir Hikaye Anlatır.
            </h2>
            <p className="text-stone-500 text-base md:text-lg leading-relaxed mb-8">
              2010 yılında küçük bir hayalle başlayan Köhne, bugün şehrin en prestijli lezzet duraklarından biri haline geldi. Amacımız sadece karın doyurmak değil; beş duyunuza hitap eden, unutulmaz bir deneyim yaşatmaktır.
            </p>
            <ul className="space-y-3 mb-10">
              {['Günlük Taze Ürün Tedariği', 'Özel Kav ve Şarap Eşleşmesi', 'Ödüllü Executive Şefler', 'Kusursuz Misafirperverlik'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-stone-700 font-bold text-sm md:text-base">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                    <CheckIcon />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/restaurant/about" className="text-stone-900 font-black uppercase tracking-wider text-sm border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition-colors inline-flex items-center gap-2">
              Hikayemizi Keşfedin <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 flex justify-center items-center gap-2">
              <ChefHat className="w-5 h-5"/> İmza Lezzetlerimiz
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Şefin Seçimleri</h2>
            <p className="text-stone-400">Mutfak ekibimizin en gurur duyduğu, misafirlerimizin favorisi olan özel reçeteler.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Truffle Lokum Beef", desc: "Ağır ateşte pişmiş dana lokum, trüf mantarlı patates püresi ve özel jus sos ile.", price: "450 ₺", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop" },
              { name: "Deniz Mahsüllü Risotto", desc: "Taze karides, midye, kalamar ve safranlı İtalyan arborio pirinci.", price: "380 ₺", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop" },
              { name: "Çikolatalı Volkan", desc: "Belçika çikolatası, orman meyveleri ve ev yapımı vanilyalı dondurma.", price: "190 ₺", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop" },
            ].map((dish, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3">{dish.name}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-6 flex-1">{dish.desc}</p>
                  <div className="flex justify-between items-center pt-6 border-t border-stone-800 mt-auto">
                    <span className="text-orange-500 font-black text-xl">{dish.price}</span>
                    <Link href="/restaurant/menu" className="text-white hover:text-orange-500 font-bold uppercase tracking-wider text-xs flex items-center gap-2 transition-colors">
                      Sipariş Ver <ArrowRight className="w-4 h-4"/>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Zengin Menü</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-stone-900">Her Damak Tadına Uygun Seçenekler</h2>
          </div>
          <Link href="/restaurant/menu" className="hidden md:flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors text-sm shrink-0">
            Tüm Menüyü İncele <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { name: "Başlangıçlar", size: "col-span-1 md:col-span-2 h-[250px] md:h-[300px]", img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop" },
            { name: "Ana Yemekler", size: "col-span-1 h-[250px] md:h-[300px]", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" },
            { name: "Deniz Ürünleri", size: "col-span-1 h-[250px] md:h-[300px]", img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800&auto=format&fit=crop" },
            { name: "Tatlılar", size: "col-span-1 h-[250px] md:h-[300px]", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop" },
            { name: "Özel Şaraplar", size: "col-span-1 h-[250px] md:h-[300px]", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop" },
            { name: "İçecekler", size: "col-span-1 md:col-span-2 lg:col-span-3 h-[250px] md:h-[300px]", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop" }
          ].map((cat, i) => (
            <Link href="/restaurant/menu" key={i} className={`group relative rounded-3xl overflow-hidden cursor-pointer ${cat.size}`}>
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                <h3 className="text-white font-black text-2xl uppercase tracking-tight">{cat.name}</h3>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-orange-500 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/restaurant/menu" className="md:hidden mt-8 flex w-full justify-center items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors text-sm">
          Tüm Menüyü İncele <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Atmosphere / Amenities */}
      <section className="py-24 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { icon: Users, title: "Özel Etkinlikler", desc: "İş yemekleri ve özel kutlamalarınız için VIP salonlarımız mevcuttur." },
            { icon: Wine, title: "Geniş Kav", desc: "Sommelier'lerimiz tarafından özenle seçilmiş 200+ çeşit yerli ve yabancı şarap." },
            { icon: MapPin, title: "Vale Hizmeti", desc: "Aracınızı güvenle teslim edebileceğiniz ücretsiz vale ve otopark hizmeti." },
            { icon: ChefHat, title: "Açık Mutfak", desc: "Şeflerimizin şovunu izleyebileceğiniz, şeffaf ve hijyenik açık mutfak deneyimi." },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-md mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 uppercase tracking-tight mb-3">{feature.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Misafir Yorumları</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-stone-900">Bizim İçin Ne Dediler?</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Pelin K.", role: "Gurme Yazar", comment: "İstanbul'da yediğim en iyi deniz mahsüllü risotto buradaydı. Atmosfer ve servis tek kelimeyle kusursuz.", rating: 5 },
            { name: "Caner T.", role: "İş İnsanı", comment: "Önemli iş yemeklerimiz için her zaman ilk tercihimiz. Özel odaları ve vale hizmeti çok büyük avantaj.", rating: 5 },
            { name: "Zeynep A.", role: "Mimar", comment: "Sadece yemekler değil, mekanın iç mimarisi ve aydınlatması da muazzam. Kesinlikle tavsiye ederim.", rating: 5 },
          ].map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
              <div className="flex gap-1 text-orange-500 mb-6">
                {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-stone-600 text-lg italic mb-8">"{review.comment}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center font-black text-stone-500">
                  {review.name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-stone-900">{review.name}</h4>
                  <p className="text-stone-500 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop" alt="Pattern" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-tight drop-shadow-lg">Bu Akşam Bizimle <br/> Olmaya Ne Dersiniz?</h2>
          <p className="text-stone-300 text-lg md:text-xl font-medium mb-12 drop-shadow-md">Yerinizi hemen ayırtın, size özel hazırladığımız eşsiz lezzetleri deneyimleyin.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/restaurant/reservation" className="bg-orange-500 text-white px-10 py-5 rounded-full font-black uppercase tracking-wider hover:bg-orange-600 transition-colors active:scale-95 shadow-[0_0_30px_rgba(249,115,22,0.4)] text-sm">
              Rezervasyon Yap
            </Link>
            <Link href="/restaurant/menu" className="bg-white text-stone-900 px-10 py-5 rounded-full font-black uppercase tracking-wider hover:bg-stone-100 transition-colors active:scale-95 shadow-xl text-sm">
              Eve Sipariş Ver
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3334 1L4.99998 8.33333L1.66665 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
