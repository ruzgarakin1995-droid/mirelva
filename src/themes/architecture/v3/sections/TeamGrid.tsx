export default function TeamGrid() {
  return (
    <section className="py-40 px-8 lg:px-16 bg-[#111] text-[#f4f4f0]">
      <h2 className="text-8xl font-bold uppercase mb-20">Ortaklar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {[1, 2].map(i => (
          <div key={i} className="group">
            <div className="aspect-square overflow-hidden bg-[#222] mb-6">
              <img src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop&sig=${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Partner" />
            </div>
            <h3 className="text-4xl font-bold uppercase">Mimar Adı {i}</h3>
            <p className="text-xl text-[#777] uppercase tracking-widest mt-2">Kurucu Ortak</p>
          </div>
        ))}
      </div>
    </section>
  );
}
