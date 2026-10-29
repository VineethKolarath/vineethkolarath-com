"use client";

// The photo grid on an album page, with a full-screen viewer.
// Click a photo to open it. Use the arrow buttons, the arrow keys
// or a swipe to move between photos. Press Esc or the close button to exit.

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type GridPhoto = { src: string; alt: string; caption?: string };

type Props = {
  photos: GridPhoto[];
};

export default function PhotoGrid({ photos }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchX = useRef<number | null>(null);
  const lastOpened = useRef<number>(0);

  const count = photos.length;
  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % count)),
    [count],
  );
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + count) % count)),
    [count],
  );

  // Keyboard, page scroll lock and focus while the viewer is open.
  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close, next, prev]);

  // When the viewer closes, return focus to the photo that opened it.
  useEffect(() => {
    if (open === null) thumbRefs.current[lastOpened.current]?.focus({ preventScroll: true });
  }, [open]);

  const openAt = (i: number) => {
    lastOpened.current = i;
    setOpen(i);
  };

  const current = open === null ? null : photos[open];

  return (
    <>
      <ul className="mt-8 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,17rem),1fr))] gap-6 p-0">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              ref={(el) => {
                thumbRefs.current[i] = el;
              }}
              onClick={() => openAt(i)}
              aria-label={`Open photo ${i + 1} of ${count} in full screen`}
              className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-[3px] bg-[linear-gradient(135deg,#3b4a6b,#1a2030)] p-0"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </button>
            {photo.caption ? <p className="meta mt-2">{photo.caption}</p> : null}
          </li>
        ))}
      </ul>

      {current && open !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${open + 1} of ${count}`}
          className="fixed inset-0 z-50 flex flex-col bg-[#121212]/95 text-[#fbfaf7]"
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (dx > 50) prev();
            else if (dx < -50) next();
            touchX.current = null;
          }}
        >
          <div className="flex items-center justify-between px-4 py-3 font-sans text-sm">
            <span>
              {open + 1} / {count}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-4 ring-1 ring-inset ring-[#fbfaf7]/40 hover:ring-[#fbfaf7]"
            >
              Close
            </button>
          </div>

          <div className="relative min-h-0 flex-1" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />

            {count > 1 ? (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#121212]/60 text-xl ring-1 ring-inset ring-[#fbfaf7]/40 hover:ring-[#fbfaf7]"
                >
                  &#8249;
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#121212]/60 text-xl ring-1 ring-inset ring-[#fbfaf7]/40 hover:ring-[#fbfaf7]"
                >
                  &#8250;
                </button>
              </>
            ) : null}
          </div>

          <p className="m-0 min-h-12 px-4 py-3 text-center font-sans text-sm text-[#fbfaf7]/80">
            {current.caption ?? ""}
          </p>
        </div>
      ) : null}
    </>
  );
}