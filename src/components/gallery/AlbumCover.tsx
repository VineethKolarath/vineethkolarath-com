"use client";

// The changing thumbnail on each Gallery album card.
// It fades from one photo to the next every few seconds.
// If the visitor has asked their device to reduce motion, it shows the first photo only.

import Image from "next/image";
import { useEffect, useState } from "react";

type CoverPhoto = { src: string; alt: string };

type Props = {
  photos: CoverPhoto[];
  sizes: string;
  interval?: number; // milliseconds between changes
  offset?: number; // extra wait before the first change, so cards do not change together
};

export default function AlbumCover({ photos, sizes, interval = 3500, offset = 0 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    const next = () => setIndex((i) => (i + 1) % photos.length);

    const start = setTimeout(() => {
      next();
      timer = setInterval(next, interval);
    }, interval + offset);

    return () => {
      clearTimeout(start);
      if (timer) clearInterval(timer);
    };
  }, [photos.length, interval, offset]);

  return (
    <>
      {photos.map((p, i) => (
        <Image
          key={p.src}
          src={p.src}
          alt={i === 0 ? p.alt : ""}
          fill
          sizes={sizes}
          className={
            "object-cover transition-opacity duration-1000 ease-in-out " +
            (i === index ? "opacity-100" : "opacity-0")
          }
        />
      ))}
    </>
  );
}