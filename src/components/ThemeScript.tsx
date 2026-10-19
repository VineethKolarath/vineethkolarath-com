"use client";

// Runs before the page paints, so the saved Light/Dark choice never flashes.
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
    }
  } catch (e) {}
})();
`;

// The script is built only while the server prepares the page.
// In the browser this renders nothing, so React has no script tag to warn about.
export default function ThemeScript() {
  if (typeof window !== "undefined") return null;

  return (
    <script
      id="theme-init"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}