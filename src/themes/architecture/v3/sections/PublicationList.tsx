export default function PublicationList() {
  return (
    <section className="py-32 px-8 lg:px-16 bg-[#f4f4f0] text-[#111]">
      <h2 className="text-5xl font-bold uppercase mb-16">Yayınlar</h2>
      <div className="grid grid-cols-12 gap-y-4 text-xl uppercase tracking-widest font-bold border-b-2 border-[#111] pb-4 mb-8">
        <div className="col-span-3">Yıl</div>
        <div className="col-span-6">Dergi</div>
        <div className="col-span-3 text-right">Proje</div>
      </div>
      {[
        { y: '2026', m: 'El Croquis', p: 'Monolit Evi' },
        { y: '2025', m: 'Casabella', p: 'Gölge Pavyonu' },
        { y: '2024', m: 'Domus', p: 'Sıfır Noktası' }
      ].map((p, i) => (
        <div key={i} className="grid grid-cols-12 gap-y-4 text-xl border-b border-[#ccc] py-6 hover:bg-[#111] hover:text-[#f4f4f0] transition-colors duration-300 -mx-8 px-8 cursor-pointer">
          <div className="col-span-3">{p.y}</div>
          <div className="col-span-6">{p.m}</div>
          <div className="col-span-3 text-right">{p.p}</div>
        </div>
      ))}
    </section>
  );
}
