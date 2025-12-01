import tipsData from "@/data/tips.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export default async function TipArticlePage({ params }) {
  const { slug } = await params;

  const decodedSlug = decodeURIComponent(slug);

  const article = tipsData.find((tip) => tip.slug === decodedSlug);

  if (!article) {
    notFound();
  }

  const {
    contentTop,
    contentBottom,
    content,
    exampleTitle,
    exampleItems,
    image,
    img,
    title,
  } = article;

  const topParagraphs = Array.isArray(contentTop)
    ? contentTop
    : Array.isArray(content)
    ? content
    : [];

  const bottomParagraphs =
    Array.isArray(contentBottom) && contentTop ? contentBottom : [];

  return (
    <main className={styles.page} aria-labelledby="article-title">
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 id="article-title" className={styles.title}>
            {title}
          </h1>
        </header>

        <section className={styles.content}>
          {topParagraphs.map((paragraph, index) => (
            <p key={`top-${index}`}>{paragraph}</p>
          ))}

          {exampleTitle &&
            Array.isArray(exampleItems) &&
            exampleItems.length > 0 && (
              <section
                className={styles.exampleSection}
                aria-labelledby="example-title"
              >
                <div className={styles.exampleImageWrapper}>
                  <Image
                    src={img || image}
                    alt={`${title} — eksempel illustration`}
                    width={600}
                    height={400}
                    className={styles.exampleImage}
                  />
                </div>

                <div className={styles.exampleText}>
                  <h2 id="example-title">{exampleTitle}</h2>

                  <ul className={styles.exampleList}>
                    {exampleItems.map((item, index) => (
                      <li key={`item-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

          {bottomParagraphs.map((paragraph, index) => (
            <p key={`bottom-${index}`}>{paragraph}</p>
          ))}
        </section>

        <footer className={styles.footer}>
          <Link
            href="/tips"
            className={styles.backLink}
            aria-label="Tilbage til alle tips"
          >
            ← Tilbage til alle tips
          </Link>
        </footer>
      </article>
    </main>
  );
}
