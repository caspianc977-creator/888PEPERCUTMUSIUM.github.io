
'use client';

import { useState, useEffect } from 'react';

export default function ARFeatures() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const dynamicTitles = [
    "突破传统展示边界",
    "重新定义文化体验",
    "开启数字艺术新纪元"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % dynamicTitles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: 'ri-3d-view-line',
      title: '三维立体建模',
      description: '运用先进的Photogrammetry技术，从120张多角度照片重建精确3D模型',
      gradient: 'from-cyan-400 to-blue-500',
      bgGradient: 'from-cyan-900/20 to-blue-900/10'
    },
    {
      icon: 'ri-eye-line',
      title: '沉浸式观赏',
      description: '360度全方位观看，支持实时光影变化，感受传统艺术的每一个细节',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-900/20 to-pink-900/10'
    },
    {
      icon: 'ri-palette-line',
      title: '色彩还原技术',
      description: '光谱分析技术准确还原传统朱砂红色调，保持文化原真性',
      gradient: 'from-emerald-400 to-green-500',
      bgGradient: 'from-emerald-900/20 to-green-900/10'
    },
    {
      icon: 'ri-smartphone-line',
      title: '跨平台兼容',
      description: '支持PC、移动端、VR设备，随时随地体验数字化非遗文化',
      gradient: 'from-orange-400 to-red-500',
      bgGradient: 'from-orange-900/20 to-red-900/10'
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* 科技背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/50 to-black"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* 动态标题 */}
          <div className="h-16 flex items-center justify-center mb-6">
            <h2 
              key={currentFeature}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent animate-fade-in-up"
              style={{
                animation: 'fadeInUp 1s ease-out forwards',
                willChange: 'transform, opacity'
              }}
            >
              {dynamicTitles[currentFeature]}
            </h2>
          </div>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            融合前沿数字技术与传统文化艺术，打造全新的非遗体验方式
          </p>

          {/* 科技装饰元素 */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <div 
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === currentFeature ? 'bg-cyan-400' : 'bg-gray-600'
                  } transition-colors duration-300`}
                ></div>
              ))}
            </div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 group hover:transform hover:-translate-y-2`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="flex items-start space-x-6">
                {/* 图标 */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* 科技感进度条 */}
                  <div className="mt-4 w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${feature.gradient} group-hover:animate-pulse`}
                      style={{
                        width: `${85 + index * 5}%`,
                        animation: 'slideIn 1s ease-out forwards',
                        animationDelay: `${index * 300 + 500}ms`,
                        transform: 'translateX(-100%)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* 悬停时的边角装饰 */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 技术规格展示 */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white text-center mb-8">技术规格</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-cyan-400 mb-2">50万+</div>
              <div className="text-sm text-gray-400">多边形精度</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-purple-400 mb-2">4K</div>
              <div className="text-sm text-gray-400">材质分辨率</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-emerald-400 mb-2">120</div>
              <div className="text-sm text-gray-400">拍摄角度</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-400">色彩还原度</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
