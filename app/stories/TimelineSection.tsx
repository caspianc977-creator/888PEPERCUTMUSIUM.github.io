
'use client';

import { useEffect, useRef, useState } from 'react';

export default function TimelineSection() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);
  const [currentText, setCurrentText] = useState(0);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  const dynamicTexts = [
    "千年传承大事记",
    "数字化文化传承",
    "科技赋能非遗保护"
  ];

  const timelineEvents = [
    {
      id: 1,
      year: "汉代",
      period: "公元前206年-公元220年",
      title: "剪纸艺术萌芽",
      description: "纸张发明后，民间开始出现简单的纸张装饰艺术，多用于祭祀和节庆活动。",
      image: "https://readdy.ai/api/search-image?query=Ancient%20Chinese%20Han%20dynasty%20paper%20cutting%20art%2C%20traditional%20red%20paper%20with%20simple%20patterns%2C%20historical%20cultural%20artifacts%2C%20museum%20display%2C%20warm%20ancient%20lighting%2C%20paper%20texture%20details%2C%20classical%20Chinese%20aesthetics&width=600&height=400&seq=timeline-han&orientation=landscape",
      audioText: "汉代是剪纸艺术的萌芽期，随着造纸术的发明，人们开始在纸张上进行装饰性的裁剪，这些早期的剪纸作品多用于祭祀仪式和节庆庆典。",
      relatedCourse: "剪纸历史文化课程"
    },
    {
      id: 2,
      year: "唐代",
      period: "公元618年-907年",
      title: "技艺初步成型",
      description: "剪纸技法逐渐丰富，出现了较为复杂的图案设计，开始在宫廷和民间广泛流传。",
      image: "https://readdy.ai/api/search-image?query=Tang%20dynasty%20Chinese%20paper%20cutting%20art%2C%20elaborate%20golden%20palace%20decorations%2C%20intricate%20patterns%2C%20imperial%20court%20setting%2C%20luxurious%20traditional%20atmosphere%2C%20detailed%20craftsmanship%2C%20historical%20elegance&width=600&height=400&seq=timeline-tang&orientation=landscape",
      audioText: "唐代盛世为剪纸艺术的发展提供了肥沃的土壤，技法日趋成熟，图案设计更加精美复杂，不仅在民间盛行，也深受宫廷贵族的喜爱。",
      relatedCourse: "传统图案设计基础"
    },
    {
      id: 3,
      year: "宋代",
      period: "公元960年-1279年",
      title: "艺术繁荣发展",
      description: "剪纸艺术达到新的高度，出现了专业的剪纸艺人，技法更加精湛，题材更加丰富。",
      image: "https://readdy.ai/api/search-image?query=Song%20dynasty%20Chinese%20paper%20cutting%20masters%20working%20in%20traditional%20workshop%2C%20delicate%20hands%20creating%20intricate%20floral%20patterns%2C%20ancient%20tools%20and%20materials%2C%20scholarly%20atmosphere%2C%20refined%20artistic%20environment&width=600&height=400&seq=timeline-song&orientation=landscape",
      audioText: "宋代是剪纸艺术的繁荣期，出现了许多专业的剪纸艺人，他们的作品技法精湛，题材涵盖花鸟虫鱼、人物故事等，艺术水准达到了新的高度。",
      relatedCourse: "花鸟剪纸技法"
    },
    {
      id: 4,
      year: "明清",
      period: "公元1368年-1911年",
      title: "地方风格形成",
      description: "各地形成了独特的剪纸风格，如山东的粗犷豪放、江南的精细秀美，技艺传承体系日趋完善。",
      image: "https://readdy.ai/api/search-image?query=Ming%20Qing%20dynasty%20Chinese%20paper%20cutting%20regional%20styles%2C%20comparison%20of%20northern%20bold%20patterns%20and%20southern%20delicate%20designs%2C%20traditional%20craftsmen%2C%20cultural%20diversity%2C%20historical%20workshop%20setting&width=600&height=400&seq=timeline-mingqing&orientation=landscape",
      audioText: "明清两代，剪纸艺术呈现出鲜明的地方特色，北方剪纸粗犷豪放，南方剪纸精细秀美，各地都形成了独特的风格和传承体系。",
      relatedCourse: "地方剪纸流派研究"
    },
    {
      id: 5,
      year: "近代",
      period: "公元1912年-1949年",
      title: "传统与现代交融",
      description: "剪纸艺术在保持传统特色的同时，开始融入现代元素，题材和表现手法更加多样化。",
      image: "https://readdy.ai/api/search-image?query=Modern%20Chinese%20paper%20cutting%20art%20early%2020th%20century%2C%20blend%20of%20traditional%20and%20contemporary%20themes%2C%20urban%20and%20rural%20scenes%2C%20cultural%20transformation%20period%2C%20artistic%20innovation&width=600&height=400&seq=timeline-modern&orientation=landscape",
      audioText: "近代时期，剪纸艺术在传承传统的基础上，开始融入时代特色，题材更加丰富多样，表现手法也有了新的突破和创新。",
      relatedCourse: "现代剪纸创新技法"
    },
    {
      id: 6,
      year: "当代",
      period: "公元1949年至今",
      title: "非遗保护传承",
      description: "剪纸被列入国家级非物质文化遗产，通过数字化技术实现更好的保护、传承和发展。",
      image: "https://readdy.ai/api/search-image?query=Contemporary%20Chinese%20paper%20cutting%20art%20digital%20preservation%2C%20modern%20museum%20display%2C%20young%20people%20learning%20traditional%20craft%2C%20cultural%20heritage%20protection%2C%20high-tech%20documentation%2C%20intergenerational%20transmission&width=600&height=400&seq=timeline-contemporary&orientation=landscape",
      audioText: "当代剪纸艺术在非遗保护政策的支持下，通过数字化手段得到更好的保护和传承，同时也在创新中焕发出新的生机和活力。",
      relatedCourse: "数字化剪纸创作"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const playAudio = (itemId: number, text: string) => {
    // 停止其他正在播放的音频
    Object.values(audioRefs.current).forEach(audio => {
      if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (playingAudio === itemId) {
      setPlayingAudio(null);
      return;
    }

    // 使用 Web Speech API 进行文本转语音
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      utterance.onstart = () => setPlayingAudio(itemId);
      utterance.onend = () => setPlayingAudio(null);
      utterance.onerror = () => setPlayingAudio(null);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      (item as HTMLElement).style.transform = 'translateY(30px)';
      (item as HTMLElement).style.opacity = '0';
      (item as HTMLElement).style.transition = 'all 0.6s ease-out';
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      {/* 科技背景粒子效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 69, 255, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(139, 69, 255, 0.05) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* 动态光晕效果 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            从汉代萌芽到当代传承，见证剪纸艺术跨越千年的传承历程
          </p>
          
          {/* 科技装饰线 */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
        </div>

        <div className="relative">
          {/* 科技时间线主轴 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-400 rounded-full shadow-lg shadow-cyan-500/50"></div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* 科技时间节点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-black shadow-lg shadow-cyan-500/50 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* 科技内容卡片 */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div 
                    className="bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl shadow-2xl p-6 hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer border border-cyan-500/20 relative group overflow-hidden"
                    onClick={() => setActiveItem(activeItem === event.id ? null : event.id)}
                  >
                    {/* 边角扫描线效果 */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {event.year}
                      </div>
                      <span className="text-gray-400 text-sm">{event.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                    
                    <div className="relative mb-4 rounded-lg overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">{event.description}</p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playAudio(event.id, event.audioText);
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                          playingAudio === event.id
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30'
                            : 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 border border-cyan-500/30'
                        }`}
                      >
                        <i className={`${playingAudio === event.id ? 'ri-pause-line' : 'ri-volume-up-line'}`}></i>
                        {playingAudio === event.id ? '暂停朗读' : '语音朗读'}
                      </button>

                      <button className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium hover:bg-purple-500/30 transition-colors duration-200 whitespace-nowrap cursor-pointer border border-purple-500/30">
                        <i className="ri-book-open-line"></i>
                        {event.relatedCourse}
                      </button>
                    </div>

                    {/* 展开详情 */}
                    {activeItem === event.id && (
                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                          <h4 className="font-semibold text-cyan-400 mb-2">详细介绍</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {event.audioText}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 进度条装饰 */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* 占位空间 */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部科技装饰 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-2xl shadow-cyan-500/20 border border-cyan-500/20">
            <i className="ri-time-line text-2xl text-cyan-400"></i>
            <span className="text-gray-300 font-medium">传承至今，薪火相传</span>
            <i className="ri-fire-line text-2xl text-purple-400"></i>
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