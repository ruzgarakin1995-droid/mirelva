"use client";
export default function Footer({ name }: { name: string }) {
  return (
    <footer className="bg-[#111] text-white pt-32 pb-12 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-16 mb-32">
        <div className="col-span-2">
          <h2 className="font-medium tracking-tighter mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>{name}</h2>
          <p className="text-stone-400 max-w-sm text-lg font-light leading-relaxed">Güzellik, bilimin sanatla buluştuğu noktada başlar. Premium bir deneyim için bizi ziyaret edin.</p>
        </div>
        <div>
          <h4 className="font-bold tracking-widest text-sm uppercase mb-6 text-stone-500">Sayfalar</h4>
          <ul className="space-y-4 text-stone-300 font-light text-lg">
            <li><a href="#" className="hover:text-white hover:pl-2 transition-all">Hikayemiz</a></li>
            <li><a href="#" className="hover:text-white hover:pl-2 transition-all">Hizmetler</a></li>
            <li><a href="#" className="hover:text-white hover:pl-2 transition-all">Ekibimiz</a></li>
            <li><a href="#" className="hover:text-white hover:pl-2 transition-all">İletişim</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold tracking-widest text-sm uppercase mb-6 text-stone-500">İletişim</h4>
          <p className="text-stone-300 font-light text-lg leading-relaxed mb-6">
            Nispetiye Cad. Lüks Plaza No:1<br/>Beşiktaş, İstanbul
          </p>
          <p className="text-stone-300 font-light text-lg">0212 555 44 33</p>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-600 text-sm font-light">
        <p>&copy; 2026 {name}. Tüm hakları saklıdır.</p>
        <div className="space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors"></a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}


