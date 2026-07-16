'use client';

import { useState } from 'react';
import styles from '../LegalPage.module.css';
import Link from 'next/link';

const CONTENT = {
  fr: {
    title: "Conditions Générales d'Utilisation",
    lastUpdated: "Dernière mise à jour : 16 Juillet 2026",
    warning: "Ce document régit l'utilisation de l'application « The Telugu ». En utilisant l'application, vous acceptez pleinement ces termes. Si vous ne les acceptez pas, veuillez ne pas installer ni utiliser l'application.",
    sections: [
      {
        title: "1. Présentation du Service",
        content: "The Telugu est une application mobile d'apprentissage interactif de la langue et de la culture Telugu. L'application propose des leçons théoriques, des exercices pratiques de tracé de caractères, et des jeux éducatifs."
      },
      {
        title: "2. Compte Utilisateur et Authentification",
        content: "Vous pouvez utiliser l'application en mode invité ou en créant un compte authentifié (Email, Google, Apple). Pour garantir un niveau de sécurité maximal, la création de comptes par mot de passe traditionnel est interdite pour les adresses se terminant par des domaines sociaux majeurs (tels que gmail.com ou icloud.com), imposant à la place l'utilisation de la connexion OAuth native et sécurisée correspondante. Les comptes invités inactifs depuis plus de 120 jours sont automatiquement purgés de nos serveurs. Vous êtes responsable du maintien de la confidentialité de vos identifiants."
      },
      {
        title: "3. Règles de Conduite et Modération des Pseudonymes",
        content: "Afin de maintenir un environnement éducatif sain, le choix de votre pseudonyme (username) est soumis à des règles strictes. Il est strictement interdit d'utiliser des termes offensants, haineux, à connotation sexuelle ou inappropriés (en français, anglais et telugu). Un système de modération automatique basé sur l'intelligence artificielle (Google Gemini API) évalue la conformité des pseudonymes lors de leur création ou modification. Tout compte violant de manière répétée ou flagrante ces règles pourra être suspendu ou supprimé sans préavis."
      },
      {
        title: "4. Système de Progression et Monnaie Virtuelle (Om)",
        content: "L'application utilise une monnaie virtuelle appelée « Om » pour matérialiser votre assiduité et vos succès. Ces points sont stockés soit localement (invités) soit sur nos serveurs Firestore (utilisateurs connectés). Ils n'ont aucune valeur monétaire réelle, ne sont pas transférables, ne sont pas achetables avec de l'argent réel et ne peuvent en aucun cas être convertis en devises réelles. La suppression d'un compte entraîne la perte immédiate et définitive de tous les points Om cumulés."
      },
      {
        title: "5. Publicités et Suivi publicitaire",
        content: "The Telugu intègre Google AdMob pour afficher des publicités (bannières, vidéos récompensées) qui permettent de maintenir la gratuité de l'application. Pour les utilisateurs sur iOS, le suivi publicitaire personnalisé requiert un consentement via la boîte de dialogue système d'App Tracking Transparency (ATT)."
      },
      {
        title: "6. Propriété Intellectuelle",
        content: "Tous les contenus présents dans l'application (textes de leçons, voix et enregistrements audio, illustrations, animations, architectures de cours et de jeux) sont la propriété exclusive de « The Telugu ». Toute reproduction, distribution ou extraction commerciale sans accord écrit préalable de notre part est strictement interdite."
      },
      {
        title: "7. Limitation de Responsabilité",
        content: "L'application est fournie « en l'état » et « selon sa disponibilité ». Nous ne garantissons pas l'absence d'erreurs ou l'infaillibilité du service de synchronisation en ligne. Nous déclinons toute responsabilité en cas de perte accidentelle ou technique de progression d'apprentissage locale ou stockée dans le cloud."
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
        content: "The Telugu is an interactive mobile application dedicated to learning the Telugu language and culture. The app features lessons, character tracing, and educational mini-games."
      },
      {
        title: "2. User Accounts and Authentication",
        content: "You can use the app as a guest or create an authenticated account (Email, Google, Apple). To ensure maximum security, traditional password account creation is blocked for email addresses on major social domains (like gmail.com and icloud.com), requiring instead the use of the corresponding native, secure OAuth login. Guest accounts that are inactive for more than 120 days are automatically purged from our authentication systems. You are solely responsible for keeping your login credentials secure."
      },
      {
        title: "3. Rules of Conduct & Username Moderation",
        content: "To maintain a safe educational environment, your choice of username must follow community guidelines. The use of offensive, hateful, explicit, or inappropriate words in French, English, or Telugu is strictly prohibited. An automated moderation system powered by artificial intelligence (Google Gemini API) evaluates usernames during creation or updates. Accounts violating these guidelines may be suspended or deleted without prior notice."
      },
      {
        title: "4. Progression System & Virtual Currency (Om)",
        content: "The app features a virtual currency called 'Om' to track your learning milestones. These points are stored locally (guest mode) or in the Firestore cloud database (registered accounts). Om points have no real monetary value, are non-transferable, cannot be purchased with real money, and can never be converted into real currency. Deleting an account will permanently erase all accumulated Om progress."
      },
      {
        title: "5. Advertisements & Tracking",
        content: "The Telugu uses Google AdMob to display advertisements (banners, rewarded videos) which allow us to keep the service free. For iOS users, personalized ad tracking is requested through the system App Tracking Transparency (ATT) dialogue."
      },
      {
        title: "6. Intellectual Property",
        content: "All content within the application (lesson texts, audio recordings, visual designs, course architecture, and game logic) is the exclusive property of 'The Telugu'. Any unauthorized reproduction, distribution, or commercial extraction is strictly prohibited."
      },
      {
        title: "7. Limitation of Liability",
        content: "The application is provided on an 'as is' and 'as available' basis. We do not guarantee that the online synchronization service will be error-free or uninterrupted. We decline liability for any accidental or technical loss of learning progress stored locally or in the cloud."
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
          <section key={index}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
        
        <p style={{ marginTop: '2rem' }}>
          <Link href="/thetelugu/confidentialite" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>
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
