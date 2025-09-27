
'use client';

import { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Model3DViewer from './Model3DViewer';
import ImageComparison from './ImageComparison';
import ArtworkInfo from './ArtworkInfo';
import LoadingSpinner from './LoadingSpinner';

interface ArtworkDetailProps {
  artworkId: string;
}

export default function ArtworkDetail({ artworkId }: ArtworkDetailProps) {
  const [artwork, setArtwork] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const artworksData = {
    '1': {
      id: 1,
      title: '清代蝙蝠纹窗花',
      artist: '王大师',
      category: '动物主题',
      heritageLevel: '省级非物质文化遗产',
      experience: '从业30年',
      description: '清代宫廷剪纸，九条飞龙栩栩如生，采用传统镂空技法，每一处细节都体现了古代匠人的精湛技艺',
      culturalBackground: '蝙蝠纹窗花象征福气，常用于传统春节装饰。纹样中蝙蝠与祥云结合，体现古人"福运绵延"的美好愿景。在清代宫廷中，此类窗花常用于皇家宫殿的装饰，寓意皇室福运昌盛。传统制作工艺需要经过画稿、贴纸、雕刻、修整等多道工序，每一刀都需要精准无误，体现了中华民族深厚的文化底蕴和精湛的手工艺传承。',
      technicalDescription: '采用Photogrammetry技术，通过120张多角度实物照片重建3D模型，还原剪纸镂空层次与色彩渐变。运用高精度扫描仪获取纸张纹理细节，结合光谱分析技术准确还原传统朱砂红色调。3D模型包含超过50万个多边形，精确展现每一处镂空结构的厚度变化和边缘处理效果。',
      likes: 234,
      views: 1250,
      collections: 89,
      sketchfabId: 'sample-model-1',
      originalImage: 'https://readdy.ai/api/search-image?query=High%20resolution%20traditional%20Chinese%20paper%20cutting%20of%20bat%20patterns%20for%20window%20decoration%2C%20intricate%20red%20paper%20artwork%20with%20fine%20details%2C%20Qing%20dynasty%20imperial%20style%2C%20photographed%20in%20heritage%20workshop%20setting%20with%20natural%20lighting&width=600&height=600&seq=original001&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=Intricate%20Chinese%20paper%20cutting%20of%20nine%20dragons%20in%20traditional%20red%20paper%2C%20detailed%20scales%20and%20flowing%20forms%2C%20imperial%20palace%20style%2C%20symmetrical%20composition%2C%20classical%20motifs%2C%20museum%20quality%20artwork%20with%20white%20background&width=400&height=400&seq=artwork001&orientation=squarish'
    },
    '2': {
      id: 2,
      title: '凤凰于飞',
      artist: '李师傅',
      category: '动物主题',
      heritageLevel: '国家级非物质文化遗产',
      experience: '从业40年',
      description: '象征吉祥如意的凤凰图案，展现传统文化中的瑞鸟之美',
      culturalBackground: '凤凰作为中华民族的图腾之一，象征着祥瑞、和谐与美好。"凤凰于飞"寓意夫妻恩爱、家庭和睦。在传统婚庆文化中，凤凰纹样常用于新房装饰，象征新人百年好合。此作品运用对称构图，展现凤凰翱翔天际的优美姿态，羽毛层次分明，神态栩栩如生，体现了民间艺人对美好生活的向往和追求。',
      technicalDescription: '运用高分辨率3D扫描技术，捕获纸张的微观纹理和厚度变化。通过先进的材质建模技术，准确还原传统手工纸的质感和光泽。3D模型采用PBR材质系统，真实模拟不同光照条件下的视觉效果，支持实时光影变化展示。',
      likes: 189,
      views: 987,
      collections: 67,
      sketchfabId: 'sample-model-2',
      originalImage: 'https://readdy.ai/api/search-image?query=Authentic%20Chinese%20paper%20cutting%20of%20phoenix%20birds%20in%20traditional%20red%20paper%2C%20master%20craftsman%20work%2C%20fine%20feather%20details%2C%20cultural%20heritage%20artifact%20photographed%20in%20artisan%20workshop%20with%20warm%20lighting&width=600&height=600&seq=original002&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20Chinese%20paper%20cutting%20of%20flying%20phoenix%20birds%2C%20elegant%20red%20paper%20art%20with%20intricate%20feather%20details%2C%20traditional%20auspicious%20symbols%2C%20graceful%20poses%2C%20cultural%20heritage%20artwork&width=400&height=400&seq=artwork002&orientation=squarish'
    },
    '3': {
      id: 3,
      title: '牡丹富贵',
      artist: '张老师',
      category: '花卉植物',
      heritageLevel: '市级非物质文化遗产',
      experience: '从业25年',
      description: '牡丹花卉剪纸，寓意富贵荣华，展现花中之王的雍容华贵',
      culturalBackground: '牡丹被誉为"花中之王"，在中国传统文化中象征着富贵、荣华和美好。唐代以来，牡丹就是宫廷贵族喜爱的花卉图案。此作品采用层次丰富的构图，花瓣饱满，叶片舒展，展现牡丹的雍容华贵。在民间，牡丹纹样常用于节庆装饰，寓意生活富足、家庭兴旺。传统制作中需要精确把握花瓣的层次关系和叶脉的走向，体现了匠人的深厚功底。',
      technicalDescription: '采用多层扫描技术，分别获取花朵、叶片和枝干的三维结构。运用程序化建模算法优化模型细节，确保在不同缩放级别下都能呈现清晰的视觉效果。材质系统模拟传统宣纸的半透明特性和纤维质感，真实还原手工剪纸的独特美感。',
      likes: 167,
      views: 856,
      collections: 52,
      sketchfabId: 'sample-model-3',
      originalImage: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20of%20peony%20flowers%2C%20masterpiece%20in%20red%20paper%20with%20layered%20petals%20and%20detailed%20leaves%2C%20cultural%20heritage%20artwork%20photographed%20in%20traditional%20setting&width=600&height=600&seq=original003&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=Delicate%20Chinese%20paper%20cutting%20of%20blooming%20peonies%2C%20red%20paper%20flowers%20with%20layered%20petals%20and%20leaves%2C%20prosperity%20symbols%2C%20traditional%20floral%20patterns%2C%20fine%20craftsmanship%20details&width=400&height=400&seq=artwork003&orientation=squarish'
    },
    '4': {
      id: 4,
      title: '欧阳海舍身救列车',
      artist: '民间艺人',
      category: '英雄人物',
      heritageLevel: '省级非物质文化遗产',
      experience: '从业35年',
      description: '以欧阳海烈士英勇事迹为主题的剪纸作品，展现了人民英雄舍己为人的崇高精神',
      culturalBackground: '欧阳海（1940-1963）是中国人民解放军战士，1963年为抢救即将与列车相撞的战马，英勇牺牲。这一英雄事迹深深感动了全国人民，成为时代精神的象征。剪纸艺术家们用传统技法表现现代英雄故事，将红色文化与民间艺术完美结合。作品中人物形象生动，马匹奔腾有力，列车呼啸而来，紧张的救援场面跃然纸上，体现了艺术家高超的构图能力和深厚的文化情怀。',
      technicalDescription: '运用先进的三维建模技术，通过Sketchfab平台展示高精度3D模型。采用多层次扫描技术获取剪纸的立体结构，精确还原每一处镂空细节。模型支持360度旋转查看，可清晰观察人物表情、服装细节和动态姿势。通过PBR材质渲染技术，真实呈现传统红纸的质感和光影效果。',
      likes: 456,
      views: 2340,
      collections: 136,
      sketchfabId: '94895600928744869434e1d49d2eec41',
      sketchfabEmbed: '<div class="sketchfab-embed-wrapper"> <iframe title="Chinese Paper Cuttings works" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/94895600928744869434e1d49d2eec41/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/chinese-paper-cuttings-works-94895600928744869434e1d49d2eec41?utm_medium=embed&utm_campaign=share-popup&utm_content=94895600928744869434e1d49d2eec41" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Chinese Paper Cuttings works </a> by <a href="https://sketchfab.com/caspiancpi?utm_medium=embed&utm_campaign=share-popup&utm_content=94895600928744869434e1d49d2eec41" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> caspiancpi </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=94895600928744869434e1d49d2eec41" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
      originalImage: 'https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/72d0b8c6db98b8ba0cc165822b06ad33.jfif',
      image: 'https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/72d0b8c6db98b8ba0cc165822b06ad33.jfif'
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const artworkData = artworksData[artworkId as keyof typeof artworksData];
      if (artworkData) {
        setArtwork(artworkData);
      }
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [artworkId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <LoadingSpinner />
        <Footer />
      </div>
    );
  }

  if (!artwork) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">作品未找到</h1>
          <p className="text-gray-400 mb-8">抱歉，您访问的3D作品不存在或已被移除。</p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap">
            返回作品馆
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero Section with High-res Image */}
        <div className="relative pt-24 pb-12">
          <div 
            className="h-96 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${artwork.originalImage}')`
            }}
          >
            <div className="container mx-auto px-6 h-full flex items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {artwork.title}
                </h1>
                <nav className="text-red-200">
                  <span>首页</span>
                  <i className="ri-arrow-right-line mx-2 w-4 h-4 inline-flex items-center justify-center"></i>
                  <span>3D作品</span>
                  <i className="ri-arrow-right-line mx-2 w-4 h-4 inline-flex items-center justify-center"></i>
                  <span className="text-white font-semibold">{artwork.title}</span>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections - 严格统一布局 */}
        <div className="container mx-auto px-6 py-12">
          {/* 作品信息区域 - 完全按照欧阳海作品的布局 */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 左侧主要信息区 */}
              <div className="lg:col-span-2">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-2">
                      {artwork.title}
                    </h1>
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
                    <button className="p-3 rounded-full transition-colors cursor-pointer bg-white/10 text-gray-300 hover:bg-white/20">
                      <i className="ri-heart-line"></i>
                    </button>
                    <button className="p-3 rounded-full transition-colors cursor-pointer bg-white/10 text-gray-300 hover:bg-white/20">
                      <i className="ri-bookmark-line"></i>
                    </button>
                  </div>
                </div>

                {/* 分类标签 */}
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-4 mb-6 border border-red-500/30">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500 text-white">
                    <i className="ri-vip-crown-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                    {artwork.category}
                  </span>
                </div>

                {/* 作品描述和文化背景 */}
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
                      <span>文化情怀传承</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧数据和分享区 */}
              <div className="space-y-6">
                {/* 作品数据 */}
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
                      <span className="text-2xl font-bold text-green-400">{artwork.collections}</span>
                    </div>
                  </div>
                </div>

                {/* 分享作品 */}
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

                {/* 了解更多 */}
                <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-6 border border-red-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">了解更多</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    想深入了解这一传统技艺吗？加入我们的非遗传承计划，与大师面对面学习。
                  </p>
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap">
                    <i className="ri-graduation-cap-line mr-2"></i>
                    加入学习
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 双栏展示：原版图片 + 3D模型 - 统一布局 */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 左侧：原版剪纸作品 */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <i className="ri-image-line mr-3 text-red-400 w-8 h-8 flex items-center justify-center"></i>
                原版剪纸作品
              </h2>
              <ImageComparison artwork={artwork} />
            </div>

            {/* 右侧：3D互动模型 */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <i className="ri-3d-view-line mr-3 text-red-400 w-8 h-8 flex items-center justify-center"></i>
                3D互动模型
              </h2>
              <Model3DViewer artwork={artwork} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
