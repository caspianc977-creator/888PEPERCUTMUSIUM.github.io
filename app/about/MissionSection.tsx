'use client';

export default function MissionSection() {
  const missions = [
    {
      icon: "ri-shield-star-line",
      title: "数字化保护",
      description: "运用3D建模技术，将传统剪纸艺术转化为数字资产，确保文化遗产永久保存"
    },
    {
      icon: "ri-global-line",
      title: "全球传播",
      description: "通过互联网平台，让世界各地的人们都能欣赏和学习中国剪纸艺术"
    },
    {
      icon: "ri-magic-line",
      title: "创新体验",
      description: "结合AR技术，为用户提供沉浸式的文化体验，让传统艺术触手可及"
    },
    {
      icon: "ri-book-open-line",
      title: "文化教育",
      description: "深度挖掘每件作品的文化内涵，传播非遗知识，培养文化自信"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">我们的使命</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            通过数字技术让传统剪纸艺术焕发新生，搭建传统文化与现代科技的桥梁，
            让更多人了解、喜爱并传承中华优秀传统文化
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {missions.map((mission, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <i className={`${mission.icon} text-3xl text-red-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{mission.title}</h3>
              <p className="text-gray-600 leading-relaxed">{mission.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">项目愿景</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                我们希望通过这个数字化非遗馆，不仅要保护传承剪纸艺术，更要让它在新时代绽放光彩。
                让每一位访问者都能感受到中华文化的博大精深，激发对传统文化的热爱与保护意识。
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-red-600 text-xl"></i>
                  <span className="text-gray-700">建设全球最大的剪纸数字档案库</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-red-600 text-xl"></i>
                  <span className="text-gray-700">推动非遗文化的国际化传播</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-red-600 text-xl"></i>
                  <span className="text-gray-700">培养新一代文化传承人</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Beautiful%20Chinese%20paper%20cutting%20artwork%20displayed%20in%20modern%20digital%20museum%2C%20traditional%20red%20paper%20art%20with%20intricate%20patterns%2C%20cultural%20heritage%20preservation%2C%20warm%20museum%20lighting%2C%20digital%20displays%20showing%203D%20models&width=600&height=400&seq=vision-image-001&orientation=landscape"
                alt="项目愿景"
                className="rounded-2xl shadow-lg object-cover object-top w-full h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}