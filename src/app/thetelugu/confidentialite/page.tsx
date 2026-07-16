'use client';

import { useState } from 'react';
import styles from '../LegalPage.module.css';
import Link from 'next/link';

const CONTENT = {
  fr: {
    title: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour : 16 Juillet 2026",
    intro: "Cette politique détaille comment nous traitons vos données personnelles au sein de l'écosystème « The Telugu ». Votre vie privée et la sécurité de vos données sont nos priorités absolues.",
    sections: [
      {
        title: "1. Données Collectées",
        content: "Nous collectons plusieurs types de données : vos identifiants de compte (adresse Email et UID unique si vous vous authentifiez via Google, Apple ou Email), votre pseudonyme de profil, votre progression d'apprentissage (scores, leçons complétées, succès, historique d'exercices et monnaie virtuelle « Om ») ainsi que vos réglages d'application (langue, mode sombre). Pour les comptes invités (anonymes), l'ensemble de ces données reste stocké localement sur votre appareil. Nous collectons également des identifiants publicitaires anonymes (AD_ID pour Android, IDFA pour iOS) et des données techniques anonymisées pour le suivi des performances et des plantages."
      },
      {
        title: "2. Utilisation des Données",
        content: "Vos données personnelles sont utilisées pour : synchroniser et sauvegarder votre progression sur tous vos appareils, gérer votre score dans le classement général public (Leaderboard), adapter dynamiquement votre parcours d'apprentissage grâce à notre algorithme d'adaptation local (profils d'apprentissage), modérer automatiquement et sécuriser les pseudonymes des joueurs, et envoyer des rappels d'étude via des notifications locales configurées sur l'appareil."
      },
      {
        title: "3. Services Tiers et Intelligence Artificielle",
        content: "Nous faisons appel à des prestataires de confiance qui traitent certaines données dans le cadre de leurs services : 1) Google Firebase (Authentification sécurisée, base de données Cloud Firestore, rapports de crash Crashlytics, et outils d'analyse de performance). 2) Google Mobile Ads (AdMob) pour l'affichage de publicités finançant la gratuité du service. Sur iOS, le consentement de suivi est explicitement sollicité via le cadre d'App Tracking Transparency (ATT). 3) API Google Gemini (modèle gemini-3.1-flash-lite) utilisé par notre service de modération pour vérifier de manière automatisée la conformité de votre pseudonyme (seul le pseudo y est envoyé, à l'exclusion de tout email ou UID)."
      },
      {
        title: "4. Visibilité et Conservation des Données",
        content: "Seuls votre pseudonyme et votre progression globale (score total, succès) sont publics dans le classement. Votre email et votre progression détaillée restent privés. Les comptes invités (anonymes) inactifs depuis plus de 120 jours sont automatiquement supprimés du serveur d'authentification pour des raisons d'hygiène et de sécurité des données."
      },
      {
        title: "5. Vos Droits (Droit à l'oubli)",
        content: "Vous disposez d'un contrôle total sur vos données. Vous pouvez supprimer définitivement et instantanément votre compte utilisateur ainsi que l'ensemble des données associées dans Cloud Firestore directement depuis les paramètres de l'application."
      }
    ],
    footer: "Contact RGPD et Support : anirouddh@gmail.com",
    termsLink: "Consulter les Conditions d'Utilisation"
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: July 16, 2026",
    intro: "This policy details how we handle your personal data within the 'The Telugu' ecosystem. Your privacy and data security are our top priorities.",
    sections: [
      {
        title: "1. Data Collection",
        content: "We collect several types of data: account credentials (your email address and unique UID if authenticated via Google, Apple, or Email), your profile nickname, learning progression (scores, completed lessons, achievements, exercise history, and virtual currency 'Om'), and application settings (language, dark mode). For guest (anonymous) accounts, all progression and settings are stored locally on your device. We also collect anonymous advertising identifiers (AD_ID on Android, IDFA on iOS) and anonymized technical data to monitor performance and crash logs."
      },
      {
        title: "2. Data Usage",
        content: "Your data is used to: synchronize and save your progress across multiple devices, manage your score on the public global Leaderboard, dynamically tailor your learning path using our local adaptive algorithm (learning profiles), automatically moderate and secure player usernames, and send local study reminders on your device."
      },
      {
        title: "3. Third-Party Services and Artificial Intelligence",
        content: "We use trusted third-party providers to handle specific parts of the experience: 1) Google Firebase (secure authentication, Cloud Firestore database, Crashlytics crash reports, and performance monitoring tools). 2) Google Mobile Ads (AdMob) to display advertisements which keep the service free. On iOS devices, tracking consent is explicitly requested via the App Tracking Transparency (ATT) framework. 3) Google Gemini API (gemini-3.1-flash-lite model) integrated into our safety moderation service to automatically verify username safety (only the nickname is processed; no email or UID is shared with the AI)."
      },
      {
        title: "4. Data Visibility and Retention",
        content: "Only your username and overall progress (total score, achievements) are visible to the public on the leaderboard. Your email and detailed learning progression remain strictly private. Anonymous (guest) accounts inactive for more than 120 days are automatically deleted from the authentication server for data hygiene and security purposes."
      },
      {
        title: "5. Your Rights (Right to be Forgotten)",
        content: "You retain full control over your data. You can instantly and permanently delete your user account and all associated data stored in Cloud Firestore directly from the settings screen in the application."
      }
    ],
    footer: "GDPR Contact and Support: anirouddh@gmail.com",
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
