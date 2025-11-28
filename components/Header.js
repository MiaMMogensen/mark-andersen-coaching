"use client"; // Mark as client component

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  // Get current pathname to highlight active link
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/img/logo-sort.png"
          alt="Mark Andersen Coaching"
          width={120}
          height={40}
          className={styles.logo}
        />
      </Link>

      {/* Burger toggle (ren CSS) */}
      <input type="checkbox" id="nav-toggle" className={styles.navToggle} />
      <label htmlFor="nav-toggle" className={styles.burger}>
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className={styles.navLinks}>
        <Link
          href="tips"
          className={`${styles.navLink} ${
            pathname === "/tips" ? styles.active : ""
          }`}
        >
          Tips og råd
        </Link>
        <Link
          href="/opskrifter"
          className={`${styles.navLink} ${
            pathname === "/opskrifter" ? styles.active : ""
          }`}
        >
          Opskrifter
        </Link>
        <Link
          href="/coaching"
          className={`${styles.navLink} ${
            pathname === "/coaching" ? styles.active : ""
          }`}
        >
          Coachingforløb
        </Link>
        <Link
          href="/anmeldelser"
          className={`${styles.navLink} ${
            pathname === "/anmeldelser" ? styles.active : ""
          }`}
        >
          Anmeldelser
        </Link>
        <Link
          href="/booking"
          className={`${styles.navLink} ${styles.booking} ${
            pathname === "/booking" ? styles.active : ""
          }`}
        >
          Booking
        </Link>
      </div>
    </nav>
  );
}
