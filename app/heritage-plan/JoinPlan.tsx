
'use client';

import { useState } from 'react';

export default function JoinPlan() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    interest: '',
    message: '',
    profileFile: null as File | null,
    workSamples: [] as File[],
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [charCount, setCharCount] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证必填字段
    if (!formData.name || !formData.email || !formData.role || !formData.interest || !formData.agreeToTerms) {
      setSubmitStatus('error');
      return;
    }

    // 验证字符限制
    if (formData.message.length > 500) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const submitData = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'profileFile' && key !== 'workSamples' && key !== 'agreeToTerms') {
          submitData.append(key, value as string);
        }
      });
      
      // 处理文件上传信息
      if (formData.profileFile) {
        submitData.append('profileFile', '已上传个人档案');
      }
      if (formData.workSamples.length > 0) {
        submitData.append('workSamples', `已上传${formData.workSamples.length}个作品样本`);
      }
      submitData.append('agreeToTerms', formData.agreeToTerms ? '是' : '否');

      const response = await fetch('https://readdy.ai/api/form/heritage-plan-join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: submitData.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          role: '',
          interest: '',
          message: '',
          profileFile: null,
          workSamples: [],
          agreeToTerms: false
        });
        setCharCount(0);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const message = e.target.value;
    if (message.length <= 500) {
      setFormData({ ...formData, message });
      setCharCount(message.length);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'samples') => {
    const files = e.target.files;
    if (!files) return;

    if (type === 'profile') {
      setFormData({ ...formData, profileFile: files[0] });
    } else {
      const newSamples = Array.from(files);
      setFormData({ ...formData, workSamples: [...formData.workSamples, ...newSamples] });
    }
  };

  const removeWorkSample = (index: number) => {
    const newSamples = formData.workSamples.filter((_, i) => i !== index);
    setFormData({ ...formData, workSamples: newSamples });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // 这里应该调用实际的登录API
    console.log('登录:', loginForm);
    setShowLoginModal(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      alert('密码不匹配');
      return;
    }
    // 这里应该调用实际的注册API
    console.log('注册:', registerForm);
    setShowLoginModal(false);
    setIsRegistering(false);
  };

  const roles = [
    "传承人/工艺师",
    "教育工作者",
    "文化研究者", 
    "技术开发者",
    "投资合作方",
    "媒体从业者",
    "学生/爱好者",
    "其他"
  ];

  const interests = [
    "技艺传授", 
    "技艺记录",
    "文化推广",
    "技术开发",
    "资金支持",
    "媒体合作",
    "学术研究",
    "其他"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">加入传承计划</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            无论您是传承人、教育者、技术专家还是文化爱好者，我们都欢迎您加入我们的大家庭
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 bg-gradient-to-br from-red-500 to-red-600 text-white">
                <h3 className="text-3xl font-bold mb-6">为什么加入我们？</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-heart-line text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">传承文化使命</h4>
                      <p className="text-white/90 text-sm">参与保护和传承中华优秀传统文化，为后世留下珍贵遗产</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-team-line text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">专业团队支持</h4>
                      <p className="text-white/90 text-sm">与专业团队合作，获得技术和资源支持</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-global-line text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">全球推广平台</h4>
                      <p className="text-white/90 text-sm">借助全球化平台，让您的专业技能和文化理念走向世界</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-lightbulb-line text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">创新发展机会</h4>
                      <p className="text-white/90 text-sm">在传承中创新，在创新中发展，实现传统与现代的完美融合</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <p className="text-white/90 text-sm italic">
                    "每一个参与者都是文化传承链条上不可或缺的一环，
                    让我们携手共建美好的文化传承未来。"
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all duration-200 border border-white/30 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-user-line mr-2"></i>
                    已有账户？立即登录
                  </button>
                </div>
              </div>
              
              <div className="p-12">
                <form onSubmit={handleSubmit} data-readdy-form="heritage-plan-join" id="heritage-plan-join">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          姓名 *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                          placeholder="请输入您的姓名"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          邮箱 *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                          placeholder="请输入您的邮箱"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          电话
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                          placeholder="请输入您的联系电话"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          机构/组织
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                          placeholder="请输入您的机构或组织"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          身份角色 *
                        </label>
                        <div className="relative">
                          <select
                            name="role"
                            required
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm appearance-none bg-white"
                          >
                            <option value="">请选择您的身份角色</option>
                            {roles.map((role) => (
                              <option key={role} value={role}>{role}</option>
                            ))}
                          </select>
                          <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          感兴趣的领域 *
                        </label>
                        <div className="relative">
                          <select
                            name="interest"
                            required
                            value={formData.interest}
                            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                            className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm appearance-none bg-white"
                          >
                            <option value="">请选择感兴趣的领域</option>
                            {interests.map((interest) => (
                              <option key={interest} value={interest}>{interest}</option>
                            ))}
                          </select>
                          <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                        </div>
                      </div>
                    </div>

                    {/* 个人档案上传 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        个人档案 (PDF/DOC)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-red-400 transition-colors">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileUpload(e, 'profile')}
                          className="hidden"
                          id="profile-upload"
                        />
                        <label htmlFor="profile-upload" className="cursor-pointer">
                          <i className="ri-upload-cloud-line text-3xl text-gray-400 mb-2 block"></i>
                          <p className="text-sm text-gray-600">
                            {formData.profileFile ? formData.profileFile.name : '点击上传个人简历或档案'}
                          </p>
                        </label>
                      </div>
                    </div>

                    {/* 作品样本上传 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        作品样本 (图片/视频)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-red-400 transition-colors">
                        <input
                          type="file"
                          accept="image/*,video/*"
                          multiple
                          onChange={(e) => handleFileUpload(e, 'samples')}
                          className="hidden"
                          id="samples-upload"
                        />
                        <label htmlFor="samples-upload" className="cursor-pointer">
                          <i className="ri-image-add-line text-3xl text-gray-400 mb-2 block"></i>
                          <p className="text-sm text-gray-600">点击上传作品样本（可多选）</p>
                        </label>
                      </div>
                      {formData.workSamples.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {formData.workSamples.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                              <span className="text-sm text-gray-600">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeWorkSample(index)}
                                className="text-red-500 hover:text-red-700 cursor-pointer"
                              >
                                <i className="ri-close-line"></i>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        留言 ({charCount}/500)
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleMessageChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm resize-none"
                        placeholder="请简单介绍您的背景和期望，或提出您的问题..."
                      ></textarea>
                    </div>

                    {/* 同意条款 */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="agree-terms"
                        name="agreeToTerms"
                        required
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                        className="mt-1"
                      />
                      <label htmlFor="agree-terms" className="text-sm text-gray-600">
                        我已阅读并同意《传承计划服务条款》和《隐私政策》*
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line mr-2 animate-spin"></i>
                          提交中...
                        </>
                      ) : (
                        <>
                          <i className="ri-send-plane-line mr-2"></i>
                          加入传承计划
                        </>
                      )}
                    </button>
                    
                    {submitStatus === 'success' && (
                      <div className="text-center text-green-600 bg-green-50 py-3 rounded-lg">
                        <i className="ri-check-line mr-2"></i>
                        申请提交成功！我们会尽快与您联系。
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="text-center text-red-600 bg-red-50 py-3 rounded-lg">
                        <i className="ri-error-warning-line mr-2"></i>
                        提交失败，请检查信息后重试。
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 登录/注册模态框 */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {isRegistering ? '注册账户' : '登录账户'}
              </h3>
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  setIsRegistering(false);
                }}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            {!isRegistering ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                  <input
                    type="email"
                    required
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                    placeholder="请输入邮箱"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">密码</label>
                  <input
                    type="password"
                    required
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                    placeholder="请输入密码"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  登录
                </button>
                <p className="text-center text-sm text-gray-600">
                  还没有账户？
                  <button
                    type="button"
                    onClick={() => setIsRegistering(true)}
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                  >
                    立即注册
                  </button>
                </p>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                  <input
                    type="text"
                    required
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                    placeholder="请输入姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                  <input
                    type="email"
                    required
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                    placeholder="请输入邮箱"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">密码</label>
                  <input
                    type="password"
                    required
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                    placeholder="请输入密码"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">确认密码</label>
                  <input
                    type="password"
                    required
                    value={registerForm.confirmPassword}
                    onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                    placeholder="请再次输入密码"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  注册
                </button>
                <p className="text-center text-sm text-gray-600">
                  已有账户？
                  <button
                    type="button"
                    onClick={() => setIsRegistering(false)}
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                  >
                    立即登录
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
