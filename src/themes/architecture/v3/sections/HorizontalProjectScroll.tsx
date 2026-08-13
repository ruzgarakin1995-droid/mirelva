export default function HorizontalProjectScroll() {
  return (
    <section className="py-32 bg-[#111] text-[#f4f4f0] overflow-hidden">
      <div className="px-8 lg:px-16 mb-16">
        <h2 className="text-8xl font-bold uppercase">Seçkiler</h2>
      </div>
      <div className="flex gap-8 px-8 lg:px-16 overflow-x-auto pb-16 snap-x hide-scrollbar">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="min-w-[80vw] md:min-w-[40vw] group snap-center cursor-none">
            <div className="aspect-[3/4] bg-[#222] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
              <img src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop&sig=${i}`} alt="Project" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 border border-transparent group-hover:border-[#f4f4f0] transition-colors duration-1000 m-8" />
            </div>
            <div className="mt-8 flex justify-between items-center border-t border-[#333] pt-4">
              <h3 className="text-3xl font-bold uppercase">Proje_{i}</h3>
              <span className="text-sm tracking-widest">2026</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
