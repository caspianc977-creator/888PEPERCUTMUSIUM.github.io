'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.8), rgba(139, 0, 0, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20digital%20cultural%20preservation%20team%20working%20in%20contemporary%20office%2C%20computers%20displaying%203D%20paper%20cutting%20models%2C%20team%20collaboration%2C%20cultural%20heritage%20technology%2C%20diverse%20professionals%2C%20warm%20lighting%2C%20innovation%20meets%20tradition&width=1920&height=600&seq=about-hero001&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          关于我们
        </h1>
        <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
          致力于用数字技术保护传统文化<br />
          让非遗艺术在新时代焕发生机
        </p>
      </div>
    </section>
  );
}