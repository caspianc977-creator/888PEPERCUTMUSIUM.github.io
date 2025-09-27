
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GlobalPromotion() {
  const [currentText, setCurrentText] = useState(0);

  const dynamicTexts = [
    "非遗剪纸·世界瑰宝",
    "千年技艺·国际传承",
    "文化桥梁·全球共享"
  ];

  const globalHighlights = [
    {
      region: "东亚文化圈",
      countries: 8,
      description: "日本、韩国等国家将中国剪纸纳入文化课程",
      flag: "🌸",
      color: "from-rose-500/20 to-pink-500/20",
      achievements: ["东京艺术大学开设剪纸专业课", "首尔文化中心常设展览", "台北故宫博物院收藏展示"]
    },
    {
      region: "欧美艺术圈",
      countries: 15,
      description: "西方艺术界高度认可剪纸的艺术价值",
      flag: "🎨",
      color: "from-blue-500/20 to-indigo-500/20",
      achievements: ["纽约现代艺术博物馆专题展", "巴黎装饰艺术博物馆收藏", "伦敦V&A博物馆教育项目"]
    },
    {
      region: "联合国教科文",
      countries: 195,
      description: "被誉为人类非物质文化遗产的杰出代表",
      flag: "🌍",
      color: "from-emerald-500/20 to-teal-500/20",
      achievements: ["2009年列入人类非遗名录", "全球保护与传承典范", "国际文化交流使者"]
    }
  ];

  const culturalImpact = [
    {
      title: "艺术价值",
      description: "独特的镂空艺术形式，展现东方美学精髓",
      icon: "ri-palette-line",
      stats: "1500+年历史",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "文化内涵", 
      description: "承载丰富民俗文化，传递美好生活愿景",
      icon: "ri-book-open-line",
      stats: "100+种寓意",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "技艺传承",
      description: "口传心授的匠人精神，代代相传的文化基因",
      icon: "ri-hand-heart-line",
      stats: "千位传承人",
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      title: "创新融合",
      description: "传统工艺与现代设计完美结合，焕发新活力",
      icon: "ri-lightbulb-line", 
      stats: "无限可能",
      gradient: "from-orange-400 to-red-400"
    }
  ];

  const worldRecognition = [
    {
      organization: "联合国教科文组织",
      recognition: "人类非物质文化遗产代表作",
      year: "2009",
      significance: "全球文化多样性的重要组成部分",
      icon: "ri-earth-line"
    },
    {
      organization: "国际民间艺术组织",
      recognition: "世界民间艺术珍品",
      year: "持续认证",
      significance: "展现人类创造力的杰出典范",
      icon: "ri-award-line"
    },
    {
      organization: "世界手工艺理事会",
      recognition: "传统手工艺术瑰宝",
      year: "长期支持",
      significance: "手工艺术传承保护的成功案例",
      icon: "ri-hand-coin-line"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 精美背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/30 to-blue-900/20"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20patterns%20elegant%20texture%2C%20intricate%20red%20paper%20cutouts%2C%20flowing%20artistic%20designs%2C%20cultural%20heritage%20motifs%2C%20seamless%20decorative%20background%2C%20classical%20Chinese%20aesthetic%20elements&width=400&height=400&seq=cultbg001&orientation=squarish')`,
            backgroundSize: '300px 300px'
          }}
        />
        
        {/* 动态光效 */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* 剪纸元素装饰 */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-20 animate-float">
        <img 
          src="https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20phoenix%20pattern%2C%20elegant%20red%20cutout%20design%2C%20flowing%20feathers%20and%20graceful%20pose%2C%20cultural%20symbol%20of%20beauty%20and%20grace%2C%20artistic%20silhouette%2C%20decorative%20element&width=128&height=128&seq=phoenix001&orientation=squarish"
          alt=""
          className="w-full h-full object-contain filter brightness-150"
        />
      </div>
      
      <div className="absolute bottom-20 left-10 w-28 h-28 opacity-15 animate-float-delayed">
        <img 
          src="https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20lotus%20flower%20pattern%2C%20delicate%20red%20cutout%20design%2C%20blooming%20petals%20and%20leaves%2C%20symbol%20of%20purity%20and%20elegance%2C%20artistic%20botanical%20motif&width=112&height=112&seq=lotus001&orientation=squarish"
          alt=""
          className="w-full h-full object-contain filter brightness-125"
        />
      </div>

      <div className="container mx-auto px-6 relative text-white">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm border border-red-400/30 text-red-300 font-semibold">
              🏮 国家级非物质文化遗产 🏮
            </span>
          </div>
          
          <h2 className="text-6xl font-bold mb-6 will-change-transform">
            <span 
              className="bg-gradient-to-r from-red-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
              key={currentText}
              style={{
                animation: 'fadeInTechText 0.8s ease-out forwards',
                fontFamily: '"Source Han Sans CN", "Noto Sans SC", sans-serif'
              }}
            >
              {dynamicTexts[currentText]}
            </span>
          </h2>
          <p className="text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
            中华剪纸艺术，以其独特的镂空美学和深厚的文化内涵，成为连接东西方文化的重要桥梁，
            在全球范围内展现着中华文明的博大精深和艺术魅力
          </p>
          
          {/* 装饰性分割线 */}
          <div className="flex items-center justify-center space-x-8 mt-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
            <div className="text-3xl">✨</div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="text-3xl">🎨</div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
            <div className="text-3xl">✨</div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
          </div>
        </div>

        {/* 全球认知度展示 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {globalHighlights.map((region, index) => (
            <div key={index} className={`bg-gradient-to-br ${region.color} backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 group`}>
              <div className="text-center mb-6">
                <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {region.flag}
                </div>
                <h3 className="text-2xl font-bold mb-2">{region.region}</h3>
                <div className="text-purple-200 text-sm mb-4">覆盖 {region.countries} 个国家和地区</div>
                <p className="text-purple-100 leading-relaxed">{region.description}</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-center mb-4">重要成就</h4>
                {region.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="bg-white/10 rounded-lg px-4 py-2 text-sm text-center backdrop-blur-sm">
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 文化价值展示 */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-red-300 to-purple-300 bg-clip-text text-transparent">
              文化价值与艺术内涵
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalImpact.map((impact, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${impact.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${impact.icon} text-2xl text-white`}></i>
                </div>
                <h4 className="text-xl font-bold mb-3">{impact.title}</h4>
                <p className="text-purple-100 text-sm mb-4 leading-relaxed">{impact.description}</p>
                <div className={`text-lg font-bold bg-gradient-to-r ${impact.gradient} bg-clip-text text-transparent`}>
                  {impact.stats}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 国际认可度 */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              国际权威认可
            </span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {worldRecognition.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${item.icon} text-3xl text-white`}></i>
                </div>
                <h4 className="text-xl font-bold mb-2">{item.organization}</h4>
                <div className="text-2xl font-bold text-red-300 mb-2">{item.recognition}</div>
                <div className="text-purple-200 text-sm mb-4">{item.year}</div>
                <p className="text-purple-100 text-sm leading-relaxed">{item.significance}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 传承现状与未来 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent">
                传承现状与发展
              </span>
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-user-star-line text-red-400"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-xl">传承人保护</h4>
                  <p className="text-purple-100 leading-relaxed">国家级传承人24位，省市级传承人数百位，建立完善的传承人保护体系，确保技艺代代相传</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-school-line text-purple-400"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-xl">教育推广</h4>
                  <p className="text-purple-100 leading-relaxed">全国500+所学校开设剪纸课程，培养青少年对传统文化的兴趣，让非遗文化在校园中生根发芽</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-global-line text-pink-400"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-xl">国际交流</h4>
                  <p className="text-purple-100 leading-relaxed">参与国际文化节庆活动，举办海外展览巡演，让世界各国人民近距离感受中华剪纸的独特魅力</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-smartphone-line text-cyan-400"></i>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-xl">数字化创新</h4>
                  <p className="text-purple-100 leading-relaxed">运用3D建模、AR技术等现代科技手段，为传统剪纸注入新的活力，拓展传承与展示的新途径</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
              <div className="text-center mb-8">
                <h4 className="text-3xl font-bold mb-6">全球影响力数据</h4>
                <div className="aspect-square bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-8 w-56 h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-purple-400/10 animate-spin" style={{ animationDuration: '25s' }}></div>
                  <div className="text-8xl">🎨</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-red-300 mb-2">1500+</div>
                  <div className="text-sm text-purple-100">年历史传承</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-purple-300 mb-2">60+</div>
                  <div className="text-sm text-purple-100">国家了解</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-pink-300 mb-2">100+</div>
                  <div className="text-sm text-purple-100">博物馆收藏</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-red-300 mb-2">∞</div>
                  <div className="text-sm text-purple-100">文化价值</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 精美的CTA部分 */}
        <div className="text-center bg-gradient-to-br from-red-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-16 border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="relative z-10">
            <div className="mb-8">
              <div className="text-6xl mb-4">🌸</div>
              <h3 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  传承千年文化，共绘美好未来
                </span>
              </h3>
              <p className="text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                让我们携手保护和传承这份珍贵的文化遗产，让中华剪纸艺术在全球绽放更加绚烂的光彩，
                为人类文化多样性贡献东方智慧
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/heritage-plan">
                <button className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">
                  <i className="ri-heart-line mr-3"></i>
                  加入传承行动
                </button>
              </Link>
              <Link href="/gallery">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">
                  <i className="ri-gallery-line mr-3"></i>
                  欣赏精品作品
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInTechText {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(8deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: -3s;
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
          
          .animate-float,
          .animate-float-delayed {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
