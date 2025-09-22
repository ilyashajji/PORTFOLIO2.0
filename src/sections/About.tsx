import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Code } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const strengths = [
    {
      icon: Users,
      title: t('about.teamwork'),
      description: 'Collaborative approach to development with excellent communication skills'
    },
    {
      icon: Lightbulb,
      title: t('about.problemSolving'),
      description: 'Creative solutions to complex challenges using innovative thinking'
    },
    {
      icon: Code,
      title: t('about.fullStack'),
      description: 'End-to-end development expertise from frontend to backend systems'
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
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-emerald-50/50 dark:from-blue-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <strength.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                    {strength.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {strength.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;