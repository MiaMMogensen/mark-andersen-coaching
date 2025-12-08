"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function FavoriteHeart({ slug, title }) {
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

  if (!slug) return null;

  const isFavorite = favorites.includes(slug);

  const toggleFavorite = () => {
    setFavorites((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  return (
    <button
      type="button"
      className={`${styles.favoriteButton} ${
        isFavorite ? styles.favoriteButtonActive : ""
      }`}
      onClick={toggleFavorite}
      aria-pressed={isFavorite}
      aria-label={
        isFavorite
          ? `Fjern ${title} fra favoritter`
          : `Tilføj ${title} til favoritter`
      }
    >
      <Image
        src={isFavorite ? "/img/heart-filled.png" : "/img/heart-outline.png"}
        alt=""
        width={20}
        height={20}
        className={styles.favoriteIcon}
        aria-hidden="true"
      />
    </button>
  );
}
