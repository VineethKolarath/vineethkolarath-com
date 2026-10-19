export const site = {
  name: "Vineeth K Kolarath",
  monogram: "vk",
  location: "Koodali, Kannur, Kerala",
  credential: "Founder & Director, Ezhuthola EdTech Private Limited",
  gstin: "GSTIN: 32AIKPV6751H2ZV",

  // Business details. Used on the Contact, Terms, Refunds and Privacy pages.
  legalName: "Kaniyot Kolarath Vineeth",
  gstNumber: "32AIKPV6751H2ZV",
  address: "Sneha Vihar, PO Koodali, Kannur, Kerala - 670592",
  phone: "+91 98957 67973",
  phoneHref: "tel:+919895767973",
  email: "connect@vineethkolarath.com",
};

export type NavLink = {
  label: string;
  href: string;
};

// Shown across the top bar on wide screens.
export const primaryNav: NavLink[] = [
  { label: "Writing", href: "/writing" },
  { label: "Books", href: "/books" },
  { label: "Research", href: "/research" },
  { label: "Sessions", href: "/#sessions" },
  { label: "Webinars", href: "/#webinars" },
  { label: "Talks", href: "/#talks" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/about" },
];

// The full list in the mobile menu.
export const menuNav: NavLink[] = [
  { label: "Writing", href: "/writing" },
  { label: "Bench Notes", href: "/#bench" },
  { label: "Books", href: "/books" },
  { label: "Research", href: "/research" },
  { label: "Sessions", href: "/#sessions" },
  { label: "Coffee Table Discussion", href: "/coffee-table" },
  { label: "Round Tables", href: "/#roundtables" },
  { label: "Webinars", href: "/#webinars" },
  { label: "Mentorship", href: "/#mentorship" },
  { label: "Talks", href: "/#talks" },
  { label: "Invite me to speak", href: "/#invite" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/about" },
];

export const footerGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Read",
    links: [
      { label: "Writing", href: "/writing" },
      { label: "Bench Notes", href: "/bench-notes" },
      { label: "Books", href: "/books" },
      { label: "Research", href: "/research" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Meet",
    links: [
      { label: "Sessions", href: "/sessions" },
      { label: "Coffee Table Discussion", href: "/coffee-table" },
      { label: "Round Tables", href: "/round-tables" },
      { label: "Webinars", href: "/webinars" },
      { label: "Mentorship", href: "/mentorship" },
      { label: "Talks", href: "/talks" },
      { label: "Invite me to speak", href: "/speak" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/vineethkaniyotkolarath" },
      { label: "X", href: "https://x.com/vineethkolarath" },
      { label: "Instagram", href: "https://www.instagram.com/vineeth.kolarath" },
      { label: "Facebook", href: "https://www.facebook.com/VineethKaniyotKolarath/" },
      { label: "YouTube", href: "https://www.youtube.com/@vineethkkolarath" },
      { label: "RSS", href: "/rss.xml" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Pricing", href: "/pricing" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cancellation & Refunds", href: "/refunds" },
      { label: "Shipping & Delivery", href: "/shipping" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];