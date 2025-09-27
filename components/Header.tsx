
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // 确保在所有页面都显示导航栏
  const shouldShowHeader = true;

  if (!shouldShowHeader) return null;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out will-change-transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="w-full px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-lg overflow-hidden transform transition-transform duration-300 group-hover:scale-110">
              <img 
                src="https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/833cce9f1a3c1a7b722027674c5ad4c0.jfif"
                alt="PAPERCUT MUSEUM"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-white font-black text-xl tracking-[0.15em] uppercase">
              PAPERCUT MUSEUM
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer relative group font-medium"
              aria-label="首页"
            >
              首页
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/heritage-plan" 
              className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer relative group font-medium"
              aria-label="传承计划"
            >
              传承计划
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/ar-experience" 
              className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer relative group font-medium"
              aria-label="3D作品"
            >
              3D作品
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/stories" 
              className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer relative group font-medium"
              aria-label="非遗故事"
            >
              非遗故事
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer relative group font-medium"
              aria-label="关于我们"
            >
              关于我们
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          <button
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer text-white hover:text-red-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </nav>

        {isMenuOpen && (
          <div 
            className="md:hidden mt-4 py-4 border-t border-white/20 transform transition-all duration-300"
            style={{
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
          >
            <div className="flex flex-col space-y-4 max-w-7xl mx-auto">
              <Link 
                href="/" 
                className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-label="首页"
              >
                首页
              </Link>
              <Link 
                href="/heritage-plan" 
                className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-label="传承计划"
              >
                传承计划
              </Link>
              <Link 
                href="/ar-experience" 
                className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-label="3D作品"
              >
                3D作品
              </Link>
              <Link 
                href="/stories" 
                className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-label="非遗故事"
              >
                非遗故事
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-red-400 transition-colors duration-300 cursor-pointer py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
                aria-label="关于我们"
              >
                关于我们
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
