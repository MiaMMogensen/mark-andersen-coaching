import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.heroWrapper} aria-labelledby="hero-heading">
          <Image
            src="/img/hero.png"
            alt="Mark Andersen står og træner med en klient. Tekst: Sundhed der holder, uden forbud og quickfixes."
            width={1500}
            height={600}
            className={styles.heroImg}
            priority
          />

          <div className={styles.heroContent}>
            <h1 id="hero-heading">
              Sundhed der holder, <br />
              uden forbud og quickfixes
            </h1>
            <p>
              Jeg hjælper dig med at få styr på kost, træning og hverdagsvaner
              på en måde, der passer til dit liv.
            </p>
            <Link href="/booking" className={styles.bookCta}>
              Book en gratis samtale
            </Link>
          </div>
        </section>

        <section
          className={styles.infoSection}
          aria-label="Nøgletal om mine forløb"
        >
          <div className={styles.infoItem}>
            <h2>100+</h2>
            <p>Succesfulde forløb</p>
          </div>

          <div className={styles.infoDivider} aria-hidden="true" />

          <div className={styles.infoItem}>
            <h2>80+</h2>
            <p>Tilfredse klienter</p>
          </div>

          <div className={styles.infoDivider} aria-hidden="true" />

          <div className={styles.infoItem}>
            <h2>100%</h2>
            <p>Klienttilfredshed</p>
          </div>

          <div className={styles.infoDivider} aria-hidden="true" />

          <div className={styles.infoItem}>
            <h2>10+</h2>
            <p>Års erfaring</p>
          </div>
        </section>

        <section
          className={styles.markSection}
          aria-labelledby="om-mark-heading"
        >
          <div className={styles.markSectionLeft}>
            <h2 id="om-mark-heading">
              <span className={styles.titleBrown}>Hvem er jeg</span> – og
              hvordan kan jeg hjælpe dig med dit vægttab?
            </h2>

            <div className={styles.textDesktop}>
              <p>
                Mit navn er Mark, og jeg hjælper helt almindelige mennesker med
                at opnå ualmindeligt gode resultater.
              </p>
              <p>
                Jeg er uddannet personlig træner, vanecoach og kostvejleder, med
                vægttab som mit speciale. Gennem årene har jeg hjulpet
                hundredvis af kvinder med at få styr på vægten, uden at skulle
                leve efter stramme kostplaner, forbud eller en urealistisk
                perfektionisme.
              </p>
              <p>
                Jeg tror ikke på quick fixes. Jeg tror ikke på
                alt-eller-intet-løsninger
              </p>
              <p>
                Jeg tror på hverdagen. På balance. På at skabe løsninger, der
                passer ind i dit liv – også når det hele roder, presser eller
                trækker tænder ud.
              </p>
            </div>
            <div className={styles.textMobile}>
              <p>
                Mit navn er Mark, og jeg er uddannet personlig træner,
                kostvejleder og vanecoach med speciale i vægttab.
              </p>
              <p>
                Jeg hjælper helt almindelige mennesker med at skabe resultater,
                der holder - uden stramme kostplaner, forbud eller
                alt-eller-intet-tilgang.
              </p>
            </div>
            <div className={styles.certficates} aria-label="Certificeringer">
              <div>
                <Image
                  src="/img/weight.png"
                  alt=""
                  aria-hidden="true"
                  width={80}
                  height={80}
                  className={styles.certficateImg}
                />
                <p>Personlig træner</p>
              </div>
              <div>
                <Image
                  src="/img/apple.png"
                  alt=""
                  aria-hidden="true"
                  width={80}
                  height={80}
                  className={styles.certficateImg}
                />
                <p>Kostvejleder</p>
              </div>
              <div>
                <Image
                  src="/img/person.png"
                  alt=""
                  aria-hidden="true"
                  width={80}
                  height={80}
                  className={styles.certficateImg}
                />
                <p>Vanecoach</p>
              </div>
              <div>
                <Image
                  src="/img/badge.png"
                  alt=""
                  aria-hidden="true"
                  width={80}
                  height={80}
                  className={styles.certficateImg}
                />
                <p>Speciale i vægttab</p>
              </div>
            </div>
          </div>
          <Image
            src="/img/mark.png"
            alt="Mark Andersen"
            width={652}
            height={902}
            className={styles.markImg}
          />
        </section>

        <section aria-labelledby="tilgang-heading">
          <div className={styles.listSection}>
            <div>
              <h2 id="tilgang-heading">Min tilgang bygger på:</h2>
              <div className={styles.listItemsLeft}>
                <Image
                  src="/img/checkmark.png"
                  alt=""
                  aria-hidden="true"
                  width={15}
                  height={10}
                />
                <p>Balance frem for perfektion</p>
              </div>
              <div className={styles.listItemsLeft}>
                <Image
                  src="/img/checkmark.png"
                  alt=""
                  aria-hidden="true"
                  width={15}
                  height={10}
                />
                <p>Struktur og simple vaner</p>
              </div>
              <div className={styles.listItemsLeft}>
                <Image
                  src="/img/checkmark.png"
                  alt=""
                  aria-hidden="true"
                  width={15}
                  height={10}
                />
                <p>Løsninger der holder i hverdagen</p>
              </div>
              <div className={styles.listItemsLeft}>
                <Image
                  src="/img/checkmark.png"
                  alt=""
                  aria-hidden="true"
                  width={15}
                  height={10}
                />
                <p>Ingen forbud eller quickfixes</p>
              </div>
            </div>
            <div>
              <h2>Jeg hjælper ofte mennesker der:</h2>
              <div className={styles.listItemsRight}>
                <Image
                  src="/img/person-small.png"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
                <p>Har prøvet mange kure uden varigt resultat</p>
              </div>
              <div className={styles.listItemsRight}>
                <Image
                  src="/img/person-small.png"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
                <p>Har en travl hverdag med arbejde og familie</p>
              </div>
              <div className={styles.listItemsRight}>
                <Image
                  src="/img/person-small.png"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
                <p>Oplever svingende motivation</p>
              </div>
              <div className={styles.listItemsRight}>
                <Image
                  src="/img/person-small.png"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
                <p>Føler frustration eller dårlig samvittighed</p>
              </div>
            </div>
          </div>
          <h2 className={styles.listSectionSubtitle}>
            Mit mål er at gøre vægttab simpelt, overskueligt og muligt i netop
            din hverdag.
          </h2>
        </section>

        <section
          className={styles.ctaSection}
          aria-labelledby="cta-section-heading"
        >
          <h2 id="cta-section-heading">
            Tag det næste skridt mod dine{" "}
            <span className={styles.titleBrown}> mål</span>, og start din
            sundere hverdag her
          </h2>
          <div className={styles.ctaSectionItems}>
            <div className={styles.ctaItem}>
              <Link href="/opskrifter" aria-label="Find Opskrifter">
                <Image
                  src="/img/recipe-cta.png"
                  alt=""
                  aria-hidden="true"
                  width={346}
                  height={508}
                  className={styles.ctaSectionImg}
                />
              </Link>
              <Link href="/opskrifter" aria-label="Find Opskrifter">
                <Image
                  src="/img/recipe-cta-mobile.png"
                  alt=""
                  aria-hidden="true"
                  width={276}
                  height={188}
                  className={styles.ctaSectionImgMobile}
                />
              </Link>
              <p className={styles.ctaSectionText}>Find opskrifter</p>
            </div>

            <div className={styles.ctaItem}>
              <Link href="/tips" aria-label="Få tips og råd">
                <Image
                  src="/img/tips-cta.png"
                  alt=""
                  aria-hidden="true"
                  width={346}
                  height={508}
                  className={styles.ctaSectionImg}
                />
              </Link>
              <Link href="/tips" aria-label="Få tips og råd">
                <Image
                  src="/img/tips-cta-mobile.png"
                  alt=""
                  aria-hidden="true"
                  width={276}
                  height={188}
                  className={styles.ctaSectionImgMobile}
                />
              </Link>
              <p className={styles.ctaSectionText}>Få tips og råd</p>
            </div>

            <div className={styles.ctaItem}>
              <Link href="/coaching" aria-label="Læs om coachingforløb">
                <Image
                  src="/img/coaching-cta.png"
                  alt=""
                  aria-hidden="true"
                  width={346}
                  height={508}
                  className={styles.ctaSectionImg}
                />
              </Link>
              <Link href="/coaching" aria-label="Læs om coachingforløb">
                <Image
                  src="/img/coaching-cta-mobile.png"
                  alt=""
                  aria-hidden="true"
                  width={276}
                  height={188}
                  className={styles.ctaSectionImgMobile}
                />
              </Link>
              <p className={styles.ctaSectionText}>Coachingforløb</p>
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
          <p>Vi snakker om dine mål og udfordringer - helt uforpligtende.</p>
          <div className={styles.courseItem}>
            <Image
              src="/img/2.png"
              alt=""
              aria-hidden="true"
              width={25}
              height={23}
            />
            <h3>Personlig plan</h3>
          </div>
          <p>
            Du får en realistisk plan, der passer til dit liv. Ingen forbud,
            ingen ekstrem diæt.
          </p>
          <div className={styles.courseItem}>
            <Image
              src="/img/3.png"
              alt=""
              aria-hidden="true"
              width={25}
              height={23}
            />
            <h3>Opfølgning</h3>
          </div>
          <p>
            Jeg hjælper dig med at holde fast, justerer planen og støtter dig
            løbende.
          </p>
          <h2 className={styles.courseSectionCtaTitle}>
            Klar til at tage det første skridt?
          </h2>

          <div className={styles.mapSection}>
            <p>
              Her finder du mig. Kig forbi og lad os tage den første snak om
              dine mål og muligheder.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2220.1778598670203!2d10.21220997733477!3d56.188603573248685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3e4a4a350955%3A0x668c7d8eb81bead9!2sFrijsenborgvej%205A%2C%208240%20Risskov!5e0!3m2!1sda!2sdk!4v1764681886860!5m2!1sda!2sdk"
              loading="lazy"
              width={600}
              height={450}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            ></iframe>
          </div>

          <Link href="/booking" className={styles.bookCta}>
            Book en gratis samtale
          </Link>
        </section>
      </main>
    </div>
  );
}
