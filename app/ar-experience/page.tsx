
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ARHero from './ARHero';
import ARGallery from './ARGallery';
import ARFeatures from './ARFeatures';
import ARInstructions from './ARInstructions';

export default function ARExperiencePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        <ARHero />
        <ARInstructions />
        <div id="ar-gallery">
          <ARGallery />
        </div>
        <ARFeatures />
      </main>
      <Footer />
    </div>
  );
}
