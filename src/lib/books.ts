export type Book = {
  slug: string;
  title: string;
  label: string; // for example "First book"
  cover: "navy" | "brown";
  blurb: string; // leave empty until the description is ready
};

export const books: Book[] = [
  {
    slug: "walk-before-you-drive",
    title: "Walk Before You Drive",
    label: "First book",
    cover: "navy",
    blurb: "",
  },
  {
    slug: "anamika",
    title: "Anamika",
    label: "Second book",
    cover: "brown",
    blurb: "",
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}