import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Anirouddh Maddimchetty | Blog & Portfolio",
  description: "Bienvenue sur mon site personnel, développeur et créateur de The Telugu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(0,0,0,0.1)', marginTop: '4rem' }}>
          <p>© {new Date().getFullYear()} Anirouddh Maddimchetty. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
