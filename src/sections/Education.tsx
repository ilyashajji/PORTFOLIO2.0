import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
  const { t } = useLanguage();

  const educationData = [
    {
      institution: 'EMSI (École Marocaine des Sciences de l\'Ingénieur)',
      degree: 'Computer Engineering (IIR)',
      period: '2024 – Present',
      status: 'current',
      description: 'Specializing in Information Systems and Networks with focus on software development and system architecture.'
    },
    {
      institution: 'OFPPT (Office de la Formation Professionnelle)',
      degree: 'Specialized Technician Program',
      period: '2022 – 2024',
      status: 'completed',
      description: 'Professional technical training program focusing on practical skills and industry applications.'
    },
    {
      institution: 'Lycée Tarek Ibn Ziad',
      degree: 'Baccalaureate',
      period: '2021 – 2022',
      status: 'completed',
      description: 'High school diploma with strong foundation in mathematics and sciences.'
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            {t('education.title')}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-blue-500 hidden md:block" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg hidden md:block z-10" />

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                  <motion.div
                    className="bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-700/50 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        item.status === 'current' 
                          ? 'bg-gradient-to-br from-emerald-500 to-blue-500' 
                          : 'bg-gradient-to-br from-blue-500 to-slate-500'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                            item.status === 'current'
                              ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                              : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          }`}>
                            {item.period}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                          {item.institution}
                        </h3>
                        
                        <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                          {item.degree}
                        </h4>
                        
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-emerald-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;