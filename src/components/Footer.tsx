import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github } from 'lucide-react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          
          {/* Logo / Nom */}
          <div className="mb-4 text-center">
            <span className="font-black text-xl tracking-tight text-white">
              ILYAS <span className="text-emerald-400">HAJJI</span>
            </span>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Futur Ingénieur d'État en Génie Logiciel • Data Engineering & Agentic AI (EMSI 2027)
            </p>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/ilyashajji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Ilyas Hajji"
              className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center text-white transition-all shadow-md"
              whileHover={{ y: -2, scale: 1.05 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://wa.me/212699235778"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Ilyas Hajji"
              className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white transition-all shadow-md"
              whileHover={{ y: -2, scale: 1.05 }}
            >
              <FaWhatsapp className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/ilyas-hajji/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Ilyas Hajji"
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white transition-all shadow-md"
              whileHover={{ y: -2, scale: 1.05 }}
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-slate-400 text-xs text-center mb-6 font-mono"
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
            aria-label="Retour en haut"
            className="w-10 h-10 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md cursor-pointer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Glow decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
