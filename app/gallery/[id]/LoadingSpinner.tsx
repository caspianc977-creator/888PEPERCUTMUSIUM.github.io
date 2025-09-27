
'use client';

import { useState, useEffect } from 'react';

export default function LoadingSpinner() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-6 relative">
            <div className="absolute inset-0 border-4 border-red-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-red-600 rounded-full border-t-transparent animate-spin"></div>
            <i className="ri-scissors-cut-line absolute inset-0 flex items-center justify-center text-red-600 text-2xl animate-pulse"></i>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            正在加载3D模型...
          </h2>
          <p className="text-gray-600 mb-6">
            精美的剪纸艺术正在为您呈现
          </p>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500">
            {Math.round(Math.min(progress, 100))}% 完成
          </p>
        </div>
        
        <div className="text-sm text-gray-400 space-y-2">
          <p className="flex items-center justify-center">
            <i className="ri-3d-view-line mr-2"></i>
            支持360°旋转观看
          </p>
          <p className="flex items-center justify-center">
            <i className="ri-zoom-in-line mr-2"></i>
            支持缩放查看细节
          </p>
          <p className="flex items-center justify-center">
            <i className="ri-smartphone-line mr-2"></i>
            移动端触控操作
          </p>
        </div>
      </div>
    </div>
  );
}
