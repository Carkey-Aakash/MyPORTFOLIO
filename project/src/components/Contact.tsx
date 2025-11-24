import { Mail, Phone, Linkedin, Github, Facebook, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form. In production, this would send your message.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'akashkarki2468@gmail.com',
      link: 'mailto:akashkarki2468@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+977 9827064994',
      link: 'tel:+9779827064994',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/akash-karki-123211303',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      link: 'https://github.com/Carkey-Aakash',
      color: 'bg-gray-900 hover:bg-gray-800',
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: 'Facebook',
      link: 'https://www.facebook.com/prakash.carkey.9',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      link: 'https://www.instagram.com/aakash.carkey/',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:shadow-md transition-all border border-blue-100 hover:scale-105"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="font-medium text-gray-900">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 p-4 text-white rounded-lg transition-all hover:scale-105 shadow-md ${social.color}`}
                  >
                    {social.icon}
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Looking for opportunities</h4>
              <p className="text-gray-700">
                Looking for internship opportunities in data science, analytics, or backend development with Django.
Excited to apply my skills and collaborate on real-world projects.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
