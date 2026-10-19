import Image from "next/image";
import Link from "next/link";
import { albums, latestPhotos } from "@/lib/gallery";

// Rule: show a photo only when you have written consent.
// For students under 18, the consent must come from a parent or guardian.

// The first photo is large, the fourth is wide, and the rest are square.
function tileClass(index: number) {
  if (index === 0) return "min-[760px]:col-span-2 min-[760px]:row-span-2";
  if (index === 3) return "min-[760px]:col-span-2";
  return "";
}

export default function Gallery() {
  const photos = latestPhotos(6);

  return (
    <section className="band" id="gallery" aria-labelledby="gallery-h">
      <div className="frame">
        <div className="sec-head">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 id="gallery-h">Moments from the work</h2>
            <p>Workshops, talks and projects on the bench.</p>
          </div>
          <Link href="/gallery" className="more link">
            Open the gallery &rarr;
          </Link>
        </div>

        {photos.length === 0 ? (
          <div className="border border-rule border-t-[3px] border-t-rule p-[clamp(1.5rem,4vw,2.5rem)]">
            <p className="eyebrow">In preparation</p>
            <h3 className="mb-3 mt-0 text-[clamp(1.375rem,1.15rem+0.8vw,1.625rem)] font-medium leading-[1.2]">
              Photos will appear here
            </h3>
            <p className="m-0 max-w-[48ch] text-soft">
              Pictures from workshops, talks and projects will be added after each event.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 min-[760px]:auto-rows-[clamp(9rem,16vw,14rem)] min-[760px]:grid-cols-4">
              {photos.map((p, i) => (
                <Link
                  key={p.src}
                  href={`/gallery/${p.album}`}
                  className={
                    "relative block aspect-square overflow-hidden rounded-[3px] min-[760px]:aspect-auto " +
                    tileClass(i)
                  }
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 760px) 25vw, 50vw"
                    className="object-cover"
                  />
                </Link>
              ))}
            </div>

            <ul className="m-0 mt-7 flex list-none flex-wrap gap-[0.6rem] p-0" aria-label="Albums">
              {albums.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/gallery/${a.slug}`}
                    className="inline-block rounded-full px-4 py-2 font-sans text-sm font-medium text-ink no-underline ring-1 ring-inset ring-soft hover:ring-2 hover:ring-ink"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}