export default function SelectedWorksList() {
  const works = ['Monolit Evi', 'Kanyon Müzesi', 'Beton Kule', 'Gölge Pavyonu', 'Sıfır Noktası'];
  return (
    <section className="py-32 bg-[#f4f4f0] text-[#111]">
      <div className="px-8 lg:px-16">
        {works.map((w, i) => (
          <div key={i} className="group border-b border-[#ccc] py-12 flex items-center justify-between cursor-pointer hover:bg-[#111] hover:text-[#f4f4f0] transition-colors duration-500 px-8 -mx-8">
            <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">{w}</h2>
            <span className="text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">GÖRÜNTÜLE ↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}
