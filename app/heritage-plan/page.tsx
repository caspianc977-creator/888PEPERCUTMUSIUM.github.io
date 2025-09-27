
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeritagePlanHero from './HeritagePlanHero';
import CourseModules from './CourseModules';
import TeachingMethods from './TeachingMethods';
import RecordingTechnology from './RecordingTechnology';
import GlobalPromotion from './GlobalPromotion';
import JoinPlan from './JoinPlan';

export default function HeritagePlan() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeritagePlanHero />
        <CourseModules />
        <TeachingMethods />
        <RecordingTechnology />
        <GlobalPromotion />
        <JoinPlan />
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
        
        /* GPU acceleration for better performance */
        .gpu-accelerated {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000;
        }
        
        /* Focus styles for accessibility */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #0EA5E9;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
