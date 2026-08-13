import Link from 'next/link';

export default function BeautyHomePage() {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" 
            alt="Spa Beauty Clinic" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FCFAEF]/90 via-[#FCFAEF]/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="block text-sm font-medium tracking-widest text-[#B47C84] uppercase mb-3">
              Yenilenme Zamanı
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-tight mb-6">
              Doğal güzelliğinizi <br/> <span className="font-serif italic text-[#B47C84]">keşfedin.</span>
            </h1>
            <p className="text-lg text-gray-700 mb-10 max-w-lg font-light leading-relaxed">
              Modern medikal estetik yaklaşımları ve premium cilt bakım ritüelleri ile kendinize hak ettiğiniz değeri verin.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/beauty/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#B47C84] text-base font-medium rounded-full text-white bg-[#B47C84] hover:bg-transparent hover:text-[#B47C84] transition-all duration-300"
              >
                Hizmetlerimizi İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Intro Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Premium <span className="font-semibold text-[#B47C84]">Klinik Deneyimi</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#E8C5C8] mx-auto mb-6"></div>
            <p className="text-gray-500 font-light">
              Alanında uzman doktorlarımız ve son teknoloji cihazlarımızla, en güvenilir ve etkili sonuçları elde etmeniz için buradayız.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Medikal Estetik",
                desc: "Ameliyatsız yüz gençleştirme, botoks ve dolgu uygulamaları.",
                img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Gelişmiş Cilt Bakımı",
                desc: "Hydrafacial ve kişiye özel medikal cilt bakım protokolleri.",
                img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Bölgesel İncelme",
                desc: "Son teknoloji cihazlarla ameliyatsız vücut şekillendirme.",
                img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2000&auto=format&fit=crop"
              }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-80 mb-6 overflow-hidden rounded-2xl shadow-sm">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#B47C84]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 font-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FAF5F6]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Yeni bir size <span className="font-serif italic text-[#B47C84]">merhaba deyin.</span>
          </h2>
          <p className="text-gray-600 mb-10 font-light">
            Ücretsiz ilk danışmanlık görüşmesi için randevunuzu hemen oluşturun.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-medium rounded-full text-[#B47C84] bg-white border border-[#E8C5C8] hover:bg-[#B47C84] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Randevu Oluştur
          </Link>
        </div>
      </section>
    </div>
  );
}
