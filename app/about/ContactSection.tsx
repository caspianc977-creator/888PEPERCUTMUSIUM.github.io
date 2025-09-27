'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = {
    phone: '+86 19335313121',
    email: 'lhc_186@qq.com',
    location: '中国郴州市'
  };

  const handleSocialClick = () => {
    setShowContactPopup(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 验证表单数据
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    if (formData.message.length > 500) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 按照 application/x-www-form-urlencoded 格式提交数据
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('subject', formData.subject);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d32g3ko5vkms9brjvfs0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">联系我们</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              有任何问题或建议，欢迎与我们联系
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-red-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">联系信息</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <i className="ri-phone-line text-red-600 text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">电话</p>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <i className="ri-mail-line text-red-600 text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">邮箱</p>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <i className="ri-map-pin-line text-red-600 text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">地址</p>
                      <p className="text-gray-600">{contactInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <i className="ri-time-line text-red-600 text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">工作时间</p>
                      <p className="text-gray-600">周一至周五 9:00-18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">关注我们</h3>
                <div className="flex space-x-4">
                  <button 
                    onClick={handleSocialClick}
                    className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors cursor-pointer"
                  >
                    <i className="ri-wechat-fill text-xl"></i>
                  </button>
                  <button 
                    onClick={handleSocialClick}
                    className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer"
                  >
                    <i className="ri-weibo-fill text-xl"></i>
                  </button>
                  <button 
                    onClick={handleSocialClick}
                    className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    <i className="ri-mail-fill text-xl"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">发送消息</h3>
              
              {/* 表单提交状态显示 */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center text-green-800">
                    <i className="ri-check-circle-line mr-2"></i>
                    <span>消息发送成功！我们会尽快回复您。</span>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center text-red-800">
                    <i className="ri-error-warning-line mr-2"></i>
                    <span>发送失败，请检查信息填写是否完整或稍后再试。</span>
                  </div>
                </div>
              )}

              <form 
                id="contact-form"
                data-readdy-form="contact-form"
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">姓名</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">邮箱</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="请输入您的邮箱"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">主题</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="请输入消息主题"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">消息内容</label>
                  <textarea 
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    placeholder="请输入您的消息内容..."
                    maxLength={500}
                    required
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.message.length}/500字符
                    {formData.message.length > 500 && (
                      <span className="text-red-500 ml-2">超出字数限制</span>
                    )}
                  </p>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      发送中...
                    </>
                  ) : (
                    '发送消息'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Popup */}
      {showContactPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowContactPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-contacts-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">联系方式</h3>
              <p className="text-gray-600">欢迎通过以下方式联系我们</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <i className="ri-wechat-fill text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">微信</p>
                  <p className="text-gray-600 text-sm">扫码添加微信好友</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <i className="ri-phone-fill text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">电话</p>
                  <p className="text-gray-600 text-sm">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <i className="ri-mail-fill text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">邮箱</p>
                  <p className="text-gray-600 text-sm">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-xl">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <i className="ri-map-pin-fill text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">地点</p>
                  <p className="text-gray-600 text-sm">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowContactPopup(false)}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                知道了
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}