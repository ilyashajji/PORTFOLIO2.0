import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.languages': 'Languages',
    'nav.contact': 'Contact',

    'hero.badge': 'Available for End-of-Study Internship (PFE) • Feb 2027',
    'hero.badge.detail': 'Data Engineering, Agentic AI or Data Science (4-6 months)',
    'hero.title': 'Future Software Engineer | Data Engineering & AI',
    'hero.subtitle': 'EMSI Casablanca (Class of 2027) • Agentic AI & Big Data Specialist',
    'hero.tagline': 'Designing resilient distributed data pipelines, deterministic financial analytics engines, and autonomous multi-agent LLM systems.',
    'hero.downloadCV': 'Download Resume (FR)',
    'hero.contactMe': 'Contact for PFE',
    'hero.viewCard': 'Business Card',

    'about.title': 'About Me',
    'about.description': 'Future Software Engineer specializing in Data Engineering & Applied AI at EMSI Casablanca. Passionate about building robust ETL/ELT streaming pipelines, high-impact predictive models, and production-grade multi-agent architectures (LangGraph, RAG, Pydantic).',
    'about.pfeBadge': 'Looking for an End-of-Study Internship (PFE) of 4 to 6 months starting February 2027 in Data Engineering, AI or Data Science.',
    'about.pillars.ai': 'Agentic AI & LLM Systems',
    'about.pillars.ai.desc': 'Multi-agent orchestration with LangGraph, deterministic guardrails, Pydantic validation, and custom RAG architectures.',
    'about.pillars.data': 'Data Engineering & Big Data',
    'about.pillars.data.desc': 'High-throughput pipelines, Lakehouse design, PySpark, Kafka streaming, MinIO S3, and modern dimensional modeling.',
    'about.pillars.arch': 'Production & System Design',
    'about.pillars.arch.desc': 'Clean Code, containerized microservices with Docker, SAP S/4HANA enterprise integration, and agile delivery.',

    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Real-world implementations in Agentic AI, Predictive Modeling, and Distributed Big Data',
    'projects.viewCode': 'Code',
    'projects.viewDemo': 'Demo / Details',

    'experience.title': 'Professional Experience',
    'experience.subtitle': 'Track record in financial AI automation, enterprise databases, and software engineering',

    'skills.title': 'Technical Competencies',
    'skills.subtitle': 'Specialized stack spanning Data Engineering, Agentic AI, Cloud DevOps, and Core Programming',

    'education.title': 'Education & Certifications',
    'education.subtitle': 'Academic excellence and internationally recognized industry credentials',
    'education.certsTitle': 'Key Professional Certifications',

    'languages.title': 'Languages & Communication',

    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Discussing PFE Opportunities & Collaborative Engineering',
    'contact.description': 'I am actively seeking my 4-6 month graduation internship (PFE) starting February 2027 in Data Engineering, AI, or Data Science. Let\'s connect!',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send via WhatsApp',
    'contact.availability': 'Ready to relocate or work hybrid in Morocco / Worldwide',

    'footer.rights': '© 2026 Ilyas Hajji. All rights reserved. Data Engineering & Agentic AI.'
  },
  fr: {
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.languages': 'Langues',
    'nav.contact': 'Contact',

    'hero.badge': 'En recherche de Stage PFE • Février 2027',
    'hero.badge.detail': 'Data Engineering, IA Agentique ou Data Science (4 à 6 mois)',
    'hero.title': 'Futur Ingénieur d’État en Génie Logiciel | Data & IA',
    'hero.subtitle': 'EMSI Casablanca (Promo 2027) • Spécialisation Data Engineering & IA',
    'hero.tagline': 'Conception de pipelines de données résilients, de moteurs analytiques financiers déterministes et de systèmes multi-agents autonomes.',
    'hero.downloadCV': 'Télécharger CV (FR)',
    'hero.contactMe': 'Me contacter pour un PFE',
    'hero.viewCard': 'Voir ma carte',

    'about.title': 'À Propos de Moi',
    'about.description': 'Futur ingénieur d’État en Génie Logiciel spécialisé en Data Engineering et IA à l’EMSI Casablanca. Passionné par l’ingénierie des données distribuées, les modèles prédictifs haute performance et les architectures multi-agents d\'avant-garde (LangGraph, RAG, Pydantic).',
    'about.pfeBadge': 'À la recherche d’un stage de Fin d’Études (PFE) de 4 à 6 mois à partir de février 2027 en Data Engineering, IA ou Data Science.',
    'about.pillars.ai': 'IA Agentique & Systèmes LLM',
    'about.pillars.ai.desc': 'Orchestration multi-agents avec LangGraph, garde-fous déterministes, validation de schéma Pydantic et RAG hybride.',
    'about.pillars.data': 'Data Engineering & Big Data',
    'about.pillars.data.desc': 'Pipelines de données robustes, Lakehouse, streaming Kafka, PySpark, MinIO S3, modélisation et data quality.',
    'about.pillars.arch': 'Production & Architecture',
    'about.pillars.arch.desc': 'Clean Code, conteneurisation Docker, intégration de flux d\'entreprise SAP S/4HANA et méthodologies Agile/Scrum.',

    'projects.title': 'Projets Phares',
    'projects.subtitle': 'Réalisations concrètes en IA Agentique, Modélisation Prédictive et Big Data distribué',
    'projects.viewCode': 'Code',
    'projects.viewDemo': 'Démo / Détails',

    'experience.title': 'Expérience Professionnelle',
    'experience.subtitle': 'Parcours en automatisation d\'IA financière, bases de données d\'entreprise et génie logiciel',

    'skills.title': 'Compétences Techniques',
    'skills.subtitle': 'Stack de pointe articulée autour du Data Engineering, de l\'IA générative/agentique et du Cloud',

    'education.title': 'Formations & Certifications',
    'education.subtitle': 'Cursus d\'ingénierie d\'excellence et certifications professionnelles internationales',
    'education.certsTitle': 'Certifications Professionnelles Clés',

    'languages.title': 'Langues & Communication',

    'contact.title': 'Prenons Contact',
    'contact.subtitle': 'Discutons d’opportunités de PFE & de collaborations techniques',
    'contact.description': 'Je suis activement à la recherche de mon stage de fin d’études (PFE) de 4 à 6 mois dès février 2027 en Data Engineering, IA ou Data Science. Échangeons ensemble !',
    'contact.name': 'Votre Nom',
    'contact.email': 'Votre Email',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer via WhatsApp',
    'contact.availability': 'Disponible à Casablanca ou en mobilité / télétravail',

    'footer.rights': '© 2026 Ilyas Hajji. Tous droits réservés. Data Engineering & Agentic AI.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr'); // Default to French as requested

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
