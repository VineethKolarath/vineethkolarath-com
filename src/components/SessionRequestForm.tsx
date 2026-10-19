"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "sending" | "done" | "error";

const label = "block font-sans text-sm font-medium text-ink";
const field =
  "mt-1 block min-h-11 w-full rounded border border-rule bg-surface px-3 py-2 font-sans text-base text-ink focus:outline-2 focus:outline-offset-2 focus:outline-ink";

export default function SessionRequestForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Hidden trap field. Real people never tick it.
    if (data.get("botcheck")) return;

    setStatus("sending");

    const today = new Date()
      .toLocaleDateString("en-GB", { timeZone: "Asia/Kolkata" })
      .replace(/\//g, "-");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New session request",
          from_name: "vineethkolarath.com",
          name: data.get("name"),
          email: data.get("email"),
          who: data.get("who"),
          session: data.get("session"),
          message: data.get("message"),
          consent: "Yes",
          submitted_on: today,
          botcheck: "",
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-5">
      <div>
        <label htmlFor="sr-name" className={label}>
          Your name
        </label>
        <input
          id="sr-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="sr-email" className={label}>
          Your email
        </label>
        <input
          id="sr-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="sr-who" className={label}>
          Who is this session for?
        </label>
        <select id="sr-who" name="who" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose one
          </option>
          <option>School student (Class 1 to 12)</option>
          <option>College student</option>
          <option>Parent or teacher</option>
          <option>Working professional or founder</option>
        </select>
      </div>

      <div>
        <label htmlFor="sr-session" className={label}>
          Which session?
        </label>
        <select id="sr-session" name="session" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose one
          </option>
          <option>10-Minute Intro Call</option>
          <option>30-Minute Session</option>
          <option>Coffee Table Discussion</option>
        </select>
      </div>

      <div>
        <label htmlFor="sr-message" className={label}>
          What would you like to talk about?
        </label>
        <textarea
          id="sr-message"
          name="message"
          required
          rows={5}
          className={field}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="sr-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 size-5 shrink-0"
        />
        <label htmlFor="sr-consent" className="font-sans text-sm text-soft">
          I agree that Vineeth K Kolarath may use these details to reply to me. If this
          request is for a student under 18, I am the parent or guardian. Read the{" "}
          <Link href="/privacy" className="link">
            Privacy page
          </Link>
          .
        </label>
      </div>

      {/* Hidden trap field for spam robots. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-11 items-center rounded-full px-6 font-sans font-medium text-ink ring-1 ring-inset ring-ink hover:ring-2 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send request"}
      </button>

      <p role="status" aria-live="polite" className="m-0 font-sans text-sm text-soft">
        {status === "done"
          ? "Thank you. I have your request. I will reply to you by email."
          : null}
        {status === "error"
          ? "Sorry, the request did not go through. Please try again, or write to connect@vineethkolarath.com."
          : null}
      </p>
    </form>
  );
}