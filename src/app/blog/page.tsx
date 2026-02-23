import styles from "./blog.module.css";
import Link from "next/link";

const POSTS = [
  {
    slug: "bienvenue-sur-mon-nouveau-blog",
    title: "Bienvenue sur mon nouveau blog",
    excerpt: "Pourquoi j'ai décidé de refaire mon site web à la main avec Next.js et ce que vous y trouverez bientôt.",
    date: "23 Février 2026",
    category: "Personnel"
  },
  {
    slug: "developpement-the-telugu",
    title: "Dans les coulisses de 'The Telugu'",
    excerpt: "Retour sur les défis techniques de la création d'une application d'apprentissage de langue avec Flutter.",
    date: "15 Février 2026",
    category: "Tech"
  }
];

export default function BlogPage() {
  return (
    <div className="container">
      <h1 className={styles.title}>Le Blog</h1>
      <p className={styles.intro}>Réflexions sur le code, les langues et l'innovation.</p>

      <div className={styles.postsList}>
        {POSTS.map((post) => (
          <article key={post.slug} className={styles.postCard}>
            <div className={styles.postMeta}>
              <span>{post.date}</span> • <span>{post.category}</span>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className={styles.postTitle}>{post.title}</h2>
            </Link>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className={styles.readMore}>
              Lire la suite →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
