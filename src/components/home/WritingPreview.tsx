import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function WritingPreview() {
  const posts = getAllPosts();
  const lead = posts[0];
  const others = posts.slice(1, 3);

  return (
    <section className="band band-surface" aria-labelledby="writing-h">
      <div className="frame">
        <div className="sec-head">
          <div>
            <p className="eyebrow">Writing</p>
            <h2 id="writing-h">Latest essays</h2>
          </div>
          <Link href="/writing" className="more link">
            All writing &rarr;
          </Link>
        </div>

        {!lead ? (
          <div className="border border-rule border-t-[3px] border-t-rule p-[clamp(1.5rem,4vw,2.5rem)]">
            <p className="eyebrow">In preparation</p>
            <h3 className="mb-3 mt-0 text-[clamp(1.375rem,1.15rem+0.8vw,1.625rem)] font-medium leading-[1.2]">
              The first essay is on its way
            </h3>
            <Link href="/#subscribe" className="link font-sans text-[0.9375rem] font-medium">
              Get notified &rarr;
            </Link>
          </div>
        ) : (
          <div className="grid gap-9 min-[1100px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] min-[1100px]:gap-12">
            <article>
              <div
                className="relative mb-[1.1rem] aspect-[16/10] overflow-hidden rounded bg-[linear-gradient(135deg,#3b4a6b,#1d2436)] text-white/20"
                aria-hidden="true"
              >
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 480 300">
                  <g fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="90" cy="150" r="36" strokeDasharray="4 6" />
                    <path d="M126 150 H190 L220 120 H280" />
                    <rect x="280" y="95" width="110" height="110" rx="6" />
                    <path d="M390 150 H440" />
                  </g>
                  <circle cx="446" cy="150" r="7" fill="currentColor" />
                </svg>
              </div>

              {lead.topic ? <p className="eyebrow mb-[0.45rem]">{lead.topic}</p> : null}
              <h3 className="mb-2 mt-0 text-[clamp(1.75rem,1.3rem+1.8vw,2.5rem)] font-medium leading-[1.12] tracking-[-0.01em]">
                <Link
                  href={`/writing/${lead.slug}`}
                  className="text-ink no-underline hover:underline hover:decoration-gold hover:decoration-2"
                >
                  {lead.title}
                </Link>
              </h3>
              <p className="mb-[0.6rem] mt-0 text-soft">{lead.excerpt}</p>
              <span className="meta">
                {lead.date} &middot; {lead.readingMinutes} min read
              </span>
            </article>

            {others.length === 0 ? (
              <aside className="flex flex-col justify-center border border-rule border-t-[3px] border-t-rule p-[clamp(1.5rem,4vw,2.25rem)]">
                <p className="eyebrow">In preparation</p>
                <h3 className="mb-3 mt-0 text-[clamp(1.375rem,1.15rem+0.8vw,1.625rem)] font-medium leading-[1.2]">
                  More essays are on the way
                </h3>
                <p className="mb-5 mt-0 text-soft">
                  New writing will appear here as it is published. Subscribers hear first.
                </p>
                <Link href="/#subscribe" className="link font-sans text-[0.9375rem] font-medium">
                  Get notified &rarr;
                </Link>
              </aside>
            ) : (
              <ol className="m-0 flex list-none flex-col border-t border-rule p-0">
                {others.map((p) => (
                  <li key={p.slug} className="border-b border-rule py-6">
                    {p.topic ? <p className="eyebrow mb-[0.45rem]">{p.topic}</p> : null}
                    <h3 className="mb-2 mt-0 text-[clamp(1.375rem,1.15rem+0.8vw,1.625rem)] font-medium leading-[1.2]">
                      <Link
                        href={`/writing/${p.slug}`}
                        className="text-ink no-underline hover:underline hover:decoration-gold hover:decoration-2"
                      >
                        {p.title}
                      </Link>
                    </h3>
                    <span className="meta">
                      {p.date} &middot; {p.readingMinutes} min read
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}
      </div>
    </section>
  );
}