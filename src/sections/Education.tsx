import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
  const { t } = useLanguage();

  const educationData = [
    {
      institution: 'EMSI — École Marocaine des Sciences de l\'Ingénieur',
      location: 'Casablanca, Maroc',
      degree: 'Diplôme d’Ingénieur d’État en Génie Logiciel',
      specialization: 'Spécialisation : Data Engineering & Intelligence Artificielle',
      period: '2024 – 2027 (prév.)',
      status: 'current',
      details: [
        'Architecture logicielle avancée, calcul distribué et bases de données massives.',
        'Ingénierie des données : Spark, Kafka, modélisation Lakehouse et pipelines de streaming.',
        'Systèmes d’IA générative, Deep Learning, réseaux de neurones et agents autonomes.'
      ]
    },
    {
      institution: 'OFPPT NTIC 2 Casablanca',
      location: 'Casablanca, Maroc',
      degree: 'Technicien Spécialisé en Développement Digital',
      specialization: 'Option : Full Stack Web & Mobile',
      period: '2022 – 2024',
      status: 'completed',
      details: [
        'Maîtrise des architectures MVC, API RESTful et bases relationnelles SQL.',
        'Développement web moderne (React, PHP/Laravel, JavaScript ES6+).',
        'Gestion de projet informatique, modélisation UML et méthodes agiles.'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Oracle Agentic AI Certified Foundations Associate',
      issuer: 'Oracle',
      year: '2025/2026',
      badge: 'Agentic AI',
      color: 'from-red-500 to-amber-500',
      description: 'Fondations des agents autonomes, architectures LLM et orchestration cognitive.'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      year: '2025',
      badge: 'Cloud Infrastructure',
      color: 'from-amber-500 to-orange-500',
      description: 'Infrastructures cloud globales, sécurité, S3, IAM, calcul et haute disponibilité.'
    },
    {
      title: 'Meta Data Analyst Professional Certificate',
      issuer: 'Meta',
      year: '2024/2025',
      badge: 'Data Analytics',
      color: 'from-blue-500 to-indigo-500',
      description: 'Analyse exploratoire de données, SQL avancé, visualisation et prise de décision data-driven.'
    },
    {
      title: 'EPFL Data Science & AI Specialization',
      issuer: 'EPFL',
      year: '2024',
      badge: 'Data Science / ML',
      color: 'from-emerald-500 to-teal-500',
      description: 'Modélisation statistique, apprentissage supervisé/non-supervisé et évaluation de modèles.'
    },
    {
      title: 'Python for Everybody Specialization',
      issuer: 'University of Michigan',
      year: '2023',
      badge: 'Core Python',
      color: 'from-blue-600 to-cyan-500',
      description: 'Structures de données avancées, accès réseau et manipulation automatisée de bases SQL.'
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Titre */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400 mb-2 inline-block">
            Cursus Académique & Accréditations
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            {t('education.title')}
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t('education.subtitle')}
          </p>
        </motion.div>

        {/* Section Formations */}
        <div className="space-y-8 mb-20">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-md p-6 sm:p-8 border border-slate-200/70 dark:border-slate-700/60 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md ${
                    item.status === 'current'
                      ? 'bg-gradient-to-br from-emerald-500 to-blue-600'
                      : 'bg-gradient-to-br from-blue-600 to-slate-700'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {item.degree}
                    </p>
                    <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {item.specialization}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                    item.status === 'current'
                      ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                      : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}>
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                {item.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-emerald-500 flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t('education.certsTitle')}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Certifications délivrées par des institutions de référence (Oracle, AWS, Meta, EPFL, Univ. Michigan)
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, cIdx) => (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: cIdx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-md p-6 border border-slate-200/70 dark:border-slate-700/60 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                    Certifié & Vérifié
                  </span>
                  <Award className="w-4 h-4 text-amber-500" />
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
