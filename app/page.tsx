
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSectionNew from './HeroSectionNew';
import FeaturesSection from './FeaturesSection';
import IntroSection from './IntroSection';
import TeamSection from './TeamSection';
import TechShowcase from './TechShowcase';
import OnlineEducation from './OnlineEducation';
import GlobalPromotion from './GlobalPromotion';
import HighlightsSection from './HighlightsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSectionNew />
        <FeaturesSection />
        <IntroSection />
        <TeamSection />
        <TechShowcase />
        <OnlineEducation />
        <GlobalPromotion />
        <HighlightsSection />
      </main>
      <Footer />
      
      {/* Critical CSS for performance optimization */}
      <style jsx global>{`
        /* Font loading optimization */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&display=swap');
        
        /* Performance optimizations */
        * {
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: 'Noto Sans SC', 'Source Han Sans CN', system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #000;
          color: #fff;
        }
        
        /* High-performance animations */
        .will-change-transform {
          will-change: transform, opacity;
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        
        /* Prevent layout shifts */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* GPU acceleration for better performance */
        .gpu-accelerated {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000;
        }
        
        /* Loading states */
        .loading-skeleton {
          background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        /* Focus styles for accessibility */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #0EA5E9;
          outline-offset: 2px;
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
