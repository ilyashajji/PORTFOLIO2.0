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
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.languages': 'Languages',
    'nav.contact': 'Contact',
    'hero.title': 'Full Stack Web Developer',
    'hero.subtitle': '4th-Year Computer Engineering Student (IIR – EMSI)',
    'hero.tagline': 'Building efficient, user-friendly web solutions | Open to new opportunities',
    'hero.downloadCV': 'Download CV',
    'about.title': 'About Me',
    'about.description': 'Passionate Computer Engineering student with hands-on experience in full-stack development. I thrive on solving complex problems and creating innovative web solutions that make a real impact.',
    'about.teamwork': 'Teamwork & Collaboration',
    'about.problemSolving': 'Problem-Solving & Innovation',
    'about.fullStack': 'Full Stack Development Expertise',
    'education.title': 'Education',
    'experience.title': 'Professional Experience',
    'skills.title': 'Technical Skills',
    'languages.title': 'Languages',
    'contact.title': 'Get In Touch',
    'contact.description': 'Let\'s discuss how we can work together on your next project.',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'footer.rights': '© 2024 Ilyas Hajji. All rights reserved.'
  },
  fr: {
    'nav.about': 'À Propos',
    'nav.education': 'Formation',
    'nav.experience': 'Expérience',
    'nav.skills': 'Compétences',
    'nav.languages': 'Langues',
    'nav.contact': 'Contact',
    'hero.title': 'Développeur Full Stack',
    'hero.subtitle': 'Étudiant en 4ème année Génie Informatique (IIR – EMSI)',
    'hero.tagline': 'Créer des solutions web efficaces et conviviales | Ouvert aux nouvelles opportunités',
    'hero.downloadCV': 'Télécharger CV',
    'about.title': 'À Propos de Moi',
    'about.description': 'Étudiant passionné en Génie Informatique avec une expérience pratique en développement full-stack. Je m\'épanouis en résolvant des problèmes complexes et en créant des solutions web innovantes qui ont un impact réel.',
    'about.teamwork': 'Travail d\'Équipe & Collaboration',
    'about.problemSolving': 'Résolution de Problèmes & Innovation',
    'about.fullStack': 'Expertise Développement Full Stack',
    'education.title': 'Formation',
    'experience.title': 'Expérience Professionnelle',
    'skills.title': 'Compétences Techniques',
    'languages.title': 'Langues',
    'contact.title': 'Prenons Contact',
    'contact.description': 'Discutons de la façon dont nous pouvons travailler ensemble sur votre prochain projet.',
    'contact.name': 'Votre Nom',
    'contact.email': 'Votre Email',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer le Message',
    'footer.rights': '© 2024 Ilyas Hajji. Tous droits réservés.'
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
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};