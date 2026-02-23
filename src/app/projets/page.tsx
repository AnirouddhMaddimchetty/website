import styles from "./projets.module.css";
import Link from "next/link";

const PROJETS = [
  {
    id: "the-telugu",
    title: "The Telugu",
    description: "Une application mobile complète pour apprendre la langue Telugu de manière ludique et interactive. Inclut des leçons, des jeux (Arcade) et un suivi de progression.",
    tags: ["Flutter", "Firebase", "Riverpod", "Clean Architecture"],
    link: "https://play.google.com/store/apps/details?id=com.thetelugu.app", // Exemple de lien
    isLegacy: true
  }
];

export default function ProjetsPage() {
  return (
    <div className="container">
      <h1 className={styles.title}>Mes Projets</h1>
      <p className={styles.intro}>Voici une sélection des applications et outils que j'ai développés.</p>

      <div className={styles.grid}>
        {PROJETS.map((projet) => (
          <div key={projet.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>{projet.title}</h2>
              <div className={styles.tags}>
                {projet.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
              </div>
            </div>
            <p>{projet.description}</p>
            <div className={styles.links}>
              {projet.link && (
                <a href={projet.link} target="_blank" rel="noopener noreferrer" className={styles.mainLink}>
                  Voir le projet
                </a>
              )}
              <Link href="/projets/the-telugu" className={styles.secondaryLink}>
                Détails
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
