import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNoteBySlug } from "@/lib/notes";

export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return { title: "Note not found" };

  return {
    title: note.title,
    description: note.excerpt ?? "A short note from the workbench.",
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

  return (
    <main id="main">
      <article className="band">
        <div className="frame">
          <p className="meta">
            <Link href="/bench-notes" className="link">
              Bench Notes
            </Link>
          </p>

          <header className="mt-4">
            <p className="meta">
              {note.date}
              {note.topic ? ` \u00b7 ${note.topic}` : ""}
            </p>
            <h1 className="mt-2 text-4xl">{note.title}</h1>
            <div className="kasavu mt-6" />
          </header>

          <div
            className="prose-body mt-8 max-w-[42rem]"
            dangerouslySetInnerHTML={{ __html: note.html }}
          />

          <p className="mt-12">
            <Link href="/bench-notes" className="link">
              ← All notes
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}