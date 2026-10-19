import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SessionRequestForm from "@/components/SessionRequestForm";

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "A free 10-minute intro call, a 30-minute online session and an in-person Coffee Table Discussion with Vineeth K Kolarath.",
};

const h2 = "mt-10 text-2xl";
const list = "mt-3 list-disc space-y-2 pl-6";

export default function SessionsPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Sessions"
        title="Talk to me, one to one"
        intro="Bring a question, an idea or a rough plan. We look at it together, one step at a time."
      />

      <section className="band">
        <div className="frame">
          <div className="prose-body max-w-[42rem]">
            <h2 className={h2 + " !mt-0"}>The three sessions</h2>

            <h3 className="mt-6 text-xl">10-Minute Intro Call</h3>
            <p className="mt-2">
              A short online call. You tell me what you are working on. I tell you if I can
              help, and how. This call is free.
            </p>

            <h3 className="mt-6 text-xl">30-Minute Session</h3>
            <p className="mt-2">
              A longer online session on one idea or one question. We use the time to work it
              out step by step. I cannot promise a particular result, but you will leave with
              a clear next step.
            </p>
            <p className="mt-2">
              The fee depends on the session. <a href="#request">Request a quote</a> and I
              will send it to you by email.
            </p>

            <h3 className="mt-6 text-xl">Coffee Table Discussion</h3>
            <p className="mt-2">
              A one-hour conversation over coffee, in person. Unhurried, with more time if you
              need it. I confirm the date and time with you by email.
            </p>
            <p className="mt-2">
              The fee depends on the discussion. <a href="#request">Request a quote</a> and I
              will send it to you by email.
            </p>

            <h2 className={h2}>Who can book</h2>
            <ul className={list}>
              <li>School students, Class 1 to 12. A parent or guardian may book for them.</li>
              <li>College students.</li>
              <li>Parents and teachers.</li>
              <li>Working professionals and founders.</li>
            </ul>

            <h2 className={h2}>How it works</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>Send your request using the form below.</li>
              <li>I reply to you by email.</li>
              <li>
                For a 30-minute session or a Coffee Table Discussion, I email you the fee. You
                pay only after you have seen it. All fees include GST.
              </li>
              <li>
                For an online session, I email you the meeting link at least 24 hours before it
                starts. For a Coffee Table Discussion, I email you the place at least 7 days
                before it starts.
              </li>
            </ol>

            <h2 className={h2}>Good to know</h2>
            <ul className={list}>
              <li>
                The 10-Minute Intro Call and the 30-Minute Session are online, on a video call.
                The Coffee Table Discussion is in person.
              </li>
              <li>
                A session may be recorded. I tell you before the recording starts. Please do
                not record it yourself.
              </li>
              <li>
                If a student is under 18, a parent or guardian must agree before the student
                appears in a recording or photo.
              </li>
              <li>
                To cancel or get a refund, read{" "}
                <Link href="/refunds">Cancellation and Refunds</Link>. For the full rules, see{" "}
                <Link href="/terms">Terms and Conditions</Link>.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="request" className="band">
        <div className="frame">
          <div className="max-w-[42rem]">
            <h2 className="mt-0 text-2xl">Request a session</h2>
            <p className="mt-3">
              Fill in the form. I will reply by email. You can also write to me at{" "}
              <a href="mailto:connect@vineethkolarath.com">connect@vineethkolarath.com</a>.
            </p>
            <SessionRequestForm />
          </div>
        </div>
      </section>
    </main>
  );
}