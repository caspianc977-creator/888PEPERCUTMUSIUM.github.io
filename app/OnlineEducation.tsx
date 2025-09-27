
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function OnlineEducation() {
  const [currentText, setCurrentText] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);

  const dynamicTexts = [
    "线上教学平台",
    "智能化学习体验",
    "传承技艺的现代课堂"
  ];

  const lessons = [
    {
      id: 1,
      title: "基础入门课程",
      duration: "2小时",
      students: 1250,
      level: "初级",
      description: "从零开始学习剪纸基础知识和基本技法",
      thumbnail: "https://readdy.ai/api/search-image?query=Online%20education%20interface%20showing%20Chinese%20paper%20cutting%20beginner%20tutorial%2C%20clean%20modern%20UI%20design%2C%20video%20player%20with%20traditional%20craftswoman%20teaching%2C%20educational%20platform%20layout%2C%20step-by-step%20instructions&width=400&height=250&seq=lesson-basic&orientation=landscape",
      lessons: ["工具认识", "基本折法", "简单图案", "安全注意事项"],
      instructor: "张美华老师"
    },
    {
      id: 2,
      title: "花卉主题专修",
      duration: "3.5小时",
      students: 890,
      level: "中级",
      description: "深入学习各类花卉图案的剪纸技巧和设计要点",
      thumbnail: "https://readdy.ai/api/search-image?query=Advanced%20online%20paper%20cutting%20course%20showing%20intricate%20flower%20patterns%2C%20professional%20educational%20video%20interface%2C%20detailed%20close-up%20shots%20of%20cutting%20techniques%2C%20modern%20e-learning%20platform&width=400&height=250&seq=lesson-flower&orientation=landscape",
      lessons: ["牡丹花剪法", "梅花技巧", "菊花造型", "综合创作"],
      instructor: "黎艳青老师"
    },
    {
      id: 3,
      title: "动物造型精品",
      duration: "4小时",
      students: 672,
      level: "高级",
      description: "掌握复杂动物形象的剪纸技法和神韵表达",
      thumbnail: "https://readdy.ai/api/search-image?query=Expert%20level%20online%20paper%20cutting%20course%20featuring%20animal%20designs%2C%20sophisticated%20educational%20interface%2C%20master%20craftsman%20demonstrating%20dragon%20and%20phoenix%20patterns%2C%20premium%20learning%20experience&width=400&height=250&seq=lesson-animal&orientation=landscape",
      lessons: ["龙凤图案", "十二生肖", "鸟类造型", "创意设计"],
      instructor: "王德福老师"
    }
  ];

  const features = [
    {
      icon: "ri-play-circle-line",
      title: "高清视频教学",
      description: "4K超高清视频，每个细节都看得清楚"
    },
    {
      icon: "ri-user-line",
      title: "一对一指导",
      description: "专业老师在线答疑，个性化学习建议"
    },
    {
      icon: "ri-time-line",
      title: "灵活学习时间",
      description: "随时随地学习，支持离线下载观看"
    },
    {
      icon: "ri-medal-line",
      title: "完成证书",
      description: "课程完成后获得官方认证的学习证书"
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
      setActiveLesson((prev) => (prev + 1) % lessons.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* 科技背景效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.2) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* 动态光效 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 relative text-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 will-change-transform">
            <span 
              className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
              key={currentText}
              style={{
                animation: 'fadeInTechText 0.8s ease-out forwards'
              }}
            >
              {dynamicTexts[currentText]}
            </span>
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            专业的线上剪纸教学平台，让传统技艺学习变得简单高效
          </p>
          
          {/* 科技装饰线 */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            <div className="h-px w-8 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-pink-400 to-transparent"></div>
          </div>
        </div>

        {/* 主要课程展示 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="aspect-video rounded-xl overflow-hidden mb-6 relative">
                <img
                  src={lessons[activeLesson].thumbnail}
                  alt={lessons[activeLesson].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {lessons[activeLesson].level}
                </div>
                <div className="absolute center-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <i className="ri-play-fill text-2xl text-white"></i>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {lessons[activeLesson].duration}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{lessons[activeLesson].title}</h3>
              <p className="text-indigo-100 mb-4 leading-relaxed">{lessons[activeLesson].description}</p>
              
              <div className="flex items-center justify-between text-sm text-indigo-200 mb-6">
                <span>导师：{lessons[activeLesson].instructor}</span>
                <span>{lessons[activeLesson].students} 人已学习</span>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-indigo-300">课程内容</h4>
                {lessons[activeLesson].lessons.map((lesson, index) => (
                  <div key={index} className="flex items-center text-sm text-indigo-100">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3"></div>
                    {lesson}
                  </div>
                ))}
              </div>

              <Link href="/heritage-plan">
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  <i className="ri-play-circle-line mr-2"></i>
                  立即开始学习
                </button>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">为什么选择我们的课程？</h3>
            
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`${feature.icon} text-xl text-white`}></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-indigo-100 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 课程导航 */}
        <div className="flex justify-center space-x-4 mb-16">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              onClick={() => setActiveLesson(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeLesson === index
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-white/10 text-indigo-200 hover:bg-white/20 border border-white/20'
              }`}
            >
              {lesson.title}
            </button>
          ))}
        </div>

        {/* 学习统计 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-indigo-300 mb-2">2,812</div>
            <div className="text-indigo-200 text-sm">在线学员</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-purple-300 mb-2">15+</div>
            <div className="text-indigo-200 text-sm">精品课程</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-pink-300 mb-2">98%</div>
            <div className="text-indigo-200 text-sm">学员满意度</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-indigo-300 mb-2">24/7</div>
            <div className="text-indigo-200 text-sm">在线支持</div>
          </div>
        </div>

        {/* CTA部分 */}
        <div className="text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h3 className="text-4xl font-bold mb-6">开启您的剪纸学习之旅</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            加入我们的在线学习社区，与全球剪纸爱好者一起学习交流，传承这门美丽的艺术
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/heritage-plan">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
                <i className="ri-graduation-cap-line mr-2"></i>
                免费试听课程
              </button>
            </Link>
            <Link href="/stories">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
                <i className="ri-user-star-line mr-2"></i>
                了解名师团队
              </button>
            </Link>
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
        
        .center-center {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          position: absolute;
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
