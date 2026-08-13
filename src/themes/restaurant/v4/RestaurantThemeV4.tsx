import Hero from "./sections/Hero";
import TastingMenu from "./sections/TastingMenu";
import Ambiance from "./sections/Ambiance";
import Reservation from "./sections/Reservation";
import Footer from "./sections/Footer";

export default function RestaurantThemeV4() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-[#D4AF37] selection:text-black">
      <Hero />
      <TastingMenu />
      <Ambiance />
      <Reservation />
      <Footer />
    </main>
  );
}
