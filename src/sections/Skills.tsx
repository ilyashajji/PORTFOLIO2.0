import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Palette,
  Globe,
  Cpu,
  GitBranch,
  Layers
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'HTML5', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Tailwind CSS', level: 88, color: 'from-teal-400 to-teal-600' },
        { name: 'JavaScript (ES6+)', level: 85, color: 'from-yellow-400 to-yellow-600' },
        { name: 'React.js', level: 82, color: 'from-cyan-400 to-cyan-600' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'PHP', level: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'SAP ABAP', level: 75, color: 'from-blue-400 to-blue-600' }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'MongoDB', level: 80, color: 'from-green-400 to-green-600' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Layers,
      skills: [
        { name: 'Docker', level: 78, color: 'from-blue-400 to-blue-600' },
        { name: 'Git', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'SAP S/4HANA', level: 75, color: 'from-indigo-400 to-indigo-600' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            {t('skills.title')}
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-700/50 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-emerald-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;