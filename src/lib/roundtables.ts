export type RoundTable = {
  slug: string;
  title: string;
  date: string; // DD-MM-YYYY
  iso: string; // YYYY-MM-DD
  time: string;
  track: "Class 1 to 12" | "College and above";
  chairs: number;
  length: string;
  venue: string;
  bring: string;
  status: "upcoming" | "past";
  note?: string;
};

// Add each new Round Table here. Newest first.
// Never write a price here. The fee is sent by email after the request.
export const roundTables: RoundTable[] = [
  {
    slug: "college-2026-11-15",
    title: "Round Table for college students and above",
    date: "15-11-2026",
    iso: "2026-11-15",
    time: "9:00 am",
    track: "College and above",
    chairs: 5,
    length: "2 hours",
    venue: "Mascot Beach Hotel, Kannur",
    bring: "A rough idea or a question.",
    status: "upcoming",
  },
];

export function getRoundTables(): RoundTable[] {
  return roundTables;
}

export function getRoundTable(slug: string): RoundTable | undefined {
  return roundTables.find((r) => r.slug === slug);
}