
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HeroSectionNew() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    { 
      title: "数字化传承",
      subtitle: "剪纸艺术",
      description: "通过先进的3D建模与AR技术，让千年传统工艺焕发新的数字生命力"
    },
    {
      title: "沉浸式体验", 
      subtitle: "文化传承",
      description: "360度全方位展示，让每一刀每一剪都清晰可见，传承技艺精髓"
    },
    {
      title: "全球展示",
      subtitle: "非遗文化", 
      description: "打破地域界限，让世界各地的人们都能感受中华剪纸的独特魅力"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.observe-animation');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=traditional%20Chinese%20papercut%20artist%20master%20working%20in%20peaceful%20studio%20environment%2C%20elegant%20hands%20cutting%20intricate%20patterns%2C%20warm%20lighting%20creating%20dramatic%20shadows%2C%20ancient%20art%20meets%20modern%20preservation%2C%20cultural%20heritage%20atmosphere%2C%20professional%20documentary%20style%20photography&width=1920&height=1080&seq=hero1&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 right-20 w-32 h-32 opacity-20 animate-float">
        <img 
          src="https://readdy.ai/api/search-image?query=elegant%20Chinese%20papercut%20pattern%20floating%20element%2C%20traditional%20red%20color%2C%20intricate%20design%20details%2C%20transparent%20background%20style%2C%20decorative%20ornament%20for%20web%20design&width=128&height=128&seq=deco1&orientation=squarish"
          alt=""
          className="w-full h-full object-contain filter brightness-150"
        />
      </div>
      
      <div className="absolute bottom-32 left-20 w-24 h-24 opacity-15 animate-float-delayed">
        <img 
          src="https://readdy.ai/api/search-image?query=traditional%20Chinese%20papercut%20decorative%20element%2C%20flowing%20botanical%20pattern%2C%20subtle%20artistic%20detail%2C%20web%20decoration%20ornament%2C%20minimalist%20cultural%20design&width=96&height=96&seq=deco2&orientation=squarish"
          alt=""
          className="w-full h-full object-contain filter brightness-125"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8 text-white">
                
                {/* 固定徽章 - 不受动画影响 */}
                <div className={`transform transition-all duration-1000 observe-animation ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">国家级非物质文化遗产</span>
                  </div>
                </div>
                  
                {/* 动态文字区域 - 只有这部分有切换动画，设置固定高度 */}
                <div className="space-y-4 mb-8 min-h-[280px] lg:min-h-[320px] flex flex-col justify-center">
                  <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                    <span 
                      className="block bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent will-change-transform"
                      key={`title-${currentText}`}
                      style={{
                        animation: 'fadeInText 0.8s ease-out forwards'
                      }}
                    >
                      {heroTexts[currentText].title}
                    </span>
                    <span 
                      className="block text-red-400 mt-2 will-change-transform"
                      key={`subtitle-${currentText}`}
                      style={{
                        animation: 'fadeInText 0.8s ease-out 0.2s both'
                      }}
                    >
                      {heroTexts[currentText].subtitle}
                    </span>
                  </h1>
                  
                  <p 
                    className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl will-change-transform"
                    key={`desc-${currentText}`}
                    style={{
                      animation: 'fadeInText 0.8s ease-out 0.4s both'
                    }}
                  >
                    {heroTexts[currentText].description}
                  </p>
                </div>

                {/* 固定按钮区域 - 不受动画影响 */}
                <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-500 observe-animation ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <Link
                    href="/heritage-plan"
                    className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 cursor-pointer whitespace-nowrap overflow-hidden will-change-transform"
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>开始传承之旅</span>
                      <i className="ri-arrow-right-line text-lg w-5 h-5 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300"></i>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-300 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </Link>
                  
                  <Link
                    href="/ar-experience"
                    className="group px-8 py-4 border-2 border-white/30 backdrop-blur-sm rounded-xl font-bold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 cursor-pointer whitespace-nowrap will-change-transform"
                  >
                    <span className="flex items-center space-x-2">
                      <span>3D作品</span>
                      <i className="ri-3d-view-line text-lg w-5 h-5 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300"></i>
                    </span>
                  </Link>
                </div>

                {/* 固定统计数据区域 - 不受动画影响 */}
                <div className={`grid grid-cols-3 gap-8 pt-8 border-t border-white/20 transform transition-all duration-1000 delay-700 observe-animation ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  {[
                    { number: "1000+", label: "数字化作品" },
                    { number: "50+", label: "传承大师" },
                    { number: "10万+", label: "全球观众" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-red-400 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Interactive Element */}
              <div className="lg:col-span-5">
                <div className={`relative transform transition-all duration-1000 delay-300 observe-animation ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="relative">
                    {/* Glass Card */}
                    <div 
                      className="relative p-8 rounded-2xl backdrop-blur-sm border border-white/20 will-change-transform hover:scale-105 transition-transform duration-500"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)'
                      }}
                    >
                      <div className="aspect-video rounded-xl overflow-hidden mb-6">
                        <a href="https://www.hunantoday.cn/news/xhn/202204/17005037.html" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                          <img
                            src="https://readdy.ai/api/search-image?query=beautiful%20Chinese%20papercut%20artwork%20being%20created%2C%20intricate%20red%20paper%20cutting%20process%20showing%20delicate%20patterns%2C%20traditional%20craftsmanship%20demonstration%2C%20high%20quality%20educational%20content%2C%20artistic%20documentation%20style&width=400&height=225&seq=hero2&orientation=landscape"
                            alt="剪纸制作过程"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </a>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">精品课程预览</h3>
                        <p className="text-gray-300">跟随传承人学习传统剪纸技艺</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span>已有 2,840 人学习</span>
                          <div className="flex items-center space-x-1">
                            <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
                            <span>45分钟</span>
                          </div>
                        </div>
                        
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500/80 rounded-full flex items-center justify-center animate-pulse">
                      <i className="ri-play-fill text-white text-lg w-6 h-6 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes slide-up {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInText {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: -2s;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        /* Performance optimizations */
        .will-change-transform {
          will-change: transform, opacity;
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-float-delayed,
          .animate-pulse {
            animation: none;
          }
          
          .transition-all,
          .transition-transform,
          .transition-colors {
            transition: none;
          }
          
          @keyframes fadeInText {
            from, to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }
      `}</style>
    </section>
  );
}
