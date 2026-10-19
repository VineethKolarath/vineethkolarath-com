import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "How fees work for sessions, round tables and webinars. You see the fee before you pay.",
};

const h2 = "mt-10 text-2xl";
const list = "mt-3 list-disc space-y-2 pl-6";

export default function PricingPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Pricing"
        title="How fees work"
        intro="The fee depends on the session. You always see the fee before you pay."
      />

      <section className="band">
        <div className="frame">
          <div className="prose-body max-w-[42rem]">
            <p className="meta">Last updated: 20-10-2026</p>

            <h2 className={h2}>The rules</h2>
            <ul className={list}>
              <li>The fee is different for each session.</li>
              <li>You see the fee before you pay. You pay only after you have seen it.</li>
              <li>Every fee includes GST. You pay exactly the amount you were shown.</li>
              <li>
                Online payments are taken through Razorpay, a payment company that works
                under Indian rules.
              </li>
            </ul>

            <h2 className={h2}>Where you see the fee</h2>
            <ul className={list}>
              <li>
                <strong>10-Minute Intro Call.</strong> You see the fee on the booking page
                before you confirm.
              </li>
              <li>
                <strong>30-Minute Session.</strong> Choose &ldquo;Request a quote&rdquo;. I
                reply by email with the fee.
              </li>
              <li>
                <strong>Coffee Table Discussion.</strong> Choose &ldquo;Request a
                quote&rdquo;. I reply by email with the fee.
              </li>
              <li>
                <strong>Round Tables.</strong> A table has a maximum of five chairs. Choose
                &ldquo;Book a chair&rdquo;. You see the fee on the event page, before you
                pay or confirm.
              </li>
              <li>
                <strong>Webinars.</strong> You see the fee on the webinar page before you
                book.
              </li>
            </ul>

            <h2 className={h2}>If you change your mind</h2>
            <p className="mt-3">
              Read the <Link href="/refunds">Cancellation and Refunds</Link> page. It says
              when you can cancel and when you get your money back.
            </p>

            <h2 className={h2}>Questions about a fee</h2>
            <p className="mt-3">
              Write to me before you pay. The{" "}
              <Link href="/contact">Contact</Link> page has my email.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}