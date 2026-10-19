import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Newsletter from "@/components/home/Newsletter";
import { papers, getPaper } from "@/lib/research";
import { site } from "@/lib/site";

export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return papers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper) return {};

  return {
    title: paper.title,
    description: paper.summary,
  };
}

export default async function PaperPage({ params }: Props) {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper) notFound();

  return (
    <main id="main">
      <header className="pb-[clamp(1.5rem,4vw,2.5rem)] pt-[clamp(3rem,8vw,6rem)]">
        <div className="frame">
          <p className="mb-6 mt-0 font-sans text-sm text-soft">
            <Link href="/research" className="link">
              Research
            </Link>{" "}
            &nbsp;/&nbsp; {paper.kind}
          </p>
          <h1 className="mb-5 mt-0 max-w-[18ch] text-[clamp(2.5rem,1.3rem+5.5vw,5.25rem)] font-medium leading-none tracking-[-0.03em]">
            {paper.title}
          </h1>
          <p className="meta m-0 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>{paper.kind}</span>
            <span aria-hidden="true" className="size-[3px] rounded-full bg-soft" />
            <span>{paper.status}</span>
            <span aria-hidden="true" className="size-[3px] rounded-full bg-soft" />
            <span>{site.name}</span>
          </p>
        </div>
      </header>

      <div className="kasavu" aria-hidden="true" />

      <div className="pb-[clamp(3rem,8vw,5rem)] pt-[clamp(2rem,6vw,4rem)]">
        <div className="frame">
          <div className="mx-auto max-w-[66ch]">
            <p className="eyebrow">Abstract</p>
            {paper.abstract.map((para, i) => (
              <p
                key={i}
                className={
                  "mb-[1.4em] mt-0 " +
                  (i === 0 ? "text-[1.15em] leading-[1.5]" : "")
                }
              >
                {para}
              </p>
            ))}

            <h2 className="mb-4 mt-12 text-[clamp(1.5rem,1.25rem+1vw,1.875rem)] font-medium leading-[1.2] tracking-[-0.01em]">
              What the paper covers
            </h2>
            <ul className="m-0 list-none border-t border-rule p-0">
              {paper.contents.map((c) => (
                <li key={c} className="border-b border-rule py-4">
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              {paper.pdfUrl ? (
                <a href={paper.pdfUrl} className="btn btn-gold">
                  Download the paper
                </a>
              ) : (
                <Link href="/#subscribe" className="btn btn-gold">
                  Notify me when it is published
                </Link>
              )}
              <Link href="/research" className="btn btn-outline">
                All research
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </main>
  );
}