import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Database, 
  ExternalLink, 
  Github, 
  Sparkles,
  Maximize2,
  X,
  Layers,
  CheckCircle2,
  TrendingUp,
  Cpu,
  BarChart3
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

import nirImg from '../images/ProjetNir.jpg';
import newsImg from '../images/NewsProject.jpg';
import medicalImg from '../images/medicalProject.jpg';
import commerceImg from '../images/ProjetCommerce.jpg';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; title: string; badge: string } | null>(null);

  const projects = [
    {
      title: 'Prédiction de l’humidité du maïs par spectrométrie NIR & ML',
      category: 'Data Science & Machine Learning',
      categoryIcon: BarChart3,
      year: '2026',
      badge: 'R² = 97.4% • Précision > 90%',
      accentColor: 'from-emerald-500 to-teal-500',
      badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
      image: nirImg,
      description:
        'Développement d’une chaîne complète d’analyse chimiométrique et de modèles prédictifs (PLS, Ridge, XGBoost) sur données spectrales NIR pour estimer instantanément le taux d’humidité du maïs.',
      metrics: [
        { label: 'Score R²', value: '97.4%', color: 'text-emerald-600 dark:text-emerald-400' },
        { label: 'MAE', value: '0.736', color: 'text-teal-600 dark:text-teal-400' },
        { label: 'Précision', value: '> 90%', color: 'text-blue-600 dark:text-blue-400' },
        { label: 'Seuil critique', value: '13%', color: 'text-amber-600 dark:text-amber-400' }
      ],
      details: [
        'Prétraitement du signal spectrométrique (correction de dispersion, dérivées premières/secondes, normalisation SNV).',
        'Benchmark rigoureux entre régression PLS (Partial Least Squares), Ridge et boosting XGBoost.',
        'Déploiement d’un dashboard interactif sous Streamlit et Gradio intégrant le monitoring en temps réel des lots.'
      ],
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Streamlit', 'Gradio', 'Plotly', 'NIR Spectroscopy'],
      github: 'https://github.com/ilyashajji'
    },
    {
      title: 'Plateforme Big Data Lakehouse & Analyse d\'Actualités',
      category: 'Data Engineering & Lakehouse',
      categoryIcon: Database,
      year: '2025',
      badge: 'Streaming & Ingestion Temps Réel',
      accentColor: 'from-blue-500 to-indigo-500',
      badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
      image: newsImg,
      description:
        'Architecture Big Data Lakehouse moderne pour la collecte automatisée, l’ingestion continue de flux d’actualités multi-sources et l’analyse sémantique/sentiment en quasi temps réel.',
      metrics: [
        { label: 'Flux', value: 'Multi-sources', color: 'text-blue-600 dark:text-blue-400' },
        { label: 'Stockage', value: 'MinIO / S3', color: 'text-indigo-600 dark:text-indigo-400' },
        { label: 'Moteur', value: 'PySpark', color: 'text-cyan-600 dark:text-cyan-400' },
        { label: 'Fréquence', value: 'Kafka Stream', color: 'text-emerald-600 dark:text-emerald-400' }
      ],
      details: [
        'Collecte et web scraping distribué de flux RSS et dépêches d’actualités avec déduplication.',
        'Ingestion en streaming avec Apache Kafka vers un stockage objet S3/MinIO sous format Parquet partitionné.',
        'Transformations distribuées avec PySpark, requêtage rapide via DuckDB et scoring de sentiment.'
      ],
      technologies: ['PySpark', 'Apache Kafka', 'MinIO S3', 'DuckDB', 'Python', 'Docker', 'Parquet', 'PostgreSQL'],
      github: 'https://github.com/ilyashajji'
    },
    {
      title: 'Système multi-agents d’orientation médicale & triage',
      category: 'Agentic AI & Orchestration LLM',
      categoryIcon: Brain,
      year: '2025',
      badge: 'LangGraph & Multi-Agents',
      accentColor: 'from-purple-500 to-violet-500',
      badgeBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
      image: medicalImg,
      description:
        'Architecture multi-agents coordonnée pour assister le triage clinique, analyser les symptômes des patients et générer des synthèses médicales fiables avec validation stricte.',
      metrics: [
        { label: 'Orchestrateur', value: 'LangGraph', color: 'text-purple-600 dark:text-purple-400' },
        { label: 'Architecture', value: 'Multi-Agents', color: 'text-indigo-600 dark:text-indigo-400' },
        { label: 'Validation', value: 'Pydantic v2', color: 'text-emerald-600 dark:text-emerald-400' },
        { label: 'API Services', value: 'FastAPI', color: 'text-blue-600 dark:text-blue-400' }
      ],
      details: [
        'Conception d’un graphe d’états cyclique (LangGraph) orchestrant plusieurs agents : Triage, Vérificateur pharmacologique, Synthétiseur.',
        'Intégration d’une validation stricte de schémas (Pydantic v2) pour interdire les hallucinations médicales.',
        'Exposition via des microservices FastAPI documentés et conteneurisés avec Docker.'
      ],
      technologies: ['LangGraph', 'FastAPI', 'Python', 'LLM', 'Pydantic v2', 'Docker', 'RAG'],
      github: 'https://github.com/ilyashajji'
    },
    {
      title: 'Pipeline ETL & Analyse des Ventes Commerciales',
      category: 'Data Engineering & Analytics',
      categoryIcon: Cpu,
      year: '2025',
      badge: 'Contrôles Qualité & Modélisation',
      accentColor: 'from-amber-500 to-orange-500',
      badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
      image: commerceImg,
      description:
        'Pipeline complet d’extraction, transformation et chargement (ETL) de données transactionnelles volumineuses avec règles de contrôle qualité strictes et modélisation dimensionnelle en étoile.',
      metrics: [
        { label: 'Modèle', value: 'Star Schema', color: 'text-amber-600 dark:text-amber-400' },
        { label: 'Contrôles', value: '100% Qualité', color: 'text-emerald-600 dark:text-emerald-400' },
        { label: 'Orchestration', value: 'Airflow / Cron', color: 'text-blue-600 dark:text-blue-400' },
        { label: 'Entrepôt', value: 'PostgreSQL', color: 'text-indigo-600 dark:text-indigo-400' }
      ],
      details: [
        'Extraction et agrégation de sources hétérogènes (CSV, API REST, logs transactionnels).',
        'Nettoyage, imputation des valeurs aberrantes et normalisation vectorisée avec Pandas et SQL.',
        'Alimentation d’un entrepôt de données avec vues matérialisées pour alimenter les dashboards décisionnels.'
      ],
      technologies: ['Python', 'SQL', 'Pandas', 'PostgreSQL', 'ETL/ELT', 'Data Quality', 'Apache Airflow'],
      github: 'https://github.com/ilyashajji'
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Titre & En-tête */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-widest font-bold text-blue-600 dark:text-blue-400 mb-2 inline-block">
            Portfolio Technique & Projets Phares
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-4 tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-2">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Grille des Projets */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Header / Mockup Banner (hauteur adaptée mobile h-52) */}
                <div className="relative h-52 sm:h-64 md:h-72 w-full overflow-hidden bg-slate-950">
                  {/* Image avec zoom fluide */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient overlays pour le contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 to-transparent" />

                  {/* Top bar avec catégorie et bouton d'agrandissement */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-10 gap-2">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/10 text-white shadow-lg max-w-[80%] truncate">
                      <project.categoryIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="text-[11px] sm:text-xs font-semibold tracking-wide truncate">
                        {project.category}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveModalImage({ src: project.image, title: project.title, badge: project.badge })}
                      className="p-1.5 sm:p-2 rounded-full bg-slate-900/80 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/20 transition-all duration-300 shadow-md cursor-pointer shrink-0"
                      title="Agrandir la capture"
                      aria-label="Agrandir l'image"
                    >
                      <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>

                  {/* Bottom bar sur l'image avec badge de performance et année */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 z-10">
                    <span className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border backdrop-blur-md ${project.badgeBg} shadow-lg`}>
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span className="truncate">{project.badge}</span>
                    </span>

                    <span className="text-[10px] sm:text-xs font-mono font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-black/60 text-slate-300 backdrop-blur-md border border-white/10">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Contenu textuel (padding responsive) */}
                <div className="p-5 sm:p-7 md:p-8">
                  {/* Titre */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2.5 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Dashboard des Métriques Clés : 2 colonnes sur mobile, 4 sur écran large */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-5 sm:mb-6 p-2.5 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center p-1 sm:p-1.5">
                        <p className={`text-xs sm:text-sm md:text-base font-extrabold ${m.color}`}>
                          {m.value}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-tight font-medium mt-0.5 truncate">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Points techniques clés */}
                  <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                    {project.details.map((detail, dIdx) => (
                      <div key={dIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer de la Card : Tech Stack & Liens */}
              <div className="p-5 sm:p-7 md:p-8 pt-0">
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-5 sm:mb-6 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white text-xs font-semibold transition-all duration-300 shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Explorer le code</span>
                  </a>

                  <span className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-[11px] sm:text-xs font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Production Ready
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal plein écran pour zoomer sur une capture */}
        <AnimatePresence>
          {activeModalImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6"
              onClick={() => setActiveModalImage(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 px-4 sm:px-6 border-b border-slate-800 bg-slate-950/50">
                  <div className="pr-4">
                    <h4 className="text-white font-bold text-sm sm:text-base md:text-lg line-clamp-1">
                      {activeModalImage.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400">
                      {activeModalImage.badge}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveModalImage(null)}
                    className="p-1.5 sm:p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    aria-label="Fermer"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Image agrandie */}
                <div className="max-h-[75vh] overflow-auto bg-slate-950 flex items-center justify-center p-2 sm:p-4">
                  <img
                    src={activeModalImage.src}
                    alt={activeModalImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg sm:rounded-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;
