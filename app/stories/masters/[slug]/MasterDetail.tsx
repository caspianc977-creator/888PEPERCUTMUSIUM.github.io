'use client';

import Link from 'next/link';

interface MasterDetailProps {
  masterSlug: string;
}

export default function MasterDetail({ masterSlug }: MasterDetailProps) {
  const mastersData: Record<string, any> = {
    'zhang-meihua': {
      name: "张美华",
      title: "国家级非遗传承人",
      specialty: "蔚县剪纸",
      experience: "从艺45年",
      location: "河北蔚县",
      avatar: "https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/7beb143aec424d2a3a96ac6d32dcc81e.jfif",
      story: `张美华女士出生于河北蔚县一个剪纸世家，自幼跟随祖母学习剪纸技艺。她的祖母是当地有名的剪纸艺人，手艺精湛，远近闻名。

在祖母的悉心指导下，张美华从5岁开始接触剪纸，8岁时已能独立完成简单的花鸟图案。经过数十年的潜心钻研和不断创新，她不仅完全掌握了蔚县剪纸的传统技法，更在继承的基础上发展出了自己独特的艺术风格。

张美华的作品以构图饱满、线条流畅、色彩艳丽著称。她擅长创作大型剪纸作品，其代表作《龙凤呈祥》长达3米，工艺精湛，寓意深远，被中国工艺美术馆收藏。

多年来，张美华致力于剪纸技艺的传承和推广工作。她在当地创办了剪纸培训班，免费向村民传授技艺，至今已培养了百余名学员。其中有20多人成为了县市级传承人，为蔚县剪纸的传承发展做出了重要贡献。`,
      achievements: [
        "国家级非物质文化遗产传承人",
        "中国工艺美术大师",
        "联合国教科文组织民间艺术家",
        "河北省文化艺术终身成就奖",
        "中国民间文艺山花奖"
      ],
      works: [
        {
          title: "龙凤呈祥",
          description: "大型剪纸作品，寓意吉祥如意",
          image: "https://readdy.ai/api/search-image?query=Traditional%20Chinese%20paper%20cutting%20dragon%20and%20phoenix%20pattern%2C%20large%20scale%20artwork%2C%20intricate%20details%2C%20red%20paper%2C%20auspicious%20symbols%2C%20museum%20quality%2C%20cultural%20heritage%20masterpiece&width=600&height=400&seq=work-dragon-phoenix&orientation=landscape"
        },
        {
          title: "花开富贵",
          description: "牡丹花主题剪纸，象征富贵吉祥",
          image: "https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20peony%20flowers%20pattern%2C%20elegant%20design%2C%20red%20paper%20art%2C%20prosperity%20symbols%2C%20detailed%20floral%20motifs%2C%20traditional%20craftsmanship&width=600&height=400&seq=work-peony&orientation=landscape"
        }
      ]
    },
    'li-yanqing': {
      name: "黎艳青",
      title: "特邀传承人 · 郴州市级非遗传承人",
      specialty: "桂阳剪花 · 中华一刀剪",
      experience: "从艺30余年",
      location: "湖南郴州桂阳",
      avatar: "https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/aca9d5ed2b8e5186621db10af371dc9e.jfif",
      story: `黎艳青女士，桂阳剪花娘子，是"中华第一剪"洪源大师的大弟子，"中华一刀剪"第七代传人，湖南郴州市级非遗剪纸传承人。

"一刀剪"是一门极其精湛的技艺，能不间歇地剪出一个字、一行字、一群字、人物、动植物和物品等，即一刀能完成一幅作品。拥有此技能的剪纸人在当今世上仅为凤毛麟角，黎艳青女士正是其中的佼佼者。

黎艳青从事剪纸艺术三十多年来，潜心钻研传统技艺，不断创新发展。她创作了上千幅精美的剪纸作品，其中代表作包括《桂阳八景》、《古郡桂阳》、《中华文明百贤图》等，每一幅作品都体现了深厚的文化底蕴和精湛的技艺水平。

作为传承人，黎艳青女士积极投身于剪纸艺术的传承和推广工作。她成功举办了两届个人剪纸作品展，创办了两家个人剪纸艺术馆，每年培训学生上万人次，在社会上反响热烈。近些年来，她多次应邀到香港地区、韩国，以及各地、少数民族地区、特殊教育学校、各企事业单位、书院及培训学校进行公益讲学，传授非遗剪纸艺术。

黎艳青女士不仅技艺精湛，更在各类比赛中屡获殊荣。2020年荣获湖南省第二届巾帼创业创新大赛三等奖；2021年作品《红色精神代代传》和《不忘初心，牢记使命》分别荣获建党100周年"湖南工艺美术精品大赛"优秀奖和银奖；同年剪纸作品《半条被子 温暖中国》荣获郴州市第七届工艺美术精品展金奖；2022年《戏曲人物》荣获郴州市第八届工艺美术精品展一等奖。`,
      achievements: [
        "郴州市级非物质文化遗产传承人",
        "中国剪纸艺术家协会会员", 
        "郴州市工艺美术大师",
        "郴州市十大乡村名匠",
        "湖湘好网名，文明传承大使",
        "桂阳县消防宣传大使"
      ],
      awards: [
        "2020年湖南省第二届巾帼创业创新大赛三等奖",
        "2021年《红色精神代代传》湖南工艺美术精品大赛优秀奖",
        "2021年《不忘初心，牢记使命》湖南工艺美术精品大赛银奖",
        "2021年《半条被子 温暖中国》郴州市工艺美术精品展金奖",
        "2022年《戏曲人物》郴州市工艺美术精品展一等奖",
        "《十二生肖》湖南省工艺美术职院第二届学院奖铜奖",
        "《老小趣人图》第二届中国湘绣文化艺术节最佳创意奖"
      ],
      works: [
        {
          title: "桂阳八景",
          description: "展现桂阳地方特色的经典剪纸系列作品",
          image: "https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20Guiyang%20eight%20scenic%20spots%20series%2C%20traditional%20red%20paper%20art%2C%20detailed%20landscape%20scenes%2C%20cultural%20heritage%20artwork%2C%20regional%20characteristics%2C%20mountains%20and%20rivers%2C%20ancient%20architecture&width=600&height=400&seq=work-guiyang-eight&orientation=landscape"
        },
        {
          title: "古郡桂阳",
          description: "被湖南省工艺美术博物馆收藏的代表作",
          image: "https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20ancient%20Guiyang%20county%20theme%2C%20historical%20architecture%2C%20traditional%20culture%20symbols%2C%20red%20paper%20cutting%20art%2C%20museum%20quality%20artwork%2C%20detailed%20craftsmanship&width=600&height=400&seq=work-ancient-guiyang&orientation=landscape"
        },
        {
          title: "中华文明百贤图",
          description: "展现中华文明历史人物的大型剪纸作品",
          image: "https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20hundred%20sages%20of%20Chinese%20civilization%2C%20historical%20figures%2C%20traditional%20red%20paper%20art%2C%20cultural%20heritage%20masterpiece%2C%20detailed%20character%20portraits%2C%20classical%20style&width=600&height=400&seq=work-hundred-sages&orientation=landscape"
        },
        {
          title: "半条被子 温暖中国",
          description: "获郴州市工艺美术精品展金奖的红色题材作品",
          image: "https://static.readdy.ai/image/4646f1d600c87ea9499316bb61661975/6f4168bd7c7b9ef973901692a8c9baa3.jfif"
        }
      ],
      featured: true,
      hasInterview: true
    },
    'wang-defu': {
      name: "王德福",
      title: "市级非遗传承人",
      specialty: "山东剪纸",
      experience: "从艺32年",
      location: "山东潍坊",
      avatar: "https://readdy.ai/api/search-image?query=Senior%20Chinese%20male%20craftsman%20portrait%2C%20gentle%20smile%2C%20traditional%20clothing%2C%20experienced%20artisan%2C%20paper%20cutting%20studio%2C%20warm%20atmosphere%2C%20cultural%20preservation%20expert&width=400&height=400&seq=master-wang-detail&orientation=squarish",
      story: `王德福先生出生于山东潍坊，从小就对民间艺术有着特殊的情感。他的童年是在祖父的剪纸工坊中度过的，耳濡目染下对这门传统技艺产生了浓厚的兴趣。

1992年开始，王德福正式投身于剪纸艺术的学习和研究。他不仅学习传统技法，更注重对剪纸文化内涵的挖掘和整理。经过多年的努力，他收集整理了大量的剪纸资料，为山东剪纸的传承保护做出了重要贡献。

王德福的剪纸作品风格独特，既保持了山东剪纸的传统特色，又融入了现代审美理念。他特别擅长创作大型主题性剪纸作品，其代表作《齐鲁风韵》系列，生动展现了山东的历史文化和民俗风情。

为了更好地传承和推广剪纸艺术，王德福于2005年创建了潍坊剪纸博物馆，这是山东省首家专门展示剪纸艺术的博物馆。博物馆收藏了从明清到现代的各类剪纸作品千余件，成为研究和传承剪纸文化的重要基地。`,
      achievements: [
        "市级非物质文化遗产传承人",
        "民间艺术研究学者",
        "文化传播先进个人",
        "山东省民间文艺家协会理事",
        "潍坊剪纸博物馆创始人"
      ],
      works: [
        {
          title: "齐鲁风韵",
          description: "展现山东历史文化的系列剪纸作品",
          image: "https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20Shandong%20cultural%20series%2C%20traditional%20architecture%2C%20historical%20scenes%2C%20red%20paper%20art%2C%20regional%20characteristics%2C%20cultural%20heritage&width=600&height=400&seq=work-qilu&orientation=landscape"
        },
        {
          title: "民俗百图",
          description: "记录传统民俗生活的剪纸作品集",
          image: "https://readdy.ai/api/search-image?query=Chinese%20paper%20cutting%20folk%20life%20scenes%20collection%2C%20traditional%20customs%2C%20daily%20life%20activities%2C%20red%20paper%20cutting%20art%2C%20cultural%20documentation&width=600&height=400&seq=work-folklore&orientation=landscape"
        }
      ]
    }
  };

  const master = mastersData[masterSlug];

  if (!master) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">传承人信息未找到</h1>
          <Link href="/stories">
            <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 cursor-pointer">
              返回非遗故事
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <Link href="/stories" className="inline-flex items-center text-red-600 hover:text-red-700 cursor-pointer">
            <i className="ri-arrow-left-line mr-2"></i>
            返回非遗故事
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64 bg-gradient-to-r from-red-500 to-red-600">
            {master.featured && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                <i className="ri-star-fill mr-1"></i>
                特邀传承人
              </div>
            )}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{master.name}</h1>
              <p className="text-xl">{master.title}</p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">传承人故事</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed">
                    {master.story.split('\n\n').map((paragraph: string, index: number) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {master.hasInterview && (
                  <div className="mb-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">专题采访视频</h3>
                        <p className="text-gray-600">深度了解黎艳青老师的艺术历程和传承故事</p>
                      </div>
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 whitespace-nowrap cursor-pointer">
                        <i className="ri-play-circle-line mr-2"></i>
                        观看采访
                      </button>
                    </div>
                  </div>
                )}

                {master.awards && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">获奖荣誉</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {master.awards.map((award: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
                          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                            <i className="ri-trophy-fill text-white text-sm"></i>
                          </div>
                          <span className="text-gray-700 text-sm leading-relaxed">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">代表作品</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {master.works.map((work: any, index: number) => (
                      <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-48 object-cover object-top"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-800 mb-2">{work.title}</h3>
                          <p className="text-sm text-gray-600">{work.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-red-200">
                      <img
                        src={master.avatar}
                        alt={master.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{master.name}</h3>
                    <p className="text-red-600 font-medium">{master.title}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-palette-line text-red-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                      <span>专长：{master.specialty}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-time-line text-red-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                      <span>从艺：{master.experience}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-map-pin-line text-red-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                      <span>地区：{master.location}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">主要成就</h4>
                    <div className="space-y-2">
                      {master.achievements.map((achievement: string, index: number) => (
                        <div key={index} className="flex items-start text-sm text-gray-600">
                          <i className="ri-medal-line text-red-600 mr-2 mt-0.5 w-4 h-4 flex items-center justify-center"></i>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">联系传承人</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    如果您对{master.name}老师的作品感兴趣，或希望学习相关技艺，欢迎与我们联系。
                  </p>
                  <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 cursor-pointer">
                    <i className="ri-mail-line mr-2"></i>
                    联系我们
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}