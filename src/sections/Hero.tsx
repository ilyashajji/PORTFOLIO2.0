import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Maximize, X, Sparkles, MapPin, Mail, Github, Database, Brain, Network } from 'lucide-react';
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const keyFocus = [
    { icon: Database, label: 'Data Engineering & Big Data', color: 'from-blue-500 to-cyan-500' },
    { icon: Brain, label: 'Agentic AI & LangGraph', color: 'from-purple-500 to-indigo-500' },
    { icon: Network, label: 'Distributed Systems & ML', color: 'from-emerald-500 to-teal-500' }
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Banner PFE 2027 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-emerald-500/30 dark:border-emerald-500/40 shadow-lg shadow-emerald-500/10 mb-8 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              {t('hero.badge')}
            </span>
          </div>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
          <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
            {t('hero.badge.detail')}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Colonne gauche : Infos & Titres */}
          <motion.div
            className="text-left md:text-left flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Portrait & statut localisation */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <img
                  src={profileImg}
                  alt="Ilyas Hajji"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shadow-xl ring-2 ring-emerald-500/40"
                  loading="eager"
                />
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" title="Actif" />
              </motion.div>

              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50 mb-1">
                  <MapPin className="w-3 h-3 text-blue-500" />
                  Casablanca, Maroc
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  EMSI (Promo 2027)
                </p>
              </div>
            </div>

            {/* Nom */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ILYAS{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">
                HAJJI
              </span>
            </motion.h1>

            {/* Titre & Sous-titre */}
            <motion.div
              className="space-y-3 mb-6 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                {t('hero.title')}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl">
                {t('hero.tagline')}
              </p>
            </motion.div>

            {/* Focus Cards rapides */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full mb-8">
              {keyFocus.map((focus, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-left"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${focus.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    <focus.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                    {focus.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Boutons CTA */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start items-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.a
                href="/cv/Ilyas_Hajji_CV_FR.pdf"
                download
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all duration-300 text-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                {t('hero.downloadCV')}
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all duration-300 text-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                {t('hero.contactMe')}
              </motion.button>

              <motion.button
                onClick={() => setIsCardOpen(true)}
                className="flex items-center gap-2 px-5 py-3.5 bg-white/80 dark:bg-slate-800/80 ring-1 ring-slate-200 dark:ring-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl shadow-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 text-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Maximize className="w-4 h-4" />
                {t('hero.viewCard')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Colonne droite : Visuel Carte interactive */}
          <motion.div
            className="flex flex-col items-center justify-center relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative group cursor-pointer" onClick={() => setIsCardOpen(true)}>
              {/* Glowing gradient background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/30 dark:ring-slate-700/60 bg-slate-900">
                <img
                  src={cardImg}
                  alt="Ilyas Hajji Carte Digitale"
                  className="w-full max-w-md lg:max-w-lg rounded-2xl object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-6">
                  <span className="text-white text-sm font-medium flex items-center gap-2">
                    <Maximize className="w-4 h-4" /> Agrandir la carte
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-1 rounded">
                    Data & AI
                  </span>
                </div>
              </div>
            </div>

            {/* Quick metrics underneath */}
            <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-md">
              <div className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 text-center">
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">97.4%</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium">R² Modèle NIR</p>
              </div>
              <div className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 text-center">
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">5+</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium">Stages Techniques</p>
              </div>
              <div className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 text-center">
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Multi-Agents</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium">LangGraph & LLM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex justify-center">
          <motion.button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce cursor-pointer"
            aria-label="Défiler vers le bas"
          >
            <span>Découvrir le profil</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Modal Carte */}
        {isCardOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
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
                className="absolute -top-4 -right-4 md:-top-5 md:-right-5 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-xl hover:scale-110 transition-transform focus:outline-none"
                aria-label="Fermer le modal"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={cardImg}
                alt="Ilyas Hajji card large"
                className="w-full rounded-2xl shadow-2xl ring-1 ring-white/20"
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
