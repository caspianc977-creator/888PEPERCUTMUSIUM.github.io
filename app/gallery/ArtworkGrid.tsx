
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ArtworkGrid() {
  const [viewMode, setViewMode] = useState('grid');

  const artworks = [
    {
      id: 1,
      title: '清代蝙蝠纹窗花',
      artist: '王大师',
      category: '动物主题',
      description: '清代宫廷剪纸，九条飞龙栩栩如生',
      likes: 234,
      views: 1250,
      image: 'https://readdy.ai/api/search-image?query=Intricate%20Chinese%20paper%20cutting%20of%20nine%20dragons%20in%20traditional%20red%20paper%2C%20detailed%20scales%20and%20flowing%20forms%2C%20imperial%20palace%20style%2C%20symmetrical%20composition%2C%20classical%20motifs%2C%20museum%20quality%20artwork%20with%20white%20background&width=400&height=400&seq=artwork001&orientation=squarish'
    },
    {
      id: 2,
      title: '凤凰于飞',
      artist: '李师傅',
      category: '动物主题',
      description: '象征吉祥如意的凤凰图案',
      likes: 189,
      views: 987,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20Chinese%20paper%20cutting%20of%20flying%20phoenix%20birds%2C%20elegant%20red%20paper%20art%20with%20intricate%20feather%20details%2C%20traditional%20auspicious%20symbols%2C%20graceful%20poses%2C%20cultural%20heritage%20artwork&width=400&height=400&seq=artwork002&orientation=squarish'
    },
    {
      id: 3,
      title: '牡丹富贵',
      artist: '张老师',
      category: '花卉植物',
      description: '牡丹花卉剪纸，寓意富贵荣华',
      likes: 167,
      views: 856,
      image: 'https://readdy.ai/api/search-image?query=Delicate%20Chinese%20paper%20cutting%20of%20blooming%20peonies%2C%20red%20paper%20flowers%20with%20layered%20petals%20and%20leaves%2C%20prosperity%20symbols%2C%20traditional%20floral%20patterns%2C%20fine%20craftsmanship%20details&width=400&height=400&seq=artwork003&orientation=squarish'
    },
    {
      id: 4,
      title: '欧阳海舍身救列车',
      artist: '民间艺人',
      category: '英雄人物',
      description: '以欧阳海烈士英勇事迹为主题的剪纸作品，展现了人民英雄舍己为人的崇高精神',
      likes: 456,
      views: 2340,
      image: 'https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/72d0b8c6db98b8ba0cc165822b06ad33.jfif'
    },
    {
      id: 5,
      title: '梅兰竹菊',
      artist: '陈师傅',
      category: '花卉植物',
      description: '四君子图案，展现高雅品格',
      likes: 156,
      views: 743,
      image: 'https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20of%20four%20gentlemen%20plants%20-%20plum%20blossom%2C%20orchid%2C%20bamboo%20and%20chrysanthemum%2C%20elegant%20red%20paper%20art%2C%20scholar%20culture%20symbols%2C%20refined%20artistic%20composition&width=400&height=400&seq=artwork005&orientation=squarish'
    },
    {
      id: 6,
      title: '嫦娥奔月',
      artist: '赵老师',
      category: '民俗传说',
      description: '中秋佳节主题，嫦娥飞天的美丽传说',
      likes: 211,
      views: 1123,
      image: 'https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20of%20Chang%20E%20flying%20to%20the%20moon%2C%20traditional%20red%20paper%20art%20depicting%20the%20moon%20goddess%2C%20flowing%20robes%2C%20celestial%20elements%2C%20Mid-Autumn%20Festival%20folklore&width=400&height=400&seq=artwork006&orientation=squarish'
    },
    {
      id: 7,
      title: '双喜临门',
      artist: '孙大师',
      category: '吉祥图案',
      description: '婚庆主题剪纸，双喜字的艺术演绎',
      likes: 243,
      views: 1087,
      image: 'https://readdy.ai/api/search-image?query=Chinese%20double%20happiness%20paper%20cutting%20for%20weddings%2C%20intricate%20red%20paper%20design%20with%20decorative%20elements%2C%20traditional%20marriage%20symbols%2C%20celebration%20motifs%2C%20joyful%20patterns&width=400&height=400&seq=artwork007&orientation=squarish'
    },
    {
      id: 8,
      title: '山水清韵',
      artist: '马师傅',
      category: '自然风光',
      description: '江南水乡风光，诗意山水画面',
      likes: 134,
      views: 692,
      image: 'https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20of%20landscape%20scenery%2C%20mountains%20and%20rivers%20in%20traditional%20style%2C%20red%20paper%20art%20depicting%20serene%20natural%20beauty%2C%20poetic%20composition%2C%20cultural%20landscape&width=400&height=400&seq=artwork008&orientation=squarish'
    },
    {
      id: 9,
      title: '福禄寿喜',
      artist: '周老师',
      category: '吉祥图案',
      description: '四大吉祥主题的完美融合',
      likes: 278,
      views: 1334,
      image: 'https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20with%20four%20blessings%20-%20fortune%2C%20prosperity%2C%20longevity%20and%20happiness%2C%20red%20paper%20art%20with%20traditional%20auspicious%20symbols%2C%20cultural%20blessing%20motifs&width=400&height=400&seq=artwork009&orientation=squarish'
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">共找到 <span className="font-semibold text-red-600">{artworks.length}</span> 件作品</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
              viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-50'
            }`}
          >
            <i className="ri-grid-line text-lg"></i>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
              viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-50'
            }`}
          >
            <i className="ri-list-check text-lg"></i>
          </button>
        </div>
      </div>

      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {artworks.map((artwork) => (
          <Link href={`/gallery/${artwork.id}`} key={artwork.id} className="cursor-pointer">
            <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:shadow-xl overflow-hidden ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-64 h-48 flex-shrink-0' : 'h-64'
              }`}>
                <img 
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {artwork.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <i className="ri-3d-view-line mr-1"></i>
                  3D可查看
                </div>
              </div>
              
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {artwork.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  作者：{artwork.artist}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {artwork.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <i className="ri-heart-line text-red-500"></i>
                      <span className="text-sm">{artwork.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <i className="ri-eye-line"></i>
                      <span className="text-sm">{artwork.views}</span>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center cursor-pointer whitespace-nowrap">
                    查看3D详情
                    <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">
          加载更多作品
        </button>
      </div>
    </div>
  );
}
