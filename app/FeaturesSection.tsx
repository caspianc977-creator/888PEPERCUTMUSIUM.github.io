
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const features = [
    {
      icon: 'ri-gallery-line',
      title: '3D作品馆',
      description: '精选500+件传统剪纸作品，支持360°旋转观看，感受每一处精美细节',
      link: '/ar-experience',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%203D%20paper%20cutting%20artworks%20displayed%20in%20a%20digital%20gallery%2C%20red%20and%20gold%20Chinese%20paper%20sculptures%20floating%20in%20white%20space%2C%20intricate%20patterns%2C%20traditional%20motifs%20like%20dragons%20and%20phoenixes%2C%20clean%20minimalist%20background%2C%20soft%20lighting%20highlighting%20details&width=400&height=300&seq=feature001&orientation=landscape'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'AR沉浸体验',
      description: '扫码即可将剪纸作品投影到现实空间，与传统艺术零距离互动',
      link: '/ar-experience',
      image: 'https://readdy.ai/api/search-image?query=Person%20using%20smartphone%20to%20view%20Chinese%20paper%20cutting%20art%20in%20augmented%20reality%2C%20red%20paper%20dragon%20floating%20in%20modern%20living%20room%2C%20AR%20technology%20interface%2C%20magical%20and%20immersive%20experience%2C%20natural%20lighting%2C%20contemporary%20setting&width=400&height=300&seq=feature002&orientation=landscape'
    },
    {
      icon: 'ri-book-open-line',
      title: '文化故事',
      description: '每件作品背后的历史传承，聆听非遗传承人的匠心故事',
      link: '/stories',
      image: 'https://readdy.ai/api/search-image?query=Elderly%20Chinese%20master%20craftsman%20telling%20stories%20about%20paper%20cutting%20tradition%2C%20warm%20lighting%2C%20traditional%20workshop%20setting%2C%20ancient%20books%20and%20scrolls%2C%20paper%20cutting%20tools%2C%20cultural%20artifacts%2C%20storytelling%20atmosphere%2C%20wisdom%20and%20heritage&width=400&height=300&seq=feature003&orientation=landscape'
    },
    {
      icon: 'ri-heart-line',
      title: '互动分享',
      description: '收藏喜爱的作品，一键分享给朋友，让更多人了解非遗文化',
      link: '/ar-experience',
      image: 'https://readdy.ai/api/search-image?query=Social%20media%20sharing%20interface%20showing%20Chinese%20paper%20cutting%20art%2C%20mobile%20phone%20screen%20with%20like%20and%20share%20buttons%2C%20colorful%20paper%20cut%20designs%2C%20modern%20UI%20elements%2C%20community%20engagement%2C%20digital%20cultural%20sharing&width=400&height=300&seq=feature004&orientation=landscape'
    }
  ];

  // IntersectionObserver for staggered card animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    setVisibleCards(new Array(features.length).fill(false));

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Staggered animation with RAF
              setTimeout(() => {
                requestAnimationFrame(() => {
                  setVisibleCards(prev => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                  });
                });
              }, index * 150); // 150ms stagger delay
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [features.length]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-repeat pointer-events-none"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20patterns%20seamless%20texture%2C%20red%20cut-out%20designs%2C%20intricate%20floral%20motifs%2C%20geometric%20patterns%2C%20folk%20art%20elements%2C%20transparent%20background%2C%20repeating%20pattern%20for%20wallpaper%2C%20cultural%20decorative%20elements&width=400&height=400&seq=pattern002&orientation=squarish')`,
          backgroundSize: '300px 300px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            style={{
              fontFamily: '"Source Han Sans CN", "Noto Sans SC", sans-serif',
              background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 50%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            数字化非遗体验
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            运用前沿技术重新诠释传统艺术，让千年剪纸文化在数字时代焕发新的魅力
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link href={feature.link} key={index} className="cursor-pointer">
              <div 
                ref={el => {
                  if (el) cardRefs.current[index] = el;
                }}
                className={`glass-feature-card overflow-hidden rounded-2xl border border-white/10 transition-all duration-700 ease-out ${
                  visibleCards[index] 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                } hover:scale-105 hover:border-red-400/30`}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    style={{ willChange: 'transform' }}
                  />
                  <div 
                    className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(220, 38, 127, 0.9)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)'
                    }}
                  >
                    <i className={`${feature.icon} text-white text-xl`}></i>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(45deg, rgba(14, 165, 233, 0.3) 0%, rgba(16, 185, 129, 0.3) 100%)'
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-3 text-gradient"
                    style={{
                      background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-red-400 font-semibold group">
                    <span>立即体验</span>
                    <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .glass-feature-card:hover {
          transform: scale(1.05) translateZ(0);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }
        
        .text-gradient {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (prefers-reduced-motion: reduce) {
          .glass-feature-card {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
