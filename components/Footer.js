import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerLeft} aria-label="Footer menu">
        <p>Menu</p>
        <Link href="/tips">Tips og råd</Link>
        <Link href="/opskrifter">Opskrifter</Link>
        <Link href="/coaching">Coachingforløb</Link>
        <Link href="/anmeldelser">Anmeldelser</Link>
        <Link href="/booking">Booking</Link>
      </nav>

      <div className={styles.footerMiddle}>
        <Link href="/" aria-label="Til forsiden Mark Andersen Coaching">
          <Image
            src="/img/logo-hvid.png"
            alt="Mark Andersen Coaching"
            width={300}
            height={100}
            className={styles.logo}
          />
        </Link>

        <div className={styles.footerSocials} aria-label="Sociale medier">
          <Link
            href="https://www.facebook.com/profile.php?id=100063817801945"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Åbn Mark Andersen Coaching på Facebook i en ny fane"
          >
            <Image
              src="/img/facebook.png"
              alt=""
              aria-hidden="true"
              width={45}
              height={45}
              className={styles.socialIcon}
            />
          </Link>

          <Link
            href="https://www.instagram.com/markandersenn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Åbn Mark Andersen Coaching på Instagram i en ny fane"
          >
            <Image
              src="/img/instagram.png"
              alt=""
              aria-hidden="true"
              width={45}
              height={45}
              className={styles.socialIcon}
            />
          </Link>
        </div>
      </div>

      <div className={styles.footerRight}>
        <p>©2025 Mark Andersen Coaching</p>
      </div>
    </footer>
  );
}
