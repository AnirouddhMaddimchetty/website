import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.heroWrapper}>
      <div className="container">
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Concevoir des <br /> expériences.
          </h1>
          <p className={styles.subtitle}>
            Bonjour, je suis <strong>Anirouddh</strong>. Fondateur de <em>The Telugu</em>. 
            Je développe des produits numériques élégants et performants.
          </p>
          <div className={styles.actions}>
            <Link href="/thetelugu" className={styles.btnPrimary}>
              The Telugu
            </Link>
            <Link href="/projets" className={styles.btnSecondary}>
              Voir mes projets
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
