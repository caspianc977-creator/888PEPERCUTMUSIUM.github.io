
'use client';

import { useState } from 'react';

export default function TeamSection() {
  const [playingMember, setPlayingMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "廖浩丞",
      role: "项目负责人",
      description: "数字文化保护专家，致力于传统文化与现代技术的融合创新，推动非遗数字化传承。",
      image: "https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/c9c99a1a8b9216aa84c4e9f1392f2ad7.jfif",
      introduction: "大家好，我是廖浩丞，很荣幸能够带领团队开展这个意义深远的项目。我们的使命是用现代科技为传统文化插上翅膀，让千年剪纸艺术在数字时代焕发新的生机。",
      expertise: ["文化遗产保护", "数字化创新", "项目管理"]
    },
    {
      id: 2,
      name: "张明",
      role: "技术总监", 
      description: "3D建模与AR技术专家，10年数字艺术经验，专注于文化艺术的数字化呈现。",
      image: "https://readdy.ai/api/search-image?query=Young%20Chinese%20tech%20director%20working%20with%203D%20models%20on%20computer%2C%20AR%20glasses%20nearby%2C%20modern%20workspace%20with%20digital%20displays%2C%20innovative%20technology%20atmosphere%2C%20professional%20portrait&width=400&height=400&seq=team-member-002&orientation=squarish",
      introduction: "作为技术总监，我负责将传统剪纸艺术转化为数字化体验。通过3D建模和AR技术，我们让用户能够沉浸式地学习和体验剪纸文化。",
      expertise: ["3D建模", "AR/VR技术", "前端开发"]
    },
    {
      id: 3,
      name: "王雅琴",
      role: "文化顾问",
      description: "剪纸艺术传承人，三代传承的非遗大师，为项目提供专业的文化指导。",
      image: "https://readdy.ai/api/search-image?query=Elegant%20Chinese%20paper%20cutting%20master%2C%20traditional%20craftsperson%20with%20delicate%20hands%20creating%20intricate%20paper%20art%2C%20surrounded%20by%20beautiful%20paper%20cutting%20works%2C%20warm%20studio%20lighting%2C%20cultural%20heritage%20atmosphere&width=400&height=400&seq=team-member-003&orientation=squarish",
      introduction: "我是王雅琴，从小跟随祖母学习剪纸技艺。作为文化顾问，我希望通过这个平台让更多年轻人了解和传承剪纸艺术的精髓。",
      expertise: ["传统剪纸技艺", "文化传承", "教学指导"]
    },
    {
      id: 4,
      name: "陈博文",
      role: "UI/UX设计师",
      description: "专注用户体验设计，让传统文化触手可及，创造直观友好的学习界面。",
      image: "https://readdy.ai/api/search-image?query=Creative%20Chinese%20UI%20UX%20designer%20working%20on%20cultural%20app%20interfaces%2C%20modern%20design%20workspace%2C%20sketches%20and%20digital%20screens%20showing%20paper%20cutting%20themed%20designs%2C%20creative%20professional%20environment&width=400&height=400&seq=team-member-004&orientation=squarish",
      introduction: "我负责设计用户界面和体验流程，目标是让传统文化学习变得简单有趣。每一个设计细节都承载着对传统文化的敬意。",
      expertise: ["UI/UX设计", "交互设计", "视觉设计"]
    }
  ];

  const playIntroduction = (memberId: number, text: string) => {
    if (playingMember === memberId) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setPlayingMember(null);
      return;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      utterance.onstart = () => setPlayingMember(memberId);
      utterance.onend = () => setPlayingMember(null);
      utterance.onerror = () => setPlayingMember(null);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">团队成员</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们是一群充满热情的文化保护者和技术创新者
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* 语音介绍按钮 */}
                <button
                  onClick={() => playIntroduction(member.id, member.introduction)}
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    playingMember === member.id
                      ? 'bg-red-600 text-white'
                      : 'bg-white/90 text-gray-700 hover:bg-white'
                  }`}
                  title="语音介绍"
                >
                  <i className={`text-lg ${playingMember === member.id ? 'ri-pause-line' : 'ri-volume-up-line'}`}></i>
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                
                {/* 专业技能 */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-800">专业技能</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 个人介绍文本 */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    "{member.introduction}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 团队理念 */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">团队理念</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-line text-2xl text-red-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">传承初心</h4>
                <p className="text-sm text-gray-600">用心守护传统文化，让非遗技艺薪火相传</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lightbulb-line text-2xl text-blue-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">创新精神</h4>
                <p className="text-sm text-gray-600">融合现代科技，为传统文化注入新的活力</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-2xl text-green-600"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">协作共赢</h4>
                <p className="text-sm text-gray-600">汇聚各界力量，共同推动文化传承事业</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                我们深信，传统文化的传承需要现代技术的助力，而技术的发展也需要文化的滋养。
                通过跨界合作，我们致力于打造一个集教学、体验、传承于一体的数字化平台，
                让剪纸艺术在新时代绽放更加绚烂的光彩。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
