
'use client';

export default function TeachingMethods() {
  const methods = [
    {
      type: "线上教学",
      icon: "ri-computer-line",
      features: [
        "实时视频直播课程",
        "互动式在线工作坊", 
        "个性化学习进度",
        "全球学员交流平台"
      ],
      image: "https://readdy.ai/api/search-image?query=Modern%20online%20education%20platform%20showing%20traditional%20Chinese%20paper%20cutting%20lesson%2C%20elderly%20master%20teacher%20on%20screen%20demonstrating%20techniques%20to%20young%20students%2C%20high-tech%20classroom%20setup%2C%20digital%20learning%20interface%2C%20interactive%20educational%20technology&width=600&height=400&seq=online-teaching&orientation=landscape"
    },
    {
      type: "线下体验",
      icon: "ri-hand-heart-line",
      features: [
        "面对面大师指导",
        "实物材料亲手操作",
        "文化背景深度讲解",
        "小班制精品教学"
      ],
      image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20workshop%20classroom%2C%20elderly%20master%20craftsman%20teaching%20young%20students%20hands-on%2C%20students%20concentrated%20on%20cutting%20red%20paper%2C%20traditional%20tools%20and%20materials%2C%20warm%20educational%20atmosphere%2C%20cultural%20transmission%20scene&width=600&height=400&seq=offline-teaching&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">技艺传授模式</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            线上线下相结合，打造立体化、全方位的学习体验
          </p>
        </div>

        <div className="space-y-16">
          {methods.map((method, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={method.image}
                    alt={method.type}
                    className="w-full h-64 object-cover object-top"
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                      <i className={`${method.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">{method.type}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {method.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                        <span className="text-lg text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 whitespace-nowrap cursor-pointer">
                      <i className="ri-arrow-right-line mr-2"></i>
                      了解更多
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">融合式教学优势</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lightbulb-line text-2xl text-green-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">灵活学习</h4>
                <p className="text-sm text-gray-600">随时随地在线学习，线下深度体验</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-2xl text-yellow-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">互动交流</h4>
                <p className="text-sm text-gray-600">师生互动，同学交流，共同进步</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-certificate-line text-2xl text-purple-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">权威认证</h4>
                <p className="text-sm text-gray-600">完成课程获得官方技艺认证</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
