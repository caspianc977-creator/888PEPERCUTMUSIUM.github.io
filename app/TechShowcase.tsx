
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TechShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const dynamicTexts = [
    "尖端技术展示",
    "数字化创新体验", 
    "传统文化科技融合"
  ];

  const techFeatures = [
    {
      id: 1,
      title: "3D建模技术",
      description: "采用高精度3D扫描和建模技术，精确还原每一个剪纸细节",
      icon: "ri-3d-view-line",
      image: "https://readdy.ai/api/search-image?query=Advanced%203D%20modeling%20software%20interface%20showing%20Chinese%20paper%20cutting%20artwork%2C%20high-tech%20digital%20workspace%2C%20precise%20geometric%20modeling%2C%20professional%20software%20tools%2C%20modern%20technology%20environment&width=600&height=400&seq=tech-3d&orientation=landscape",
      stats: ["50万+ 多边形精度", "4K 超高清材质", "360° 完整建模"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "AR增强现实",
      description: "先进的AR技术让剪纸作品在现实空间中栩栩如生地展现",
      icon: "ri-smartphone-line",
      image: "https://readdy.ai/api/search-image?query=Augmented%20reality%20mobile%20app%20displaying%20Chinese%20paper%20cutting%20in%203D%20space%2C%20futuristic%20AR%20interface%2C%20holographic%20paper%20art%20floating%20in%20room%2C%20advanced%20mobile%20technology%2C%20immersive%20experience&width=600&height=400&seq=tech-ar&orientation=landscape",
      stats: ["实时渲染", "多平台支持", "交互式体验"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "云端处理",
      description: "基于云计算的强大处理能力，确保流畅的3D展示体验",
      icon: "ri-cloud-line",
      image: "https://readdy.ai/api/search-image?query=Modern%20cloud%20computing%20data%20center%20servers%2C%20high-tech%20infrastructure%2C%20digital%20processing%20visualization%2C%20network%20connectivity%2C%20advanced%20computing%20power%2C%20professional%20server%20room&width=600&height=400&seq=tech-cloud&orientation=landscape",
      stats: ["99.9% 可用性", "全球CDN", "毫秒级响应"],
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "AI智能分析",
      description: "人工智能技术分析剪纸工艺特点，提供个性化学习建议",
      icon: "ri-brain-line",
      image: "https://readdy.ai/api/search-image?query=Artificial%20intelligence%20analyzing%20traditional%20Chinese%20paper%20cutting%20patterns%2C%20AI%20neural%20network%20visualization%2C%20machine%20learning%20interface%2C%20data%20analysis%20graphs%2C%20futuristic%20AI%20technology&width=600&height=400&seq=tech-ai&orientation=landscape",
      stats: ["深度学习", "模式识别", "智能推荐"],
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % techFeatures.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* 科技背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* 动态粒子效果 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 will-change-transform">
            <span 
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              key={currentText}
              style={{
                animation: 'fadeInTechText 0.8s ease-out forwards'
              }}
            >
              {dynamicTexts[currentText]}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            运用前沿技术打造沉浸式文化体验，让传统艺术在数字时代焕发新的魅力
          </p>
          
          {/* 科技装饰线 */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="h-px w-8 bg-blue-400"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-purple-400 to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 左侧功能列表 */}
          <div className="space-y-6">
            {techFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                  activeFeature === index
                    ? `bg-gradient-to-r ${feature.color} bg-opacity-20 border-current shadow-lg shadow-current/25`
                    : 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600/50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeFeature === index 
                      ? `bg-gradient-to-r ${feature.color} text-white`
                      : 'bg-gray-700/50 text-gray-400'
                  }`}>
                    <i className={`${feature.icon} text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${
                      activeFeature === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`leading-relaxed ${
                      activeFeature === index ? 'text-gray-200' : 'text-gray-400'
                    }`}>
                      {feature.description}
                    </p>
                    
                    {activeFeature === index && (
                      <div className="mt-4 grid grid-cols-1 gap-2">
                        {feature.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-current rounded-full mr-3 opacity-80"></div>
                            <span className="text-gray-300">{stat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 右侧展示区域 */}
          <div className="relative">
            <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${techFeatures[activeFeature].color} p-1`}>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <img
                  src={techFeatures[activeFeature].image}
                  alt={techFeatures[activeFeature].title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* 技术指标显示 */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="text-white font-bold mb-2">{techFeatures[activeFeature].title}</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {techFeatures[activeFeature].stats.map((stat, index) => (
                        <div key={index} className="text-xs">
                          <div className="text-gray-400">{stat}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 装饰性科技元素 */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full border-2 border-blue-400 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full border-2 border-purple-400 animate-pulse delay-500"></div>
          </div>
        </div>

        {/* CTA部分 */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
            
            <h3 className="text-3xl font-bold text-white mb-4">体验未来的文化传承</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              立即体验我们的技术成果，感受传统文化与现代科技的完美融合
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ar-experience">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  <i className="ri-3d-view-line mr-2"></i>
                  体验3D作品
                </button>
              </Link>
              <Link href="/heritage-plan">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  <i className="ri-graduation-cap-line mr-2"></i>
                  加入传承计划
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInTechText {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .will-change-transform {
          will-change: transform, opacity;
        }
        
        @media (prefers-reduced-motion: reduce) {
          @keyframes fadeInTechText {
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
