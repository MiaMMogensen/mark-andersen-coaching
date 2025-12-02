import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function CoachingPage() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.heroWrapper} aria-labelledby="hero-heading">
          <Image
            src="/img/coaching-hero.png"
            alt="Mark Andersen står og træner med en klient. Tekst: Coaching der skaber resultater - og varer ved."
            width={1500}
            height={600}
            className={styles.heroImg}
            priority
          />

          <div className={styles.heroContent}>
            <h1 id="hero-heading">
              Coaching der skaber resultater <br /> - og varer ved
            </h1>
            <p>
              Vægttab, vaner og træning uden restriktioner, regler eller
              perfektion. Et forløb der passer til dit liv - også når det roder.
            </p>
            <Link href="/booking" className={styles.bookCta}>
              Book en gratis samtale
            </Link>
          </div>
        </section>

        <section className={styles.courseInfoSection}>
          <h2>Det får du i et forløb</h2>
          <p>
            Du får ikke en plan, du skal “passe ind i” – du får et forløb, der
            tilpasser sig dig med:
          </p>

          <div className={styles.courseGrid}>
            <div className={styles.courseCard} role="group">
              <Image
                src="/img/course-icon1.png"
                alt=""
                aria-hidden="true"
                width={80}
                height={80}
                className={styles.courseIcon}
              />
              <h3>Personlig plan til din hverdag</h3>
              <p>
                En realistisk plan, der passer til dit arbejde, din familie og
                dit liv – ikke omvendt.
              </p>
            </div>

            <div className={styles.courseCard} role="group">
              <Image
                src="/img/course-icon2.png"
                alt=""
                aria-hidden="true"
                width={80}
                height={80}
                className={styles.courseIcon}
              />
              <h3>Vanecoaching i dybden</h3>
              <p>
                Vi arbejder med dine rutiner, mønstre og adfærd, så du kan skabe
                varige ændringer.
              </p>
            </div>

            <div className={styles.courseCard} role="group">
              <Image
                src="/img/course-icon3.png"
                alt=""
                aria-hidden="true"
                width={80}
                height={80}
                className={styles.courseIcon}
              />
              <h3>Kostvejledning uden forbud</h3>
              <p>
                Ingen regler eller forbud – kun simple principper, der gør det
                let at spise dig mæt og i mål.
              </p>
            </div>

            <div className={styles.courseCard} role="group">
              <Image
                src="/img/course-icon4.png"
                alt=""
                aria-hidden="true"
                width={80}
                height={80}
                className={styles.courseIcon}
              />
              <h3>Styrketræningsplan, der passer til dig</h3>
              <p>
                Programmer tilpasset dit niveau, dine skader og dine mål – så du
                føler dig stærkere uge for uge.
              </p>
            </div>

            <div className={styles.courseCard} role="group">
              <Image
                src="/img/course-icon5.png"
                alt=""
                aria-hidden="true"
                width={80}
                height={80}
                className={styles.courseIcon}
              />
              <h3>Videoopkald + løbende sparring</h3>
              <p>
                Fast kontakt hver uge, så du hele tiden ved præcis, hvad næste
                skridt er.
              </p>
            </div>

            <div className={styles.courseCard} role="group">
              <Image
                src="/img/course-icon6.png"
                alt=""
                aria-hidden="true"
                width={80}
                height={80}
                className={styles.courseIcon}
              />
              <h3>Værktøjer du kan bruge resten af livet</h3>
              <p>
                Du lærer at forstå dig selv, dine vaner og din krop – og
                resultaterne varer ved.
              </p>
            </div>
          </div>
        </section>

        <section
          className={styles.courseSection}
          aria-labelledby="course-section-heading"
        >
          <h2 id="course-section-heading">Sådan fungerer et forløb</h2>
          <div className={styles.courseItem}>
            <Image
              src="/img/1.png"
              alt=""
              aria-hidden="true"
              width={25}
              height={23}
            />
            <h3>Gratis samtale</h3>
          </div>
          <p>
            Vi taler om dine mål, udfordringer og hvad der holder dig tilbage
          </p>

          <div className={styles.courseItem}>
            <Image
              src="/img/2.png"
              alt=""
              aria-hidden="true"
              width={25}
              height={23}
            />
            <h3>Vi lægger en plan sammen</h3>
          </div>
          <p>Planen bygges ud fra din hverdag, dine vaner og dine behov</p>

          <div className={styles.courseItem}>
            <Image
              src="/img/3.png"
              alt=""
              aria-hidden="true"
              width={25}
              height={23}
            />
            <h3>Løbende coaching og sparring</h3>
          </div>
          <p>Du får støtte, feedback og justeringer uge efter uge</p>

          <div className={styles.courseItem}>
            <Image
              src="/img/4.png"
              alt=""
              aria-hidden="true"
              width={25}
              height={23}
            />
            <h3>Resultater - og vaner, der varer ved</h3>
          </div>
          <p>
            Målet er ikke et hurtigt vægttab, men en fremtid hvor du kan stå
            stærkt på egen hånd
          </p>
        </section>

        <section aria-labelledby="er-det-for-dig-heading">
          <div className={styles.listSection}>
            <div>
              <h2 id="er-det-for-dig-heading">Forløbet er for dig der:</h2>
              <div className={styles.listItemsLeft}>
                <Image
                  src="/img/checkmark.png"
                  alt=""
                  aria-hidden="true"
                  width={15}
                  height={10}
                />
                <p>Har prøvet mange kure uden varige resultater</p>
              </div>
              <div className={styles.listItemsLeft}>
                <Image
                  src="/img/checkmark.png"
                  alt=""
                  aria-hidden="true"
                  width={15}
                  height={10}
                />
                <p>Har en travl hverdag med arbejde og familie</p>
              </div>
              <div className={styles.listItemsLeft}>
                <Image
                  src="/img/checkmark.png"
                  alt=""
                  aria-hidden="true"
                  width={15}
                  height={10}
                />
                <p>Mangler struktur og støtte</p>
              </div>
              <div className={styles.listItemsLeft}>
                <Image
                  src="/img/checkmark.png"
                  alt=""
                  aria-hidden="true"
                  width={15}
                  height={10}
                />
                <p>Spiser på følelser eller i perioder “falder af”</p>
              </div>
              <div className={styles.listItemsLeft}>
                <Image
                  src="/img/checkmark.png"
                  alt=""
                  aria-hidden="true"
                  width={15}
                  height={10}
                />
                <p>Har svært ved at holde motivationen</p>
              </div>
              <div className={styles.listItemsLeft}>
                <Image
                  src="/img/checkmark.png"
                  alt=""
                  aria-hidden="true"
                  width={15}
                  height={10}
                />
                <p>Ønsker et vægttab, der faktisk holder</p>
              </div>
            </div>
            <div>
              <h2>Det er ikke for dig der:</h2>
              <div className={styles.listItemsRight}>
                <Image
                  src="/img/kryds.png"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
                <p>Søger quickfixes</p>
              </div>
              <div className={styles.listItemsRight}>
                <Image
                  src="/img/kryds.png"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
                <p>Vil have strikse madplaner</p>
              </div>
              <div className={styles.listItemsRight}>
                <Image
                  src="/img/kryds.png"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
                <p>Ønsker ekstrem vægtnedgang på kort tid</p>
              </div>
            </div>
          </div>
          <h2 className={styles.listSectionSubtitle}>
            Mine forløb er til dig, der ønsker en realistisk og holdbar måde at
            tabe dig på - især hvis du har prøvet mange kure, kæmper med vaner
            eller har en travl hverdag.
          </h2>
        </section>

        <section
          className={styles.infoSection}
          aria-label="Nøgletal om mine forløb"
        >
          <div className={styles.infoItem}>
            <h2>300+</h2>
            <p>Hjulpet med vægttab</p>
          </div>

          <div className={styles.infoDivider} aria-hidden="true" />

          <div className={styles.infoItem}>
            <h2>10+</h2>
            <p>Års erfaring</p>
          </div>

          <div className={styles.infoDivider} aria-hidden="true" />

          <div className={styles.infoItem}>
            <h2>95%</h2>
            <p>Fuldfører deres forløb</p>
          </div>

          <div className={styles.infoDivider} aria-hidden="true" />

          <div className={styles.infoItem}>
            <h2>1:1</h2>
            <p>Kontakt hver uge</p>
          </div>
        </section>

        <section className={styles.forYouSection}>
          <div className={styles.forYouSectionLeft}>
            <h2>Lyder det som noget for dig?</h2>
            <p>
              Lyder det som noget for dig, så klik på knappen nedenfor for at
              booke en uforpligtende samtale vedrørende personlig træning eller
              vægttabscoaching.
            </p>
            <h3 className={styles.forYouSectionBold}>
              Jeg glæder mig til at høre fra dig!
            </h3>

            <Link href="/booking" className={styles.bookCtaBottom}>
              Book en gratis samtale
            </Link>
          </div>

          <div className={styles.forYouSectionImg}>
            <Image
              src="/img/mark2.png"
              alt="Mark Andersen der står og smiler imødekommende"
              width={433}
              height={492}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
