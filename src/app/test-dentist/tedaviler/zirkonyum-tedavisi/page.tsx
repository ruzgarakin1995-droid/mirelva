import React from 'react';
import { TreatmentPageTemplate } from '@/themes/dentist/components/TreatmentPageTemplate';

export default function ZirkonyumTedavisiPage() {
  return (
    <TreatmentPageTemplate
      title="Zirkonyum Tedavisi"
      subtitle="Işığı Geçiren <br/> <span class='italic text-[#D4C9C3] font-light'>Doğal Beyazlık.</span>"
      description="Geleneksel metal destekli kaplamaların aksine, mükemmel ışık geçirgenliği ve doku uyumu sayesinde doğal dişten ayırt edilemeyen, hem sağlam hem estetik zirkonyum kaplamalar."
      heroImage="/dental_zirconium_1786461844336.jpg"
      backgroundText="ZIRCONIUM"
      steps={[
        {
          title: "Ölçü",
          description: "Dişlerinizin minimal düzeyde hazırlanmasının ardından, hassas ölçü alımı ile dijital tasarıma başlanır."
        },
        {
          title: "Üretim",
          description: "Özel CAD/CAM sistemleri ile el değmeden, mikro-milimetrik hassasiyetle zirkonyum altyapı üretilir."
        },
        {
          title: "Prova ve Uyum",
          description: "Rengi ve formu tamamen size özel olarak çalışılan zirkonyum kaplamalar, mükemmel estetik ve konfor için sabitlenir."
        }
      ]}
    />
  );
}
