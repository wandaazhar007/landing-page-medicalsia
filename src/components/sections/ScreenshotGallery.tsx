"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import { APP_SCREENSHOTS } from "@/data/screenshots";
import styles from "./ScreenshotGallery.module.scss";

export default function ScreenshotGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % APP_SCREENSHOTS.length));
      if (event.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? i : (i - 1 + APP_SCREENSHOTS.length) % APP_SCREENSHOTS.length));
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const active = activeIndex !== null ? APP_SCREENSHOTS[activeIndex] : null;

  const lightbox = active ? (
    <div className={styles.backdrop} onClick={() => setActiveIndex(null)}>
      <button
        type="button"
        className={styles.closeBtn}
        aria-label="Tutup"
        onClick={() => setActiveIndex(null)}
      >
        <X size={22} />
      </button>
      <button
        type="button"
        className={`${styles.navBtn} ${styles.navPrev}`}
        aria-label="Sebelumnya"
        onClick={(event) => {
          event.stopPropagation();
          setActiveIndex((i) => (i === null ? i : (i - 1 + APP_SCREENSHOTS.length) % APP_SCREENSHOTS.length));
        }}
      >
        <ChevronLeft size={24} />
      </button>
      <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
        <Image
          src={`${active.src}?v=${active.version}`}
          alt={active.alt}
          width={1280}
          height={800}
          className={styles.lightboxImage}
        />
        <p className={styles.lightboxCaption}>{active.caption}</p>
      </div>
      <button
        type="button"
        className={`${styles.navBtn} ${styles.navNext}`}
        aria-label="Berikutnya"
        onClick={(event) => {
          event.stopPropagation();
          setActiveIndex((i) => (i === null ? i : (i + 1) % APP_SCREENSHOTS.length));
        }}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  ) : null;

  return (
    <Section>
      <SectionHead title="Lihat Medicalsia Bekerja">
        Bukan mockup kosong — ini tampilan modul yang benar-benar dipakai klinik setiap hari.
      </SectionHead>
      <div className={styles.grid}>
        {APP_SCREENSHOTS.map((shot, index) => (
          <button
            type="button"
            key={shot.id}
            className={styles.thumb}
            onClick={() => setActiveIndex(index)}
            aria-label={`Perbesar screenshot: ${shot.caption}`}
          >
            <div className={styles.browserBar}>
              <span />
              <span />
              <span />
            </div>
            <Image
              src={`${shot.src}?v=${shot.version}`}
              alt={shot.alt}
              width={640}
              height={400}
              className={styles.thumbImage}
            />
            <div className={styles.caption}>{shot.caption}</div>
          </button>
        ))}
      </div>
      {mounted && lightbox ? createPortal(lightbox, document.body) : null}
    </Section>
  );
}
