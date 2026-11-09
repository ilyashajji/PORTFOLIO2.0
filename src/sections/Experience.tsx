import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, CheckCircle2, Cpu, Database, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experienceData = [
    {
      company: 'Crédit du Maroc (CDM Corporate)',
      role: 'Stagiaire Ingénieur IT — Automatisation & IA Financière Agentique',
      period: '07/2026 – 09/2026',
      location: 'Casablanca, Maroc',
      type: 'Stage Ingénieur',
      highlight: 'IA Agentique & Moteur Financier Déterministe',
      description:
        'Conception et implémentation d’une solution d’analyse financière hybride combinant calcul déterministe certifié et agents intelligents.',
      technologies: ['Python', 'LangGraph', 'LLM Agentique', 'Pydantic v2', 'Ratios Financiers', 'Clean Architecture'],
      achievements: [
        'Conception d’un moteur Python déterministe de calcul des ratios financiers (BFR, liquidité générale/réduite, endettement, EBITDA) et détection d’alertes sectorielles précises.',
        'Intégration d’une couche agentique LLM produisant des synthèses et analyses de solvabilité à partir de données financières hautement structurées.',
        'Mise en place de garde-fous stricts et validation systématique de schémas de sortie via Pydantic v2 pour éradiquer les hallucinations.',
        'Optimisation de la chaîne d’analyse, offrant aux analystes de risque un gain de temps considérable.'
      ]
    },
    {
      company: 'SRA AFRIQUE',
      role: 'Stagiaire Ingénieur IT — Backend & Data',
      period: '07/2025 – 09/2025',
      location: 'Casablanca, Maroc',
      type: 'Stage Technique',
      highlight: 'Réduction de 35% du temps moyen de résolution',
      description:
        'Optimisation de l’infrastructure de gestion des tickets et des opérations data pour les services informatiques.',
      technologies: ['MySQL', 'GLPI', 'Python', 'SQL Optimization', 'REST API'],
      achievements: [
        'Gestion active d’un helpdesk à forte cadence (>150 tickets/mois traités via GLPI) avec traçabilité complète des incidents.',
        'Audit, ré-indexation et optimisation avancée de requêtes MySQL critiques, réduisant de 35 % le temps moyen de résolution des incidents.',
        'Automatisation de scripts de reporting des interventions informatiques pour les superviseurs.'
      ]
    },
    {
      company: 'ABATTOIRS SAHEL',
      role: 'Stagiaire Développement SAP S/4HANA (Data & ABAP)',
      period: '07/2024 – 09/2024',
      location: 'Had Soualem, Maroc',
      type: 'Stage Data & ERP',
      highlight: 'Cohérence inter-métiers MM / SD / FI',
      description:
        'Paramétrage, développement et fiabilisation des flux de données dans un environnement SAP S/4HANA industriel.',
      technologies: ['SAP S/4HANA', 'ABAP', 'Modules MM, SD, FI', 'Data Consistency', 'SQL'],
      achievements: [
        'Configuration et maintenance des flux de données opérationnels SAP S/4HANA sur les modules MM (Achats/Stocks), SD (Ventes) et FI (Comptabilité/Finance).',
        'Amélioration notable de la cohérence des données inter-métiers et réduction des écarts d’inventaire.',
        'Développement de programmes d’extraction et de contrôle qualité des transactions industrielles.'
      ]
    },
    {
      company: 'ALF SAHEL S.A',
      role: 'Stagiaire Développeur Full Stack / Data',
      period: '04/2024 – 05/2024',
      location: 'Had Soualem, Maroc',
      type: 'Stage Full Stack',
      highlight: '>500 commandes/mois gérées en production',
      description:
        'Conception d’outils web métiers et de pipelines de données transactionnelles pour le suivi commercial.',
      technologies: ['React', 'Laravel', 'REST API', 'MySQL', 'RBAC Security'],
      achievements: [
        'Développement d’applications web full stack robustes (Laravel, React, API REST) gérant >500 commandes/mois en environnement de production.',
        'Conception et sécurisation fine des accès via un système de contrôle RBAC (Role-Based Access Control).',
        'Optimisation des flux de données entre les interfaces clients et la base de données relationnelle.'
      ]
    },
    {
      company: 'ADII (Administration des Douanes - Port de Casablanca)',
      role: 'Stagiaire Software & Database',
      period: '07/2023 – 08/2023',
      location: 'Casablanca, Maroc',
      type: 'Stage Base de Données',
      highlight: '>200 transactions douanières quotidiennes',
      description:
        'Administration et sécurisation des bases de données de gestion portuaire et douanière.',
      technologies: ['MySQL', 'PHP', 'Database Administration', 'Data Integrity', 'Backup'],
      achievements: [
        'Administration, monitoring et maintenance de bases de données relationnelles MySQL gérant >200 transactions douanières quotidiennes.',
        'Mise en place de scripts de contrôle de cohérence et plans de sauvegarde pour fiabiliser les déclarations.',
        'Conception d’interfaces de consultation simplifiées pour les agents opérationnels.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
            Expériences Professionnelles
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            {t('experience.title')}
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        {/* Timeline des expériences */}
        <div className="space-y-8 relative">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-md p-6 sm:p-8 border border-slate-200/70 dark:border-slate-700/60 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                
                {/* Entreprise & Rôle */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/20">
                    <Building className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400">
                      {exp.role}
                    </h4>
                  </div>
                </div>

                {/* Date & Localisation */}
                <div className="flex flex-row lg:flex-col lg:items-end gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/60 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Tag Highlight / Métrique clé */}
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Impact clé : {exp.highlight}</span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Réalisations / Bullet points */}
              <div className="space-y-2 mb-6">
                {exp.achievements.map((item, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
