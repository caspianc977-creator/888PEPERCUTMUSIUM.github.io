
'use client';

import { useState, useEffect, useRef } from 'react';

export default function TeamSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const teamMembers = [
    {
      id: 1,
      name: "廖浩丞",
      role: "队长",
      university: "郴州市一中",
      major: "高中学生",
      avatar: "https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/c9c99a1a8b9216aa84c4e9f1392f2ad7.jfif",
      skills: ["团队协作", "项目管理", "领导能力"],
      description: "队长，负责团队整体协调和项目规划",
      gradient: "from-yellow-500 to-orange-500",
      isLeader: true
    },
    {
      id: 2,
      name: "李俊",
      role: "核心成员",
      university: "郴州市一中",
      major: "高中学生",
      avatar: "https://readdy.ai/api/search-image?query=Young%20Chinese%20male%20high%20school%20student%20portrait%2C%20friendly%20smile%2C%20school%20uniform%2C%20academic%20atmosphere%2C%20team%20member%2C%20studious%20appearance&width=300&height=400&seq=team-li-jun-vertical&orientation=portrait",
      skills: ["学术研究", "资料整理", "文档编写"],
      description: "负责项目资料收集和整理工作",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "唐好",
      role: "核心成员",
      university: "郴州市一中",
      major: "高中学生",
      avatar: "https://readdy.ai/api/search-image?query=Young%20Chinese%20male%20high%20school%20student%20portrait%2C%20gentle%20smile%2C%20school%20uniform%2C%20creative%20mindset%2C%20team%20collaboration%2C%20academic%20setting&width=300&height=400&seq=team-tang-hao-vertical&orientation=portrait",
      skills: ["创意策划", "内容创作", "团队合作"],
      description: "负责创意策划和内容创作",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "王紫婷",
      role: "核心成员",
      university: "郴州市一中",
      major: "高中学生",
      avatar: "https://readdy.ai/api/search-image?query=Young%20Chinese%20female%20high%20school%20student%20portrait%2C%20bright%20smile%2C%20school%20uniform%2C%20academic%20excellence%2C%20team%20spirit%2C%20confident%20appearance&width=300&height=400&seq=team-wang-ziting-vertical&orientation=portrait",
      skills: ["设计美工", "视觉创意", "细致入微"],
      description: "负责视觉设计和美工创作",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      id: 5,
      name: "陈玉婷",
      role: "核心成员",
      university: "郴州市一中",
      major: "高中学生",
      avatar: "https://readdy.ai/api/search-image?query=Young%20Chinese%20female%20high%20school%20student%20portrait%2C%20warm%20smile%2C%20school%20uniform%2C%20studious%20nature%2C%20team%20collaboration%2C%20academic%20background&width=300&height=400&seq=team-chen-yuting-vertical&orientation=portrait",
      skills: ["数据分析", "逻辑思维", "问题解决"],
      description: "负责数据分析和逻辑规划",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      id: 6,
      name: "廖顺和",
      role: "核心成员",
      university: "郴州市一中",
      major: "高中学生",
      avatar: "https://readdy.ai/api/search-image?query=Young%20Chinese%20male%20high%20school%20student%20portrait%2C%20friendly%20expression%2C%20school%20uniform%2C%20reliable%20character%2C%20team%20player%2C%20academic%20atmosphere&width=300&height=400&seq=team-liao-shunhe-vertical&orientation=portrait",
      skills: ["技术支持", "设备维护", "后勤保障"],
      description: "负责技术支持和后勤保障工作",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      id: 7,
      name: "刘融臻",
      role: "核心成员",
      university: "郴州市一中",
      major: "高中学生",
      avatar: "https://readdy.ai/api/search-image?query=Young%20Chinese%20male%20high%20school%20student%20portrait%2C%20sincere%20smile%2C%20school%20uniform%2C%20academic%20focus%2C%20team%20dedication%2C%20scholarly%20appearance&width=300&height=400&seq=team-liu-rongzhen-vertical&orientation=portrait",
      skills: ["调研分析", "文案撰写", "沟通协调"],
      description: "负责调研分析和文案撰写",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      id: 8,
      name: "胡艺泷",
      role: "核心成员",
      university: "郴州市一中",
      major: "高中学生",
      avatar: "https://readdy.ai/api/search-image?query=Young%20Chinese%20male%20high%20school%20student%20portrait%2C%20creative%20expression%2C%20school%20uniform%2C%20artistic%20mindset%2C%20team%20innovation%2C%20academic%20setting&width=300&height=400&seq=team-hu-yilong-vertical&orientation=portrait",
      skills: ["艺术创作", "创新思维", "美学设计"],
      description: "负责艺术创作和创新设计",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 9,
      name: "肖文强",
      role: "核心成员",
      university: "郴州市一中",
      major: "高中学生",
      avatar: "https://readdy.ai/api/search-image?query=Young%20Chinese%20male%20high%20school%20student%20portrait%2C%20determined%20expression%2C%20school%20uniform%2C%20strong%20character%2C%20team%20support%2C%20academic%20excellence&width=300&height=400&seq=team-xiao-wenqiang-vertical&orientation=portrait",
      skills: ["执行力强", "细节把控", "质量监督"],
      description: "负责项目执行和质量监督",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  // IntersectionObserver for staggered card animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    setVisibleCards(new Array(teamMembers.length).fill(false));

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                requestAnimationFrame(() => {
                  setVisibleCards(prev => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                  });
                });
              }, index * 100);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [teamMembers.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* 科技背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* 动态网格背景 */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* 鼠标跟随光效 */}
      <div 
        className="absolute pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 70%)',
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
            郴州市一中团队
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            以廖浩丞为队长的高中生团队，致力于传统文化的传承与创新
          </p>
          
          {/* 团队数据统计 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">9</div>
              <div className="text-gray-400 text-sm">核心成员</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
              <div className="text-gray-400 text-sm">优秀队长</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">团队协作</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-400 text-sm">创新精神</div>
            </div>
          </div>
        </div>

        {/* 竖直卡片展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              ref={el => {
                if (el) cardRefs.current[index] = el;
              }}
              className={`team-card group cursor-pointer transition-all duration-700 ease-out ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              } ${member.isLeader ? 'md:col-span-2 lg:col-span-1' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className={`glass-card relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-white/30 ${
                member.isLeader ? 'h-96 border-yellow-400/30' : 'h-80'
              }`}
                style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)`,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: member.isLeader 
                    ? '0 20px 60px rgba(255, 193, 7, 0.2), 0 8px 32px rgba(0, 0, 0, 0.3)' 
                    : '0 15px 40px rgba(0, 0, 0, 0.2)'
                }}
              >
                {/* 队长标识和渐变背景 */}
                <div 
                  className="absolute top-0 left-0 w-full h-32 opacity-20"
                  style={{
                    background: `linear-gradient(135deg, ${member.gradient.replace('from-', '').replace(' to-', ', ')})`
                  }}
                />
                
                {member.isLeader && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold z-20 shadow-lg">
                    队长
                  </div>
                )}

                {/* 头像区域 */}
                <div className="relative p-6 text-center">
                  <div className={`mx-auto ${member.isLeader ? 'w-24 h-24' : 'w-20 h-20'} rounded-full overflow-hidden border-4 ${
                    member.isLeader ? 'border-yellow-400' : 'border-white/30'
                  } shadow-xl group-hover:border-white transition-all duration-300`}>
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* 姓名和角色 */}
                  <h3 className={`${member.isLeader ? 'text-xl' : 'text-lg'} font-bold text-white mt-4 mb-2`}>
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">{member.role}</p>
                  <p className="text-gray-500 text-xs mb-4">{member.university}</p>

                  {/* 技能标签 */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/20 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* 描述 */}
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.description}
                  </p>
                </div>

                {/* 悬停时的装饰效果 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                {/* 底部装饰条 */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${member.gradient.replace('from-', '').replace(' to-', ', ')})`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 团队介绍卡片 */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">关于我们</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              我们是来自郴州市一中的高中生团队，在队长廖浩丞的带领下，致力于传统文化的学习、研究和传承。
              每个成员都有自己的专长和特色，共同为保护和发扬非物质文化遗产贡献青春力量。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-2xl text-blue-400"></i>
                </div>
                <h4 className="font-semibold text-white mb-2">团队协作</h4>
                <p className="text-gray-400 text-sm">发挥每个人的优势，共同完成项目</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lightbulb-line text-2xl text-purple-400"></i>
                </div>
                <h4 className="font-semibold text-white mb-2">创新思维</h4>
                <p className="text-gray-400 text-sm">用年轻人的视角传承传统文化</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-line text-2xl text-blue-400"></i>
                </div>
                <h4 className="font-semibold text-white mb-2">文化传承</h4>
                <p className="text-gray-400 text-sm">用心守护和传承传统文化瑰宝</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-card {
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .glass-card:hover {
          transform: scale(1.05) translateZ(0);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }
        
        .team-card {
          transition: transform 0.3s ease-out, opacity 0.7s ease-out;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .glass-card,
          .team-card {
            transition: none !important;
            transform: none !important;
          }
          
          .glass-card:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
