import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What this website collects, why, and the choices you have. Written in plain language.",
};

const h2 = "mt-10 text-2xl";
const list = "mt-3 list-disc space-y-2 pl-6";

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Privacy"
        title="Your privacy"
        intro="This page says what this website collects, why, and what you can ask me to do. I keep it short and plain."
      />

      <section className="band">
        <div className="frame">
          <div className="prose-body max-w-[42rem]">
            <p className="meta">Last updated: 20-10-2026</p>

            <h2 className={h2}>Who I am</h2>
            <p className="mt-3">
              This website is run by {site.legalName}, an individual registered for GST
              (GSTIN {site.gstNumber}), based in Koodali, Kannur, Kerala, India. For any
              privacy question, write to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <h2 className={h2}>What this site collects</h2>
            <ul className={list}>
              <li>
                <strong>Your Light or Dark choice.</strong> It is saved in your own browser.
                It never leaves your device.
              </li>
              <li>
                <strong>Basic visit records.</strong> The company that hosts this site keeps
                technical logs, such as your IP address and browser type. This keeps the
                site safe and working.
              </li>
              <li>
                <strong>Emails you send me.</strong> I use your name and email only to
                reply to you.
              </li>
            </ul>
            <p className="mt-3">
              This site does not use advertising or tracking cookies.
            </p>

            <h2 className={h2}>The &ldquo;Get notified&rdquo; form</h2>
            <p className="mt-3">When you fill in the form on the home page, I collect:</p>
            <ul className={list}>
              <li>your name and email address;</li>
              <li>the topics you ticked;</li>
              <li>the date and time you agreed.</li>
            </ul>
            <p className="mt-3">
              A form service called Web3Forms carries your entry to my email inbox. I use
              your details only to tell you about the topics you ticked. You can ask me to
              remove you at any time.
            </p>

            <h2 className={h2}>What I collect when you book, order or comment</h2>
            <p className="mt-3">
              When you use a feature such as an account, comments, a booking or an order, I
              may collect:
            </p>
            <ul className={list}>
              <li>your name and email address;</li>
              <li>your phone number, if a booking or a delivery needs it;</li>
              <li>your delivery address, if you order books or study materials;</li>
              <li>the details you give in a booking or an enquiry;</li>
              <li>comments you post.</li>
            </ul>
            <p className="mt-3">
              I use this only for the reason you gave it. I confirm a booking for those who
              booked. I post an order to the address given for it.
            </p>

            <h2 className={h2}>Payments</h2>
            <p className="mt-3">
              Online payments are taken through Razorpay, a payment company. I do not see or
              store your card or bank details. Razorpay handles them under its own privacy
              rules.
            </p>

            <h2 className={h2}>Recordings and photos</h2>
            <ul className={list}>
              <li>Some sessions may be recorded. I tell you before a recording starts.</li>
              <li>
                What I do with a recording depends on the session. I tell you in advance.
              </li>
              <li>I put a photo of a person on this site only with written consent.</li>
            </ul>

            <h2 className={h2}>Other services I use</h2>
            <p className="mt-3">
              To run this site, I use or may use trusted services for hosting, forms, data
              storage, email delivery, spam protection, payments, online meetings and
              delivery of parcels. They handle data only to provide that service. I do not
              sell your data.
            </p>

            <h2 className={h2}>Children</h2>
            <ul className={list}>
              <li>
                For anyone under 18, a parent or guardian must give consent before I collect
                personal data.
              </li>
              <li>
                For a student under 18, the consent for a photo or a recording also comes
                from a parent or guardian.
              </li>
            </ul>

            <h2 className={h2}>Your choices</h2>
            <p className="mt-3">
              Under the Digital Personal Data Protection Act, 2023, you can ask me to:
            </p>
            <ul className={list}>
              <li>tell you what data I hold about you;</li>
              <li>correct data that is wrong;</li>
              <li>erase your data;</li>
              <li>stop contacting you about the topics you ticked;</li>
              <li>take back a consent you gave;</li>
              <li>listen to a complaint about how I handled your data.</li>
            </ul>
            <p className="mt-3">
              Write to <a href={`mailto:${site.email}`}>{site.email}</a> with your request. I
              will reply as soon as I can.
            </p>

            <h2 className={h2}>How long I keep data</h2>
            <p className="mt-3">
              I keep your data only as long as it is needed for the reason you gave it, or
              as long as the law requires. After that, I delete it.
            </p>

            <h2 className={h2}>Changes to this page</h2>
            <p className="mt-3">
              When I change this page, I update the date at the top. When a new feature
              collects new data, I update this page before it goes live.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}