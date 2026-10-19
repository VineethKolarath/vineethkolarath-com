import type { Book } from "@/lib/books";

const boxStyles: Record<Book["cover"], string> = {
  navy: "bg-[linear-gradient(170deg,#20325e,#0d1530)] text-[#f2efe6]",
  brown: "bg-[linear-gradient(170deg,#3a2a20,#120d0a)] text-[#f3e9da]",
};

export default function BookCover({ book }: { book: Book }) {
  return (
    <div
      className={
        "relative flex aspect-[2/3] w-full flex-col justify-between overflow-hidden rounded-[2px_6px_6px_2px] px-4 py-[1.1rem] shadow-[0_18px_40px_rgba(0,0,0,0.35),inset_-4px_0_0_rgba(0,0,0,0.25)] " +
        boxStyles[book.cover]
      }
      role="img"
      aria-label={`Book cover: ${book.title}`}
    >
      <span className="relative font-sans text-[0.625rem] uppercase tracking-[0.16em] opacity-85">
        Vineeth K Kolarath
      </span>

      {book.cover === "navy" ? (
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
      ) : (
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
      )}

      <span className="relative text-[clamp(1.125rem,0.9rem+1vw,1.5rem)] font-medium leading-[1.05] tracking-[-0.01em]">
        {book.title}
      </span>
    </div>
  );
}