import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Brain, 
  Terminal, 
  Cloud, 
  Layers,
  Cpu,
  CheckCircle,
  Flame
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: 'IA, Machine Learning & Agentic AI',
      subtitle: 'Architectures cognitives, LLMs et modélisation avancée',
      icon: Brain,
      badge: 'Cœur d\'expertise',
      badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
      gradient: 'from-purple-500 to-indigo-600',
      skills: [
        { name: 'LangGraph & Systèmes Multi-Agents', level: 'Expert', highlighted: true },
        { name: 'LLM & Architectures RAG', level: 'Avancé', highlighted: true },
        { name: 'Pydantic v2 (Validation & Schemas)', level: 'Avancé', highlighted: true },
        { name: 'Scikit-learn & PyTorch', level: 'Avancé' },
        { name: 'Modèles Prédictifs (PLS, Ridge, XGBoost)', level: 'Expert' },
        { name: 'Gradio & Streamlit', level: 'Avancé' },
        { name: 'NumPy & Matplotlib', level: 'Avancé' }
      ]
    },
    {
      title: 'Data Engineering & Big Data',
      subtitle: 'Pipelines distribués, Lakehouses & stockage analytique',
      icon: Database,
      badge: 'Cœur d\'expertise',
      badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
      gradient: 'from-blue-500 to-cyan-600',
      skills: [
        { name: 'Data Pipelines & ETL / ELT', level: 'Expert', highlighted: true },
        { name: 'PySpark & Big Data Lakehouse', level: 'Avancé', highlighted: true },
        { name: 'Apache Kafka (Streaming)', level: 'Avancé', highlighted: true },
        { name: 'Apache Airflow', level: 'Avancé' },
        { name: 'MinIO S3 & DuckDB', level: 'Avancé' },
        { name: 'PostgreSQL, MySQL, Oracle', level: 'Expert' },
        { name: 'NoSQL & HBase', level: 'Intermédiaire' },
        { name: 'Feature Engineering & Data Quality', level: 'Avancé' }
      ]
    },
    {
      title: 'Langages de Programmation',
      subtitle: 'Code performant, typé et orienté données',
      icon: Terminal,
      badge: 'Fondations',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      gradient: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'Python', level: 'Expert (Data / AI / Backend)', highlighted: true },
        { name: 'SQL', level: 'Expert (Requêtes complexes & tuning)', highlighted: true },
        { name: 'JavaScript / TypeScript', level: 'Avancé' },
        { name: 'C++', level: 'Académique' },
        { name: 'Java', level: 'Intermédiaire' },
        { name: 'Scala', level: 'Big Data / Spark' }
      ]
    },
    {
      title: 'Cloud, DevOps & Entreprise',
      subtitle: 'Déploiement conteneurisé et écosystème ERP',
      icon: Cloud,
      badge: 'Production',
      badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
      gradient: 'from-amber-500 to-orange-600',
      skills: [
        { name: 'Docker & Conteneurisation', level: 'Avancé', highlighted: true },
        { name: 'AWS S3 & Cloud Storage', level: 'Avancé', highlighted: true },
        { name: 'Git & GitHub Workflows', level: 'Expert' },
        { name: 'SAP S/4HANA (MM, SD, FI, ABAP)', level: 'Pratique confirmée' },
        { name: 'Architecture logicielle & Clean Code', level: 'Avancé' },
        { name: 'Méthodologie Agile / Scrum', level: 'Confirmé' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400 mb-2 inline-block">
            Stack Technique & Savoir-faire
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            {t('skills.title')}
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Grille des compétences */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-md p-7 sm:p-8 border border-slate-200/70 dark:border-slate-700/60 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header catégorie */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-md`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border shrink-0 ${category.badgeColor}`}>
                    {category.badge}
                  </span>
                </div>

                {/* Liste des compétences */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`flex items-center justify-between p-2.5 rounded-xl border transition-colors ${
                        skill.highlighted
                          ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-200/60 dark:border-blue-900/50'
                          : 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200/40 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlighted ? (
                          <Flame className="w-4 h-4 text-amber-500 shrink-0" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        )}
                        <span className={`text-xs sm:text-sm font-medium ${
                          skill.highlighted
                            ? 'text-slate-900 dark:text-white font-semibold'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}>
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>Production-Ready Skills</span>
                <span>EMSI • Auto-formation • Industrie</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
