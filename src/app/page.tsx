import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <h1>Bonjour, je suis <span className={styles.highlight}>Anirouddh</span></h1>
        <p className={styles.subtitle}>
          Développeur passionné, créateur de l'application <strong>The Telugu</strong> et explorateur de technologies.
        </p>
        <div className={styles.actions}>
          <Link href="/projets" className={styles.btnPrimary}>Voir mes projets</Link>
          <Link href="/blog" className={styles.btnSecondary}>Lire mon blog</Link>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.card}>
          <h3>Développement</h3>
          <p>Création d'applications modernes et performantes avec les dernières technologies.</p>
        </div>
        <div className={styles.card}>
          <h3>Apprentissage</h3>
          <p>Partage de connaissances sur la langue Telugu et le développement logiciel.</p>
        </div>
        <div className={styles.card}>
          <h3>Innovation</h3>
          <p>Toujours à la recherche de nouvelles solutions pour des problèmes complexes.</p>
        </div>
      </section>
    </div>
  );
}
