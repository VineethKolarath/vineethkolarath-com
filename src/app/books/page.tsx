import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import BookCover from "@/components/BookCover";
import Newsletter from "@/components/home/Newsletter";
import { books } from "@/lib/books";

export const metadata: Metadata = {
  title: "Books",
  description: "Books by Vineeth K Kolarath: Walk Before You Drive and Anamika.",
};

export default function BooksPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Books"
        title="Long-form work"
        intro="Two books are in the making. Subscribe to hear when each one is ready."
      />

      <div className="pb-[clamp(3rem,8vw,5rem)] pt-[clamp(2rem,6vw,4rem)]">
        <div className="frame">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-14">
            {books.map((b) => (
              <article
                key={b.slug}
                className="grid grid-cols-1 items-center gap-6 min-[420px]:grid-cols-[minmax(8rem,38%)_minmax(0,1fr)]"
              >
                <Link
                  href={`/books/${b.slug}`}
                  className="block max-w-48 min-[420px]:max-w-none"
                  aria-label={`${b.title}, book page`}
                >
                  <BookCover book={b} />
                </Link>

                <div>
                  <p className="eyebrow mb-2">{b.label} &middot; Coming soon</p>
                  <h2 className="mb-[0.6rem] mt-0 text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] font-medium leading-[1.15]">
                    <Link
                      href={`/books/${b.slug}`}
                      className="text-ink no-underline hover:underline hover:decoration-gold hover:decoration-2"
                    >
                      {b.title}
                    </Link>
                  </h2>
                  <p className="mb-4 mt-0 text-soft">{b.blurb || "Details coming soon."}</p>
                  <Link href="/#subscribe" className="link font-sans text-[0.9375rem] font-medium">
                    Notify me &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </main>
  );
}