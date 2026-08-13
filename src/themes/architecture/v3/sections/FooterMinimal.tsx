export default function FooterMinimal() {
  return (
    <footer className="py-12 px-8 lg:px-16 bg-[#111] text-[#777] border-t border-[#333] flex flex-col md:flex-row justify-between items-center text-sm uppercase tracking-widest">
      <div>© 2026 MİMARİ STÜDYO. TÜM HAKLARI SAKLIDIR.</div>
      <div className="flex gap-8 mt-4 md:mt-0">
        <a href="#" className="hover:text-[#f4f4f0] transition-colors">INSTAGRAM</a>
        <a href="#" className="hover:text-[#f4f4f0] transition-colors">LINKEDIN</a>
      </div>
    </footer>
  );
}
