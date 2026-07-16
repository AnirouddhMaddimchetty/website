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
  warning: string;
  sections: LegalSection[];
  footer: string;
  policyLink: string;
}

const CONTENT: Record<'fr' | 'en', PageContent> = {
  fr: {
    title: "Conditions Générales d'Utilisation",
    lastUpdated: "Dernière mise à jour : 16 Juillet 2026",
    warning: "Ce document régit l'utilisation de l'application « The Telugu ». En utilisant l'application, vous acceptez pleinement ces termes. Si vous ne les acceptez pas, veuillez ne pas installer ni utiliser l'application.",
    sections: [
      {
        title: "1. Présentation du Service",
        content: "The Telugu est une application mobile dédiée à la diffusion et à l'apprentissage de la langue et de la culture Telugu :",
        list: [
          "<strong>Leçons de langue</strong> : Apprentissage structuré des alphabets, mots, grammaire et prononciation.",
          "<strong>Exercices pratiques</strong> : Entraînement interactif au tracé des caractères telugu (aksharas).",
          "<strong>Mini-jeux éducatifs</strong> : Jeux comme Akshara Alchemist, Bubble Temple et Vegam Akshara pour ancrer le vocabulaire."
        ]
      },
      {
        title: "2. Compte Utilisateur et Authentification",
        content: "Vous pouvez explorer l'application librement en tant qu'invité ou vous connecter pour enregistrer votre progression :",
        list: [
          "<strong>Sécurité renforcée</strong> : La création de comptes avec mot de passe est désactivée pour les e-mails sous domaines sociaux (Gmail, iCloud) afin de privilégier la connexion directe et sécurisée (OAuth).",
          "<strong>Responsabilité</strong> : Vous êtes responsable de la confidentialité de vos identifiants et des actions effectuées sous votre compte.",
          "<strong>Purge des comptes inactifs</strong> : Les comptes invités inactifs pendant plus de 120 jours sont supprimés de nos serveurs."
        ]
      },
      {
        title: "3. Règles de Conduite et Modération par IA",
        content: "Pour assurer un cadre bienveillant et axé sur l'apprentissage, votre pseudonyme public doit respecter certaines règles :",
        list: [
          "<strong>Modération automatisée</strong> : Les pseudonymes sont évalués à la création et à la modification par l'intelligence artificielle (Google Gemini API).",
          "<strong>Contenus prohibés</strong> : Tout pseudo à caractère injurieux, haineux, sexuel ou inapproprié (en français, anglais ou telugu) sera bloqué.",
          "<strong>Sanctions</strong> : En cas de contournement délibéré ou de violation répétée, nous nous réservons le droit de suspendre ou supprimer votre compte sans préavis."
        ]
      },
      {
        title: "4. Système de Progression (Om)",
        content: "L'application utilise des points d'expérience appelés « Om » pour encourager et mesurer vos efforts :",
        list: [
          "Les points Om n'ont <strong>aucune valeur financière réelle</strong>, ne peuvent pas être achetés avec de l'argent et ne sont pas transférables.",
          "Ces points servent uniquement à l'affichage de votre progression dans l'application et sur le classement général public.",
          "La suppression d'un compte entraîne la suppression immédiate et définitive de tous vos points Om accumulés."
        ]
      },
      {
        title: "5. Publicités et Suivi publicitaire",
        content: "L'application intègre des espaces publicitaires via la régie Google AdMob afin de rester gratuite :",
        list: [
          "En utilisant l'application, vous acceptez l'affichage de bannières publicitaires et de vidéos récompensées.",
          "<strong>Consentement iOS (ATT)</strong> : Sur les appareils Apple, vous pouvez accepter ou refuser le ciblage publicitaire personnalisé via la boîte système d'App Tracking Transparency."
        ]
      },
      {
        title: "6. Propriété Intellectuelle",
        content: "Tous les éléments constitutifs de l'application sont protégés par le droit d'auteur :",
        list: [
          "Les textes, enregistrements audio, visuels, mini-jeux et architectures de cours restent la propriété exclusive de « The Telugu ».",
          "Toute reproduction, copie, modification ou exploitation commerciale sans notre accord préalable écrit est formellement interdite."
        ]
      },
      {
        title: "7. Limitation de Responsabilité",
        content: "Nous nous efforçons de fournir un service de haute qualité, mais l'application est proposée « en l'état » :",
        list: [
          "Nous ne garantissons pas que l'application soit totalement exempte de bugs ou d'interruptions techniques.",
          "Nous ne pourrons être tenus responsables de pertes de progression de leçons (locales ou cloud) survenues suite à des défaillances techniques."
        ]
      }
    ],
    footer: "Pour toute question relative aux CGU : anirouddh@gmail.com",
    policyLink: "Consulter la Politique de Confidentialité"
  },
  en: {
    title: "Terms and Conditions",
    lastUpdated: "Last updated: July 16, 2026",
    warning: "This document governs the use of the 'The Telugu' application. By using the app, you fully agree to these terms. If you do not agree, please do not install or use the application.",
    sections: [
      {
        title: "1. Service Overview",
        content: "The Telugu is a mobile application dedicated to sharing and learning the Telugu language and culture:",
        list: [
          "<strong>Language Lessons</strong>: Structured learning of alphabets, words, grammar, and pronunciation.",
          "<strong>Practical Tracing Exercises</strong>: Interactive handwriting practice for Telugu characters (aksharas).",
          "<strong>Educational Mini-Games</strong>: Games such as Akshara Alchemist, Bubble Temple, and Vegam Akshara to reinforce vocabulary."
        ]
      },
      {
        title: "2. User Accounts and Authentication",
        content: "You can explore the app freely as a guest or sign in to save your progression:",
        list: [
          "<strong>Enhanced Security</strong>: Traditional password signups are disabled for email addresses on social domains (Gmail, iCloud) in favor of secure, direct OAuth connections.",
          "<strong>Responsibility</strong>: You are solely responsible for keeping your login credentials secure and for any activity conducted through your account.",
          "<strong>Account Cleanup</strong>: Inactive guest accounts are automatically cleaned up after 120 days of inactivity."
        ]
      },
      {
        title: "3. Rules of Conduct & AI Moderation",
        content: "To ensure a welcoming, educational environment, your public nickname must follow strict rules:",
        list: [
          "<strong>Automated Verification</strong>: Proposed usernames are evaluated by AI (Google Gemini API) upon creation and updates.",
          "<strong>Prohibited Terms</strong>: Any nickname containing abusive, hateful, explicit, or inappropriate words (in French, English, or Telugu) will be rejected.",
          "<strong>Enforcement</strong>: We reserve the right to suspend or terminate accounts in cases of deliberate evasion or repeated violations."
        ]
      },
      {
        title: "4. Progression & Virtual Currency (Om)",
        content: "The app uses 'Om' experience points to encourage and evaluate your learning milestones:",
        list: [
          "Om points have <strong>no real-world monetary value</strong>, cannot be purchased, and cannot be transferred.",
          "These points are exclusively used to track progress in-app and rank users on the public global leaderboard.",
          "Deleting your account will permanently wipe all earned Om points."
        ]
      },
      {
        title: "5. Advertisements & Tracking",
        content: "The application displays advertisements via Google AdMob to fund its free access:",
        list: [
          "By using the app, you consent to the display of banners and rewarded videos.",
          "<strong>iOS Tracking (ATT)</strong>: On Apple devices, you can opt in or out of personalized tracking via the system App Tracking Transparency prompt."
        ]
      },
      {
        title: "6. Intellectual Property",
        content: "All elements within the application are protected by copyright laws:",
        list: [
          "Lesson texts, audio recordings, visual assets, game designs, and course layouts remain the exclusive property of 'The Telugu'.",
          "Any reproduction, redistribution, or commercial use without our explicit prior written consent is strictly prohibited."
        ]
      },
      {
        title: "7. Limitation of Liability",
        content: "We aim to provide a high-quality service, but the application is provided on an 'as is' and 'as available' basis:",
        list: [
          "We do not warrant that the application will be completely free of bugs or technical interruptions.",
          "We disclaim liability for any accidental or technical loss of learning progress stored locally or in the cloud."
        ]
      }
    ],
    footer: "Questions about Terms? Contact us: anirouddh@gmail.com",
    policyLink: "View Privacy Policy"
  }
};

export default function TermsPage() {
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

      <div className={styles.alertBox}>
        {t.warning}
      </div>

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
          <Link href="/thetelugu/confidentialite" style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
            → {t.policyLink}
          </Link>
        </p>
      </div>

      <footer className={styles.footerNote}>
        {t.footer}
      </footer>
    </div>
  );
}
