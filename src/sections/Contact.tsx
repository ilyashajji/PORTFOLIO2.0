import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MessageSquare, User, AtSign, Download, Sparkles, MapPin, CheckCircle, Github } from 'lucide-react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = '212699235778';
    const text = `Bonjour Ilyas, je vous contacte depuis votre portfolio :\nNom : ${formData.name}\nEmail : ${formData.email}\nMessage : ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 4000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ilyashajji770@gmail.com',
      href: 'mailto:ilyashajji770@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+212 6 99 23 57 78',
      href: 'tel:+212699235778',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp Direct',
      value: '+212 6 99 23 57 78',
      href: 'https://wa.me/212699235778',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaGithub,
      label: 'GitHub Profil',
      value: 'github.com/ilyashajji',
      href: 'https://github.com/ilyashajji',
      color: 'from-slate-700 to-slate-900'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            Opportunités & Collaboration
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        {/* Bannière d'appel à candidature PFE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold">
                Recherche de Stage PFE (Février 2027 • 4 à 6 mois)
              </h3>
              <p className="text-xs md:text-sm text-emerald-100">
                Spécialités ciblées : Data Engineering, Agentic AI, Data Science & Machine Learning. Basé à Casablanca, ouvert à la mobilité et au télétravail.
              </p>
            </div>
          </div>

          <a
            href="/cv/Ilyas_Hajji_CV_FR.pdf"
            download
            className="px-5 py-3 rounded-xl bg-white text-emerald-800 font-bold text-xs uppercase tracking-wider shadow-md hover:bg-slate-100 transition-colors shrink-0 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Télécharger CV (PDF)
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Canaux de contact directs */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Coordonnées directes
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/70 dark:border-slate-700/60 shadow-md hover:shadow-lg transition-all duration-300 group block"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {method.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate mt-0.5">
                    {method.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 space-y-3">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Casablanca, Maroc (Mobilité nationale & internationale)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Disponible à partir de Février 2027 pour 4 à 6 mois</span>
              </div>
            </div>
          </div>

          {/* Formulaire de contact rapide */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-md p-8 border border-slate-200/70 dark:border-slate-700/60 shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Envoyer un message direct
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Transmis directement avec pré-remplissage WhatsApp pour un échange instantané.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t('contact.name')}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom ou entreprise"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t('contact.email')}
                </label>
                <div className="relative">
                  <AtSign className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="nom@entreprise.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t('contact.message')}
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Détails du sujet de stage PFE, opportunité ou mission..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t('contact.send')}</span>
              </motion.button>

              {submitStatus === 'success' && (
                <p className="text-xs text-center text-emerald-600 dark:text-emerald-400 font-semibold mt-2">
                  ✓ Redirection vers WhatsApp effectuée avec succès !
                </p>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
