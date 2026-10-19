import Link from "next/link";
import { talks, talkPlace } from "@/lib/talks";

const topics = [
  "From idea to prototype",
  "Edge AI for beginners",
  "Autonomous systems",
  "Thinking Machines",
  "Mentoring young makers",
];

export default function Talks() {
  return (
    <section className="band band-surface" id="talks" aria-labelledby="talks-h">
      <div className="frame">
        <div className="sec-head">
          <div>
            <p className="eyebrow">Talks</p>
            <h2 id="talks-h">Where I speak</h2>
          </div>
          <Link href="/talks" className="more link">
            All talks &rarr;
          </Link>
        </div>

        <ol className="m-0 list-none border-t border-rule p-0">
          {talks.map((t) => (
            <li
              key={t.slug}
              className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-x-5 gap-y-1 border-b border-rule py-6 min-[900px]:grid-cols-[6rem_minmax(0,1fr)_auto] min-[900px]:items-center"
            >
              <div className="font-sans leading-[1.1]">
                <b className="block font-serif text-[1.875rem] font-medium">{t.day}</b>
                <span className="text-xs uppercase tracking-[0.1em] text-soft">
                  {t.monthYear}
                </span>
              </div>

              <div>
                <h3 className="mb-[0.3rem] mt-0 text-[1.375rem] font-medium leading-[1.25]">
                  {t.title}
                </h3>
                <p className="m-0 text-base text-soft">
                  <span
                    className={
                      "mr-2 inline-block rounded-full px-[0.55rem] py-[0.15rem] align-middle font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.1em] ring-1 ring-inset " +
                      (t.upcoming ? "text-gold-ink ring-gold-ink" : "text-soft ring-soft")
                    }
                  >
                    {t.upcoming ? "Upcoming" : "Past"}
                  </span>
                  {talkPlace(t)}
                </p>
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

        {/* Invite me to speak */}
        <div
          id="invite"
          className="night mt-[clamp(2.5rem,6vw,4rem)] grid items-center gap-8 border-t-[3px] border-gold p-[clamp(1.75rem,5vw,3.25rem)] min-[980px]:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] min-[980px]:gap-16"
        >
          <div>
            <p className="eyebrow">Invite me to speak</p>
            <h3 className="mb-3 mt-0 text-[clamp(1.75rem,1.3rem+1.8vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.015em]">
              Hold a talk or workshop at your college, school or organisation
            </h3>
            <p className="mb-6 mt-0 text-night-soft">
              I speak to students, teachers and young founders. In person across Kerala, or online
              from anywhere.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/speak" className="btn btn-gold">
                Send an invitation
              </Link>
              <Link href="/speak/kit" className="btn btn-line">
                Speaker kit
              </Link>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Topics</p>
            <ul className="m-0 mb-5 flex list-none flex-wrap gap-2 p-0">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full px-[0.9rem] py-[0.45rem] font-sans text-sm text-night-ink ring-1 ring-inset ring-night-soft"
                >
                  {topic}
                </li>
              ))}
            </ul>
            <p className="m-0 font-sans text-[0.8125rem] text-night-soft">
              The kit has a short bio, a photo and the talk descriptions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}