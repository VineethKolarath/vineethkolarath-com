import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getRoundTables } from "@/lib/roundtables";

export const metadata: Metadata = {
  title: "Round Tables",
  description:
    "Small in-person tables with five chairs at most. Bring a rough idea or a question and work on it together.",
};

const h2 = "mt-10 text-2xl";
const list = "mt-3 list-disc space-y-2 pl-6";

export default function RoundTablesPage() {
  const all = getRoundTables();
  const upcoming = all.filter((r) => r.status === "upcoming");
  const past = all.filter((r) => r.status === "past");

  return (
    <main id="main">
      <PageHeader
        eyebrow="Round Tables"
        title="A small table. Five chairs."
        intro="You bring a rough idea or a question. We work on it together, one step at a time."
      />

      <section className="band">
        <div className="frame">
          <div className="prose-body max-w-[42rem]">
            <h2 className="mt-0 text-2xl">How a Round Table works</h2>
            <ul className={list}>
              <li>There are five chairs at most. The table stays small on purpose.</li>
              <li>Each person gets time to talk about their own idea or question.</li>
              <li>There are two separate tables: Class 1 to 12, and College and above.</li>
              <li>
                A parent or teacher may come with a student. They do not take a chair.
              </li>
              <li>
                I email the details to you once I confirm your chair. If something changes, I
                tell you by email.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="frame">
          <h2 className="mt-0 text-2xl">Coming up</h2>

          {upcoming.length === 0 ? (
            <p className="mt-3 max-w-[42rem]">
              No Round Table is announced right now. To hear when the next one is set,{" "}
              <Link href="/#subscribe">use Get notified</Link>.
            </p>
          ) : (
            <ul className="mt-6 grid list-none gap-6 p-0 [grid-template-columns:repeat(auto-fill,minmax(min(100%,19rem),1fr))]">
              {upcoming.map((r) => (
                <li
                  key={r.slug}
                  className="border-t-[3px] border-t-ink bg-surface p-6 font-sans text-[0.9375rem] text-soft"
                >
                  <p className="meta m-0">{r.track}</p>
                  <h3 className="mb-3 mt-2 font-serif text-xl font-medium text-ink">
                    {r.title}
                  </h3>
                  <p className="m-0">
                    <time dateTime={r.iso}>{r.date}</time>, {r.time}
                  </p>
                  <p className="m-0">{r.venue}</p>
                  <p className="m-0">
                    {r.length}. {r.chairs} chairs.
                  </p>
                  <Link
                    href={`/round-tables/${r.slug}`}
                    className="mt-5 inline-flex min-h-11 items-center rounded-full px-5 font-medium text-ink no-underline ring-1 ring-inset ring-ink hover:ring-2"
                  >
                    Book a chair
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {past.length > 0 ? (
            <>
              <h2 className={h2}>Past Round Tables</h2>
              <ul className={list + " max-w-[42rem]"}>
                {past.map((r) => (
                  <li key={r.slug}>
                    <time dateTime={r.iso}>{r.date}</time>: {r.title}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <p className="mt-10 max-w-[42rem]">
            Read how cancelling works on{" "}
            <Link href="/refunds">Cancellation and Refunds</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}