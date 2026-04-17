import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.heroWrapper}>
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.badge}>Disponible maintenant</div>
          <h1 className={styles.title}>
            Concevoir l'avenir, <br />
            <span className={styles.highlight}>une ligne à la fois.</span>
          </h1>
          <p className={styles.subtitle}>
            Bonjour, je suis <strong>Anirouddh</strong>. Développeur créatif et fondateur de <em>The Telugu</em>. 
            Je transforme des idées complexes en expériences numériques élégantes.
          </p>
          <div className={styles.actions}>
            <Link href="/thetelugu" className={styles.btnPrimary}>
              Découvrir The Telugu
            </Link>
            <Link href="/projets" className={styles.btnSecondary}>
              Mes Projets
            </Link>
          </div>
        </section>
      </div>
      <div className={styles.backgroundGlow}></div>
    </div>
  );
}
