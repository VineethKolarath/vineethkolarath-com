import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/home/Newsletter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vineeth K Kolarath mentors students, makers, and aspiring founders across Kerala and India.",
};

const fields = ["Autonomous systems", "Edge AI", "Smart grids", "Thinking Machines"];

const approach = [
  { title: "Hands-on learning", text: "We learn by building real things." },
  { title: "Critical thinking", text: "We question the idea before we build it." },
  { title: "Experimentation", text: "We test, learn from the results, and try again." },
  { title: "Clear communication", text: "We explain the work in plain words." },
];

const together = [
  {
    title: "Mentorship",
    text: "Turn an idea into a working project.",
    href: "/mentorship",
  },
  {
    title: "Sessions",
    text: "One-to-one conversations, online and in person.",
    href: "/sessions",
  },
  {
    title: "Round Tables",
    text: "Small in-person meetups for students and makers.",
    href: "/round-tables",
  },
  {
    title: "Invite me to speak",
    text: "Talks and workshops at your college, school or organisation.",
    href: "/speak",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader eyebrow="About" title="Vineeth K Kolarath" intro="Mentor, teacher and engineer." />

      <section className="pb-[clamp(2.5rem,6vw,4rem)] pt-[clamp(2rem,6vw,4rem)]">
        <div className="frame">
          <div className="max-w-[66ch]">
            <p className="mb-6 mt-0 text-[clamp(1.25rem,1.05rem+0.8vw,1.625rem)] leading-[1.5]">
              I mentor students, makers, and aspiring founders across Kerala and India, helping
              them turn ideas into working projects. From identifying problems and learning new
              technologies to building prototypes and solving technical challenges, I guide them
              through the process of making things work.
            </p>
            <p className="m-0">
              My approach is rooted in hands-on learning, critical thinking, experimentation, and
              clear communication. Here, I share my experiences in mentoring, teaching, building,
              and learning.
            </p>
          </div>
        </div>
      </section>

      <section className="band band-surface" aria-labelledby="fields-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Fields</p>
              <h2 id="fields-h">What I work on</h2>
            </div>
          </div>
          <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
            {fields.map((f) => (
              <li
                key={f}
                className="rounded-full px-5 py-[0.55rem] font-sans text-base font-medium text-ink ring-1 ring-inset ring-soft"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band" aria-labelledby="approach-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Approach</p>
              <h2 id="approach-h">How I work</h2>
            </div>
          </div>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-6 border-t border-rule p-0 pt-6">
            {approach.map((a, i) => (
              <li key={a.title}>
                <span
                  aria-hidden="true"
                  className="mb-2 block font-sans text-[0.8125rem] font-semibold tracking-[0.1em] text-gold-ink"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-[0.35rem] mt-0 text-[1.375rem] font-medium leading-[1.25]">
                  {a.title}
                </h3>
                <p className="m-0 text-soft">{a.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band-surface" aria-labelledby="together-h">
        <div className="frame">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Work with me</p>
              <h2 id="together-h">Ways to connect</h2>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-6">
            {together.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="block border border-rule border-t-[3px] border-t-ink bg-paper p-6 text-ink no-underline hover:border-t-gold"
              >
                <h3 className="mb-2 mt-0 text-[1.375rem] font-medium leading-[1.25]">{t.title}</h3>
                <p className="m-0 text-soft">{t.text}</p>
              </Link>
            ))}
          </div>

          <p className="mb-0 mt-10 font-sans text-[0.9375rem] text-soft">
            {site.location} &middot; {site.credential}
          </p>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}