import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAlbum } from "@/lib/gallery";

export const instant = false;

type Props = {
  params: Promise<{ album: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { album: slug } = await params;
  const album = getAlbum(slug);
  if (!album) return { title: "Album not found" };

  return {
    title: album.title,
    description: album.description ?? `Photos from ${album.title}.`,
  };
}

export default async function AlbumPage({ params }: Props) {
  const { album: slug } = await params;
  const album = getAlbum(slug);
  if (!album) notFound();

  return (
    <main id="main">
      <section className="band">
        <div className="frame">
          <p className="meta">
            <Link href="/gallery" className="link">
              Gallery
            </Link>
          </p>

          <header className="mt-4">
            <p className="meta">
              {album.date}
              {album.place ? ` \u00b7 ${album.place}` : ""}
            </p>
            <h1 className="mt-2 text-4xl">{album.title}</h1>
            {album.description ? (
              <p className="mt-4 max-w-[42rem]">{album.description}</p>
            ) : null}
            <div className="kasavu mt-6" />
          </header>

          {album.photos.length === 0 ? (
            <p className="mt-8 text-[var(--soft)]">
              Photos will be added soon.
            </p>
          ) : (
            <ul className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,17rem),1fr))] gap-6">
              {album.photos.map((photo) => (
                <li key={photo.src}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] bg-[linear-gradient(135deg,#3b4a6b,#1a2030)]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {photo.caption ? (
                    <p className="meta mt-2">{photo.caption}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          )}

          <p className="mt-12">
            <Link href="/gallery" className="link">
              ← All albums
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}