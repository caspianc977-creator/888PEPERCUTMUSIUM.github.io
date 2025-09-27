
'use client';

import { useState, useEffect } from 'react';

interface Model3DViewerProps {
  artwork: any;
}

export default function Model3DViewer({ artwork }: Model3DViewerProps) {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelError, setModelError] = useState(false);

  useEffect(() => {
    if (artwork.sketchfabEmbed) {
      // 如果有真实的Sketchfab嵌入代码，直接显示
      setModelLoaded(true);
    } else {
      // 模拟加载过程
      const timer = setTimeout(() => {
        setModelLoaded(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [artwork.sketchfabEmbed]);

  const handleRetry = () => {
    setModelError(false);
    setModelLoaded(false);
    
    setTimeout(() => {
      setModelLoaded(true);
    }, 1500);
  };

  if (modelError) {
    return (
      <div className="bg-gradient-to-br from-red-900/20 via-gray-900 to-red-900/20 rounded-2xl h-96 flex flex-col items-center justify-center shadow-2xl border border-red-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent animate-pulse"></div>
        
        <div className="text-center mb-6 relative z-10">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 border-2 border-red-500/50 rounded-full animate-ping"></div>
            <div className="absolute inset-2 border-2 border-red-400 rounded-full animate-pulse"></div>
            <i className="ri-error-warning-line text-red-400 text-2xl absolute inset-0 flex items-center justify-center"></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">加载失败</h3>
          <p className="text-red-300">3D模型暂时无法显示</p>
        </div>
        
        <button 
          onClick={handleRetry}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg shadow-red-500/25"
        >
          <i className="ri-refresh-line mr-2"></i>
          重新加载
        </button>
      </div>
    );
  }

  // 如果有Sketchfab嵌入代码，直接显示真实的3D模型
  if (artwork.sketchfabEmbed && modelLoaded) {
    return (
      <div 
        dangerouslySetInnerHTML={{ 
          __html: artwork.sketchfabEmbed.replace(
            /<iframe([^>]*)>/g, 
            '<iframe$1 style="width:100%; height:600px; border:none;">'
          )
        }}
      />
    );
  }

  return (
    <div className="bg-gradient-to-br from-cyan-900/20 via-gray-900 to-purple-900/20 rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30 relative">
      {/* 顶部控制栏 */}
      <div className="bg-gradient-to-r from-cyan-900/80 via-gray-900/80 to-purple-900/80 backdrop-blur-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-semibold">模拟展示</span>
            <div className="w-px h-4 bg-gray-600 mx-2"></div>
            <span className="text-cyan-300 text-sm">传统工艺</span>
          </div>
        </div>
      </div>

      {/* 主显示区域 */}
      <div 
        className="h-96 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)
          `
        }}
      >
        {/* 网格背景 */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        ></div>

        {!modelLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center">
              {/* 3D加载器 */}
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full"></div>
                <div className="absolute inset-2 border-4 border-cyan-400/50 rounded-full animate-spin border-t-transparent"></div>
                <div className="absolute inset-4 border-4 border-purple-400/70 rounded-full animate-spin animate-reverse border-b-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="ri-3d-view-line text-3xl text-cyan-400 animate-pulse"></i>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">
                正在加载3D展示...
              </h3>
              <p className="text-cyan-300 text-sm mb-4">传统剪纸的数字化呈现</p>
            </div>
          </div>
        )}
        
        {modelLoaded && (
          <div className="relative h-full flex items-center justify-center">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <div 
                className="w-80 h-80 mx-auto mb-6 rounded-3xl shadow-2xl overflow-hidden relative"
                style={{
                  background: `
                    linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%),
                    radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)
                  `,
                  border: '2px solid rgba(6, 182, 212, 0.3)',
                  boxShadow: `
                    0 0 50px rgba(6, 182, 212, 0.2),
                    0 0 100px rgba(147, 51, 234, 0.1),
                    inset 0 0 50px rgba(255, 255, 255, 0.05)
                  `
                }}
              >
                <img 
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-move"
                  draggable={false}
                />
                
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 animate-ping"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-70 animate-ping delay-500"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-cyan-500/30 max-w-md mx-auto">
                <h3 className="font-bold text-xl text-white mb-3 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  {artwork.title}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-cyan-300">
                    <i className="ri-drag-move-line mr-2"></i>
                    <span>互动查看</span>
                  </div>
                  <div className="flex items-center text-purple-300">
                    <i className="ri-zoom-in-line mr-2"></i>
                    <span>细节观察</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <i className="ri-palette-line mr-2"></i>
                    <span>传统工艺</span>
                  </div>
                  <div className="flex items-center text-yellow-300">
                    <i className="ri-heart-line mr-2"></i>
                    <span>文化传承</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 底部信息栏 */}
      <div className="bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-sm border-t border-cyan-500/20 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-cyan-300">
              <i className="ri-scissors-line"></i>
              <span>剪纸艺术</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-300">
              <i className="ri-star-line"></i>
              <span>传统技艺</span>
            </div>
            <div className="flex items-center space-x-2 text-green-300">
              <i className="ri-shield-check-line"></i>
              <span>文化保护</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-lg transition-all duration-300 cursor-pointer border border-gray-600 hover:border-cyan-500/50">
              <i className="ri-screenshot-line text-cyan-300"></i>
            </button>
            <button className="p-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-lg transition-all duration-300 cursor-pointer border border-gray-600 hover:border-purple-500/50">
              <i className="ri-share-line text-purple-300"></i>
            </button>
          </div>
        </div>
        
        <div className="mt-2 text-xs text-gray-400">
          <span className="flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-1 animate-pulse"></div>
            传承千年技艺，展现民族文化精粹
          </span>
        </div>
      </div>
    </div>
  );
}
