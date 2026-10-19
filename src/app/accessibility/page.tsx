import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "How this website is built to be easy to read and use, and how to tell me about a problem.",
};

const h2 = "mt-10 text-2xl";
const list = "mt-3 list-disc space-y-2 pl-6";

export default function AccessibilityPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Accessibility"
        title="Easy to read, easy to use"
        intro="This website is meant for everyone. This page says what I have done, and how to tell me when something does not work for you."
      />

      <section className="band">
        <div className="frame">
          <div className="prose-body max-w-[42rem]">
            <p className="meta">Last updated: 20-10-2026</p>

            <h2 className={h2}>What I have done</h2>
            <ul className={list}>
              <li>
                <strong>Keyboard.</strong> You can move through the site with the keyboard.
                A &ldquo;Skip to content&rdquo; link lets you jump past the menu.
              </li>
              <li>
                <strong>Light and Dark.</strong> You can choose Light, Dark, or Auto in the
                footer. Auto follows your device.
              </li>
              <li>
                <strong>Text size.</strong> Text is sized so that it grows when you zoom or
                change the text size in your browser. It is also larger on big screens.
              </li>
              <li>
                <strong>Phones.</strong> Every page works on small screens.
              </li>
              <li>
                <strong>Plain language.</strong> I write in short sentences and explain
                technical words.
              </li>
              <li>
                <strong>Photos.</strong> Every photo has a short text description for people
                who use a screen reader.
              </li>
              <li>
                <strong>Menu.</strong> The mobile menu closes when you press the Escape key.
              </li>
            </ul>

            <h2 className={h2}>What I am still checking</h2>
            <p className="mt-3">
              I follow the Web Content Accessibility Guidelines (WCAG) as a guide. I have not
              yet had the site checked by an outside expert. I keep testing as I add pages.
            </p>

            <h2 className={h2}>If something does not work for you</h2>
            <p className="mt-3">
              Tell me what page you were on and what went wrong. Write to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>. I will look into it and
              reply as soon as I can.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}