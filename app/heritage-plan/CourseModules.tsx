'use client';

import { useState, useEffect } from 'react';

interface Course {
  id: string;
  title: string;
  instructor: string;
  avatar: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  progress: number;
  description: string;
  chapters: number;
  students: number;
  rating: number;
  category: string;
  status: 'public' | 'beta' | 'private';
}

export default function CourseModules() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = [
    { id: 'all', name: '全部课程', icon: 'ri-apps-line' },
    { id: 'basic', name: '基础入门', icon: 'ri-seedling-line' },
    { id: 'advanced', name: '进阶技法', icon: 'ri-star-line' },
    { id: 'master', name: '大师班', icon: 'ri-crown-line' },
    { id: 'history', name: '文化历史', icon: 'ri-book-line' }
  ];

  const courses: Course[] = [
    {
      id: '1',
      title: '传统剪纸基础入门',
      instructor: '张雪莲',
      avatar: 'https://readdy.ai/api/search-image?query=elderly%20Chinese%20female%20papercut%20master%20with%20kind%20smile%2C%20traditional%20clothing%2C%20wise%20and%20experienced%20appearance%2C%20cultural%20heritage%20teacher%20portrait&width=80&height=80&seq=teacher1&orientation=squarish',
      duration: '2小时30分',
      difficulty: 'beginner',
      progress: 0,
      description: '从纸张选择到基础刀法，全面掌握剪纸入门技巧',
      chapters: 8,
      students: 2840,
      rating: 4.9,
      category: 'basic',
      status: 'public'
    },
    {
      id: '2', 
      title: '花鸟图案设计与制作',
      instructor: '李明华',
      avatar: 'https://readdy.ai/api/search-image?query=middle-aged%20Chinese%20male%20papercut%20artist%20focused%20on%20work%2C%20traditional%20craftsman%20appearance%2C%20cultural%20heritage%20master%20portrait&width=80&height=80&seq=teacher2&orientation=squarish',
      duration: '3小时15分',
      difficulty: 'intermediate',
      progress: 35,
      description: '学习传统花鸟纹样的设计原理和制作技法',
      chapters: 12,
      students: 1960,
      rating: 4.8,
      category: 'advanced',
      status: 'public'
    },
    {
      id: '3',
      title: '窗花艺术专题研究',
      instructor: '王美玉',
      avatar: 'https://readdy.ai/api/search-image?query=senior%20Chinese%20female%20artist%20working%20on%20intricate%20papercut%20patterns%2C%20master%20craftswoman%20portrait%2C%20traditional%20cultural%20expert&width=80&height=80&seq=teacher3&orientation=squarish',
      duration: '5小时40分',
      difficulty: 'advanced',
      progress: 0,
      description: '深入研究传统窗花的历史文化和高级制作技法',
      chapters: 18,
      students: 856,
      rating: 5.0,
      category: 'master',
      status: 'public'
    },
    {
      id: '4',
      title: '剪纸与现代设计融合',
      instructor: '陈志强',
      avatar: 'https://readdy.ai/api/search-image?query=young%20Chinese%20designer%20working%20on%20modern%20papercut%20art%2C%20contemporary%20artist%20portrait%2C%20creative%20cultural%20innovator&width=80&height=80&seq=teacher4&orientation=squarish',
      duration: '4小时20分',
      difficulty: 'intermediate',
      progress: 68,
      description: '探索传统剪纸在现代设计中的创新应用',
      chapters: 15,
      students: 1245,
      rating: 4.7,
      category: 'advanced',
      status: 'beta'
    },
    {
      id: '5',
      title: '剪纸文化历史溯源',
      instructor: '赵文博',
      avatar: 'https://readdy.ai/api/search-image?query=elderly%20Chinese%20cultural%20historian%20scholar%2C%20traditional%20academic%20appearance%2C%20wise%20professor%20portrait&width=80&height=80&seq=teacher5&orientation=squarish',
      duration: '6小时10分',
      difficulty: 'beginner',
      progress: 0,
      description: '深入了解剪纸艺术的历史渊源和文化内涵',
      chapters: 20,
      students: 3240,
      rating: 4.9,
      category: 'history',
      status: 'public'
    },
    {
      id: '6',
      title: '立体剪纸创新技法',
      instructor: '刘艺颖',
      avatar: 'https://readdy.ai/api/search-image?query=young%20Chinese%20female%20artist%20creating%203D%20papercut%20art%2C%20innovative%20designer%20portrait%2C%20modern%20cultural%20creator&width=80&height=80&seq=teacher6&orientation=squarish',
      duration: '7小时30分',
      difficulty: 'advanced',
      progress: 12,
      description: '掌握立体剪纸的前沿技法和创新理念',
      chapters: 25,
      students: 567,
      rating: 4.8,
      category: 'master',
      status: 'beta'
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-500/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '入门';
      case 'intermediate': return '中级';
      case 'advanced': return '高级';
      default: return '未知';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'public': return null;
      case 'beta': return <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">内测</span>;
      case 'private': return <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded-full text-xs">私密</span>;
      default: return null;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('course-modules');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="courses" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-400/30 mb-6">
            <i className="ri-book-open-line text-red-400 w-5 h-5 flex items-center justify-center"></i>
            <span className="text-sm font-medium text-red-300">精品课程</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
              传承之路
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            跟随国家级传承大师，从基础到进阶，系统学习传统剪纸艺术。每门课程都包含高清视频、实操指导和文化背景解读。
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-red-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <span className="flex items-center space-x-2">
                <i className={`${category.icon} w-5 h-5 flex items-center justify-center`}></i>
                <span>{category.name}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div 
          id="course-modules"
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="group relative will-change-transform hover:scale-105 transition-transform duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glass Card */}
              <div 
                className="relative p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)'
                }}
                onClick={() => setSelectedCourse(course)}
              >
                {/* Course Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                      <img
                        src={course.avatar}
                        alt={course.instructor}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg leading-tight">{course.title}</h3>
                      <p className="text-sm text-gray-400">{course.instructor}</p>
                    </div>
                  </div>
                  {getStatusBadge(course.status)}
                </div>

                {/* Course Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{course.description}</p>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <i className="ri-play-list-line w-4 h-4 flex items-center justify-center"></i>
                    <span>{course.chapters}章节</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <i className="ri-user-line w-4 h-4 flex items-center justify-center"></i>
                    <span>{course.students.toLocaleString()}人</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <i className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Difficulty Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                    {getDifficultyText(course.difficulty)}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                    <span>学习进度</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap">
                    {course.progress > 0 ? '继续学习' : '开始学习'}
                  </button>
                  <button className="px-4 py-2 border border-white/30 hover:bg-white/10 text-white rounded-lg transition-all duration-200 cursor-pointer">
                    <i className="ri-bookmark-line w-5 h-5 flex items-center justify-center"></i>
                  </button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-red-500/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 border-2 border-white/30 backdrop-blur-sm rounded-xl font-bold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 cursor-pointer whitespace-nowrap">
            <span className="flex items-center space-x-2">
              <span>查看更多课程</span>
              <i className="ri-arrow-down-line text-lg w-5 h-5 flex items-center justify-center group-hover:translate-y-1 transition-transform duration-300"></i>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        /* Performance optimizations */
        .will-change-transform {
          will-change: transform, opacity;
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          .transition-transform,
          .transition-colors {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}