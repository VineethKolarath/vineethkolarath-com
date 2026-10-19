import { getAllPosts } from "@/lib/posts";
import { getAllNotes } from "@/lib/notes";

const siteUrl = "https://vineethkolarath.com";

type Item = {
  title: string;
  link: string;
  iso: string; // YYYY-MM-DD
  description: string;
};

// Makes text safe to place inside XML.
function esc(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// "2026-10-20" becomes a date string that feed readers understand (India time).
function toRfc822(iso: string): string {
  return new Date(`${iso}T00:00:00+05:30`).toUTCString();
}

export function GET() {
  const items: Item[] = [
    ...getAllPosts().map((p) => ({
      title: p.title,
      link: `${siteUrl}/writing/${p.slug}`,
      iso: p.isoDate,
      description: p.excerpt,
    })),
    ...getAllNotes().map((n) => ({
      title: n.title,
      link: `${siteUrl}/bench-notes/${n.slug}`,
      iso: n.iso,
      description: n.excerpt ?? "",
    })),
  ].sort((a, b) => (a.iso < b.iso ? 1 : -1));

  const lastBuild = items.length > 0 ? `<lastBuildDate>${toRfc822(items[0].iso)}</lastBuildDate>` : "";

  const itemsXml = items
    .map(
      (item) => `    <item>
      <title>${esc(item.title)}</title>
      <link>${esc(item.link)}</link>
      <guid isPermaLink="true">${esc(item.link)}</guid>
      <pubDate>${toRfc822(item.iso)}</pubDate>
      <description>${esc(item.description)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Vineeth K Kolarath</title>
    <link>${siteUrl}</link>
    <description>Writing and Bench Notes from Koodali, Kannur, Kerala.</description>
    <language>en-IN</language>
    ${lastBuild}
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}