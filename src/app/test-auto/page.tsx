import AutoTheme from '@/themes/auto/AutoTheme';

export default function TestAutoPage() {
  const dummyClient = {
    id: "auto-123",
    name: "VELOCE Motors",
    themeConfig: {
      primaryColor: "#09090B", // Zinc 950 (Dark mode)
      accentColor: "#94A3B8",  // Slate 400 (Silver/Carbon)
      fontFamily: "Inter"
    },
    features: {
      hasBooking: true
    }
  };

  return <AutoTheme clientData={dummyClient} />;
}

