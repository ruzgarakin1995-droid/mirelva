import ArchitectureTheme from '@/themes/architecture/ArchitectureTheme';

export default function TestArchitecturePage() {
  const dummyClient = {
    id: "arch-123",
    name: "AURA Architecture",
    themeConfig: {
      primaryColor: "#FAFAFA", // Almost white (Minimalist)
      accentColor: "#111827",  // Dark Gray
      fontFamily: "Inter"
    },
    features: {
      hasBooking: true
    }
  };

  return <ArchitectureTheme clientData={dummyClient} />;
}

