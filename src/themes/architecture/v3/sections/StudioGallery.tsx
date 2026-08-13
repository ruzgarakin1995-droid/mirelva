export default function StudioGallery() {
  return (
    <section className="py-32 px-8 lg:px-16 bg-[#f4f4f0]">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8 group overflow-hidden">
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop" className="w-full h-[60vh] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Studio" />
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-between">
          <h2 className="text-6xl font-bold uppercase leading-none">Stüdyo<br/>Kültürü</h2>
          <p className="text-xl uppercase tracking-wider">Fikirlerin çarpıştığı,<br/>formların doğduğu yer.</p>
        </div>
      </div>
    </section>
  );
}
