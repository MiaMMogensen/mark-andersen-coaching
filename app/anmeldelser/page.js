"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import testimonialsData from "@/data/anmeldelser.json";

export default function TestimonialsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index, e) => {
    e?.preventDefault?.();
    setOpenIndex(index);
  };

  const handleClose = () => setOpenIndex(null);

  const isOpen = openIndex !== null;
  const activeTestimonial = isOpen ? testimonialsData[openIndex] : null;

  return (
    <div className={styles.page}>
      <h1 id="testimonials-heading">Det siger mine klienter</h1>

      <section
        className={styles.testimonials}
        aria-labelledby="testimonials-heading"
      >
        {testimonialsData.map((testimonial, index) => (
          <article key={index} className={styles.testimonialsItem}>
            <div className={styles.testimonialImg}>
              <Image
                src="/img/quote-icon.png"
                alt=""
                aria-hidden="true"
                width={120}
                height={100}
              />
            </div>

            <h2>{testimonial.title}</h2>
            <p>{testimonial.excerpt}</p>
            <p className={styles.name}>{testimonial.name}</p>

            <button
              type="button"
              className={styles.backLink}
              onClick={(e) => handleOpen(index, e)}
              aria-haspopup="dialog"
              aria-expanded={isOpen && openIndex === index}
            >
              Læs hele anmeldelsen
            </button>
          </article>
        ))}
      </section>

      {isOpen && activeTestimonial && (
        <div
          className={styles.overlay}
          onClick={handleClose}
          role="presentation"
        >
          <div
            className={styles.overlayContent}
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonial-dialog-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              type="button"
              onClick={handleClose}
              aria-label="Luk anmeldelse"
            >
              ×
            </button>

            <h2 id="testimonial-dialog-title">{activeTestimonial.title}</h2>
            <p>{activeTestimonial.fullText}</p>
            <p>
              <strong>{activeTestimonial.name}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
