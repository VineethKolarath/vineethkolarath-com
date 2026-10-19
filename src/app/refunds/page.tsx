import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cancellation and Refunds",
  description:
    "When you can cancel a session or an order, and when you get a refund.",
};

const h2 = "mt-10 text-2xl";
const list = "mt-3 list-disc space-y-2 pl-6";

export default function RefundsPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Cancellation and Refunds"
        title="Cancelling and getting a refund"
        intro="This page says when you can cancel, and when your money comes back. The rules are simple."
      />

      <section className="band">
        <div className="frame">
          <div className="prose-body max-w-[42rem]">
            <p className="meta">Last updated: 20-10-2026</p>

            <h2 className={h2}>If you cancel a session</h2>
            <ul className={list}>
              <li>
                <strong>In-person session:</strong> cancel at least 7 days before it
                starts, and you get a full refund.
              </li>
              <li>
                <strong>Online session or webinar:</strong> cancel at least 24 hours
                before it starts, and you get a full refund.
              </li>
              <li>
                <strong>After that time:</strong> there is no refund. This includes the
                case where you do not attend.
              </li>
            </ul>

            <h2 className={h2}>If I cancel or reschedule</h2>
            <p className="mt-3">
              If I cancel a session, or move it to another date, you get a full refund. This
              holds at any time, even on the day of the session.
            </p>

            <h2 className={h2}>If you cancel an order for books or study materials</h2>
            <p className="mt-3">
              You can cancel an order before it is dispatched, and you get a full refund.
              After dispatch, you cannot cancel the order.
            </p>

            <h2 className={h2}>Damaged or wrong item</h2>
            <ul className={list}>
              <li>
                Write to <a href={`mailto:${site.email}`}>{site.email}</a> within 7 days of
                delivery.
              </li>
              <li>Attach a photo of the item and of the parcel.</li>
              <li>You choose: a replacement, or a refund.</li>
            </ul>
            <p className="mt-3">
              I do not take back books or study materials that are in good condition and
              are the right product.
            </p>

            <h2 className={h2}>How to cancel</h2>
            <p className="mt-3">
              Write to <a href={`mailto:${site.email}`}>{site.email}</a>. Give your name,
              the email address you used, and the session or order you want to cancel.
            </p>

            <h2 className={h2}>How you get your refund</h2>
            <p className="mt-3">
              A refund goes back to the account you paid from. It reaches you within 7 days
              at most.
            </p>

            <h2 className={h2}>Booking for a student under 18</h2>
            <p className="mt-3">
              A parent or guardian may pay and book for a student. The same rules apply.
            </p>

            <h2 className={h2}>Related pages</h2>
            <p className="mt-3">
              See <Link href="/shipping">Shipping and Delivery</Link> for how you receive
              your session details or your parcel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}