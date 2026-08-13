import FitnessTheme from '@/themes/fitness/FitnessTheme';

export default function TestFitnessPage() {
  const dummyClient = {
    id: "fit-123",
    name: "OXYGEN Wellness Club",
    themeConfig: {
      primaryColor: "#000000", // Black
      accentColor: "#EAB308",  // Neon Yellow/Gold
      fontFamily: "Inter"
    },
    features: {
      hasBooking: true
    }
  };

  return <FitnessTheme clientData={dummyClient} />;
}

