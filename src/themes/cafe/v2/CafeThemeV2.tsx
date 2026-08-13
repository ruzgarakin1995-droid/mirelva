import { Hero } from "./sections/Hero";
import { Menu } from "./sections/Menu";
import { Story } from "./sections/Story";
import { Footer } from "./sections/Footer";

export default function CafeThemeV2() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#2C2825] selection:text-[#FAF7F2]">
      <Hero />
      <Story />
      <Menu />
      <Footer />
    </main>
  );
}
