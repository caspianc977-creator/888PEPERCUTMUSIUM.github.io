
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ARGallery() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [currentText, setCurrentText] = useState(0);

  const dynamicTexts = [
    "沉浸式数字艺术体验",
    "传统与科技的完美融合", 
    "探索非遗文化的未来形态"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const categories = ['全部', '龙凤', '花卉', '动物', '人物', '节日'];

  const arArtworks = [
    {
      id: 1,
      title: '双龙戏珠',
      category: '龙凤',
      description: '传统吉祥图案，寓意祥瑞降临',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20art%20of%20two%20dragons%20playing%20with%20pearl%2C%20red%20intricate%20patterns%2C%20symmetric%20design%2C%20cultural%20heritage%2C%20detailed%20craftsmanship%2C%20festive%20decoration%2C%20white%20background&width=400&height=400&seq=ar-dragon001&orientation=squarish'
    },
    {
      id: 2,
      title: '牡丹花开',
      category: '花卉',
      description: '国花牡丹，象征富贵吉祥',
      image: 'https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20peony%20flower%2C%20intricate%20red%20patterns%2C%20blooming%20petals%2C%20traditional%20folk%20art%2C%20cultural%20symbol%2C%20detailed%20craftsmanship%2C%20white%20background&width=400&height=400&seq=ar-peony001&orientation=squarish'
    },
    {
      id: 3,
      title: '金鱼戏水',
      category: '动物',
      description: '年年有余的美好寓意',
      image: 'https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20goldfish%20swimming%2C%20red%20intricate%20patterns%2C%20water%20waves%2C%20traditional%20folk%20art%2C%20prosperity%20symbol%2C%20detailed%20craftsmanship%2C%20white%20background&width=400&height=400&seq=ar-fish001&orientation=squarish'
    },
    {
      id: 4,
      title: '欧阳海舍身救列车',
      category: '人物',
      description: '以欧阳海烈士英勇事迹为主题的剪纸作品',
      image: 'https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/72d0b8c6db98b8ba0cc165822b06ad33.jfif'
    },
    {
      id: 5,
      title: '春节窗花',
      category: '节日',
      description: '传统春节装饰，喜庆团圆',
      image: 'https://readdy.ai/api/search-image?query=Chinese%20New%20Year%20paper%20cutting%20window%20decoration%2C%20red%20intricate%20patterns%2C%20festive%20design%2C%20traditional%20holiday%20art%2C%20cultural%20celebration%2C%20detailed%20craftsmanship%2C%20white%20background&width=400&height=400&seq=ar-newyear001&orientation=squarish'
    },
    {
      id: 6,
      title: '凤凰于飞',
      category: '龙凤',
      description: '凤凰双飞，爱情美满象征',
      image: 'https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20phoenix%20birds%20flying%20together%2C%20red%20intricate%20patterns%2C%20traditional%20folk%20art%2C%20love%20symbol%2C%20cultural%20heritage%2C%20detailed%20craftsmanship%2C%20white%20background&width=400&height=400&seq=ar-phoenix001&orientation=squarish'
    }
  ];

  const filteredArtworks = selectedCategory === '全部' 
    ? arArtworks 
    : arArtworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* 科技背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
              3D 数字艺术馆
            </h2>
            
            {/* 动态标语 */}
            <div className="h-12 flex items-center justify-center">
              <p 
                key={currentText}
                className="text-xl text-cyan-300 max-w-2xl mx-auto animate-fade-in-up"
                style={{
                  animation: 'fadeInUp 0.8s ease-out forwards',
                  willChange: 'transform, opacity'
                }}
              >
                {dynamicTexts[currentText]}
              </p>
            </div>
          </div>

          {/* 分类筛选 */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer backdrop-blur-sm ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 科技装饰线条 */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-8 h-px bg-cyan-400"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <Link href={`/gallery/${artwork.id}`} key={artwork.id} className="cursor-pointer">
              <div 
                className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:-translate-y-3 group border border-gray-700/50 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* 图片区域 */}
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  <img 
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* 科技感覆盖层 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* 分类标签 */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {artwork.category}
                  </div>
                  
                  {/* 3D标识 */}
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-cyan-400 px-3 py-1 rounded-full text-sm flex items-center">
                    <i className="ri-3d-view-line mr-1"></i>
                    3D 互动
                  </div>

                  {/* 悬停时的科技装饰 */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {artwork.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {artwork.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-400">数字化保护</span>
                      </div>
                    </div>
                    <div className="flex items-center text-cyan-400 hover:text-white font-semibold text-sm transition-colors whitespace-nowrap">
                      探索 3D 模型
                      <i className="ri-arrow-right-line ml-2"></i>
                    </div>
                  </div>
                </div>

                {/* 底部科技装饰线 */}
                <div className="h-1 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-16">
            <i className="ri-search-line text-6xl text-gray-600 mb-4"></i>
            <p className="text-xl text-gray-400">该分类暂无数字化作品</p>
          </div>
        )}

        {/* 科技感统计信息 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-cyan-900/20 to-transparent backdrop-blur-sm rounded-2xl border border-cyan-500/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
            <div className="text-gray-400">数字化作品</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-transparent backdrop-blur-sm rounded-2xl border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">50万+</div>
            <div className="text-gray-400">多边形精度</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-pink-900/20 to-transparent backdrop-blur-sm rounded-2xl border border-pink-500/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">4K</div>
            <div className="text-gray-400">超高清材质</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
