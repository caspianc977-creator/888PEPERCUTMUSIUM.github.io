'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GalleryHeader from './GalleryHeader';
import CategoryFilter from './CategoryFilter';
import ArtworkGrid from './ArtworkGrid';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <GalleryHeader />
        <div className="container mx-auto px-6 py-12">
          <CategoryFilter />
          <ArtworkGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}