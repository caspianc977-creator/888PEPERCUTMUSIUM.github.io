
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MasterSection() {
  const [currentText, setCurrentText] = useState(0);
  
  const dynamicTexts = [
    "传承人风采",
    "科技赋能传承",
    "数字化大师档案"
  ];

  const masters = [
    {
      id: 2,
      name: "黎艳青",
      title: "特邀传承人 · 郴州市级非遗传承人",
      specialty: "桂阳剪花 · 中华一刀剪",
      experience: "从艺30余年",
      avatar: "https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/aca9d5ed2b8e5186621db10af371dc9e.jfif",
      story: "桂阳剪花娘子，\"中华第一剪\"洪源大师大弟子，\"中华一刀剪\"第七代传人。能不间歇地剪出字、人物、动植物等完整作品，此技能在当今世上仅为凤毛麟角。",
      achievements: ["郴州市级非遗传承人", "中国剪纸艺术家协会会员", "郴州市工艺美术大师", "郴州市十大乡村名匠"],
      slug: "li-yanqing",
      featured: true,
      hasInterview: true,
      digitalWorks: 203,
      students: 89,
      preservedTechniques: 18,
      isSpecialGuest: true
    },
    {
      id: 1,
      name: "张美华",
      title: "国家级非遗传承人",
      specialty: "蔚县剪纸",
      experience: "从艺45年",
      avatar: "https://readdy.ai/api/search-image?query=Elderly%20Chinese%20female%20master%20craftsman%20portrait%2C%20kind%20smile%2C%20traditional%20clothing%2C%20experienced%20hands%2C%20cultural%20heritage%20expert%2C%20warm%20lighting%2C%20dignified%20appearance%2C%20paper%20cutting%20tools%20in%20background&width=200&height=200&seq=master-zhang&orientation=squarish",
      story: "自幼跟随祖母学习剪纸技艺，五十年来致力于蔚县剪纸的传承与创新，培养了百余名弟子。",
      achievements: ["国家级非遗传承人", "中国工艺美术大师", "联合国教科文组织民间艺术家"],
      slug: "zhang-meihua",
      digitalWorks: 156,
      students: 128,
      preservedTechniques: 23
    },
    {
      id: 3,
      name: "王德福",
      title: "市级非遗传承人",
      specialty: "山东剪纸",
      experience: "从艺32年",
      avatar: "https://readdy.ai/api/search-image?query=Senior%20Chinese%20male%20craftsman%20portrait%2C%20gentle%20smile%2C%20traditional%20clothing%2C%20experienced%20artisan%2C%20paper%20cutting%20studio%2C%20warm%20atmosphere%2C%20cultural%20preservation%20expert&width=200&height=200&seq=master-wang&orientation=squarish",
      story: "致力于山东剪纸技艺的挖掘整理，创建了剪纸博物馆，推广传统文化教育。",
      achievements: ["市级非遗传承人", "民间艺术研究学者", "文化传播先进个人"],
      slug: "wang-defu",
      digitalWorks: 134,
      students: 76,
      preservedTechniques: 15
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* 科技背景粒子效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-purple-900/20"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 69, 255, 0.15) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(139, 69, 255, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* 动态光晕效果 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 will-change-transform">
            <span 
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent"
              key={currentText}
              style={{
                animation: 'fadeInTechText 0.8s ease-out forwards'
              }}
            >
              {dynamicTexts[currentText]}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            致敬那些用心守护传统文化的匠人师傅
          </p>
          
          {/* 科技装饰线 */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
        </div>

        {/* 数据统计展示 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              493+
            </div>
            <div className="text-gray-400 text-sm">数字化作品存档</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              293+
            </div>
            <div className="text-gray-400 text-sm">传承学生培养</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              56+
            </div>
            <div className="text-gray-400 text-sm">技艺数字化保护</div>
          </div>
        </div>

        {/* 特邀传承人重点展示 */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">特邀传承人重点展示</h3>
          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-3xl p-8 border-4 border-gradient-to-r from-yellow-300 via-orange-300 to-red-300 relative overflow-hidden shadow-2xl"
              style={{
                animation: 'pulse-border 3s ease-in-out infinite',
                background: 'linear-gradient(135deg, rgba(254, 240, 138, 0.1) 0%, rgba(251, 191, 36, 0.1) 50%, rgba(239, 68, 68, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              {/* 金色背景光效 */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.3) 0%, transparent 70%)'
                }}
              ></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* 左侧头像 */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="relative inline-block">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl shadow-yellow-500/50">
                      <img
                        src="https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/aca9d5ed2b8e5186621db10af371dc9e.jfif"
                        alt="黎艳青"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    {/* 金色光环效果 */}
                    <div className="absolute -inset-2 rounded-full border-2 border-yellow-300 opacity-50 animate-ping"></div>
                  </div>
                </div>

                {/* 右侧信息内容 */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 mb-2">
                      黎艳青
                    </h4>
                    <p className="text-xl text-gray-700 font-medium">郴州市级非物质文化遗产传承人</p>
                  </div>

                  {/* 成就数据卡片 */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-yellow-200">
                      <div className="text-2xl font-bold text-yellow-600 mb-1">30+</div>
                      <div className="text-sm text-gray-600">传承年数</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-orange-200">
                      <div className="text-2xl font-bold text-orange-600 mb-1">1000+</div>
                      <div className="text-sm text-gray-600">代表作品</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-red-200">
                      <div className="text-2xl font-bold text-red-600 mb-1">万人次</div>
                      <div className="text-sm text-gray-600">培训学员</div>
                    </div>
                  </div>

                  {/* 主要成就 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-yellow-100">
                      <div className="flex items-center mb-2">
                        <i className="ri-award-fill text-yellow-500 mr-2"></i>
                        <span className="font-semibold text-gray-800">技艺传承</span>
                      </div>
                      <p className="text-sm text-gray-600">"中华一刀剪"第七代传人</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-orange-100">
                      <div className="flex items-center mb-2">
                        <i className="ri-trophy-fill text-orange-500 mr-2"></i>
                        <span className="font-semibold text-gray-800">获奖荣誉</span>
                      </div>
                      <p className="text-sm text-gray-600">多次获得省市级工艺美术奖项</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-red-100">
                      <div className="flex items-center mb-2">
                        <i className="ri-global-fill text-red-500 mr-2"></i>
                        <span className="font-semibold text-gray-800">文化交流</span>
                      </div>
                      <p className="text-sm text-gray-600">香港地区、韩国等地公益讲学</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-yellow-100">
                      <div className="flex items-center mb-2">
                        <i className="ri-teacher-fill text-yellow-500 mr-2"></i>
                        <span className="font-semibold text-gray-800">传承贡献</span>
                      </div>
                      <p className="text-sm text-gray-600">创办个人剪纸艺术馆两家</p>
                    </div>
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="/stories/masters/li-yanqing">
                      <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
                        <i className="ri-user-line mr-2"></i>
                        了解详情
                      </button>
                    </Link>
                    <button className="border-2 border-yellow-400 text-yellow-700 px-6 py-3 rounded-full font-semibold hover:bg-yellow-50 transition-all duration-300 cursor-pointer whitespace-nowrap">
                      <i className="ri-video-line mr-2"></i>
                      观看专题采访
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 其他传承人展示 */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">
            其他传承人
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {masters.filter(master => !master.isSpecialGuest).map((master) => (
            <div key={master.id} className={`bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 hover:shadow-cyan-500/20 transition-all duration-300 border border-cyan-500/20 relative group overflow-hidden`}>
              {/* 边角扫描线效果 */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* 进度条装饰 */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500"></div>
              
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src={master.avatar}
                        alt={master.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{master.name}</h3>
                <p className="text-cyan-400 font-medium mb-1">{master.title}</p>
                <p className="text-gray-400 text-sm">{master.specialty} · {master.experience}</p>
              </div>

              {/* 数字化数据展示 */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="text-center bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
                  <div className="text-lg font-bold text-cyan-400">{master.digitalWorks}</div>
                  <div className="text-xs text-gray-400">数字作品</div>
                </div>
                <div className="text-center bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                  <div className="text-lg font-bold text-purple-400">{master.students}</div>
                  <div className="text-xs text-gray-400">培养学生</div>
                </div>
                <div className="text-center bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
                  <div className="text-lg font-bold text-cyan-300">{master.preservedTechniques}</div>
                  <div className="text-xs text-gray-400">技艺保护</div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-center text-sm">
                {master.story}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-cyan-400 mb-3 flex items-center">
                  <i className="ri-medal-line mr-2"></i>
                  主要成就
                </h4>
                {master.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></div>
                    {achievement}
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href={`/stories/masters/${master.slug}`}>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200 whitespace-nowrap cursor-pointer">
                    <i className="ri-user-line mr-2"></i>
                    了解详情
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-cyan-500/20 relative overflow-hidden group">
          {/* 科技装饰边框 */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 opacity-50"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400 opacity-50"></div>
          <div className="absolute bottom-0 right-8 w-8 h-8 border-b-2 border-r-2 border-cyan-400 opacity-50"></div>

          <div className="text-center relative">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              数字传承计划
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              我们致力于为传承人提供更好的传承平台，通过数字化技术记录和保护传统技艺，
              让更多年轻人了解并参与到非遗文化的传承中来。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                  <i className="ri-graduation-cap-line text-2xl text-cyan-400"></i>
                </div>
                <h4 className="font-semibold text-cyan-400 mb-2">AI智能教学</h4>
                <p className="text-sm text-gray-400">线上线下相结合的智能化教学模式</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl p-6 border border-purple-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <i className="ri-camera-line text-2xl text-purple-400"></i>
                </div>
                <h4 className="font-semibold text-purple-400 mb-2">8K技艺记录</h4>
                <p className="text-sm text-gray-400">超高清视频记录制作过程</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                  <i className="ri-global-line text-2xl text-cyan-400"></i>
                </div>
                <h4 className="font-semibold text-cyan-400 mb-2">全球数字展示</h4>
                <p className="text-sm text-gray-400">面向全球的数字化展示平台</p>
              </div>
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
