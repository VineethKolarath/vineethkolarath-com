import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Bench Notes",
  description:
    "Short notes from the workbench. What I am building, testing and learning.",
};

export default function BenchNotesPage() {
  const notes = getAllNotes();

  return (
    <main id="main">
      <PageHeader
        eyebrow="Bench Notes"
        title="Notes from the workbench"
        intro="Short notes on what I am building, testing and learning. Each note is small. Each note has one idea."
      />

      <section className="band">
        <div className="frame">
          {notes.length === 0 ? (
            <div
              className="rounded-lg border border-dashed border-[var(--rule)] p-8"
            >
              <p className="meta">Coming soon</p>
              <p className="mt-2">
                The first note is on its way. Check back soon.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
              {notes.map((note) => (
                <li key={note.slug} className="py-6">
                  <p className="meta">
                    {note.date}
                    {note.topic ? ` \u00b7 ${note.topic}` : ""}
                  </p>
                  <h2 className="mt-1 text-2xl">
                    <Link
                      href={`/bench-notes/${note.slug}`}
                      className="link"
                    >
                      {note.title}
                    </Link>
                  </h2>
                  {note.excerpt ? (
                    <p className="mt-2 text-[var(--soft)]">{note.excerpt}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}