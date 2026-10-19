import Link from "next/link";

const steps = [
  {
    title: "Understand the problem",
    text: "Who faces it, how often, and how do people deal with it today?",
  },
  {
    title: "Build a prototype",
    text: "An early version of the idea that shows how it might work.",
  },
  {
    title: "Test, learn and try again",
    text: "Find what went wrong, make a change, and test again.",
  },
  {
    title: "Explain it clearly",
    text: "Describe the problem and the solution to someone with no technical background.",
  },
];

export default function Mentorship() {
  return (
    <section className="band" id="mentorship" aria-labelledby="mentor-h">
      <div className="frame grid gap-10 min-[980px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] min-[980px]:items-start min-[980px]:gap-20">
        <div>
          <p className="eyebrow" id="mentor-h">
            Mentorship
          </p>
          <blockquote className="mb-6 mt-0 text-[clamp(1.75rem,1.25rem+2.2vw,3rem)] italic leading-[1.15] tracking-[-0.015em]">
            You do not need to have everything figured out before you begin.
          </blockquote>
          <p className="mb-7 mt-0 text-soft">
            I work with students, makers, and first-time founders across Kerala and India, helping
            them turn ideas into working projects.
          </p>
          <Link href="/mentorship" className="btn btn-ink">
            Apply for mentorship
          </Link>
        </div>

        <ol className="m-0 list-none border-t border-rule p-0">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 border-b border-rule py-6"
            >
              <span
                aria-hidden="true"
                className="pt-[0.35rem] font-sans text-[0.8125rem] font-semibold tracking-[0.1em] text-gold-ink"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-[0.35rem] mt-0 text-[1.375rem] font-medium leading-[1.25]">
                  {s.title}
                </h3>
                <p className="m-0 text-soft">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}