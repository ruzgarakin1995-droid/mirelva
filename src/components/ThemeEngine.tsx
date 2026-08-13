import BeautyTheme from '@/themes/beauty/BeautyTheme';
import RestaurantTheme from '@/themes/restaurant/RestaurantTheme';

export default function ThemeEngine({ clientData }: { clientData: any }) {
  const { sector } = clientData;

  switch (sector) {
    case 'beauty':
      return <BeautyTheme clientData={clientData} />;
    case 'restaurant':
      return <RestaurantTheme clientData={clientData} />;
    default:
      return <div className="p-8 text-center text-xl">Sektör bulunamadı veya yapım aşamasında.</div>;
  }
}
