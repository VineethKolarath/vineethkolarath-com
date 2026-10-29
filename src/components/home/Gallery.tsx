import Link from "next/link";
import AlbumCover from "@/components/gallery/AlbumCover";
import { albums } from "@/lib/gallery";

// Rule: show a photo only when you have written consent.
// For students under 18, the consent must come from a parent or guardian,
// or from the school or organiser who arranged the event.

export default function Gallery() {
  const latest = albums.filter((a) => a.photos.length > 0).slice(0, 3);
  const single = latest.length === 1 ? latest[0] : null;

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

        {latest.length === 0 ? (
          <div className="border border-rule border-t-[3px] border-t-rule p-[clamp(1.5rem,4vw,2.5rem)]">
            <p className="eyebrow">In preparation</p>
            <h3 className="mb-3 mt-0 text-[clamp(1.375rem,1.15rem+0.8vw,1.625rem)] font-medium leading-[1.2]">
              Photos will appear here
            </h3>
            <p className="m-0 max-w-[48ch] text-soft">
              Pictures from workshops, talks and projects will be added after each event.
            </p>
          </div>
        ) : single ? (
          // One album: a wide feature card.
          <Link
            href={`/gallery/${single.slug}`}
            className="group grid items-center gap-6 text-ink no-underline min-[760px]:grid-cols-2 min-[760px]:gap-10"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] bg-[linear-gradient(135deg,#3b4a6b,#1a2030)]">
              <AlbumCover photos={single.photos} sizes="(min-width: 760px) 50vw, 100vw" />
            </div>
            <div>
              <p className="meta m-0">
                {single.date}
                {single.place ? ` \u00b7 ${single.place}` : ""}
              </p>
              <h3 className="mb-3 mt-2 text-[clamp(1.5rem,1.2rem+1.2vw,2.125rem)] font-medium leading-[1.15] group-hover:underline">
                {single.title}
              </h3>
              {single.description ? (
                <p className="mb-4 mt-0 max-w-[48ch] text-soft">{single.description}</p>
              ) : null}
              <p className="meta m-0">
                {single.photos.length} {single.photos.length === 1 ? "photo" : "photos"}
                {" \u00b7 "}
                <span className="link">Open the album &rarr;</span>
              </p>
            </div>
          </Link>
        ) : (
          // Two or three albums: a row of cards.
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,17rem),1fr))] gap-7 p-0">
            {latest.map((album, i) => (
              <li key={album.slug}>
                <Link href={`/gallery/${album.slug}`} className="group block text-ink no-underline">
                  <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-[3px] bg-[linear-gradient(135deg,#3b4a6b,#1a2030)]">
                    <AlbumCover
                      photos={album.photos}
                      sizes="(min-width: 760px) 33vw, 100vw"
                      offset={i * 900}
                    />
                  </div>
                  <p className="meta m-0">
                    {album.date}
                    {album.place ? ` \u00b7 ${album.place}` : ""}
                  </p>
                  <h3 className="mb-0 mt-1 text-xl font-medium group-hover:underline">
                    {album.title}
                  </h3>
                  <p className="meta mb-0 mt-1">
                    {album.photos.length} {album.photos.length === 1 ? "photo" : "photos"}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}