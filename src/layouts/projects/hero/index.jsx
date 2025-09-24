import React from "react";
import styles from "./index.module.css";

/**
 * @param {{
 *  title: string,
 *  alt?: string,
 *  description?: string,
 *  pageData: {
 *    client?: string,
 *    location?: string,
 *    value?: string,
 *    duration?: string,
 *    completed?: string,
 *    highlights?: string[],
 *    stats?: { label: string, value: string }[],
 *    heroImage?: string
 *  }
 * }} props
 */
export default function Hero({ title, alt = "", description = "", pageData = {} }) {
  const {
    client,
    location,
    value,
    duration,
    completed,
    highlights = [],
    stats = [],
    heroImage
  } = pageData || {};

  return (
    <>
        <div className={styles.titleHead}>
         <h1 className={styles.title}>
            {title}
        </h1>
        </div>
    
        <section className={styles.hero}>
            <div className={styles.grid}>
                <div className={styles.copy}>
                {description && <p className={styles.desc}>{description}</p>}

                <div className={styles.meta}>
                    {client && <span className={styles.pill}>Client: {client}</span>}
                    {location && <span className={styles.pill}>Location: {location}</span>}
                    {value && <span className={styles.pill}>Value: {value}</span>}
                    {duration && <span className={styles.pill}>Programme: {duration}</span>}
                    {completed && <span className={styles.pill}>Completed: {completed}</span>}
                </div>

                {highlights?.length > 0 && (
                    <ul className={styles.highlights}>
                    {highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                    </ul>
                )}

                {stats?.length > 0 && (
                    <div className={styles.stats}>
                    {stats.map((s, i) => (
                        <div key={i} className={styles.stat}>
                        <div className={styles.statLabel}>{s.label}</div>
                        <div className={styles.statValue}>{s.value}</div>
                        </div>
                    ))}
                    </div>
                )}
                </div>

                {heroImage && (
                <div className={styles.media}>
                    <img
                    src={heroImage}
                    alt={alt}
                    loading="eager"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 560px"
                    />
                </div>
                )}
            </div>
        </section>
    </>
  );
}
