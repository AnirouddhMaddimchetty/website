'use client';

import { useState } from 'react';
import styles from '../LegalPage.module.css';
import Link from 'next/link';

const CONTENT = {
  fr: {
    title: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour : 27 Février 2026",
    intro: "Cette politique détaille comment nous traitons vos données personnelles au sein de l'écosystème The Telugu. Votre vie privée est notre priorité.",
    sections: [
      {
        title: "1. Données Collectées",
        content: "Nous collectons : votre Email et UID (si authentifié), votre pseudonyme, votre progression (Om, leçons, succès) et vos réglages (langue, mode sombre). Pour les invités, les données restent locales."
      },
      {
        title: "2. Utilisation des Données",
        content: "Vos données servent à : synchroniser votre progression sur plusieurs appareils, gérer le classement mondial (Leaderboard), et envoyer des notifications de rappel."
      },
      {
        title: "3. Services Tiers",
        content: "Nous utilisons Firebase (Google) pour l'authentification et le stockage cloud sécurisé. Google AdMob est utilisé pour la publicité et peut utiliser des identifiants publicitaires anonymes."
      },
      {
        title: "4. Visibilité des Données",
        content: "Seul votre pseudonyme et votre score total sont publics dans le classement. Votre email et vos détails de progression restent privés et sécurisés."
      },
      {
        title: "5. Vos Droits",
        content: "Vous pouvez supprimer votre compte et toutes les données associées instantanément depuis les paramètres de l'application (Droit à l'oubli)."
      }
    ],
    footer: "Contact RGPD : anirouddh@gmail.com",
    termsLink: "Consulter les Conditions d'Utilisation"
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: February 27, 2026",
    intro: "This policy details how we handle your personal data within the 'The Telugu' ecosystem. Your privacy is our priority.",
    sections: [
      {
        title: "1. Data Collection",
        content: "We collect: your Email and UID (if authenticated), your nickname, your progress (Om, lessons, achievements), and your settings (language, dark mode). For guest users, data remains local."
      },
      {
        title: "2. Data Usage",
        content: "Your data is used to: sync your progress across multiple devices, manage the global Leaderboard, and send reminder notifications."
      },
      {
        title: "3. Third-Party Services",
        content: "We use Firebase (Google) for authentication and secure cloud storage. Google AdMob is used for advertising and may use anonymous advertising identifiers."
      },
      {
        title: "4. Data Visibility",
        content: "Only your nickname and total score are public on the leaderboard. Your email and detailed progression remain private and secure."
      },
      {
        title: "5. Your Rights",
        content: "You can delete your account and all associated data instantly from the app settings (Right to be forgotten)."
      }
    ],
    footer: "GDPR Contact: anirouddh@gmail.com",
    termsLink: "View Terms and Conditions"
  }
};

export default function PrivacyPage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = CONTENT[lang];

  return (
    <div className={styles.legalContainer}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <h1>{t.title}</h1>
          <p className={styles.lastUpdated}>{t.lastUpdated}</p>
        </div>
        <div className={styles.langSwitcher}>
          <button 
            className={`${styles.langBtn} ${lang === 'fr' ? styles.langBtnActive : ''}`}
            onClick={() => setLang('fr')}
          >
            FR
          </button>
          <button 
            className={`${styles.langBtn} ${lang === 'en' ? styles.langBtnActive : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </header>

      <p className={styles.intro}>{t.intro}</p>

      <div className={styles.content}>
        {t.sections.map((section, index) => (
          <section key={index}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}

        <p style={{ marginTop: '2rem' }}>
          <Link href="/thetelugu/conditions" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>
            → {t.termsLink}
          </Link>
        </p>
      </div>

      <footer className={styles.footerNote}>
        {t.footer}
      </footer>
    </div>
  );
}
