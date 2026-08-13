import RestaurantTheme from '@/themes/restaurant/RestaurantTheme';

export default function TestRestaurantPage() {
  const dummyClient = {
    id: "rest-123",
    name: "L'Aura Fine Dining",
    themeConfig: {
      primaryColor: "#0A0A0A", // Very dark
      accentColor: "#D4AF37",  // Gold
      fontFamily: "Inter"
    },
    features: {
      hasBooking: true
    }
  };

  return <RestaurantTheme clientData={dummyClient} />;
}

