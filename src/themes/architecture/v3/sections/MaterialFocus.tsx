export default function MaterialFocus() {
  return (
    <section className="py-40 px-8 lg:px-16 bg-[#111] text-[#f4f4f0] grid grid-cols-12 gap-8 items-center">
      <div className="col-span-12 md:col-span-6 group">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" alt="Concrete" />
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 md:pl-16">
        <h2 className="text-7xl font-bold uppercase mb-8 leading-none">Brüt<br/>Beton</h2>
        <p className="text-2xl text-[#aaa]">Malzemenin en saf hali. Saklamadan, süslemeden, olduğu gibi. Kusurlarıyla mükemmel bir doku arayışı.</p>
      </div>
    </section>
  );
}
