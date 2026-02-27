import styles from "../../blog/blog.module.css";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container">
      <article className={styles.singlePost}>
        <header className={styles.postHeader}>
          <p className={styles.date}>Dernière mise à jour : 24 Mai 2024</p>
          <h1>Politique de Confidentialité</h1>
        </header>
        <div className={styles.content}>
          <p>La présente Politique de Confidentialité décrit comment vos informations sont collectées, utilisées et protégées lors de l'utilisation de l'application <strong>The Telugu</strong>. Nous nous engageons à respecter la vie privée de nos utilisateurs et à traiter leurs données avec la plus grande transparence.</p>

          <h2>1. Informations que nous collectons</h2>
          <p>Nous collectons les données nécessaires au bon fonctionnement de l'application, à la progression pédagogique et à la gestion du classement :</p>
          <ul>
            <li><strong>Informations de compte :</strong> Lors de l'utilisation de services d'authentification (Google, Apple ou Email), nous collectons votre adresse e-mail et votre identifiant unique (UID).</li>
            <li><strong>Profil utilisateur :</strong> Vous pouvez choisir un pseudonyme. Pour garantir l'unicité, une version normalisée (minuscules) est stockée.</li>
            <li><strong>Données de progression :</strong> Nous enregistrons vos scores (Total Om), votre niveau, vos statistiques de jeu (fusions, bulles), ainsi que l'avancement de vos leçons et exercices.</li>
            <li><strong>Données techniques :</strong> Vos préférences de réglages (langue, mode sombre, notifications, vibration) sont conservées.</li>
            <li><strong>Utilisateurs Invités :</strong> Pour les comptes non authentifiés, les données sont stockées localement sur votre appareil.</li>
          </ul>

          <h2>2. Utilisation des données</h2>
          <p>Vos données sont traitées pour les finalités suivantes :</p>
          <ul>
            <li><strong>Synchronisation :</strong> Permettre de retrouver votre progression sur différents appareils.</li>
            <li><strong>Classement (Leaderboard) :</strong> Afficher votre pseudonyme et votre score total dans le classement mondial et par exercice.</li>
            <li><strong>Notifications :</strong> Envoi de rappels quotidiens d'apprentissage ou alertes de réactivation.</li>
            <li><strong>Publicité :</strong> L'application utilise <strong>Google AdMob</strong> pour diffuser des publicités finançant le service.</li>
          </ul>

          <h2>3. Partage et visibilité des données</h2>
          <ul>
            <li><strong>Données Publiques :</strong> Votre pseudonyme et votre score total sont visibles par tous via le classement global.</li>
            <li><strong>Données Privées :</strong> Vos informations personnelles (e-mail) et le détail de vos réglages ne sont accessibles que par vous-même via une authentification sécurisée.</li>
            <li><strong>Services Tiers :</strong> Utilisation de <strong>Firebase</strong> (hébergement/authentification) et <strong>AdMob</strong> (publicité).</li>
          </ul>

          <h2>4. Sécurité et Stockage</h2>
          <p>Vos données sont protégées par les règles de sécurité de <strong>Firebase Cloud Firestore</strong>. Ces règles garantissent que seul le propriétaire d'un compte peut lire ou modifier ses propres données privées.</p>

          <h2>5. Vos droits (Suppression des données)</h2>
          <p>Vous disposez d'un contrôle total sur vos données :</p>
          <ul>
            <li><strong>Suppression du compte :</strong> Vous pouvez demander la suppression de votre compte depuis l'application.</li>
            <li><strong>Droit à l'oubli :</strong> La suppression d'un compte entraîne l'effacement automatique de votre profil, pseudonyme, scores au classement et historiques d'exercices.</li>
          </ul>

          <h2>6. Publicité et Cookies</h2>
          <p>Google AdMob peut utiliser des identifiants publicitaires. Vous pouvez gérer ces préférences dans les réglages système de votre appareil (Android/iOS).</p>

          <h2>7. Contact</h2>
          <p>Pour toute question concernant vos données personnelles, contactez-nous à : <a href="mailto:anirouddh@gmail.com">anirouddh@gmail.com</a>.</p>
        </div>
      </article>
    </div>
  );
}
