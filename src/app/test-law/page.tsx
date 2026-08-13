import LawTheme from '@/themes/law/LawTheme';

export default function TestLawPage() {
  const dummyClient = {
    id: "law-123",
    name: "Garrison & Partners Hukuk",
    themeConfig: {
      primaryColor: "#0F172A", // Navy Blue
      accentColor: "#F8FAFC",  // Off white / Light gray
      fontFamily: "Inter"
    },
    features: {
      hasBooking: true
    }
  };

  return <LawTheme clientData={dummyClient} />;
}

