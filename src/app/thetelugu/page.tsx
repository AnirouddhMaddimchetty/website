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
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.logoContainer}>
              <img src="/thetelugu/assets/logo.png" alt="The Telugu Logo" className={styles.logo} />
            </div>
            <h1 className={styles.title}>The Telugu <br /> <span className={styles.gradient}>Learn & Play</span></h1>
            <p className={styles.subtitle}>
              L'essence de la culture Telugu dans votre poche. 
              Apprenez, jouez et célébrez votre héritage avec une application conçue pour la nouvelle génération.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="https://apps.apple.com/fr/app/the-telugu-learn-play/id6762086815" className={styles.appStoreBtn} target="_blank" rel="noopener noreferrer">
                Télécharger sur l'App Store
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.anirouddh.TheTelugu" className={styles.playStoreBtn} target="_blank" rel="noopener noreferrer">
                Disponible sur Google Play
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
              <div className={styles.icon} style={{ transform: `translateY(${scrollY * -0.05}px)` }}>🗣️</div>
              <h3>Apprentissage Immersif</h3>
              <p>Des leçons interactives conçues pour vous faire parler Telugu dès le premier jour.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.icon} style={{ transform: `translateY(${scrollY * -0.08}px)` }}>🏺</div>
              <h3>Héritage Culturel</h3>
              <p>Explorez l'histoire, la littérature et les traditions qui font la beauté du peuple Telugu.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.icon} style={{ transform: `translateY(${scrollY * -0.1}px)` }}>🛡️</div>
              <h3>Sécurisé & Privé</h3>
              <p>Vos données sont protégées. Apprenez en toute serrénité dans un environnement respectueux.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className={styles.showcase}>
        <div className="container">
          <div className={styles.showcaseContent}>
            <div className={styles.showcaseText}>
              <h2>Une expérience visuelle <br /> sans précédent.</h2>
              <p>
                Nous avons repensé l'apprentissage des langues avec une interface épurée, 
                des animations fluides et un mode sombre sublime pour vos sessions nocturnes.
              </p>
            </div>
            <div className={styles.showcaseImage}>
              <img 
                src="/thetelugu/assets/mockup.svg" 
                alt="App Mockup" 
                className={styles.mockup} 
                style={{ transform: `translateY(${Math.max(0, (scrollY - 500) * -0.15)}px)` }}
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
              <p>Fait avec ❤️ par Anirouddh</p>
            </div>
            <div className={styles.footerLinks}>
              <Link href="/thetelugu/confidentialite">Confidentialité</Link>
              <Link href="/thetelugu/conditions">Conditions d'utilisation</Link>
              <Link href="mailto:anirouddh@gmail.com">Contact</Link>
            </div>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} The Telugu. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
