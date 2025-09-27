
'use client';

import { useState } from 'react';

interface ArtworkInfoProps {
  artwork: any;
}

export default function ArtworkInfo({ artwork }: ArtworkInfoProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* 作品基本信息 */}
      <div className="lg:col-span-2">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{artwork.title}</h1>
            <div className="flex items-center space-x-4 text-gray-300">
              <span className="flex items-center">
                <i className="ri-user-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                {artwork.artist}
              </span>
              <span className="flex items-center">
                <i className="ri-medal-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                {artwork.heritageLevel}
              </span>
              <span className="flex items-center">
                <i className="ri-time-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                {artwork.experience}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`p-3 rounded-full transition-colors cursor-pointer ${
                liked ? 'bg-red-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <i className={liked ? 'ri-heart-fill' : 'ri-heart-line'}></i>
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-3 rounded-full transition-colors cursor-pointer ${
                bookmarked ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <i className={bookmarked ? 'ri-bookmark-fill' : 'ri-bookmark-line'}></i>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-4 mb-6 border border-red-500/30">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500 text-white">
            <i className="ri-vip-crown-line mr-2 w-4 h-4 flex items-center justify-center"></i>
            {artwork.category}
          </span>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {artwork.description}
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <i className="ri-book-open-line mr-3 text-red-400 w-6 h-6 flex items-center justify-center"></i>
            文化背景
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            {artwork.culturalBackground}
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <i className="ri-palette-line mr-3 text-red-400 w-6 h-6 flex items-center justify-center"></i>
            艺术特色
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-center space-x-3">
              <i className="ri-scissors-line text-red-400 w-5 h-5 flex items-center justify-center"></i>
              <span>传统剪纸工艺</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-brush-line text-red-400 w-5 h-5 flex items-center justify-center"></i>
              <span>精湛刀法技巧</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-eye-line text-red-400 w-5 h-5 flex items-center justify-center"></i>
              <span>生动形象表现</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-heart-line text-red-400 w-5 h-5 flex items-center justify-center"></i>
              <span>深厚文化内涵</span>
            </div>
          </div>
        </div>
      </div>

      {/* 统计信息和分享 */}
      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">作品数据</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">点赞数</span>
              <span className="text-2xl font-bold text-red-400">{artwork.likes}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">浏览量</span>
              <span className="text-2xl font-bold text-blue-400">{artwork.views}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">收藏数</span>
              <span className="text-2xl font-bold text-green-400">{Math.floor(artwork.likes * 0.3)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">分享作品</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-wechat-line"></i>
              <span>微信</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-weibo-line"></i>
              <span>微博</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-qq-line"></i>
              <span>QQ</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-links-line"></i>
              <span>复制</span>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-6 border border-red-500/30">
          <h3 className="text-xl font-bold text-white mb-4">了解更多</h3>
          <p className="text-gray-300 text-sm mb-4">
            想要深入了解这项传统技艺？加入我们的传承计划，与大师面对面学习。
          </p>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-graduation-cap-line mr-2"></i>
            加入学习
          </button>
        </div>
      </div>
    </div>
  );
}
