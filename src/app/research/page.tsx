import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/home/Newsletter";
import { papers } from "@/lib/research";

export const metadata: Metadata = {
  title: "Research",
  description: "Frameworks and papers by Vineeth K Kolarath.",
};

export default function ResearchPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Research"
        title="Frameworks and papers"
        intro="Longer, formal work, with a version history and a citation."
      />

      <div className="pb-[clamp(3rem,8vw,5rem)] pt-[clamp(2rem,6vw,4rem)]">
        <div className="frame">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-6">
            {papers.map((p) => (
              <article
                key={p.slug}
                className="flex flex-col border border-rule border-t-[3px] border-t-ink bg-paper p-[clamp(1.5rem,4vw,2.25rem)]"
              >
                <p className="eyebrow mb-4">
                  {p.kind} &middot; {p.status}
                </p>
                <h2 className="mb-3 mt-0 text-[clamp(1.5rem,1.25rem+1vw,2rem)] font-medium leading-[1.15]">
                  <Link
                    href={`/research/${p.slug}`}
                    className="text-ink no-underline hover:underline hover:decoration-gold hover:decoration-2"
                  >
                    {p.title}
                  </Link>
                </h2>
                <p className="mb-6 mt-0 text-soft">{p.summary}</p>
                <div className="mt-auto flex flex-wrap items-center justify-end gap-x-4 gap-y-2 font-sans text-[0.9375rem]">
                  <Link href={`/research/${p.slug}`} className="link font-medium">
                    Read more &rarr;
                  </Link>
                </div>
              </article>
            ))}

            <article className="flex flex-col border border-rule border-t-[3px] border-t-rule bg-transparent p-[clamp(1.5rem,4vw,2.25rem)]">
              <p className="eyebrow mb-4">In preparation</p>
              <h2 className="mb-3 mt-0 text-[clamp(1.5rem,1.25rem+1vw,2rem)] font-medium leading-[1.15]">
                More papers are on the way
              </h2>
              <p className="mb-6 mt-0 text-soft">
                New research will appear here as it is ready. Subscribers hear first.
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[0.9375rem]">
                <Link href="/#subscribe" className="link font-medium">
                  Get notified &rarr;
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>

      <Newsletter />
    </main>
  );
}