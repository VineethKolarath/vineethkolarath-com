export type Talk = {
  slug: string;
  day: string; // for example "25"
  monthYear: string; // for example "Oct 2026"
  date: string; // shown as DD-MM-YYYY
  time?: string; // for example "10:30 am"
  title: string;
  venue?: string;
  city: string;
  format: string; // for example "In person"
  description?: string;
  upcoming: boolean; // change to false once the talk has taken place
};

// Newest first.
export const talks: Talk[] = [
  {
    slug: "kannur-2026-10-25",
    day: "25",
    monthYear: "Oct 2026",
    date: "25-10-2026",
    time: "10:30 am",
    title: "Walk Before You Drive",
    venue: "Municipal High School",
    city: "Kannur, Kerala",
    format: "In person",
    description:
      "This talk is part of the Deshabhimani Aksharamuttam Quiz. It is the district level competition. The talk is for a group of selected students. The session sets the base before the big ideas. Learn the basics first. Then build on them, one step at a time.",
    upcoming: true,
  },
  {
    slug: "thrissur-2026-10-18",
    day: "18",
    monthYear: "Oct 2026",
    date: "18-10-2026",
    time: "10:30 am",
    title: "AI Vidya Lab Project Presentation",
    venue: "Catholic Pastoral Centre, East Fort",
    city: "Thrissur, Kerala",
    format: "In person",
    description:
      "AI Vidya Lab is a community AI lab run by MISAT Foundation in Thrissur. The lab helps students and local citizens understand AI. It lets them try it with their own hands. This event was a project presentation about the lab. It was held at the Catholic Pastoral Centre, East Fort, Thrissur, at 10:30 am.",
    upcoming: false,
  },
];

export function getTalk(slug: string): Talk | undefined {
  return talks.find((t) => t.slug === slug);
}

// For example: "Municipal High School, Kannur, Kerala · 10:30 am · In person"
export function talkPlace(t: Talk): string {
  const where = [t.venue, t.city].filter(Boolean).join(", ");
  return [where, t.time, t.format].filter(Boolean).join(" \u00b7 ");
}