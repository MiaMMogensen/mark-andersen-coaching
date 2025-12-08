import recipesData from "@/data/opskrifter.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import FavoriteHeart from "./FavoriteHeart";

export default async function RecipePage({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const recipe = recipesData.find((item) => item.slug === decodedSlug);

  if (!recipe) {
    notFound();
  }

  const {
    title,
    image,
    recipeImage,
    description = "",
    time = "",
    calories = "",
    ingredients = [],
    steps = [],
    bottomText = "",
    category,
    media_url,
  } = recipe;

  const instagramUrl = recipe.instagramUrl || recipe["instagram_url"];

  const ingredientsCount = ingredients.length;

  return (
    <main
      className={styles.page}
      aria-labelledby="recipe-title"
      data-slug={recipe.slug}
    >
      <section
        className={styles.topSection}
        aria-labelledby="recipe-title"
        aria-describedby={description ? "recipe-intro" : undefined}
      >
        <div className={styles.topLeft}>
          <Link
            href="/opskrifter"
            className={styles.backLink}
            aria-label="Tilbage til opskriftsoversigten"
          >
            ← Tilbage
          </Link>

          <header className={styles.header}>
            <div className={styles.titleRow}>
              <h1 id="recipe-title" className={styles.title}>
                {title}
              </h1>
              <FavoriteHeart slug={recipe.slug} title={title} />
            </div>

            {category && <p className={styles.categoryBadge}>{category}</p>}
          </header>

          {description && <p className={styles.intro}>{description}</p>}

          <div
            className={styles.metaRow}
            aria-label="Information om opskriften"
          >
            {time && (
              <div className={styles.metaItem}>
                <span className={styles.metaNumber}>{time}</span>
                <span className={styles.metaLabel}>Minutter</span>
              </div>
            )}

            {calories && (
              <div className={styles.metaItem}>
                <span className={styles.metaNumber}>{calories}</span>
                <span className={styles.metaLabel}>Kalorier pr stk</span>
              </div>
            )}

            {ingredientsCount > 0 && (
              <div className={styles.metaItem}>
                <span className={styles.metaNumber}>{ingredientsCount}</span>
                <span className={styles.metaLabel}>Ingredienser</span>
              </div>
            )}
          </div>
        </div>

        <div className={styles.topRight}>
          <div className={styles.imageFrame}>
            {image && (
              <Image
                src={recipeImage}
                alt={`Billede af ${title}`}
                width={400}
                height={450}
                className={styles.recipeImage}
              />
            )}

            {ingredientsCount > 0 && (
              <aside
                className={styles.ingredientsCard}
                aria-labelledby="ingredients-heading"
              >
                <h2
                  id="ingredients-heading"
                  className={styles.ingredientsHeading}
                >
                  Ingredienser:
                </h2>
                <ul className={styles.ingredientsList}>
                  {ingredients.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </div>
      </section>

      <section
        className={styles.contentSection}
        aria-label="Video og fremgangsmåde for opskriften"
      >
        <div className={styles.videoWrapper}>
          <div className={styles.igCard}>
            <div className={styles.igHeader}>
              <div className={styles.igUser}>
                <Image
                  src="/img/mark-avatar.jpg"
                  alt="Profilbillede af Mark Andersen"
                  width={40}
                  height={40}
                  className={styles.igAvatar}
                />
                <div>
                  <p className={styles.igName}>markandersenn</p>
                  <p className={styles.igFollowers}>56,7K følgere</p>
                </div>
              </div>

              {instagramUrl && (
                <a
                  href="https://www.instagram.com/markandersenn/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.igProfileButton}
                  aria-label="Åbn Mark Andersens Instagram-profil i en ny fane"
                >
                  Vis profil
                </a>
              )}
            </div>

            {media_url && (
              <div className={styles.igVideo}>
                <video
                  controls
                  className={styles.videoElement}
                  preload="metadata"
                  playsInline
                  aria-label={`Video der viser, hvordan man laver ${title}`}
                >
                  <source src={media_url} type="video/mp4" />
                  Din browser understøtter ikke videoafspilning.
                </video>
              </div>
            )}

            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.igFooterLink}
                aria-label="Se opskriftsopslaget på Instagram (åbner i ny fane)"
              >
                Se opslaget på Instagram
              </a>
            )}
          </div>
        </div>

        <div className={styles.steps}>
          <h2>Fremgangsmåde</h2>
          {steps.length > 0 ? (
            <ol className={styles.stepsList}>
              {steps.map((step, i) => (
                <li key={i}>
                  {typeof step === "string" && step}

                  {typeof step === "object" && (
                    <>
                      {step.text}
                      {step.sub && (
                        <ul className={styles.subList}>
                          {step.sub.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <p>Fremgangsmåden er på vej 💬</p>
          )}
        </div>
      </section>

      {bottomText && <p className={styles.bottomText}>{bottomText}</p>}
    </main>
  );
}
