// Photos for the Gallery.
//
// How to add an album:
// 1. Put the photos in public/gallery/<album-slug>/
//    (or reuse photos already on the site, such as public/images/talks/)
// 2. Add an album below. The "src" path starts with "/".
//
// Rule: add a photo only when you have written consent.
// For students under 18, the consent must come from a parent or guardian,
// or from the school or organiser who arranged the event.

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

// Newest first.
export const albums: Album[] = [
  {
    slug: "walk-before-you-drive-2026-10-25",
    title: "Walk Before You Drive",
    date: "25-10-2026",
    place: "Municipal High School, Kannur, Kerala",
    description:
      "A talk for selected students at the district level Deshabhimani Aksharamuttam Quiz, on using AI as a mentor, and not as an answer delivery machine.",
    photos: [
      {
        src: "/images/talks/kannur-2026-10-25-1.jpg",
        alt: "Vineeth K Kolarath, holding a microphone, speaks with students seated at long tables.",
        caption: "Talking with students about using AI as a mentor.",
      },
      {
        src: "/images/talks/kannur-2026-10-25-2.jpg",
        alt: "Vineeth K Kolarath and V P Balagangadharan seated together on the stage, smiling.",
        caption: "With former ISRO scientist V P Balagangadharan on the stage.",
      },
    ],
  },
];

export function getAlbum(slug: string): Album | undefined {
  return albums.find((a) => a.slug === slug);
}

// The latest photos across all albums, for the home page.
export function latestPhotos(count: number): (Photo & { album: string })[] {
  return albums
    .flatMap((a) => a.photos.map((p) => ({ ...p, album: a.slug })))
    .slice(0, count);
}