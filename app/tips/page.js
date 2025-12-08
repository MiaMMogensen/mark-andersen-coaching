"use client";

import { useState, useMemo } from "react";
import tipsData from "@/data/tips.json";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function TipsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredTips = useMemo(() => {
    return tipsData.filter((tip) => {
      const matchesCategory =
        activeCategory === "Alle" || tip.category === activeCategory;

      const q = searchQuery.toLowerCase();
      const matchesSearch =
        tip.title.toLowerCase().includes(q) ||
        tip.excerpt.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className={styles.page} aria-labelledby="tips-page-heading">
      <section className={styles.tipsHeader}>
        <h1 id="tips-page-heading">
          Få tips og råd til kost, træning og vaner
        </h1>

        <form
          className={styles.searchWrapper}
          role="search"
          aria-label="Søg i tips og råd"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.searchBar}>
            <label htmlFor="tips-search" className={styles.visuallyHidden}>
              Søg efter tip eller råd
            </label>
            <input
              id="tips-search"
              type="text"
              placeholder="Søg efter tip eller råd"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className={styles.searchIconButton}
              aria-label="Udfør søgning"
            >
              <Image src="/img/search.png" alt="" width={24} height={24} />
            </button>
          </div>
        </form>

        <div
          className={styles.categoryButtons}
          role="radiogroup"
          aria-label="Filtrér tips efter kategori"
        >
          <button
            type="button"
            onClick={() => setActiveCategory("Kost")}
            className={`${styles.categoryButton} ${
              activeCategory === "Kost" ? styles.categoryButtonActive : ""
            }`}
            role="radio"
            aria-checked={activeCategory === "Kost"}
          >
            <div className={styles.categoryImageWrapper}>
              <Image
                src="/img/kost.png"
                alt=""
                width={150}
                height={150}
                aria-hidden="true"
              />
            </div>
            <span>Kost</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory("Træning")}
            className={`${styles.categoryButton} ${
              activeCategory === "Træning" ? styles.categoryButtonActive : ""
            }`}
            role="radio"
            aria-checked={activeCategory === "Træning"}
          >
            <div className={styles.categoryImageWrapper}>
              <Image
                src="/img/traening.png"
                alt=""
                width={150}
                height={150}
                aria-hidden="true"
              />
            </div>
            <span>Træning</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory("Vaner")}
            className={`${styles.categoryButton} ${
              activeCategory === "Vaner" ? styles.categoryButtonActive : ""
            }`}
            role="radio"
            aria-checked={activeCategory === "Vaner"}
          >
            <div className={styles.categoryImageWrapper}>
              <Image
                src="/img/vaner.png"
                alt=""
                width={150}
                height={150}
                aria-hidden="true"
              />
            </div>
            <span>Vaner</span>
          </button>
        </div>

        {activeCategory !== "Alle" && (
          <button
            type="button"
            className={styles.resetFilter}
            onClick={() => setActiveCategory("Alle")}
          >
            Vis alle kategorier
          </button>
        )}
      </section>

      <section className={styles.grid} aria-labelledby="tips-list-heading">
        <h2 id="tips-list-heading" className={styles.visuallyHidden}>
          Artikler med tips og råd
        </h2>

        {filteredTips.map((tip) => (
          <article key={tip.slug} className={styles.card}>
            <Link
              href={`/tips/${tip.slug}`}
              className={styles.cardLink}
              aria-label={`${tip.title} – læs artiklen`}
            >
              <Image
                src={tip.image}
                alt={tip.title}
                width={381}
                height={289}
                className={styles.image}
              />
              <span className={styles.mealTypeBadge}>{tip.category}</span>
              <h3>{tip.title}</h3>
              <p>{tip.excerpt}</p>
              <span className={styles.readMore}>Læs mere</span>
            </Link>
          </article>
        ))}

        {filteredTips.length === 0 && (
          <p className={styles.noResults}>
            Ingen artikler matcher din søgning eller valgte kategori.
          </p>
        )}
      </section>
    </main>
  );
}
