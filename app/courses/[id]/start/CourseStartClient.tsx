
'use client';

import { useState, useEffect } from 'react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

interface Chapter {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
}

interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  chapters: Chapter[];
}

interface CourseStartClientProps {
  courseId: string;
}

export default function CourseStartClient({ courseId }: CourseStartClientProps) {
  const [course, setCourse] = useState<Course | null>(null);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // 课程数据
  const coursesData: { [key: string]: Course } = {
    '1': {
      id: '1',
      title: '传统剪纸基础入门',
      instructor: '张雪莲',
      description: '从纸张选择到基础刀法，全面掌握剪纸入门技巧',
      chapters: [
        { id: 1, title: '剪纸历史与文化背景', duration: '15分钟', videoUrl: '', completed: false },
        { id: 2, title: '工具与材料准备', duration: '20分钟', videoUrl: '', completed: false },
        { id: 3, title: '基础折纸技法', duration: '25分钟', videoUrl: '', completed: false },
        { id: 4, title: '简单图案设计', duration: '30分钟', videoUrl: '', completed: false },
        { id: 5, title: '基础剪纸实践', duration: '35分钟', videoUrl: '', completed: false },
        { id: 6, title: '作品装裱与保存', duration: '15分钟', videoUrl: '', completed: false },
        { id: 7, title: '常见问题解答', duration: '20分钟', videoUrl: '', completed: false },
        { id: 8, title: '进阶学习指导', duration: '15分钟', videoUrl: '', completed: false }
      ]
    },
    '2': {
      id: '2',
      title: '花鸟图案设计与制作',
      instructor: '李明华',
      description: '学习传统花鸟纹样的设计原理和制作技法',
      chapters: [
        { id: 1, title: '花鸟纹样的文化内涵', duration: '18分钟', videoUrl: '', completed: false },
        { id: 2, title: '传统花卉图案分析', duration: '22分钟', videoUrl: '', completed: false },
        { id: 3, title: '鸟类造型设计要点', duration: '25分钟', videoUrl: '', completed: false },
        { id: 4, title: '构图与布局原理', duration: '20分钟', videoUrl: '', completed: false },
        { id: 5, title: '线条与层次处理', duration: '28分钟', videoUrl: '', completed: false },
        { id: 6, title: '色彩搭配技巧', duration: '15分钟', videoUrl: '', completed: false },
        { id: 7, title: '花鸟作品实践制作', duration: '45分钟', videoUrl: '', completed: false },
        { id: 8, title: '创意变化与发展', duration: '22分钟', videoUrl: '', completed: false }
      ]
    }
  };

  useEffect(() => {
    const courseData = coursesData[courseId];
    if (courseData) {
      setCourse(courseData);
    }
  }, [courseId]);

  const handleVideoUpload = async (chapterIndex: number, file: File) => {
    setIsUploading(true);
    
    // 模拟视频上传过程
    setTimeout(() => {
      const videoUrl = URL.createObjectURL(file);
      if (course) {
        const updatedCourse = { ...course };
        updatedCourse.chapters[chapterIndex].videoUrl = videoUrl;
        setCourse(updatedCourse);
      }
      setIsUploading(false);
    }, 2000);
  };

  const markChapterComplete = (chapterIndex: number) => {
    if (course) {
      const updatedCourse = { ...course };
      updatedCourse.chapters[chapterIndex].completed = true;
      setCourse(updatedCourse);
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">课程未找到</h1>
          <p className="text-gray-400">抱歉，您访问的课程不存在。</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* 课程标题 */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
            <p className="text-xl text-gray-300">讲师：{course.instructor}</p>
            <p className="text-gray-400 mt-2">{course.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 课程目录 */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">课程目录</h3>
                <div className="space-y-3">
                  {course.chapters.map((chapter, index) => (
                    <button
                      key={chapter.id}
                      onClick={() => setCurrentChapter(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                        currentChapter === index
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{chapter.title}</div>
                          <div className="text-sm opacity-75">{chapter.duration}</div>
                        </div>
                        {chapter.completed && (
                          <i className="ri-check-line text-green-400"></i>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 视频播放区域 */}
            <div className="lg:col-span-3">
              <div className="bg-gray-900 rounded-2xl overflow-hidden">
                <div className="aspect-video bg-black relative">
                  {course.chapters[currentChapter].videoUrl ? (
                    <video
                      src={course.chapters[currentChapter].videoUrl}
                      controls
                      className="w-full h-full"
                      onEnded={() => markChapterComplete(currentChapter)}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <i className="ri-video-line text-6xl text-gray-500 mb-4 block"></i>
                        <h3 className="text-xl font-bold text-white mb-4">
                          {course.chapters[currentChapter].title}
                        </h3>
                        <p className="text-gray-400 mb-6">
                          该章节视频暂未上传，请联系管理员上传课程内容
                        </p>
                        
                        {/* 视频上传区域 */}
                        <div className="max-w-md mx-auto">
                          <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-red-400 transition-colors">
                            <input
                              type="file"
                              accept="video/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  handleVideoUpload(currentChapter, file);
                                }
                              }}
                              className="hidden"
                              id={`video-upload-${currentChapter}`}
                              disabled={isUploading}
                            />
                            <label 
                              htmlFor={`video-upload-${currentChapter}`} 
                              className="cursor-pointer"
                            >
                              {isUploading ? (
                                <div>
                                  <i className="ri-loader-4-line text-3xl text-red-400 mb-2 block animate-spin"></i>
                                  <p className="text-red-400">上传中...</p>
                                </div>
                              ) : (
                                <div>
                                  <i className="ri-upload-cloud-line text-3xl text-gray-400 mb-2 block"></i>
                                  <p className="text-gray-400">点击上传视频文件</p>
                                  <p className="text-sm text-gray-500 mt-1">支持 MP4, MOV, AVI 格式</p>
                                </div>
                              )}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 章节信息和控制 */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {course.chapters[currentChapter].title}
                      </h2>
                      <p className="text-gray-400">
                        第 {currentChapter + 1} 章 · {course.chapters[currentChapter].duration}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => markChapterComplete(currentChapter)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
                          course.chapters[currentChapter].completed
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        <i className={`mr-2 ${
                          course.chapters[currentChapter].completed 
                            ? 'ri-check-line' 
                            : 'ri-checkbox-blank-line'
                        }`}></i>
                        {course.chapters[currentChapter].completed ? '已完成' : '标记完成'}
                      </button>
                    </div>
                  </div>

                  {/* 章节导航 */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                      disabled={currentChapter === 0}
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-arrow-left-line"></i>
                      <span>上一章</span>
                    </button>

                    <div className="text-gray-400 text-sm">
                      {currentChapter + 1} / {course.chapters.length}
                    </div>

                    <button
                      onClick={() => setCurrentChapter(Math.min(course.chapters.length - 1, currentChapter + 1))}
                      disabled={currentChapter === course.chapters.length - 1}
                      className="flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                    >
                      <span>下一章</span>
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* 课程进度 */}
              <div className="mt-8 bg-gray-900 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">学习进度</h3>
                  <span className="text-gray-400">
                    {course.chapters.filter(c => c.completed).length} / {course.chapters.length} 章节完成
                  </span>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-red-400 h-3 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${(course.chapters.filter(c => c.completed).length / course.chapters.length) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
