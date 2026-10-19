import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "The rules for using this website and for booking sessions, round tables and webinars.",
};

const h2 = "mt-10 text-2xl";
const list = "mt-3 list-disc space-y-2 pl-6";

export default function TermsPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Terms"
        title="Terms of use"
        intro="These are the rules for using this website and for booking with me. I have kept them short and plain."
      />

      <section className="band">
        <div className="frame">
          <div className="prose-body max-w-[42rem]">
            <p className="meta">Last updated: 20-10-2026</p>

            <h2 className={h2}>Who runs this website</h2>
            <p className="mt-3">
              This website is run by {site.legalName}, an individual registered for GST
              (GSTIN {site.gstNumber}). You can write to me at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
            <p className="mt-3">
              By using this website or booking with me, you agree to these terms.
            </p>

            <h2 className={h2}>What I offer</h2>
            <p className="mt-3">
              I offer sessions, round tables, webinars and talks, online and in person.
              Later I may offer books and study materials. The{" "}
              <Link href="/pricing">Pricing</Link> page says how fees work.
            </p>

            <h2 className={h2}>Booking and payment</h2>
            <ul className={list}>
              <li>You see the fee before you pay.</li>
              <li>Every fee includes GST.</li>
              <li>Online payments are taken through Razorpay.</li>
              <li>
                A booking is confirmed when I email you a confirmation. Please give an
                email address that you check.
              </li>
            </ul>

            <h2 className={h2}>Cancellations, refunds and delivery</h2>
            <p className="mt-3">
              These pages are part of these terms:{" "}
              <Link href="/refunds">Cancellation and Refunds</Link> and{" "}
              <Link href="/shipping">Shipping and Delivery</Link>.
            </p>

            <h2 className={h2}>Students under 18</h2>
            <ul className={list}>
              <li>A parent or guardian may pay and book for a student.</li>
              <li>
                A parent, guardian or teacher may come with a student to a round table.
              </li>
              <li>
                I need a parent&rsquo;s or guardian&rsquo;s consent before I collect a
                student&rsquo;s personal data, or before a student appears in a photo or a
                recording.
              </li>
            </ul>

            <h2 className={h2}>Recordings</h2>
            <ul className={list}>
              <li>Some sessions may be recorded.</li>
              <li>I tell you before a recording starts.</li>
              <li>
                What I do with a recording depends on the session. I tell you in advance.
              </li>
              <li>
                Attendees may not record a session themselves. Please do not record the
                audio, the video or the screen.
              </li>
            </ul>

            <h2 className={h2}>How to behave</h2>
            <p className="mt-3">
              Please be respectful to me and to the others in a session. I may ask a person
              to leave a session if they disturb it.
            </p>

            <h2 className={h2}>What you read here</h2>
            <ul className={list}>
              <li>
                The writing, notes, books, research and photos on this website belong to
                me, unless a page says otherwise.
              </li>
              <li>
                You may share a link to a page. Please ask me before you copy or reuse the
                content.
              </li>
              <li>
                What I share is for learning and guidance. I cannot promise a particular
                result from a session.
              </li>
            </ul>

            <h2 className={h2}>Your data</h2>
            <p className="mt-3">
              The <Link href="/privacy">Privacy</Link> page says what I collect and why.
            </p>

            <h2 className={h2}>Law and disputes</h2>
            <p className="mt-3">
              These terms follow the laws of India. Any dispute falls under the courts at
              Kannur, Kerala.
            </p>

            <h2 className={h2}>Changes</h2>
            <p className="mt-3">
              When I change these terms, I update the date at the top of this page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}