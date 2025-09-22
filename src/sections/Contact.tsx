import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MessageSquare, User, AtSign, Download } from 'lucide-react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = '212699235778'; // WhatsApp requires international format (no leading 0)
    const text = `Hello, my name is ${formData.name}.\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ilyashajji770@gmail.com',
      href: 'mailto:ilyashajji770@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+212 699 235 778',
      href: 'tel:+212699235778',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: 'Message me',
      href: 'https://wa.me/212699235778',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/ilyas-hajji/', 
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cv/Ilyas_Hajji_CV_FR.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Télécharger CV (FR)
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">
              Get in Touch
            </h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group block"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 p-6 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-700/50">
                  <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {method.label}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-slate-700/50">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.name')}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-slate-700/50 border border-slate-300/50 dark:border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <AtSign className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.email')}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-slate-700/50 border border-slate-300/50 dark:border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                  />
                </div>

                <div className="relative">
                  <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-400" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.message')}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-slate-700/50 border border-slate-300/50 dark:border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                    submitStatus === 'success'
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700'
                  } disabled:opacity-50 shadow-lg hover:shadow-xl`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('contact.send')}
                    </>
                  )}
                </motion.button>
              </form>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl text-center"
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
