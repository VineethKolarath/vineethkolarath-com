import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { site } from "@/lib/site";
import Newsletter from "@/components/home/Newsletter";

// Posts are built in advance from the files in content/posts.
export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// The light copy made by scripts/make-share-images.mjs.
// /images/posts/name.png  ->  /images/posts/name-share.jpg
function shareImageFor(image: string) {
  return image.replace(/\.(png|jpe?g)$/i, "-share.jpg");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.isoDate,
      authors: [site.name],
      ...(post.image
        ? {
            images: [
              {
                url: shareImageFor(post.image),
                width: 1200,
                height: 630,
                alt: post.imageAlt ?? post.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: post.image ? "summary_large_image" : "summary",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `https://vineethkolarath.com/writing/${post.slug}`;
  const text = encodeURIComponent(post.title);
  const link = encodeURIComponent(url);

  const shareLinks = [
    { label: "WhatsApp", href: `https://wa.me/?text=${text}%20${link}` },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${link}`,
    },
    { label: "X", href: `https://x.com/intent/post?text=${text}&url=${link}` },
  ];

  return (
    <main id="main">
      <header className="pb-[clamp(1.5rem,4vw,2.5rem)] pt-[clamp(3rem,8vw,6rem)]">
        <div className="frame">
          <p className="mb-6 mt-0 font-sans text-sm text-soft">
            <Link href="/writing" className="link">
              Writing
            </Link>
            {post.topic ? <> &nbsp;/&nbsp; {post.topic}</> : null}
          </p>
          <h1 className="mb-5 mt-0 max-w-[18ch] text-[clamp(2.5rem,1.3rem+5.5vw,5.25rem)] font-medium leading-none tracking-[-0.03em]">
            {post.title}
          </h1>
          <p className="meta m-0 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>{site.name}</span>
            <span aria-hidden="true" className="size-[3px] rounded-full bg-soft" />
            <time dateTime={post.isoDate}>{post.date}</time>
            <span aria-hidden="true" className="size-[3px] rounded-full bg-soft" />
            <span>{post.readingMinutes} min read</span>
          </p>
        </div>
      </header>

      <div className="kasavu" aria-hidden="true" />

      <div className="pb-[clamp(3rem,8vw,5rem)] pt-[clamp(2rem,6vw,4rem)]">
        <div className="frame">
          {post.image ? (
            <figure className="mx-auto mb-10 mt-0 max-w-[32rem]">
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                width={1024}
                height={1024}
                sizes="(min-width: 640px) 32rem, 100vw"
                className="h-auto w-full rounded-[3px]"
              />
            </figure>
          ) : null}

          <article
            className={
              "prose-body mx-auto max-w-[66ch] " +
              "[&>p:first-child]:text-[1.15em] [&>p:first-child]:leading-[1.5] " +
              "[&_p]:mb-[1.4em] [&_p]:mt-0 " +
              "[&_h2]:mb-[0.6em] [&_h2]:mt-[2.1em] [&_h2]:text-[clamp(1.5rem,1.25rem+1vw,1.875rem)] [&_h2]:font-medium [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.01em] " +
              "[&_h3]:mb-[0.5em] [&_h3]:mt-[1.8em] [&_h3]:text-[1.375rem] [&_h3]:font-medium " +
              "[&_ul]:mb-[1.4em] [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-[1.4em] [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 " +
              "[&_blockquote]:mb-0 [&_blockquote]:mt-[2.2em] [&_blockquote]:border-l-2 [&_blockquote]:border-gold [&_blockquote]:pl-[1.1rem] [&_blockquote]:text-[1.25em] [&_blockquote]:italic [&_blockquote]:leading-[1.4] [&_blockquote_p]:mb-0 " +
              "[&_img]:my-8 [&_img]:h-auto [&_img]:rounded"
            }
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="mx-auto mt-12 flex max-w-[66ch] flex-wrap items-center gap-[0.6rem] border-t border-rule pt-6 font-sans text-sm text-soft">
            <span className="mr-2">Share</span>
            {shareLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-full px-4 font-medium text-ink no-underline ring-1 ring-inset ring-soft hover:ring-2 hover:ring-ink"
              >
                {s.label}
              </a>
            ))}
          </div>

          <aside
            aria-label="About the author"
            className="mx-auto mt-10 max-w-[66ch] border-t-[3px] border-t-ink bg-surface p-6 font-sans text-[0.9375rem] text-soft"
          >
            <b className="mb-1 block font-serif text-xl font-medium text-ink">{site.name}</b>
            <p className="m-0">
              Mentor, teacher and engineer. {site.location}.{" "}
              <Link href="/about" className="link">
                More about me
              </Link>
            </p>
          </aside>
        </div>
      </div>

      <Newsletter />
    </main>
  );
}