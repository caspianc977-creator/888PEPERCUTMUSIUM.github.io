
'use client';

import { useEffect, useRef, useState } from 'react';

export default function IntroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: 'ri-shield-check-line',
      title: '数字化保护',
      description: '永久保存珍贵文化遗产'
    },
    {
      icon: 'ri-global-line',
      title: '全球传播',
      description: '让世界了解中华文化'
    },
    {
      icon: 'ri-group-line',
      title: '互动学习',
      description: '沉浸式文化教育体验'
    },
    {
      icon: 'ri-lightbulb-line',
      title: '创新展示',
      description: '3D+AR前沿技术应用'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div 
        className="absolute inset-0 opacity-5 bg-repeat pointer-events-none"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20patterns%20seamless%20texture%2C%20red%20cut-out%20designs%2C%20intricate%20floral%20motifs%2C%20geometric%20patterns%2C%20folk%20art%20elements%2C%20transparent%20background%2C%20repeating%20pattern%20for%20wallpaper%2C%20cultural%20decorative%20elements&width=400&height=400&seq=pattern003&orientation=squarish')`,
          backgroundSize: '250px 250px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`order-2 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="mb-6">
              <span 
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  background: 'rgba(220, 38, 127, 0.2)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  color: '#FF6B9D',
                  border: '1px solid rgba(220, 38, 127, 0.3)'
                }}
              >
                传承千年文化
              </span>
            </div>
            
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: '"Source Han Sans CN", "Noto Sans SC", sans-serif',
                color: 'white'
              }}
            >
              让非遗文化
              <span 
                className="text-gradient ml-2"
                style={{
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #10B981 50%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                触手可及
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              剪纸艺术作为中国最古老的民间艺术之一，承载着深厚的文化内涵和民族记忆。我们运用先进的数字化技术，将传统剪纸转化为立体的3D模型，并结合AR增强现实技术，让观众能够以全新的方式感受这门古老艺术的魅力。
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    willChange: 'transform, opacity'
                  }}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{
                      background: 'rgba(220, 38, 127, 0.2)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(220, 38, 127, 0.3)'
                    }}
                  >
                    <i className={`${benefit.icon} text-red-400`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[
                  'https://readdy.ai/api/search-image?query=Portrait%20of%20elderly%20Chinese%20paper%20cutting%20master%20craftsman%2C%20kind%20face%2C%20traditional%20clothing%2C%20warm%20lighting%2C%20cultural%20heritage%2C%20wisdom%20in%20eyes%2C%20peaceful%20expression&width=48&height=48&seq=avatar001&orientation=squarish',
                  'https://readdy.ai/api/search-image?query=Portrait%20of%20middle-aged%20Chinese%20woman%20paper%20cutting%20artist%2C%20gentle%20smile%2C%20traditional%20attire%2C%20soft%20lighting%2C%20cultural%20preservation%2C%20artistic%20hands%2C%20serene%20expression&width=48&height=48&seq=avatar002&orientation=squarish',
                  'https://readdy.ai/api/search-image?query=Portrait%20of%20young%20Chinese%20paper%20cutting%20apprentice%2C%20earnest%20expression%2C%20modern%20traditional%20fusion%20clothing%2C%20bright%20lighting%2C%20next%20generation%20heritage%20keeper&width=48&height=48&seq=avatar003&orientation=squarish'
                ].map((src, index) => (
                  <img 
                    key={index}
                    src={src} 
                    alt="传承人" 
                    className="w-12 h-12 rounded-full border-2 border-gray-600 object-cover object-top hover:scale-110 transition-transform duration-300" 
                    loading="lazy"
                    style={{ willChange: 'transform' }}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  已有 <span className="font-semibold text-red-400">20+</span> 位非遗传承人参与
                </p>
              </div>
            </div>
          </div>

          <div 
            className={`order-1 lg:order-2 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="relative">
              {/* Image placeholder */}
              {!imageLoaded && (
                <div 
                  className="w-full h-96 rounded-2xl animate-pulse"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)'
                  }}
                />
              )}
              
              <img 
                src="https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/ad44d1815cf71c8ffec8d7735e1e85c9.jfif"
                alt="剪纸艺术"
                className={`w-full rounded-2xl shadow-2xl object-cover object-top transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
              
              <div 
                className="absolute -bottom-6 -right-6 p-4 border border-white/20 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)'
                }}
              >
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(220, 38, 127, 0.2)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)'
                    }}
                  >
                    <i className="ri-award-line text-red-400 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">非物质文化遗产</div>
                    <div className="font-semibold text-white">国家级保护项目</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
