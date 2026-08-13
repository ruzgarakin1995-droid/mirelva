import React from 'react';
import { TreatmentPageTemplate } from '@/themes/dentist/components/TreatmentPageTemplate';

export default function ImmediateImplantPage() {
  return (
    <TreatmentPageTemplate
      title="Immediate İmplant"
      subtitle="Aynı Gün İçerisinde <br/> <span class='italic text-[#D4C9C3] font-light'>Yeni Dişleriniz.</span>"
      description="Diş çekiminin yapıldığı aynı seans içerisinde implantın yerleştirildiği, iyileşme süresini önemli ölçüde kısaltan ileri düzey tedavi konsepti."
      heroImage="/dental_immediate_implant_1786461819173.jpg"
      backgroundText="IMMEDIATE"
      steps={[
        {
          title: "Çekim",
          description: "Zarar görmüş diş, çevre dokulara ve kemiğe hiçbir zarar vermeden atravmatik yöntemlerle çekilir."
        },
        {
          title: "İmplantasyon",
          description: "Çekim boşluğuna anında uygun boyutta implant yerleştirilir, böylece kemik erimesinin önüne geçilir."
        },
        {
          title: "Geçici Protez",
          description: "Duruma göre aynı gün içerisinde geçici dişiniz takılır. Estetik kaygı yaşamadan günlük hayatınıza devam edersiniz."
        }
      ]}
    />
  );
}
