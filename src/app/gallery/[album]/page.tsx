import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PhotoGrid from "@/components/gallery/PhotoGrid";
import { getAlbum } from "@/lib/gallery";

export const instant = false;

type Props = {
  params: Promise<{ album: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { album: slug } = await params;
  const album = getAlbum(slug);
  if (!album) return { title: "Album not found" };

  const description = album.description ?? `Photos from ${album.title}.`;
  const first = album.photos[0];

  return {
    title: album.title,
    description,
    openGraph: {
      title: album.title,
      description,
      ...(first ? { images: [{ url: first.src, alt: first.alt }] } : {}),
    },
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
            <PhotoGrid photos={album.photos} />
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