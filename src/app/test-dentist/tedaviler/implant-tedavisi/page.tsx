import React from 'react';
import { TreatmentPageTemplate } from '@/themes/dentist/components/TreatmentPageTemplate';

export default function ImplantTedavisiPage() {
  return (
    <TreatmentPageTemplate
      title="İmplant Tedavisi"
      subtitle="Eksik Dişlere <br/> <span class='italic text-[#D4C9C3] font-light'>Kalıcı Çözüm.</span>"
      description="Titanyum vidalarla çene kemiğine yerleştirilen yapay diş kökleri sayesinde, doğal dişlerinizi aratmayacak hem estetik hem de fonksiyonel sonuçlar sunuyoruz."
      heroImage="/dental_implant_treatment_1786461805486.jpg"
      backgroundText="IMPLANTS"
      steps={[
        {
          title: "Planlama",
          description: "3D tomografi ile çene kemiğinizin durumu analiz edilir ve en uygun implant pozisyonu dijital ortamda belirlenir."
        },
        {
          title: "Uygulama",
          description: "Lokal anestezi altında, titanyum implantlar çene kemiğine ağrısız ve yüksek hassasiyetle yerleştirilir."
        },
        {
          title: "Protez Aşaması",
          description: "İyileşme süreci tamamlandıktan sonra, implantın üzerine doğal dişinize mükemmel uyum sağlayan porselen veya zirkonyum kaplama yerleştirilir."
        }
      ]}
    />
  );
}
