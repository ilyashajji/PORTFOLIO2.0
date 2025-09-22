import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Maximize, X } from 'lucide-react';
import profileImg from '../images/me.png';
import cardImg from '../images/mycard.png';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [isCardOpen, setIsCardOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsCardOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Assurez-vous que le fichier existe dans :
  // /public/cv/Ilyas_Hajji_CV_FR.pdf

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Colonne gauche */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Photo de profil */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={profileImg}
                alt="Ilyas Hajji portrait"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl ring-2 ring-white/50 dark:ring-slate-700/50"
                loading="eager"
              />
            </motion.div>

            {/* Carte visible uniquement en mobile */}
            <motion.div
              className="mb-8 flex justify-center md:hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <img
                src={cardImg}
                alt="Ilyas Hajji card"
                className="w-64 rounded-xl shadow-2xl ring-1 ring-slate-200/60 dark:ring-slate-700/50 cursor-zoom-in"
                loading="lazy"
                onClick={() => setIsCardOpen(true)}
              />
            </motion.div>

            {/* Nom */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-800 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ILYAS{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                HAJJI
              </motion.span>
            </motion.h1>

            {/* Infos & CTA */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 font-medium">
                {t('hero.title')}
              </h2>
              <h3 className="text-lg md:text-xl text-slate-500 dark:text-slate-400">
                {t('hero.subtitle')}
              </h3>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                {t('hero.tagline')}
              </p>

              {/* Boutons */}
              <motion.div
                className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.a
                  href="/cv/Ilyas_Hajji_CV_FR.pdf"
                  download
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  Télécharger CV (FR)
                </motion.a>

                <motion.button
                  onClick={() => setIsCardOpen(true)}
                  className="flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-slate-800/60 ring-1 ring-slate-200 dark:ring-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Maximize className="w-5 h-5" />
                  Voir ma carte
                </motion.button>
              </motion.div>

              {/* Bouton scroll vers About */}
              <motion.button
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 dark:bg-slate-800/50 backdrop-blur-sm text-slate-600 dark:text-slate-300 hover:bg-white/30 dark:hover:bg-slate-800/70 transition-all duration-300 animate-bounce"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Colonne droite */}
          <motion.div
            className="hidden md:flex items-center justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ rotate: -1.5, scale: 1.02 }}
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-400/10 to-emerald-400/10 rounded-3xl blur-2xl" />
              <img
                src={cardImg}
                alt="Ilyas Hajji card"
                className="relative w-80 lg:w-[28rem] rounded-2xl shadow-2xl ring-1 ring-slate-200/60 dark:ring-slate-700/50 cursor-zoom-in"
                loading="eager"
                onClick={() => setIsCardOpen(true)}
              />
            </div>
          </motion.div>
        </div>

        {/* Modal carte */}
        {isCardOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsCardOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Carte de visite"
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsCardOpen(false)}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-800 shadow-lg hover:shadow-xl focus:outline-none"
                aria-label="Fermer le modal"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={cardImg}
                alt="Ilyas Hajji card large"
                className="w-full rounded-2xl shadow-2xl"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
