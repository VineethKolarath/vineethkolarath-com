export default function About() {
  return (
    <section className="band" aria-labelledby="about-h">
      <div className="frame grid gap-8 min-[980px]:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] min-[980px]:gap-20">
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-h" className="sr-only">
            About Vineeth
          </h2>
        </div>

        <div>
          <p className="mb-6 mt-0 text-[clamp(1.25rem,1.05rem+0.8vw,1.625rem)] leading-[1.5]">
            I mentor students, makers, and aspiring founders across Kerala and India, helping them
            turn ideas into working projects. From identifying problems and learning new
            technologies to building prototypes and solving technical challenges, I guide them
            through the process of making things work. My approach is rooted in hands-on learning,
            critical thinking, experimentation, and clear communication. Here, I share my
            experiences in mentoring, teaching, building, and learning.
          </p>

          <ul className="m-0 list-none border-t border-rule p-0 font-sans text-[0.9375rem] text-soft">
            <li className="flex flex-wrap justify-between gap-4 border-b border-rule py-[0.9rem]">
              <span>Based in</span>
              <b className="font-medium text-ink">Koodali, Kannur, Kerala</b>
            </li>
            <li className="flex flex-wrap justify-between gap-4 border-b border-rule py-[0.9rem]">
              <span>Founder &amp; Director</span>
              <b className="font-medium text-ink">Ezhuthola EdTech Private Limited</b>
            </li>
            <li className="flex flex-wrap justify-between gap-4 border-b border-rule py-[0.9rem]">
              <span>Fields</span>
              <b className="font-medium text-ink">
                Autonomous systems &middot; Edge AI &middot; Smart grids &middot; Thinking Machines
              </b>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}