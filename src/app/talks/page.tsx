import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/home/Newsletter";
import { talks, talkPlace, type Talk } from "@/lib/talks";

export const metadata: Metadata = {
  title: "Talks",
  description: "Upcoming and past talks by Vineeth K Kolarath.",
};

function TalkList({ items }: { items: Talk[] }) {
  return (
    <ol className="m-0 list-none border-t border-rule p-0">
      {items.map((t) => (
        <li
          key={t.slug}
          className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-x-5 gap-y-1 border-b border-rule py-6 min-[900px]:grid-cols-[6rem_minmax(0,1fr)_auto] min-[900px]:items-center"
        >
          <div className="font-sans leading-[1.1]">
            <b className="block font-serif text-[1.875rem] font-medium">{t.day}</b>
            <span className="text-xs uppercase tracking-[0.1em] text-soft">{t.monthYear}</span>
          </div>

          <div>
            <h3 className="mb-[0.3rem] mt-0 text-[1.375rem] font-medium leading-[1.25]">
              <Link
                href={`/talks/${t.slug}`}
                className="text-ink no-underline hover:underline hover:decoration-gold hover:decoration-2"
              >
                {t.title}
              </Link>
            </h3>
            <p className="m-0 text-base text-soft">{talkPlace(t)}</p>
          </div>

          <Link
            href={`/talks/${t.slug}`}
            className="link col-start-2 font-sans text-[0.9375rem] font-medium min-[900px]:col-start-3"
          >
            Details &rarr;
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function TalksPage() {
  const upcoming = talks.filter((t) => t.upcoming);
  const past = talks.filter((t) => !t.upcoming);

  return (
    <main id="main">
      <PageHeader eyebrow="Talks" title="Where I speak" />

      <div className="pb-[clamp(3rem,8vw,5rem)] pt-[clamp(2rem,6vw,4rem)]">
        <div className="frame">
          <h2 className="mb-5 mt-0 text-[clamp(1.5rem,1.25rem+1vw,1.875rem)] font-medium leading-[1.2]">
            Upcoming
          </h2>
          {upcoming.length > 0 ? (
            <TalkList items={upcoming} />
          ) : (
            <p className="m-0 text-soft">No talks are scheduled right now.</p>
          )}

          {past.length > 0 ? (
            <>
              <h2 className="mb-5 mt-14 text-[clamp(1.5rem,1.25rem+1vw,1.875rem)] font-medium leading-[1.2]">
                Past
              </h2>
              <TalkList items={past} />
            </>
          ) : null}

          <div className="mt-14 border border-rule border-t-[3px] border-t-gold p-[clamp(1.5rem,4vw,2.25rem)]">
            <p className="eyebrow">Invite me to speak</p>
            <p className="mb-5 mt-0 max-w-[48ch] text-soft">
              I speak to students, teachers and young founders, in person across Kerala or online.
            </p>
            <Link href="/speak" className="btn btn-ink">
              Send an invitation
            </Link>
          </div>
        </div>
      </div>

      <Newsletter />
    </main>
  );
}