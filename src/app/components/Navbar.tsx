import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            Anirouddh M.
          </Link>
          <ul className={styles.navLinks}>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/projets">Projets</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
