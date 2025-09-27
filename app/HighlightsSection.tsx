
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function HighlightsSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const highlights = [
    {
      category: '传统工艺',
      title: '蝙蝠纹窗花',
      description: '寓意福气临门的传统剪纸，工艺精湛，纹样复杂',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20bat%20pattern%20window%20decoration%2C%20intricate%20red%20paper%20cutout%20design%2C%20symmetrical%20bat%20motifs%20with%20cloud%20patterns%2C%20feng%20shui%20symbolism%2C%20delicate%20craftsmanship%2C%20cultural%20heritage%20artwork&width=600&height=400&seq=highlight001&orientation=landscape',
      link: '/gallery',
      stats: { views: '2.5k', likes: '320' }
    },
    {
      category: 'AR体验',
      title: '龙凤呈祥3D展示',
      description: '通过AR技术观看立体龙凤图案，感受动态美感',
      image: 'https://readdy.ai/api/search-image?query=3D%20Chinese%20dragon%20and%20phoenix%20paper%20cutting%20art%20in%20augmented%20reality%2C%20floating%20red%20paper%20sculptures%2C%20holographic%20effects%2C%20modern%20technology%20meets%20traditional%20culture%2C%20interactive%20digital%20experience&width=600&height=400&seq=highlight002&orientation=landscape',
      link: '/ar-experience',
      stats: { views: '5.2k', likes: '680' }
    },
    {
      category: '文化传承',
      title: '非遗传承人故事',
      description: '聆听老艺人的匠心传承，了解剪纸背后的文化内涵',
      image: 'https://readdy.ai/api/search-image?query=Elderly%20Chinese%20master%20craftsman%20demonstrating%20traditional%20paper%20cutting%20techniques%2C%20warm%20workshop%20lighting%2C%20hands%20working%20with%20scissors%20and%20red%20paper%2C%20cultural%20knowledge%20transfer%2C%20wisdom%20and%20heritage&width=600&height=400&seq=highlight003&orientation=landscape',
      link: '/stories',
      stats: { views: '3.8k', likes: '450' }
    }
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    setVisibleItems(new Array(highlights.length).fill(false));

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                requestAnimationFrame(() => {
                  setVisibleItems(prev => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                  });
                });
              }, index * 200);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [highlights.length]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-repeat pointer-events-none"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20patterns%20seamless%20texture%2C%20red%20cut-out%20designs%2C%20intricate%20floral%20motifs%2C%20geometric%20patterns%2C%20folk%20art%20elements%2C%20transparent%20background%2C%20repeating%20pattern%20for%20wallpaper%2C%20cultural%20decorative%20elements&width=400&height=400&seq=pattern004&orientation=squarish')`,
          backgroundSize: '350px 350px'
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
            精选推荐
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            探索最受欢迎的剪纸作品和沉浸式体验，感受传统文化与现代科技的完美融合
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Link href={item.link} key={index} className="cursor-pointer">
              <div 
                ref={el => {
                  if (el) itemRefs.current[index] = el;
                }}
                className={`glass-highlight-card overflow-hidden rounded-3xl border border-white/10 transition-all duration-800 ease-out group ${
                  visibleItems[index] 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-95'
                } hover:scale-105 hover:border-red-400/40`}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    style={{ willChange: 'transform' }}
                  />
                  
                  {/* Category badge */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      background: 'rgba(220, 38, 127, 0.9)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      color: 'white'
                    }}
                  >
                    {item.category}
                  </div>

                  {/* Stats overlay */}
                  <div 
                    className="absolute bottom-4 right-4 px-3 py-2 rounded-lg text-xs text-white flex items-center gap-3"
                    style={{
                      background: 'rgba(0, 0, 0, 0.7)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)'
                    }}
                  >
                    <span className="flex items-center gap-1">
                      <i className="ri-eye-line"></i>
                      {item.stats.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-heart-line"></i>
                      {item.stats.likes}
                    </span>
                  </div>

                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(45deg, rgba(14, 165, 233, 0.2) 0%, rgba(16, 185, 129, 0.2) 50%, rgba(245, 158, 11, 0.2) 100%)'
                    }}
                  />
                </div>
                
                <div className="p-8">
                  <h3 
                    className="text-2xl font-bold mb-3 text-gradient group-hover:text-white transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-red-400 font-semibold group">
                      <span>了解详情</span>
                      <i className="ri-arrow-right-line ml-2 transition-transform duration-300 group-hover:translate-x-2"></i>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <i className="ri-time-line"></i>
                      <span>最新更新</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div 
            className="inline-block p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)'
            }}
          >
            <h3 
              className="text-2xl font-bold mb-4 text-gradient"
              style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 50%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              开启您的非遗文化之旅
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              更多精彩内容等您探索，一起传承和保护珍贵的文化遗产
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/gallery"
                className="glass-cta-button px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 justify-center hover:scale-105"
                style={{
                  background: 'rgba(220, 38, 127, 0.8)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  color: 'white',
                  willChange: 'transform'
                }}
              >
                <i className="ri-gallery-line"></i>
                浏览作品馆
              </Link>
              
              <Link 
                href="/ar-experience"
                className="glass-cta-button border-2 border-white/40 px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 justify-center hover:scale-105 text-white hover:bg-white/10"
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  willChange: 'transform'
                }}
              >
                <i className="ri-smartphone-line"></i>
                AR体验
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-highlight-card:hover {
          transform: scale(1.05) translateZ(0);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }
        
        .glass-cta-button:hover {
          transform: scale(1.05) translateZ(0);
        }
        
        .text-gradient {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (prefers-reduced-motion: reduce) {
          .glass-highlight-card,
          .glass-cta-button {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
