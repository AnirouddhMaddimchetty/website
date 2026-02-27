'use client';

import { useState } from 'react';
import styles from '../LegalPage.module.css';
import Link from 'next/link';

const CONTENT = {
  fr: {
    title: "Conditions Générales d'Utilisation",
    lastUpdated: "Dernière mise à jour : 27 Février 2026",
    warning: "Ce document régit l'utilisation de l'application « The Telugu ». En utilisant l'application, vous acceptez ces termes. Si vous ne les acceptez pas, veuillez ne pas l'utiliser.",
    sections: [
      {
        title: "1. Présentation du Service",
        content: "The Telugu est une application mobile dédiée à l'apprentissage de la langue Telugu via des leçons interactives, un système de progression et des contenus multimédias."
      },
      {
        title: "2. Compte Utilisateur",
        content: "Vous pouvez utiliser l'application anonymement ou créer un compte (Email, Google, Apple). Vous êtes responsable de la sécurité de vos identifiants. La suppression du compte est possible à tout moment depuis les réglages."
      },
      {
        title: "3. Système de Progression (Om)",
        content: "L'application utilise une monnaie virtuelle appelée « Om ». Ces points n'ont aucune valeur monétaire réelle, ne sont pas transférables et ne peuvent pas être convertis en argent réel."
      },
      {
        title: "4. Publicités",
        content: "The Telugu utilise Google AdMob pour afficher des publicités (bannières, interstitiels, vidéos récompensées). En utilisant l'application, vous acceptez cet affichage qui permet de maintenir le service gratuit."
      },
      {
        title: "5. Propriété Intellectuelle",
        content: "Tous les contenus (textes, audios, graphismes) sont la propriété exclusive de The Telugu. Toute reproduction ou extraction sans autorisation est strictement interdite."
      },
      {
        title: "6. Limitation de Responsabilité",
        content: "L'application est fournie « en l'état ». Nous ne garantissons pas l'absence d'erreurs ou l'infaillibilité du service. Nous ne sommes pas responsables des pertes de progression techniques."
      }
    ],
    footer: "Pour toute question, contactez-nous : support@thetelugu.com",
    policyLink: "Consulter la Politique de Confidentialité"
  },
  en: {
    title: "Terms and Conditions",
    lastUpdated: "Last updated: February 27, 2026",
    warning: "This document governs the use of the 'The Telugu' application. By using the app, you agree to these terms. If you do not agree, please do not use the application.",
    sections: [
      {
        title: "1. Service Overview",
        content: "The Telugu is a mobile application dedicated to learning the Telugu language through interactive lessons, a progression system, and multimedia content."
      },
      {
        title: "2. User Account",
        content: "You can use the app anonymously or create an account (Email, Google, Apple). You are responsible for your login security. Account deletion is available anytime in settings."
      },
      {
        title: "3. Progression System (Om)",
        content: "The app uses a virtual currency called 'Om'. These points have no real monetary value, are not transferable, and cannot be converted into real currency."
      },
      {
        title: "4. Advertisements",
        content: "The Telugu uses Google AdMob to display ads (banners, interstitials, rewarded videos). By using the app, you accept these ads which keep the service free of charge."
      },
      {
        title: "5. Intellectual Property",
        content: "All content (text, audio, graphics) is the exclusive property of The Telugu. Any reproduction or extraction without permission is strictly prohibited."
      },
      {
        title: "6. Limitation of Liability",
        content: "The application is provided 'as is'. We do not guarantee error-free or infallible service. We are not responsible for technical progression losses."
      }
    ],
    footer: "Questions? Contact us: support@thetelugu.com",
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
