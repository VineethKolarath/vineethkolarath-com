import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shipping and Delivery",
  description:
    "How you receive your session details, and how books and study materials are shipped across India.",
};

const h2 = "mt-10 text-2xl";
const list = "mt-3 list-disc space-y-2 pl-6";

export default function ShippingPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Shipping and Delivery"
        title="How you receive your order"
        intro="This page says how you receive a session, and how physical goods such as books and study materials reach you."
      />

      <section className="band">
        <div className="frame">
          <div className="prose-body max-w-[42rem]">
            <p className="meta">Last updated: 20-10-2026</p>

            <h2 className={h2}>Online sessions and webinars</h2>
            <ul className={list}>
              <li>
                I email the meeting link to the address you gave when you booked.
              </li>
              <li>I send it at least 24 hours before the session starts.</li>
              <li>You join the session at the date and time confirmed in your booking.</li>
            </ul>

            <h2 className={h2}>In-person sessions</h2>
            <ul className={list}>
              <li>
                I email the venue details to the address you gave when you booked.
              </li>
              <li>I send them at least 7 days before the session.</li>
              <li>The email also confirms the date and time.</li>
            </ul>

            <h2 className={h2}>If you do not receive the email</h2>
            <p className="mt-3">
              First, look in your spam or junk folder. If it is not there, write to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>. I will send the details
              again.
            </p>

            <h2 className={h2}>Books and study materials</h2>
            <p className="mt-3">Physical goods are shipped like this:</p>
            <ul className={list}>
              <li>
                <strong>Where:</strong> I ship to addresses all over India.
              </li>
              <li>
                <strong>Dispatch:</strong> I dispatch your order within 3 days of receiving
                it.
              </li>
              <li>
                <strong>Delivery time:</strong> your parcel reaches you 7 to 15 days after
                dispatch.
              </li>
              <li>
                <strong>Shipping charge:</strong> none. Shipping is free.
              </li>
              <li>
                <strong>Courier:</strong> India Post, Delhivery or BlueDart.
              </li>
              <li>
                <strong>Tracking:</strong> you receive a tracking number after dispatch, so
                you can follow your parcel.
              </li>
            </ul>

            <h2 className={h2}>Damaged or wrong item</h2>
            <p className="mt-3">
              If your parcel arrives damaged, or you receive the wrong product, write to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> within 7 days of delivery.
              Please attach a photo of the item and the parcel. Read the{" "}
              <Link href="/refunds">Cancellation and Refunds</Link> page to see what happens
              next.
            </p>

            <h2 className={h2}>If I cancel a session</h2>
            <p className="mt-3">
              If I cancel a session, you get a full refund. Read the{" "}
              <Link href="/refunds">Cancellation and Refunds</Link> page for the full
              rules.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}