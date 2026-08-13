import React from 'react';
import { TreatmentPageTemplate } from '@/themes/dentist/components/TreatmentPageTemplate';

export default function GulusTasarimiPage() {
  return (
    <TreatmentPageTemplate
      title="Gülüş Tasarımı"
      subtitle="Yüzünüzün <br/> <span class='italic text-[#D4C9C3] font-light'>Matematiği.</span>"
      description="Altın oran, dudak dinamikleri ve yüz simetrisi... Her gülüş, kişinin karakterini yansıtan benzersiz bir imza olmalıdır. Biz bu imzayı sanatla tasarlıyoruz."
      heroImage="/dental_smile_design_1786461830352.jpg"
      backgroundText="AESTHETICS"
      steps={[
        {
          title: "Analiz",
          description: "Yüz hatlarınızın, ten renginizin, yaşınızın ve hatta mesleğinizin detaylı dijital analizi."
        },
        {
          title: "Mock-Up",
          description: "Tedaviye başlamadan önce, bitmiş halini geçici materyallerle ağzınızda görerek deneyimleme fırsatı."
        },
        {
          title: "Uygulama",
          description: "Onayladığınız tasarımın zirkonyum, e-max veya lamina gibi materyallerle hayata geçirilmesi."
        }
      ]}
    />
  );
}
