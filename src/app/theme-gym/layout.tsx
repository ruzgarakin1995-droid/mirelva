import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "./components/SmoothScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vibe Gym | Enerjini Keşfet",
  description: "Ferah, eğlenceli ve yepyeni bir fitness deneyimi.",
};

export default function GymLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 ${inter.className}`}>
      <SmoothScroll>
        <Header />
        <main>{children}</main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}
