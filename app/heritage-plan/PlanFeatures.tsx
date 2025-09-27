
'use client';

export default function PlanFeatures() {
  const features = [
    {
      icon: "ri-graduation-cap-line",
      title: "技艺传授",
      subtitle: "线上线下相结合的教学模式",
      description: "打造全方位的学习体验，让传统技艺在现代教育中焕发新的活力",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: "ri-camera-line",
      title: "技艺记录",
      subtitle: "高清视频记录制作过程",
      description: "运用专业设备和技术，完整记录每个制作细节，为后世留下珍贵资料",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: "ri-global-line",
      title: "文化推广",
      subtitle: "面向全球的数字化展示",
      description: "通过互联网平台，让中华传统文化走向世界，传播东方艺术之美",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">三大核心支柱</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            通过科技与传统的完美融合，构建全新的文化传承生态系统
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-lg font-medium text-gray-600 mb-4">{feature.subtitle}</p>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-heart-3-line text-4xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">传承使命</h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              我们相信，每一门传统技艺都承载着深厚的文化内涵和智慧结晶。
              通过现代科技手段，我们不仅要保护这些珍贵的文化遗产，
              更要让它们在新时代绽放出更加绚烂的光彩。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
