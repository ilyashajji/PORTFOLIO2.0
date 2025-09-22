import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <motion.div
            className="flex items-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://wa.me/212699235778"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              whileHover={{ y: -2 }}
            >
              <FaWhatsapp className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="#" // Replace with actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              whileHover={{ y: -2 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-slate-400 text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('footer.rights')}
          </motion.p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-600/10 to-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-emerald-600/10 to-blue-600/10 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;