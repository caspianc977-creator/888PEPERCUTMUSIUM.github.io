
'use client';

import { useState } from 'react';

export default function StoryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const categories = ['全部', '技法传承', '历史典故', '大师访谈', '文化研究'];

  const stories = [
    {
      id: 1,
      title: '一剪一世界：黎艳青的剪纸人生',
      category: '大师访谈',
      summary: '专访郴州市级非遗传承人黎艳青，深度了解"中华一刀剪"的精髓与传承',
      image: 'https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/aca9d5ed2b8e5186621db10af371dc9e.jfif',
      readTime: '8分钟',
      publishDate: '2024-01-15',
      views: 2340,
      hasVideo: true,
      hasAudio: true,
      link: '/stories/masters/li-yanqing'
    },
    {
      id: 2,
      title: '郴州桂阳：非遗剪纸剪出"龙腾盛世"',
      category: '历史典故',
      summary: '郴州市级非遗剪纸传承人黎艳青以"龙腾盛世"为主题，创作出100多条大小不一、形态各异的生肖龙剪纸作品',
      image: 'https://readdy.ai/api/search-image?query=Ancient%20Chinese%20paper%20cutting%20historical%20timeline%2C%20traditional%20red%20paper%20art%20evolution%20through%20dynasties%2C%20cultural%20heritage%20documentation%2C%20museum%20display%20style%2C%20warm%20lighting&width=400&height=250&seq=story-history&orientation=landscape',
      readTime: '2分钟',
      publishDate: '2024-01-10',
      views: 1890,
      hasVideo: false,
      hasAudio: true,
      link: 'http://hncz.wenming.cn/jwmsxf/202403/t20240307_8453321.shtml'
    },

    {
      id: 3,
      title: '"中华一刀剪"的技艺密码',
      category: '技法传承',
      summary: '解密传说中的"一刀剪"技法，揭示其背后的深厚功底与精湛技艺',
      image: 'https://readdy.ai/api/search-image?query=Master%20craftsman%20demonstrating%20Chinese%20one-cut%20paper%20cutting%20technique%2C%20skilled%20hands%20creating%20intricate%20patterns%2C%20traditional%20workshop%20setting%2C%20detailed%20craftsmanship%20focus&width=400&height=250&seq=story-technique&orientation=landscape',
      readTime: '6分钟',
      publishDate: '2024-01-08',
      views: 3120,
      hasVideo: true,
      hasAudio: false,
      link: '#'
    },
    {
      id: 4,
      title: '郴州市科技馆第16期科普公益微课堂《桂阳剪纸》',
      category: '文化研究',
      summary: '探讨数字化技术如何为非遗文化传承注入新的活力与可能性',
      image: 'https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/1934acac35708ec7de24981a073ee5a7.png',
      readTime: '10分钟',
      publishDate: '2024-01-05',
      views: 1567,
      hasVideo: true,
      hasAudio: true,
      link: '#'
    },
    {
      id: 5,
      title: '剪纸中的吉祥密码',
      category: '历史典故',
      summary: '深入解读剪纸图案中蕴含的吉祥寓意与文化内涵',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20auspitious%20symbols%2C%20dragon%20phoenix%20patterns%20with%20cultural%20meanings%2C%20red%20paper%20art%20displaying%20prosperity%20symbols%2C%20cultural%20interpretation&width=400&height=250&seq=story-symbols&orientation=landscape',
      readTime: '7分钟',
      publishDate: '2024-01-02',
      views: 2156,
      hasVideo: false,
      hasAudio: true,
      link: '#'
    },
    {
      id: 6,
      title: '"剪花娘子"的艺术之路',
      category: '大师访谈',
      summary: '对话多位剪纸传承人，聆听他们的传承故事与文化坚守',
      image: 'https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20masters%20portrait%20gallery%2C%20elderly%20craftsmen%20with%20traditional%20tools%2C%20cultural%20heritage%20keepers%2C%20warm%20studio%20lighting%2C%20dignified%20expressions&width=400&height=250&seq=story-masters&orientation=landscape',
      readTime: '15分钟',
      publishDate: '2023-12-28',
      views: 4230,
      hasVideo: true,
      hasAudio: true,
      link: 'https://moment.rednet.cn/rednetcms/news/localNews/20150906/228076.html'
    }
  ];

  const filteredStories = selectedCategory === '全部' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">非遗故事集</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            记录传承之美，传播文化之声
          </p>
        </div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <div key={story.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300 group border border-gray-700/50">
              <div className="relative overflow-hidden">
                <img 
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-cyan-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {story.category}
                </div>
                
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {story.hasVideo && (
                    <div className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center">
                      <i className="ri-play-circle-line text-white text-sm"></i>
                    </div>
                  )}
                  {story.hasAudio && (
                    <div className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center">
                      <i className="ri-volume-up-line text-white text-sm"></i>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {story.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                  {story.summary}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <i className="ri-time-line mr-1"></i>
                    {story.readTime}
                  </span>
                  <span className="flex items-center">
                    <i className="ri-eye-line mr-1"></i>
                    {story.views.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{story.publishDate}</span>
                  {story.link !== '#' ? (
                    <a
                      href={story.link}
                      className="text-cyan-400 hover:text-white font-medium text-sm flex items-center cursor-pointer"
                    >
                      阅读全文
                      <i className="ri-arrow-right-line ml-1"></i>
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm">即将发布</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-16">
            <i className="ri-file-text-line text-6xl text-gray-600 mb-4"></i>
            <p className="text-xl text-gray-400">该分类暂无故事内容</p>
          </div>
        )}
      </div>
    </section>
  );
}
