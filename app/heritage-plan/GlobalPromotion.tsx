
'use client';

export default function GlobalPromotion() {
  const platforms = [
    {
      name: "官方网站",
      icon: "ri-global-line",
      description: "多语言官方网站，全面展示中华传统文化",
      features: ["多语言支持", "互动展示", "在线学习", "文化故事"]
    },
    {
      name: "社交媒体",
      icon: "ri-share-line", 
      description: "利用全球社交平台，扩大文化影响力",
      features: ["短视频制作", "直播互动", "话题营销", "用户生成内容"]
    },
    {
      name: "VR虚拟展馆",
      icon: "ri-vr-line",
      description: "沉浸式虚拟现实体验，让世界感受东方之美",
      features: ["360°全景", "互动体验", "虚拟导览", "在线展览"]
    },
    {
      name: "移动应用",
      icon: "ri-smartphone-line",
      description: "专业移动应用，随时随地学习传统文化",
      features: ["离线学习", "AR体验", "社区交流", "进度跟踪"]
    }
  ];

  const globalReach = [
    { region: "亚洲", percentage: 45, color: "from-red-500 to-red-600" },
    { region: "欧洲", percentage: 25, color: "from-blue-500 to-blue-600" },
    { region: "北美", percentage: 20, color: "from-green-500 to-green-600" },
    { region: "其他", percentage: 10, color: "from-purple-500 to-purple-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">全球文化推广</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            通过多元化的数字平台，让中华传统文化走向世界舞台
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className={`${platform.icon} text-2xl text-white`}></i>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{platform.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{platform.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">全球用户分布</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalReach.map((region, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gray-200"></div>
                  <div 
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${region.color}`}
                    style={{
                      background: `conic-gradient(from 0deg, rgb(147, 51, 234) 0%, rgb(147, 51, 234) ${region.percentage}%, rgb(229, 231, 235) ${region.percentage}%, rgb(229, 231, 235) 100%)`
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white drop-shadow-lg">{region.percentage}%</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800">{region.region}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">文化无界，传承无限</h3>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              我们的使命是让每一个角落的人都能接触到中华传统文化的精髓，
              通过现代科技的力量，打破地域和语言的障碍，
              让古老的智慧在新时代焕发出更加绚烂的光彩。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">合作国家</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100万+</div>
                <div className="text-lg opacity-90">全球用户</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-lg opacity-90">语言版本</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
