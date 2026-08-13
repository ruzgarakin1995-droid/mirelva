import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eclat Hair Studio | Premium Women's Salon",
  description: "Modern kadının doğal güzelliğini ortaya çıkaran, lüks ve sofistike saç tasarım stüdyosu.",
};

export default function HairSalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased font-sans">
      {children}
    </div>
  );
}
