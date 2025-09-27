'use client';

import { useState } from 'react';

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const categories = [
    { name: '全部', count: 500, icon: 'ri-grid-line' },
    { name: '动物主题', count: 120, icon: 'ri-bear-smile-line' },
    { name: '花卉植物', count: 98, icon: 'ri-flower-line' },
    { name: '人物故事', count: 76, icon: 'ri-user-line' },
    { name: '节日庆典', count: 64, icon: 'ri-calendar-event-line' },
    { name: '自然风光', count: 52, icon: 'ri-landscape-line' },
    { name: '吉祥图案', count: 48, icon: 'ri-sun-line' },
    { name: '民俗传说', count: 42, icon: 'ri-book-line' }
  ];

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 cursor-pointer whitespace-nowrap ${
              activeCategory === category.name
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-sm'
            }`}
          >
            <i className={`${category.icon} text-lg`}></i>
            <span>{category.name}</span>
            <span className={`text-sm px-2 py-1 rounded-full ${
              activeCategory === category.name
                ? 'bg-red-700 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}