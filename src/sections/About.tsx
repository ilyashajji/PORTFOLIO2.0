import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Database,
      title: t('about.pillars.data'),
      description: t('about.pillars.data.desc'),
      tags: ['PySpark', 'Kafka', 'MinIO S3', 'DuckDB', 'ETL / ELT', 'Data Pipelines'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: t('about.pillars.ai'),
      description: t('about.pillars.ai.desc'),
      tags: ['LangGraph', 'Multi-Agents', 'RAG', 'Pydantic v2', 'PyTorch', 'XGBoost'],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Cpu,
      title: t('about.pillars.arch'),
      description: t('about.pillars.arch.desc'),
      tags: ['Docker', 'AWS S3', 'SAP S/4HANA', 'Agile / Scrum', 'Clean Architecture'],
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400 mb-2 inline-block">
            Profil & Vision
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>

          {/* Bannière d'objectif PFE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-8 max-w-3xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-indigo-500/10 border border-emerald-500/30 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-200 text-sm md:text-base font-semibold flex items-center justify-center gap-3 shadow-sm"
          >
            <Sparkles className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>{t('about.pfeBadge')}</span>
          </motion.div>
        </motion.div>

        {/* Piliers d'expertise */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-md p-8 border border-slate-200/60 dark:border-slate-700/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-md shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-700/40">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Points forts méthodologiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-bold">
                Approche Ingénierie
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                De la donnée brute aux agents intelligents en production
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Mon approche combine rigueur mathématique, pipelines de données déterministes et architectures logicielles propres pour transformer les données massives en décisions automatisées et fiables.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Pipelines ETL/ELT résilients avec monitoring et qualité de données (Data Contracts)",
                "Systèmes multi-agents orchestrés (LangGraph) avec validation de schéma Pydantic",
                "Intégration d'infrastructures cloud hybrides et systèmes d'entreprise (SAP S/4HANA)",
                "Développement rigoureux : Clean Code, typage strict et méthodologie Agile/Scrum"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
