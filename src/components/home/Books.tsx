import Link from "next/link";

export default function Books() {
  return (
    <section className="band night" aria-labelledby="books-h">
      <div className="frame">
        <div className="sec-head">
          <div>
            <p className="eyebrow">Books</p>
            <h2 id="books-h">Long-form work</h2>
          </div>
          <Link href="/books" className="more link text-gold">
            All books &rarr;
          </Link>
        </div>

        <div className="grid gap-12 min-[860px]:grid-cols-2 min-[860px]:gap-14">
          {/* Book 1 */}
          <article className="grid grid-cols-1 items-center gap-6 min-[380px]:grid-cols-[minmax(7.5rem,40%)_minmax(0,1fr)]">
            <div
              className="relative flex aspect-[2/3] max-w-48 flex-col justify-between overflow-hidden rounded-[2px_6px_6px_2px] bg-[linear-gradient(170deg,#20325e,#0d1530)] px-4 py-[1.1rem] text-[#f2efe6] shadow-[0_18px_40px_rgba(0,0,0,0.45),inset_-4px_0_0_rgba(0,0,0,0.25)] min-[380px]:max-w-none"
              role="img"
              aria-label="Book cover: Walk Before You Drive"
            >
              <span className="relative font-sans text-[0.625rem] uppercase tracking-[0.16em] opacity-85">
                Vineeth K Kolarath
              </span>
              <svg
                className="absolute -left-[10%] bottom-[20%] h-[42%] w-[120%] opacity-60"
                viewBox="0 0 200 90"
                aria-hidden="true"
              >
                <g fill="none" stroke="#c8a45c" strokeWidth="1.2">
                  <circle cx="22" cy="70" r="5" />
                  <circle cx="52" cy="62" r="5" />
                  <circle cx="82" cy="52" r="5" />
                  <path d="M104 44 L200 14 M104 56 L200 26" strokeDasharray="6 5" />
                </g>
              </svg>
              <span className="relative text-[clamp(1.125rem,0.9rem+1vw,1.5rem)] font-medium leading-[1.05] tracking-[-0.01em]">
                Walk Before You Drive
              </span>
            </div>

            <div>
              <p className="eyebrow mb-2">First book &middot; Coming soon</p>
              <h3 className="mb-[0.6rem] mt-0 text-[clamp(1.375rem,1.15rem+0.9vw,1.875rem)] font-medium leading-[1.15]">
                Walk Before You Drive
              </h3>
              <p className="mb-4 mt-0 text-night-soft">Details coming soon.</p>
              <Link href="/#subscribe" className="font-sans text-[0.9375rem] font-medium text-gold">
                Notify me &rarr;
              </Link>
            </div>
          </article>

          {/* Book 2 */}
          <article className="grid grid-cols-1 items-center gap-6 min-[380px]:grid-cols-[minmax(7.5rem,40%)_minmax(0,1fr)]">
            <div
              className="relative flex aspect-[2/3] max-w-48 flex-col justify-between overflow-hidden rounded-[2px_6px_6px_2px] bg-[linear-gradient(170deg,#3a2a20,#120d0a)] px-4 py-[1.1rem] text-[#f3e9da] shadow-[0_18px_40px_rgba(0,0,0,0.45),inset_-4px_0_0_rgba(0,0,0,0.25)] min-[380px]:max-w-none"
              role="img"
              aria-label="Book cover: Anamika"
            >
              <span className="relative font-sans text-[0.625rem] uppercase tracking-[0.16em] opacity-85">
                Vineeth K Kolarath
              </span>
              <svg
                className="absolute -left-[10%] bottom-[20%] h-[42%] w-[120%] opacity-60"
                viewBox="0 0 200 80"
                aria-hidden="true"
              >
                <g fill="none" stroke="#d9b98a" strokeWidth="1.2">
                  <circle cx="100" cy="40" r="30" />
                  <circle cx="100" cy="40" r="3" fill="#d9b98a" />
                  <path d="M20 40 H70 M130 40 H180" />
                </g>
              </svg>
              <span className="relative text-[clamp(1.125rem,0.9rem+1vw,1.5rem)] font-medium leading-[1.05] tracking-[-0.01em]">
                Anamika
              </span>
            </div>

            <div>
              <p className="eyebrow mb-2">Second book &middot; Coming soon</p>
              <h3 className="mb-[0.6rem] mt-0 text-[clamp(1.375rem,1.15rem+0.9vw,1.875rem)] font-medium leading-[1.15]">
                Anamika
              </h3>
              <p className="mb-4 mt-0 text-night-soft">Details coming soon.</p>
              <Link href="/#subscribe" className="font-sans text-[0.9375rem] font-medium text-gold">
                Notify me &rarr;
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}