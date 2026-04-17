import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logo}>
          Anirouddh M.
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/projets">Projets</Link></li>
          <li><Link href="/thetelugu" className={styles.navCta}>The Telugu</Link></li>
        </ul>
      </div>
    </nav>
  );
}
