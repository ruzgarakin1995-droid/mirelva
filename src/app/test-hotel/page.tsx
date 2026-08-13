import HotelTheme from '@/themes/hotel/HotelTheme';

export default function TestHotelPage() {
  const dummyClient = {
    id: "hotel-123",
    name: "The Grand Bosphorus",
    themeConfig: {
      primaryColor: "#050505", // Deep black
      accentColor: "#C9A77C",  // Champagne Gold
      fontFamily: "Inter"
    },
    features: {
      hasBooking: true
    }
  };

  return <HotelTheme clientData={dummyClient} />;
}

