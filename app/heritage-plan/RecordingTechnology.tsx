
'use client';

export default function RecordingTechnology() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">3D作品档案</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            建立完整的数字化作品档案系统，为传统剪纸艺术构建永久保存的数字资产库
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">全球推广</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                通过数字化平台将中华传统剪纸艺术推向世界，让全球观众都能欣赏和了解这一珍贵的文化遗产。
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">多语言展示界面</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">文化背景深度解读</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">互动式3D体验</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">社交媒体分享</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">教育资源开放</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">跨文化交流促进</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-2">全球覆盖</div>
                  <div className="text-sm text-blue-500">多国家地区</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-2">文化交流</div>
                  <div className="text-sm text-green-500">国际合作</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600 mb-2">教育推广</div>
                  <div className="text-sm text-purple-500">知识传播</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600 mb-2">文化保护</div>
                  <div className="text-sm text-orange-500">永久传承</div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200 whitespace-nowrap cursor-pointer">
                <i className="ri-global-line mr-2"></i>
                探索全球展示
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Global%20digital%20cultural%20exhibition%20showing%20Chinese%20paper%20cutting%20art%20on%20multiple%20screens%2C%20international%20museum%20visitors%20viewing%20traditional%20artwork%20displays%2C%20world%20map%20highlighting%20cultural%20exchange%2C%20modern%20technology%20preserving%20ancient%20art%2C%20cross-cultural%20appreciation&width=600&height=500&seq=global-exhibition&orientation=landscape"
                alt="全球推广展示"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
