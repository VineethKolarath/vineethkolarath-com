"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site, primaryNav, menuNav } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-night-rule bg-night/95 text-night-ink backdrop-blur">
      <div className="frame flex min-h-16 items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 whitespace-nowrap text-[1.125rem] font-semibold text-night-ink no-underline"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt=""
            width={80}
            height={80}
            className="size-10 rounded-full border-[1.5px] border-gold object-cover"
          />
          {site.name}
        </Link>

        {/* Wide screens */}
        <nav aria-label="Primary" className="hidden min-[1200px]:block">
          <ul className="m-0 flex list-none items-center gap-6 p-0">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-block py-2.5 font-sans text-[0.9375rem] font-medium text-night-soft no-underline hover:text-night-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#subscribe" className="btn btn-gold min-h-10! px-4! py-2!">
                Get notified
              </Link>
            </li>
          </ul>
        </nav>

        {/* Phones, tablets and small laptops */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 cursor-pointer place-items-center rounded-full text-night-ink ring-1 ring-night-rule min-[1200px]:hidden"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? <path d="M3 3l12 12M15 3L3 15" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Menu"
          className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-night-rule bg-night px-5 pb-6 pt-2 min-[1200px]:hidden"
        >
          <ul className="m-0 list-none p-0">
            {menuNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-night-rule py-3 font-sans text-[1.0625rem] text-night-ink no-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#subscribe"
            onClick={() => setOpen(false)}
            className="btn btn-gold mt-5 w-full"
          >
            Get notified
          </Link>
        </nav>
      )}
    </header>
  );
}