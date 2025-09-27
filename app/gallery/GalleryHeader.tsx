'use client';

export default function GalleryHeader() {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.7), rgba(139, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20exhibition%20hall%20with%20displays%20of%20red%20paper%20artworks%20on%20white%20walls%2C%20museum%20lighting%2C%20elegant%20gallery%20space%2C%20cultural%20artifacts%2C%20visitors%20viewing%20exhibits%2C%20professional%20museum%20setting&width=1920&height=600&seq=gallery-header001&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          3D作品馆
        </h1>
        <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
          500+件珍贵剪纸作品，支持360°旋转观看<br />
          感受传统艺术的精美细节与文化内涵
        </p>
        
        <div className="flex justify-center mt-8 space-x-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-200">500+</div>
            <div className="text-red-100">作品收藏</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-200">8</div>
            <div className="text-red-100">艺术分类</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-200">20+</div>
            <div className="text-red-100">传承人</div>
          </div>
        </div>
      </div>
    </section>
  );
}