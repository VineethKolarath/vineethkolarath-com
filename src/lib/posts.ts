import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // shown as DD-MM-YYYY
  isoDate: string; // YYYY-MM-DD, used for sorting
  topic: string;
  excerpt: string;
  readingMinutes: number;
};

export type Post = PostMeta & {
  html: string;
};

const postsDir = path.join(process.cwd(), "content", "posts");

// Posts are written with dates like 20-10-2026.
function parseDate(raw: string): { display: string; iso: string } {
  const m = /^(\d{2})-(\d{2})-(\d{4})$/.exec(raw.trim());
  if (m) {
    return { display: raw.trim(), iso: `${m[3]}-${m[2]}-${m[1]}` };
  }
  return { display: raw, iso: raw };
}

function readPost(fileName: string): Post | null {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDir, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  if (data.draft === true) return null;

  const words = content.split(/\s+/).filter(Boolean).length;
  const { display, iso } = parseDate(String(data.date ?? ""));

  return {
    slug,
    title: String(data.title ?? slug),
    date: display,
    isoDate: iso,
    topic: String(data.topic ?? ""),
    excerpt: String(data.excerpt ?? ""),
    readingMinutes: Math.max(1, Math.round(words / 200)),
    html: marked.parse(content, { async: false }) as string,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map(readPost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}