import DoctorTheme from '@/themes/doctor/DoctorTheme';

export default function TestDoctorPage() {
  const dummyClient = {
    id: "doc-123",
    name: "Ã–zel Åifa PolikliniÄŸi",
    themeConfig: {
      primaryColor: "#0F172A", // Slate 900
      accentColor: "#0284C7",  // Light Blue 600
      fontFamily: "Inter"
    },
    features: {
      hasBooking: true
    }
  };

  return <DoctorTheme clientData={dummyClient} />;
}

