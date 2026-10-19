import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site, footerGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "How to get in touch with Vineeth K Kolarath. Email and business details.",
};

const socials =
  footerGroups
    .find((g) => g.title === "Elsewhere")
    ?.links.filter((l) => l.href.startsWith("http")) ?? [];

const routes = [
  { label: "Request a session or a quote", href: "/sessions" },
  { label: "Join a round table", href: "/round-tables" },
  { label: "Apply for mentorship", href: "/mentorship" },
  { label: "Invite me to speak", href: "/speak" },
];

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="For a session, a talk or a mentorship, the pages below are the quickest route. For anything else, write to me."
      />

      <div className="pb-[clamp(3rem,8vw,5rem)] pt-[clamp(2rem,6vw,4rem)]">
        <div className="frame grid gap-12 min-[980px]:grid-cols-2 min-[980px]:gap-20">
          <div>
            <p className="eyebrow">Write to me</p>
            <p className="mb-4 mt-0 break-words text-[clamp(1.25rem,1.05rem+0.8vw,1.625rem)]">
              <a href={`mailto:${site.email}`} className="link">
                {site.email}
              </a>
            </p>
            <p className="m-0 font-sans text-[0.9375rem] text-soft">{site.location}</p>

            <p className="eyebrow mt-10">Business details</p>
            <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 font-sans text-[0.9375rem]">
              <dt className="text-soft">Legal name</dt>
              <dd className="m-0">{site.legalName}</dd>
              <dt className="text-soft">Status</dt>
              <dd className="m-0">Individual, GST registered</dd>
              <dt className="text-soft">GSTIN</dt>
              <dd className="m-0">{site.gstNumber}</dd>
            </dl>

            {socials.length > 0 ? (
              <>
                <p className="eyebrow mt-10">Elsewhere</p>
                <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center rounded-full px-4 font-sans text-sm font-medium text-ink no-underline ring-1 ring-inset ring-soft hover:ring-2 hover:ring-ink"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          <div>
            <p className="eyebrow">Quickest routes</p>
            <ul className="m-0 list-none border-t border-rule p-0">
              {routes.map((r) => (
                <li key={r.label} className="border-b border-rule">
                  <Link
                    href={r.href}
                    className="flex items-center justify-between gap-4 py-4 text-ink no-underline hover:text-link"
                  >
                    <span>{r.label}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}