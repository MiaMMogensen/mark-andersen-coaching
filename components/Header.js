"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isOpskrifterPage =
    pathname === "/opskrifter" || pathname.startsWith("/opskrifter/");
  const isTipsPage = pathname === "/tips" || pathname.startsWith("/tips/");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoLink} onClick={handleClose}>
        <Image
          src="/img/logo-sort.png"
          alt="Mark Andersen Coaching"
          width={120}
          height={40}
          className={styles.logo}
        />
      </Link>

      <button
        type="button"
        className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
        onClick={handleToggle}
        aria-label={isOpen ? "Luk menu" : "Åbn menu"}
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`}
      >
        <Link
          href="/coaching"
          className={`${styles.navLink} ${
            pathname === "/coaching" ? styles.active : ""
          }`}
          onClick={handleClose}
        >
          Coachingforløb
        </Link>
        <Link
          href="/opskrifter"
          className={`${styles.navLink} ${
            isOpskrifterPage ? styles.active : ""
          }`}
          onClick={handleClose}
        >
          Opskrifter
        </Link>
        <Link
          href="/tips"
          className={`${styles.navLink} ${isTipsPage ? styles.active : ""}`}
          onClick={handleClose}
        >
          Tips og råd
        </Link>
        <Link
          href="/anmeldelser"
          className={`${styles.navLink} ${
            pathname === "/anmeldelser" ? styles.active : ""
          }`}
          onClick={handleClose}
        >
          Anmeldelser
        </Link>
        <Link
          href="/booking"
          className={`${styles.navLink} ${styles.booking} ${
            pathname === "/booking" ? styles.active : ""
          }`}
          onClick={handleClose}
        >
          Booking
        </Link>
      </div>
    </nav>
  );
}
