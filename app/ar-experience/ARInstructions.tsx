
'use client';

export default function ARInstructions() {
  const steps = [
    {
      step: '01',
      title: '选择作品',
      description: '在下方作品gallery中选择您喜欢的剪纸作品',
      icon: 'ri-heart-line',
      color: 'from-red-500 to-pink-500'
    },
    {
      step: '02',
      title: '扫描二维码',
      description: '使用手机相机扫描作品卡片上的二维码',
      icon: 'ri-qr-scan-2-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '03',
      title: '等待加载',
      description: '浏览器自动跳转并加载AR体验界面',
      icon: 'ri-loader-line',
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '04',
      title: '寻找平面',
      description: '将手机对准平整的桌面或地面，等待识别',
      icon: 'ri-focus-3-line',
      color: 'from-purple-500 to-violet-500'
    },
    {
      step: '05',
      title: '放置作品',
      description: '点击屏幕将3D剪纸模型放置在现实空间中',
      icon: 'ri-hand-heart-line',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      step: '06',
      title: '互动体验',
      description: '360°观看、缩放、旋转，感受传统艺术魅力',
      icon: 'ri-emotion-happy-line',
      color: 'from-pink-500 to-red-500'
    }
  ];

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('ar-gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleARExperience = () => {
    // 先滚动到作品gallery区域
    scrollToGallery();
    
    // 添加视觉提示效果
    setTimeout(() => {
      const gallerySection = document.getElementById('ar-gallery');
      if (gallerySection) {
        // 添加闪烁提示效果
        gallerySection.style.animation = 'pulse 2s ease-in-out 3 alternate';
        
        // 显示选择提示
        const existingTip = document.getElementById('ar-selection-tip');
        if (!existingTip) {
          const tip = document.createElement('div');
          tip.id = 'ar-selection-tip';
          tip.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-3 rounded-full shadow-2xl z-50 animate-bounce';
          tip.innerHTML = '<i class="ri-arrow-down-line mr-2"></i>请选择您喜欢的剪纸作品开始AR体验';
          document.body.appendChild(tip);
          
          // 3秒后自动移除提示
          setTimeout(() => {
            if (document.getElementById('ar-selection-tip')) {
              document.body.removeChild(tip);
            }
          }, 3000);
        }
      }
    }, 500);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AR体验指南</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            六个简单步骤，开启您的剪纸AR之旅
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((stepItem, index) => (
            <div 
              key={index}
              className="relative group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* 连接线 */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4"></div>
              )}
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* 步骤编号 */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stepItem.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300`}>
                  <span className="text-white font-bold text-lg">{stepItem.step}</span>
                </div>

                {/* 图标 */}
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <i className={`${stepItem.icon} text-3xl text-gray-600 group-hover:text-red-600 transition-colors duration-300`}></i>
                </div>

                {/* 标题 */}
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {stepItem.title}
                </h3>

                {/* 描述 */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 立即体验按钮 */}
        <div className="text-center mt-12">
          <button 
            onClick={handleARExperience}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-smartphone-line mr-3 text-xl"></i>
            立即体验AR
          </button>
          <p className="text-sm text-gray-500 mt-3">
            点击后将引导您选择作品并开始AR体验
          </p>
        </div>

        {/* 提示信息 */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="ri-information-line text-red-600 text-xl"></i>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">使用小贴士</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <i className="ri-check-line text-red-600 mt-1 mr-2 flex-shrink-0"></i>
                  确保您的设备支持WebXR或ARCore/ARKit功能
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-red-600 mt-1 mr-2 flex-shrink-0"></i>
                  在光线充足的环境中使用效果更佳
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-red-600 mt-1 mr-2 flex-shrink-0"></i>
                  选择纹理丰富的平面有助于更好的识别和跟踪
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-red-600 mt-1 mr-2 flex-shrink-0"></i>
                  建议使用最新版本的Chrome或Safari浏览器
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
