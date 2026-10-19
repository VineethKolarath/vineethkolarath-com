import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Newsletter from "@/components/home/Newsletter";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on mentoring, teaching, building and learning, by Vineeth K Kolarath.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <main id="main">
      <header className="pb-[clamp(1.5rem,4vw,2.5rem)] pt-[clamp(3rem,8vw,6rem)]">
        <div className="frame">
          <p className="eyebrow">Writing</p>
          <h1 className="mb-4 mt-0 text-[clamp(2.5rem,1.3rem+5.5vw,5.25rem)] font-medium leading-none tracking-[-0.03em]">
            Essays
          </h1>
          <p className="m-0 max-w-[48ch] text-soft">
            What I teach, what I build, and what I learn along the way.
          </p>
        </div>
      </header>

      <div className="kasavu" aria-hidden="true" />

      <div className="pb-[clamp(3rem,8vw,5rem)] pt-[clamp(2rem,6vw,4rem)]">
        <div className="frame">
          {posts.length === 0 ? (
            <p className="m-0 text-soft">The first essay is on its way.</p>
          ) : (
            <ol className="m-0 list-none border-t border-rule p-0">
              {posts.map((p) => (
                <li
                  key={p.slug}
                  className={
                    "grid items-start gap-x-10 gap-y-5 border-b border-rule py-8 " +
                    (p.image ? "min-[900px]:grid-cols-[16rem_minmax(0,1fr)]" : "")
                  }
                >
                  {p.image ? (
                    <Link
                      href={`/writing/${p.slug}`}
                      className="block w-full max-w-[20rem] min-[900px]:max-w-none"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <Image
                        src={p.image}
                        alt=""
                        width={512}
                        height={512}
                        sizes="(min-width: 900px) 16rem, 20rem"
                        className="h-auto w-full rounded-[3px]"
                      />
                    </Link>
                  ) : null}

                  <div>
                    <p className="mb-2 mt-0 flex flex-wrap items-center gap-x-3 font-sans text-sm text-soft">
                      <time dateTime={p.isoDate}>{p.date}</time>
                      {p.topic ? (
                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-ink">
                          {p.topic}
                        </span>
                      ) : null}
                    </p>
                    <h2 className="mb-2 mt-0 text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.01em]">
                      <Link
                        href={`/writing/${p.slug}`}
                        className="text-ink no-underline hover:underline hover:decoration-gold hover:decoration-2"
                      >
                        {p.title}
                      </Link>
                    </h2>
                    <p className="mb-2 mt-0 text-soft">{p.excerpt}</p>
                    <span className="meta">{p.readingMinutes} min read</span>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>

      <Newsletter />
    </main>
  );
}