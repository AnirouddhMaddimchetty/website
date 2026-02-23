import styles from "../blog.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";

// Simulation de base de données
const POSTS = {
  "bienvenue-sur-mon-nouveau-blog": {
    title: "Bienvenue sur mon nouveau blog",
    content: "Ceci est le début d'une nouvelle aventure...",
    date: "23 Février 2026"
  },
  "developpement-the-telugu": {
    title: "Dans les coulisses de 'The Telugu'",
    content: "Créer une application avec Flutter a été un défi passionnant...",
    date: "15 Février 2026"
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug as keyof typeof POSTS];

  if (!post) {
    notFound();
  }

  return (
    <div className="container">
      <article className={styles.singlePost}>
        <Link href="/blog" className={styles.backLink}>← Retour au blog</Link>
        <header className={styles.postHeader}>
          <p className={styles.date}>{post.date}</p>
          <h1>{post.title}</h1>
        </header>
        <div className={styles.content}>
          <p>{post.content}</p>
          <p style={{fontStyle: 'italic', marginTop: '2rem'}}>L'article complet arrive bientôt !</p>
        </div>
      </article>
    </div>
  );
}
