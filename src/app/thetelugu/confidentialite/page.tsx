'use client';

import { useState } from 'react';
import styles from '../LegalPage.module.css';
import Link from 'next/link';

interface LegalSection {
  title: string;
  content: string;
  list?: string[];
}

interface PageContent {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  footer: string;
  termsLink: string;
}

const CONTENT: Record<'fr' | 'en', PageContent> = {
  fr: {
    title: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour : 16 Juillet 2026",
    intro: "Cette politique détaille comment nous traitons vos données personnelles au sein de l'écosystème « The Telugu ». Votre vie privée et la sécurité de vos données sont nos priorités absolues.",
    sections: [
      {
        title: "1. Données Collectées",
        content: "Nous collectons différents types d'informations nécessaires au bon fonctionnement de l'application et à l'adaptation de votre apprentissage :",
        list: [
          "<strong>Identifiants de compte</strong> : Adresse e-mail et UID unique (si authentifié via Google, Apple ou e-mail).",
          "<strong>Profil d'utilisateur</strong> : Votre pseudonyme choisi pour le classement général.",
          "<strong>Progression pédagogique</strong> : Leçons complétées, scores, succès débloqués, historique d'exercices et cumul de la monnaie virtuelle <strong>« Om »</strong>.",
          "<strong>Données des invités</strong> : Pour les utilisateurs non connectés, toutes les données de progression restent stockées localement sur votre appareil (via Hive) et ne sont pas envoyées sur nos serveurs.",
          "<strong>Données techniques et publicitaires</strong> : Identifiants publicitaires anonymes (AD_ID sur Android, IDFA sur iOS) et rapports de plantage anonymes (Firebase Crashlytics)."
        ]
      },
      {
        title: "2. Utilisation des Données",
        content: "Vos données personnelles sont traitées pour répondre aux besoins suivants :",
        list: [
          "Synchronisation cloud pour sauvegarder et retrouver votre progression sur plusieurs appareils.",
          "Affichage de votre pseudonyme et score cumulé sur le classement mondial public.",
          "<strong>Adaptation de l'apprentissage</strong> : Analyse de votre historique local pour adapter la difficulté et les conseils de notre compagnon.",
          "<strong>Modération des pseudonymes</strong> : Utilisation d'un algorithme intelligent pour bannir les noms inappropriés et maintenir un espace d'apprentissage convivial.",
          "Envoi de rappels d'étude quotidiens sous forme de notifications locales (sur l'appareil)."
        ]
      },
      {
        title: "3. Services Tiers et Intelligence Artificielle",
        content: "Nous intégrons des services tiers fiables pour enrichir l'expérience utilisateur et assurer la sécurité de l'application :",
        list: [
          "<strong>Google Firebase</strong> : Authentification sécurisée, base de données Cloud Firestore, et analyse de performance anonymisée.",
          "<strong>Google Mobile Ads (AdMob)</strong> : Diffusion de publicités pour financer le service. Sur iOS, le suivi publicitaire personnalisé est soumis à votre accord via le protocole d'<strong>App Tracking Transparency</strong> (ATT).",
          "<strong>Intelligence Artificielle Google Gemini</strong> : Intégration du modèle <em>gemini-3.1-flash-lite</em> pour vérifier la conformité des pseudonymes. Seul le pseudonyme proposé est transmis (aucune autre donnée utilisateur n'est partagée)."
        ]
      },
      {
        title: "4. Visibilité et Conservation",
        content: "Nous veillons à ce que vos informations personnelles restent strictement confidentielles :",
        list: [
          "Seuls votre pseudonyme et votre score total sont visibles par les autres utilisateurs dans le classement public.",
          "Votre adresse e-mail et le détail de vos leçons restent entièrement confidentiels.",
          "<strong>Purge des comptes inactifs</strong> : Les comptes invités (anonymes) inactifs depuis plus de 120 jours sont automatiquement et définitivement supprimés."
        ]
      },
      {
        title: "5. Vos Droits",
        content: "Vous conservez le contrôle total de vos données personnelles :",
        list: [
          "Vous pouvez modifier votre pseudonyme à tout moment dans l'application.",
          "<strong>Droit à l'oubli</strong> : Vous pouvez supprimer instantanément et définitivement votre compte et toutes vos données de progression stockées dans Firestore en un clic depuis l'écran des réglages."
        ]
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
        content: "We collect various types of information to ensure the proper functioning of the application and customize your learning experience:",
        list: [
          "<strong>Account Credentials</strong>: Email address and unique UID (if authenticated via Google, Apple, or Email).",
          "<strong>User Profile</strong>: Your chosen username displayed on the leaderboard.",
          "<strong>Learning Progress</strong>: Completed lessons, scores, unlocked achievements, exercise history, and virtual currency <strong>'Om'</strong>.",
          "<strong>Guest Accounts</strong>: For unauthenticated users, all progress data is stored locally on the device (using Hive) and is not sent to our servers.",
          "<strong>Technical & Advertising IDs</strong>: Anonymous advertising identifiers (AD_ID on Android, IDFA on iOS) and anonymous performance or crash reports (Firebase Crashlytics)."
        ]
      },
      {
        title: "2. Data Usage",
        content: "Your personal data is processed for the following purposes:",
        list: [
          "Cloud synchronization to save and retrieve your progress across multiple devices.",
          "Displaying your username and overall progress on the public global leaderboard.",
          "<strong>Adaptive Learning</strong>: Analyzing local exercise history to tailor study pacing and helpful prompts from your mascot.",
          "<strong>Username Moderation</strong>: Evaluating chosen names using AI moderation to keep our learning community safe and welcoming.",
          "Sending study reminders via local notifications directly on your device."
        ]
      },
      {
        title: "3. Third-Party Services and AI",
        content: "We partner with trusted service providers to enhance security and deliver advertisements:",
        list: [
          "<strong>Google Firebase</strong>: Used for secure user accounts, Cloud Firestore database hosting, and anonymized performance tracking.",
          "<strong>Google Mobile Ads (AdMob)</strong>: Displays ads to keep our learning resources free. iOS users must consent to ad tracking via the <strong>App Tracking Transparency</strong> (ATT) prompt.",
          "<strong>Google Gemini AI Integration</strong>: Uses the <em>gemini-3.1-flash-lite</em> model to analyze and moderate usernames. Only the proposed username is sent to the API (no email or UID is shared)."
        ]
      },
      {
        title: "4. Data Visibility and Retention",
        content: "We implement strict measures to safeguard your personal details:",
        list: [
          "Only your username and overall score are displayed on the public global leaderboard.",
          "Your email address and granular lesson progress remain strictly private.",
          "<strong>Inactive Account Cleanup</strong>: Guest (anonymous) accounts that are inactive for more than 120 days are automatically deleted from our servers."
        ]
      },
      {
        title: "5. Your Rights",
        content: "You maintain complete ownership of your personal information:",
        list: [
          "You can update your username at any time in the app.",
          "<strong>Right to Erasure</strong>: You can instantly and permanently delete your account and all associated Firestore cloud progress with one click in the app settings."
        ]
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
      <Link href="/thetelugu" className={styles.backLink}>
        ← {lang === 'fr' ? "Retour à The Telugu" : "Back to The Telugu"}
      </Link>

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
          <section key={index} className={styles.sectionCard}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            {section.list && (
              <ul className={styles.bulletList}>
                {section.list.map((item, idx) => (
                  <li 
                    key={idx} 
                    className={styles.bulletItem} 
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ul>
            )}
          </section>
        ))}

        <p style={{ marginTop: '2rem' }}>
          <Link href="/thetelugu/conditions" style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
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
