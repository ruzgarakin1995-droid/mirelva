import BrutalistHero from './sections/BrutalistHero';
import ManifestoText from './sections/ManifestoText';
import HorizontalProjectScroll from './sections/HorizontalProjectScroll';
import PhilosophyGrid from './sections/PhilosophyGrid';
import AwardsTypo from './sections/AwardsTypo';
import StudioGallery from './sections/StudioGallery';
import ProcessTimeline from './sections/ProcessTimeline';
import SelectedWorksList from './sections/SelectedWorksList';
import TeamGrid from './sections/TeamGrid';
import StatsMarquee from './sections/StatsMarquee';
import MaterialFocus from './sections/MaterialFocus';
import PublicationList from './sections/PublicationList';
import VideoShowcase from './sections/VideoShowcase';
import ContactMassive from './sections/ContactMassive';
import FooterMinimal from './sections/FooterMinimal';

export default function ArchitectureThemeV3() {
  return (
    <main className="bg-[#111] font-sans antialiased selection:bg-[#f4f4f0] selection:text-[#111] min-h-screen">
      <BrutalistHero />
      <ManifestoText />
      <HorizontalProjectScroll />
      <PhilosophyGrid />
      <SelectedWorksList />
      <AwardsTypo />
      <StudioGallery />
      <ProcessTimeline />
      <TeamGrid />
      <StatsMarquee />
      <MaterialFocus />
      <PublicationList />
      <VideoShowcase />
      <ContactMassive />
      <FooterMinimal />
    </main>
  );
}
