import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Languages: React.FC = () => {
  const { t } = useLanguage();

  const languages = [
    {
      name: 'Arabic',
      level: 'Native',
      flag: '🇲🇦',
      proficiency: 100,
      description: 'Native speaker with excellent written and verbal communication skills'
    },
    {
      name: 'French',
      level: 'Fluent',
      flag: '🇫🇷',
      proficiency: 90,
      description: 'Professional proficiency in business and technical contexts'
    },
    {
      name: 'English',
      level: 'Intermediate/Advanced',
      flag: '🇬🇧',
      proficiency: 80,
      description: 'Strong communication skills for international collaboration'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="languages" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            {t('languages.title')}
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {languages.map((language, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-emerald-50/30 dark:from-blue-900/10 dark:to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {language.flag}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                    {language.name}
                  </h3>
                  
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-6">
                    {language.level}
                  </div>

                  {/* Proficiency bar */}
                  <div className="mb-6">
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.proficiency}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.2,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <span>Beginner</span>
                      <span>Native</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {language.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-emerald-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-lg group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;