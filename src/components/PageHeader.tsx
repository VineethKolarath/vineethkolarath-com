type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export default function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <>
      <header className="pb-[clamp(1.5rem,4vw,2.5rem)] pt-[clamp(3rem,8vw,6rem)]">
        <div className="frame">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mb-4 mt-0 text-[clamp(2.5rem,1.3rem+5.5vw,5.25rem)] font-medium leading-none tracking-[-0.03em]">
            {title}
          </h1>
          {intro ? <p className="m-0 max-w-[48ch] text-soft">{intro}</p> : null}
        </div>
      </header>
      <div className="kasavu" aria-hidden="true" />
    </>
  );
}