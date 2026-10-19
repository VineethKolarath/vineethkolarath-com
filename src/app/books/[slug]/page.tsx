import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookCover from "@/components/BookCover";
import Newsletter from "@/components/home/Newsletter";
import { books, getBook } from "@/lib/books";

export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return {};

  return {
    title: book.title,
    description: book.blurb || `${book.title}, a book by Vineeth K Kolarath. Coming soon.`,
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  return (
    <main id="main">
      <div className="pb-[clamp(3rem,8vw,5rem)] pt-[clamp(3rem,8vw,6rem)]">
        <div className="frame">
          <p className="mb-8 mt-0 font-sans text-sm text-soft">
            <Link href="/books" className="link">
              Books
            </Link>{" "}
            &nbsp;/&nbsp; {book.title}
          </p>

          <div className="grid items-center gap-10 min-[860px]:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] min-[860px]:gap-20">
            <div className="max-w-64 min-[860px]:max-w-none">
              <BookCover book={book} />
            </div>

            <div>
              <p className="eyebrow">{book.label} &middot; Coming soon</p>
              <h1 className="mb-5 mt-0 text-[clamp(2.25rem,1.2rem+4.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.025em]">
                {book.title}
              </h1>
              <p className="mb-8 mt-0 max-w-[48ch] text-soft">
                {book.blurb || "Details coming soon."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/#subscribe" className="btn btn-gold">
                  Notify me
                </Link>
                <Link href="/books" className="btn btn-outline">
                  All books
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="kasavu" aria-hidden="true" />
      <Newsletter />
    </main>
  );
}