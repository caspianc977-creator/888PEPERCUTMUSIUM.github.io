
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StoriesHero from './StoriesHero';
import MasterSection from './MasterSection';
import TimelineSection from './TimelineSection';
import StoryGrid from './StoryGrid';

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        <StoriesHero />
        <MasterSection />
        <TimelineSection />
        <StoryGrid />
      </main>
      <Footer />
    </div>
  );
}
