export default function VideoShowcase() {
  return (
    <section className="h-screen w-full relative bg-[#111]">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Video Cover" />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <button className="text-[#f4f4f0] text-3xl uppercase tracking-[0.5em] font-bold border-2 border-[#f4f4f0] px-12 py-6 hover:bg-[#f4f4f0] hover:text-[#111] transition-all duration-500">
          Filmi İzle
        </button>
      </div>
    </section>
  );
}
