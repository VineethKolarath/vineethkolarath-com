import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Newsletter from "@/components/home/Newsletter";
import { talks, getTalk } from "@/lib/talks";

export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return talks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const talk = getTalk(slug);
  if (!talk) return {};

  return {
    title: talk.title,
    description: `${talk.title}, ${talk.date}, ${talk.city}.`,
  };
}

export default async function TalkPage({ params }: Props) {
  const { slug } = await params;
  const talk = getTalk(slug);
  if (!talk) notFound();

  const rows: { label: string; value: string }[] = [
    { label: "Date", value: talk.date },
    ...(talk.time ? [{ label: "Time", value: talk.time }] : []),
    ...(talk.venue ? [{ label: "Venue", value: talk.venue }] : []),
    { label: "Place", value: talk.city },
    { label: "Format", value: talk.format },
  ];

  return (
    <main id="main">
      <header className="pb-[clamp(1.5rem,4vw,2.5rem)] pt-[clamp(3rem,8vw,6rem)]">
        <div className="frame">
          <p className="mb-6 mt-0 font-sans text-sm text-soft">
            <Link href="/talks" className="link">
              Talks
            </Link>{" "}
            &nbsp;/&nbsp; {talk.date}
          </p>
          <p className="eyebrow">{talk.upcoming ? "Upcoming talk" : "Past talk"}</p>
          <h1 className="mb-0 mt-0 max-w-[18ch] text-[clamp(2.5rem,1.3rem+5.5vw,5.25rem)] font-medium leading-none tracking-[-0.03em]">
            {talk.title}
          </h1>
        </div>
      </header>

      <div className="kasavu" aria-hidden="true" />

      <div className="pb-[clamp(3rem,8vw,5rem)] pt-[clamp(2rem,6vw,4rem)]">
        <div className="frame">
          <div className="mx-auto max-w-[66ch]">
            <dl className="m-0 border-t border-rule font-sans text-base">
              {rows.map((r) => (
                <div
                  key={r.label}
                  className="grid grid-cols-[6rem_minmax(0,1fr)] gap-4 border-b border-rule py-3"
                >
                  <dt className="text-soft">{r.label}</dt>
                  <dd className="m-0 font-medium">{r.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mb-0 mt-8 text-soft">
              {talk.description || "More details will be added here."}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/talks" className="btn btn-outline">
                All talks
              </Link>
              <Link href="/#subscribe" className="btn btn-gold">
                Hear about future talks
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </main>
  );
}