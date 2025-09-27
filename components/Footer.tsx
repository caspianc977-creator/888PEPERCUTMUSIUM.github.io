
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [showContactPopup, setShowContactPopup] = useState(false);

  const contactInfo = {
    phone: '+86 19335313121',
    email: 'lhc_186@qq.com',
    location: '中国郴州市'
  };

  const handleSocialClick = () => {
    setShowContactPopup(true);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <img 
                    src="https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/833cce9f1a3c1a7b722027674c5ad4c0.jfif"
                    alt="剪纸非遗馆"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">剪纸非遗馆</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                传承千年文化，守护非遗技艺。通过数字化技术，让传统剪纸艺术在新时代焕发生机。
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">快速导航</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                    首页
                  </Link>
                </li>
                <li>
                  <Link href="/heritage-plan" className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                    传承计划
                  </Link>
                </li>
                <li>
                  <Link href="/ar-experience" className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                    3D作品
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                    非遗故事
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-red-400">联系我们</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="ri-phone-line text-red-400 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-300">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-mail-line text-red-400 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-map-pin-line text-red-400 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-300">{contactInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 剪纸非遗馆. 保留所有权利 | 京ICP备12345678号-1
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Popup */}
      {showContactPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative transform transition-all duration-300 scale-100">
            <button
              onClick={() => setShowContactPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer transform hover:scale-110 transition-transform duration-200"
              aria-label="关闭联系方式弹窗"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-contacts-line text-red-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">联系方式</h3>
              <p className="text-gray-600">欢迎通过以下方式联系我们</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <i className="ri-wechat-fill text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">微信</p>
                  <p className="text-gray-600 text-sm">扫码添加微信好友</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <i className="ri-phone-fill text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">电话</p>
                  <p className="text-gray-600 text-sm">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <i className="ri-mail-fill text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">邮箱</p>
                  <p className="text-gray-600 text-sm">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-xl">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <i className="ri-map-pin-fill text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">地点</p>
                  <p className="text-gray-600 text-sm">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowContactPopup(false)}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap transform hover:scale-105 transition-transform duration-200"
              >
                知道了
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
