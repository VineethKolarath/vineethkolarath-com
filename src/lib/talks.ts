export type TalkImage = {
  src: string; // file in public/images/talks
  alt: string; // describes the picture for screen readers
  caption?: string; // short line shown under the picture
};

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
  images?: TalkImage[]; // 4:3 photos, shown under the description
  imageCredit?: string; // for example "Photos: Deshabhimani"
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
      "This talk was part of the Deshabhimani Aksharamuttam Quiz, at the district level competition in Kannur. It was for a group of selected students. The function was inaugurated by the Kannur District Collector, Vishnuraj P IAS. K K Ragesh, former MP and CPI(M) Kannur District Secretary, was the chief guest. Former ISRO scientist V P Balagangadharan also spoke, on the topic \u201cRocket Revolution\u201d. My talk was about how to use AI as a mentor, and not as an answer delivery machine. After the session, students gathered around with more questions. How will AI affect our lives? How does it affect the climate? How can privacy be protected? What if AI starts copying itself and builds its own world?",
    images: [
      {
        src: "/images/talks/kannur-2026-10-25-1.jpg",
        alt: "Vineeth K Kolarath, holding a microphone, speaks with students seated at long tables.",
        caption: "Talking with students about using AI as a mentor.",
      },
      {
        src: "/images/talks/kannur-2026-10-25-2.jpg",
        alt: "Vineeth K Kolarath and V P Balagangadharan seated together on the stage, smiling.",
        caption: "With former ISRO scientist V P Balagangadharan on the stage.",
      },
    ],
    upcoming: false,
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