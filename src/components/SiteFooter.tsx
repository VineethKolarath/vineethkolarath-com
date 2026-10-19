import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { site, footerGroups } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-night-2 font-sans text-[0.9375rem] text-night-soft">
      <div className="frame pt-14 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,12rem),1fr))] gap-10 border-b border-night-rule pb-10">
          <div>
            <p className="mb-2 mt-0 font-serif text-lg text-night-ink">{site.name}</p>
            <p className="m-0 leading-relaxed">
              {site.location}
              <br />
              {site.gstin}
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-4 mt-0 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                {group.title}
              </h2>
              <ul className="m-0 list-none p-0">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-night-soft no-underline hover:text-night-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-7">
          <p className="m-0">&copy; 2026 {site.name}</p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}