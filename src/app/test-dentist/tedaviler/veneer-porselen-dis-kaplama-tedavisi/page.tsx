import React from 'react';
import { TreatmentPageTemplate } from '@/themes/dentist/components/TreatmentPageTemplate';

export default function VeneerPorselenKaplamaPage() {
  return (
    <TreatmentPageTemplate
      title="Veneer Porselen Kaplama"
      subtitle="Kusursuz Bir <br/> <span class='italic text-[#D4C9C3] font-light'>Estetik Dokunuş.</span>"
      description="Dişlerin sadece ön yüzeylerine yapıştırılan yaprak porselenler (veneer) ile kalıcı renk değişimi, kırık onarımı ve boşlukların kapatılmasını sağlıyoruz."
      heroImage="/dental_veneer_1786461855047.jpg"
      backgroundText="VENEER"
      steps={[
        {
          title: "Ön Hazırlık",
          description: "Dişlerin ön yüzeyinden yarım milimetre gibi çok ince bir mine tabakası kaldırılır."
        },
        {
          title: "Laboratuvar",
          description: "Dişlerinizin detaylı ölçüsü alınır ve incecik yaprak porselenler laboratuvarda sanat eseri gibi işlenir."
        },
        {
          title: "Yapıştırma",
          description: "Hazırlanan veneerler, çok güçlü özel yapıştırıcılar ile diş yüzeyine entegre edilerek yeni gülüşünüz tamamlanır."
        }
      ]}
    />
  );
}
