import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

export default function BenchNotes() {
  // Newest first. The home page shows the latest three.
  const notes = getAllNotes().slice(0, 3);

  return (
    <section className="band" id="bench" aria-labelledby="bench-h">
      <div className="frame">
        <div className="sec-head">
          <div>
            <p className="eyebrow">Bench Notes</p>
            <h2 id="bench-h">From the workbench</h2>
            <p>
              Short notes with photos on what I am building or teaching this week. Rough and
              quick.
            </p>
          </div>
          <Link href="/bench-notes" className="more link">
            All notes &rarr;
          </Link>
        </div>

        {notes.length === 0 ? (
          <div className="border border-rule border-t-[3px] border-t-rule p-[clamp(1.5rem,4vw,2.5rem)]">
            <p className="eyebrow">In preparation</p>
            <h3 className="mb-3 mt-0 text-[clamp(1.375rem,1.15rem+0.8vw,1.625rem)] font-medium leading-[1.2]">
              The first note is on its way
            </h3>
            <p className="mb-5 mt-0 max-w-[48ch] text-soft">
              Photos and short notes from the bench will appear here. Subscribers hear first.
            </p>
            <Link href="/#subscribe" className="link font-sans text-[0.9375rem] font-medium">
              Get notified &rarr;
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,17rem),1fr))] gap-7">
            {notes.map((note) => (
              <article key={note.slug}>
                <div className="relative mb-[0.9rem] aspect-[4/3] overflow-hidden rounded-[3px] bg-[linear-gradient(135deg,#3b4a6b,#1a2030)]">
                  <span className="absolute bottom-[0.65rem] left-[0.7rem] rounded-full bg-black/45 px-[0.55rem] py-[0.2rem] font-sans text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-white">
                    {note.topic ?? "Note"}
                  </span>
                </div>
                <span className="meta mb-[0.3rem] block">{note.date}</span>
                <h3 className="mb-[0.35rem] mt-0 text-xl font-medium leading-[1.25]">
                  <Link
                    href={`/bench-notes/${note.slug}`}
                    className="text-ink no-underline hover:underline hover:decoration-gold hover:decoration-2"
                  >
                    {note.title}
                  </Link>
                </h3>
                {note.excerpt ? (
                  <p className="m-0 text-base text-soft">{note.excerpt}</p>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}