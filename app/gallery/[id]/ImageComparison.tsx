
'use client';

import { useState } from 'react';

interface ImageComparisonProps {
  artwork: any;
}

export default function ImageComparison({ artwork }: ImageComparisonProps) {
  const [imageEnlarged, setImageEnlarged] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <i className="ri-image-line mr-2 text-emerald-600"></i>
            原版作品对比
          </h3>
          
          <div 
            className="relative cursor-pointer group"
            onClick={() => setImageEnlarged(true)}
          >
            <img 
              src={artwork.originalImage}
              alt={`${artwork.title}原版实物图片`}
              className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                <i className="ri-zoom-in-line text-gray-700 text-xl"></i>
              </div>
            </div>
            <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
              点击放大查看
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-3 text-center">
            原版剪纸（拍摄于{artwork.artist}非遗传承人工作室）
          </p>
          
          <div className="mt-4 bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-lg p-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              <i className="ri-contrast-line mr-2 text-emerald-600"></i>
              与左侧3D模型对比，可清晰看到数字化技术如何完整还原传统剪纸的每一处细节
            </p>
          </div>
        </div>
      </div>

      {imageEnlarged && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setImageEnlarged(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setImageEnlarged(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            <img 
              src={artwork.originalImage}
              alt={`${artwork.title}原版实物图片`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full">
              <p className="text-sm font-semibold">{artwork.title} - 原版实物</p>
              <p className="text-xs opacity-80">高清扫描图 · 分辨率1080P+</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
