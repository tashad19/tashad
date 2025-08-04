import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { personalInfo, socialLinks, codingLinks } from '../../utils/data';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github className="h-5 w-5" />;
      case 'linkedin': return <Linkedin className="h-5 w-5" />;
      case 'twitter': return <img src="src\utils\x.svg" alt="X" className="h-4 w-4" />;
      case 'leetcode': return <img src="src\utils\leetcode.webp" alt="LeetCode" className="h-5 w-5" />;
      case 'hackerrank': return <img src="src\utils\hackerrank.svg" alt="HackerRank" className="h-5 w-5" />;
      case 'codechef': return <img src="src\utils\codechef.svg" alt="CodeChef" className="h-5 w-5" />;
      case 'codeforces': return <img src="src\utils\codeforces.webp" alt="Codeforces" className="h-5 w-5" />;
      default: return <Mail className="h-5 w-5" />;
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Follow me on
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      {getSocialIcon(social.icon)}
                      <span className="text-white dark:text-black text-xs">
                        {/* Icon rendered above */}
                      </span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Coding Profiles
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {codingLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      {getSocialIcon(social.icon)}
                      <span className="text-white dark:text-black text-xs">
                        {/* Icon rendered above */}
                      </span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;