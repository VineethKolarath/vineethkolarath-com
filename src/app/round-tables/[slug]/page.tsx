import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ChairRequestForm from "@/components/ChairRequestForm";
import { getRoundTable, getRoundTables } from "@/lib/roundtables";

// Events are built in advance from src/lib/roundtables.ts.
export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getRoundTables().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getRoundTable(slug);
  if (!event) return {};

  return {
    title: `Round Table, ${event.date}`,
    description: `${event.track}. ${event.date}, ${event.time}. ${event.chairs} chairs at most.`,
  };
}

const h2 = "mt-10 text-2xl";
const list = "mt-3 list-disc space-y-2 pl-6";

export default async function RoundTablePage({ params }: Props) {
  const { slug } = await params;
  const event = getRoundTable(slug);
  if (!event) notFound();

  const isSchoolTrack = event.track === "Class 1 to 12";
  const whoOptions = isSchoolTrack
    ? ["Parent or guardian of a school student", "Teacher"]
    : ["College student", "Working professional or founder", "Teacher"];

  return (
    <main id="main">
      <PageHeader
        eyebrow={`Round Table, ${event.track}`}
        title={event.title}
        intro="You bring a rough idea or a question. We work on it together, one step at a time."
      />

      <section className="band">
        <div className="frame">
          <div className="prose-body max-w-[42rem]">
            <h2 className="mt-0 text-2xl">The details</h2>
            <ul className={list}>
              <li>
                <strong>Date:</strong> <time dateTime={event.iso}>{event.date}</time>
              </li>
              <li>
                <strong>Start time:</strong> {event.time}
              </li>
              <li>
                <strong>Length:</strong> {event.length}
              </li>
              <li>
                <strong>Place:</strong> {event.venue}
              </li>
              <li>
                <strong>Chairs:</strong> {event.chairs} at most
              </li>
              <li>
                <strong>Who it is for:</strong> {event.track}
              </li>
              <li>
                <strong>What to bring:</strong> {event.bring}
              </li>
            </ul>

            {event.note ? <p className="mt-4">{event.note}</p> : null}

            <h2 className={h2}>The fee</h2>
            <p className="mt-3">
              The fee depends on the event. I email it to you when I confirm your chair. You
              pay only after you have seen it. All fees include GST.
            </p>

            <h2 className={h2}>Good to know</h2>
            <ul className={list}>
              <li>A parent or teacher may come with a student. They do not take a chair.</li>
              <li>
                I email you the details of the place at least 7 days before the Round Table
                starts.
              </li>
              <li>
                To cancel a chair and get your money back, you need to cancel at least 7
                days before the Round Table. Read{" "}
                <Link href="/refunds">Cancellation and Refunds</Link>.
              </li>
              <li>
                If I cancel or move the Round Table, you get a full refund at any time.
              </li>
              <li>
                A Round Table may be recorded or photographed. I tell you before it starts.
                A student under 18 appears only if a parent or guardian agrees.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="request" className="band">
        <div className="frame">
          <div className="max-w-[42rem]">
            {event.status === "upcoming" ? (
              <>
                <h2 className="mt-0 text-2xl">Book a chair</h2>
                <p className="mt-3">
                  Fill in the form. I will confirm your chair by email. Your chair is not
                  final until I confirm it.
                </p>
                <ChairRequestForm
                  eventTitle={event.title}
                  eventDate={event.date}
                  eventTrack={event.track}
                  whoOptions={whoOptions}
                  forStudentsUnder18={isSchoolTrack}
                />
              </>
            ) : (
              <>
                <h2 className="mt-0 text-2xl">This Round Table has ended</h2>
                <p className="mt-3">
                  To hear about the next one, <Link href="/#subscribe">use Get notified</Link>.
                </p>
              </>
            )}
            <p className="mt-8">
              <Link href="/round-tables">All Round Tables</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}