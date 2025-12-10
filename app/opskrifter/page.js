"use client";

import { useState, useMemo, useEffect } from "react";
import recipesData from "@/data/opskrifter.json";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const [favorites, setFavorites] = useState([]);
  const [hasLoadedFavorites, setHasLoadedFavorites] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("recipeFavorites");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch (err) {
      console.error("Kunne ikke læse favoritter fra localStorage", err);
    } finally {
      setHasLoadedFavorites(true);
    }
  }, []);

  useEffect(() => {
    if (!hasLoadedFavorites) return;
    try {
      window.localStorage.setItem("recipeFavorites", JSON.stringify(favorites));
    } catch (err) {
      console.error("Kunne ikke gemme favoritter i localStorage", err);
    }
  }, [favorites, hasLoadedFavorites]);

  const toggleFavorite = (slug) => {
    setFavorites((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const filteredRecipes = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return recipesData.filter((recipe) => {
      const matchesCategory =
        !activeCategory || recipe.category === activeCategory;

      if (!q) return matchesCategory;

      const textFields = [
        recipe.title || "",
        recipe.caption || "",
        recipe.description || "",
      ].map((text) => text.toLowerCase());

      const ingredients = Array.isArray(recipe.ingredients)
        ? recipe.ingredients
        : [];

      const matchesSearch =
        textFields.some((text) => text.includes(q)) ||
        ingredients.some(
          (ingredient) =>
            typeof ingredient === "string" &&
            ingredient.toLowerCase().includes(q)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const favoriteRecipes = useMemo(
    () => recipesData.filter((recipe) => favorites.includes(recipe.slug)),
    [favorites]
  );

  const scrollToFavorites = () => {
    const el = document.getElementById("favorites-section");
    const heading = document.getElementById("favorites-heading");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    if (heading) {
      heading.focus();
    }
  };

  return (
    <>
      <button
        type="button"
        className={styles.favoritesFab}
        onClick={scrollToFavorites}
        aria-label="Gå til dine favoritter"
      >
        <Image
          src="/img/heart-outline.png"
          alt=""
          width={24}
          height={24}
          aria-hidden="true"
        />
      </button>

      <main className={styles.page} aria-labelledby="recipes-page-heading">
        <section className={styles.recipesHeader}>
          <h1 id="recipes-page-heading">
            Find opskrifter til sund og lækker mad
          </h1>

          <form
            className={styles.searchWrapper}
            role="search"
            aria-label="Søg i opskrifter"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.searchBar}>
              <label htmlFor="recipes-search" className={styles.visuallyHidden}>
                Søg efter en opskrift eller skriv en ingrediens
              </label>
              <input
                id="recipes-search"
                type="text"
                placeholder="Søg efter en opskrift eller skriv en ingrediens"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className={styles.searchIconButton}
                aria-label="Udfør søgning"
              >
                <Image
                  src="/img/search.png"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
              </button>
            </div>
          </form>

          <div
            className={styles.categoryButtons}
            aria-label="Filtrér opskrifter efter måltidstype"
          >
            <button
              type="button"
              onClick={() => setActiveCategory("Morgenmad")}
              className={`${styles.categoryButton} ${
                activeCategory === "Morgenmad"
                  ? styles.categoryButtonActive
                  : ""
              }`}
              aria-pressed={activeCategory === "Morgenmad"}
            >
              <div className={styles.categoryImageWrapper}>
                <Image
                  src="/img/morgenmad.png"
                  alt=""
                  width={150}
                  height={150}
                  aria-hidden="true"
                />
              </div>
              <span>Morgenmad</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("Bagværk")}
              className={`${styles.categoryButton} ${
                activeCategory === "Bagværk" ? styles.categoryButtonActive : ""
              }`}
              aria-pressed={activeCategory === "Bagværk"}
            >
              <div className={styles.categoryImageWrapper}>
                <Image
                  src="/img/bagvaerk.png"
                  alt=""
                  width={150}
                  height={150}
                  aria-hidden="true"
                />
              </div>
              <span>Bagværk</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("Aftensmad")}
              className={`${styles.categoryButton} ${
                activeCategory === "Aftensmad"
                  ? styles.categoryButtonActive
                  : ""
              }`}
              aria-pressed={activeCategory === "Aftensmad"}
            >
              <div className={styles.categoryImageWrapper}>
                <Image
                  src="/img/aftensmad.png"
                  alt=""
                  width={150}
                  height={150}
                  aria-hidden="true"
                />
              </div>
              <span>Aftensmad</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("Frokost")}
              className={`${styles.categoryButton} ${
                activeCategory === "Frokost" ? styles.categoryButtonActive : ""
              }`}
              aria-pressed={activeCategory === "Frokost"}
            >
              <div className={styles.categoryImageWrapper}>
                <Image
                  src="/img/frokost.png"
                  alt=""
                  width={150}
                  height={150}
                  aria-hidden="true"
                />
              </div>
              <span>Frokost</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("Salat")}
              className={`${styles.categoryButton} ${
                activeCategory === "Salat" ? styles.categoryButtonActive : ""
              }`}
              aria-pressed={activeCategory === "Salat"}
            >
              <div className={styles.categoryImageWrapper}>
                <Image
                  src="/img/salat.png"
                  alt=""
                  width={150}
                  height={150}
                  aria-hidden="true"
                />
              </div>
              <span>Salat</span>
            </button>
          </div>

          {activeCategory && (
            <button
              type="button"
              className={styles.resetFilter}
              onClick={() => setActiveCategory("")}
            >
              Vis alle opskrifter
            </button>
          )}
        </section>

        <section className={styles.grid} aria-labelledby="recipes-list-heading">
          <h2 id="recipes-list-heading" className={styles.visuallyHidden}>
            Opskrifter
          </h2>

          {filteredRecipes.map((recipe) => {
            const isFavorite = favorites.includes(recipe.slug);

            return (
              <article key={recipe.slug} className={styles.card}>
                <div className={styles.cardImageWrapper}>
                  <Link
                    href={`/opskrifter/${recipe.slug}`}
                    className={styles.cardLink}
                    aria-label={`${recipe.title} – se opskriften`}
                  >
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      width={381}
                      height={289}
                      className={styles.image}
                    />

                    <span className={styles.mealTypeBadge}>
                      {recipe.category}
                    </span>

                    <h3>{recipe.title}</h3>
                    <span className={styles.readMore}>Se opskrift</span>
                  </Link>

                  <button
                    type="button"
                    className={`${styles.favoriteButton} ${
                      isFavorite ? styles.favoriteButtonActive : ""
                    }`}
                    onClick={() => toggleFavorite(recipe.slug)}
                    aria-pressed={isFavorite}
                    aria-label={
                      isFavorite
                        ? "Fjern opskrift fra favoritter"
                        : "Tilføj opskrift til favoritter"
                    }
                  >
                    <Image
                      src={
                        isFavorite
                          ? "/img/heart-filled.png"
                          : "/img/heart-outline.png"
                      }
                      alt=""
                      width={20}
                      height={20}
                      className={styles.favoriteIcon}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            );
          })}

          {filteredRecipes.length === 0 && (
            <p className={styles.noResults}>
              Ingen opskrifter matcher din søgning eller valgte kategori.
            </p>
          )}
        </section>

        <section
          id="favorites-section"
          className={styles.favoritesSection}
          aria-labelledby="favorites-heading"
        >
          <h2
            id="favorites-heading"
            className={styles.favoritesHeading}
            tabIndex="-1"
          >
            Dine favoritter
          </h2>

          {favoriteRecipes.length === 0 ? (
            <p className={styles.noFavoritesText}>
              Du har ingen favoritter endnu. Tryk på hjertet på en opskrift for
              at gemme den.
            </p>
          ) : (
            <div className={styles.grid}>
              {favoriteRecipes.map((recipe) => {
                const isFavorite = favorites.includes(recipe.slug);

                return (
                  <article key={recipe.slug} className={styles.card}>
                    <div className={styles.cardImageWrapper}>
                      <Link
                        href={`/opskrifter/${recipe.slug}`}
                        className={styles.cardLink}
                        aria-label={`${recipe.title} – se opskriften`}
                      >
                        <Image
                          src={recipe.image}
                          alt={recipe.title}
                          width={381}
                          height={289}
                          className={styles.image}
                        />

                        <span className={styles.mealTypeBadge}>
                          {recipe.category}
                        </span>

                        <h3>{recipe.title}</h3>
                        <span className={styles.readMore}>Se opskrift</span>
                      </Link>

                      <button
                        type="button"
                        className={`${styles.favoriteButton} ${
                          isFavorite ? styles.favoriteButtonActive : ""
                        }`}
                        onClick={() => toggleFavorite(recipe.slug)}
                        aria-pressed={isFavorite}
                        aria-label={
                          isFavorite
                            ? "Fjern opskrift fra favoritter"
                            : "Tilføj opskrift til favoritter"
                        }
                      >
                        <Image
                          src={
                            isFavorite
                              ? "/img/heart-filled.png"
                              : "/img/heart-outline.png"
                          }
                          alt=""
                          width={46}
                          height={46}
                          className={styles.favoriteIcon}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
