import Link from "next/link";

type Webinar = {
  slug: string;
  day: string;
  monthYear: string;
  title: string;
  time: string;
  free: boolean;
};

// No webinars yet. Add one here when a date and topic are confirmed.
const webinars: Webinar[] = [];

export default function Webinars() {
  return (
    <section className="band band-surface" id="webinars" aria-labelledby="webinars-h">
      <div className="frame">
        <div className="sec-head">
          <div>
            <p className="eyebrow">Webinars</p>
            <h2 id="webinars-h">Learn live, online</h2>
            <p>Small live sessions on one topic. Some are free, some are paid.</p>
          </div>
          <Link href="/webinars" className="more link">
            All webinars &rarr;
          </Link>
        </div>

        {webinars.length === 0 ? (
          <div className="border border-rule border-t-[3px] border-t-rule bg-paper p-[clamp(1.5rem,4vw,2.5rem)]">
            <p className="eyebrow">In preparation</p>
            <h3 className="mb-3 mt-0 text-[clamp(1.375rem,1.15rem+0.8vw,1.625rem)] font-medium leading-[1.2]">
              The first webinar will be announced here
            </h3>
            <p className="mb-5 mt-0 max-w-[48ch] text-soft">
              Date, topic and how to join will appear here. Subscribers hear first.
            </p>
            <Link href="/#subscribe" className="link font-sans text-[0.9375rem] font-medium">
              Get notified &rarr;
            </Link>
          </div>
        ) : (
          <ol className="m-0 list-none border-t border-rule p-0">
            {webinars.map((w) => (
              <li
                key={w.slug}
                className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-x-5 gap-y-1 border-b border-rule py-6 min-[900px]:grid-cols-[6rem_minmax(0,1fr)_auto] min-[900px]:items-center"
              >
                <div className="font-sans leading-[1.1]">
                  <b className="block font-serif text-[1.875rem] font-medium">{w.day}</b>
                  <span className="text-xs uppercase tracking-[0.1em] text-soft">
                    {w.monthYear}
                  </span>
                </div>

                <div>
                  <h3 className="mb-[0.3rem] mt-0 text-[1.375rem] font-medium leading-[1.25]">
                    {w.title}
                  </h3>
                  <p className="m-0 text-base text-soft">
                    <span
                      className={
                        "mr-2 inline-block rounded-full px-[0.55rem] py-[0.15rem] align-middle font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.1em] ring-1 ring-inset " +
                        (w.free ? "text-gold-ink ring-gold-ink" : "text-soft ring-soft")
                      }
                    >
                      {w.free ? "Free" : "Paid"}
                    </span>
                    Online &middot; {w.time}
                  </p>
                </div>

                <Link
                  href={`/webinars/${w.slug}`}
                  className="link col-start-2 font-sans text-[0.9375rem] font-medium min-[900px]:col-start-3"
                >
                  {w.free ? "Register" : "Details"} &rarr;
                </Link>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}