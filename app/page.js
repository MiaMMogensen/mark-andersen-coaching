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

      <section className={styles.markSection}>
        <div className={styles.markSectionLeft}>
          <h1>
            <span className={styles.titleBrown}>Hvem er jeg</span> – og hvordan
            kan jeg hjælpe dig med dit vægttab?
          </h1>

          <div className={styles.textDesktop}>
            <p>
              Mit navn er Mark, og jeg hjælper helt almindelige mennesker med at
              opnå ualmindeligt gode resultater.
            </p>
            <p>
              Jeg er uddannet personlig træner, vanecoach og kostvejleder, med
              vægttab som mit speciale. Gennem årene har jeg hjulpet hundredvis
              af kvinder med at få styr på vægten, uden at skulle leve efter
              stramme kostplaner, forbud eller en urealistisk perfektionisme.
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
          <div className={styles.certficates}>
            <div>
              <Image
                src="/img/weight.png"
                alt="Håndvægt"
                width={80}
                height={80}
                className={styles.certficateImg}
              />
              <p>Personlig træner</p>
            </div>
            <div>
              <Image
                src="/img/apple.png"
                alt="Æble"
                width={80}
                height={80}
                className={styles.certficateImg}
              />
              <p>Kostvejleder</p>
            </div>
            <div>
              <Image
                src="/img/person.png"
                alt="Vanecoach"
                width={80}
                height={80}
                className={styles.certficateImg}
              />
              <p>Vanecoach</p>
            </div>
            <div>
              <Image
                src="/img/badge.png"
                alt="Certificeret"
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

      <section>
        <div className={styles.listSection}>
          <div>
            <h1>Min tilgang bygger på:</h1>
            <div className={styles.listItemsLeft}>
              <Image
                src="/img/checkmark.png"
                alt="Flueben"
                width={15}
                height={10}
              />
              <p>Balance frem for perfektion</p>
            </div>
            <div className={styles.listItemsLeft}>
              <Image
                src="/img/checkmark.png"
                alt="Flueben"
                width={15}
                height={10}
              />
              <p>Struktur og simple vaner</p>
            </div>
            <div className={styles.listItemsLeft}>
              <Image
                src="/img/checkmark.png"
                alt="Flueben"
                width={15}
                height={10}
              />
              <p>Løsninger der holder i hverdagen</p>
            </div>
            <div className={styles.listItemsLeft}>
              <Image
                src="/img/checkmark.png"
                alt="Flueben"
                width={15}
                height={10}
              />
              <p>Ingen forbud eller quickfixes</p>
            </div>
          </div>
          <div>
            <h1>Jeg hjælper ofte mennesker der:</h1>
            <div className={styles.listItemsRight}>
              <Image
                src="/img/person-small.png"
                alt="Flueben"
                width={16}
                height={16}
              />
              <p>Har prøvet mange kure uden varigt resultat</p>
            </div>
            <div className={styles.listItemsRight}>
              <Image
                src="/img/person-small.png"
                alt="Flueben"
                width={16}
                height={16}
              />
              <p>Har en travl hverdag med arbejde og familie</p>
            </div>
            <div className={styles.listItemsRight}>
              <Image
                src="/img/person-small.png"
                alt="Flueben"
                width={16}
                height={16}
              />
              <p>Oplever svingende motivation</p>
            </div>
            <div className={styles.listItemsRight}>
              <Image
                src="/img/person-small.png"
                alt="Flueben"
                width={16}
                height={16}
              />
              <p>Føler frustration eller dårlig samvittighed</p>
            </div>
          </div>
        </div>
        <h2 className={styles.listSectionSubtitle}>
          Mit mål er at gøre vægttab simpelt, overskueligt og muligt i netop din
          hverdag.
        </h2>
      </section>

      <section className={styles.ctaSection}>
        <h1>
          Tag det næste skridt mod dine{" "}
          <span className={styles.titleBrown}> mål</span>, og start din sundere
          hverdag her
        </h1>
        <div className={styles.ctaSectionItems}>
          <div className={styles.ctaItem}>
            <Link href="/opskrifter">
              <Image
                src="/img/recipe-cta.png"
                alt="Find opskrifter"
                width={346}
                height={508}
                className={styles.ctaSectionImg}
              />
            </Link>
            <Link href="/opskrifter">
              <Image
                src="/img/recipe-cta-mobile.png"
                alt="Find opskrifter"
                width={276}
                height={188}
                className={styles.ctaSectionImgMobile}
              />
            </Link>
            <p className={styles.ctaSectionText}>Find opskrifter</p>
          </div>

          <div className={styles.ctaItem}>
            <Link href="/tips">
              <Image
                src="/img/tips-cta.png"
                alt="Få tips og råd"
                width={346}
                height={508}
                className={styles.ctaSectionImg}
              />
            </Link>
            <Link href="/tips">
              <Image
                src="/img/tips-cta-mobile.png"
                alt="Få tips og tåd"
                width={276}
                height={188}
                className={styles.ctaSectionImgMobile}
              />
            </Link>
            <p className={styles.ctaSectionText}>Få tips og råd</p>
          </div>

          <div className={styles.ctaItem}>
            <Link href="/coaching">
              <Image
                src="/img/coaching-cta.png"
                alt="Coachingforløb"
                width={346}
                height={508}
                className={styles.ctaSectionImg}
              />
            </Link>
            <Link href="/coaching">
              <Image
                src="/img/coaching-cta-mobile.png"
                alt="Coachingforløb"
                width={276}
                height={188}
                className={styles.ctaSectionImgMobile}
              />
            </Link>
            <p className={styles.ctaSectionText}>Coachingforløb</p>
          </div>
        </div>
      </section>
    </div>
  );
}
