import Link from "next/link";

type Session = {
  tag: string;
  title: string;
  text: string;
  meta: string;
  cta: string;
  href: string;
  free: boolean;
};

const sessions: Session[] = [
  {
    tag: "Free \u00b7 Online",
    title: "10-Minute Intro Call",
    text: "A short call on anything related to technology, mentorship or start-ups. Bring your question.",
    meta: "Google Meet \u00b7 IST \u00b7 Limited slots each week",
    cta: "Book 10 minutes",
    href: "/sessions/intro-call",
    free: true,
  },
  {
    tag: "Online",
    title: "30-Minute Session",
    text: "A focused conversation on your project, idea or start-up, with time to go deeper.",
    meta: "Google Meet \u00b7 IST",
    cta: "Request a quote",
    href: "/sessions/quote?type=30-minute",
    free: false,
  },
  {
    tag: "In person",
    title: "Coffee Table Discussion",
    text: "A one-hour conversation over coffee. Unhurried, with more time if you need it.",
    meta: "By request and confirmation",
    cta: "Request a quote",
    href: "/sessions/quote?type=coffee-table",
    free: false,
  },
];

export default function Sessions() {
  return (
    <section className="band band-surface" id="sessions" aria-labelledby="sessions-h">
      <div className="frame">
        <div className="sec-head">
          <div>
            <p className="eyebrow">Sessions</p>
            <h2 id="sessions-h">Talk to me, one to one</h2>
            <p>Every session is one to one, and always with me. Start with a free call.</p>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,19rem),1fr))] gap-6">
          {sessions.map((s) => (
            <article
              key={s.title}
              className={
                "flex flex-col border border-rule border-t-[3px] bg-paper p-[clamp(1.5rem,4vw,2rem)] " +
                (s.free ? "border-t-gold" : "border-t-ink")
              }
            >
              <p className="eyebrow mb-4">{s.tag}</p>
              <h3 className="mb-[0.6rem] mt-0 text-[clamp(1.5rem,1.25rem+0.9vw,1.875rem)] font-medium leading-[1.15]">
                {s.title}
              </h3>
              <p className="mb-4 mt-0 text-soft">{s.text}</p>
              <p className="meta mb-6 mt-0">{s.meta}</p>
              <Link
                href={s.href}
                className={"btn mt-auto self-start " + (s.free ? "btn-ink" : "btn-outline")}
              >
                {s.cta}
              </Link>
            </article>
          ))}
        </div>

        <p className="mb-0 mt-7 font-sans text-sm text-soft">
          A quote request is answered automatically by email, with the details and the next step.
        </p>
      </div>
    </section>
  );
}