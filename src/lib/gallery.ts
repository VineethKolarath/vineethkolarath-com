// Photos for the Gallery.
//
// How to add an album:
// 1. Put the photos in public/gallery/<album-slug>/
// 2. Add an album below. The "src" path starts with /gallery/
//
// Rule: add a photo only when you have written consent.
// For students under 18, the consent must come from a parent or guardian.

export type Photo = {
  src: string; // for example "/gallery/kannur-2026-10-25/photo-1.jpg"
  alt: string; // describe the photo in one short sentence
  caption?: string;
};

export type Album = {
  slug: string;
  title: string;
  date: string; // shown as DD-MM-YYYY
  place?: string;
  description?: string;
  photos: Photo[];
};

// Newest first. No albums yet.
export const albums: Album[] = [];

export function getAlbum(slug: string): Album | undefined {
  return albums.find((a) => a.slug === slug);
}

// The latest photos across all albums, for the home page.
export function latestPhotos(count: number): (Photo & { album: string })[] {
  return albums
    .flatMap((a) => a.photos.map((p) => ({ ...p, album: a.slug })))
    .slice(0, count);
}