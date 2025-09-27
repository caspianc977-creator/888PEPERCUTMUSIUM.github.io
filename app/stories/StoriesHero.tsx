
'use client';

import { useEffect, useState } from 'react';

export default function StoriesHero() {
  const [currentText, setCurrentText] = useState(0);
  
  const storyTexts = [
    {
      title: "千年传承",
      subtitle: "剪纸的故事",
      description: "每一刀每一剪，都承载着千年文化的传承。在这里，聆听剪纸艺术背后的动人故事，感受非物质文化遗产的深厚底蕴与传承人的匠心精神。"
    },
    {
      title: "匠心传承", 
      subtitle: "大师的故事",
      description: "从祖传技艺到现代传承，每位大师都有着独特的人生轨迹。他们用一生的坚持，守护着这项古老的艺术，让传统文化在新时代绽放光彩。"
    },
    {
      title: "文化传承",
      subtitle: "非遗的故事", 
      description: "剪纸不仅是一门技艺，更是中华文化的重要载体。从节庆习俗到生活美学，剪纸艺术深深融入中国人的精神世界，传递着美好的祝愿。"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % storyTexts.length);
    }, 4500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 pt-24 bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20art%20heritage%20master%20craftsman%20working%20with%20red%20paper%20in%20ancient%20workshop%2C%20warm%20lighting%2C%20cultural%20atmosphere%2C%20detailed%20hands%20cutting%20intricate%20patterns%2C%20traditional%20tools%2C%20peaceful%20concentration%2C%20historical%20setting&width=1200&height=600&seq=stories-hero-bg&orientation=landscape')`
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-6 mb-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span 
                className="block bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent will-change-transform"
                key={`title-${currentText}`}
                style={{
                  animation: 'fadeInStoryText 0.8s ease-out forwards'
                }}
              >
                {storyTexts[currentText].title}
              </span>
              <span 
                className="block text-4xl md:text-5xl text-red-400 mt-2 will-change-transform"
                key={`subtitle-${currentText}`}
                style={{
                  animation: 'fadeInStoryText 0.8s ease-out 0.2s both'
                }}
              >
                {storyTexts[currentText].subtitle}
              </span>
            </h1>
            
            <p 
              className="text-xl text-gray-200 mb-8 leading-relaxed will-change-transform"
              key={`desc-${currentText}`}
              style={{
                animation: 'fadeInStoryText 0.8s ease-out 0.4s both'
              }}
            >
              {storyTexts[currentText].description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 whitespace-nowrap cursor-pointer">
              <i className="ri-book-open-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
              探索传承故事
            </button>
            <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full hover:bg-red-600 hover:text-white transition-all duration-200 whitespace-nowrap cursor-pointer">
              <i className="ri-user-line mr-2 w-4 h-4 inline-flex items-center justify-center"></i>
              认识传承人
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <i className="ri-arrow-down-line text-2xl text-red-400 w-6 h-6 flex items-center justify-center"></i>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInStoryText {
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
          @keyframes fadeInStoryText {
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
