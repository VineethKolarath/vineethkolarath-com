import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";

export const instant = false;

// Pages that are planned but not built yet.
const pages: Record<string, { eyebrow: string; title: string; text: string }> = {
  sessions: {
    eyebrow: "Sessions",
    title: "Sessions",
    text: "One-to-one conversations, online and in person. This section is being prepared.",
  },
  "sessions/intro-call": {
    eyebrow: "Sessions",
    title: "10-Minute Intro Call",
    text: "Booking opens soon.",
  },
  "sessions/quote": {
    eyebrow: "Sessions",
    title: "Request a quote",
    text: "Quote requests open soon.",
  },
  "coffee-table": {
    eyebrow: "Sessions",
    title: "Coffee Table Discussion",
    text: "Quote requests open soon.",
  },
  "round-tables": {
    eyebrow: "Round Tables",
    title: "Round Tables",
    text: "Small in-person meetups for students and makers. Dates will be announced here.",
  },
  webinars: {
    eyebrow: "Webinars",
    title: "Webinars",
    text: "Live online sessions on one topic. Dates will be announced here.",
  },
  mentorship: {
    eyebrow: "Mentorship",
    title: "Mentorship",
    text: "Applications open soon.",
  },
  speak: {
    eyebrow: "Invite me to speak",
    title: "Invite me to speak",
    text: "The invitation form opens soon.",
  },
  "speak/kit": {
    eyebrow: "Invite me to speak",
    title: "Speaker kit",
    text: "The kit will be available here soon.",
  },
  account: {
    eyebrow: "Account",
    title: "Account",
    text: "Sign-in opens soon.",
  },
};

type Props = {
  params: Promise<{ path: string[] }>;
};

export function generateStaticParams() {
  return Object.keys(pages).map((key) => ({ path: key.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params;
  const page = pages[path.join("/")];
  return page ? { title: page.title } : {};
}

export default async function OpeningSoonPage({ params }: Props) {
  const { path } = await params;
  const page = pages[path.join("/")];
  if (!page) notFound();

  return (
    <main id="main">
      <PageHeader eyebrow={page.eyebrow} title={page.title} intro={page.text} />

      <div className="pb-[clamp(3rem,8vw,5rem)] pt-[clamp(2rem,6vw,4rem)]">
        <div className="frame">
          <p className="eyebrow">Opening soon</p>
          <p className="mb-6 mt-0 max-w-[48ch] text-soft">
            Subscribe to hear when this opens.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/#subscribe" className="btn btn-gold">
              Get notified
            </Link>
            <Link href="/" className="btn btn-outline">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}