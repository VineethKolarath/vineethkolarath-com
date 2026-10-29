import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AlbumCover from "@/components/gallery/AlbumCover";
import { albums } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from talks, workshops and meetups. Shared with written consent.",
};

export default function GalleryPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Gallery"
        title="Moments from the work"
        intro="Photos from talks, workshops and meetups. Every photo is shared with written consent."
      />

      <section className="band">
        <div className="frame">
          {albums.length === 0 ? (
            <div className="rounded-lg border border-dashed border-[var(--rule)] p-8">
              <p className="meta">Coming soon</p>
              <p className="mt-2">
                The first album is on its way. Check back soon.
              </p>
            </div>
          ) : (
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,17rem),1fr))] gap-7">
              {albums.map((album, i) => (
                <li key={album.slug}>
                  <Link
                    href={`/gallery/${album.slug}`}
                    className="group block no-underline"
                  >
                    <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-[3px] bg-[linear-gradient(135deg,#3b4a6b,#1a2030)]">
                      {album.photos.length > 0 ? (
                        <AlbumCover
                          photos={album.photos}
                          sizes="(min-width: 768px) 33vw, 100vw"
                          offset={i * 900}
                        />
                      ) : null}
                    </div>
                    <p className="meta">
                      {album.date}
                      {album.place ? ` \u00b7 ${album.place}` : ""}
                    </p>
                    <h2 className="mt-1 text-xl group-hover:underline">{album.title}</h2>
                    <p className="meta mt-1">
                      {album.photos.length}{" "}
                      {album.photos.length === 1 ? "photo" : "photos"}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}