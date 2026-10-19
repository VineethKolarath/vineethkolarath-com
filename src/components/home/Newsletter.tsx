"use client";

import Link from "next/link";
import { useState } from "react";

const topics = ["Writing", "Bench Notes", "Books", "Round Tables", "Webinars"];

type Status = "idle" | "sending" | "done" | "error";

const field =
  "min-h-[52px] w-full min-w-0 rounded-full border border-night-soft bg-transparent px-[1.1rem] py-3 text-base text-night-ink placeholder:text-night-soft";

export default function Newsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const chosen = data.getAll("topics").map(String);

    if (chosen.length === 0) {
      setStatus("error");
      setNote("Please tick at least one topic.");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setNote("This form is not ready yet. Please write to me by email.");
      return;
    }

    setStatus("sending");
    setNote("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New signup: Get notified",
          from_name: "vineethkolarath.com",
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          notify_about: chosen.join(", "),
          consent: "Yes. Agreed to be emailed about the topics ticked.",
          submitted_on: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          botcheck: Boolean(data.get("botcheck")),
        }),
      });
      const result = await res.json();

      if (result.success) {
        form.reset();
        setStatus("done");
        setNote("Thank you. You are on the list.");
      } else {
        setStatus("error");
        setNote("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setNote("Could not send. Please check your internet and try again.");
    }
  }

  return (
    <section className="band night" id="subscribe" aria-labelledby="letter-h">
      <div className="frame grid items-start gap-8 min-[980px]:grid-cols-2 min-[980px]:gap-20">
        <div>
          <p className="eyebrow">Get notified</p>
          <h2
            id="letter-h"
            className="mb-3 mt-0 text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.02em]"
          >
            Hear first when something new is out
          </h2>
          <p className="m-0 text-night-soft">
            Choose what you want to hear about. I write to you only about what you choose.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Spam trap. People never see it. */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div>
            <label htmlFor="notify-name" className="sr-only">
              Your name
            </label>
            <input
              id="notify-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={field}
            />
          </div>

          <div>
            <label htmlFor="notify-email" className="sr-only">
              Email address
            </label>
            <input
              id="notify-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
              className={field}
            />
          </div>

          <fieldset className="m-0 border-0 p-0">
            <legend className="mb-3 p-0 font-sans text-sm text-night-soft">
              Notify me about
            </legend>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <label
                  key={t}
                  className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-night-soft px-4 font-sans text-sm text-night-ink"
                >
                  <input type="checkbox" name="topics" value={t} className="accent-gold" />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="flex items-start gap-3 font-sans text-sm text-night-soft">
            <input type="checkbox" name="consent" required className="mt-1 accent-gold" />
            <span>
              I agree that Vineeth K Kolarath may email me about what I ticked. Read the{" "}
              <Link href="/privacy" className="underline">
                Privacy
              </Link>{" "}
              page.
            </span>
          </label>

          <div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-gold min-h-[52px] max-[420px]:w-full"
            >
              {status === "sending" ? "Sending..." : "Notify me"}
            </button>
          </div>

          <p
            aria-live="polite"
            className="m-0 font-sans text-[0.8125rem] text-night-soft"
          >
            {note || "You can ask me to remove you at any time."}
          </p>
        </form>
      </div>
    </section>
  );
}