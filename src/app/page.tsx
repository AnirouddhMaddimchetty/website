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
    </div>
  );
}
