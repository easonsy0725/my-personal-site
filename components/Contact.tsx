'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'sykaho@icloud.com',
      link: 'mailto:sykaho@icloud.com'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/easonsy0725',
      link: 'https://github.com/easonsy0725'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+852 5191-5520',
      link: 'tel:+85251915520'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Create Together</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Ready to bring your next project to life? I&apos;d love to hear about your ideas and discuss how we can work together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <p className="text-blue-200 text-lg leading-relaxed">
                Whether you need backend development, audio/lighting engineering expertise, 
                I&apos;m here to help bring your vision to reality.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center space-x-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">{method.title}</p>
                    <p className="text-white font-medium text-lg">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
              <h4 className="text-xl font-bold mb-2">Current Availability</h4>
              <p className="text-blue-200">
                <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                Available for new projects and collaborations
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-blue-200">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-blue-300 backdrop-blur-sm transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-blue-200">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-blue-300 backdrop-blur-sm transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-blue-200">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-blue-300 backdrop-blur-sm transition-all duration-300"
                placeholder="What's this about?"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-blue-200">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-white placeholder-blue-300 backdrop-blur-sm resize-none transition-all duration-300"
                placeholder="Tell me about your project, ideas, or how we can collaborate..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 px-8 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group text-lg"
            >
              <span className="flex items-center justify-center">
                Send Message
                <span className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}