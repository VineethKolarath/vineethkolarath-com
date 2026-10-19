import Link from "next/link";
import { getRoundTables, type RoundTable } from "@/lib/roundtables";

const tracks: {
  id: RoundTable["track"];
  tag: string;
  title: string;
  text: string;
}[] = [
  {
    id: "Class 1 to 12",
    tag: "Class 1 to 12",
    title: "Young Makers Round Table",
    text: "For school students. Parents and teachers are welcome to sit in.",
  },
  {
    id: "College and above",
    tag: "College and above",
    title: "Makers and Founders Round Table",
    text: "For college students, makers, early-career engineers and first-time founders.",
  },
];

export default function RoundTables() {
  // Events come from src/lib/roundtables.ts. Add new ones there.
  const events = getRoundTables().filter((e) => e.status === "upcoming");

  return (
    <section className="band" id="roundtables" aria-labelledby="rt-h">
      <div className="frame">
        <div className="sec-head">
          <div>
            <p className="eyebrow">Round Tables</p>
            <h2 id="rt-h">Meet around one table</h2>
            <p>
              In-person meetups for students and makers. Bring a rough idea, and we think it
              through together. A small table of five, booked in advance.
            </p>
          </div>
          <Link href="/round-tables" className="more link">
            All round tables &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-6">
          {tracks.map((t) => {
            const next = events.find((e) => e.track === t.id);

            return (
              <article
                key={t.id}
                className={
                  "flex flex-col border border-rule border-t-[3px] bg-surface p-[clamp(1.5rem,4vw,2.25rem)] " +
                  (t.id === "Class 1 to 12" ? "border-t-gold" : "border-t-ink")
                }
              >
                <p className="eyebrow mb-4">{t.tag}</p>
                <h3 className="mb-[0.4rem] mt-0 text-[clamp(1.5rem,1.25rem+0.9vw,1.875rem)] font-medium leading-[1.15]">
                  {t.title}
                </h3>
                <p className="mb-5 mt-0 text-soft">{t.text}</p>

                {next ? (
                  <>
                    <dl className="mb-6 mt-0 border-t border-rule font-sans text-[0.9375rem]">
                      <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 border-b border-rule py-[0.7rem]">
                        <dt className="text-soft">Date</dt>
                        <dd className="m-0 font-medium">
                          <time dateTime={next.iso}>{next.date}</time>
                        </dd>
                      </div>
                      <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 border-b border-rule py-[0.7rem]">
                        <dt className="text-soft">Time</dt>
                        <dd className="m-0 font-medium">{next.time}</dd>
                      </div>
                      <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 border-b border-rule py-[0.7rem]">
                        <dt className="text-soft">Venue</dt>
                        <dd className="m-0 font-medium">{next.venue}</dd>
                      </div>
                      <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 border-b border-rule py-[0.7rem]">
                        <dt className="text-soft">Chairs</dt>
                        <dd className="m-0 font-medium">{next.chairs} chairs</dd>
                      </div>
                    </dl>
                    <Link
                      href={`/round-tables/${next.slug}`}
                      className="btn btn-ink mt-auto self-start"
                    >
                      Book a chair
                    </Link>
                  </>
                ) : (
                  <>
                    <p className="mb-6 mt-0 border-t border-rule pt-4 font-sans text-[0.9375rem] font-medium">
                      Next date to be announced.
                    </p>
                    <Link
                      href="/#subscribe"
                      className="link mt-auto self-start font-sans text-[0.9375rem] font-medium"
                    >
                      Get notified &rarr;
                    </Link>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}