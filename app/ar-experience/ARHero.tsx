
'use client';

export default function ARHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat pt-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Person%20using%20smartphone%20to%20view%20Chinese%20paper%20cutting%20art%20in%20augmented%20reality%2C%20red%20dragon%20floating%20in%20modern%20room%2C%20magical%20AR%20interface%2C%20futuristic%20technology%2C%20immersive%20digital%20experience%2C%20contemporary%20setting%20with%20traditional%20art&width=1920&height=600&seq=ar-hero001&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          3D作品展示
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
          精选500+件传统剪纸作品，高清3D建模展示<br />
          每一处细节都完美还原，文化传承触手可及
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-image-line text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">高清封面</h3>
              <p className="text-sm text-gray-300">精美作品预览图</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-book-open-line text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">详细介绍</h3>
              <p className="text-sm text-gray-300">文化背景与制作工艺</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-3d-view-line text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">3D模型</h3>
              <p className="text-sm text-gray-300">360°旋转互动体验</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
