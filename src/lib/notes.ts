import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// Notes live in content/notes as .md files.
// If the folder does not exist yet, there are simply no notes.
const notesDir = path.join(process.cwd(), "content", "notes");

export type NoteMeta = {
  slug: string;
  title: string;
  date: string; // shown as DD-MM-YYYY
  iso: string; // YYYY-MM-DD, used only for sorting
  topic?: string;
  excerpt?: string;
};

export type Note = NoteMeta & {
  html: string;
};

// "20-10-2026" becomes "2026-10-20"
function toISO(date: string): string {
  const [dd, mm, yyyy] = date.split("-");
  return `${yyyy}-${mm}-${dd}`;
}

function readNoteFiles(): string[] {
  if (!fs.existsSync(notesDir)) return [];
  return fs.readdirSync(notesDir).filter((f) => f.endsWith(".md"));
}

export function getAllNotes(): NoteMeta[] {
  const notes: NoteMeta[] = [];

  for (const file of readNoteFiles()) {
    const raw = fs.readFileSync(path.join(notesDir, file), "utf8");
    const { data } = matter(raw);

    if (data.draft === true) continue;

    const date = String(data.date ?? "");
    notes.push({
      slug: file.replace(/\.md$/, ""),
      title: String(data.title ?? "Untitled"),
      date,
      iso: toISO(date),
      topic: data.topic ? String(data.topic) : undefined,
      excerpt: data.excerpt ? String(data.excerpt) : undefined,
    });
  }

  // Newest first
  return notes.sort((a, b) => (a.iso < b.iso ? 1 : -1));
}

export function getNoteBySlug(slug: string): Note | undefined {
  const file = path.join(notesDir, `${slug}.md`);
  if (!fs.existsSync(file)) return undefined;

  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  if (data.draft === true) return undefined;

  const date = String(data.date ?? "");
  return {
    slug,
    title: String(data.title ?? "Untitled"),
    date,
    iso: toISO(date),
    topic: data.topic ? String(data.topic) : undefined,
    excerpt: data.excerpt ? String(data.excerpt) : undefined,
    html: marked.parse(content, { async: false }) as string,
  };
}