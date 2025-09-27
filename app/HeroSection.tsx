
'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const texts = [
    "数字化保护，剪纸非遗",
    "传承千年文化，拥抱数字未来", 
    "通过3D建模与AR技术，让传统剪纸艺术触手可及，实现动态化交互体验"
  ];

  const textSizes = ["text-5xl md:text-7xl", "text-4xl md:text-6xl", "text-3xl md:text-5xl"];

  // IntersectionObserver for performance-optimized animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Text rotation animation with RAF optimization
  useEffect(() => {
    if (!isInView) return;
    
    setIsVisible(true);
    let animationId: number;

    const startAnimation = () => {
      const interval = setInterval(() => {
        animationId = requestAnimationFrame(() => {
          setIsVisible(false);
          
          setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          }, 500);
        });
      }, currentTextIndex === 2 ? 5000 : 3000);

      return interval;
    };

    const interval = startAnimation();
    
    return () => {
      clearInterval(interval);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [currentTextIndex, texts.length, isInView]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20art%20digital%20technology%20fusion%2C%20red%20paper%20cut%20patterns%20floating%20in%203D%20space%2C%20AR%20visual%20elements%2C%20holographic%20effects%2C%20modern%20tech%20interface%20with%20traditional%20Chinese%20motifs%2C%20cutting-edge%20digital%20preservation%20laboratory%2C%20warm%20lighting%20with%20blue%20technology%20accents%2C%20futuristic%20cultural%20heritage%20center&width=1920&height=1080&seq=hero_tech001&orientation=landscape')`,
        willChange: 'transform, opacity'
      }}
    >
      {/* Optimized pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 bg-repeat pointer-events-none"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20patterns%20seamless%20texture%2C%20red%20cut-out%20designs%2C%20intricate%20floral%20motifs%2C%20geometric%20patterns%2C%20folk%20art%20elements%2C%20transparent%20background%2C%20repeating%20pattern%20for%20wallpaper%2C%20cultural%20decorative%20elements&width=400&height=400&seq=pattern001&orientation=squarish')`,
          backgroundSize: '200px 200px',
          willChange: 'transform'
        }}
      />

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* High-performance text animation */}
          <div className="mb-12 flex items-center justify-center">
            <div className="min-h-[320px] md:min-h-[400px] flex items-center justify-center">
              <div 
                className={`transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                <div className="text-center relative">
                  {/* Gradient text with proper anti-aliasing */}
                  {currentTextIndex === 0 && (
                    <h1 
                      className={`${textSizes[0]} leading-tight font-bold px-4 text-gradient`}
                      style={{
                        fontFamily: '"Source Han Sans CN", "Noto Sans SC", "PingFang SC", sans-serif',
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 50%, #F59E0B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '0.02em',
                        textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.2))'
                      }}
                    >
                      数字化保护，
                      <br className="md:hidden" />
                      剪纸非遗
                    </h1>
                  )}

                  {currentTextIndex === 1 && (
                    <h2 
                      className={`${textSizes[1]} leading-tight font-bold px-4 text-gradient`}
                      style={{
                        fontFamily: '"Source Han Sans CN", "Noto Sans SC", "PingFang SC", sans-serif',
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 50%, #F59E0B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '0.02em',
                        textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.2))'
                      }}
                    >
                      传承千年文化，
                      <br className="md:hidden" />
                      拥抱数字未来
                    </h2>
                  )}

                  {currentTextIndex === 2 && (
                    <p 
                      className={`${textSizes[2]} leading-relaxed font-bold max-w-5xl mx-auto px-4 text-gradient`}
                      style={{
                        fontFamily: '"Source Han Sans CN", "Noto Sans SC", "PingFang SC", sans-serif',
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 50%, #F59E0B 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '0.02em',
                        textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.2))'
                      }}
                    >
                      通过3D建模与AR技术，
                      <br />
                      让传统剪纸艺术触手可及，
                      <br />
                      实现动态化交互体验
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive hint */}
          <div className="mb-8 opacity-90">
            <p className="text-lg md:text-xl text-gray-200 flex items-center justify-center gap-2">
              <i className="ri-smartphone-line text-red-400"></i>
              点击下方AR图标体验剪纸动态效果
            </p>
          </div>

          {/* Action buttons with GPU-optimized hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              href="/ar-experience"
              className="glass-button bg-red-600/80 hover:bg-red-700/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 hover:scale-105"
              style={{
                willChange: 'transform, opacity',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)'
              }}
            >
              <i className="ri-magic-line"></i>
              AR体验
            </Link>
            
            <Link 
              href="/gallery"
              className="glass-button border-2 border-white/60 hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 hover:scale-105"
              style={{
                willChange: 'transform, opacity',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)'
              }}
            >
              <i className="ri-gallery-line"></i>
              探索作品馆
            </Link>

            <Link 
              href="/stories"
              className="glass-button border-2 border-red-400/60 hover:bg-red-400/20 text-red-300 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 hover:scale-105"
              style={{
                willChange: 'transform, opacity',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)'
              }}
            >
              <i className="ri-user-star-line"></i>
              非遗故事
            </Link>
          </div>

          {/* Glass-style stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: 'ri-image-line', value: '500+', label: '珍贵作品' },
              { icon: 'ri-user-star-line', value: '20+', label: '非遗传承人' },
              { icon: 'ri-palette-line', value: '8', label: '艺术流派' },
              { icon: 'ri-smartphone-line', value: '100+', label: '3D模型' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center glass-card p-6 border border-white/20 rounded-2xl hover:scale-105 transition-transform duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  willChange: 'transform, opacity'
                }}
              >
                <div className="text-4xl font-bold text-red-400 mb-2 flex items-center justify-center gap-2">
                  <i className={`${stat.icon} text-3xl`}></i>
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-20 h-20 border border-red-400/30 rounded-full animate-pulse hidden md:block">
        <div className="absolute inset-4 border border-red-400/50 rounded-full">
          <div className="absolute inset-2 bg-red-400/20 rounded-full flex items-center justify-center">
            <i className="ri-focus-3-line text-red-400"></i>
          </div>
        </div>
      </div>

      {/* Scroll indicator - removed text and arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        {/* Scroll indicator removed completely */}
      </div>

      {/* Critical CSS for performance */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        
        .text-gradient {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .glass-button:hover,
        .glass-card:hover {
          transform: scale(1.05);
        }
        
        .glass-button,
        .glass-card {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
