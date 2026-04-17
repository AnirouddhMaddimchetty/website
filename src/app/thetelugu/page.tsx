'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function TheTeluguLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.landingWrapper}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div 
          className={styles.parallaxBg} 
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.logoContainer}>
              <img src="/thetelugu/assets/logo.png" alt="The Telugu Logo" className={styles.logo} />
            </div>
            <h1 className={styles.title}>The Telugu <br /> Learn & Play</h1>
            <p className={styles.subtitle}>
              L'essence de la culture Telugu. Apprenez, jouez et célébrez votre héritage avec une expérience numérique d'exception.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="https://apps.apple.com/fr/app/the-telugu-learn-play/id6762086815" className={styles.appStoreBtn} target="_blank" rel="noopener noreferrer">
                App Store
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.anirouddh.TheTelugu" className={styles.playStoreBtn} target="_blank" rel="noopener noreferrer">
                Play Store
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <span className={styles.icon}>🗣️</span>
              <h3>Apprentissage</h3>
              <p>Des leçons interactives et immersives pour maîtriser la langue avec aisance.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.icon}>🏺</span>
              <h3>Culture</h3>
              <p>Explorez les traditions et l'histoire qui façonnent l'identité Telugu.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.icon}>🛡️</span>
              <h3>Confidentialité</h3>
              <p>Une expérience sécurisée conçue pour respecter votre vie privée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className={styles.showcase}>
        <div className="container">
          <div className={styles.showcaseContent}>
            <div className={styles.showcaseText}>
              <h2>Une interface <br /> épurée.</h2>
              <p>
                Nous avons éliminé le superflu pour ne garder que l'essentiel : 
                votre progression et le plaisir d'apprendre.
              </p>
            </div>
            <div className={styles.showcaseImage}>
              <img 
                src="/thetelugu/assets/mockup.svg" 
                alt="App Mockup" 
                className={styles.mockup} 
                style={{ transform: `translateY(${Math.max(-20, (scrollY - 400) * -0.05)}px)` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Legal Section */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3>The Telugu</h3>
              <p>Design & Développement par Anirouddh</p>
            </div>
            <div className={styles.footerLinks}>
              <Link href="/thetelugu/confidentialite">Confidentialité</Link>
              <Link href="/thetelugu/conditions">Conditions</Link>
              <Link href="mailto:anirouddh@gmail.com">Contact</Link>
            </div>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} The Telugu. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
