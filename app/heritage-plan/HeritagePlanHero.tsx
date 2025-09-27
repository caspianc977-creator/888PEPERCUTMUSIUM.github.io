
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeritagePlanHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=traditional%20Chinese%20papercut%20master%20teaching%20students%20in%20bright%20modern%20classroom%20environment%2C%20elderly%20craftsman%20demonstrating%20cutting%20techniques%2C%20warm%20educational%20atmosphere%2C%20cultural%20knowledge%20transfer%2C%20traditional%20art%20meets%20modern%20education%20setting&width=1920&height=1080&seq=heritage1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className={`space-y-8 text-white transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-400/30">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-red-300">传承计划 · Heritage Plan</span>
                  </div>
                  
                  {/* Title */}
                  <div className="space-y-4">
                    <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                      <span className="block bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
                        传承千年
                      </span>
                      <span className="block text-red-400 mt-2">
                        技艺传承
                      </span>
                    </h1>
                    
                    <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                      我们致力于为传承人提供更好的传承平台，通过数字化技术记录和保护传统技艺，让更多年轻人了解并参与到非遗文化的传承中来。
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                    {[
                      {
                        icon: "ri-graduation-cap-line",
                        title: "技艺传授",
                        desc: "线上线下相结合的教学模式"
                      },
                      {
                        icon: "ri-video-line", 
                        title: "技艺记录",
                        desc: "高清视频记录制作过程"
                      },
                      {
                        icon: "ri-global-line",
                        title: "文化推广", 
                        desc: "面向全球的数字化展示"
                      }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 will-change-transform hover:scale-105"
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                            <i className={`${item.icon} text-red-400 w-5 h-5 flex items-center justify-center`}></i>
                          </div>
                          <h3 className="font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-sm text-gray-300">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      href="#courses"
                      className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 cursor-pointer whitespace-nowrap overflow-hidden will-change-transform"
                    >
                      <span className="relative z-10 flex items-center space-x-2">
                        <span>查看课程</span>
                        <i className="ri-arrow-right-line text-lg w-5 h-5 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300"></i>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-300 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </Link>
                    
                    <Link
                      href="#join"
                      className="group px-8 py-4 border-2 border-white/30 backdrop-blur-sm rounded-xl font-bold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 cursor-pointer whitespace-nowrap will-change-transform"
                    >
                      <span className="flex items-center space-x-2">
                        <span>申请加入</span>
                        <i className="ri-user-add-line text-lg w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Content - Video Player */}
              <div className="lg:col-span-5">
                <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="relative group">
                    {/* Glass Card Container */}
                    <div 
                      className="relative p-6 rounded-2xl backdrop-blur-sm border border-white/20 will-change-transform group-hover:scale-105 transition-transform duration-500"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)'
                      }}
                    >
                      {/* Video Container */}
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                        <img
                          src="https://readdy.ai/api/search-image?query=master%20papercut%20artist%20hands%20creating%20intricate%20traditional%20Chinese%20patterns%2C%20close-up%20view%20of%20skilled%20craftsmanship%2C%20red%20paper%20cutting%20technique%20demonstration%2C%20educational%20video%20thumbnail%20style%2C%20high%20quality%20documentation&width=640&height=360&seq=heritage2&orientation=landscape"
                          alt="传承课程预览"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Link
                            href="https://vercel.com/new?teamSlug=caspians-projects-ee82b828"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/play w-16 h-16 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 hover:scale-110 transition-all duration-300 cursor-pointer"
                            aria-label="播放视频"
                          >
                            <i className="ri-play-fill text-white text-2xl ml-1 w-8 h-8 flex items-center justify-center"></i>
                          </Link>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-white">传承大师课程精选</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-300">
                            <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                            <span>12.8万观看</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm">国家级非遗传承人张雪莲老师亲自示范传统剪纸技法，从基础到进阶全面讲解。</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center space-x-1">
                              <i className="ri-time-line w-3 h-3 flex items-center justify-center"></i>
                              <span>120分钟</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <i className="ri-star-fill text-yellow-400 w-3 h-3 flex items-center justify-center"></i>
                              <span>4.9</span>
                            </span>
                          </div>
                          <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded-full text-xs">国家级</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-white/10 rounded-full h-1">
                          <div className="bg-gradient-to-r from-red-500 to-red-400 h-1 rounded-full w-1/3"></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full text-white text-xs font-bold animate-pulse">
                      NEW
                    </div>
                  </div>
                  
                  {/* Side Stats */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      { number: "200+", label: "专业课程", icon: "ri-book-open-line" },
                      { number: "15位", label: "国家级大师", icon: "ri-award-line" }
                    ].map((stat, index) => (
                      <div 
                        key={index}
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                      >
                        <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-red-500/20 flex items-center justify-center">
                          <i className={`${stat.icon} text-red-400 w-5 h-5 flex items-center justify-center`}></i>
                        </div>
                        <div className="text-xl font-bold text-white">{stat.number}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Performance optimizations */
        .will-change-transform {
          will-change: transform, opacity;
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .animate-spin {
            animation: none;
          }
          
          .transition-all,
          .transition-transform {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
