import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experienceData = [
    {
      company: 'SRA Afrique',
      position: 'Internship – Development of a Centralized Helpdesk and Asset Management System',
      period: '01/08/2025 – 01/09/2025',
      location: 'Casablanca, Morocco',
      description:
        'Hajji Ilyas — 3ème année IIR – EMSI. Supervisors: Mourad GHAMAZI, Sofia LAGLAOUI.',
      technologies: [],
      achievements: [
        'Designed and developed a centralized helpdesk system to manage IT tickets and asset tracking.',
        'Improved intervention traceability and reporting for better efficiency.',
        'Collaborated with supervisors to align technical solutions with organizational needs.'
      ]
    },
    {
      company: 'Abattoirs Sahel',
      position: 'SAP S/4HANA ABAP Developer Intern',
      period: 'July - August 2024',
      location: 'Casablanca, Morocco',
      description: 'Developed and optimized ABAP programs for SAP S/4HANA system, focusing on business process automation and data management solutions.',
      technologies: ['SAP S/4HANA', 'ABAP', 'SQL', 'Business Process Modeling'],
      achievements: [
        'Implemented automated reporting solutions reducing manual work by 40%',
        'Optimized existing ABAP programs improving performance by 25%',
        'Collaborated with functional teams to deliver business requirements'
      ]
    },
    {
      company: 'ALF Sahel S.A',
      position: 'Web Application Developer',
      period: 'April - May 2024',
      location: 'Casablanca, Morocco',
      description: 'Designed and developed responsive web applications using modern frameworks, focusing on user experience and performance optimization.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Git'],
      achievements: [
        'Built responsive web applications with 95%+ performance scores',
        'Integrated RESTful APIs for seamless data management',
        'Implemented modern UI/UX practices following design systems'
      ]
    },
    {
      company: 'ADII Casablanca',
      position: 'Customs Client Management System Developer',
      period: 'July - August 2023',
      location: 'Casablanca, Morocco',
      description: 'Developed a comprehensive client management system for customs operations, streamlining administrative processes and improving data accuracy.',
      technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      achievements: [
        'Created user-friendly interfaces for complex customs processes',
        'Reduced processing time by 50% through workflow automation',
        'Improved data accuracy and reporting capabilities'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            {t('experience.title')}
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-emerald-50/30 dark:from-blue-900/10 dark:to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Company info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                            {experience.company}
                          </h3>
                          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                            {experience.position}
                          </h4>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-slate-800 dark:text-white mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      {experience.technologies && experience.technologies.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-slate-800 dark:text-white mb-3">Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-emerald-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;