import Link from "next/link";

export default function Hero() {
  return (
    <section className="night relative overflow-hidden" aria-labelledby="hero-h">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-night-ink/10 max-[700px]:opacity-60"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1200 110 H980 L930 160 V300 L880 350 H740" />
          <path d="M1200 210 H1050 L1010 250 V430 L970 470 H820 L780 510 V700" />
          <path d="M1200 340 H1110 L1080 370 V700" />
          <path d="M1200 540 H1140 L1110 570 H900 L860 610 V700" />
          <path d="M660 0 V70 L710 120 H850 L880 90 V0" />
        </g>
        <g fill="currentColor">
          <circle cx="740" cy="350" r="5" />
          <circle cx="820" cy="470" r="5" />
          <circle cx="900" cy="570" r="4" />
          <circle cx="850" cy="120" r="4" />
        </g>
      </svg>

      <div className="frame relative z-[1] min-[980px]:flex min-[980px]:min-h-[min(74vh,46rem)] min-[980px]:items-center">
        <div className="max-w-[52rem] pt-[clamp(4rem,12vw,9rem)] pb-[clamp(4rem,11vw,8rem)]">
          <p className="eyebrow">Mentor &middot; Teacher &middot; Engineer</p>

          <h1
            id="hero-h"
            className="mb-6 mt-0 text-[clamp(2.75rem,1.4rem+6.5vw,6.25rem)] font-medium leading-[0.98] tracking-[-0.03em]"
          >
            Vineeth{" "}
            <em className="block font-normal text-night-soft">K Kolarath</em>
          </h1>

          <p className="mb-8 mt-0 max-w-[32ch] border-l-2 border-gold pl-[1.1rem] text-[clamp(1.25rem,1.05rem+0.9vw,1.75rem)] italic leading-[1.35]">
            &ldquo;Bring a rough idea. We will make it work, one step at a time.&rdquo;
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/writing" className="btn btn-gold">
              Read the writing
            </Link>
            <Link href="/#sessions" className="btn btn-line">
              Book a session
            </Link>
          </div>
        </div>
      </div>

      <div className="kasavu" aria-hidden="true" />
    </section>
  );
}