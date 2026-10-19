"use client";

import { useSyncExternalStore } from "react";

type Theme = "auto" | "light" | "dark";

const options: { value: Theme; label: string }[] = [
  { value: "auto", label: "Auto" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getTheme(): Theme {
  const t = document.documentElement.getAttribute("data-theme");
  return t === "light" || t === "dark" ? t : "auto";
}

function getServerTheme(): Theme {
  return "auto";
}

function applyTheme(value: Theme) {
  const root = document.documentElement;
  if (value === "auto") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", value);
  }
  try {
    if (value === "auto") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", value);
    }
  } catch {
    // Storage can be blocked. The choice then lasts for this visit only.
  }
  listeners.forEach((l) => l());
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className="inline-flex gap-0.5 rounded-full border border-night-rule p-[3px]"
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={theme === o.value}
          onClick={() => applyTheme(o.value)}
          className={
            "min-h-9 cursor-pointer rounded-full px-[0.9rem] font-sans text-[0.8125rem] " +
            (theme === o.value
              ? "bg-night-rule text-night-ink"
              : "bg-transparent text-night-soft hover:text-night-ink")
          }
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}