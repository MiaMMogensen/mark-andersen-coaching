import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.heroWrapper}>
          <Image
            src="/img/hero.png"
            alt="Mark Andersen Coaching"
            width={1500}
            height={600}
            className={styles.heroImg}
          />

          <div className={styles.heroContent}>
            <h1>
              Sundhed der holder, <br />
              uden forbud og quickfixes
            </h1>
            <p>
              Jeg hjælper dig med at få styr på kost, træning og hverdagsvaner
              på en måde, der passer til dit liv.
            </p>
            <Link href="booking" className={styles.bookCta}>
              Book en gratis samtale
            </Link>
          </div>
        </div>
      </main>

      <section className={styles.infoSection}>
        <div className={styles.infoItem}>
          <h2>100+</h2>
          <p>Succesfulde forløb</p>
        </div>

        <div className={styles.infoDivider} />

        <div className={styles.infoItem}>
          <h2>80+</h2>
          <p>Tilfredse klienter</p>
        </div>

        <div className={styles.infoDivider} />

        <div className={styles.infoItem}>
          <h2>100%</h2>
          <p>Klienttilfredshed</p>
        </div>

        <div className={styles.infoDivider} />

        <div className={styles.infoItem}>
          <h2>10+</h2>
          <p>Års erfaring</p>
        </div>
      </section>
    </div>
  );
}
