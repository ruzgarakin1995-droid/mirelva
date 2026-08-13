import React from 'react';
import { TreatmentPageTemplate } from '@/themes/dentist/components/TreatmentPageTemplate';

export default function EMaxTedavisiPage() {
  return (
    <TreatmentPageTemplate
      title="E-Max Diş Tedavisi"
      subtitle="Sanat ve Seramiğin <br/> <span class='italic text-[#D4C9C3] font-light'>Mükemmel Uyumu.</span>"
      description="Güçlendirilmiş lityum disilikat (tam seramik) materyalden üretilen, metal altyapı içermeyen ve doğal dişin optik özelliklerini birebir yansıtan üst düzey restorasyonlar."
      heroImage="/dental_emax_1786461865678.jpg"
      backgroundText="E-MAX"
      steps={[
        {
          title: "Hazırlık",
          description: "Dişlerinize en uygun, tamamen dijital ortamda veya hassas materyallerle ölçü alınarak hazırlık süreci başlar."
        },
        {
          title: "Tasarım & Üretim",
          description: "Tek parça seramik bloklardan CAD/CAM teknolojisi ile kazınarak, el işçiliği ve teknolojiyle kusursuz hale getirilir."
        },
        {
          title: "Simantasyon",
          description: "Dişin yapısına uygun çok güçlü yapıştırıcılarla sabitlenen E-Max kaplamalar, yıllar boyu estetik ve dayanıklılık sunar."
        }
      ]}
    />
  );
}
