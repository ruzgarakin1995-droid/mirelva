"use client";
export default function ContactMap() {
  return (
    <section id="contact" className="relative h-[70vh] bg-stone-200">
      <div className="absolute inset-0 bg-stone-300">
         <div className="w-full h-full flex items-center justify-center text-stone-500 font-medium text-xl bg-cover bg-center grayscale opacity-50" style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=41.0082,28.9784&zoom=13&size=2000x1000&sensor=false')" }}></div>
      </div>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-1/2 left-6 md:left-32 -translate-y-1/2 bg-white p-12 shadow-[0_30px_60px_rgba(0,0,0,0.1)] max-w-sm rounded-sm z-10">
        <h3 className="text-3xl font-medium mb-8 text-[var(--primary)]">Bize Ulaşın</h3>
        <p className="text-[var(--muted)] mb-8 font-light leading-relaxed">Sorularınız veya randevu talepleriniz için uzmanlarımızla görüşün.</p>
        <p className="font-medium text-xl border-b border-[var(--border)] pb-4 mb-4 text-[var(--primary)]">0212 555 44 33</p>
        <p className="font-medium text-xl border-b border-[var(--border)] pb-4 mb-10 text-[var(--primary)]">hello@guzellikmerkezi.com</p>
        <button className="w-full py-4 text-white font-medium hover:opacity-80 transition-opacity tracking-widest text-sm uppercase" style={{ backgroundColor: 'var(--primary)' }}>Yol Tarifi Al</button>
      </div>
    </section>
  );
}

