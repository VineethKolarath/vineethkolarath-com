import Link from "next/link";

export default function Research() {
  return (
    <section className="band" aria-labelledby="research-h">
      <div className="frame">
        <div className="sec-head">
          <div>
            <p className="eyebrow">Research</p>
            <h2 id="research-h">Frameworks and papers</h2>
            <p>Longer, formal work, with a version history and a citation.</p>
          </div>
          <Link href="/research" className="more link">
            All research &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-6">
          <article className="flex flex-col border border-rule border-t-[3px] border-t-ink bg-paper p-[clamp(1.5rem,4vw,2.25rem)]">
            <p className="eyebrow mb-4">White paper</p>
            <h3 className="mb-3 mt-0 text-[clamp(1.5rem,1.25rem+1vw,2rem)] font-medium leading-[1.15]">
              Comradeship Architecture
            </h3>
            <p className="mb-6 mt-0 text-soft">
              A framework for autonomous systems in mission-critical environments, where machines
              act as proactive partners.
            </p>
            <div className="mt-auto flex flex-wrap items-center justify-end gap-x-4 gap-y-2 font-sans text-[0.9375rem]">
              <Link href="/research/comradeship-architecture" className="link font-medium">
                Read the paper &rarr;
              </Link>
            </div>
          </article>

          <article className="flex flex-col border border-rule border-t-[3px] border-t-rule bg-transparent p-[clamp(1.5rem,4vw,2.25rem)]">
            <p className="eyebrow mb-4">In preparation</p>
            <h3 className="mb-3 mt-0 text-[clamp(1.5rem,1.25rem+1vw,2rem)] font-medium leading-[1.15]">
              More papers are on the way
            </h3>
            <p className="mb-6 mt-0 text-soft">
              New research will appear here as it is ready. Subscribers hear first.
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[0.9375rem]">
              <Link href="/#subscribe" className="link font-medium">
                Get notified &rarr;
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}